import { useState, useCallback } from "react";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { KanbanColumn } from "./KanbanColumn";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

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

const initialTicketData: Ticket[] = [
  {
    id: 1,
    title: "Request for access - new employee",
    description: "Hello team, We have a new employee joining our Creative ...",
    agent: null,
    status: "reviewed",
    priority: "medium",
    creationDate: "May 4, 2024",
    resolutionDate: null,
    tags: ["Reviewed"],
  },
  {
    id: 2,
    title: "job issue",
    description: "",
    agent: null,
    status: "reviewed",
    priority: "high",
    creationDate: "Aug 7",
    resolutionDate: null,
    tags: ["Reviewed"],
  },
  {
    id: 3,
    title: "SSO not working after new security audit",
    description:
      "Our entire team is locked out of our SaaS applications and thinks ...",
    agent: null,
    status: "awaiting-customer",
    priority: "critical",
    creationDate: "Apr 23, 2024",
    resolutionDate: null,
    tags: ["Awaiting customer", "Critical"],
  },
  {
    id: 4,
    title: "I need help with my laptop",
    description:
      "Hi team! So some reason I can't restart my laptop. The screen just ...",
    agent: null,
    status: "resolved",
    priority: "low",
    creationDate: "Apr 10, 2024",
    resolutionDate: "Apr 15, 2024",
    tags: ["Removed"],
  },
  {
    id: 5,
    title: "rt",
    description: "Help me pls",
    agent: null,
    status: "new",
    priority: "high",
    creationDate: "Critical",
    resolutionDate: null,
    tags: ["New", "High"],
  },
];

const kanbanColumns = [
  {
    id: "new",
    title: "New",
    color: "bg-indigo-500",
  },
  {
    id: "reviewed",
    title: "Reviewed",
    color: "bg-slate-500",
  },
  {
    id: "awaiting-customer",
    title: "Awaiting customer",
    color: "bg-purple-500",
  },
  {
    id: "need-reply",
    title: "Need reply",
    color: "bg-blue-500",
  },
  {
    id: "resolved",
    title: "Resolved",
    color: "bg-green-500",
  },
  {
    id: "self-resolved",
    title: "Self resolved",
    color: "bg-yellow-500",
  },
  {
    id: "returned",
    title: "Returned",
    color: "bg-cyan-500",
  },
];

export function KanbanBoard() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTicketData);
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const getTicketsForColumn = useCallback(
    (columnId: string) => {
      const filteredTickets = tickets.filter(
        (ticket) => ticket.status === columnId,
      );

      if (!searchQuery) {
        return filteredTickets;
      }

      return filteredTickets.filter(
        (ticket) =>
          ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ticket.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          ticket.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    },
    [tickets, searchQuery],
  );

  const addNewTicket = useCallback((columnId: string) => {
    const newTicket: Ticket = {
      id: Date.now(), // Simple ID generation
      title: "New Ticket",
      description: "",
      agent: null,
      status: columnId,
      priority: "medium",
      creationDate: new Date().toLocaleDateString(),
      resolutionDate: null,
      tags: [kanbanColumns.find((col) => col.id === columnId)?.title || ""],
    };

    setTickets((prev) => [...prev, newTicket]);
  }, []);

  const updateTicket = useCallback((updatedTicket: Ticket) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === updatedTicket.id ? updatedTicket : ticket,
      ),
    );
  }, []);

  const deleteTicket = useCallback((ticketId: number) => {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
  }, []);

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const ticket = tickets.find((t) => t.id === Number(active.id));
    setActiveTicket(ticket || null);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;

    if (!over) return;

    const activeTicketId = Number(active.id);
    const overColumnId = String(over.id);

    const activeTicket = tickets.find((t) => t.id === activeTicketId);

    if (!activeTicket) return;

    // If we're dragging over a different column, update the ticket's status
    if (activeTicket.status !== overColumnId) {
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === activeTicketId
            ? { ...ticket, status: overColumnId }
            : ticket,
        ),
      );
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    setActiveTicket(null);

    if (!over) return;

    const activeTicketId = Number(active.id);
    const overColumnId = String(over.id);

    // Final update to ensure the ticket is in the correct column
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === activeTicketId
          ? {
              ...ticket,
              status: overColumnId,
              // Update tags to reflect new status
              tags: [
                kanbanColumns.find((col) => col.id === overColumnId)?.title ||
                  overColumnId,
              ],
            }
          : ticket,
      ),
    );
  }

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const toggleSearch = useCallback(() => {
    setIsSearchActive(!isSearchActive);
    if (isSearchActive) {
      setSearchQuery("");
    }
  }, [isSearchActive]);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col h-full">
        {/* Toolbar */}
        <div className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isSearchActive ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search tickets..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="px-3 py-1 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleSearch}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleSearch}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Search className="w-4 h-4 mr-1" />
                    Search
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Filter className="w-4 h-4 mr-1" />
                    Filter
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                📊
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                👁️
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                ⬆
              </Button>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 overflow-auto">
          <div className="flex gap-4 p-4 min-w-max">
            {kanbanColumns.map((column) => (
              <KanbanColumn
                key={column.id}
                column={column}
                tickets={getTicketsForColumn(column.id)}
                onAddTicket={addNewTicket}
                onUpdateTicket={updateTicket}
                onDeleteTicket={deleteTicket}
              />
            ))}

            <div className="min-w-80">
              <Button
                variant="ghost"
                className="w-full h-12 border-2 border-dashed border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add folder
              </Button>
            </div>
          </div>
        </div>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeTicket ? (
            <div className="rotate-5 opacity-80">
              <KanbanCard ticket={activeTicket} isDragging />
            </div>
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}
