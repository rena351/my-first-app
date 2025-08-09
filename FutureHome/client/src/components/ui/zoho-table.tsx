import React from "react";
import { cn } from "@/lib/utils";
import { 
  ChevronUp, 
  ChevronDown, 
  MoreHorizontal, 
  Search,
  Filter,
  Download,
  ArrowUpDown,
  CheckSquare,
  Square
} from "lucide-react";
import { ZohoButton } from "./zoho-button";

interface Column {
  key: string;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  render?: (value: any, record: any) => React.ReactNode;
}

interface ZohoTableProps {
  data: Array<Record<string, any>>;
  columns: Column[];
  loading?: boolean;
  selectable?: boolean;
  selectedRows?: string[];
  onRowSelect?: (selectedRowKeys: string[]) => void;
  onSort?: (key: string, direction: "asc" | "desc") => void;
  sortConfig?: { key: string; direction: "asc" | "desc" };
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
  actions?: Array<{
    label: string;
    onClick: (record: any) => void;
    icon?: React.ReactNode;
  }>;
  className?: string;
}

export function ZohoTable({
  data,
  columns,
  loading = false,
  selectable = false,
  selectedRows = [],
  onRowSelect,
  onSort,
  sortConfig,
  pagination,
  actions,
  className,
}: ZohoTableProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filters, setFilters] = React.useState<Record<string, string>>({});

  const handleSelectAll = () => {
    if (!onRowSelect) return;
    
    const allSelected = selectedRows.length === data.length;
    if (allSelected) {
      onRowSelect([]);
    } else {
      onRowSelect(data.map((_, index) => index.toString()));
    }
  };

  const handleRowSelect = (rowKey: string) => {
    if (!onRowSelect) return;
    
    const newSelection = selectedRows.includes(rowKey)
      ? selectedRows.filter(key => key !== rowKey)
      : [...selectedRows, rowKey];
    
    onRowSelect(newSelection);
  };

  const handleSort = (columnKey: string) => {
    if (!onSort) return;
    
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === columnKey && sortConfig.direction === "asc") {
      direction = "desc";
    }
    
    onSort(columnKey, direction);
  };

  const filteredData = React.useMemo(() => {
    return data.filter(item => {
      // Search filter
      if (searchTerm) {
        const searchValue = Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        if (!searchValue) return false;
      }
      
      // Column filters
      for (const [key, value] of Object.entries(filters)) {
        if (value && !String(item[key]).toLowerCase().includes(value.toLowerCase())) {
          return false;
        }
      }
      
      return true;
    });
  }, [data, searchTerm, filters]);

  if (loading) {
    return (
      <div className="w-full">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="animate-pulse">
            {/* Table header skeleton */}
            <div className="border-b border-gray-200 dark:border-gray-700 p-4">
              <div className="flex space-x-4">
                {columns.map((_, index) => (
                  <div key={index} className="h-4 bg-gray-300 dark:bg-gray-600 rounded flex-1"></div>
                ))}
              </div>
            </div>
            {/* Table rows skeleton */}
            {[...Array(5)].map((_, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 p-4">
                <div className="flex space-x-4">
                  {columns.map((_, colIndex) => (
                    <div key={colIndex} className="h-4 bg-gray-300 dark:bg-gray-600 rounded flex-1"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Table Toolbar */}
      <div className="flex items-center justify-between mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-t-lg">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              data-testid="table-search-input"
            />
          </div>
          <ZohoButton variant="outline" icon="filter" size="sm">
            Filter
          </ZohoButton>
        </div>
        
        <div className="flex items-center gap-2">
          <ZohoButton variant="outline" icon="download" size="sm">
            Export
          </ZohoButton>
          {selectedRows.length > 0 && (
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {selectedRows.length} selected
            </span>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-b-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                {selectable && (
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={handleSelectAll}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      data-testid="select-all-checkbox"
                    >
                      {selectedRows.length === data.length && data.length > 0 ? (
                        <CheckSquare className="w-4 h-4" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    style={{ width: column.width }}
                  >
                    <div className="flex items-center gap-2">
                      <span>{column.title}</span>
                      {column.sortable && (
                        <button
                          onClick={() => handleSort(column.key)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          data-testid={`sort-${column.key}`}
                        >
                          {sortConfig?.key === column.key ? (
                            sortConfig.direction === "asc" ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )
                          ) : (
                            <ArrowUpDown className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  </th>
                ))}
                {actions && actions.length > 0 && (
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredData.map((record, index) => (
                <tr 
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                  data-testid={`table-row-${index}`}
                >
                  {selectable && (
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleRowSelect(index.toString())}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        data-testid={`select-row-${index}`}
                      >
                        {selectedRows.includes(index.toString()) ? (
                          <CheckSquare className="w-4 h-4" />
                        ) : (
                          <Square className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                  )}
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {column.render 
                        ? column.render(record[column.key], record)
                        : record[column.key]
                      }
                    </td>
                  ))}
                  {actions && actions.length > 0 && (
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        {actions.map((action, actionIndex) => (
                          <button
                            key={actionIndex}
                            onClick={() => action.onClick(record)}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                            data-testid={`action-${action.label.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                          >
                            {action.icon || action.label}
                          </button>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination && (
          <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing {((pagination.current - 1) * pagination.pageSize) + 1} to {Math.min(pagination.current * pagination.pageSize, pagination.total)} of {pagination.total} results
              </div>
              <div className="flex items-center gap-2">
                <ZohoButton
                  variant="outline"
                  size="sm"
                  disabled={pagination.current === 1}
                  onClick={() => pagination.onChange(pagination.current - 1, pagination.pageSize)}
                >
                  Previous
                </ZohoButton>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Page {pagination.current} of {Math.ceil(pagination.total / pagination.pageSize)}
                </span>
                <ZohoButton
                  variant="outline"
                  size="sm"
                  disabled={pagination.current >= Math.ceil(pagination.total / pagination.pageSize)}
                  onClick={() => pagination.onChange(pagination.current + 1, pagination.pageSize)}
                >
                  Next
                </ZohoButton>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && !loading && (
        <div className="text-center py-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="text-gray-500 dark:text-gray-400">
            <div className="text-lg font-medium mb-2">No data found</div>
            <div className="text-sm">Try adjusting your search or filter criteria</div>
          </div>
        </div>
      )}
    </div>
  );
}