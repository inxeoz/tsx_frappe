import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface Ticket {
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

interface TicketStore {
  tickets: Ticket[];
  searchQuery: string;
  isSearchActive: boolean;
  activeTicket: Ticket | null;

  // Actions
  setTickets: (tickets: Ticket[]) => void;
  addTicket: (ticket: Ticket) => void;
  updateTicket: (updatedTicket: Ticket) => void;
  deleteTicket: (ticketId: number) => void;
  moveTicket: (ticketId: number, newStatus: string) => void;
  setSearchQuery: (query: string) => void;
  setSearchActive: (active: boolean) => void;
  setActiveTicket: (ticket: Ticket | null) => void;
  clearSearch: () => void;

  // Computed values
  getTicketsByStatus: (status: string) => Ticket[];
  getFilteredTickets: () => Ticket[];
  getTotalTickets: () => number;
  getSearchResultsCount: () => number;
}

const initialTickets: Ticket[] = [
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
  { id: "new", title: "New" },
  { id: "reviewed", title: "Reviewed" },
  { id: "awaiting-customer", title: "Awaiting customer" },
  { id: "need-reply", title: "Need reply" },
  { id: "resolved", title: "Resolved" },
  { id: "self-resolved", title: "Self resolved" },
  { id: "returned", title: "Returned" },
];

export const useTicketStore = create<TicketStore>()(
  devtools(
    (set, get) => ({
      tickets: initialTickets,
      searchQuery: "",
      isSearchActive: false,
      activeTicket: null,

      setTickets: (tickets) => set({ tickets }),

      addTicket: (ticket) =>
        set((state) => ({ tickets: [ticket, ...state.tickets] })),

      updateTicket: (updatedTicket) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) =>
            ticket.id === updatedTicket.id ? updatedTicket : ticket
          ),
        })),

      deleteTicket: (ticketId) =>
        set((state) => ({
          tickets: state.tickets.filter((ticket) => ticket.id !== ticketId),
        })),

      moveTicket: (ticketId, newStatus) =>
        set((state) => {
          const columnTitle = kanbanColumns.find((col) => col.id === newStatus)?.title || newStatus;

          return {
            tickets: state.tickets.map((ticket) =>
              ticket.id === ticketId
                ? {
                    ...ticket,
                    status: newStatus,
                    tags: [columnTitle],
                    resolutionDate:
                      (newStatus === "resolved" || newStatus === "self-resolved") &&
                      !ticket.resolutionDate
                        ? new Date().toLocaleDateString()
                        : newStatus !== "resolved" && newStatus !== "self-resolved"
                          ? null
                          : ticket.resolutionDate,
                  }
                : ticket
            ),
          };
        }),

      setSearchQuery: (query) => set({ searchQuery: query }),

      setSearchActive: (active) => set({ isSearchActive: active }),

      setActiveTicket: (ticket) => set({ activeTicket: ticket }),

      clearSearch: () => set({ searchQuery: "", isSearchActive: false }),

      getTicketsByStatus: (status) => {
        const { tickets, searchQuery } = get();
        const statusTickets = tickets.filter((ticket) => ticket.status === status);

        if (!searchQuery) return statusTickets;

        const query = searchQuery.toLowerCase();
        return statusTickets.filter(
          (ticket) =>
            ticket.title.toLowerCase().includes(query) ||
            ticket.description.toLowerCase().includes(query) ||
            ticket.tags.some((tag) => tag.toLowerCase().includes(query)) ||
            ticket.priority.toLowerCase().includes(query)
        );
      },

      getFilteredTickets: () => {
        const { tickets, searchQuery } = get();

        if (!searchQuery) return tickets;

        const query = searchQuery.toLowerCase();
        return tickets.filter(
          (ticket) =>
            ticket.title.toLowerCase().includes(query) ||
            ticket.description.toLowerCase().includes(query) ||
            ticket.tags.some((tag) => tag.toLowerCase().includes(query)) ||
            ticket.priority.toLowerCase().includes(query)
        );
      },

      getTotalTickets: () => get().tickets.length,

      getSearchResultsCount: () => get().getFilteredTickets().length,
    }),
    {
      name: 'ticket-store',
    }
  )
);
