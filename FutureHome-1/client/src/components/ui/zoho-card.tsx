import React from "react";
import { cn } from "@/lib/utils";
import { BarChart3, TrendingUp, TrendingDown, Users, DollarSign, Package, Activity } from "lucide-react";

interface ZohoCardProps {
  title: string;
  value?: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    direction: "up" | "down";
    period?: string;
  };
  icon?: "chart" | "trending-up" | "trending-down" | "users" | "dollar" | "package" | "activity";
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
}

const iconMap = {
  chart: BarChart3,
  "trending-up": TrendingUp,
  "trending-down": TrendingDown,
  users: Users,
  dollar: DollarSign,
  package: Package,
  activity: Activity,
};

const variantColors = {
  default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
  primary: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
  success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
  warning: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
  danger: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
};

const iconColors = {
  default: "text-gray-600 dark:text-gray-400",
  primary: "text-blue-600 dark:text-blue-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  danger: "text-red-600 dark:text-red-400",
};

export function ZohoCard({
  title,
  value,
  subtitle,
  trend,
  icon,
  variant = "default",
  size = "md",
  children,
  className,
  loading = false,
}: ZohoCardProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  if (loading) {
    return (
      <div className={cn(
        "rounded-lg border",
        variantColors[variant],
        sizeClasses[size],
        "animate-pulse",
        className
      )}>
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200",
        variantColors[variant],
        sizeClasses[size],
        className
      )}
      data-testid={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h3>
        {IconComponent && (
          <IconComponent className={cn("w-5 h-5", iconColors[variant])} />
        )}
      </div>

      {value && (
        <div className="mb-2">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </div>
        </div>
      )}

      {(subtitle || trend) && (
        <div className="flex items-center justify-between text-sm">
          {subtitle && (
            <span className="text-gray-500 dark:text-gray-400">
              {subtitle}
            </span>
          )}
          {trend && (
            <div className={cn(
              "flex items-center gap-1",
              trend.direction === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            )}>
              {trend.direction === "up" ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span className="font-medium">{trend.value}%</span>
              {trend.period && (
                <span className="text-gray-500 dark:text-gray-400">
                  {trend.period}
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}

// Dashboard Grid Layout
interface ZohoDashboardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export function ZohoDashboardGrid({ 
  children, 
  columns = 3,
  gap = "md",
  className 
}: ZohoDashboardGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gridGap = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  };

  return (
    <div 
      className={cn(
        "grid",
        gridCols[columns],
        gridGap[gap],
        className
      )}
      data-testid="dashboard-grid"
    >
      {children}
    </div>
  );
}

// Metric Widget Component
interface ZohoMetricWidgetProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    period: string;
  };
  format?: "number" | "currency" | "percentage";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ZohoMetricWidget({
  title,
  value,
  change,
  format = "number",
  size = "md",
  className,
}: ZohoMetricWidgetProps) {
  const formatValue = (val: string | number) => {
    if (format === "currency") {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(Number(val));
    }
    if (format === "percentage") {
      return `${val}%`;
    }
    return val.toLocaleString();
  };

  return (
    <ZohoCard
      title={title}
      value={formatValue(value)}
      trend={change ? {
        value: change.value,
        direction: change.value >= 0 ? "up" : "down",
        period: change.period,
      } : undefined}
      size={size}
      className={className}
    />
  );
}