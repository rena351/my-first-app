import React from "react";
import { cn } from "@/lib/utils";
import { X, AlertTriangle, CheckCircle, Info, AlertCircle } from "lucide-react";
import { ZohoButton } from "./zoho-button";

interface ZohoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children: React.ReactNode;
  footer?: React.ReactNode;
  closeOnBackdrop?: boolean;
  className?: string;
}

export function ZohoModal({
  isOpen,
  onClose,
  title,
  size = "md",
  children,
  footer,
  closeOnBackdrop = true,
  className,
}: ZohoModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={closeOnBackdrop ? onClose : undefined}
        data-testid="modal-backdrop"
      />
      
      {/* Modal */}
      <div
        className={cn(
          "relative w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden",
          sizeClasses[size],
          className
        )}
        data-testid="modal-container"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            data-testid="modal-close-button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 p-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// Confirmation Dialog
interface ZohoConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  type?: "default" | "warning" | "danger";
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
}

export function ZohoConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  type = "default",
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
}: ZohoConfirmDialogProps) {
  const iconMap = {
    default: <Info className="w-6 h-6 text-blue-600" />,
    warning: <AlertTriangle className="w-6 h-6 text-yellow-600" />,
    danger: <AlertCircle className="w-6 h-6 text-red-600" />,
  };

  const buttonVariant = {
    default: "primary" as const,
    warning: "primary" as const,
    danger: "danger" as const,
  };

  return (
    <ZohoModal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      closeOnBackdrop={!loading}
      footer={
        <>
          <ZohoButton
            variant="outline"
            onClick={onClose}
            disabled={loading}
            data-testid="confirm-dialog-cancel"
          >
            {cancelText}
          </ZohoButton>
          <ZohoButton
            variant={buttonVariant[type]}
            onClick={onConfirm}
            loading={loading}
            data-testid="confirm-dialog-confirm"
          >
            {confirmText}
          </ZohoButton>
        </>
      }
    >
      <div className="flex items-start gap-4" data-testid="confirm-dialog-content">
        {iconMap[type]}
        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {title}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            {message}
          </p>
        </div>
      </div>
    </ZohoModal>
  );
}

// Alert Dialog
interface ZohoAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: "success" | "error" | "warning" | "info";
  buttonText?: string;
}

export function ZohoAlertDialog({
  isOpen,
  onClose,
  title,
  message,
  type = "info",
  buttonText = "OK",
}: ZohoAlertDialogProps) {
  const iconMap = {
    success: <CheckCircle className="w-6 h-6 text-green-600" />,
    error: <AlertCircle className="w-6 h-6 text-red-600" />,
    warning: <AlertTriangle className="w-6 h-6 text-yellow-600" />,
    info: <Info className="w-6 h-6 text-blue-600" />,
  };

  return (
    <ZohoModal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      footer={
        <ZohoButton
          variant="primary"
          onClick={onClose}
          data-testid="alert-dialog-ok"
        >
          {buttonText}
        </ZohoButton>
      }
    >
      <div className="flex items-start gap-4" data-testid="alert-dialog-content">
        {iconMap[type]}
        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {title}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            {message}
          </p>
        </div>
      </div>
    </ZohoModal>
  );
}

// Drawer Component
interface ZohoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  position?: "left" | "right";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function ZohoDrawer({
  isOpen,
  onClose,
  title,
  position = "right",
  size = "md",
  children,
  footer,
  className,
}: ZohoDrawerProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const sizeClasses = {
    sm: "w-80",
    md: "w-96",
    lg: "w-[500px]",
  };

  const positionClasses = {
    left: {
      container: "justify-start",
      panel: "animate-slide-in-left",
      closed: "-translate-x-full",
    },
    right: {
      container: "justify-end",
      panel: "animate-slide-in-right",
      closed: "translate-x-full",
    },
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex",
        positionClasses[position].container,
        isOpen ? "visible" : "invisible"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black transition-opacity duration-300",
          isOpen ? "bg-opacity-50" : "bg-opacity-0"
        )}
        onClick={onClose}
        data-testid="drawer-backdrop"
      />
      
      {/* Drawer */}
      <div
        className={cn(
          "relative h-full bg-white dark:bg-gray-800 shadow-xl border-l border-gray-200 dark:border-gray-700 flex flex-col transition-transform duration-300",
          sizeClasses[size],
          isOpen ? "translate-x-0" : positionClasses[position].closed,
          className
        )}
        data-testid="drawer-container"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            data-testid="drawer-close-button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 p-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}