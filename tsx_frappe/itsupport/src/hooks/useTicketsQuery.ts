import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { toast } from 'sonner';

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

// Mock API functions (replace with real API calls)
const ticketApi = {
  getAll: async (): Promise<Ticket[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
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
        description: "Our entire team is locked out of our SaaS applications and thinks ...",
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
        description: "Hi team! So some reason I can't restart my laptop. The screen just ...",
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
  },

  create: async (ticket: Omit<Ticket, 'id'>): Promise<Ticket> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { ...ticket, id: Date.now() };
  },

  update: async (id: number, updates: Partial<Ticket>): Promise<Ticket> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    // In real implementation, this would make an API call
    throw new Error('Update endpoint not implemented');
  },

  delete: async (id: number): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    // In real implementation, this would make an API call
  },

  move: async (id: number, newStatus: string): Promise<Ticket> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    // In real implementation, this would make an API call
    throw new Error('Move endpoint not implemented');
  }
};

// Query keys for caching
export const ticketKeys = {
  all: ['tickets'] as const,
  byStatus: (status: string) => ['tickets', 'status', status] as const,
  byId: (id: number) => ['tickets', id] as const,
} as const;

export function useTicketsQuery() {
  const queryClient = useQueryClient();

  // Get all tickets with caching and background refetch
  const {
    data: tickets = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ticketKeys.all,
    queryFn: ticketApi.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });

  // Create ticket mutation
  const createTicketMutation = useMutation({
    mutationFn: ticketApi.create,
    onSuccess: (newTicket) => {
      // Optimistically update cache
      queryClient.setQueryData(ticketKeys.all, (old: Ticket[] = []) => [
        newTicket,
        ...old,
      ]);
      toast.success('Ticket created successfully');
    },
    onError: (error) => {
      toast.error('Failed to create ticket');
      console.error('Create ticket error:', error);
    },
  });

  // Update ticket mutation
  const updateTicketMutation = useMutation({
    mutationFn: ({ id, updates }: { id: number; updates: Partial<Ticket> }) =>
      ticketApi.update(id, updates),
    onMutate: async ({ id, updates }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ticketKeys.all });

      // Snapshot previous value
      const previousTickets = queryClient.getQueryData(ticketKeys.all);

      // Optimistically update
      queryClient.setQueryData(ticketKeys.all, (old: Ticket[] = []) =>
        old.map((ticket) =>
          ticket.id === id ? { ...ticket, ...updates } : ticket
        )
      );

      return { previousTickets };
    },
    onError: (error, variables, context) => {
      // Rollback on error
      if (context?.previousTickets) {
        queryClient.setQueryData(ticketKeys.all, context.previousTickets);
      }
      toast.error('Failed to update ticket');
    },
    onSettled: () => {
      // Refetch after mutation
      queryClient.invalidateQueries({ queryKey: ticketKeys.all });
    },
  });

  // Delete ticket mutation
  const deleteTicketMutation = useMutation({
    mutationFn: ticketApi.delete,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ticketKeys.all });
      const previousTickets = queryClient.getQueryData(ticketKeys.all);

      queryClient.setQueryData(ticketKeys.all, (old: Ticket[] = []) =>
        old.filter((ticket) => ticket.id !== id)
      );

      return { previousTickets };
    },
    onError: (error, id, context) => {
      if (context?.previousTickets) {
        queryClient.setQueryData(ticketKeys.all, context.previousTickets);
      }
      toast.error('Failed to delete ticket');
    },
    onSuccess: () => {
      toast.success('Ticket deleted successfully');
    },
  });

  // Move ticket to different status
  const moveTicketMutation = useMutation({
    mutationFn: ({ id, newStatus }: { id: number; newStatus: string }) =>
      ticketApi.move(id, newStatus),
    onMutate: async ({ id, newStatus }) => {
      await queryClient.cancelQueries({ queryKey: ticketKeys.all });
      const previousTickets = queryClient.getQueryData(ticketKeys.all);

      const columnTitles = {
        new: "New",
        reviewed: "Reviewed",
        "awaiting-customer": "Awaiting customer",
        "need-reply": "Need reply",
        resolved: "Resolved",
        "self-resolved": "Self resolved",
        returned: "Returned",
      };

      queryClient.setQueryData(ticketKeys.all, (old: Ticket[] = []) =>
        old.map((ticket) =>
          ticket.id === id
            ? {
                ...ticket,
                status: newStatus,
                tags: [columnTitles[newStatus as keyof typeof columnTitles] || newStatus],
                resolutionDate:
                  (newStatus === "resolved" || newStatus === "self-resolved") &&
                  !ticket.resolutionDate
                    ? new Date().toLocaleDateString()
                    : newStatus !== "resolved" && newStatus !== "self-resolved"
                      ? null
                      : ticket.resolutionDate,
              }
            : ticket
        )
      );

      return { previousTickets };
    },
    onError: (error, variables, context) => {
      if (context?.previousTickets) {
        queryClient.setQueryData(ticketKeys.all, context.previousTickets);
      }
      toast.error('Failed to move ticket');
    },
  });

  // Helper functions with React Query benefits
  const getTicketsByStatus = useCallback(
    (status: string): Ticket[] => {
      return tickets.filter((ticket) => ticket.status === status);
    },
    [tickets]
  );

  const getFilteredTickets = useCallback(
    (searchQuery: string): Ticket[] => {
      if (!searchQuery.trim()) return tickets;

      const query = searchQuery.toLowerCase();
      return tickets.filter(
        (ticket) =>
          ticket.title.toLowerCase().includes(query) ||
          ticket.description.toLowerCase().includes(query) ||
          ticket.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          ticket.priority.toLowerCase().includes(query)
      );
    },
    [tickets]
  );

  const createTicket = useCallback(
    (ticketData: Omit<Ticket, 'id'>) => {
      createTicketMutation.mutate(ticketData);
    },
    [createTicketMutation]
  );

  const updateTicket = useCallback(
    (id: number, updates: Partial<Ticket>) => {
      updateTicketMutation.mutate({ id, updates });
    },
    [updateTicketMutation]
  );

  const deleteTicket = useCallback(
    (id: number) => {
      deleteTicketMutation.mutate(id);
    },
    [deleteTicketMutation]
  );

  const moveTicket = useCallback(
    (id: number, newStatus: string) => {
      moveTicketMutation.mutate({ id, newStatus });
    },
    [moveTicketMutation]
  );

  return {
    // Data
    tickets,
    isLoading,
    error,

    // Actions
    createTicket,
    updateTicket,
    deleteTicket,
    moveTicket,
    refetch,

    // Helpers
    getTicketsByStatus,
    getFilteredTickets,

    // Mutation states
    isCreating: createTicketMutation.isPending,
    isUpdating: updateTicketMutation.isPending,
    isDeleting: deleteTicketMutation.isPending,
    isMoving: moveTicketMutation.isPending,

    // Computed values
    totalTickets: tickets.length,
    ticketsByStatus: {
      new: getTicketsByStatus('new'),
      reviewed: getTicketsByStatus('reviewed'),
      'awaiting-customer': getTicketsByStatus('awaiting-customer'),
      'need-reply': getTicketsByStatus('need-reply'),
      resolved: getTicketsByStatus('resolved'),
      'self-resolved': getTicketsByStatus('self-resolved'),
      returned: getTicketsByStatus('returned'),
    },
  };
}
