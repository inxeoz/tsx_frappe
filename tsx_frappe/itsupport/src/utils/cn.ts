/**
 * Utility function for merging CSS class names
 *
 * This utility combines clsx for conditional class names with tailwind-merge
 * for handling Tailwind CSS class conflicts and duplicates.
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge and deduplicate CSS class names
 *
 * This function combines multiple class name inputs and resolves conflicts
 * intelligently, ensuring that later classes override earlier ones when they
 * conflict (e.g., 'bg-red-500' will override 'bg-blue-500').
 *
 * @param inputs - Class name inputs (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class name string
 *
 * @example
 * ```ts
 * // Basic usage
 * cn('px-2 py-1', 'bg-blue-500', 'text-white')
 * // => 'px-2 py-1 bg-blue-500 text-white'
 *
 * // Conditional classes
 * cn('base-class', {
 *   'active-class': isActive,
 *   'disabled-class': isDisabled
 * })
 *
 * // Resolving conflicts (later classes win)
 * cn('bg-blue-500', 'bg-red-500')
 * // => 'bg-red-500'
 *
 * // Complex example with arrays and conditions
 * cn(
 *   'base px-4 py-2',
 *   variant === 'primary' && 'bg-blue-500 text-white',
 *   variant === 'secondary' && 'bg-gray-500 text-white',
 *   size === 'large' && 'px-6 py-3',
 *   disabled && 'opacity-50 cursor-not-allowed',
 *   className // Allow external className override
 * )
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Create a className merger with predefined base classes
 *
 * This helper creates a function that always includes certain base classes,
 * useful for component variants.
 *
 * @param baseClasses - Base classes to always include
 * @returns Function that merges additional classes with base classes
 *
 * @example
 * ```ts
 * const buttonCn = createClassMerger('inline-flex items-center justify-center rounded-md');
 *
 * // Usage in component
 * const className = buttonCn(
 *   'px-4 py-2',
 *   variant === 'primary' && 'bg-blue-500 text-white',
 *   props.className
 * );
 * ```
 */
export function createClassMerger(...baseClasses: ClassValue[]) {
  return (...additionalClasses: ClassValue[]): string => {
    return cn(...baseClasses, ...additionalClasses);
  };
}

/**
 * Conditional class name helper
 *
 * A more explicit way to handle conditional classes.
 *
 * @param condition - Boolean condition
 * @param trueClasses - Classes to apply when condition is true
 * @param falseClasses - Classes to apply when condition is false
 * @returns Class string based on condition
 *
 * @example
 * ```ts
 * const buttonClass = cn(
 *   'base-button',
 *   conditional(isActive, 'bg-blue-500', 'bg-gray-500'),
 *   conditional(isLarge, 'px-6 py-3', 'px-4 py-2')
 * );
 * ```
 */
export function conditional(
  condition: boolean,
  trueClasses: ClassValue,
  falseClasses?: ClassValue
): ClassValue {
  return condition ? trueClasses : falseClasses;
}

/**
 * Variant-based class name helper
 *
 * Helper for handling component variants in a type-safe way.
 *
 * @param variants - Object mapping variant keys to class names
 * @param activeVariant - Currently active variant
 * @param fallback - Fallback classes if variant not found
 * @returns Class string for the active variant
 *
 * @example
 * ```ts
 * const buttonVariants = {
 *   primary: 'bg-blue-500 text-white',
 *   secondary: 'bg-gray-500 text-white',
 *   outline: 'border border-gray-300 bg-transparent'
 * };
 *
 * const className = cn(
 *   'base-button',
 *   variantClass(buttonVariants, variant, 'bg-gray-100')
 * );
 * ```
 */
export function variantClass<T extends string>(
  variants: Record<T, ClassValue>,
  activeVariant: T | undefined,
  fallback?: ClassValue
): ClassValue {
  if (activeVariant && variants[activeVariant]) {
    return variants[activeVariant];
  }
  return fallback;
}

/**
 * Size-based class name helper
 *
 * Common helper for size variants.
 *
 * @param sizes - Object mapping size keys to class names
 * @param activeSize - Currently active size
 * @param fallback - Fallback classes if size not found
 * @returns Class string for the active size
 */
export function sizeClass<T extends string>(
  sizes: Record<T, ClassValue>,
  activeSize: T | undefined,
  fallback?: ClassValue
): ClassValue {
  return variantClass(sizes, activeSize, fallback);
}

// =============================================================================
// COMMON PATTERNS
// =============================================================================

/**
 * Focus ring utility
 * Standard focus ring for interactive elements
 */
export const focusRing = 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

/**
 * Transition utility
 * Standard transition for interactive elements
 */
export const transition = 'transition-colors duration-200 ease-in-out';

/**
 * Button reset utility
 * Reset default button styles
 */
export const buttonReset = 'border-none bg-none p-0 m-0 outline-none cursor-pointer';

/**
 * Screen reader only utility
 * Hide element visually but keep it accessible to screen readers
 */
export const srOnly = 'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0';

/**
 * Common component class builders
 */
export const builders = {
  /**
   * Build button classes with variants and sizes
   */
  button: (
    variant: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' = 'default',
    size: 'sm' | 'md' | 'lg' = 'md',
    additionalClasses?: ClassValue
  ) => {
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground'
    };

    const sizes = {
      sm: 'h-9 px-3 text-xs',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 text-base'
    };

    return cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors',
      focusRing,
      'disabled:pointer-events-none disabled:opacity-50',
      variants[variant],
      sizes[size],
      additionalClasses
    );
  },

  /**
   * Build input classes with variants
   */
  input: (
    variant: 'default' | 'error' = 'default',
    additionalClasses?: ClassValue
  ) => {
    const variants = {
      default: 'border-input',
      error: 'border-destructive focus:border-destructive'
    };

    return cn(
      'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'placeholder:text-muted-foreground',
      focusRing,
      'disabled:cursor-not-allowed disabled:opacity-50',
      variants[variant],
      additionalClasses
    );
  }
};

export default cn;
