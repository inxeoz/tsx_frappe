# IT Support Dashboard

A modern, feature-rich IT support ticket management system built with React, TypeScript, and Tailwind CSS. This dashboard provides comprehensive ticket management capabilities with an intuitive interface, advanced search functionality, and customizable workflows.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/your-repo/it-support-dashboard)
[![TypeScript](https://img.shields.io/badge/typescript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-18.3.1-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.4.14-blue.svg)](https://tailwindcss.com/)

## 🚀 Features

### Core Functionality
- **Multi-View Interface**: Table view, Kanban board, and form-based ticket management
- **Real-time Updates**: Optimistic UI updates with error handling and rollback
- **Advanced Search**: Fuzzy search, filters, and query history with debounced input
- **Drag & Drop**: Intuitive ticket status management with visual feedback
- **Theme Management**: Light/dark/system themes with custom theme creation
- **Responsive Design**: Mobile-first approach with touch-friendly interactions

### Advanced Features
- **Global State Management**: Centralized state with React Context and useReducer
- **Error Boundaries**: Graceful error handling with retry mechanisms
- **Notification System**: Toast notifications with actions and auto-dismiss
- **Keyboard Shortcuts**: Power user features with customizable hotkeys
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **Performance Optimized**: Memoization, lazy loading, and efficient rendering

### Data Management
- **Local Storage Persistence**: Automatic state persistence across sessions
- **Optimistic Updates**: Immediate UI feedback with background synchronization
- **Type Safety**: Comprehensive TypeScript interfaces and type checking
- **Extensible Architecture**: Plugin-ready design for custom integrations

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Installation](#installation)
- [Development](#development)
- [Architecture](#architecture)
- [Components](#components)
- [Hooks](#hooks)
- [Types](#types)
- [Customization](#customization)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm 8+ or yarn 1.22+
- Modern browser with ES2020 support

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/it-support-dashboard.git
cd it-support-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🏗️ Architecture

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui based)
│   ├── ErrorBoundary.tsx
│   ├── NotificationManager.tsx
│   └── ...
├── contexts/           # React contexts for state management
│   └── AppContext.tsx
├── hooks/              # Custom React hooks
│   ├── useTickets.ts
│   ├── useSearch.ts
│   └── useTheme.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── cn.ts          # Class name merging utility
├── styles/            # Global styles and Tailwind config
└── main.tsx          # Application entry point
```

### Key Design Patterns

- **Component Composition**: Flexible, reusable components with clear interfaces
- **Custom Hooks**: Business logic separation from UI components
- **Context + Reducer**: Predictable state management with actions
- **Error Boundaries**: Graceful error handling at multiple levels
- **TypeScript First**: Type safety throughout the application

## 🧩 Components

### Core Components

#### `App.tsx`
Main application component with:
- View routing and management
- Global error boundary
- Keyboard shortcut handling
- Theme initialization

#### `TopBar.tsx`
Navigation header featuring:
- Tab-based view switching
- Action buttons and controls
- User profile and settings
- Responsive mobile menu

#### `TicketDashboard.tsx`
Table-based ticket management:
- Grouped ticket display
- Sortable columns
- Bulk operations
- Export functionality

#### `KanbanBoard.tsx`
Drag-and-drop ticket management:
- Column-based workflow
- Visual status updates
- Real-time synchronization
- Touch-friendly mobile interface

### UI Components (`src/components/ui/`)

Built on top of shadcn/ui with custom enhancements:

- `Button` - Flexible button component with variants
- `Card` - Container component for content grouping
- `Dialog` - Modal dialogs with accessibility
- `Toolbar` - Flexible toolbar with sections and actions
- `LoadingSpinner` - Animated loading indicators
- And 40+ additional components...

### Component Usage Examples

```tsx
// Basic button usage
<Button variant="primary" size="lg" onClick={handleClick}>
  Create Ticket
</Button>

// Toolbar with sections
<Toolbar sections={[
  {
    id: 'actions',
    align: 'left',
    actions: [
      { id: 'search', icon: Search, text: 'Search', onClick: toggleSearch }
    ]
  }
]} />

// Card with content
<Card>
  <CardHeader>
    <CardTitle>Ticket Details</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Ticket description...</p>
  </CardContent>
</Card>
```

## 🎣 Hooks

### `useTickets`

Comprehensive ticket management hook with:

```tsx
const {
  tickets,
  loading,
  error,
  addTicket,
  updateTicket,
  deleteTicket,
  searchTickets,
  filterTickets
} = useTickets({
  enablePersistence: true,
  enableOptimisticUpdates: true
});
```

**Features:**
- CRUD operations with optimistic updates
- Local storage persistence
- Search and filtering
- Error handling and retry logic
- Performance optimizations

### `useSearch`

Advanced search functionality:

```tsx
const {
  query,
  isActive,
  results,
  searchHistory,
  toggleFuzzySearch,
  getSuggestions
} = useSearch(tickets, {
  debounceMs: 300,
  enableFuzzySearch: true,
  enableHistory: true
});
```

**Features:**
- Debounced search input
- Fuzzy matching capabilities
- Search history and suggestions
- Highlighting and relevance scoring
- Field-specific search

### `useTheme`

Theme management with persistence:

```tsx
const {
  theme,
  resolvedTheme,
  colors,
  setTheme,
  toggleTheme,
  createCustomTheme
} = useTheme({
  enableSystemDetection: true,
  enablePersistence: true
});
```

**Features:**
- Light/dark/system theme support
- Custom theme creation
- Color palette management
- System preference detection
- Theme persistence

## 📝 Types

### Core Types

```tsx
interface Ticket {
  id: string | number;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  agent: string | null;
  creationDate: string;
  resolutionDate: string | null;
  tags: string[];
}

enum TicketStatus {
  NEW = 'new',
  REVIEWED = 'reviewed',
  IN_PROGRESS = 'in-progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed'
}

enum TicketPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}
```

### Component Props

All components include comprehensive TypeScript interfaces:

```tsx
interface TicketCardProps {
  ticket: Ticket;
  onUpdate?: (ticket: Ticket) => void;
  onDelete?: (id: string | number) => void;
  className?: string;
  variant?: 'default' | 'compact';
}
```

## 🎨 Customization

### Theming

#### CSS Custom Properties

The application uses CSS custom properties for theming:

```css
:root {
  --color-primary-500: #3b82f6;
  --color-secondary-500: #64748b;
  --color-background: #ffffff;
  --color-foreground: #0f172a;
}

[data-theme="dark"] {
  --color-background: #0f172a;
  --color-foreground: #f8fafc;
}
```

#### Custom Theme Creation

```tsx
const customTheme = createCustomTheme(
  '#ff6b6b', // Primary color
  false,     // Is dark theme
  'Custom Red Theme'
);

applyCustomTheme(customTheme.id);
```

### Component Customization

#### Extending Components

```tsx
// Custom ticket card with additional features
const EnhancedTicketCard: React.FC<TicketCardProps> = (props) => {
  return (
    <TicketCard {...props}>
      <CustomActions ticketId={props.ticket.id} />
    </TicketCard>
  );
};
```

#### Styling with Tailwind

```tsx
// Using the cn utility for conditional classes
const buttonClass = cn(
  'base-button-classes',
  variant === 'danger' && 'bg-red-500 text-white',
  size === 'large' && 'px-6 py-3',
  className
);
```

### Configuration

#### App Configuration

```tsx
const appConfig: AppConfig = {
  name: 'IT Support Dashboard',
  version: '1.0.0',
  defaultTheme: 'system',
  features: {
    enableKanban: true,
    enableDragAndDrop: true,
    enableSearch: true,
    enableFilters: true
  }
};
```

## ⚡ Performance

### Optimization Strategies

1. **Component Memoization**
   ```tsx
   const TicketCard = React.memo(({ ticket, onUpdate }) => {
     // Component implementation
   });
   ```

2. **Custom Hooks with Dependencies**
   ```tsx
   const processedTickets = useMemo(() => {
     return tickets.filter(ticket => matchesFilters(ticket, filters));
   }, [tickets, filters]);
   ```

3. **Debounced Operations**
   ```tsx
   const debouncedSearch = useMemo(
     () => debounce(searchTickets, 300),
     [searchTickets]
   );
   ```

4. **Lazy Loading**
   ```tsx
   const LazyKanbanBoard = React.lazy(() => import('./KanbanBoard'));
   ```

### Performance Monitoring

- Bundle size analysis with `npm run build`
- React DevTools Profiler integration
- Core Web Vitals tracking ready
- Memory leak prevention with cleanup

## ♿ Accessibility

### WCAG 2.1 AA Compliance

- **Keyboard Navigation**: Full keyboard support with focus management
- **Screen Reader**: ARIA labels, roles, and live regions
- **Color Contrast**: 4.5:1 minimum contrast ratios
- **Focus Management**: Visible focus indicators and logical tab order

### Accessibility Features

```tsx
// ARIA labels and roles
<button
  role="button"
  aria-label="Delete ticket"
  aria-describedby="delete-description"
  onClick={handleDelete}
>
  <DeleteIcon aria-hidden="true" />
</button>

// Live regions for dynamic content
<div aria-live="polite" aria-atomic="true">
  {notifications.map(notification => (
    <NotificationItem key={notification.id} {...notification} />
  ))}
</div>
```

### Keyboard Shortcuts

- `Ctrl/Cmd + K`: Toggle search
- `Ctrl/Cmd + D`: Toggle theme
- `Ctrl/Cmd + 1-4`: Switch views
- `Escape`: Close modals/cancel operations

## 🧪 Testing

### Testing Strategy

1. **Unit Tests**: Component and hook testing with Jest and React Testing Library
2. **Integration Tests**: User workflow testing
3. **E2E Tests**: Full application testing with Cypress
4. **Accessibility Tests**: Automated a11y testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e

# Run accessibility tests
npm run test:a11y
```

### Test Examples

```tsx
// Component testing
describe('TicketCard', () => {
  it('displays ticket information correctly', () => {
    render(<TicketCard ticket={mockTicket} />);
    expect(screen.getByText(mockTicket.title)).toBeInTheDocument();
  });
});

// Hook testing
describe('useTickets', () => {
  it('adds a new ticket', () => {
    const { result } = renderHook(() => useTickets());
    act(() => {
      result.current.addTicket(newTicket);
    });
    expect(result.current.tickets).toContain(newTicket);
  });
});
```

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Environment Variables

```env
# .env.production
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_ENABLE_ANALYTICS=true
VITE_ERROR_REPORTING_DSN=https://sentry.io/dsn
```

### Deployment Options

#### Vercel (Recommended)

```bash
npm install -g vercel
vercel deploy --prod
```

#### Netlify

```bash
npm run build
# Deploy dist/ folder to Netlify
```

#### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Performance Optimization for Production

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Remove unused code
- **Asset Optimization**: Image compression and lazy loading
- **CDN Integration**: Static asset delivery optimization

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`

### Code Standards

- **TypeScript**: Strict type checking enabled
- **ESLint**: Airbnb configuration with custom rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Semantic commit messages

### Pull Request Process

1. Ensure tests pass: `npm test`
2. Update documentation if needed
3. Follow the pull request template
4. Request review from maintainers

### Code Style Guide

```tsx
// Component naming: PascalCase
export const TicketCard: React.FC<TicketCardProps> = ({ ticket, onUpdate }) => {
  // Hook calls at the top
  const [isEditing, setIsEditing] = useState(false);
  
  // Event handlers with handle prefix
  const handleUpdate = useCallback((updates: Partial<Ticket>) => {
    onUpdate?.(updates);
  }, [onUpdate]);
  
  // Early returns for conditions
  if (!ticket) return null;
  
  return (
    <Card className={cn('ticket-card', isEditing && 'editing')}>
      {/* Component JSX */}
    </Card>
  );
};
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) team for the amazing library
- [Lucide](https://lucide.dev/) for the beautiful icon set

## 📞 Support

### Documentation

- [API Reference](./docs/API.md)
- [Component Guide](./docs/COMPONENTS.md)
- [Theme Guide](./docs/THEMES.md)
- [Integration Guide](./docs/INTEGRATION.md)

### Getting Help

- 📧 Email: support@itdashboard.com
- 💬 Discord: [IT Dashboard Community](https://discord.gg/itdashboard)
- 🐛 Issues: [GitHub Issues](https://github.com/your-repo/it-support-dashboard/issues)
- 📖 Wiki: [Project Wiki](https://github.com/your-repo/it-support-dashboard/wiki)

### Roadmap

- [ ] Real-time collaboration features
- [ ] Advanced reporting and analytics
- [ ] Mobile application
- [ ] API integrations (Jira, ServiceNow)
- [ ] AI-powered ticket categorization
- [ ] Multi-language support

---

**Built with ❤️ by the IT Support Dashboard Team**

*Last updated: December 2024*