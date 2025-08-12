# Toolbar Component

A flexible and reusable toolbar component that can be used across different parts of your application. The toolbar supports multiple sections with customizable alignment, various button variants, and both Lucide icons and emoji icons.

## Features

- 🎯 **Flexible Layout**: Support for left, right, and center alignment
- 🎨 **Multiple Button Variants**: All shadcn/ui button variants supported
- 🔧 **Icon Support**: Works with both Lucide icons and emoji strings
- 🎛️ **Section-based**: Organize actions into logical sections
- ♿ **Accessible**: Built on top of shadcn/ui components
- 🎭 **Customizable**: Full className support for custom styling

## Basic Usage

```tsx
import { Toolbar } from "./ui/toolbar";
import { Plus, Search, Filter } from "lucide-react";

const toolbarSections = [
  {
    id: "main-actions",
    align: "left",
    actions: [
      {
        id: "new",
        icon: Plus,
        text: "New",
        variant: "outline",
        onClick: () => console.log("New clicked"),
      },
      {
        id: "search",
        icon: Search,
        text: "Search",
        onClick: () => console.log("Search clicked"),
      },
    ],
  },
  {
    id: "secondary-actions",
    align: "right",
    actions: [
      {
        id: "filter",
        icon: Filter,
        onClick: () => console.log("Filter clicked"),
      },
    ],
  },
];

function MyComponent() {
  return <Toolbar sections={toolbarSections} />;
}
```

## API Reference

### ToolbarProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `ToolbarSection[]` | - | Array of toolbar sections |
| `className` | `string` | `""` | Additional CSS classes |
| `children` | `ReactNode` | - | Additional content to render in the toolbar |

### ToolbarSection

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier for the section |
| `actions` | `ToolbarAction[]` | - | Array of actions in this section |
| `align` | `"left" \| "right" \| "center"` | `"left"` | Alignment of actions within the section |

### ToolbarAction

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier for the action |
| `icon` | `LucideIcon \| string` | - | Icon component or emoji string |
| `text` | `string` | - | Button text (optional) |
| `onClick` | `() => void` | - | Click handler |
| `variant` | `ButtonVariant` | `"ghost"` | Button variant from shadcn/ui |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `className` | `string` | - | Additional CSS classes for the button |

## Examples

### Basic Toolbar with Text and Icons

```tsx
const basicSections = [
  {
    id: "main",
    align: "left",
    actions: [
      {
        id: "new",
        icon: Plus,
        text: "New Item",
        variant: "outline",
        onClick: handleNew,
      },
      {
        id: "search",
        icon: Search,
        text: "Search",
        onClick: handleSearch,
      },
    ],
  },
];
```

### Icon-Only Toolbar

```tsx
const iconOnlySections = [
  {
    id: "actions",
    align: "center",
    actions: [
      {
        id: "save",
        icon: Save,
        onClick: handleSave,
      },
      {
        id: "edit",
        icon: Edit,
        onClick: handleEdit,
      },
      {
        id: "delete",
        icon: Trash,
        variant: "destructive",
        onClick: handleDelete,
      },
    ],
  },
];
```

### Emoji Icons

```tsx
const emojiSections = [
  {
    id: "dashboard",
    align: "left",
    actions: [
      {
        id: "analytics",
        icon: "📊",
        text: "Analytics",
        onClick: handleAnalytics,
      },
      {
        id: "reports",
        icon: "📈",
        text: "Reports",
        onClick: handleReports,
      },
      {
        id: "notifications",
        icon: "🔔",
        onClick: handleNotifications,
      },
    ],
  },
];
```

### Multiple Sections with Different Alignments

```tsx
const multipleSections = [
  {
    id: "primary-actions",
    align: "left",
    actions: [
      {
        id: "create",
        icon: Plus,
        text: "Create",
        variant: "default",
        onClick: handleCreate,
      },
      {
        id: "import",
        icon: Upload,
        text: "Import",
        onClick: handleImport,
      },
    ],
  },
  {
    id: "view-options",
    align: "center",
    actions: [
      {
        id: "grid",
        icon: "⊞",
        onClick: () => setView("grid"),
      },
      {
        id: "list",
        icon: "☰",
        onClick: () => setView("list"),
      },
    ],
  },
  {
    id: "secondary-actions",
    align: "right",
    actions: [
      {
        id: "export",
        icon: Download,
        text: "Export",
        onClick: handleExport,
      },
      {
        id: "settings",
        icon: Settings,
        onClick: handleSettings,
      },
    ],
  },
];
```

### Toolbar with Custom Content

```tsx
function SearchToolbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  const sections = [
    {
      id: "search-actions",
      align: "left",
      actions: [
        {
          id: "search",
          icon: Search,
          text: "Search",
          onClick: () => setIsSearchActive(true),
        },
      ],
    },
  ];

  return (
    <Toolbar sections={sections}>
      {isSearchActive && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded"
          />
          <button onClick={() => setIsSearchActive(false)}>
            Cancel
          </button>
        </div>
      )}
    </Toolbar>
  );
}
```

## Styling

The toolbar component uses the following default classes:

- `bg-card` - Card background color
- `border-b border-border` - Bottom border
- `p-4` - Padding
- `text-muted-foreground hover:text-foreground` - Button text colors

You can override these styles by passing custom classes:

```tsx
<Toolbar 
  sections={sections} 
  className="bg-primary text-primary-foreground shadow-lg" 
/>
```

## Button Variants

The toolbar supports all shadcn/ui button variants:

- `default` - Primary button style
- `outline` - Outlined button
- `ghost` - Transparent background (default)
- `destructive` - Red/danger styling
- `secondary` - Secondary button style
- `link` - Link-style button

## Icon Types

### Lucide Icons

```tsx
import { Search, Plus, Settings } from "lucide-react";

{
  id: "search",
  icon: Search,  // Component reference
  text: "Search"
}
```

### Emoji Strings

```tsx
{
  id: "analytics",
  icon: "📊",  // String emoji
  text: "Analytics"
}
```

### Custom Icons

You can also use other icon libraries by passing the component:

```tsx
import { CustomIcon } from "my-icon-library";

{
  id: "custom",
  icon: CustomIcon,
  text: "Custom Action"
}
```

## Accessibility

The toolbar component is built with accessibility in mind:

- All buttons are keyboard navigable
- Proper focus management
- ARIA labels are supported through the underlying Button component
- Screen reader friendly

## Best Practices

1. **Group Related Actions**: Use sections to logically group related functionality
2. **Consistent Alignment**: Use left alignment for primary actions, right for secondary
3. **Icon + Text for Important Actions**: Include text labels for key actions
4. **Icon Only for Common Actions**: Use icon-only for well-understood actions (save, edit, delete)
5. **Limit Actions**: Don't overcrowd the toolbar - use "More" menus for additional actions
6. **Consistent Variants**: Use the same variant for similar types of actions

## Integration Examples

### In a Data Table

```tsx
function DataTable() {
  const toolbarSections = [
    {
      id: "table-actions",
      align: "left",
      actions: [
        { id: "add", icon: Plus, text: "Add Row", variant: "outline", onClick: addRow },
        { id: "filter", icon: Filter, text: "Filter", onClick: showFilters },
        { id: "export", icon: Download, text: "Export", onClick: exportData },
      ],
    },
    {
      id: "view-options",
      align: "right",
      actions: [
        { id: "refresh", icon: RefreshCw, onClick: refreshData },
        { id: "settings", icon: Settings, onClick: showSettings },
      ],
    },
  ];

  return (
    <div>
      <Toolbar sections={toolbarSections} />
      {/* Table content */}
    </div>
  );
}
```

### In a Form

```tsx
function FormToolbar({ onSave, onCancel, canSave }) {
  const sections = [
    {
      id: "form-actions",
      align: "left",
      actions: [
        {
          id: "save",
          icon: Save,
          text: "Save",
          variant: "default",
          disabled: !canSave,
          onClick: onSave,
        },
        {
          id: "cancel",
          icon: X,
          text: "Cancel",
          variant: "outline",
          onClick: onCancel,
        },
      ],
    },
  ];

  return <Toolbar sections={sections} />;
}
```
