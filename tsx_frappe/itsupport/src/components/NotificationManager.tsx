/**
 * Notification Manager Component using Sonner
 *
 * A lightweight notification system built on top of Sonner toast library.
 * Provides a clean API for showing notifications throughout the application
 * with consistent styling and behavior.
 *
 * Features:
 * - Multiple notification types (success, error, warning, info)
 * - Auto-dismiss with configurable duration
 * - Action buttons support
 * - Theme-aware styling
 * - Keyboard navigation
 * - Accessibility compliant
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

import React from "react";
import { Toaster, toast } from "sonner";
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from "lucide-react";
import { useApp } from "../contexts/AppContext";

// =============================================================================
// INTERFACES
// =============================================================================

interface NotificationAction {
  /** Action label */
  label: string;
  /** Action handler */
  action: () => void;
  /** Button style variant */
  variant?: "default" | "secondary";
}

interface NotificationOptions {
  /** Auto-dismiss duration in ms */
  duration?: number;
  /** Whether the notification can be dismissed */
  dismissible?: boolean;
  /** Action buttons */
  actions?: NotificationAction[];
  /** Custom icon */
  icon?: React.ReactNode;
  /** Additional description */
  description?: string;
  /** Position override */
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
}

// =============================================================================
// NOTIFICATION API
// =============================================================================

/**
 * Notification API for showing different types of notifications
 */
export const notifications = {
  /**
   * Show success notification
   */
  success: (message: string, options?: NotificationOptions) => {
    return toast.success(message, {
      duration: options?.duration || 4000,
      dismissible: options?.dismissible !== false,
      icon: options?.icon || <CheckCircle className="w-4 h-4" />,
      description: options?.description,
      action: options?.actions?.[0]
        ? {
            label: options.actions[0].label,
            onClick: options.actions[0].action,
          }
        : undefined,
      position: options?.position,
    });
  },

  /**
   * Show error notification
   */
  error: (message: string, options?: NotificationOptions) => {
    return toast.error(message, {
      duration: options?.duration || 6000, // Longer for errors
      dismissible: options?.dismissible !== false,
      icon: options?.icon || <AlertCircle className="w-4 h-4" />,
      description: options?.description,
      action: options?.actions?.[0]
        ? {
            label: options.actions[0].label,
            onClick: options.actions[0].action,
          }
        : undefined,
      position: options?.position,
    });
  },

  /**
   * Show warning notification
   */
  warning: (message: string, options?: NotificationOptions) => {
    return toast.warning(message, {
      duration: options?.duration || 5000,
      dismissible: options?.dismissible !== false,
      icon: options?.icon || <AlertTriangle className="w-4 h-4" />,
      description: options?.description,
      action: options?.actions?.[0]
        ? {
            label: options.actions[0].label,
            onClick: options.actions[0].action,
          }
        : undefined,
      position: options?.position,
    });
  },

  /**
   * Show info notification
   */
  info: (message: string, options?: NotificationOptions) => {
    return toast.info(message, {
      duration: options?.duration || 4000,
      dismissible: options?.dismissible !== false,
      icon: options?.icon || <Info className="w-4 h-4" />,
      description: options?.description,
      action: options?.actions?.[0]
        ? {
            label: options.actions[0].label,
            onClick: options.actions[0].action,
          }
        : undefined,
      position: options?.position,
    });
  },

  /**
   * Show loading notification
   */
  loading: (
    message: string,
    options?: Omit<NotificationOptions, "duration">
  ) => {
    return toast.loading(message, {
      dismissible: options?.dismissible !== false,
      description: options?.description,
      position: options?.position,
    });
  },

  /**
   * Show custom notification
   */
  custom: (content: React.ReactNode, options?: NotificationOptions) => {
    return toast.custom(content, {
      duration: options?.duration || 4000,
      dismissible: options?.dismissible !== false,
      position: options?.position,
    });
  },

  /**
   * Show promise-based notification
   */
  promise: <T,>(
    promise: Promise<T>,
    msgs: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: any) => string);
    },
    options?: NotificationOptions
  ) => {
    return toast.promise(promise, msgs, {
      duration: options?.duration,
      position: options?.position,
    });
  },

  /**
   * Dismiss a specific notification
   */
  dismiss: (toastId?: string | number) => {
    toast.dismiss(toastId);
  },

  /**
   * Dismiss all notifications
   */
  dismissAll: () => {
    toast.dismiss();
  },
};

// =============================================================================
// NOTIFICATION MANAGER COMPONENT
// =============================================================================

interface NotificationManagerProps {
  /** Position of the toaster */
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  /** Maximum number of visible toasts */
  visibleToasts?: number;
  /** Enable close button on all toasts */
  closeButton?: boolean;
  /** Rich colors for better visual hierarchy */
  richColors?: boolean;
  /** Expand toasts by default */
  expand?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * NotificationManager Component
 *
 * Renders the Sonner Toaster component with custom styling and theme integration.
 */
export const NotificationManager: React.FC<NotificationManagerProps> = ({
  position = "top-right",
  visibleToasts = 5,
  closeButton = false,
  richColors = true,
  expand = false,
  className,
}) => {
  const { state } = useApp();

  return (
    <Toaster
      position={position}
      visibleToasts={visibleToasts}
      closeButton={closeButton}
      richColors={richColors}
      expand={expand}
      className={className}
      theme={state.config.defaultTheme === "dark" ? "dark" : "light"}
      toastOptions={{
        style: {
          background: "var(--background)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
        },
        className: "toast-notification",
        descriptionClassName: "toast-description",
        actionButtonStyle: {
          background: "var(--primary)",
          color: "var(--primary-foreground)",
        },
        cancelButtonStyle: {
          background: "var(--secondary)",
          color: "var(--secondary-foreground)",
        },
      }}
    />
  );
};

// =============================================================================
// HOOKS
// =============================================================================

/**
 * Hook to use notifications in components
 */
export const useNotifications = () => {
  return {
    ...notifications,

    /**
     * Show ticket-related success notification
     */
    ticketSuccess: (
      action: "created" | "updated" | "deleted",
      ticketId?: string | number
    ) => {
      const messages = {
        created: "Ticket created successfully",
        updated: "Ticket updated successfully",
        deleted: "Ticket deleted successfully",
      };

      return notifications.success(messages[action], {
        description: ticketId ? `Ticket ID: ${ticketId}` : undefined,
        actions:
          action !== "deleted"
            ? [
                {
                  label: "View Ticket",
                  action: () => console.log(`Navigate to ticket ${ticketId}`),
                },
              ]
            : undefined,
      });
    },

    /**
     * Show error with retry option
     */
    errorWithRetry: (message: string, retryAction: () => void) => {
      return notifications.error(message, {
        actions: [
          {
            label: "Retry",
            action: retryAction,
          },
        ],
        duration: 8000, // Longer duration for retry actions
      });
    },

    /**
     * Show confirmation notification
     */
    confirm: (
      message: string,
      onConfirm: () => void,
      onCancel?: () => void
    ) => {
      return notifications.custom(
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>{message}</span>
          </div>
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => {
                onConfirm();
                toast.dismiss();
              }}
              className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                onCancel?.();
                toast.dismiss();
              }}
              className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded hover:bg-secondary/90"
            >
              Cancel
            </button>
          </div>
        </div>,
        {
          duration: Infinity, // Keep open until user action
        }
      );
    },
  };
};

// =============================================================================
// EXAMPLES AND UTILITY FUNCTIONS
// =============================================================================

/**
 * Example usage functions for testing and documentation
 */
export const notificationExamples = {
  basic: () => {
    notifications.success("Operation completed successfully!");
  },

  withAction: () => {
    notifications.info("New update available", {
      actions: [
        {
          label: "Update Now",
          action: () => console.log("Updating..."),
        },
      ],
    });
  },

  withDescription: () => {
    notifications.warning("Storage almost full", {
      description: "You have used 95% of your storage quota",
      actions: [
        {
          label: "Manage Storage",
          action: () => console.log("Navigate to storage management"),
        },
      ],
    });
  },

  promise: async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
      }, 2000);
    });

    notifications.promise(promise, {
      loading: "Saving ticket...",
      success: "Ticket saved successfully!",
      error: "Failed to save ticket",
    });
  },

  custom: () => {
    notifications.custom(
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
        <div>
          <div className="font-medium">Custom notification</div>
          <div className="text-sm text-muted-foreground">
            This is a custom styled notification
          </div>
        </div>
      </div>
    );
  },
};

export default NotificationManager;
