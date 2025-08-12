# Theme-Aware Component Implementation Guide

This guide shows you how to create components that automatically work with light and dark themes **without coding each component individually**.

## 🎯 Quick Start: Use Semantic Classes

Your theme system is already complete! Just use semantic color classes instead of hard-coded colors:

```tsx
// ✅ This automatically works in both themes
function MyComponent() {
  return (
    <div className="bg-background text-foreground p-4">
      <div className="bg-card border-border rounded-lg p-6">
        <h2 className="text-card-foreground font-semibold">Card Title</h2>
        <p className="text-muted-foreground mb-4">Subtitle text</p>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded">
          Primary Action
        </button>
      </div>
    </div>
  );
}
```

## 📋 Semantic Color Reference

| Tailwind Class | Use For | Light Mode | Dark Mode |
|----------------|---------|------------|-----------|
| `bg-background` | Main app background | White | Dark gray |
| `bg-card` | Card/panel backgrounds | White | Dark gray |
| `bg-muted` | Subtle backgrounds | Light gray | Darker gray |
| `bg-primary` | Primary buttons/accents | Dark blue | Light blue |
| `bg-secondary` | Secondary elements | Light gray | Medium gray |
| `bg-accent` | Hover states | Light gray | Dark gray |
| `bg-input` | Form inputs | Light gray | Dark gray |
| `bg-destructive` | Error/delete buttons | Red | Dark red |
| `text-foreground` | Main text | Dark | Light |
| `text-muted-foreground` | Secondary text | Gray | Light gray |
| `text-card-foreground` | Text on cards | Dark | Light |
| `border-border` | All borders | Light gray | Dark gray |

## 🔧 Common Component Patterns

### 1. Cards/Panels
```tsx
function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
```

### 2. Buttons
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
  };

  return (
    <button 
      className={`px-4 py-2 rounded-md font-medium transition-colors ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### 3. Form Elements
```tsx
interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function Input({ label, placeholder, value, onChange, error }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-3 py-2 rounded-md border transition-colors
          bg-input text-foreground border-border
          placeholder:text-muted-foreground
          focus:outline-none focus:ring-2 focus:ring-ring
          ${error ? 'border-destructive' : ''}
        `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
```

### 4. Navigation Items
```tsx
interface NavItemProps {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ label, icon, isActive, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium
        transition-colors text-left
        ${isActive 
          ? 'bg-primary text-primary-foreground' 
          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}
```

### 5. Status Badges
```tsx
interface BadgeProps {
  variant: 'default' | 'success' | 'warning' | 'destructive' | 'secondary';
  children: React.ReactNode;
}

function Badge({ variant, children }: BadgeProps) {
  const variants = {
    default: 'bg-primary text-primary-foreground',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
    destructive: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
    secondary: 'bg-secondary text-secondary-foreground'
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
```

### 6. Modal/Dialog
```tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-card-foreground">{title}</h2>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        </div>
        <div className="p-4 text-card-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
```

### 7. Data Tables
```tsx
interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

function Table({ headers, rows }: TableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-background">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-border hover:bg-muted/50 transition-colors">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-sm text-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## 🎨 Theme Controls

### Basic Theme Toggle
```tsx
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'light' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'dark' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'system' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
        }`}
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
}
```

### Programmatic Theme Detection
```tsx
import { useTheme } from 'next-themes';

function MyComponent() {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  
  // theme: user's selected theme ('light' | 'dark' | 'system')
  // systemTheme: OS theme ('light' | 'dark') 
  // resolvedTheme: actual theme being used ('light' | 'dark')
  
  return (
    <div>
      <p>Selected: {theme}</p>
      <p>System: {systemTheme}</p>
      <p>Resolved: {resolvedTheme}</p>
    </div>
  );
}
```

## 🚫 Common Mistakes to Avoid

### ❌ Don't Use Hard-Coded Colors
```tsx
// ❌ Bad - won't adapt to theme
<div className="bg-white text-black border-gray-300">
<button className="bg-blue-500 hover:bg-blue-600">

// ✅ Good - automatically adapts
<div className="bg-background text-foreground border-border">
<button className="bg-primary hover:bg-primary/90">
```

### ❌ Don't Create Theme-Specific Components
```tsx
// ❌ Bad - unnecessary complexity
function LightButton() { /* light styles */ }
function DarkButton() { /* dark styles */ }

// ✅ Good - one component that adapts
function Button() {
  return <button className="bg-primary text-primary-foreground" />;
}
```

### ❌ Don't Use Conditional Theme Logic
```tsx
// ❌ Bad - manual theme detection
const { theme } = useTheme();
const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

// ✅ Good - automatic adaptation
const bgColor = 'bg-background';
```

## 🔧 Advanced Patterns

### Conditional Styling Based on Theme (When Needed)
```tsx
import { useTheme } from 'next-themes';

function AdvancedComponent() {
  const { resolvedTheme } = useTheme();
  
  // Only use this pattern for complex cases that can't use semantic colors
  const specialStyling = resolvedTheme === 'dark' 
    ? 'shadow-2xl shadow-black/50' 
    : 'shadow-xl shadow-gray-300/50';
    
  return (
    <div className={`bg-card text-card-foreground ${specialStyling}`}>
      Complex component with theme-specific shadows
    </div>
  );
}
```

### Custom Color Additions
If you need additional colors, add them to your CSS variables in `index.css`:

```css
.it-support-dashboard {
  --success: 142 76% 36%;
  --success-foreground: 355 7% 97%;
  --warning: 38 92% 50%;
  --warning-foreground: 48 96% 89%;
}

.it-support-dashboard.dark {
  --success: 142 84% 24%;
  --success-foreground: 142 85% 96%;
  --warning: 48 96% 89%;
  --warning-foreground: 25 95% 53%;
}
```

Then extend your Tailwind config:
```js
// tailwind.config.js
colors: {
  success: {
    DEFAULT: "hsl(var(--success))",
    foreground: "hsl(var(--success-foreground))",
  },
  warning: {
    DEFAULT: "hsl(var(--warning))",
    foreground: "hsl(var(--warning-foreground))",
  },
}
```

## ✅ Best Practices Checklist

- ✅ Use semantic color classes (`bg-background`, `text-foreground`)
- ✅ Always pair background and text colors (`bg-card` + `text-card-foreground`)
- ✅ Use transitions for smooth theme switching (`transition-colors`)
- ✅ Test components in both light and dark themes
- ✅ Use hover states that work in both themes (`hover:bg-accent`)
- ✅ Prefer semantic classes over conditional theme logic
- ✅ Keep the `.it-support-dashboard` wrapper for style scoping

## 🎯 Summary

Your theme system is **already complete**! You don't need to code each component for themes. Just:

1. Use semantic color classes instead of hard-coded colors
2. Follow the component patterns above
3. Test in both light and dark modes
4. Let the CSS variables handle the theme switching automatically

The system automatically handles:
- ✅ Theme switching (light/dark/system)
- ✅ Smooth transitions
- ✅ All component styling
- ✅ User preference persistence
- ✅ System theme detection

Your components will automatically work in both themes without any additional coding!