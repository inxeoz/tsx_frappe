import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { KanbanCard } from "./KanbanCard";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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

export function KanbanColumn({
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

  return (
    <div className="min-w-80 flex flex-col">
      {/* Column Header */}
      <div className="bg-card rounded-t-lg p-3 border border-border">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-6 rounded-sm ${column.color}`}></div>
          <span className="font-medium text-foreground">{column.title}</span>
          <span className="text-muted-foreground text-sm">
            {tickets.length}
          </span>
        </div>
      </div>

      {/* Column Content */}
      <div
        ref={setNodeRef}
        className={`bg-background flex-1 border-l border-r border-border p-2 space-y-3 min-h-96 transition-colors ${
          isOver ? "bg-accent/50" : ""
        }`}
      >
        <SortableContext
          items={ticketIds}
          strategy={verticalListSortingStrategy}
        >
          {tickets.map((ticket) => (
            <KanbanCard
              key={ticket.id}
              ticket={ticket}
              onUpdate={onUpdateTicket}
              onDelete={onDeleteTicket}
            />
          ))}
        </SortableContext>

        {tickets.length === 0 && (
          <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
            {isOver ? "Drop ticket here" : "No tickets"}
          </div>
        )}
      </div>

      {/* Column Footer */}
      <div className="bg-background rounded-b-lg border border-t-0 border-border p-2">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-muted-foreground hover:text-foreground hover:bg-accent"
          onClick={handleAddTicket}
        >
          <Plus className="w-4 h-4 mr-1" />
          Add ticket
        </Button>
      </div>
    </div>
  );
}
