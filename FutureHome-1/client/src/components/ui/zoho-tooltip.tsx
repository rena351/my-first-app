import React from "react";
import { cn } from "@/lib/utils";

interface ZohoTooltipProps {
  content: string | React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  variant?: "default" | "dark" | "light";
  delay?: number;
  disabled?: boolean;
  className?: string;
  maxWidth?: string;
}

export function ZohoTooltip({
  content,
  children,
  position = "top",
  variant = "default",
  delay = 200,
  disabled = false,
  className,
  maxWidth = "max-w-xs",
}: ZohoTooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 10);
    }, delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setShowTooltip(false);
    setTimeout(() => setIsVisible(false), 150);
  };

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent",
    left: "left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent",
    right: "right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent",
  };

  const variantClasses = {
    default: "bg-gray-900 text-white border-gray-900",
    dark: "bg-black text-white border-black",
    light: "bg-white text-gray-900 border-gray-200 shadow-lg",
  };

  const arrowColors = {
    default: "border-t-gray-900",
    dark: "border-t-black",
    light: "border-t-white",
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={triggerRef}
    >
      {children}
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            "absolute z-50 px-3 py-2 text-sm rounded-md border transition-all duration-150",
            positionClasses[position],
            variantClasses[variant],
            maxWidth,
            showTooltip ? "opacity-100 scale-100" : "opacity-0 scale-95",
            className
          )}
          data-testid="tooltip"
        >
          <div className="relative">
            {content}
            
            {/* Arrow */}
            <div
              className={cn(
                "absolute w-0 h-0",
                arrowClasses[position],
                position === "top" && arrowColors[variant],
                position === "bottom" && `border-b-gray-900 ${variant === "light" ? "border-b-white" : variant === "dark" ? "border-b-black" : "border-b-gray-900"}`,
                position === "left" && `border-l-gray-900 ${variant === "light" ? "border-l-white" : variant === "dark" ? "border-l-black" : "border-l-gray-900"}`,
                position === "right" && `border-r-gray-900 ${variant === "light" ? "border-r-white" : variant === "dark" ? "border-r-black" : "border-r-gray-900"}`
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Tooltip with Rich Content
interface ZohoRichTooltipProps {
  title?: string;
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  width?: string;
  trigger?: "hover" | "click";
  className?: string;
}

export function ZohoRichTooltip({
  title,
  content,
  children,
  position = "top",
  width = "w-80",
  trigger = "hover",
  className,
}: ZohoRichTooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleToggle = () => {
    if (trigger === "click") {
      if (isVisible) {
        setShowTooltip(false);
        setTimeout(() => setIsVisible(false), 150);
      } else {
        setIsVisible(true);
        setTimeout(() => setShowTooltip(true), 10);
      }
    }
  };

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 10);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setShowTooltip(false);
      setTimeout(() => setIsVisible(false), 150);
    }
  };

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  React.useEffect(() => {
    if (trigger === "click" && isVisible) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element;
        if (!target.closest('[data-testid="rich-tooltip"]') && !target.closest('[data-testid="rich-tooltip-trigger"]')) {
          setShowTooltip(false);
          setTimeout(() => setIsVisible(false), 150);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isVisible, trigger]);

  return (
    <div className="relative inline-block">
      <div
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="rich-tooltip-trigger"
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-all duration-150",
            positionClasses[position],
            width,
            showTooltip ? "opacity-100 scale-100" : "opacity-0 scale-95",
            className
          )}
          data-testid="rich-tooltip"
        >
          {title && (
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h4 className="font-medium text-gray-900 dark:text-white">
                {title}
              </h4>
            </div>
          )}
          
          <div className="p-4">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

// Help Tooltip with Icon
interface ZohoHelpTooltipProps {
  content: string | React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export function ZohoHelpTooltip({
  content,
  position = "top",
  className,
}: ZohoHelpTooltipProps) {
  return (
    <ZohoTooltip content={content} position={position} className={className}>
      <button
        className="inline-flex items-center justify-center w-4 h-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
        data-testid="help-tooltip-trigger"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </button>
    </ZohoTooltip>
  );
}