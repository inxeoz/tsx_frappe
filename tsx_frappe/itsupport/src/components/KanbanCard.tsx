import { useState, memo } from "react";
import {
  MessageSquare,
  Paperclip,
  MoreHorizontal,
  Edit,
  Trash,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Ticket {
  id: number;
  title: string;
  description: string;
  agent: string | null;
  status: string;
  priority: string;
  creationDate: string;
  resolutionDate: string | null;
  tags: string[];
}

interface KanbanCardProps {
  ticket: Ticket;
  onUpdate?: (ticket: Ticket) => void;
  onDelete?: (ticketId: number) => void;
  isDragging?: boolean;
}

const tagColors: Record<string, string> = {
  Reviewed: "bg-slate-500",
  "Awaiting customer": "bg-purple-500",
  Critical: "bg-red-600",
  Removed: "bg-gray-500",
  New: "bg-indigo-500",
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
  "Need reply": "bg-blue-500",
  Resolved: "bg-green-500",
  "Self resolved": "bg-yellow-500",
  Returned: "bg-cyan-500",
};

const priorityColors: Record<string, string> = {
  critical: "bg-red-600",
  high: "bg-red-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
};

export const KanbanCard = memo(function KanbanCard({
  ticket,
  onUpdate,
  onDelete,
  isDragging = false,
}: KanbanCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(ticket.title);
  const [editedDescription, setEditedDescription] = useState(
    ticket.description,
  );

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: ticket.id,
    disabled: isEditing,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getTagColor = (tag: string): string => tagColors[tag] || "bg-gray-500";

  const getPriorityColor = (priority: string): string =>
    priorityColors[priority.toLowerCase()] || "bg-gray-500";

  const handleSave = () => {
    const trimmedTitle = editedTitle.trim();
    const trimmedDescription = editedDescription.trim();

    if (!trimmedTitle) {
      setEditedTitle(ticket.title);
      setIsEditing(false);
      return;
    }

    if (
      onUpdate &&
      (trimmedTitle !== ticket.title ||
        trimmedDescription !== ticket.description)
    ) {
      onUpdate({
        ...ticket,
        title: trimmedTitle,
        description: trimmedDescription,
      });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(ticket.title);
    setEditedDescription(ticket.description);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (
      onDelete &&
      window.confirm("Are you sure you want to delete this ticket?")
    ) {
      onDelete(ticket.id);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleCancel();
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Render drag overlay version
  if (isDragging) {
    return (
      <div className="bg-card rounded-lg p-3 border-2 border-dashed border-primary/50 shadow-lg rotate-2 opacity-90 w-96">
        <h4 className="text-sm font-medium text-foreground leading-tight truncate">
          {ticket.title}
        </h4>
        {ticket.description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
            {ticket.description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={`
        bg-card rounded-lg p-3 border border-border
        hover:border-muted-foreground hover:shadow-md
        transition-all duration-200 cursor-grab active:cursor-grabbing
        group relative
        ${isSortableDragging ? "opacity-50 rotate-1 shadow-lg z-10" : ""}
        ${isEditing ? "ring-2 ring-primary/50" : ""}
      `}
    >
      {/* Drag Handle - only active when not editing */}
      {!isEditing && (
        <div
          {...listeners}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        />
      )}

      {/* Card Header */}
      <div className="flex items-start justify-between mb-2 relative z-10">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyPress}
            className="text-sm font-medium text-foreground leading-tight bg-transparent border-none outline-none w-full focus:bg-accent/20 p-1 rounded"
            autoFocus
            onClick={stopPropagation}
          />
        ) : (
          <h4 className="text-sm font-medium text-foreground leading-tight pr-2">
            {ticket.title}
          </h4>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity relative z-20 shrink-0"
              onClick={stopPropagation}
            >
              <MoreHorizontal className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" onClick={stopPropagation}>
            <DropdownMenuItem onClick={handleEdit}>
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleDelete}
              className="text-red-600 focus:text-red-600"
            >
              <Trash className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Description */}
      {(ticket.description || isEditing) && (
        <div className="mb-3 relative z-10">
          {isEditing ? (
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyPress}
              placeholder="Add description..."
              className="text-xs text-muted-foreground bg-transparent border-none outline-none w-full resize-none focus:bg-accent/20 p-1 rounded min-h-[2rem]"
              rows={2}
              onClick={stopPropagation}
            />
          ) : (
            ticket.description && (
              <p className="text-xs text-muted-foreground line-clamp-2">
                {ticket.description}
              </p>
            )
          )}
        </div>
      )}

      {/* Priority Badge */}
      <div className="flex items-center gap-2 mb-3">
        <Badge
          variant="secondary"
          className={`${getPriorityColor(ticket.priority)} text-white border-none text-xs px-2 py-0.5 capitalize`}
        >
          {ticket.priority}
        </Badge>
      </div>

      {/* Tags */}
      {ticket.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {ticket.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={`${getTagColor(tag)} text-white border-none text-xs px-2 py-0.5`}
            >
              {tag}
            </Badge>
          ))}
          {ticket.tags.length > 3 && (
            <Badge
              variant="secondary"
              className="bg-gray-400 text-white border-none text-xs px-2 py-0.5"
            >
              +{ticket.tags.length - 3}
            </Badge>
          )}
        </div>
      )}

      {/* Card Footer */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="text-muted-foreground border-muted-foreground text-xs"
          >
            {ticket.creationDate}
          </Badge>
          {ticket.resolutionDate && (
            <Badge
              variant="outline"
              className="text-green-600 border-green-600 text-xs"
            >
              Resolved: {ticket.resolutionDate}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-1 text-muted-foreground">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
            onClick={stopPropagation}
          >
            <MessageSquare className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
            onClick={stopPropagation}
          >
            <Paperclip className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Edit Actions */}
      {isEditing && (
        <div className="flex gap-2 mt-3 pt-2 border-t border-border relative z-10">
          <Button
            size="sm"
            onClick={handleSave}
            className="text-xs"
            disabled={!editedTitle.trim()}
          >
            Save (Ctrl+Enter)
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCancel}
            className="text-xs"
          >
            Cancel (Esc)
          </Button>
        </div>
      )}
    </div>
  );
});
