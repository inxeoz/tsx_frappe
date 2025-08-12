# IT Support Dashboard - Integration Guide

This guide explains how to safely integrate the IT Support Dashboard React application into other applications (like Frappe) without CSS conflicts.

## Overview

The dashboard is designed to be completely self-contained and isolated from the parent application. All styles are scoped to prevent conflicts with existing CSS.

## Key Features

- ✅ **CSS Scoping**: All styles are contained within `.it-support-dashboard` class
- ✅ **No Global Pollution**: CSS variables and Tailwind classes don't affect parent app
- ✅ **Easy Integration**: Simple mount function for embedding
- ✅ **Complete Isolation**: Component won't inherit problematic parent styles
- ✅ **Self-contained**: No external dependencies required

## Quick Integration

### 1. Build the Application
```bash
npm run build
```

This generates:
- `../public/static_ui/main.css` - Scoped CSS bundle
- `../public/static_ui/main.js` - JavaScript bundle

### 2. Include in Your Application

```html
<!-- Include the built files -->
<link rel="stylesheet" href="/path/to/static_ui/main.css">
<script src="/path/to/static_ui/main.js"></script>

<!-- Create container -->
<div id="dashboard-container" style="height: 600px;"></div>

<!-- Mount the component -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('dashboard-container');
    if (typeof mountReact === 'function') {
        mountReact(container);
    }
});
</script>
```

## Frappe Integration

### Method 1: Using Hooks

Add to your app's `hooks.py`:

```python
app_include_css = [
    "/assets/tsx_frappe/static_ui/main.css"
]

app_include_js = [
    "/assets/tsx_frappe/static_ui/main.js"  
]
```

Create a custom page:

```python
# pages/it_support_dashboard.py
import frappe

@frappe.whitelist()
def get_page():
    return {
        "title": "IT Support Dashboard",
        "content": """
            <div id="it-support-dashboard" style="height: calc(100vh - 150px);"></div>
            <script>
                frappe.ready(function() {
                    if (typeof mountReact === 'function') {
                        mountReact(document.getElementById('it-support-dashboard'));
                    }
                });
            </script>
        """
    }
```

### Method 2: Custom DocType Integration

Add to any DocType's client script:

```javascript
frappe.ui.form.on('Your DocType', {
    refresh: function(frm) {
        // Add dashboard to form
        const wrapper = frm.fields_dict.dashboard_html.wrapper;
        wrapper.innerHTML = '<div id="support-dashboard" style="height: 500px;"></div>';
        
        // Mount React component
        if (typeof mountReact === 'function') {
            mountReact(wrapper.querySelector('#support-dashboard'));
        }
    }
});
```

### Method 3: Desk Page Integration

```javascript
// In a custom desk page
frappe.pages['it-support'].on_page_load = function(wrapper) {
    const page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'IT Support Dashboard',
        single_column: true
    });
    
    // Create dashboard container
    const container = $('<div id="dashboard-root" style="height: calc(100vh - 200px);"></div>');
    page.main.html(container);
    
    // Mount React component
    if (typeof mountReact === 'function') {
        mountReact(container[0]);
    }
};
```

## Technical Details

### CSS Scoping Strategy

The application uses several techniques to prevent CSS conflicts:

1. **Tailwind Important Selector**: All Tailwind classes are scoped to `.it-support-dashboard`
2. **CSS Variables Scoping**: All custom properties are contained within the component
3. **Style Isolation**: `isolation: isolate` and `contain: layout style` prevent style bleeding
4. **Reset Protection**: Component uses `all: initial` to avoid inheriting parent styles

### Component Structure

```
.it-support-dashboard (root container)
├── All CSS variables defined here
├── All Tailwind classes scoped here  
├── Custom dashboard styles
└── Scrollbar customizations (scoped)
```

### Safe Integration Patterns

✅ **DO:**
- Always wrap the component in a container with defined dimensions
- Use the provided `mountReact()` function
- Test in your target environment before deploying

❌ **DON'T:**
- Modify the `.it-support-dashboard` class name
- Include global Tailwind CSS separately
- Try to override component styles from outside

## Troubleshooting

### Component Not Rendering
- Check that both CSS and JS files are loaded
- Verify the `mountReact` function is available
- Ensure container has defined height
- Check browser console for errors

### Style Conflicts
- Verify only the scoped CSS file is included
- Check that parent elements don't have `!important` styles
- Ensure the container has the proper class structure

### Performance Issues
- Component uses `contain: layout style` for optimal performance
- Consider lazy loading if not immediately visible
- Monitor for memory leaks in long-running applications

## Development

### Building for Different Environments

```bash
# Development build
npm run dev

# Production build  
npm run build

# Build with custom output path
npm run build -- --outDir /custom/path
```

### Customization

To customize the integration:

1. Modify `tailwind.config.js` important selector if needed
2. Adjust CSS variables in `src/index.css`
3. Update the mount function in `src/main.tsx`

### Testing Integration

Use the provided `integration-example.html` to test:

1. Open the file in a browser
2. Verify existing styles aren't affected  
3. Check component renders correctly
4. Test responsiveness and functionality

## Support

For integration issues:
1. Check the browser console for errors
2. Verify all required files are loaded
3. Test with the integration example
4. Review this documentation

The component is designed to be plug-and-play with minimal configuration required.