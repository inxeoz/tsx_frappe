import { useState, useCallback, useMemo } from "react";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Toolbar } from "./ui/toolbar";
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
  DragCancelEvent,
  closestCorners,
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
    title: "Job issue",
    description: "Critical server downtime affecting production systems",
    agent: null,
    status: "reviewed",
    priority: "high",
    creationDate: "Aug 7",
    resolutionDate: null,
    tags: ["Reviewed", "High"],
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
    tags: ["Resolved"],
  },
  {
    id: 5,
    title: "Network connectivity issues",
    description: "Help me please - can't connect to the office network",
    agent: null,
    status: "new",
    priority: "high",
    creationDate: "Nov 15, 2024",
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
] as const;

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

  // Memoize filtered tickets for better performance
  const filteredTicketsByColumn = useMemo(() => {
    const columnTickets: Record<string, Ticket[]> = {};

    kanbanColumns.forEach((column) => {
      const columnTicketList = tickets.filter(
        (ticket) => ticket.status === column.id,
      );

      if (!searchQuery) {
        columnTickets[column.id] = columnTicketList;
      } else {
        const query = searchQuery.toLowerCase();
        columnTickets[column.id] = columnTicketList.filter(
          (ticket) =>
            ticket.title.toLowerCase().includes(query) ||
            ticket.description.toLowerCase().includes(query) ||
            ticket.tags.some((tag) => tag.toLowerCase().includes(query)) ||
            ticket.priority.toLowerCase().includes(query),
        );
      }
    });

    return columnTickets;
  }, [tickets, searchQuery]);

  const getTicketsForColumn = useCallback(
    (columnId: string) => filteredTicketsByColumn[columnId] || [],
    [filteredTicketsByColumn],
  );

  const addNewTicket = useCallback((columnId: string) => {
    const columnTitle =
      kanbanColumns.find((col) => col.id === columnId)?.title || columnId;
    const newTicket: Ticket = {
      id: Date.now(),
      title: "New Ticket",
      description: "",
      agent: null,
      status: columnId,
      priority: "medium",
      creationDate: new Date().toLocaleDateString(),
      resolutionDate:
        columnId === "resolved" || columnId === "self-resolved"
          ? new Date().toLocaleDateString()
          : null,
      tags: [columnTitle],
    };

    setTickets((prev) => [newTicket, ...prev]);
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
    if (ticket) {
      setActiveTicket(ticket);
    }
  }

  function handleDragOver(_event: DragOverEvent) {
    // Visual feedback is handled by individual column's isOver state
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    setActiveTicket(null);

    if (!over || !active) return;

    const activeTicketId = Number(active.id);
    const overColumnId = String(over.id);

    // Find the active ticket
    const activeTicket = tickets.find((t) => t.id === activeTicketId);
    if (!activeTicket) return;

    // Only update if the status actually changed
    if (activeTicket.status !== overColumnId) {
      const columnTitle =
        kanbanColumns.find((col) => col.id === overColumnId)?.title ||
        overColumnId;

      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === activeTicketId
            ? {
                ...ticket,
                status: overColumnId,
                tags: [columnTitle],
                // Set resolution date for resolved columns
                resolutionDate:
                  (overColumnId === "resolved" ||
                    overColumnId === "self-resolved") &&
                  !ticket.resolutionDate
                    ? new Date().toLocaleDateString()
                    : overColumnId !== "resolved" &&
                        overColumnId !== "self-resolved"
                      ? null
                      : ticket.resolutionDate,
              }
            : ticket,
        ),
      );
    }
  }

  function handleDragCancel(_event: DragCancelEvent) {
    setActiveTicket(null);
  }

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const toggleSearch = useCallback(() => {
    setIsSearchActive((prev) => {
      if (prev) {
        setSearchQuery("");
      }
      return !prev;
    });
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setIsSearchActive(false);
  }, []);

  const totalTickets = tickets.length;
  const searchResultsCount = useMemo(() => {
    if (!searchQuery) return totalTickets;
    return Object.values(filteredTicketsByColumn).reduce(
      (acc, tickets) => acc + tickets.length,
      0,
    );
  }, [filteredTicketsByColumn, searchQuery, totalTickets]);

  const toolbarSections = [
    {
      id: "left-actions",
      align: "left" as const,
      actions: isSearchActive
        ? [
            {
              id: "search-input",
              text: "",
              onClick: () => {},
              className: "p-0 hover:bg-transparent",
            },
          ]
        : [
            {
              id: "search",
              icon: Search,
              text: "Search",
              onClick: toggleSearch,
            },
            {
              id: "filter",
              icon: Filter,
              text: "Filter",
              onClick: () => console.log("Filter clicked"),
            },
            {
              id: "more",
              icon: MoreHorizontal,
              onClick: () => console.log("More options clicked"),
            },
          ],
    },
    {
      id: "right-actions",
      align: "right" as const,
      actions: [
        {
          id: "total-tickets",
          text: `${totalTickets} total tickets`,
          onClick: () => {},
          className:
            "text-sm text-muted-foreground hover:bg-transparent cursor-default",
        },
        {
          id: "analytics",
          icon: "📊",
          onClick: () => console.log("Analytics clicked"),
        },
        {
          id: "view-options",
          icon: "👁️",
          onClick: () => console.log("View options clicked"),
        },
        {
          id: "export",
          icon: "⬆",
          onClick: () => console.log("Export clicked"),
        },
      ],
    },
  ];

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="flex flex-col h-full bg-background">
        {/* Toolbar */}
        <Toolbar sections={toolbarSections} className="shadow-sm">
          {isSearchActive && (
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent w-80"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </button>
                )}
              </div>
              {searchQuery && (
                <span className="text-sm text-muted-foreground">
                  {searchResultsCount} of {totalTickets} tickets
                </span>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSearch}
                className="text-muted-foreground hover:text-foreground"
              >
                Cancel
              </Button>
            </div>
          )}
        </Toolbar>

        {/* Kanban Board */}
        <div className="flex-1 overflow-auto">
          <div className="flex gap-6 p-6 min-w-max h-full">
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

            {/* Add Column Button */}
            <div className="min-w-80">
              <Button
                variant="ghost"
                className="w-full h-12 border-2 border-dashed border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add column
              </Button>
            </div>
          </div>
        </div>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeTicket ? (
            <KanbanCard ticket={activeTicket} isDragging />
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}
