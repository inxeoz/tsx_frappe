import React from 'react';
import { motion } from 'framer-motion';
import { useTicketStore } from '../stores/ticketStore';
import { useTicketsQuery } from '../hooks/useTicketsQuery';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, XCircle, Code, Zap, Shield, Layers } from 'lucide-react';

/**
 * This component demonstrates the benefits of using external libraries
 * vs writing custom components from scratch.
 */
export function ExternalLibrariesComparison() {
  const { tickets: zustandTickets, addTicket: zustandAddTicket } = useTicketStore();
  const {
    tickets: reactQueryTickets,
    isLoading,
    createTicket,
    isCreating,
    totalTickets
  } = useTicketsQuery();

  const addSampleTicket = () => {
    const newTicket = {
      title: "Sample External Library Ticket",
      description: "Created using external libraries for better performance",
      agent: null,
      status: "new",
      priority: "medium",
      creationDate: new Date().toLocaleDateString(),
      resolutionDate: null,
      tags: ["New", "Sample"]
    };

    // Zustand approach
    zustandAddTicket(newTicket);

    // React Query approach with optimistic updates and error handling
    createTicket(newTicket);
  };

  const comparisonData = [
    {
      category: "State Management",
      customApproach: {
        title: "Multiple useState hooks",
        description: "Manual state management with multiple hooks, prop drilling",
        code: `const [tickets, setTickets] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [searchQuery, setSearchQuery] = useState('');`,
        issues: ["Prop drilling", "Manual synchronization", "No persistence", "Complex updates"],
        lines: 50
      },
      libraryApproach: {
        title: "Zustand Store",
        description: "Global state management with automatic subscriptions",
        code: `const { tickets, addTicket, searchQuery } = useTicketStore();`,
        benefits: ["Global state", "Automatic subscriptions", "Built-in persistence", "TypeScript support"],
        lines: 10,
        library: "Zustand"
      }
    },
    {
      category: "Data Fetching",
      customApproach: {
        title: "Manual fetch with useEffect",
        description: "Custom API calls, manual loading states, no caching",
        code: `useEffect(() => {
  setLoading(true);
  fetch('/api/tickets')
    .then(res => res.json())
    .then(data => {
      setTickets(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
}, []);`,
        issues: ["No caching", "Manual loading states", "No optimistic updates", "No retry logic"],
        lines: 80
      },
      libraryApproach: {
        title: "React Query",
        description: "Automatic caching, background refetch, optimistic updates",
        code: `const { tickets, isLoading, createTicket } = useTicketsQuery();`,
        benefits: ["Automatic caching", "Background refetch", "Optimistic updates", "Error boundaries"],
        lines: 15,
        library: "TanStack Query"
      }
    },
    {
      category: "Animations",
      customApproach: {
        title: "CSS Transitions",
        description: "Manual CSS animations, complex state management",
        code: `.animate-in {
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  to { opacity: 1; transform: translateY(0); }
}`,
        issues: ["Complex CSS", "No orchestration", "Hard to coordinate", "Limited easing"],
        lines: 30
      },
      libraryApproach: {
        title: "Framer Motion",
        description: "Declarative animations with advanced features",
        code: `<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>`,
        benefits: ["Declarative API", "Advanced easing", "Orchestration", "Layout animations"],
        lines: 8,
        library: "Framer Motion"
      }
    },
    {
      category: "UI Components",
      customApproach: {
        title: "Custom Components",
        description: "Build everything from scratch, handle accessibility manually",
        code: `const Button = ({ children, onClick, disabled }) => {
  const [focused, setFocused] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      role="button"
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};`,
        issues: ["Accessibility gaps", "Inconsistent styling", "Reinventing wheel", "Testing burden"],
        lines: 200
      },
      libraryApproach: {
        title: "Radix UI + Shadcn/ui",
        description: "Accessible primitives with consistent styling",
        code: `import { Button } from './ui/button';

<Button variant="primary" size="sm">
  Click me
</Button>`,
        benefits: ["Built-in accessibility", "Consistent design", "Well tested", "Customizable"],
        lines: 5,
        library: "Radix UI + Shadcn"
      }
    }
  ];

  const stats = {
    customApproach: {
      totalLines: comparisonData.reduce((sum, item) => sum + item.customApproach.lines, 0),
      issues: comparisonData.reduce((sum, item) => sum + item.customApproach.issues.length, 0),
      maintainability: 30,
      developmentSpeed: 20
    },
    libraryApproach: {
      totalLines: comparisonData.reduce((sum, item) => sum + item.libraryApproach.lines, 0),
      benefits: comparisonData.reduce((sum, item) => sum + item.libraryApproach.benefits.length, 0),
      maintainability: 90,
      developmentSpeed: 85
    }
  };

  return (
    <div className="p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-4">External Libraries vs Custom Code</h1>
        <p className="text-muted-foreground mb-8">
          Why using external libraries leads to less code and more output
        </p>
      </motion.div>

      {/* Live Demo */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Live Demonstration
          </CardTitle>
          <CardDescription>
            See the libraries in action - both approaches create tickets, but with different code complexity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-medium">Zustand Store</h3>
              <p className="text-sm text-muted-foreground">
                Global state: {zustandTickets.length} tickets
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">React Query + API</h3>
              <p className="text-sm text-muted-foreground">
                {isLoading ? 'Loading...' : `Cached data: ${totalTickets} tickets`}
              </p>
            </div>
          </div>
          <Button
            onClick={addSampleTicket}
            disabled={isCreating}
            className="w-full"
          >
            {isCreating ? 'Creating...' : 'Add Sample Ticket (Both Approaches)'}
          </Button>
        </CardContent>
      </Card>

      {/* Comparison Grid */}
      <div className="space-y-6">
        {comparisonData.map((comparison, index) => (
          <motion.div
            key={comparison.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  {comparison.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Custom Approach */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-destructive">
                      <XCircle className="w-4 h-4" />
                      <h3 className="font-semibold">Custom Implementation</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {comparison.customApproach.description}
                    </p>
                    <div className="bg-muted/50 p-3 rounded-md">
                      <pre className="text-xs overflow-x-auto">
                        <code>{comparison.customApproach.code}</code>
                      </pre>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-destructive">Issues:</p>
                      <div className="flex flex-wrap gap-1">
                        {comparison.customApproach.issues.map((issue, i) => (
                          <Badge key={i} variant="destructive" className="text-xs">
                            {issue}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        ~{comparison.customApproach.lines} lines of code
                      </p>
                    </div>
                  </div>

                  {/* Library Approach */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <h3 className="font-semibold">External Library</h3>
                      <Badge variant="outline" className="text-xs">
                        {comparison.libraryApproach.library}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {comparison.libraryApproach.description}
                    </p>
                    <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-md border border-green-200 dark:border-green-800">
                      <pre className="text-xs overflow-x-auto">
                        <code>{comparison.libraryApproach.code}</code>
                      </pre>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-green-600">Benefits:</p>
                      <div className="flex flex-wrap gap-1">
                        {comparison.libraryApproach.benefits.map((benefit, i) => (
                          <Badge key={i} variant="secondary" className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        ~{comparison.libraryApproach.lines} lines of code
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Statistics Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Code className="w-5 h-5" />
              Impact Summary
            </CardTitle>
            <CardDescription>
              Quantified benefits of using external libraries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">
                  {stats.customApproach.totalLines}
                </div>
                <div className="text-xs text-muted-foreground">Lines (Custom)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {stats.libraryApproach.totalLines}
                </div>
                <div className="text-xs text-muted-foreground">Lines (Libraries)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(((stats.customApproach.totalLines - stats.libraryApproach.totalLines) / stats.customApproach.totalLines) * 100)}%
                </div>
                <div className="text-xs text-muted-foreground">Code Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {stats.libraryApproach.developmentSpeed}%
                </div>
                <div className="text-xs text-muted-foreground">Faster Development</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Key Advantages of External Libraries:
                  </h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• <strong>87% less code</strong> - Focus on business logic, not infrastructure</li>
                    <li>• <strong>Battle-tested</strong> - Used by thousands of developers, bugs already fixed</li>
                    <li>• <strong>Performance optimized</strong> - Features like caching, memoization built-in</li>
                    <li>• <strong>Accessibility compliant</strong> - WCAG guidelines already implemented</li>
                    <li>• <strong>TypeScript support</strong> - Full type safety out of the box</li>
                    <li>• <strong>Active maintenance</strong> - Regular updates, security patches</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default ExternalLibrariesComparison;
