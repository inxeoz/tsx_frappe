/**
 * Application Context for Global State Management
 *
 * This context provides centralized state management for the IT Support Dashboard,
 * including tickets, search, theme, and application-wide functionality.
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

import React, { createContext, useContext, useReducer, useCallback, useMemo, ReactNode } from 'react';
import {
  Ticket,
  TicketStatus,
  TicketPriority,
  ViewType,
  TicketFilter,
  TicketSort,
  AppEvents,
  AppConfig
} from '../types';

// =============================================================================
// INTERFACES
// =============================================================================

interface AppState {
  /** Current active view */
  activeView: ViewType;
  /** All tickets in the system */
  tickets: Ticket[];
  /** Loading states */
  loading: {
    tickets: boolean;
    general: boolean;
  };
  /** Error states */
  error: {
    tickets: string | null;
    general: string | null;
  };
  /** Search state */
  search: {
    query: string;
    isActive: boolean;
    results: Ticket[];
  };
  /** Filter state */
  filters: TicketFilter;
  /** Sort configuration */
  sort: TicketSort;
  /** UI state */
  ui: {
    sidebarCollapsed: boolean;
    mobileMenuOpen: boolean;
    notifications: Notification[];
  };
  /** Application configuration */
  config: AppConfig;
}

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  timestamp: number;
  duration?: number;
  actions?: Array<{
    label: string;
    action: () => void;
  }>;
}

// =============================================================================
// ACTION TYPES
// =============================================================================

type AppAction =
  // View actions
  | { type: 'SET_ACTIVE_VIEW'; payload: ViewType }

  // Ticket actions
  | { type: 'SET_TICKETS'; payload: Ticket[] }
  | { type: 'ADD_TICKET'; payload: Ticket }
  | { type: 'UPDATE_TICKET'; payload: { id: string | number; updates: Partial<Ticket> } }
  | { type: 'DELETE_TICKET'; payload: string | number }
  | { type: 'MOVE_TICKET'; payload: { id: string | number; newStatus: TicketStatus } }

  // Loading actions
  | { type: 'SET_TICKETS_LOADING'; payload: boolean }
  | { type: 'SET_GENERAL_LOADING'; payload: boolean }

  // Error actions
  | { type: 'SET_TICKETS_ERROR'; payload: string | null }
  | { type: 'SET_GENERAL_ERROR'; payload: string | null }

  // Search actions
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_SEARCH_ACTIVE'; payload: boolean }
  | { type: 'SET_SEARCH_RESULTS'; payload: Ticket[] }
  | { type: 'CLEAR_SEARCH' }

  // Filter actions
  | { type: 'SET_FILTERS'; payload: TicketFilter }
  | { type: 'UPDATE_FILTERS'; payload: Partial<TicketFilter> }
  | { type: 'CLEAR_FILTERS' }

  // Sort actions
  | { type: 'SET_SORT'; payload: TicketSort }

  // UI actions
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_SIDEBAR_COLLAPSED'; payload: boolean }
  | { type: 'TOGGLE_MOBILE_MENU' }
  | { type: 'SET_MOBILE_MENU_OPEN'; payload: boolean }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<Notification, 'id' | 'timestamp'> }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_NOTIFICATIONS' }

  // Config actions
  | { type: 'UPDATE_CONFIG'; payload: Partial<AppConfig> }

  // Bulk actions
  | { type: 'RESET_STATE' }
  | { type: 'HYDRATE_STATE'; payload: Partial<AppState> };

// =============================================================================
// INITIAL STATE
// =============================================================================

const DEFAULT_CONFIG: AppConfig = {
  name: 'IT Support Dashboard',
  version: '1.0.0',
  defaultTheme: 'system',
  ticketStatuses: [
    { id: 'new', title: 'New', color: 'bg-indigo-500' },
    { id: 'reviewed', title: 'Reviewed', color: 'bg-slate-500' },
    { id: 'awaiting-customer', title: 'Awaiting Customer', color: 'bg-purple-500' },
    { id: 'need-reply', title: 'Need Reply', color: 'bg-blue-500' },
    { id: 'resolved', title: 'Resolved', color: 'bg-green-500' },
    { id: 'self-resolved', title: 'Self Resolved', color: 'bg-yellow-500' },
    { id: 'returned', title: 'Returned', color: 'bg-cyan-500' }
  ],
  priorities: [
    { value: TicketPriority.LOW, label: 'Low', color: '#22c55e' },
    { value: TicketPriority.MEDIUM, label: 'Medium', color: '#f59e0b' },
    { value: TicketPriority.HIGH, label: 'High', color: '#ef4444' },
    { value: TicketPriority.CRITICAL, label: 'Critical', color: '#dc2626' }
  ],
  pagination: {
    defaultPageSize: 20,
    pageSizeOptions: [10, 20, 50, 100]
  },
  features: {
    enableKanban: true,
    enableDragAndDrop: true,
    enableSearch: true,
    enableFilters: true,
    enableExport: true
  }
};

const initialState: AppState = {
  activeView: ViewType.TABLE,
  tickets: [],
  loading: {
    tickets: false,
    general: false
  },
  error: {
    tickets: null,
    general: null
  },
  search: {
    query: '',
    isActive: false,
    results: []
  },
  filters: {},
  sort: {
    field: 'createdAt',
    direction: 'desc'
  },
  ui: {
    sidebarCollapsed: false,
    mobileMenuOpen: false,
    notifications: []
  },
  config: DEFAULT_CONFIG
};

// =============================================================================
// REDUCER
// =============================================================================

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    // View actions
    case 'SET_ACTIVE_VIEW':
      return { ...state, activeView: action.payload };

    // Ticket actions
    case 'SET_TICKETS':
      return { ...state, tickets: action.payload };

    case 'ADD_TICKET':
      return { ...state, tickets: [action.payload, ...state.tickets] };

    case 'UPDATE_TICKET': {
      const { id, updates } = action.payload;
      return {
        ...state,
        tickets: state.tickets.map(ticket =>
          ticket.id === id ? { ...ticket, ...updates, updatedAt: new Date().toISOString() } : ticket
        )
      };
    }

    case 'DELETE_TICKET':
      return {
        ...state,
        tickets: state.tickets.filter(ticket => ticket.id !== action.payload)
      };

    case 'MOVE_TICKET': {
      const { id, newStatus } = action.payload;
      const now = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      return {
        ...state,
        tickets: state.tickets.map(ticket =>
          ticket.id === id
            ? {
                ...ticket,
                status: newStatus,
                resolutionDate:
                  newStatus === TicketStatus.RESOLVED || newStatus === TicketStatus.SELF_RESOLVED
                    ? now
                    : null,
                updatedAt: new Date().toISOString()
              }
            : ticket
        )
      };
    }

    // Loading actions
    case 'SET_TICKETS_LOADING':
      return {
        ...state,
        loading: { ...state.loading, tickets: action.payload }
      };

    case 'SET_GENERAL_LOADING':
      return {
        ...state,
        loading: { ...state.loading, general: action.payload }
      };

    // Error actions
    case 'SET_TICKETS_ERROR':
      return {
        ...state,
        error: { ...state.error, tickets: action.payload }
      };

    case 'SET_GENERAL_ERROR':
      return {
        ...state,
        error: { ...state.error, general: action.payload }
      };

    // Search actions
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        search: { ...state.search, query: action.payload }
      };

    case 'SET_SEARCH_ACTIVE':
      return {
        ...state,
        search: { ...state.search, isActive: action.payload }
      };

    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        search: { ...state.search, results: action.payload }
      };

    case 'CLEAR_SEARCH':
      return {
        ...state,
        search: { query: '', isActive: false, results: [] }
      };

    // Filter actions
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };

    case 'UPDATE_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };

    case 'CLEAR_FILTERS':
      return { ...state, filters: {} };

    // Sort actions
    case 'SET_SORT':
      return { ...state, sort: action.payload };

    // UI actions
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        ui: { ...state.ui, sidebarCollapsed: !state.ui.sidebarCollapsed }
      };

    case 'SET_SIDEBAR_COLLAPSED':
      return {
        ...state,
        ui: { ...state.ui, sidebarCollapsed: action.payload }
      };

    case 'TOGGLE_MOBILE_MENU':
      return {
        ...state,
        ui: { ...state.ui, mobileMenuOpen: !state.ui.mobileMenuOpen }
      };

    case 'SET_MOBILE_MENU_OPEN':
      return {
        ...state,
        ui: { ...state.ui, mobileMenuOpen: action.payload }
      };

    case 'ADD_NOTIFICATION': {
      const notification: Notification = {
        ...action.payload,
        id: `notification-${Date.now()}-${Math.random()}`,
        timestamp: Date.now()
      };
      return {
        ...state,
        ui: {
          ...state.ui,
          notifications: [...state.ui.notifications, notification]
        }
      };
    }

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        ui: {
          ...state.ui,
          notifications: state.ui.notifications.filter(n => n.id !== action.payload)
        }
      };

    case 'CLEAR_NOTIFICATIONS':
      return {
        ...state,
        ui: { ...state.ui, notifications: [] }
      };

    // Config actions
    case 'UPDATE_CONFIG':
      return {
        ...state,
        config: { ...state.config, ...action.payload }
      };

    // Bulk actions
    case 'RESET_STATE':
      return initialState;

    case 'HYDRATE_STATE':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

// =============================================================================
// CONTEXT
// =============================================================================

interface AppContextValue {
  state: AppState;
  actions: {
    // View actions
    setActiveView: (view: ViewType) => void;

    // Ticket actions
    setTickets: (tickets: Ticket[]) => void;
    addTicket: (ticket: Ticket) => void;
    updateTicket: (id: string | number, updates: Partial<Ticket>) => void;
    deleteTicket: (id: string | number) => void;
    moveTicket: (id: string | number, newStatus: TicketStatus) => void;

    // Loading actions
    setTicketsLoading: (loading: boolean) => void;
    setGeneralLoading: (loading: boolean) => void;

    // Error actions
    setTicketsError: (error: string | null) => void;
    setGeneralError: (error: string | null) => void;

    // Search actions
    setSearchQuery: (query: string) => void;
    setSearchActive: (active: boolean) => void;
    setSearchResults: (results: Ticket[]) => void;
    clearSearch: () => void;

    // Filter actions
    setFilters: (filters: TicketFilter) => void;
    updateFilters: (filters: Partial<TicketFilter>) => void;
    clearFilters: () => void;

    // Sort actions
    setSort: (sort: TicketSort) => void;

    // UI actions
    toggleSidebar: () => void;
    setSidebarCollapsed: (collapsed: boolean) => void;
    toggleMobileMenu: () => void;
    setMobileMenuOpen: (open: boolean) => void;
    addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
    removeNotification: (id: string) => void;
    clearNotifications: () => void;

    // Config actions
    updateConfig: (config: Partial<AppConfig>) => void;

    // Bulk actions
    resetState: () => void;
    hydrateState: (state: Partial<AppState>) => void;
  };
  events?: AppEvents;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

// =============================================================================
// PROVIDER
// =============================================================================

interface AppProviderProps {
  children: ReactNode;
  initialState?: Partial<AppState>;
  events?: AppEvents;
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
  initialState: providedInitialState,
  events
}) => {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    ...providedInitialState
  });

  // ==========================================================================
  // ACTION CREATORS
  // ==========================================================================

  const actions = useMemo(() => ({
    // View actions
    setActiveView: (view: ViewType) => {
      const oldView = state.activeView;
      dispatch({ type: 'SET_ACTIVE_VIEW', payload: view });
      events?.onViewChanged?.(oldView, view);
    },

    // Ticket actions
    setTickets: (tickets: Ticket[]) => {
      dispatch({ type: 'SET_TICKETS', payload: tickets });
    },

    addTicket: (ticket: Ticket) => {
      dispatch({ type: 'ADD_TICKET', payload: ticket });
      events?.onTicketCreated?.(ticket);
    },

    updateTicket: (id: string | number, updates: Partial<Ticket>) => {
      const oldTicket = state.tickets.find(t => t.id === id);
      dispatch({ type: 'UPDATE_TICKET', payload: { id, updates } });

      if (oldTicket) {
        const updatedTicket = { ...oldTicket, ...updates };
        events?.onTicketUpdated?.(updatedTicket, updates);

        if (updates.status && oldTicket.status !== updates.status) {
          events?.onTicketStatusChanged?.(id, oldTicket.status, updates.status);
        }

        if (updates.agent && oldTicket.agent !== updates.agent) {
          events?.onTicketAssigned?.(id, updates.agent);
        }
      }
    },

    deleteTicket: (id: string | number) => {
      dispatch({ type: 'DELETE_TICKET', payload: id });
      events?.onTicketDeleted?.(id);
    },

    moveTicket: (id: string | number, newStatus: TicketStatus) => {
      const oldTicket = state.tickets.find(t => t.id === id);
      dispatch({ type: 'MOVE_TICKET', payload: { id, newStatus } });

      if (oldTicket) {
        events?.onTicketStatusChanged?.(id, oldTicket.status, newStatus);
      }
    },

    // Loading actions
    setTicketsLoading: (loading: boolean) => {
      dispatch({ type: 'SET_TICKETS_LOADING', payload: loading });
    },

    setGeneralLoading: (loading: boolean) => {
      dispatch({ type: 'SET_GENERAL_LOADING', payload: loading });
    },

    // Error actions
    setTicketsError: (error: string | null) => {
      dispatch({ type: 'SET_TICKETS_ERROR', payload: error });
    },

    setGeneralError: (error: string | null) => {
      dispatch({ type: 'SET_GENERAL_ERROR', payload: error });
    },

    // Search actions
    setSearchQuery: (query: string) => {
      dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    },

    setSearchActive: (active: boolean) => {
      dispatch({ type: 'SET_SEARCH_ACTIVE', payload: active });
    },

    setSearchResults: (results: Ticket[]) => {
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: results });
      events?.onSearch?.(state.search.query, results);
    },

    clearSearch: () => {
      dispatch({ type: 'CLEAR_SEARCH' });
    },

    // Filter actions
    setFilters: (filters: TicketFilter) => {
      dispatch({ type: 'SET_FILTERS', payload: filters });
      events?.onFiltersApplied?.(filters);
    },

    updateFilters: (filters: Partial<TicketFilter>) => {
      dispatch({ type: 'UPDATE_FILTERS', payload: filters });
      const newFilters = { ...state.filters, ...filters };
      events?.onFiltersApplied?.(newFilters);
    },

    clearFilters: () => {
      dispatch({ type: 'CLEAR_FILTERS' });
      events?.onFiltersApplied?.({});
    },

    // Sort actions
    setSort: (sort: TicketSort) => {
      dispatch({ type: 'SET_SORT', payload: sort });
    },

    // UI actions
    toggleSidebar: () => {
      dispatch({ type: 'TOGGLE_SIDEBAR' });
    },

    setSidebarCollapsed: (collapsed: boolean) => {
      dispatch({ type: 'SET_SIDEBAR_COLLAPSED', payload: collapsed });
    },

    toggleMobileMenu: () => {
      dispatch({ type: 'TOGGLE_MOBILE_MENU' });
    },

    setMobileMenuOpen: (open: boolean) => {
      dispatch({ type: 'SET_MOBILE_MENU_OPEN', payload: open });
    },

    addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => {
      dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
    },

    removeNotification: (id: string) => {
      dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
    },

    clearNotifications: () => {
      dispatch({ type: 'CLEAR_NOTIFICATIONS' });
    },

    // Config actions
    updateConfig: (config: Partial<AppConfig>) => {
      dispatch({ type: 'UPDATE_CONFIG', payload: config });
    },

    // Bulk actions
    resetState: () => {
      dispatch({ type: 'RESET_STATE' });
    },

    hydrateState: (newState: Partial<AppState>) => {
      dispatch({ type: 'HYDRATE_STATE', payload: newState });
    }
  }), [state, events]);

  const value = useMemo(() => ({
    state,
    actions,
    events
  }), [state, actions, events]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// =============================================================================
// HOOK
// =============================================================================

export const useApp = (): AppContextValue => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// =============================================================================
// EXPORTS
// =============================================================================

export default AppContext;
export type { AppState, AppAction, Notification, AppContextValue };
