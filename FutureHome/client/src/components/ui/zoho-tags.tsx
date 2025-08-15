import React from "react";
import { cn } from "@/lib/utils";
import { X, Plus, Tag as TagIcon, Hash } from "lucide-react";

interface ZohoTagProps {
  label: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  removable?: boolean;
  onRemove?: () => void;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ZohoTag({
  label,
  variant = "default",
  size = "md",
  removable = false,
  onRemove,
  icon,
  className,
  onClick,
}: ZohoTagProps) {
  const baseClasses = "inline-flex items-center font-medium rounded-full transition-colors duration-200";
  
  const variantClasses = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    primary: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
    success: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
    danger: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
    outline: "bg-transparent border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
    lg: "px-4 py-2 text-base gap-2",
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        onClick && "cursor-pointer hover:opacity-80",
        className
      )}
      onClick={handleClick}
      data-testid={`tag-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {icon && (
        <span className="flex-shrink-0">
          {icon}
        </span>
      )}
      
      <span className="truncate">
        {label}
      </span>
      
      {removable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="flex-shrink-0 ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors duration-200"
          data-testid={`tag-remove-${label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
}

// Tag Input Component
interface ZohoTagInputProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  maxTags?: number;
  allowDuplicates?: boolean;
  tagVariant?: "default" | "primary" | "success" | "warning" | "danger";
  className?: string;
  suggestions?: string[];
}

export function ZohoTagInput({
  tags,
  onTagsChange,
  placeholder = "Add tags...",
  label,
  error,
  required,
  disabled,
  maxTags,
  allowDuplicates = false,
  tagVariant = "default",
  className,
  suggestions = [],
}: ZohoTagInputProps) {
  const [inputValue, setInputValue] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [focusedSuggestionIndex, setFocusedSuggestionIndex] = React.useState(-1);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const filteredSuggestions = React.useMemo(() => {
    if (!inputValue || !suggestions.length) return [];
    return suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase()) &&
        (allowDuplicates || !tags.includes(suggestion))
    );
  }, [inputValue, suggestions, tags, allowDuplicates]);

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim();
    if (!trimmedTag) return;
    
    if (!allowDuplicates && tags.includes(trimmedTag)) return;
    if (maxTags && tags.length >= maxTags) return;
    
    onTagsChange([...tags, trimmedTag]);
    setInputValue("");
    setShowSuggestions(false);
    setFocusedSuggestionIndex(-1);
  };

  const removeTag = (indexToRemove: number) => {
    onTagsChange(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      if (focusedSuggestionIndex >= 0 && filteredSuggestions[focusedSuggestionIndex]) {
        addTag(filteredSuggestions[focusedSuggestionIndex]);
      } else if (inputValue.trim()) {
        addTag(inputValue);
      }
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedSuggestionIndex(prev => 
        prev < filteredSuggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedSuggestionIndex(prev => 
        prev > 0 ? prev - 1 : filteredSuggestions.length - 1
      );
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setFocusedSuggestionIndex(-1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowSuggestions(value.length > 0 && filteredSuggestions.length > 0);
    setFocusedSuggestionIndex(-1);
  };

  const handleSuggestionClick = (suggestion: string) => {
    addTag(suggestion);
    inputRef.current?.focus();
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <div
          className={cn(
            "min-h-[2.5rem] px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-colors duration-200 cursor-text",
            error && "border-red-500 focus-within:ring-red-500 focus-within:border-red-500",
            disabled && "opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800",
            className
          )}
          onClick={() => inputRef.current?.focus()}
          data-testid="tag-input-container"
        >
          <div className="flex flex-wrap items-center gap-2">
            {/* Existing Tags */}
            {tags.map((tag, index) => (
              <ZohoTag
                key={index}
                label={tag}
                variant={tagVariant}
                size="sm"
                removable={!disabled}
                onRemove={() => removeTag(index)}
              />
            ))}
            
            {/* Input */}
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (inputValue && filteredSuggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
              onBlur={() => {
                // Delay hiding suggestions to allow click events
                setTimeout(() => setShowSuggestions(false), 150);
              }}
              placeholder={tags.length === 0 ? placeholder : ""}
              disabled={disabled || (maxTags && tags.length >= maxTags)}
              className="flex-1 min-w-[100px] bg-transparent border-0 outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              data-testid="tag-input-field"
            />
          </div>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-40 overflow-y-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSuggestionClick(suggestion)}
                className={cn(
                  "w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
                  index === focusedSuggestionIndex && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                )}
                data-testid={`tag-suggestion-${index}`}
              >
                <div className="flex items-center gap-2">
                  <TagIcon className="w-4 h-4 text-gray-400" />
                  <span>{suggestion}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Helper Text */}
      <div className="mt-1 text-sm">
        {error && (
          <div className="text-red-600 dark:text-red-400">
            {error}
          </div>
        )}
        {!error && maxTags && (
          <div className="text-gray-500 dark:text-gray-400">
            {tags.length}/{maxTags} tags
          </div>
        )}
      </div>
    </div>
  );
}

// Tag Group Component
interface ZohoTagGroupProps {
  title?: string;
  tags: Array<{
    label: string;
    value: string;
    count?: number;
    variant?: "default" | "primary" | "success" | "warning" | "danger";
  }>;
  selectedTags: string[];
  onTagToggle: (value: string) => void;
  maxVisible?: number;
  showCount?: boolean;
  className?: string;
}

export function ZohoTagGroup({
  title,
  tags,
  selectedTags,
  onTagToggle,
  maxVisible,
  showCount = false,
  className,
}: ZohoTagGroupProps) {
  const [showAll, setShowAll] = React.useState(false);
  
  const visibleTags = maxVisible && !showAll ? tags.slice(0, maxVisible) : tags;
  const hiddenCount = maxVisible ? Math.max(0, tags.length - maxVisible) : 0;

  return (
    <div className={cn("space-y-3", className)}>
      {title && (
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
          {title}
        </h4>
      )}
      
      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tag) => {
          const isSelected = selectedTags.includes(tag.value);
          
          return (
            <ZohoTag
              key={tag.value}
              label={`${tag.label}${showCount && tag.count ? ` (${tag.count})` : ""}`}
              variant={isSelected ? (tag.variant || "primary") : "outline"}
              onClick={() => onTagToggle(tag.value)}
              className={cn(
                "cursor-pointer transition-all duration-200",
                isSelected && "ring-2 ring-blue-200 dark:ring-blue-800"
              )}
            />
          );
        })}
        
        {!!maxVisible && hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            data-testid="tag-group-show-more"
          >
            {showAll ? "Show less" : `+${hiddenCount} more`}
          </button>
        )}
      </div>
    </div>
  );
}

// Pill Component (similar to tag but more rounded)
interface ZohoPillProps {
  label: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  badge?: string | number;
  className?: string;
  onClick?: () => void;
}

export function ZohoPill({
  label,
  variant = "default",
  size = "md",
  icon,
  badge,
  className,
  onClick,
}: ZohoPillProps) {
  const baseClasses = "inline-flex items-center font-medium rounded-full transition-colors duration-200";
  
  const variantClasses = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    primary: "bg-blue-600 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-600 text-white",
    danger: "bg-red-600 text-white",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        onClick && "cursor-pointer hover:opacity-80",
        className
      )}
      onClick={onClick}
      data-testid={`pill-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {icon && (
        <span className="flex-shrink-0">
          {icon}
        </span>
      )}
      
      <span className="truncate">
        {label}
      </span>
      
      {badge && (
        <span className="flex-shrink-0 ml-1 px-2 py-0.5 text-xs bg-black bg-opacity-20 rounded-full">
          {badge}
        </span>
      )}
    </span>
  );
}