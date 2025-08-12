/**
 * Main Application Component - IT Support Dashboard
 *
 * This is the root component of the IT Support Dashboard application.
 * It provides the main layout, routing, and global state management.
 *
 * Features:
 * - Multi-view support (Table, Form, Kanban, Toolbar Examples)
 * - Global state management with React Context
 * - Theme management and persistence
 * - Error boundary for graceful error handling
 * - Responsive design with mobile support
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

import React, {
  Suspense,
  useEffect,
  useState,
  useCallback,
  ErrorInfo,
  ReactNode,
} from "react";
import { AppProvider } from "./contexts/AppContext";
import { TopBar } from "./components/TopBar";
import { TicketDashboard } from "./components/TicketDashboard";
import { KanbanBoard } from "./components/KanbanBoard";
import { ToolbarExamples } from "./components/ToolbarExamples";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { ErrorBoundary } from "./components/ErrorBoundary";
import {
  NotificationManager,
  useNotifications,
} from "./components/NotificationManager";
import { useTheme } from "./hooks/useTheme";
import { useTickets } from "./hooks/useTickets";
import { ViewType, AppEvents } from "./types";

// =============================================================================
// INTERFACES
// =============================================================================

interface AppProps {
  /** Initial theme preference */
  initialTheme?: "light" | "dark" | "system";
  /** Enable development features */
  isDevelopment?: boolean;
  /** Custom CSS classes */
  className?: string;
}

interface ViewConfig {
  id: ViewType;
  label: string;
  icon?: string;
  component: React.ComponentType;
  description: string;
  enabled: boolean;
}

// =============================================================================
// CONSTANTS
// =============================================================================

const VIEWS: ViewConfig[] = [
  {
    id: ViewType.TABLE,
    label: "Main table",
    icon: "⋯",
    component: TicketDashboard,
    description: "Traditional table view with grouping and filtering",
    enabled: true,
  },
  {
    id: ViewType.FORM,
    label: "Form",
    icon: "📝",
    component: FormView,
    description: "Form-based ticket management interface",
    enabled: true,
  },
  {
    id: ViewType.KANBAN,
    label: "Kanban",
    icon: "📋",
    component: KanbanBoard,
    description: "Drag-and-drop kanban board for visual ticket management",
    enabled: true,
  },
  {
    id: ViewType.TOOLBAR_EXAMPLES,
    label: "Toolbar Examples",
    icon: "🔧",
    component: ToolbarExamples,
    description: "Interactive examples of toolbar components",
    enabled: true,
  },
];

// =============================================================================
// FORM VIEW COMPONENT (Placeholder)
// =============================================================================

/**
 * Form View Component - Placeholder for future implementation
 */
function FormView(): JSX.Element {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">📝</span>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Form View
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The form view will provide a structured interface for creating and
            editing tickets with advanced validation and field management.
          </p>
        </div>

        <div className="space-y-4 text-left max-w-sm mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm text-muted-foreground">
              Advanced form validation
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm text-muted-foreground">
              Dynamic field configuration
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm text-muted-foreground">
              Auto-save functionality
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm text-muted-foreground">
              Rich text editing
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-6">Coming soon...</p>
      </div>
    </div>
  );
}

// =============================================================================
// ERROR BOUNDARY COMPONENT
// =============================================================================

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class AppErrorBoundary extends React.Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    // Log error to monitoring service in production
    console.error("Application Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 mx-auto mb-6 bg-destructive/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Something went wrong
            </h1>
            <p className="text-muted-foreground mb-6">
              An unexpected error occurred. Please refresh the page or contact
              support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-muted rounded text-xs overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// =============================================================================
// LOADING COMPONENT
// =============================================================================

/**
 * Application Loading Component
 */
function AppLoading(): JSX.Element {
  return (
    <div className="h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="large" />
        <p className="mt-4 text-muted-foreground">
          Loading IT Support Dashboard...
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN APP COMPONENT
// =============================================================================

/**
 * Main Application Component
 */
function App({
  initialTheme = "system",
  isDevelopment = process.env.NODE_ENV === "development",
  className = "",
}: AppProps): JSX.Element {
  // ==========================================================================
  // HOOKS
  // ==========================================================================

  const [activeView, setActiveView] = useState<ViewType>(ViewType.TABLE);
  const [isInitialized, setIsInitialized] = useState(false);

  // Theme management
  const { theme, setTheme, toggleTheme, isDarkMode } = useTheme({
    defaultTheme: initialTheme,
    enableSystemDetection: true,
    enablePersistence: true,
  });

  // Ticket management
  const {
    tickets,
    loading: ticketsLoading,
    error: ticketsError,
    addTicket,
    updateTicket,
    deleteTicket,
  } = useTickets({
    enablePersistence: true,
    enableOptimisticUpdates: true,
  });

  // Notifications
  const { success, error, warning, info } = useNotifications();

  // ==========================================================================
  // EVENT HANDLERS
  // ==========================================================================

  /**
   * Application-wide event handlers
   */
  const appEvents: AppEvents = {
    onViewChanged: useCallback(
      (oldView: ViewType, newView: ViewType) => {
        console.info(`View changed from ${oldView} to ${newView}`);

        // Analytics tracking could go here
        if (isDevelopment) {
          console.debug("View transition:", {
            oldView,
            newView,
            timestamp: new Date(),
          });
        }
      },
      [isDevelopment]
    ),

    onTicketCreated: useCallback(
      ticket => {
        console.info("Ticket created:", ticket.id);
        success(`Ticket "${ticket.title}" created successfully`, {
          description: `Ticket ID: ${ticket.id}`,
          actions: [
            {
              label: "View Ticket",
              action: () => console.log(`Navigate to ticket ${ticket.id}`),
            },
          ],
        });
      },
      [success]
    ),

    onTicketUpdated: useCallback(
      (ticket, changes) => {
        console.info("Ticket updated:", ticket.id, changes);
        info(`Ticket "${ticket.title}" updated`, {
          description: `Updated fields: ${Object.keys(changes).join(", ")}`,
        });
      },
      [info]
    ),

    onTicketDeleted: useCallback(
      ticketId => {
        console.info("Ticket deleted:", ticketId);
        warning("Ticket deleted", {
          description: `Ticket ${ticketId} has been removed`,
        });
      },
      [warning]
    ),

    onTicketStatusChanged: useCallback((ticketId, oldStatus, newStatus) => {
      console.info(
        `Ticket ${ticketId} status changed from ${oldStatus} to ${newStatus}`
      );
    }, []),

    onSearch: useCallback(
      (query, results) => {
        console.debug("Search performed:", {
          query,
          resultCount: results.length,
        });
        if (query.trim() && results.length === 0) {
          info("No results found", {
            description: `No tickets match "${query}"`,
          });
        }
      },
      [info]
    ),
  };

  /**
   * Handle view changes with validation
   */
  const handleViewChange = useCallback((view: ViewType) => {
    const viewConfig = VIEWS.find(v => v.id === view);
    if (viewConfig && viewConfig.enabled) {
      setActiveView(view);
    } else {
      console.warn(
        `Attempted to navigate to disabled or invalid view: ${view}`
      );
    }
  }, []);

  // ==========================================================================
  // EFFECTS
  // ==========================================================================

  /**
   * Initialize application
   */
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Simulate initialization delay in development
        if (isDevelopment) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Initialize application data, check authentication, etc.
        setIsInitialized(true);

        console.info("IT Support Dashboard initialized successfully");
        success("Welcome to IT Support Dashboard", {
          description: "Application loaded successfully",
        });
      } catch (error) {
        console.error("Failed to initialize application:", error);
        error("Failed to initialize application", {
          description: "Please refresh the page and try again",
        });
      }
    };

    initializeApp();
  }, [isDevelopment]);

  /**
   * Handle keyboard shortcuts
   */
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      // Global keyboard shortcuts
      if (event.metaKey || event.ctrlKey) {
        switch (event.key) {
          case "k":
            event.preventDefault();
            // Toggle search (to be implemented)
            break;
          case "d":
            event.preventDefault();
            toggleTheme();
            break;
          case "1":
            event.preventDefault();
            handleViewChange(ViewType.TABLE);
            break;
          case "2":
            event.preventDefault();
            handleViewChange(ViewType.FORM);
            break;
          case "3":
            event.preventDefault();
            handleViewChange(ViewType.KANBAN);
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [toggleTheme, handleViewChange]);

  // ==========================================================================
  // RENDER HELPERS
  // ==========================================================================

  /**
   * Render the current active view
   */
  const renderActiveView = useCallback(() => {
    const viewConfig = VIEWS.find(v => v.id === activeView);

    if (!viewConfig || !viewConfig.enabled) {
      return (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              View Not Available
            </h2>
            <p className="text-muted-foreground">
              The requested view is not available or has been disabled.
            </p>
          </div>
        </div>
      );
    }

    const ViewComponent = viewConfig.component;

    return (
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <ViewComponent />
      </Suspense>
    );
  }, [activeView]);

  // ==========================================================================
  // LOADING STATE
  // ==========================================================================

  if (!isInitialized) {
    return <AppLoading />;
  }

  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <AppErrorBoundary>
      <AppProvider
        initialState={{
          activeView,
          tickets,
          loading: {
            tickets: ticketsLoading,
            general: false,
          },
          error: {
            tickets: ticketsError,
            general: null,
          },
        }}
        events={appEvents}
      >
        <div
          className={`it-support-dashboard ${isDarkMode ? "dark" : "light"} h-screen bg-background text-foreground flex flex-col ${className}`}
          data-theme={theme}
        >
          {/* Top Navigation Bar */}
          <TopBar
            activeTab={activeView}
            onTabChange={handleViewChange}
            actions={[
              {
                id: "theme-toggle",
                icon: isDarkMode ? "☀️" : "🌙",
                tooltip: `Switch to ${isDarkMode ? "light" : "dark"} theme`,
                onClick: toggleTheme,
              },
            ]}
          />

          {/* Main Content Area */}
          <main
            className="flex-1 overflow-auto m-5"
            role="main"
            aria-label="Main content"
          >
            <ErrorBoundary>{renderActiveView()}</ErrorBoundary>
          </main>

          {/* Global Notification Manager */}
          <NotificationManager />

          {/* Development Tools */}
          {isDevelopment && (
            <div className="fixed bottom-4 right-4 z-50">
              <details className="bg-card border border-border rounded-lg p-2 text-xs">
                <summary className="cursor-pointer text-muted-foreground">
                  Dev Tools
                </summary>
                <div className="mt-2 space-y-1">
                  <div>Theme: {theme}</div>
                  <div>View: {activeView}</div>
                  <div>Tickets: {tickets.length}</div>
                </div>
              </details>
            </div>
          )}
        </div>
      </AppProvider>
    </AppErrorBoundary>
  );
}

// =============================================================================
// DEFAULT EXPORT
// =============================================================================

export default App;
