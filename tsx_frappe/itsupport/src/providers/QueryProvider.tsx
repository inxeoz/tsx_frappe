import React, { ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  MutationCache,
  QueryCache,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { toast } from 'sonner';

interface QueryProviderProps {
  children: ReactNode;
}

// Create a client with optimized defaults
const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Stale time - how long data stays fresh
        staleTime: 5 * 60 * 1000, // 5 minutes
        // Cache time - how long unused data stays in cache
        gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
        // Retry failed queries
        retry: (failureCount, error) => {
          // Don't retry on 4xx errors (client errors)
          if (error instanceof Error && 'status' in error) {
            const status = (error as any).status;
            if (status >= 400 && status < 500) {
              return false;
            }
          }
          // Retry up to 3 times for other errors
          return failureCount < 3;
        },
        // Retry delay with exponential backoff
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        // Refetch on window focus (good for keeping data fresh)
        refetchOnWindowFocus: true,
        // Don't refetch on reconnect by default (can be enabled per query)
        refetchOnReconnect: 'always',
      },
      mutations: {
        // Retry mutations once
        retry: 1,
        // Don't retry on 4xx errors
        retryDelay: 1000,
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        // Global error handling for queries
        console.error('Query error:', error, query);

        // Show toast for user-facing queries (those with query keys that include 'user-facing')
        if (query.queryKey?.includes('user-facing')) {
          toast.error('Failed to load data. Please try again.');
        }
      },
      onSuccess: (data, query) => {
        // Global success handling if needed
        console.log('Query success:', query.queryKey, data);
      },
    }),
    mutationCache: new MutationCache({
      onError: (error, variables, context, mutation) => {
        // Global error handling for mutations
        console.error('Mutation error:', error, variables, mutation);

        // Default error toast (individual mutations can override this)
        if (!mutation.options.onError) {
          toast.error('Operation failed. Please try again.');
        }
      },
      onSuccess: (data, variables, context, mutation) => {
        // Global success handling for mutations
        console.log('Mutation success:', mutation.options, data);
      },
    }),
  });
};

let queryClient: QueryClient | undefined;

// Ensure we create only one query client instance
const getQueryClient = () => {
  if (!queryClient) {
    queryClient = createQueryClient();
  }
  return queryClient;
};

export function QueryProvider({ children }: QueryProviderProps) {
  const client = getQueryClient();

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* Show React Query DevTools in development */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools
          initialIsOpen={false}
          position="bottom-right"
          buttonPosition="bottom-right"
        />
      )}
    </QueryClientProvider>
  );
}

// Export the query client for use in other parts of the app
export { queryClient, getQueryClient };

// Export some utilities for advanced usage
export const invalidateAllQueries = () => {
  return getQueryClient().invalidateQueries();
};

export const clearAllQueries = () => {
  return getQueryClient().clear();
};

// Utility to prefetch data
export const prefetchTickets = () => {
  return getQueryClient().prefetchQuery({
    queryKey: ['tickets'],
    queryFn: () => {
      // Your ticket fetching logic here
      return fetch('/api/tickets').then(res => res.json());
    },
    staleTime: 5 * 60 * 1000,
  });
};

// Error boundary component for React Query errors
export class QueryErrorBoundary extends React.Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('QueryErrorBoundary caught an error:', error, errorInfo);

    // Log to your error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex items-center justify-center min-h-[200px] p-8">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-destructive mb-2">
                Something went wrong
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                An error occurred while loading this component.
              </p>
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: undefined });
                  // Optionally clear and refetch queries
                  getQueryClient().refetchQueries();
                }}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

// Hook for accessing query client in components
export const useQueryClientInstance = () => {
  return getQueryClient();
};
