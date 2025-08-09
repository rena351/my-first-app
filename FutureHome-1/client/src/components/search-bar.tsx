import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { type App } from "@shared/schema";
import { Link } from "wouter";
import { useSearchHook } from "@/hooks/use-search";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { searchResults, isSearching } = useSearchHook(query);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search across all 80+ apps..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 py-4 text-lg bg-aura-dark-secondary border-aura-gray focus:border-aura-neon-blue focus:shadow-neon-blue rounded-xl"
        />
      </div>
      
      {query && (
        <div className="absolute top-full mt-2 w-full bg-aura-dark-secondary border border-aura-gray rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-gray-400">Searching...</div>
          ) : searchResults?.length === 0 ? (
            <div className="p-4 text-center text-gray-400">No apps found for "{query}"</div>
          ) : (
            <div className="p-2">
              {searchResults?.map((app) => (
                <Link key={app.id} href={`/app/${app.id}`}>
                  <div className="flex items-center p-3 hover:bg-aura-gray rounded-lg cursor-pointer transition-colors">
                    <i className={`${app.icon} text-xl mr-3 text-aura-neon-blue`}></i>
                    <div>
                      <div className="font-medium">{app.name}</div>
                      <div className="text-sm text-gray-400">{app.description}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
