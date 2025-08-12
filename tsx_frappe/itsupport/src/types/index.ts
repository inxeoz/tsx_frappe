/**
 * Core TypeScript interfaces and types for the IT Support Dashboard
 *
 * This file contains all the shared type definitions used throughout the application.
 * It provides type safety and better development experience.
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

// =============================================================================
// ENUMS
// =============================================================================

/**
 * Available ticket statuses in the system
 */
export enum TicketStatus {
  NEW = 'new',
  OPEN = 'open',
  REVIEWED = 'reviewed',
  IN_PROGRESS = 'in-progress',
  AWAITING_CUSTOMER = 'awaiting-customer',
  NEED_REPLY = 'need-reply',
  PENDING = 'pending',
  WAITING = 'waiting',
  RESOLVED = 'resolved',
  SELF_RESOLVED = 'self-resolved',
  RETURNED = 'returned',
  CLOSED = 'closed'
}

/**
 * Ticket priority levels
 */
export enum TicketPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

/**
 * Available view types in the dashboard
 */
export enum ViewType {
  TABLE = 'main-table',
  FORM = 'form',
  KANBAN = 'kanban',
  TOOLBAR_EXAMPLES = 'ToolbarExamples'
}

/**
 * Toolbar button variants
 */
export enum ButtonVariant {
  DEFAULT = 'default',
  OUTLINE = 'outline',
  GHOST = 'ghost',
  SECONDARY = 'secondary'
}

/**
 * Toolbar alignment options
 */
export enum ToolbarAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

// =============================================================================
// CORE INTERFACES
// =============================================================================

/**
 * Base interface for all entities with common fields
 */
export interface BaseEntity {
  /** Unique identifier */
  id: string | number;
  /** Creation timestamp */
  createdAt?: string;
  /** Last update timestamp */
  updatedAt?: string;
}

/**
 * Represents a support ticket in the system
 */
export interface Ticket extends BaseEntity {
  /** Ticket title/subject */
  title: string;
  /** Detailed description of the issue */
  description: string;
  /** Assigned agent (null if unassigned) */
  agent: string | null;
  /** Current status of the ticket */
  status: TicketStatus;
  /** Priority level of the ticket */
  priority: TicketPriority;
  /** Date when the ticket was created */
  creationDate: string;
  /** Date when the ticket was resolved (null if not resolved) */
  resolutionDate: string | null;
  /** Tags associated with the ticket */
  tags: string[];
  /** Customer/requester information */
  customer?: CustomerInfo;
  /** Ticket category */
  category?: string;
  /** Due date for the ticket */
  dueDate?: string;
  /** Estimated resolution time in hours */
  estimatedHours?: number;
  /** Actual time spent in hours */
  actualHours?: number;
}

/**
 * Customer information associated with a ticket
 */
export interface CustomerInfo {
  /** Customer ID */
  id: string;
  /** Customer name */
  name: string;
  /** Customer email */
  email: string;
  /** Customer phone number */
  phone?: string;
  /** Customer department */
  department?: string;
}

/**
 * Represents a group of tickets (used in table view)
 */
export interface TicketGroup extends BaseEntity {
  /** Group name/label */
  name: string;
  /** Group color for visual identification */
  color: string;
  /** Number of tickets in the group */
  count: number;
  /** Array of tickets belonging to this group */
  tickets: Ticket[];
  /** Whether the group is expanded */
  expanded?: boolean;
}

/**
 * Represents a column in the Kanban board
 */
export interface KanbanColumn {
  /** Column identifier (usually matches a ticket status) */
  id: string;
  /** Display title for the column */
  title: string;
  /** Color theme for the column */
  color: string;
  /** Maximum number of tickets allowed (for WIP limits) */
  maxTickets?: number;
  /** Column order/position */
  order?: number;
}

// =============================================================================
// TOOLBAR INTERFACES
// =============================================================================

/**
 * Represents an action button in the toolbar
 */
export interface ToolbarAction {
  /** Unique identifier for the action */
  id: string;
  /** Icon component or string */
  icon?: React.ComponentType<any> | string;
  /** Button text label */
  text?: string;
  /** Button variant style */
  variant?: ButtonVariant;
  /** Additional CSS classes */
  className?: string;
  /** Click handler function */
  onClick: () => void;
  /** Whether the action is disabled */
  disabled?: boolean;
  /** Tooltip text */
  tooltip?: string;
  /** Badge count (for notifications) */
  badgeCount?: number;
}

/**
 * Represents a section in the toolbar
 */
export interface ToolbarSection {
  /** Section identifier */
  id: string;
  /** Alignment of the section */
  align: ToolbarAlign;
  /** Array of actions in this section */
  actions: ToolbarAction[];
  /** Whether to show a separator after this section */
  separator?: boolean;
}

/**
 * Props for the Toolbar component
 */
export interface ToolbarProps {
  /** Array of toolbar sections */
  sections: ToolbarSection[];
  /** Additional CSS classes */
  className?: string;
  /** Children to render (for custom content) */
  children?: React.ReactNode;
}

// =============================================================================
// COMPONENT PROPS INTERFACES
// =============================================================================

/**
 * Props for the TopBar component
 */
export interface TopBarProps {
  /** Currently active tab */
  activeTab: string;
  /** Function to handle tab changes */
  onTabChange: (tab: string) => void;
  /** Additional actions to show in the top bar */
  actions?: ToolbarAction[];
}

/**
 * Props for the TicketDashboard component
 */
export interface TicketDashboardProps {
  /** Initial ticket data */
  initialTickets?: Ticket[];
  /** Callback when a ticket is selected */
  onTicketSelect?: (ticket: Ticket) => void;
  /** Callback when a ticket is updated */
  onTicketUpdate?: (ticket: Ticket) => void;
  /** Callback when a ticket is deleted */
  onTicketDelete?: (ticketId: string | number) => void;
}

/**
 * Props for the KanbanBoard component
 */
export interface KanbanBoardProps {
  /** Initial ticket data */
  initialTickets?: Ticket[];
  /** Initial column configuration */
  initialColumns?: KanbanColumn[];
  /** Callback when a ticket is moved */
  onTicketMove?: (ticketId: string | number, newStatus: TicketStatus) => void;
  /** Callback when a ticket is updated */
  onTicketUpdate?: (ticket: Ticket) => void;
  /** Callback when a ticket is deleted */
  onTicketDelete?: (ticketId: string | number) => void;
  /** Whether drag and drop is enabled */
  enableDragAndDrop?: boolean;
}

/**
 * Props for the KanbanCard component
 */
export interface KanbanCardProps {
  /** The ticket to display */
  ticket: Ticket;
  /** Whether the card is currently being dragged */
  isDragging?: boolean;
  /** Callback when the card is clicked */
  onClick?: () => void;
  /** Callback when the card is updated */
  onUpdate?: (ticket: Ticket) => void;
  /** Callback when the card is deleted */
  onDelete?: (ticketId: string | number) => void;
}

/**
 * Props for the KanbanColumn component
 */
export interface KanbanColumnProps {
  /** Column configuration */
  column: KanbanColumn;
  /** Tickets in this column */
  tickets: Ticket[];
  /** Callback to add a new ticket to this column */
  onAddTicket?: (columnId: string) => void;
  /** Callback when a ticket is updated */
  onUpdateTicket?: (ticket: Ticket) => void;
  /** Callback when a ticket is deleted */
  onDeleteTicket?: (ticketId: string | number) => void;
  /** Whether the column accepts drops */
  isOver?: boolean;
}

// =============================================================================
// HOOK INTERFACES
// =============================================================================

/**
 * State and actions for ticket management
 */
export interface UseTicketsReturn {
  /** Current tickets */
  tickets: Ticket[];
  /** Loading state */
  loading: boolean;
  /** Error state */
  error: string | null;
  /** Add a new ticket */
  addTicket: (ticket: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => void;
  /** Update an existing ticket */
  updateTicket: (id: string | number, updates: Partial<Ticket>) => void;
  /** Delete a ticket */
  deleteTicket: (id: string | number) => void;
  /** Filter tickets */
  filterTickets: (predicate: (ticket: Ticket) => boolean) => Ticket[];
  /** Search tickets */
  searchTickets: (query: string) => Ticket[];
}

/**
 * Search functionality state and actions
 */
export interface UseSearchReturn {
  /** Current search query */
  query: string;
  /** Whether search is active */
  isActive: boolean;
  /** Search results */
  results: Ticket[];
  /** Update search query */
  setQuery: (query: string) => void;
  /** Toggle search active state */
  toggleActive: () => void;
  /** Clear search */
  clear: () => void;
}

/**
 * Theme management state and actions
 */
export interface UseThemeReturn {
  /** Current theme */
  theme: 'light' | 'dark' | 'system';
  /** Set theme */
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  /** Toggle between light and dark */
  toggleTheme: () => void;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Create a type with all properties optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Create a type with specific properties required
 */
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Filter configuration for tickets
 */
export interface TicketFilter {
  /** Filter by status */
  status?: TicketStatus[];
  /** Filter by priority */
  priority?: TicketPriority[];
  /** Filter by agent */
  agent?: string[];
  /** Filter by date range */
  dateRange?: {
    start: string;
    end: string;
  };
  /** Filter by tags */
  tags?: string[];
}

/**
 * Sort configuration for tickets
 */
export interface TicketSort {
  /** Field to sort by */
  field: keyof Ticket;
  /** Sort direction */
  direction: 'asc' | 'desc';
}

/**
 * Pagination configuration
 */
export interface Pagination {
  /** Current page (0-based) */
  page: number;
  /** Items per page */
  pageSize: number;
  /** Total number of items */
  total: number;
}

/**
 * API response wrapper
 */
export interface ApiResponse<T> {
  /** Response data */
  data: T;
  /** Success status */
  success: boolean;
  /** Error message if any */
  message?: string;
  /** Additional metadata */
  meta?: {
    pagination?: Pagination;
    filters?: TicketFilter;
    sort?: TicketSort;
  };
}

// =============================================================================
// EVENT INTERFACES
// =============================================================================

/**
 * Ticket-related events
 */
export interface TicketEvents {
  /** When a ticket is created */
  onTicketCreated?: (ticket: Ticket) => void;
  /** When a ticket is updated */
  onTicketUpdated?: (ticket: Ticket, changes: Partial<Ticket>) => void;
  /** When a ticket is deleted */
  onTicketDeleted?: (ticketId: string | number) => void;
  /** When a ticket status changes */
  onTicketStatusChanged?: (ticketId: string | number, oldStatus: TicketStatus, newStatus: TicketStatus) => void;
  /** When a ticket is assigned */
  onTicketAssigned?: (ticketId: string | number, agent: string) => void;
}

/**
 * Application-wide events
 */
export interface AppEvents extends TicketEvents {
  /** When the view changes */
  onViewChanged?: (oldView: ViewType, newView: ViewType) => void;
  /** When search is performed */
  onSearch?: (query: string, results: Ticket[]) => void;
  /** When filters are applied */
  onFiltersApplied?: (filters: TicketFilter) => void;
}

// =============================================================================
// CONFIGURATION INTERFACES
// =============================================================================

/**
 * Application configuration
 */
export interface AppConfig {
  /** Application name */
  name: string;
  /** Application version */
  version: string;
  /** Default theme */
  defaultTheme: 'light' | 'dark' | 'system';
  /** Available ticket statuses */
  ticketStatuses: KanbanColumn[];
  /** Available priorities */
  priorities: { value: TicketPriority; label: string; color: string }[];
  /** Pagination settings */
  pagination: {
    defaultPageSize: number;
    pageSizeOptions: number[];
  };
  /** Feature flags */
  features: {
    enableKanban: boolean;
    enableDragAndDrop: boolean;
    enableSearch: boolean;
    enableFilters: boolean;
    enableExport: boolean;
  };
}
