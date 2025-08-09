import React from "react";
import { cn } from "@/lib/utils";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";

interface ZohoDatePickerProps {
  value?: Date;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  format?: "MM/dd/yyyy" | "dd/MM/yyyy" | "yyyy-MM-dd";
  showTime?: boolean;
  className?: string;
}

export function ZohoDatePicker({
  value,
  onChange,
  placeholder = "Select date...",
  label,
  error,
  required,
  disabled,
  minDate,
  maxDate,
  format = "MM/dd/yyyy",
  showTime = false,
  className,
}: ZohoDatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentMonth, setCurrentMonth] = React.useState(
    value ? new Date(value.getFullYear(), value.getMonth()) : new Date()
  );
  const [timeInput, setTimeInput] = React.useState(
    value ? `${value.getHours().toString().padStart(2, '0')}:${value.getMinutes().toString().padStart(2, '0')}` : "12:00"
  );

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    switch (format) {
      case "dd/MM/yyyy":
        return `${day}/${month}/${year}`;
      case "yyyy-MM-dd":
        return `${year}-${month}-${day}`;
      default:
        return `${month}/${day}/${year}`;
    }
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;

    let selectedDate = new Date(date);
    
    if (showTime && timeInput) {
      const [hours, minutes] = timeInput.split(':').map(Number);
      selectedDate.setHours(hours, minutes);
    }

    onChange?.(selectedDate);
    if (!showTime) {
      setIsOpen(false);
    }
  };

  const handleTimeChange = (time: string) => {
    setTimeInput(time);
    if (value) {
      const [hours, minutes] = time.split(':').map(Number);
      const newDate = new Date(value);
      newDate.setHours(hours, minutes);
      onChange?.(newDate);
    }
  };

  const handleClear = () => {
    onChange?.(null);
    setIsOpen(false);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Previous month's days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonth.getDate() - i),
        isCurrentMonth: false,
      });
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: new Date(year, month, day),
        isCurrentMonth: true,
      });
    }

    // Next month's days
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        date: new Date(year, month + 1, day),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const displayValue = value ? formatDate(value) + (showTime ? ` ${timeInput}` : "") : "";

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-2 text-left border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          data-testid="date-picker-trigger"
        >
          <div className="flex items-center justify-between">
            <span className={cn(
              displayValue ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
            )}>
              {displayValue || placeholder}
            </span>
            <div className="flex items-center gap-1">
              {value && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClear();
                  }}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  data-testid="date-picker-clear"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <Calendar className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute z-20 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 w-80">
              {/* Month/Year Header */}
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  data-testid="date-picker-prev-month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </div>
                
                <button
                  type="button"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  data-testid="date-picker-next-month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentMonth).map((day, index) => {
                  const isToday = day.date.toDateString() === new Date().toDateString();
                  const isSelected = value && day.date.toDateString() === value.toDateString();
                  const isDisabled = isDateDisabled(day.date);

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleDateSelect(day.date)}
                      disabled={isDisabled}
                      className={cn(
                        "w-8 h-8 text-sm rounded transition-colors duration-200",
                        day.isCurrentMonth ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500",
                        isToday && "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
                        isSelected && "bg-blue-600 text-white",
                        !isDisabled && !isSelected && "hover:bg-gray-100 dark:hover:bg-gray-700",
                        isDisabled && "opacity-50 cursor-not-allowed"
                      )}
                      data-testid={`date-${day.date.getDate()}`}
                    >
                      {day.date.getDate()}
                    </button>
                  );
                })}
              </div>

              {/* Time Picker */}
              {showTime && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    value={timeInput}
                    onChange={(e) => handleTimeChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    data-testid="time-picker"
                  />
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  data-testid="date-picker-cancel"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (value) {
                      setIsOpen(false);
                    }
                  }}
                  disabled={!value}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="date-picker-apply"
                >
                  Apply
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {error && (
        <div className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}
    </div>
  );
}

// Date Range Picker
interface ZohoDateRangePickerProps {
  startDate?: Date;
  endDate?: Date;
  onChange?: (startDate: Date | null, endDate: Date | null) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function ZohoDateRangePicker({
  startDate,
  endDate,
  onChange,
  placeholder = "Select date range...",
  label,
  error,
  required,
  disabled,
  className,
}: ZohoDateRangePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedStart, setSelectedStart] = React.useState<Date | null>(startDate || null);
  const [selectedEnd, setSelectedEnd] = React.useState<Date | null>(endDate || null);
  const [hoveredDate, setHoveredDate] = React.useState<Date | null>(null);

  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
    }
    if (startDate) {
      return `${startDate.toLocaleDateString()} - ...`;
    }
    return "";
  };

  const handleDateClick = (date: Date) => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(date);
      setSelectedEnd(null);
    } else if (selectedStart && !selectedEnd) {
      if (date >= selectedStart) {
        setSelectedEnd(date);
        onChange?.(selectedStart, date);
        setIsOpen(false);
      } else {
        setSelectedStart(date);
        setSelectedEnd(null);
      }
    }
  };

  const isInRange = (date: Date) => {
    if (!selectedStart) return false;
    
    const end = selectedEnd || hoveredDate;
    if (!end) return false;
    
    return date >= selectedStart && date <= end;
  };

  const displayValue = formatDateRange() || placeholder;

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "w-full px-4 py-2 text-left border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
          error && "border-red-500 focus:ring-red-500 focus:border-red-500",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        data-testid="date-range-picker-trigger"
      >
        <div className="flex items-center justify-between">
          <span className={cn(
            startDate || endDate ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
          )}>
            {displayValue}
          </span>
          <Calendar className="w-4 h-4 text-gray-400" />
        </div>
      </button>

      {/* Calendar implementation would be similar to single date picker but with range selection logic */}

      {error && (
        <div className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}
    </div>
  );
}