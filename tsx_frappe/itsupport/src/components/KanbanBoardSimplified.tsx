import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Toolbar } from "./ui/toolbar";
import { KanbanColumn } from "./KanbanColumn";
import { useTicketStore, type Ticket } from "../stores/ticketStore";
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

export function KanbanBoardSimplified() {
  // Use Zustand store - much cleaner than multiple useState hooks
  const {
    searchQuery,
    isSearchActive,
    activeTicket,
    setSearchQuery,
    setSearchActive,
    setActiveTicket,
    clearSearch,
    getTicketsByStatus,
    getTotalTickets,
    getSearchResultsCount,
    addTicket,
    updateTicket,
    deleteTicket,
    moveTicket,
  } = useTicketStore();

  // Simplified sensor setup
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  // Simplified event handlers using store actions
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const ticketId = Number(active.id);
    const tickets = [...getTicketsByStatus("new"), ...getTicketsByStatus("reviewed"), ...getTicketsByStatus("awaiting-customer"), ...getTicketsByStatus("need-reply"), ...getTicketsByStatus("resolved"), ...getTicketsByStatus("self-resolved"), ...getTicketsByStatus("returned")];
    const ticket = tickets.find((t) => t.id === ticketId);
    if (ticket) setActiveTicket(ticket);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTicket(null);

    if (!over || !active) return;

    const activeTicketId = Number(active.id);
    const overColumnId = String(over.id);

    moveTicket(activeTicketId, overColumnId);
  };

  const handleDragCancel = (_event: DragCancelEvent) => {
    setActiveTicket(null);
  };

  const addNewTicket = (columnId: string) => {
    const columnTitle = kanbanColumns.find((col) => col.id === columnId)?.title || columnId;
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

    addTicket(newTicket);
  };

  const toggleSearch = () => {
    if (isSearchActive) {
      clearSearch();
    } else {
      setSearchActive(true);
    }
  };

  // Simplified toolbar configuration
  const toolbarSections = [
    {
      id: "left-actions",
      align: "left" as const,
      actions: isSearchActive
        ? [{ id: "search-input", text: "", onClick: () => {}, className: "p-0 hover:bg-transparent" }]
        : [
            { id: "search", icon: Search, text: "Search", onClick: toggleSearch },
            { id: "filter", icon: Filter, text: "Filter", onClick: () => console.log("Filter clicked") },
            { id: "more", icon: MoreHorizontal, onClick: () => console.log("More options clicked") },
          ],
    },
    {
      id: "right-actions",
      align: "right" as const,
      actions: [
        {
          id: "total-tickets",
          text: `${getTotalTickets()} total tickets`,
          onClick: () => {},
          className: "text-sm text-muted-foreground hover:bg-transparent cursor-default",
        },
        { id: "analytics", icon: "📊", onClick: () => console.log("Analytics clicked") },
        { id: "view-options", icon: "👁️", onClick: () => console.log("View options clicked") },
        { id: "export", icon: "⬆", onClick: () => console.log("Export clicked") },
      ],
    },
  ];

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="flex flex-col h-full bg-background">
        {/* Toolbar with Framer Motion animations */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Toolbar sections={toolbarSections} className="shadow-sm">
            <AnimatePresence>
              {isSearchActive && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search tickets..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent w-80"
                      autoFocus
                    />
                    {searchQuery && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        ×
                      </motion.button>
                    )}
                  </div>
                  <AnimatePresence>
                    {searchQuery && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-sm text-muted-foreground"
                      >
                        {getSearchResultsCount()} of {getTotalTickets()} tickets
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleSearch}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cancel
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Toolbar>
        </motion.div>

        {/* Kanban Board with Framer Motion */}
        <div className="flex-1 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex gap-6 p-6 min-w-max h-full"
          >
            {kanbanColumns.map((column, index) => (
              <motion.div
                key={column.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <KanbanColumn
                  column={column}
                  tickets={getTicketsByStatus(column.id)}
                  onAddTicket={addNewTicket}
                  onUpdateTicket={updateTicket}
                  onDeleteTicket={deleteTicket}
                />
              </motion.div>
            ))}

            {/* Add Column Button with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: kanbanColumns.length * 0.05 }}
              className="min-w-80"
            >
              <Button
                variant="ghost"
                className="w-full h-12 border-2 border-dashed border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add column
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Drag Overlay with animation */}
        <DragOverlay>
          <AnimatePresence>
            {activeTicket && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <KanbanCard ticket={activeTicket} isDragging />
              </motion.div>
            )}
          </AnimatePresence>
        </DragOverlay>
      </div>
    </DndContext>
  );
}
