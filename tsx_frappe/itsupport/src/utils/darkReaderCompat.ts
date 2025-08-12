/**
 * Dark Reader Extension Compatibility Utilities
 *
 * This module provides utilities to detect and work with the Dark Reader browser extension.
 * While we recommend using our built-in theme system, this helps ensure compatibility
 * when users have Dark Reader enabled.
 */

export interface DarkReaderInfo {
  isEnabled: boolean;
  isInstalled: boolean;
  version?: string;
}

/**
 * Detects if Dark Reader extension is active on the current page
 */
export function detectDarkReader(): DarkReaderInfo {
  const result: DarkReaderInfo = {
    isEnabled: false,
    isInstalled: false,
  };

  try {
    // Check for Dark Reader's characteristic meta tag
    const darkReaderMeta = document.querySelector(
      'meta[name="darkreader-lock"]',
    );

    // Check for Dark Reader's style injections
    const darkReaderStyles = document.querySelectorAll(
      'style[class*="darkreader"]',
    );

    // Check for Dark Reader's data attributes on html element
    const htmlElement = document.documentElement;
    const hasDarkReaderAttrs =
      htmlElement.hasAttribute("data-darkreader-mode") ||
      htmlElement.hasAttribute("data-darkreader-scheme");

    // Check for Dark Reader's CSS variables
    const computedStyle = getComputedStyle(document.documentElement);
    const hasDarkReaderVars =
      computedStyle.getPropertyValue("--darkreader-neutral-background") !== "";

    result.isEnabled = !!(
      darkReaderMeta ||
      darkReaderStyles.length > 0 ||
      hasDarkReaderAttrs ||
      hasDarkReaderVars
    );
    result.isInstalled = result.isEnabled; // If it's active, it's installed

    // Try to get version from extension if possible
    if (result.isEnabled && darkReaderMeta) {
      const content = darkReaderMeta.getAttribute("content");
      if (content) {
        result.version = content;
      }
    }
  } catch (error) {
    console.warn("Error detecting Dark Reader:", error);
  }

  return result;
}

/**
 * Adds CSS rules to improve Dark Reader compatibility
 * This should be called once when your app initializes
 */
export function enhanceDarkReaderCompatibility(): void {
  const style = document.createElement("style");
  style.id = "dark-reader-compat";
  style.textContent = `
    /* Improve Dark Reader compatibility */
    .it-support-dashboard {
      /* Hint to Dark Reader about our color scheme */
      color-scheme: light dark;
    }

    /* Prevent Dark Reader from inverting our theme toggle icons */
    .it-support-dashboard [data-theme-toggle] svg,
    .it-support-dashboard .theme-toggle svg {
      filter: none !important;
    }

    /* Protect our semantic colors from Dark Reader inversion */
    .it-support-dashboard .bg-primary,
    .it-support-dashboard .bg-secondary,
    .it-support-dashboard .bg-destructive {
      /* Dark Reader should respect these colors */
      -webkit-filter: none !important;
      filter: none !important;
    }

    /* Ensure our custom CSS variables work with Dark Reader */
    .it-support-dashboard {
      /* Tell Dark Reader we handle our own theming */
      --darkreader-ignore: true;
    }
  `;

  document.head.appendChild(style);
}

/**
 * Monitors Dark Reader state changes
 * Returns a cleanup function to stop monitoring
 */
export function monitorDarkReader(
  callback: (info: DarkReaderInfo) => void,
  interval: number = 1000,
): () => void {
  let lastState = detectDarkReader();
  callback(lastState);

  const intervalId = setInterval(() => {
    const currentState = detectDarkReader();

    // Check if state changed
    if (
      currentState.isEnabled !== lastState.isEnabled ||
      currentState.isInstalled !== lastState.isInstalled
    ) {
      lastState = currentState;
      callback(currentState);
    }
  }, interval);

  // Return cleanup function
  return () => clearInterval(intervalId);
}

/**
 * Creates a custom hook for React components to detect Dark Reader
 */
export function createDarkReaderHook() {
  // This would be used in a React environment with proper imports
  // For now, we'll return a factory function that can be used with React hooks
  return function useDarkReader() {
    // This function should be called within a React component that has imported React
    // const [darkReaderInfo, setDarkReaderInfo] = React.useState<DarkReaderInfo>(() =>
    //   detectDarkReader()
    // );

    // React.useEffect(() => {
    //   const cleanup = monitorDarkReader(setDarkReaderInfo, 2000);
    //   return cleanup;
    // }, []);

    // return darkReaderInfo;

    // For now, return current state
    return detectDarkReader();
  };
}

/**
 * Provides recommendations for the user based on Dark Reader detection
 */
export function getDarkReaderRecommendations(info: DarkReaderInfo): {
  message: string;
  action?: string;
  type: "info" | "warning" | "success";
} {
  if (!info.isInstalled) {
    return {
      type: "info",
      message: "Use our built-in theme toggle for the best experience",
      action: "toggle-theme",
    };
  }

  if (info.isEnabled) {
    return {
      type: "warning",
      message:
        "Dark Reader detected. For optimal appearance, consider using our native dark theme instead",
      action: "disable-dark-reader",
    };
  }

  return {
    type: "success",
    message:
      "Dark Reader is installed but not active. Our native themes will work perfectly!",
  };
}

/**
 * Disables our theme system when Dark Reader is active to prevent conflicts
 */
export function handleDarkReaderConflict(info: DarkReaderInfo): boolean {
  if (info.isEnabled) {
    // Add a class to indicate Dark Reader is active
    document.documentElement.classList.add("dark-reader-active");

    // Optionally disable our theme toggle
    const themeToggle = document.querySelector(
      "[data-theme-toggle]",
    ) as HTMLElement;
    if (themeToggle) {
      themeToggle.style.opacity = "0.5";
      themeToggle.style.pointerEvents = "none";
      themeToggle.title =
        "Dark Reader is active. Disable it to use native themes.";
    }

    return true; // Conflict detected
  } else {
    // Remove conflict indicators
    document.documentElement.classList.remove("dark-reader-active");

    const themeToggle = document.querySelector(
      "[data-theme-toggle]",
    ) as HTMLElement;
    if (themeToggle) {
      themeToggle.style.opacity = "";
      themeToggle.style.pointerEvents = "";
      themeToggle.title = "Toggle theme";
    }

    return false; // No conflict
  }
}

/**
 * Gets CSS overrides to work better with Dark Reader
 */
export function getDarkReaderOverrides(): string {
  return `
    /* Enhanced Dark Reader compatibility */
    [data-darkreader-mode="dark"] .it-support-dashboard {
      /* Let Dark Reader handle the main theming */
      --background: var(--darkreader-neutral-background, 222.2 84% 4.9%);
      --foreground: var(--darkreader-neutral-text, 210 40% 98%);
    }

    /* Prevent double-inversion of our icons */
    [data-darkreader-mode="dark"] .it-support-dashboard svg {
      filter: none !important;
    }

    /* Ensure readability with Dark Reader active */
    [data-darkreader-mode="dark"] .it-support-dashboard .bg-card {
      background: var(--darkreader-bg--card, hsl(var(--card)));
    }
  `;
}

// Export a simple API for common use cases
export const DarkReaderCompat = {
  detect: detectDarkReader,
  enhance: enhanceDarkReaderCompatibility,
  monitor: monitorDarkReader,
  getRecommendations: getDarkReaderRecommendations,
  handleConflicts: handleDarkReaderConflict,
} as const;
