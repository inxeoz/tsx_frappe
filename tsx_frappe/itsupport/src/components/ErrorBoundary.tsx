/**
 * Error Boundary Component
 *
 * A React error boundary component that catches JavaScript errors anywhere in the child
 * component tree, logs those errors, and displays a fallback UI instead of crashing.
 *
 * Features:
 * - Graceful error handling with fallback UI
 * - Error logging and reporting
 * - Development mode error details
 * - Retry functionality
 * - Customizable error messages
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { cn } from '../utils/cn';

// =============================================================================
// INTERFACES
// =============================================================================

interface ErrorBoundaryProps {
  /** Child components to wrap with error boundary */
  children: ReactNode;
  /** Custom fallback component to render on error */
  fallback?: React.ComponentType<ErrorFallbackProps>;
  /** Error boundary name for logging purposes */
  name?: string;
  /** Callback when an error is caught */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Enable error reporting to external service */
  enableReporting?: boolean;
  /** Custom error message */
  errorMessage?: string;
  /** Show retry button */
  showRetry?: boolean;
  /** Show error details in development */
  showDetails?: boolean;
  /** Custom CSS classes */
  className?: string;
}

interface ErrorBoundaryState {
  /** Whether an error has occurred */
  hasError: boolean;
  /** The caught error object */
  error: Error | null;
  /** Additional error information from React */
  errorInfo: ErrorInfo | null;
  /** Error boundary identifier for tracking */
  errorId: string;
  /** Number of retry attempts */
  retryCount: number;
}

interface ErrorFallbackProps {
  /** The caught error */
  error: Error;
  /** Error information from React */
  errorInfo: ErrorInfo;
  /** Error boundary identifier */
  errorId: string;
  /** Retry function */
  retry: () => void;
  /** Number of retry attempts */
  retryCount: number;
  /** Custom error message */
  errorMessage?: string;
  /** Show error details */
  showDetails?: boolean;
}

// =============================================================================
// CONSTANTS
// =============================================================================

const MAX_RETRY_ATTEMPTS = 3;

const DEFAULT_ERROR_MESSAGES = {
  generic: 'An unexpected error occurred. Please try again.',
  network: 'Network error occurred. Please check your connection and try again.',
  timeout: 'The request timed out. Please try again.',
  permission: 'You do not have permission to access this resource.',
  notFound: 'The requested resource was not found.'
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Generate a unique error ID for tracking
 */
const generateErrorId = (): string => {
  return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Extract meaningful error message from error object
 */
const extractErrorMessage = (error: Error): string => {
  if (error.name === 'ChunkLoadError') {
    return 'Failed to load application resources. Please refresh the page.';
  }

  if (error.message.includes('Network Error') || error.message.includes('Failed to fetch')) {
    return DEFAULT_ERROR_MESSAGES.network;
  }

  if (error.message.includes('timeout')) {
    return DEFAULT_ERROR_MESSAGES.timeout;
  }

  if (error.message.includes('403') || error.message.includes('Forbidden')) {
    return DEFAULT_ERROR_MESSAGES.permission;
  }

  if (error.message.includes('404') || error.message.includes('Not Found')) {
    return DEFAULT_ERROR_MESSAGES.notFound;
  }

  return error.message || DEFAULT_ERROR_MESSAGES.generic;
};

/**
 * Format error details for display
 */
const formatErrorDetails = (error: Error, errorInfo: ErrorInfo): string => {
  return `Error: ${error.toString()}\n\nComponent Stack:${errorInfo.componentStack}`;
};

// =============================================================================
// DEFAULT FALLBACK COMPONENT
// =============================================================================

/**
 * Default Error Fallback Component
 */
const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  errorInfo,
  errorId,
  retry,
  retryCount,
  errorMessage,
  showDetails = process.env.NODE_ENV === 'development'
}) => {
  const displayMessage = errorMessage || extractErrorMessage(error);
  const canRetry = retryCount < MAX_RETRY_ATTEMPTS;

  return (
    <div className="flex items-center justify-center min-h-[400px] p-6">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-destructive/20 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-destructive"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <CardTitle className="text-xl font-semibold text-destructive">
            Something went wrong
          </CardTitle>
          <CardDescription>
            {displayMessage}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {retryCount > 0 && (
            <Alert className="mb-4">
              <AlertDescription>
                Retry attempt {retryCount} of {MAX_RETRY_ATTEMPTS}
              </AlertDescription>
            </Alert>
          )}

          {showDetails && (
            <details className="mb-4">
              <summary className="cursor-pointer text-sm text-muted-foreground mb-2 hover:text-foreground">
                Error Details (Development Mode)
              </summary>
              <pre className="text-xs bg-muted p-3 rounded-md overflow-auto max-h-40 border">
                {formatErrorDetails(error, errorInfo)}
              </pre>
              <div className="mt-2 text-xs text-muted-foreground">
                Error ID: {errorId}
              </div>
            </details>
          )}
        </CardContent>

        <CardFooter className="flex gap-2 justify-center">
          {canRetry && (
            <Button
              onClick={retry}
              variant="default"
              size="sm"
            >
              Try Again
            </Button>
          )}

          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            size="sm"
          >
            Refresh Page
          </Button>

          {!showDetails && process.env.NODE_ENV === 'development' && (
            <Button
              onClick={() => console.error('Error Details:', error, errorInfo)}
              variant="ghost"
              size="sm"
            >
              Log Error
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

// =============================================================================
// ERROR BOUNDARY CLASS COMPONENT
// =============================================================================

/**
 * Error Boundary Class Component
 *
 * Note: Error boundaries must be class components as of React 18.
 * Hooks cannot catch errors in the same way.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: 0
    };
  }

  /**
   * Static method called when an error is thrown
   */
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: generateErrorId()
    };
  }

  /**
   * Called when an error is caught
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const { name, onError, enableReporting = true } = this.props;
    const errorId = this.state.errorId;

    // Update state with error info
    this.setState({ errorInfo });

    // Log error to console
    console.group(`🚨 Error Boundary: ${name || 'Unknown'}`);
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    console.error('Error ID:', errorId);
    console.groupEnd();

    // Call custom error handler
    if (onError) {
      try {
        onError(error, errorInfo);
      } catch (handlerError) {
        console.error('Error in error handler:', handlerError);
      }
    }

    // Report error to external service
    if (enableReporting && process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo, errorId);
    }
  }

  /**
   * Clean up timeouts when component unmounts
   */
  componentWillUnmount(): void {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  /**
   * Report error to external monitoring service
   */
  private reportError = (error: Error, errorInfo: ErrorInfo, errorId: string): void => {
    try {
      // Example error reporting (replace with your monitoring service)
      const errorData = {
        errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        boundaryName: this.props.name
      };

      // This is where you would send to your error tracking service
      // Examples: Sentry, Bugsnag, LogRocket, etc.
      console.info('Error reported:', errorData);

      // Example API call (uncomment and modify as needed):
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // }).catch(reportingError => {
      //   console.error('Failed to report error:', reportingError);
      // });

    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  /**
   * Retry the failed component
   */
  private handleRetry = (): void => {
    const { retryCount } = this.state;

    if (retryCount >= MAX_RETRY_ATTEMPTS) {
      console.warn('Maximum retry attempts reached');
      return;
    }

    // Add small delay before retry to prevent immediate re-error
    this.retryTimeoutId = setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
        retryCount: retryCount + 1
      });
    }, 500);
  };

  /**
   * Render method
   */
  render(): ReactNode {
    const { hasError, error, errorInfo, errorId, retryCount } = this.state;
    const {
      children,
      fallback: FallbackComponent,
      errorMessage,
      showRetry = true,
      showDetails,
      className
    } = this.props;

    if (hasError && error && errorInfo) {
      const FallbackToRender = FallbackComponent || DefaultErrorFallback;

      return (
        <div className={cn('error-boundary', className)}>
          <FallbackToRender
            error={error}
            errorInfo={errorInfo}
            errorId={errorId}
            retry={showRetry ? this.handleRetry : () => {}}
            retryCount={retryCount}
            errorMessage={errorMessage}
            showDetails={showDetails}
          />
        </div>
      );
    }

    return children;
  }
}

// =============================================================================
// HOOK FOR FUNCTIONAL COMPONENTS
// =============================================================================

/**
 * Hook to manually trigger error boundary from functional components
 */
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: Partial<ErrorInfo>) => {
    // This will be caught by the nearest error boundary
    throw error;
  };
};

// =============================================================================
// HIGHER-ORDER COMPONENT
// =============================================================================

/**
 * Higher-order component to wrap components with error boundary
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
}

// =============================================================================
// EXPORTS
// =============================================================================

export default ErrorBoundary;
export type { ErrorBoundaryProps, ErrorFallbackProps };
