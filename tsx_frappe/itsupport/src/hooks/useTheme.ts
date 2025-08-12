/**
 * Custom hook for theme management with advanced theming capabilities
 *
 * This hook provides comprehensive theme management including system theme detection,
 * theme persistence, custom theme creation, and theme event handling.
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { UseThemeReturn } from '../types';

// =============================================================================
// INTERFACES
// =============================================================================

interface ThemeColors {
  /** Primary color palette */
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  /** Secondary color palette */
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  /** Accent color palette */
  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  /** Background colors */
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  /** Text colors */
  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
  };
  /** Border colors */
  border: {
    primary: string;
    secondary: string;
    accent: string;
  };
  /** State colors */
  state: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

interface CustomTheme {
  /** Theme identifier */
  id: string;
  /** Theme display name */
  name: string;
  /** Theme description */
  description?: string;
  /** Color palette */
  colors: ThemeColors;
  /** Dark theme variant */
  isDark: boolean;
  /** Creation timestamp */
  createdAt: string;
  /** Last modified timestamp */
  updatedAt: string;
}

interface ThemeOptions {
  /** Enable system theme detection */
  enableSystemDetection?: boolean;
  /** Enable theme persistence */
  enablePersistence?: boolean;
  /** Local storage key for theme persistence */
  storageKey?: string;
  /** Default theme */
  defaultTheme?: 'light' | 'dark' | 'system';
  /** Custom themes */
  customThemes?: CustomTheme[];
  /** Callback when theme changes */
  onThemeChange?: (theme: 'light' | 'dark' | 'system', resolvedTheme: 'light' | 'dark') => void;
}

// =============================================================================
// CONSTANTS
// =============================================================================

const DEFAULT_LIGHT_COLORS: ThemeColors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49'
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617'
  },
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16'
  },
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9'
  },
  text: {
    primary: '#0f172a',
    secondary: '#334155',
    muted: '#64748b',
    inverse: '#ffffff'
  },
  border: {
    primary: '#e2e8f0',
    secondary: '#cbd5e1',
    accent: '#0ea5e9'
  },
  state: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  }
};

const DEFAULT_DARK_COLORS: ThemeColors = {
  primary: {
    50: '#082f49',
    100: '#0c4a6e',
    200: '#075985',
    300: '#0369a1',
    400: '#0284c7',
    500: '#0ea5e9',
    600: '#38bdf8',
    700: '#7dd3fc',
    800: '#bae6fd',
    900: '#e0f2fe',
    950: '#f0f9ff'
  },
  secondary: {
    50: '#020617',
    100: '#0f172a',
    200: '#1e293b',
    300: '#334155',
    400: '#475569',
    500: '#64748b',
    600: '#94a3b8',
    700: '#cbd5e1',
    800: '#e2e8f0',
    900: '#f1f5f9',
    950: '#f8fafc'
  },
  accent: {
    50: '#052e16',
    100: '#14532d',
    200: '#166534',
    300: '#15803d',
    400: '#16a34a',
    500: '#22c55e',
    600: '#4ade80',
    700: '#86efac',
    800: '#bbf7d0',
    900: '#dcfce7',
    950: '#f0fdf4'
  },
  background: {
    primary: '#0f172a',
    secondary: '#1e293b',
    tertiary: '#334155'
  },
  text: {
    primary: '#f8fafc',
    secondary: '#e2e8f0',
    muted: '#94a3b8',
    inverse: '#0f172a'
  },
  border: {
    primary: '#334155',
    secondary: '#475569',
    accent: '#0ea5e9'
  },
  state: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  }
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Detect system theme preference
 */
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * Apply theme to document
 */
const applyThemeToDocument = (theme: 'light' | 'dark', colors?: ThemeColors) => {
  const root = document.documentElement;
  const themeColors = colors || (theme === 'dark' ? DEFAULT_DARK_COLORS : DEFAULT_LIGHT_COLORS);

  // Remove existing theme classes
  root.classList.remove('light', 'dark');

  // Add new theme class
  root.classList.add(theme);

  // Apply CSS custom properties for colors
  Object.entries(themeColors).forEach(([category, palette]) => {
    if (typeof palette === 'object' && palette !== null) {
      Object.entries(palette).forEach(([shade, color]) => {
        root.style.setProperty(`--color-${category}-${shade}`, color);
      });
    }
  });

  // Apply theme attribute for compatibility
  root.setAttribute('data-theme', theme);
};

/**
 * Generate a custom theme based on primary color
 */
const generateThemeFromColor = (
  primaryColor: string,
  isDark: boolean = false,
  name: string = 'Custom Theme'
): CustomTheme => {
  // This is a simplified theme generation
  // In a real implementation, you might use a color palette generator
  const baseColors = isDark ? DEFAULT_DARK_COLORS : DEFAULT_LIGHT_COLORS;

  return {
    id: `custom-${Date.now()}`,
    name,
    description: `Custom theme generated from ${primaryColor}`,
    colors: {
      ...baseColors,
      primary: {
        ...baseColors.primary,
        500: primaryColor,
      },
      border: {
        ...baseColors.border,
        accent: primaryColor,
      }
    },
    isDark,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

// =============================================================================
// MAIN HOOK
// =============================================================================

/**
 * Custom hook for advanced theme management
 */
export const useTheme = (options: ThemeOptions = {}): UseThemeReturn & {
  /** Current resolved theme (light or dark) */
  resolvedTheme: 'light' | 'dark';
  /** Current theme colors */
  colors: ThemeColors;
  /** Available custom themes */
  customThemes: CustomTheme[];
  /** System theme preference */
  systemTheme: 'light' | 'dark';
  /** Create a custom theme */
  createCustomTheme: (primaryColor: string, isDark: boolean, name: string) => CustomTheme;
  /** Apply a custom theme */
  applyCustomTheme: (themeId: string) => void;
  /** Delete a custom theme */
  deleteCustomTheme: (themeId: string) => void;
  /** Export theme configuration */
  exportTheme: () => string;
  /** Import theme configuration */
  importTheme: (themeData: string) => boolean;
  /** Force refresh theme */
  refreshTheme: () => void;
} => {
  const {
    enableSystemDetection = true,
    enablePersistence = true,
    storageKey = 'it-support-theme',
    defaultTheme = 'system',
    customThemes: initialCustomThemes = [],
    onThemeChange
  } = options;

  // ==========================================================================
  // STATE
  // ==========================================================================

  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    if (enablePersistence) {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored && ['light', 'dark', 'system'].includes(stored)) {
          return stored as 'light' | 'dark' | 'system';
        }
      } catch (error) {
        console.warn('Failed to load theme from localStorage:', error);
      }
    }
    return defaultTheme;
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() =>
    enableSystemDetection ? getSystemTheme() : 'light'
  );

  const [customThemes, setCustomThemes] = useState<CustomTheme[]>(() => {
    if (enablePersistence) {
      try {
        const stored = localStorage.getItem(`${storageKey}-custom`);
        if (stored) {
          return [...initialCustomThemes, ...JSON.parse(stored)];
        }
      } catch (error) {
        console.warn('Failed to load custom themes from localStorage:', error);
      }
    }
    return initialCustomThemes;
  });

  const [activeCustomTheme, setActiveCustomTheme] = useState<string | null>(() => {
    if (enablePersistence) {
      try {
        const stored = localStorage.getItem(`${storageKey}-active-custom`);
        return stored || null;
      } catch {
        return null;
      }
    }
    return null;
  });

  // ==========================================================================
  // COMPUTED VALUES
  // ==========================================================================

  /**
   * Get the resolved theme (actual light/dark value)
   */
  const resolvedTheme = useMemo((): 'light' | 'dark' => {
    if (activeCustomTheme) {
      const customTheme = customThemes.find(t => t.id === activeCustomTheme);
      return customTheme?.isDark ? 'dark' : 'light';
    }
    return theme === 'system' ? systemTheme : theme;
  }, [theme, systemTheme, activeCustomTheme, customThemes]);

  /**
   * Get current theme colors
   */
  const colors = useMemo((): ThemeColors => {
    if (activeCustomTheme) {
      const customTheme = customThemes.find(t => t.id === activeCustomTheme);
      if (customTheme) {
        return customTheme.colors;
      }
    }
    return resolvedTheme === 'dark' ? DEFAULT_DARK_COLORS : DEFAULT_LIGHT_COLORS;
  }, [resolvedTheme, activeCustomTheme, customThemes]);

  // ==========================================================================
  // EFFECTS
  // ==========================================================================

  /**
   * Listen for system theme changes
   */
  useEffect(() => {
    if (!enableSystemDetection) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableSystemDetection]);

  /**
   * Apply theme to document when resolved theme changes
   */
  useEffect(() => {
    applyThemeToDocument(resolvedTheme, colors);
    onThemeChange?.(theme, resolvedTheme);
  }, [resolvedTheme, colors, theme, onThemeChange]);

  /**
   * Persist theme to localStorage
   */
  useEffect(() => {
    if (enablePersistence) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        console.warn('Failed to persist theme to localStorage:', error);
      }
    }
  }, [theme, enablePersistence, storageKey]);

  /**
   * Persist custom themes to localStorage
   */
  useEffect(() => {
    if (enablePersistence) {
      try {
        const customOnly = customThemes.filter(t => !initialCustomThemes.some(initial => initial.id === t.id));
        localStorage.setItem(`${storageKey}-custom`, JSON.stringify(customOnly));
      } catch (error) {
        console.warn('Failed to persist custom themes to localStorage:', error);
      }
    }
  }, [customThemes, enablePersistence, storageKey, initialCustomThemes]);

  /**
   * Persist active custom theme
   */
  useEffect(() => {
    if (enablePersistence) {
      try {
        if (activeCustomTheme) {
          localStorage.setItem(`${storageKey}-active-custom`, activeCustomTheme);
        } else {
          localStorage.removeItem(`${storageKey}-active-custom`);
        }
      } catch (error) {
        console.warn('Failed to persist active custom theme:', error);
      }
    }
  }, [activeCustomTheme, enablePersistence, storageKey]);

  // ==========================================================================
  // ACTIONS
  // ==========================================================================

  /**
   * Set theme with validation
   */
  const setThemeHandler = useCallback((newTheme: 'light' | 'dark' | 'system') => {
    if (['light', 'dark', 'system'].includes(newTheme)) {
      setTheme(newTheme);
      setActiveCustomTheme(null); // Clear custom theme when setting standard theme
    }
  }, []);

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = useCallback(() => {
    if (activeCustomTheme) {
      setActiveCustomTheme(null);
      setTheme('light');
    } else {
      switch (theme) {
        case 'light':
          setTheme('dark');
          break;
        case 'dark':
          setTheme('system');
          break;
        case 'system':
          setTheme('light');
          break;
      }
    }
  }, [theme, activeCustomTheme]);

  /**
   * Create a custom theme
   */
  const createCustomTheme = useCallback((
    primaryColor: string,
    isDark: boolean,
    name: string
  ): CustomTheme => {
    const newTheme = generateThemeFromColor(primaryColor, isDark, name);
    setCustomThemes(prev => [...prev, newTheme]);
    return newTheme;
  }, []);

  /**
   * Apply a custom theme
   */
  const applyCustomTheme = useCallback((themeId: string) => {
    const customTheme = customThemes.find(t => t.id === themeId);
    if (customTheme) {
      setActiveCustomTheme(themeId);
      setTheme('system'); // Reset to system to avoid conflicts
    }
  }, [customThemes]);

  /**
   * Delete a custom theme
   */
  const deleteCustomTheme = useCallback((themeId: string) => {
    setCustomThemes(prev => prev.filter(t => t.id !== themeId));
    if (activeCustomTheme === themeId) {
      setActiveCustomTheme(null);
    }
  }, [activeCustomTheme]);

  /**
   * Export theme configuration
   */
  const exportTheme = useCallback((): string => {
    const config = {
      currentTheme: theme,
      activeCustomTheme,
      customThemes,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(config, null, 2);
  }, [theme, activeCustomTheme, customThemes]);

  /**
   * Import theme configuration
   */
  const importTheme = useCallback((themeData: string): boolean => {
    try {
      const config = JSON.parse(themeData);

      if (config.currentTheme && ['light', 'dark', 'system'].includes(config.currentTheme)) {
        setTheme(config.currentTheme);
      }

      if (config.customThemes && Array.isArray(config.customThemes)) {
        setCustomThemes(prev => {
          const existingIds = prev.map(t => t.id);
          const newThemes = config.customThemes.filter((t: CustomTheme) =>
            !existingIds.includes(t.id)
          );
          return [...prev, ...newThemes];
        });
      }

      if (config.activeCustomTheme) {
        setActiveCustomTheme(config.activeCustomTheme);
      }

      return true;
    } catch (error) {
      console.error('Failed to import theme configuration:', error);
      return false;
    }
  }, []);

  /**
   * Force refresh theme (re-apply current theme)
   */
  const refreshTheme = useCallback(() => {
    applyThemeToDocument(resolvedTheme, colors);
  }, [resolvedTheme, colors]);

  // ==========================================================================
  // RETURN INTERFACE
  // ==========================================================================

  return {
    // Basic interface
    theme,
    setTheme: setThemeHandler,
    toggleTheme,

    // Extended interface
    resolvedTheme,
    colors,
    customThemes,
    systemTheme,
    createCustomTheme,
    applyCustomTheme,
    deleteCustomTheme,
    exportTheme,
    importTheme,
    refreshTheme,

    // Status flags
    isSystemTheme: theme === 'system',
    isDarkMode: resolvedTheme === 'dark',
    isCustomTheme: activeCustomTheme !== null,
    activeCustomThemeId: activeCustomTheme
  };
};

export default useTheme;
