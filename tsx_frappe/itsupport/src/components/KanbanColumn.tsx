import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { KanbanCard } from "./KanbanCard";

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
  count: number;
}

interface KanbanColumnProps {
  column: Column;
  tickets: Ticket[];
}

export function KanbanColumn({ column, tickets }: KanbanColumnProps) {
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
      <div className="bg-background flex-1 border-l border-r border-border p-2 space-y-3 min-h-96">
        {tickets.map((ticket) => (
          <KanbanCard key={ticket.id} ticket={ticket} />
        ))}

        {tickets.length === 0 && (
          <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
            No tickets
          </div>
        )}
      </div>

      {/* Column Footer */}
      <div className="bg-background rounded-b-lg border border-t-0 border-border p-2">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-muted-foreground hover:text-foreground hover:bg-accent"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add ticket
        </Button>
      </div>
    </div>
  );
}
