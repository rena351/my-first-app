import { useQuery } from "@tanstack/react-query";
import { type Category, type App } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import SearchBar from "@/components/search-bar";
import { ArrowLeft } from "lucide-react";

export default function AllApps() {
  const { data: categories, isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: apps, isLoading: appsLoading } = useQuery<App[]>({
    queryKey: ["/api/apps"],
  });

  // Group apps by category
  const appsByCategory = categories?.reduce((acc, category) => {
    acc[category.id] = apps?.filter(app => app.categoryId === category.id) || [];
    return acc;
  }, {} as Record<string, App[]>) || {};

  if (categoriesLoading || appsLoading) {
    return (
      <div className="min-h-screen bg-aura-dark pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <Skeleton key={i} className="h-40 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-aura-dark pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/">
              <Button variant="ghost" className="mb-4 text-gray-300 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">All Applications</h1>
            <p className="text-gray-300">Complete directory of all {apps?.length || 0} apps across {categories?.length || 0} categories</p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Apps organized by category */}
        <div className="space-y-12">
          {categories?.map((category) => {
            const categoryApps = appsByCategory[category.id] || [];
            if (categoryApps.length === 0) return null;

            return (
              <div key={category.id} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-4 border-b border-aura-gray pb-4">
                  <i className={`${category.icon} text-3xl`} style={{ color: category.color }}></i>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                  <span 
                    className="text-black text-sm px-4 py-2 rounded-full font-semibold"
                    style={{ backgroundColor: category.color }}
                  >
                    {categoryApps.length} Apps
                  </span>
                </div>

                {/* Apps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {categoryApps.map((app) => (
                    <Link key={app.id} href={`/app/${app.name}`}>
                      <div className="bg-aura-dark-secondary rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-transparent hover:border-opacity-50" style={{ borderColor: `${category.color}40` }}>
                        <div className="text-center">
                          <div 
                            className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                            style={{ backgroundColor: `${category.color}20` }}
                          >
                            <i 
                              className={`${app.icon} text-2xl`} 
                              style={{ color: category.color }}
                            ></i>
                          </div>
                          <h3 className="font-bold mb-2 text-white">{app.name}</h3>
                          <p className="text-xs text-gray-400 mb-4 line-clamp-2">{app.description}</p>
                          
                          {/* Features preview */}
                          <div className="space-y-1 mb-4">
                            {app.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="text-xs text-gray-500 truncate">
                                • {feature}
                              </div>
                            ))}
                          </div>

                          {/* Shortcuts */}
                          <div className="flex flex-wrap gap-1 justify-center">
                            {app.shortcuts.slice(0, 3).map((shortcut, idx) => (
                              <span 
                                key={idx}
                                className="text-xs px-2 py-1 rounded-full"
                                style={{ 
                                  backgroundColor: `${category.color}10`,
                                  color: category.color,
                                  border: `1px solid ${category.color}30`
                                }}
                              >
                                {shortcut}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Footer */}
        <div className="mt-16 text-center bg-aura-dark-secondary rounded-2xl p-8 border border-aura-gray">
          <h3 className="text-2xl font-bold mb-4">Complete Business Suite</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold gradient-text">{apps?.length || 0}</div>
              <div className="text-gray-400">Total Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">{categories?.length || 0}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">
                {apps?.reduce((sum, app) => sum + app.features.length, 0) || 0}
              </div>
              <div className="text-gray-400">Features</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}