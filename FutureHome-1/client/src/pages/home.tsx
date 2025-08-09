import { useQuery } from "@tanstack/react-query";
import { type Category, type Suite, type App } from "@shared/schema";
import SuiteCard from "@/components/suite-card";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";

export default function Home() {
  const { data: categories, isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: apps, isLoading: appsLoading } = useQuery<App[]>({
    queryKey: ["/api/apps"],
  });

  const { data: suites, isLoading: suitesLoading } = useQuery<Suite[]>({
    queryKey: ["/api/suites"],
  });

  // Group apps by category
  const appsByCategory = categories?.reduce((acc, category) => {
    acc[category.id] = apps?.filter(app => app.categoryId === category.id) || [];
    return acc;
  }, {} as Record<string, App[]>) || {};

  if (categoriesLoading || appsLoading || suitesLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-aura-dark via-aura-dark-secondary to-aura-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <Skeleton className="h-16 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-[600px] mx-auto mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-aura-dark via-aura-dark-secondary to-aura-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Welcome to <span className="gradient-text">AURA</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The next generation business suite with 80+ integrated applications.
            Transform your workflow with our futuristic, AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apps">
              <Button className="bg-aura-neon-blue hover:bg-blue-600 text-black px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-neon-blue">
                View All Apps
              </Button>
            </Link>
            <Button variant="outline" className="border border-aura-neon-purple text-aura-neon-purple hover:bg-aura-neon-purple hover:text-black px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-neon-purple">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar />
        </div>

        {/* Stats Summary */}
        <div className="bg-aura-dark-secondary rounded-2xl p-8 mb-12 text-center border border-aura-gray">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold gradient-text">{apps?.length || 0}</h3>
              <p className="text-gray-300">Total Applications</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold gradient-text">{categories?.length || 0}</h3>
              <p className="text-gray-300">Business Categories</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold gradient-text">{suites?.length || 0}</h3>
              <p className="text-gray-300">Integrated Suites</p>
            </div>
          </div>
        </div>

        {/* All Apps Organized by Categories */}
        <div className="space-y-16 mb-20">
          {categories?.map((category) => {
            const categoryApps = appsByCategory[category.id] || [];
            if (categoryApps.length === 0) return null;

            return (
              <div key={category.id} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <i className={`${category.icon} text-3xl`} style={{ color: category.color }}></i>
                    <div>
                      <h2 className="text-2xl font-bold">{category.name}</h2>
                      <p className="text-gray-300 text-sm">{category.description}</p>
                    </div>
                    <span 
                      className="text-black text-xs px-3 py-1 rounded-full font-medium"
                      style={{ backgroundColor: category.color }}
                    >
                      {categoryApps.length} Apps
                    </span>
                  </div>
                  <Link href={`/category/${category.id}`}>
                    <Button 
                      variant="outline" 
                      className="text-sm"
                      style={{ 
                        borderColor: category.color,
                        color: category.color 
                      }}
                    >
                      View All <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </Link>
                </div>

                {/* Apps Grid for this Category - Show ALL apps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {categoryApps.map((app) => (
                    <Link key={app.id} href={`/app/${app.id}`}>
                      <div className="app-card bg-aura-dark-secondary rounded-lg p-6 cursor-pointer transition-all duration-300 border border-transparent hover:border-opacity-80 hover:shadow-lg hover:scale-105" style={{ borderColor: `${category.color}40` }}>
                        <div className="text-center">
                          <div 
                            className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                            style={{ backgroundColor: `${category.color}20` }}
                          >
                            <i 
                              className={`${app.icon} text-xl`} 
                              style={{ color: category.color }}
                            ></i>
                          </div>
                          <h3 className="text-sm font-semibold mb-2">{app.name}</h3>
                          <p className="text-xs text-gray-400 line-clamp-2 mb-3">{app.description}</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {app.shortcuts.slice(0, 2).map((shortcut, idx) => (
                              <span 
                                key={idx}
                                className="text-xs px-2 py-1 rounded-full"
                                style={{ 
                                  backgroundColor: `${category.color}15`,
                                  color: category.color 
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

        {/* Suites Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Integrated Suites</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Pre-configured bundles of apps working seamlessly together for specific business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {suites?.map((suite) => (
            <SuiteCard key={suite.id} suite={suite} />
          ))}
        </div>
      </div>
    </div>
  );
}
