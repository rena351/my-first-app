import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { type App } from "@shared/schema";

export function useSearchHook(query: string) {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const { data: searchResults, isLoading: isSearching } = useQuery<App[]>({
    queryKey: ["/api/apps", { search: debouncedQuery }],
    enabled: debouncedQuery.length > 0,
  });

  return {
    searchResults: debouncedQuery.length > 0 ? searchResults : [],
    isSearching: isSearching && debouncedQuery.length > 0,
  };
}
