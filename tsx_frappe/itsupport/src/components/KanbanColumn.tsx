import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { KanbanCard } from "./KanbanCard";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { memo } from "react";

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

interface Column {
  id: string;
  title: string;
  color: string;
}

interface KanbanColumnProps {
  column: Column;
  tickets: Ticket[];
  onAddTicket: (columnId: string) => void;
  onUpdateTicket: (ticket: Ticket) => void;
  onDeleteTicket: (ticketId: number) => void;
}

export const KanbanColumn = memo(function KanbanColumn({
  column,
  tickets,
  onAddTicket,
  onUpdateTicket,
  onDeleteTicket,
}: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  const ticketIds = tickets.map((ticket) => ticket.id);

  const handleAddTicket = () => {
    onAddTicket(column.id);
  };

  const isEmpty = tickets.length === 0;
  const showDropIndicator = isOver && !isEmpty;
  const showEmptyDropZone = isEmpty && isOver;

  return (
    <div className="min-w-96 flex flex-col h-full">
      {/* Column Header */}
      <div className="bg-card rounded-t-lg p-4 border border-border border-b-0 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-6 rounded-sm ${column.color} shadow-sm`} />
            <span className="font-semibold text-foreground">
              {column.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm font-medium bg-muted px-2 py-1 rounded-full min-w-[24px] text-center">
              {tickets.length}
            </span>
          </div>
        </div>
      </div>

      {/* Column Content */}
      <div
        ref={setNodeRef}
        className={`
          bg-muted/30 flex-1 border-l border-r border-border
          transition-all duration-200 ease-in-out
          min-h-[500px] relative
          ${isOver ? "bg-accent/20 border-primary/30" : ""}
          ${showDropIndicator ? "border-2 border-dashed border-primary" : ""}
        `}
      >
        {/* Drop indicator at top when dragging over non-empty column */}
        {showDropIndicator && (
          <div className="h-2 bg-primary/20 border-2 border-dashed border-primary rounded mx-2 mt-2 animate-pulse" />
        )}

        <SortableContext
          items={ticketIds}
          strategy={verticalListSortingStrategy}
        >
          <div className="p-2 space-y-3">
            {tickets.map((ticket) => (
              <KanbanCard
                key={ticket.id}
                ticket={ticket}
                onUpdate={onUpdateTicket}
                onDelete={onDeleteTicket}
              />
            ))}
          </div>
        </SortableContext>

        {/* Empty state with enhanced drop zone */}
        {isEmpty && (
          <div
            className={`
              absolute inset-2 flex items-center justify-center
              rounded-lg border-2 border-dashed transition-all duration-200
              ${
                showEmptyDropZone
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/50 text-muted-foreground"
              }
            `}
          >
            <div className="text-center">
              <div
                className={`
                  text-4xl mb-2 transition-all duration-200
                  ${showEmptyDropZone ? "scale-110" : ""}
                `}
              >
                {showEmptyDropZone ? "📥" : "📋"}
              </div>
              <p className="text-sm font-medium">
                {showEmptyDropZone ? "Drop ticket here" : "No tickets"}
              </p>
              {!showEmptyDropZone && (
                <p className="text-xs mt-1 opacity-70">
                  Drag tickets here or add a new one
                </p>
              )}
            </div>
          </div>
        )}

        {/* Drop indicator at bottom when dragging over non-empty column */}
        {showDropIndicator && (
          <div className="h-2 bg-primary/20 border-2 border-dashed border-primary rounded mx-2 mb-2 animate-pulse" />
        )}
      </div>

      {/* Column Footer */}
      <div className="bg-card rounded-b-lg border border-t-0 border-border p-3 shadow-sm">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors group"
          onClick={handleAddTicket}
        >
          <Plus className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Add ticket
        </Button>
      </div>
    </div>
  );
});
