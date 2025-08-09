import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Settings, 
  MoreHorizontal,
  Trash2,
  Edit,
  Copy,
  Share2,
  RefreshCw,
  Save,
  X,
  Check
} from "lucide-react";

interface ZohoButtonProps {
  variant?: "primary" | "secondary" | "danger" | "success" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: "plus" | "search" | "filter" | "download" | "upload" | "settings" | "more" | "trash" | "edit" | "copy" | "share" | "refresh" | "save" | "close" | "check";
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const iconMap = {
  plus: Plus,
  search: Search,
  filter: Filter,
  download: Download,
  upload: Upload,
  settings: Settings,
  more: MoreHorizontal,
  trash: Trash2,
  edit: Edit,
  copy: Copy,
  share: Share2,
  refresh: RefreshCw,
  save: Save,
  close: X,
  check: Check,
};

export function ZohoButton({
  variant = "primary",
  size = "md",
  icon,
  children,
  onClick,
  disabled = false,
  loading = false,
  className,
  fullWidth = false,
  ...props
}: ZohoButtonProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 focus:ring-blue-500 shadow-sm",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600",
    danger: "bg-red-600 hover:bg-red-700 text-white border border-red-600 focus:ring-red-500 shadow-sm",
    success: "bg-green-600 hover:bg-green-700 text-white border border-green-600 focus:ring-green-500 shadow-sm",
    outline: "bg-transparent hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-blue-500 dark:hover:bg-gray-700 dark:text-gray-300 dark:border-gray-600",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 border-0 focus:ring-blue-500 dark:hover:bg-gray-700 dark:text-gray-300",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
    md: "px-4 py-2 text-sm rounded-md gap-2",
    lg: "px-6 py-3 text-base rounded-lg gap-2.5",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4", 
    lg: "w-5 h-5",
  };

  return (
    <Button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        loading && "cursor-wait",
        className
      )}
      onClick={onClick}
      disabled={disabled || loading}
      data-testid={`button-${variant}-${children?.toString().toLowerCase().replace(/\s+/g, '-') || 'action'}`}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <RefreshCw className={cn(iconSizes[size], "animate-spin")} />
        </div>
      )}
      
      <div className={cn("flex items-center gap-2", loading && "opacity-0")}>
        {IconComponent && (
          <IconComponent className={iconSizes[size]} />
        )}
        {children}
      </div>
    </Button>
  );
}

// Toolbar component
interface ZohoToolbarProps {
  children: React.ReactNode;
  className?: string;
}

export function ZohoToolbar({ children, className }: ZohoToolbarProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-2 p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700",
        className
      )}
      data-testid="toolbar-container"
    >
      {children}
    </div>
  );
}

// Action Menu Component
interface ZohoActionMenuProps {
  items: Array<{
    label: string;
    icon?: keyof typeof iconMap;
    onClick: () => void;
    disabled?: boolean;
    variant?: "default" | "danger";
  }>;
  trigger?: React.ReactNode;
  className?: string;
}

export function ZohoActionMenu({ items, trigger, className }: ZohoActionMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn("relative", className)}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
        data-testid="action-menu-trigger"
      >
        {trigger || <ZohoButton variant="ghost" icon="more" size="sm" />}
      </div>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-20">
            <div className="py-1">
              {items.map((item, index) => {
                const IconComponent = item.icon ? iconMap[item.icon] : null;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      item.onClick();
                      setIsOpen(false);
                    }}
                    disabled={item.disabled}
                    className={cn(
                      "flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",
                      item.variant === "danger" && "text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                    )}
                    data-testid={`action-menu-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}