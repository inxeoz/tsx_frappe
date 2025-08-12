import { useState } from "react";
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

const tagColors = {
  Reviewed: "bg-slate-500",
  "Awaiting customer": "bg-purple-500",
  Critical: "bg-red-600",
  Removed: "bg-gray-500",
  New: "bg-indigo-500",
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

const priorityColors = {
  critical: "bg-red-600",
  high: "bg-red-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
};

export function KanbanCard({
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
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging || isSortableDragging ? 0.5 : 1,
  };

  const getTagColor = (tag: string) =>
    tagColors[tag as keyof typeof tagColors] || "bg-gray-500";

  const getPriorityColor = (priority: string) =>
    priorityColors[priority as keyof typeof priorityColors] || "bg-gray-500";

  const handleSave = () => {
    if (onUpdate) {
      onUpdate({
        ...ticket,
        title: editedTitle.trim() || ticket.title,
        description: editedDescription.trim(),
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
    if (onDelete && confirm("Are you sure you want to delete this ticket?")) {
      onDelete(ticket.id);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (isDragging) {
    return (
      <div className="bg-card rounded-lg p-3 border border-border opacity-50">
        <h4 className="text-sm font-medium text-foreground leading-tight">
          {ticket.title}
        </h4>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-card rounded-lg p-3 border border-border hover:border-muted-foreground transition-colors cursor-grab active:cursor-grabbing group"
    >
      {/* Card Header */}
      <div className="flex items-start justify-between mb-2">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyPress}
            className="text-sm font-medium text-foreground leading-tight bg-transparent border-none outline-none w-full"
            autoFocus
          />
        ) : (
          <h4 className="text-sm font-medium text-foreground leading-tight">
            {ticket.title}
          </h4>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setIsEditing(true)}>
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} className="text-red-600">
              <Trash className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Description */}
      {(ticket.description || isEditing) && (
        <div className="mb-3">
          {isEditing ? (
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyPress}
              placeholder="Add description..."
              className="text-xs text-muted-foreground bg-transparent border-none outline-none w-full resize-none"
              rows={2}
            />
          ) : (
            <p className="text-xs text-muted-foreground line-clamp-2">
              {ticket.description}
            </p>
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
          {ticket.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={`${getTagColor(tag)} text-white border-none text-xs px-2 py-0.5`}
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Card Footer */}
      <div className="flex items-center justify-between">
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
            onClick={(e) => e.stopPropagation()}
          >
            <MessageSquare className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            <Paperclip className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {isEditing && (
        <div className="flex gap-2 mt-2">
          <Button size="sm" onClick={handleSave} className="text-xs">
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
}
