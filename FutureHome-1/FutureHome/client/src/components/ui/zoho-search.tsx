import React from "react";
import { cn } from "@/lib/utils";
import { Search, X, Filter, SlidersHorizontal, ArrowUpDown, Calendar, Users, Tag as TagIcon } from "lucide-react";
import { ZohoButton } from "./zoho-button";
import { ZohoSelect } from "./zoho-form";

interface ZohoSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suggestions?: string[];
  recentSearches?: string[];
  onSearch?: (query: string) => void;
  loading?: boolean;
  size?: "sm" | "md" | "lg";
  showFilters?: boolean;
  onFilterClick?: () => void;
  className?: string;
}

export function ZohoSearchBar({
  value,
  onChange,
  placeholder = "Search...",
  suggestions = [],
  recentSearches = [],
  onSearch,
  loading = false,
  size = "md",
  showFilters = false,
  onFilterClick,
  className,
}: ZohoSearchBarProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [focusedIndex, setFocusedIndex] = React.useState(-1);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const allSuggestions = React.useMemo(() => {
    const filtered = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    
    if (!value && recentSearches.length > 0) {
      return recentSearches.slice(0, 5);
    }
    
    return filtered.slice(0, 8);
  }, [value, suggestions, recentSearches]);

  const sizeClasses = {
    sm: "h-8 text-sm",
    md: "h-10 text-sm",
    lg: "h-12 text-base",
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (focusedIndex >= 0 && allSuggestions[focusedIndex]) {
        const selectedSuggestion = allSuggestions[focusedIndex];
        onChange(selectedSuggestion);
        onSearch?.(selectedSuggestion);
      } else {
        onSearch?.(value);
      }
      setShowSuggestions(false);
      inputRef.current?.blur();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex(prev => 
        prev < allSuggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(prev => 
        prev > 0 ? prev - 1 : allSuggestions.length - 1
      );
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setFocusedIndex(-1);
      inputRef.current?.blur();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    onSearch?.(suggestion);
    setShowSuggestions(false);
    setFocusedIndex(-1);
  };

  const handleClear = () => {
    onChange("");
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div className={cn(
        "relative flex items-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 transition-all duration-200",
        isFocused && "ring-2 ring-blue-500 border-blue-500",
        sizeClasses[size]
      )}>
        <Search className="absolute left-3 w-4 h-4 text-gray-400" />
        
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsFocused(true);
            if (allSuggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          onBlur={() => {
            setIsFocused(false);
            // Delay hiding suggestions to allow click events
            setTimeout(() => setShowSuggestions(false), 150);
          }}
          placeholder={placeholder}
          className="w-full pl-10 pr-20 py-2 bg-transparent border-0 outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          data-testid="search-input"
        />
        
        <div className="absolute right-2 flex items-center gap-1">
          {value && (
            <button
              onClick={handleClear}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              data-testid="search-clear"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          
          {showFilters && (
            <button
              onClick={onFilterClick}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              data-testid="search-filters"
            >
              <Filter className="w-4 h-4" />
            </button>
          )}
          
          {loading && (
            <div className="p-1">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && allSuggestions.length > 0 && (
        <div className="absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {!value && recentSearches.length > 0 && (
            <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              Recent Searches
            </div>
          )}
          
          {allSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={cn(
                "w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2",
                index === focusedIndex && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              )}
              data-testid={`search-suggestion-${index}`}
            >
              <Search className="w-4 h-4 text-gray-400" />
              <span className="truncate">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Advanced Search Component
interface SearchFilter {
  id: string;
  label: string;
  type: "text" | "select" | "date" | "dateRange" | "number" | "multiSelect";
  options?: Array<{ label: string; value: string }>;
  value?: any;
  placeholder?: string;
}

interface ZohoAdvancedSearchProps {
  filters: SearchFilter[];
  onFiltersChange: (filters: SearchFilter[]) => void;
  onSearch: () => void;
  onReset: () => void;
  loading?: boolean;
  className?: string;
}

export function ZohoAdvancedSearch({
  filters,
  onFiltersChange,
  onSearch,
  onReset,
  loading = false,
  className,
}: ZohoAdvancedSearchProps) {
  const updateFilter = (id: string, value: any) => {
    const updatedFilters = filters.map(filter =>
      filter.id === id ? { ...filter, value } : filter
    );
    onFiltersChange(updatedFilters);
  };

  const hasActiveFilters = filters.some(filter => 
    filter.value !== undefined && filter.value !== "" && filter.value !== null
  );

  return (
    <div className={cn("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5" />
          Advanced Search
        </h3>
        
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            data-testid="advanced-search-reset"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {filters.map((filter) => (
          <div key={filter.id} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {filter.label}
            </label>
            
            {filter.type === "text" && (
              <input
                type="text"
                value={filter.value || ""}
                onChange={(e) => updateFilter(filter.id, e.target.value)}
                placeholder={filter.placeholder}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                data-testid={`filter-${filter.id}`}
              />
            )}
            
            {filter.type === "select" && (
              <ZohoSelect
                options={filter.options || []}
                value={filter.value || ""}
                onChange={(value) => updateFilter(filter.id, value)}
                placeholder={filter.placeholder}
              />
            )}
            
            {filter.type === "number" && (
              <input
                type="number"
                value={filter.value || ""}
                onChange={(e) => updateFilter(filter.id, e.target.value)}
                placeholder={filter.placeholder}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                data-testid={`filter-${filter.id}`}
              />
            )}
            
            {filter.type === "date" && (
              <input
                type="date"
                value={filter.value || ""}
                onChange={(e) => updateFilter(filter.id, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                data-testid={`filter-${filter.id}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {hasActiveFilters && `${filters.filter(f => f.value).length} filter(s) applied`}
        </div>
        
        <div className="flex gap-3">
          <ZohoButton
            variant="outline"
            onClick={onReset}
            disabled={!hasActiveFilters}
            data-testid="advanced-search-clear"
          >
            Clear
          </ZohoButton>
          <ZohoButton
            variant="primary"
            onClick={onSearch}
            loading={loading}
            data-testid="advanced-search-submit"
          >
            Search
          </ZohoButton>
        </div>
      </div>
    </div>
  );
}

// Quick Filter Bar
interface QuickFilter {
  id: string;
  label: string;
  active: boolean;
  count?: number;
}

interface ZohoQuickFiltersProps {
  filters: QuickFilter[];
  onFilterToggle: (id: string) => void;
  showCounts?: boolean;
  className?: string;
}

export function ZohoQuickFilters({
  filters,
  onFilterToggle,
  showCounts = false,
  className,
}: ZohoQuickFiltersProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterToggle(filter.id)}
          className={cn(
            "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full border transition-colors duration-200",
            filter.active
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
          )}
          data-testid={`quick-filter-${filter.id}`}
        >
          <span>{filter.label}</span>
          {showCounts && filter.count !== undefined && (
            <span className={cn(
              "ml-2 px-1.5 py-0.5 text-xs rounded-full",
              filter.active
                ? "bg-white bg-opacity-20"
                : "bg-gray-200 dark:bg-gray-600"
            )}>
              {filter.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

// Search Result Item
interface ZohoSearchResultProps {
  title: string;
  description?: string;
  metadata?: Array<{ label: string; value: string; icon?: React.ReactNode }>;
  tags?: string[];
  actions?: Array<{ label: string; onClick: () => void; icon?: React.ReactNode }>;
  onClick?: () => void;
  className?: string;
}

export function ZohoSearchResult({
  title,
  description,
  metadata = [],
  tags = [],
  actions = [],
  onClick,
  className,
}: ZohoSearchResultProps) {
  return (
    <div
      className={cn(
        "p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer",
        className
      )}
      onClick={onClick}
      data-testid="search-result"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 truncate">
            {title}
          </h3>
          
          {description && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
              {description}
            </p>
          )}
          
          {metadata.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-3">
              {metadata.map((item, index) => (
                <div key={index} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  {item.icon}
                  <span className="font-medium">{item.label}:</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          )}
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {actions.length > 0 && (
          <div className="flex items-center gap-2">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  action.onClick();
                }}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                data-testid={`search-result-action-${index}`}
              >
                {action.icon}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}