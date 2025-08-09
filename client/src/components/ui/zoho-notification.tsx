import React from "react";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info, Bell } from "lucide-react";

interface ZohoToastProps {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function ZohoToast({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
  action,
}: ZohoToastProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => onClose(id), 300);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose]);

  const iconMap = {
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
    error: <AlertCircle className="w-5 h-5 text-red-600" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
    info: <Info className="w-5 h-5 text-blue-600" />,
  };

  const colorClasses = {
    success: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20",
    error: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
    warning: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20",
    info: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
  };

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => onClose(id), 300);
  };

  return (
    <div
      className={cn(
        "w-full max-w-sm border rounded-lg shadow-lg p-4 transition-all duration-300 transform",
        colorClasses[type],
        isExiting ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
      )}
      data-testid={`toast-${type}-${id}`}
    >
      <div className="flex items-start gap-3">
        {iconMap[type]}
        
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            {title}
          </div>
          {message && (
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {message}
            </div>
          )}
          {action && (
            <div className="mt-2">
              <button
                onClick={action.onClick}
                className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                data-testid={`toast-action-${id}`}
              >
                {action.label}
              </button>
            </div>
          )}
        </div>
        
        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          data-testid={`toast-close-${id}`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Toast Container
interface ZohoToastContainerProps {
  toasts: ZohoToastProps[];
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
}

export function ZohoToastContainer({ 
  toasts, 
  position = "top-right" 
}: ZohoToastContainerProps) {
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  return (
    <div
      className={cn(
        "fixed z-50 space-y-2",
        positionClasses[position]
      )}
      data-testid="toast-container"
    >
      {toasts.map((toast) => (
        <ZohoToast key={toast.id} {...toast} />
      ))}
    </div>
  );
}

// Banner Notification
interface ZohoBannerProps {
  type: "info" | "warning" | "error" | "success";
  title?: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export function ZohoBanner({
  type,
  title,
  message,
  action,
  dismissible = true,
  onDismiss,
  className,
}: ZohoBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  const iconMap = {
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
    error: <AlertCircle className="w-5 h-5 text-red-600" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
    info: <Info className="w-5 h-5 text-blue-600" />,
  };

  const colorClasses = {
    success: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20",
    error: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
    warning: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20",
    info: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
  };

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "border rounded-lg p-4",
        colorClasses[type],
        className
      )}
      data-testid={`banner-${type}`}
    >
      <div className="flex items-start gap-3">
        {iconMap[type]}
        
        <div className="flex-1 min-w-0">
          {title && (
            <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              {title}
            </div>
          )}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {message}
          </div>
          {action && (
            <div className="mt-2">
              <button
                onClick={action.onClick}
                className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                data-testid="banner-action"
              >
                {action.label}
              </button>
            </div>
          )}
        </div>
        
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            data-testid="banner-dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

// Notification Bell with Count
interface ZohoNotificationBellProps {
  count?: number;
  onClick?: () => void;
  className?: string;
}

export function ZohoNotificationBell({ 
  count = 0, 
  onClick,
  className 
}: ZohoNotificationBellProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200",
        className
      )}
      data-testid="notification-bell"
    >
      <Bell className="w-5 h-5" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}

// Progress Banner
interface ZohoProgressBannerProps {
  title: string;
  message?: string;
  progress: number; // 0-100
  showPercentage?: boolean;
  onCancel?: () => void;
  className?: string;
}

export function ZohoProgressBanner({
  title,
  message,
  progress,
  showPercentage = true,
  onCancel,
  className,
}: ZohoProgressBannerProps) {
  return (
    <div
      className={cn(
        "border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20 rounded-lg p-4",
        className
      )}
      data-testid="progress-banner"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {title}
            </div>
            {showPercentage && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {Math.round(progress)}%
              </div>
            )}
          </div>
          
          {message && (
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {message}
            </div>
          )}
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </div>
        
        {onCancel && (
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            data-testid="progress-banner-cancel"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}