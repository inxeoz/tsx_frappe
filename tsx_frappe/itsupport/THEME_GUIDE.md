# Dark/Light Theme System Guide

This guide explains how to use the dark/light theme system in your TSX Tailwind application.

## Overview

Your application uses a robust theme system built with:
- **next-themes** for theme state management
- **Tailwind CSS** with CSS custom properties for theming
- **Semantic color tokens** that automatically adapt to light/dark modes

## Current Setup

### 1. Theme Provider
The `ThemeProvider` wraps your entire app in `main.tsx`:

```tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  <App />
</ThemeProvider>
```

### 2. Theme Toggle Button
A toggle button in the top bar allows users to switch between themes:
- Click the sun/moon icon to toggle between light and dark themes
- Smooth animations show the current state
- Icons rotate and scale for visual feedback

### 3. CSS Variables
All colors are defined as CSS custom properties that change based on the theme:
- Light theme: `--background: 0 0% 100%` (white)
- Dark theme: `--background: 222.2 84% 4.9%` (dark gray)

## Using Theme-Aware Colors

### ✅ Recommended: Use Semantic Color Classes

Use Tailwind's semantic color classes that automatically adapt to the current theme:

```tsx
// Backgrounds
<div className="bg-background text-foreground">Main content</div>
<div className="bg-card text-card-foreground">Card content</div>
<div className="bg-muted text-muted-foreground">Subtle content</div>

// Interactive Elements
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Action
</button>

<input className="bg-input text-foreground border-border" />

// Status Colors
<div className="bg-destructive text-destructive-foreground">Error</div>
<div className="bg-secondary text-secondary-foreground">Info</div>
```

### Available Semantic Colors

| Color Token | Usage | Light Mode | Dark Mode |
|-------------|--------|------------|-----------|
| `background` | Main app background | White | Dark gray |
| `foreground` | Main text color | Dark | Light |
| `card` | Card backgrounds | White | Dark gray |
| `muted` | Subtle backgrounds | Light gray | Darker gray |
| `primary` | Primary actions | Dark | Light |
| `secondary` | Secondary elements | Light gray | Medium gray |
| `destructive` | Error states | Red | Dark red |
| `border` | Borders | Light gray | Dark gray |
| `input` | Form inputs | Light gray | Dark gray |

### ❌ Avoid: Hard-coded Colors

Don't use fixed color values that don't adapt to themes:

```tsx
// ❌ Bad - always white regardless of theme
<div className="bg-white text-black">

// ❌ Bad - always dark regardless of theme  
<div className="bg-gray-800 text-white">

// ✅ Good - adapts to current theme
<div className="bg-background text-foreground">
```

## Component Examples

### Theme-Aware Card Component

```tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'muted';
}

export function Card({ title, children, variant = 'default' }: CardProps) {
  return (
    <div className={`
      rounded-lg border p-6
      ${variant === 'default' 
        ? 'bg-card text-card-foreground border-border' 
        : 'bg-muted text-muted-foreground border-border'
      }
    `}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}
```

### Theme-Aware Button Variants

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant, children, onClick }: ButtonProps) {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  };

  return (
    <button 
      className={`px-4 py-2 rounded-md transition-colors ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Theme-Aware Form Elements

```tsx
export function FormField({ label, ...inputProps }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input 
        className="
          w-full px-3 py-2 rounded-md border
          bg-input text-foreground border-border
          focus:outline-none focus:ring-2 focus:ring-ring
          placeholder:text-muted-foreground
        "
        {...inputProps}
      />
    </div>
  );
}
```

## Advanced Theme Customization

### Adding Custom Theme Colors

1. Add CSS variables to your `index.css`:

```css
.it-support-dashboard {
  --success: 142 76% 36%;
  --success-foreground: 355 7% 97%;
  --warning: 38 92% 50%;
  --warning-foreground: 48 96% 89%;
}

.it-support-dashboard.dark {
  --success: 142 84% 24%;
  --success-foreground: 355 7% 97%;
  --warning: 48 96% 89%;
  --warning-foreground: 38 92% 50%;
}
```

2. Add to Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
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
    }
  }
}
```

3. Use in components:

```tsx
<div className="bg-success text-success-foreground">Success message</div>
<div className="bg-warning text-warning-foreground">Warning message</div>
```

### System Theme Detection

The theme provider is configured to detect system preferences:

```tsx
// Respects user's OS theme preference
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
```

### Programmatic Theme Control

Access theme state in any component:

```tsx
import { useTheme } from "next-themes";

export function CustomThemeControl() {
  const { theme, setTheme, systemTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>System theme: {systemTheme}</p>
      
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  );
}
```

## Best Practices

1. **Always use semantic colors** instead of hard-coded values
2. **Test both themes** during development
3. **Use hover states** that work in both themes: `hover:bg-accent`
4. **Consider contrast** - ensure text is readable in both themes
5. **Use transitions** for smooth theme switching: `transition-colors`

## Troubleshooting

### Theme Not Switching
- Check if `ThemeProvider` wraps your app
- Verify Tailwind config has `darkMode: "class"`
- Ensure CSS variables are defined for both themes

### Colors Not Changing
- Use semantic color classes (`bg-background`) not fixed ones (`bg-white`)
- Check CSS custom properties are properly defined
- Verify Tailwind is processing your classes

### Flashing on Load
- Set a default theme in `ThemeProvider`
- Consider using `suppressHydrationWarning` for SSR

## Examples in Your Codebase

Your existing components already demonstrate good theme usage:

- **TopBar**: Uses `bg-card`, `text-foreground`, `border-border`
- **KanbanCard**: Uses theme-aware backgrounds and text colors  
- **Buttons**: Use semantic color variants that adapt to themes
- **Forms**: Input fields use `bg-input` and `text-foreground`

The theme system is working perfectly - just remember to use semantic color classes for any new components!