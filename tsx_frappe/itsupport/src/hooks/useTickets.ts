/**
 * Custom hook for managing tickets with optimized state handling
 *
 * This hook provides a centralized way to manage ticket state, including
 * CRUD operations, filtering, searching, and caching for better performance.
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import {
  Ticket,
  TicketStatus,
  TicketFilter,
  TicketSort,
  UseTicketsReturn,
  TicketPriority
} from '../types';

// =============================================================================
// CONSTANTS
// =============================================================================

const DEFAULT_TICKETS: Ticket[] = [
  {
    id: 1,
    title: "Request for access - new employee",
    description: "Hello team, We have a new employee joining our Creative department...",
    agent: null,
    status: TicketStatus.REVIEWED,
    priority: TicketPriority.MEDIUM,
    creationDate: "May 4, 2024",
    resolutionDate: null,
    tags: ["Reviewed"],
    createdAt: "2024-05-04T00:00:00Z",
    updatedAt: "2024-05-04T00:00:00Z"
  },
  {
    id: 2,
    title: "Job issue - Critical server downtime",
    description: "Critical server downtime affecting production systems",
    agent: null,
    status: TicketStatus.REVIEWED,
    priority: TicketPriority.HIGH,
    creationDate: "Aug 7, 2024",
    resolutionDate: null,
    tags: ["Reviewed", "High"],
    createdAt: "2024-08-07T00:00:00Z",
    updatedAt: "2024-08-07T00:00:00Z"
  },
  {
    id: 3,
    title: "SSO not working after new security audit",
    description: "Our entire team is locked out of our SaaS applications and thinks...",
    agent: null,
    status: TicketStatus.AWAITING_CUSTOMER,
    priority: TicketPriority.CRITICAL,
    creationDate: "Apr 23, 2024",
    resolutionDate: null,
    tags: ["Awaiting customer", "Critical"],
    createdAt: "2024-04-23T00:00:00Z",
    updatedAt: "2024-04-23T00:00:00Z"
  },
  {
    id: 4,
    title: "I need help with my laptop",
    description: "Hi team! So some reason I can't restart my laptop. The screen just...",
    agent: "Jane Smith",
    status: TicketStatus.RESOLVED,
    priority: TicketPriority.LOW,
    creationDate: "Apr 10, 2024",
    resolutionDate: "Apr 15, 2024",
    tags: ["Resolved"],
    createdAt: "2024-04-10T00:00:00Z",
    updatedAt: "2024-04-15T00:00:00Z"
  },
  {
    id: 5,
    title: "Network connectivity issues",
    description: "Help me please - can't connect to the office network",
    agent: null,
    status: TicketStatus.NEW,
    priority: TicketPriority.HIGH,
    creationDate: "Nov 15, 2024",
    resolutionDate: null,
    tags: ["New", "High"],
    createdAt: "2024-11-15T00:00:00Z",
    updatedAt: "2024-11-15T00:00:00Z"
  }
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Generate a unique ID for new tickets
 */
const generateTicketId = (): number => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

/**
 * Create a new ticket with default values
 */
const createNewTicket = (partial: Partial<Ticket>): Ticket => {
  const now = new Date().toISOString();
  const creationDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return {
    id: generateTicketId(),
    title: "New Ticket",
    description: "",
    agent: null,
    status: TicketStatus.NEW,
    priority: TicketPriority.MEDIUM,
    creationDate,
    resolutionDate: null,
    tags: ["New"],
    createdAt: now,
    updatedAt: now,
    ...partial
  };
};

/**
 * Check if ticket matches search query
 */
const matchesSearchQuery = (ticket: Ticket, query: string): boolean => {
  if (!query.trim()) return true;

  const searchText = query.toLowerCase();
  return (
    ticket.title.toLowerCase().includes(searchText) ||
    ticket.description.toLowerCase().includes(searchText) ||
    ticket.tags.some(tag => tag.toLowerCase().includes(searchText)) ||
    ticket.priority.toLowerCase().includes(searchText) ||
    (ticket.agent && ticket.agent.toLowerCase().includes(searchText))
  );
};

/**
 * Apply filters to tickets
 */
const applyFilters = (tickets: Ticket[], filters: TicketFilter): Ticket[] => {
  return tickets.filter(ticket => {
    // Status filter
    if (filters.status && filters.status.length > 0) {
      if (!filters.status.includes(ticket.status)) return false;
    }

    // Priority filter
    if (filters.priority && filters.priority.length > 0) {
      if (!filters.priority.includes(ticket.priority)) return false;
    }

    // Agent filter
    if (filters.agent && filters.agent.length > 0) {
      if (!ticket.agent || !filters.agent.includes(ticket.agent)) return false;
    }

    // Date range filter
    if (filters.dateRange) {
      const ticketDate = new Date(ticket.creationDate);
      const startDate = new Date(filters.dateRange.start);
      const endDate = new Date(filters.dateRange.end);

      if (ticketDate < startDate || ticketDate > endDate) return false;
    }

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(filterTag =>
        ticket.tags.some(ticketTag =>
          ticketTag.toLowerCase().includes(filterTag.toLowerCase())
        )
      );
      if (!hasMatchingTag) return false;
    }

    return true;
  });
};

/**
 * Sort tickets based on sort configuration
 */
const sortTickets = (tickets: Ticket[], sort: TicketSort): Ticket[] => {
  return [...tickets].sort((a, b) => {
    const aValue = a[sort.field];
    const bValue = b[sort.field];

    let comparison = 0;

    if (aValue < bValue) comparison = -1;
    else if (aValue > bValue) comparison = 1;

    return sort.direction === 'desc' ? -comparison : comparison;
  });
};

// =============================================================================
// HOOK OPTIONS INTERFACE
// =============================================================================

interface UseTicketsOptions {
  /** Initial tickets to load */
  initialTickets?: Ticket[];
  /** Enable local storage persistence */
  enablePersistence?: boolean;
  /** Local storage key for persistence */
  storageKey?: string;
  /** Enable optimistic updates */
  enableOptimisticUpdates?: boolean;
  /** Debounce delay for search in milliseconds */
  searchDebounceMs?: number;
}

// =============================================================================
// MAIN HOOK
// =============================================================================

/**
 * Custom hook for managing tickets with advanced functionality
 */
export const useTickets = (options: UseTicketsOptions = {}): UseTicketsReturn => {
  const {
    initialTickets = DEFAULT_TICKETS,
    enablePersistence = true,
    storageKey = 'it-support-tickets',
    enableOptimisticUpdates = true,
    searchDebounceMs = 300
  } = options;

  // ==========================================================================
  // STATE
  // ==========================================================================

  const [tickets, setTickets] = useState<Ticket[]>(() => {
    if (enablePersistence) {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
          return JSON.parse(stored);
        }
      } catch (error) {
        console.warn('Failed to load tickets from localStorage:', error);
      }
    }
    return initialTickets;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<TicketFilter>({});
  const [sort, setSort] = useState<TicketSort>({
    field: 'createdAt',
    direction: 'desc'
  });

  // Refs for debouncing and optimization
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  const ticketsRef = useRef(tickets);

  // Keep tickets ref updated for callbacks
  useEffect(() => {
    ticketsRef.current = tickets;
  }, [tickets]);

  // Persist tickets to localStorage
  useEffect(() => {
    if (enablePersistence) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(tickets));
      } catch (error) {
        console.warn('Failed to persist tickets to localStorage:', error);
      }
    }
  }, [tickets, enablePersistence, storageKey]);

  // ==========================================================================
  // COMPUTED VALUES
  // ==========================================================================

  /**
   * Get filtered and sorted tickets based on current state
   */
  const processedTickets = useMemo(() => {
    let result = tickets;

    // Apply filters
    if (Object.keys(filters).length > 0) {
      result = applyFilters(result, filters);
    }

    // Apply search
    if (searchQuery.trim()) {
      result = result.filter(ticket => matchesSearchQuery(ticket, searchQuery));
    }

    // Apply sorting
    result = sortTickets(result, sort);

    return result;
  }, [tickets, filters, searchQuery, sort]);

  // ==========================================================================
  // ACTIONS
  // ==========================================================================

  /**
   * Add a new ticket to the collection
   */
  const addTicket = useCallback((ticketData: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      setLoading(true);
      setError(null);

      const newTicket = createNewTicket(ticketData);

      if (enableOptimisticUpdates) {
        setTickets(prev => [newTicket, ...prev]);
      }

      // Here you would typically make an API call
      // For now, we just simulate success
      setTimeout(() => {
        setLoading(false);
      }, 100);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add ticket');
      setLoading(false);
    }
  }, [enableOptimisticUpdates]);

  /**
   * Update an existing ticket
   */
  const updateTicket = useCallback((id: string | number, updates: Partial<Ticket>) => {
    try {
      setLoading(true);
      setError(null);

      const updatedTicket = {
        ...updates,
        updatedAt: new Date().toISOString()
      };

      if (enableOptimisticUpdates) {
        setTickets(prev => prev.map(ticket =>
          ticket.id === id
            ? { ...ticket, ...updatedTicket }
            : ticket
        ));
      }

      // Handle status changes that affect resolution date
      if (updates.status) {
        const isResolvedStatus = updates.status === TicketStatus.RESOLVED ||
                                updates.status === TicketStatus.SELF_RESOLVED;

        if (isResolvedStatus && !updatedTicket.resolutionDate) {
          updatedTicket.resolutionDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });
        } else if (!isResolvedStatus) {
          updatedTicket.resolutionDate = null;
        }
      }

      setTimeout(() => {
        setLoading(false);
      }, 100);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update ticket');
      setLoading(false);
    }
  }, [enableOptimisticUpdates]);

  /**
   * Delete a ticket
   */
  const deleteTicket = useCallback((id: string | number) => {
    try {
      setLoading(true);
      setError(null);

      if (enableOptimisticUpdates) {
        setTickets(prev => prev.filter(ticket => ticket.id !== id));
      }

      setTimeout(() => {
        setLoading(false);
      }, 100);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete ticket');
      setLoading(false);
    }
  }, [enableOptimisticUpdates]);

  /**
   * Filter tickets with a custom predicate function
   */
  const filterTickets = useCallback((predicate: (ticket: Ticket) => boolean): Ticket[] => {
    return ticketsRef.current.filter(predicate);
  }, []);

  /**
   * Search tickets with debounced query
   */
  const searchTickets = useCallback((query: string): Ticket[] => {
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set up new timeout for debounced search
    searchTimeoutRef.current = setTimeout(() => {
      setSearchQuery(query);
    }, searchDebounceMs);

    // Return immediate results for synchronous usage
    return ticketsRef.current.filter(ticket => matchesSearchQuery(ticket, query));
  }, [searchDebounceMs]);

  // ==========================================================================
  // ADDITIONAL UTILITY METHODS
  // ==========================================================================

  /**
   * Get tickets by status
   */
  const getTicketsByStatus = useCallback((status: TicketStatus): Ticket[] => {
    return filterTickets(ticket => ticket.status === status);
  }, [filterTickets]);

  /**
   * Get tickets by priority
   */
  const getTicketsByPriority = useCallback((priority: TicketPriority): Ticket[] => {
    return filterTickets(ticket => ticket.priority === priority);
  }, [filterTickets]);

  /**
   * Get tickets assigned to an agent
   */
  const getTicketsByAgent = useCallback((agent: string): Ticket[] => {
    return filterTickets(ticket => ticket.agent === agent);
  }, [filterTickets]);

  /**
   * Get unassigned tickets
   */
  const getUnassignedTickets = useCallback((): Ticket[] => {
    return filterTickets(ticket => ticket.agent === null);
  }, [filterTickets]);

  /**
   * Clear all filters and search
   */
  const clearFilters = useCallback(() => {
    setFilters({});
    setSearchQuery('');
  }, []);

  /**
   * Apply new filters
   */
  const applyNewFilters = useCallback((newFilters: TicketFilter) => {
    setFilters(newFilters);
  }, []);

  /**
   * Update sort configuration
   */
  const updateSort = useCallback((newSort: TicketSort) => {
    setSort(newSort);
  }, []);

  // ==========================================================================
  // CLEANUP
  // ==========================================================================

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  // ==========================================================================
  // RETURN HOOK INTERFACE
  // ==========================================================================

  return {
    // Core state
    tickets: processedTickets,
    loading,
    error,

    // Core actions
    addTicket,
    updateTicket,
    deleteTicket,
    filterTickets,
    searchTickets,

    // Extended functionality
    getTicketsByStatus,
    getTicketsByPriority,
    getTicketsByAgent,
    getUnassignedTickets,
    clearFilters,
    applyNewFilters,
    updateSort,

    // Current state getters
    searchQuery,
    filters,
    sort,
    totalTickets: tickets.length,
    filteredCount: processedTickets.length
  } as UseTicketsReturn & {
    getTicketsByStatus: (status: TicketStatus) => Ticket[];
    getTicketsByPriority: (priority: TicketPriority) => Ticket[];
    getTicketsByAgent: (agent: string) => Ticket[];
    getUnassignedTickets: () => Ticket[];
    clearFilters: () => void;
    applyNewFilters: (filters: TicketFilter) => void;
    updateSort: (sort: TicketSort) => void;
    searchQuery: string;
    filters: TicketFilter;
    sort: TicketSort;
    totalTickets: number;
    filteredCount: number;
  };
};

export default useTickets;
