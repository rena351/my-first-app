import React from "react";
import { cn } from "@/lib/utils";
import { RefreshCw, Loader2 } from "lucide-react";

interface ZohoSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "white";
  className?: string;
}

export function ZohoSpinner({ 
  size = "md", 
  variant = "default",
  className 
}: ZohoSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const variantClasses = {
    default: "text-gray-600 dark:text-gray-400",
    primary: "text-blue-600 dark:text-blue-400",
    white: "text-white",
  };

  return (
    <Loader2 
      className={cn(
        "animate-spin",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      data-testid="loading-spinner"
    />
  );
}

interface ZohoLoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  children: React.ReactNode;
  className?: string;
}

export function ZohoLoadingOverlay({
  isLoading,
  message = "Loading...",
  children,
  className,
}: ZohoLoadingOverlayProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-3">
            <ZohoSpinner size="lg" variant="primary" />
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Skeleton Components
interface ZohoSkeletonProps {
  className?: string;
  animate?: boolean;
}

export function ZohoSkeleton({ 
  className, 
  animate = true 
}: ZohoSkeletonProps) {
  return (
    <div
      className={cn(
        "bg-gray-300 dark:bg-gray-600 rounded",
        animate && "animate-pulse",
        className
      )}
      data-testid="skeleton"
    />
  );
}

export function ZohoSkeletonText({ 
  lines = 3,
  className 
}: { 
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <ZohoSkeleton
          key={index}
          className={cn(
            "h-4",
            index === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

export function ZohoSkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 border border-gray-200 dark:border-gray-700 rounded-lg", className)}>
      <div className="flex items-center gap-4 mb-4">
        <ZohoSkeleton className="w-10 h-10 rounded-full" />
        <div className="flex-1">
          <ZohoSkeleton className="h-4 w-1/2 mb-2" />
          <ZohoSkeleton className="h-3 w-1/4" />
        </div>
      </div>
      <ZohoSkeletonText lines={3} />
    </div>
  );
}

export function ZohoSkeletonTable({ 
  rows = 5,
  columns = 4,
  className 
}: { 
  rows?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div className={cn("border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden", className)}>
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {Array.from({ length: columns }).map((_, index) => (
            <ZohoSkeleton key={index} className="h-4 w-full" />
          ))}
        </div>
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="p-4 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <ZohoSkeleton key={colIndex} className="h-4 w-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Loading Button
interface ZohoLoadingButtonProps {
  isLoading: boolean;
  loadingText?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ZohoLoadingButton({
  isLoading,
  loadingText = "Loading...",
  children,
  onClick,
  disabled,
  variant = "primary",
  size = "md",
  className,
}: ZohoLoadingButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 focus:ring-blue-500 shadow-sm",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600",
    outline: "bg-transparent hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-blue-500 dark:hover:bg-gray-700 dark:text-gray-300 dark:border-gray-600",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs rounded-md",
    md: "px-4 py-2 text-sm rounded-md",
    lg: "px-6 py-3 text-base rounded-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        isLoading && "cursor-wait",
        className
      )}
      data-testid="loading-button"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ZohoSpinner 
            size={size === "lg" ? "md" : "sm"} 
            variant={variant === "primary" ? "white" : "primary"} 
          />
        </div>
      )}
      
      <div className={cn("flex items-center gap-2", isLoading && "opacity-0")}>
        {isLoading ? loadingText : children}
      </div>
    </button>
  );
}

// Page Loading
interface ZohoPageLoadingProps {
  message?: string;
  showLogo?: boolean;
  className?: string;
}

export function ZohoPageLoading({
  message = "Loading application...",
  showLogo = true,
  className,
}: ZohoPageLoadingProps) {
  return (
    <div className={cn("min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900", className)}>
      <div className="flex flex-col items-center gap-6">
        {showLogo && (
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            Aura
          </div>
        )}
        
        <div className="flex flex-col items-center gap-3">
          <ZohoSpinner size="lg" variant="primary" />
          <div className="text-gray-600 dark:text-gray-400">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

// Progressive Loading
interface ZohoProgressiveLoadingProps {
  steps: Array<{
    id: string;
    title: string;
    completed: boolean;
  }>;
  currentStep?: string;
  className?: string;
}

export function ZohoProgressiveLoading({
  steps,
  currentStep,
  className,
}: ZohoProgressiveLoadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {steps.map((step) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.completed;
        
        return (
          <div
            key={step.id}
            className="flex items-center gap-3"
            data-testid={`loading-step-${step.id}`}
          >
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center border-2",
              isCompleted && "bg-green-600 border-green-600 text-white",
              isActive && !isCompleted && "border-blue-600 text-blue-600",
              !isActive && !isCompleted && "border-gray-300 text-gray-300"
            )}>
              {isCompleted ? (
                <span className="text-xs">✓</span>
              ) : isActive ? (
                <ZohoSpinner size="sm" variant="primary" />
              ) : (
                <span className="w-2 h-2 bg-current rounded-full" />
              )}
            </div>
            
            <div className={cn(
              "text-sm",
              isCompleted && "text-green-600 dark:text-green-400",
              isActive && !isCompleted && "text-blue-600 dark:text-blue-400 font-medium",
              !isActive && !isCompleted && "text-gray-500 dark:text-gray-400"
            )}>
              {step.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}