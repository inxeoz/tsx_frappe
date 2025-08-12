/**
 * Loading Spinner Component
 *
 * A versatile loading spinner component with multiple sizes and variants.
 * Provides smooth animations and accessibility features.
 *
 * @author IT Support Dashboard Team
 * @version 1.0.0
 */

import React from 'react';
import { cn } from '../../utils/cn';

// =============================================================================
// INTERFACES
// =============================================================================

interface LoadingSpinnerProps {
  /** Size variant of the spinner */
  size?: 'small' | 'medium' | 'large';
  /** Color variant */
  variant?: 'default' | 'primary' | 'muted';
  /** Custom className */
  className?: string;
  /** Accessibility label */
  'aria-label'?: string;
  /** Show loading text */
  showText?: boolean;
  /** Custom loading text */
  text?: string;
}

// =============================================================================
// CONSTANTS
// =============================================================================

const sizeVariants = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-8 h-8'
};

const colorVariants = {
  default: 'text-foreground',
  primary: 'text-primary',
  muted: 'text-muted-foreground'
};

// =============================================================================
// COMPONENT
// =============================================================================

/**
 * Loading Spinner Component
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  variant = 'default',
  className,
  'aria-label': ariaLabel = 'Loading',
  showText = false,
  text = 'Loading...'
}) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-solid border-current border-r-transparent',
          sizeVariants[size],
          colorVariants[variant],
          className
        )}
        role="status"
        aria-label={ariaLabel}
      >
        <span className="sr-only">{ariaLabel}</span>
      </div>
      {showText && (
        <span className={cn('text-sm', colorVariants[variant])}>
          {text}
        </span>
      )}
    </div>
  );
};

export default LoadingSpinner;
