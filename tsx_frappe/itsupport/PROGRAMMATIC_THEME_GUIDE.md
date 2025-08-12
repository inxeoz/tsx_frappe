# Programmatic Theme Control Guide

This guide explains how to control themes programmatically in your IT Support Dashboard, both from within the React app and from external systems like Frappe.

## Overview

The enhanced theme system provides:
- **6+ Theme Options**: Light, Dark, Blue, Green, Purple, High Contrast + System
- **Programmatic Control**: Set themes via JavaScript API calls
- **External Integration**: Control themes from Frappe or other systems
- **Time-Based Automation**: Automatic theme switching based on time/timezone
- **User Preferences**: Per-user theme settings with persistence
- **Department/Role Themes**: Apply themes based on user roles or departments

## Quick Start

### Basic Theme Control

```javascript
// Import the theme control utility
import { ThemeControl } from './components/theme-manager';

// Set a specific theme
ThemeControl.setTheme('blue');     // Blue ocean theme
ThemeControl.setTheme('dark');     // Dark theme
ThemeControl.setTheme('light');    // Light theme
ThemeControl.setTheme('system');   // Follow system preference

// Toggle between light and dark
ThemeControl.toggle();

// Cycle through all available themes
ThemeControl.cycle();

// Get current theme
const currentTheme = ThemeControl.getCurrentTheme();
```

### React Hook Usage

```typescript
import { useThemeManager } from './components/theme-manager';

function MyComponent() {
  const { theme, setTheme, toggleTheme, availableThemes } = useThemeManager();

  return (
    <div>
      <p>Current theme: {theme}</p>
      
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      
      <select onChange={(e) => setTheme(e.target.value)}>
        {availableThemes.map(theme => (
          <option key={theme} value={theme}>{theme}</option>
        ))}
      </select>
    </div>
  );
}
```

## External Integration

### Global API Access

The theme system exposes a global API for external systems:

```javascript
// Available globally as window.ITSupportTheme
window.ITSupportTheme.setTheme('blue');
window.ITSupportTheme.toggle();
window.ITSupportTheme.cycle();
window.ITSupportTheme.getCurrentTheme();
```

### Frappe Framework Integration

Add this to your Frappe app's JavaScript:

```javascript
frappe.ready(function() {
    // Check if theme API is available
    if (window.ITSupportTheme) {
        
        // Set theme based on user preference
        const userTheme = frappe.user.user_theme || 'system';
        window.ITSupportTheme.setTheme(userTheme);

        // Add theme selector to toolbar
        frappe.ui.toolbar.add_dropdown_button('Theme', 'palette', [
            {
                label: 'Light Theme',
                action: () => window.ITSupportTheme.setTheme('light')
            },
            {
                label: 'Dark Theme', 
                action: () => window.ITSupportTheme.setTheme('dark')
            },
            {
                label: 'Blue Ocean',
                action: () => window.ITSupportTheme.setTheme('blue')
            },
            {
                label: 'Forest Green',
                action: () => window.ITSupportTheme.setTheme('green')
            }
        ]);

        // Save theme preference when changed
        frappe.call({
            method: 'frappe.client.set_value',
            args: {
                doctype: 'User',
                name: frappe.session.user,
                fieldname: 'user_theme',
                value: window.ITSupportTheme.getCurrentTheme()
            }
        });
    }
});
```

### Python/Server-Side Integration

```python
# In your Frappe server method
@frappe.whitelist()
def set_user_theme(theme_name):
    """Set theme for current user"""
    user = frappe.get_doc('User', frappe.session.user)
    user.user_theme = theme_name
    user.save()
    
    return {
        'success': True,
        'theme': theme_name,
        'message': f'Theme changed to {theme_name}'
    }

# Usage from client side
frappe.call({
    method: 'your_app.api.set_user_theme',
    args: { theme_name: 'blue' },
    callback: function(r) {
        if (r.message.success) {
            window.ITSupportTheme.setTheme(r.message.theme);
        }
    }
});
```

## Advanced Features

### Time-Based Theme Switching

```javascript
// Automatic theme based on time of day
ThemeControl.setTimeBasedTheme();

// Custom time-based logic
function setBusinessHoursTheme() {
    const hour = new Date().getHours();
    
    if (hour >= 9 && hour < 17) {
        ThemeControl.setTheme('light'); // Business hours
    } else {
        ThemeControl.setTheme('dark');  // After hours
    }
}

// Schedule theme changes
ThemeControl.scheduleThemeChange('blue', 5000); // Blue theme in 5 seconds
```

### Timezone-Aware Themes

```javascript
function setThemeForTimezone(timezone) {
    try {
        const now = new Date();
        const timeInZone = new Intl.DateTimeFormat('en', {
            timeZone: timezone,
            hour: 'numeric',
            hour12: false
        }).format(now);

        const hour = parseInt(timeInZone);
        const theme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
        
        ThemeControl.setTheme(theme);
    } catch (error) {
        console.error('Invalid timezone:', timezone);
    }
}

// Examples
setThemeForTimezone('America/New_York');
setThemeForTimezone('Europe/London');
setThemeForTimezone('Asia/Tokyo');
```

### User Preference Management

```javascript
// Save user theme preference
function saveUserTheme(userId, theme) {
    localStorage.setItem(`user-${userId}-theme`, theme);
    ThemeControl.setTheme(theme);
}

// Load user theme on login
function loadUserTheme(userId) {
    const savedTheme = localStorage.getItem(`user-${userId}-theme`);
    if (savedTheme) {
        ThemeControl.setTheme(savedTheme);
    }
}

// Department-based themes
const departmentThemes = {
    'IT': 'blue',
    'HR': 'green', 
    'Finance': 'purple',
    'Management': 'high-contrast'
};

function setDepartmentTheme(department) {
    const theme = departmentThemes[department] || 'dark';
    ThemeControl.setTheme(theme);
}
```

### System Integration

```javascript
// Detect and follow system theme
ThemeControl.detectSystem();

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const theme = e.matches ? 'dark' : 'light';
    ThemeControl.setTheme(theme);
});

// Accessibility mode
function enableAccessibilityMode() {
    ThemeControl.setTheme('high-contrast');
}
```

## Available Themes

| Theme | Description | Use Case |
|-------|-------------|----------|
| `light` | Light theme with white backgrounds | Daytime use, bright environments |
| `dark` | Dark theme with dark gray backgrounds | Night use, low light environments |
| `blue` | Blue ocean theme with blue accents | IT department, tech-focused |
| `green` | Forest green theme with green accents | HR, environment, growth |
| `purple` | Purple storm theme with purple accents | Creative, executive, premium |
| `high-contrast` | High contrast black and white | Accessibility, visual impairments |
| `system` | Follows operating system preference | Auto-detection, user preference |

## Theme Persistence

Themes are automatically saved to localStorage and restored on page reload:

```javascript
// Manual persistence management
const currentTheme = ThemeControl.getCurrentTheme();
localStorage.setItem('app-theme', currentTheme);

// Load saved theme
const savedTheme = localStorage.getItem('app-theme');
if (savedTheme) {
    ThemeControl.setTheme(savedTheme);
}
```

## CSS Custom Properties

Each theme uses CSS custom properties that you can reference in your styles:

```css
.my-component {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    border-color: hsl(var(--border));
}

.my-button {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
}

.my-card {
    background-color: hsl(var(--card));
    color: hsl(var(--card-foreground));
}
```

### Available CSS Variables

- `--background` / `--foreground` - Main background and text
- `--card` / `--card-foreground` - Card backgrounds and text  
- `--primary` / `--primary-foreground` - Primary colors
- `--secondary` / `--secondary-foreground` - Secondary colors
- `--muted` / `--muted-foreground` - Muted/subtle colors
- `--accent` / `--accent-foreground` - Accent colors
- `--destructive` / `--destructive-foreground` - Error/warning colors
- `--border` - Border colors
- `--input` - Input field backgrounds
- `--ring` - Focus ring colors

## Event-Driven Theme Control

```javascript
// Custom event-based theme control
window.addEventListener('user-login', (event) => {
    const user = event.detail;
    if (user.theme_preference) {
        ThemeControl.setTheme(user.theme_preference);
    }
});

// Department change event
window.addEventListener('department-change', (event) => {
    const department = event.detail.department;
    setDepartmentTheme(department);
});

// Time zone change event  
window.addEventListener('timezone-change', (event) => {
    const timezone = event.detail.timezone;
    setThemeForTimezone(timezone);
});
```

## Error Handling

```javascript
function safeThemeChange(theme) {
    try {
        const validThemes = ['light', 'dark', 'blue', 'green', 'purple', 'high-contrast', 'system'];
        
        if (!validThemes.includes(theme)) {
            throw new Error(`Invalid theme: ${theme}`);
        }
        
        ThemeControl.setTheme(theme);
        return { success: true, theme };
        
    } catch (error) {
        console.error('Theme change failed:', error);
        return { success: false, error: error.message };
    }
}
```

## Performance Considerations

- Theme changes are instant (CSS custom properties update immediately)
- No page reload required
- Minimal performance impact
- Themes are cached in localStorage
- CSS variables provide efficient theme switching

## Browser Console Testing

Open your browser console and try these commands:

```javascript
// Test theme API
window.ITSupportTheme.setTheme('blue');
window.ITSupportTheme.toggle();
window.ITSupportTheme.cycle();

// Test advanced features
ThemeControl.setTimeBasedTheme();
ThemeControl.detectSystem();
ThemeControl.scheduleThemeChange('green', 3000);
```

## Integration Checklist

- [ ] Theme API is available (`window.ITSupportTheme`)
- [ ] User preferences are loaded on login
- [ ] Theme changes are persisted
- [ ] Department/role themes are applied
- [ ] System theme detection works
- [ ] Accessibility themes are available
- [ ] Time-based switching functions (if needed)
- [ ] Error handling is in place
- [ ] Performance is acceptable

## Troubleshooting

**Theme not changing:**
- Check if theme API is available: `console.log(window.ITSupportTheme)`
- Verify theme name is valid
- Check browser console for errors

**Styles not updating:**
- Ensure CSS custom properties are used instead of fixed colors
- Check if `.it-support-dashboard` wrapper is present
- Verify CSS is properly scoped

**Persistence not working:**
- Check localStorage permissions
- Verify localStorage keys are consistent
- Check for quota exceeded errors

**External integration issues:**
- Ensure theme API is loaded before calling
- Check cross-origin restrictions
- Verify iframe communication (if applicable)

This theme system provides flexible, programmatic control while maintaining excellent performance and user experience.