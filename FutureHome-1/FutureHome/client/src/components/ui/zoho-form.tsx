import React from "react";
import { cn } from "@/lib/utils";
import { 
  Eye, 
  EyeOff, 
  Calendar,
  ChevronDown,
  X,
  Plus,
  Search,
  Upload,
  AlertCircle,
  Check
} from "lucide-react";

interface ZohoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
  loading?: boolean;
}

export function ZohoInput({
  label,
  error,
  hint,
  required,
  icon,
  suffix,
  loading,
  className,
  ...props
}: ZohoInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = props.type === "password";

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          {...props}
          type={isPassword ? (showPassword ? "text" : "password") : props.type}
          className={cn(
            "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
            icon && "pl-10",
            (isPassword || suffix) && "pr-10",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            loading && "opacity-50 cursor-not-allowed",
            className
          )}
          disabled={loading || props.disabled}
          data-testid={`input-${props.name || 'field'}`}
        />
        
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            data-testid="toggle-password-visibility"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
        
        {suffix && !isPassword && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {suffix}
          </div>
        )}
      </div>
      
      {(error || hint) && (
        <div className="mt-1 text-sm">
          {error && (
            <div className="text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {error}
            </div>
          )}
          {hint && !error && (
            <div className="text-gray-500 dark:text-gray-400">
              {hint}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface ZohoSelectProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  loading?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  className?: string;
}

export function ZohoSelect({
  label,
  error,
  hint,
  required,
  options,
  value,
  onChange,
  placeholder = "Select option...",
  loading,
  multiple,
  searchable,
  className,
}: ZohoSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedValues, setSelectedValues] = React.useState<string[]>(
    multiple ? (value ? value.split(",") : []) : []
  );

  const filteredOptions = React.useMemo(() => {
    if (!searchable || !searchTerm) return options;
    return options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm, searchable]);

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      
      setSelectedValues(newValues);
      onChange?.(newValues.join(","));
    } else {
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };

  const displayValue = React.useMemo(() => {
    if (multiple) {
      return selectedValues.length > 0
        ? `${selectedValues.length} selected`
        : placeholder;
    }
    
    const selected = options.find(opt => opt.value === value);
    return selected?.label || placeholder;
  }, [value, selectedValues, options, placeholder, multiple]);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          disabled={loading}
          className={cn(
            "w-full px-4 py-2 text-left border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            loading && "opacity-50 cursor-not-allowed",
            className
          )}
          data-testid={`select-${label?.toLowerCase().replace(/\s+/g, '-') || 'field'}`}
        >
          <div className="flex items-center justify-between">
            <span className={cn(
              value || selectedValues.length > 0 ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
            )}>
              {displayValue}
            </span>
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
          </div>
        </button>
        
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute z-20 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {searchable && (
                <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search options..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      data-testid="select-search-input"
                    />
                  </div>
                </div>
              )}
              
              <div className="py-1">
                {filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    disabled={option.disabled}
                    className={cn(
                      "w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",
                      (value === option.value || selectedValues.includes(option.value)) && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    )}
                    data-testid={`option-${option.value}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.label}</span>
                      {(value === option.value || selectedValues.includes(option.value)) && (
                        <Check className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                ))}
                
                {filteredOptions.length === 0 && (
                  <div className="px-4 py-2 text-gray-500 dark:text-gray-400 text-center">
                    No options found
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      
      {(error || hint) && (
        <div className="mt-1 text-sm">
          {error && (
            <div className="text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {error}
            </div>
          )}
          {hint && !error && (
            <div className="text-gray-500 dark:text-gray-400">
              {hint}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface ZohoTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  loading?: boolean;
  autoResize?: boolean;
}

export function ZohoTextarea({
  label,
  error,
  hint,
  required,
  loading,
  autoResize,
  className,
  ...props
}: ZohoTextareaProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (autoResize && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [props.value, autoResize]);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        ref={textareaRef}
        {...props}
        className={cn(
          "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none",
          error && "border-red-500 focus:ring-red-500 focus:border-red-500",
          loading && "opacity-50 cursor-not-allowed",
          !autoResize && "resize-y",
          className
        )}
        disabled={loading || props.disabled}
        data-testid={`textarea-${props.name || 'field'}`}
      />
      
      {(error || hint) && (
        <div className="mt-1 text-sm">
          {error && (
            <div className="text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {error}
            </div>
          )}
          {hint && !error && (
            <div className="text-gray-500 dark:text-gray-400">
              {hint}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface ZohoFileUploadProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  onFileSelect?: (files: FileList | null) => void;
  loading?: boolean;
  className?: string;
}

export function ZohoFileUpload({
  label,
  error,
  hint,
  required,
  accept,
  multiple,
  maxSize,
  onFileSelect,
  loading,
  className,
}: ZohoFileUploadProps) {
  const [dragActive, setDragActive] = React.useState(false);
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    
    const fileArray = Array.from(files);
    
    // Validate file size
    if (maxSize) {
      const oversizedFiles = fileArray.filter(file => file.size > maxSize * 1024 * 1024);
      if (oversizedFiles.length > 0) {
        alert(`Files must be smaller than ${maxSize}MB`);
        return;
      }
    }
    
    setSelectedFiles(fileArray);
    onFileSelect?.(files);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    
    // Create new FileList-like object
    const dt = new DataTransfer();
    newFiles.forEach(file => dt.items.add(file));
    onFileSelect?.(dt.files);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200",
          dragActive && "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
          error && "border-red-500",
          loading && "opacity-50 cursor-not-allowed",
          className
        )}
        data-testid="file-upload-zone"
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          disabled={loading}
          data-testid="file-upload-input"
        />
        
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <div className="text-gray-600 dark:text-gray-400">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={loading}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            data-testid="file-upload-button"
          >
            Click to upload
          </button>
          <span> or drag and drop</span>
        </div>
        {accept && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Accepted formats: {accept}
          </div>
        )}
        {maxSize && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Max size: {maxSize}MB
          </div>
        )}
      </div>
      
      {/* Selected Files */}
      {selectedFiles.length > 0 && (
        <div className="mt-3 space-y-2">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-md"
              data-testid={`selected-file-${index}`}
            >
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-900 dark:text-white font-medium">
                  {file.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                data-testid={`remove-file-${index}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
      
      {(error || hint) && (
        <div className="mt-1 text-sm">
          {error && (
            <div className="text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {error}
            </div>
          )}
          {hint && !error && (
            <div className="text-gray-500 dark:text-gray-400">
              {hint}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Form Layout Components
interface ZohoFormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

export function ZohoForm({ children, onSubmit, className }: ZohoFormProps) {
  return (
    <form 
      onSubmit={onSubmit}
      className={cn("space-y-6", className)}
      data-testid="zoho-form"
    >
      {children}
    </form>
  );
}

interface ZohoFormRowProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export function ZohoFormRow({ 
  children, 
  columns = 1,
  gap = "md",
  className 
}: ZohoFormRowProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-4",
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
      data-testid="form-row"
    >
      {children}
    </div>
  );
}