import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type App, type Category } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, UserCircle, Search, Plus } from "lucide-react";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import TwoLevelSidebar from "@/components/two-level-sidebar";

export default function AppPage() {
  const { appId } = useParams<{ appId: string }>();

  const { data: app, isLoading: appLoading } = useQuery<App>({
    queryKey: ["/api/apps", appId],
  });

  const { data: category, isLoading: categoryLoading } = useQuery<Category>({
    queryKey: ["/api/categories", app?.categoryId],
    enabled: !!app?.categoryId,
  });

  if (appLoading || categoryLoading) {
    return (
      <div className="min-h-screen bg-aura-dark">
        <div className="bg-aura-dark-secondary border-b border-aura-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-8 w-96" />
              <div className="flex space-x-4">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <Skeleton className="w-64 h-screen" />
          <div className="flex-1 p-8">
            <Skeleton className="h-12 w-64 mb-4" />
            <Skeleton className="h-6 w-96 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-32 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!app || !category) {
    return (
      <div className="min-h-screen bg-aura-dark pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-4">App Not Found</h1>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-aura-dark">
      {/* App-specific Top Navigation */}
      <nav className="bg-aura-dark-secondary border-b border-aura-gray">
        <div className="flex items-center justify-between h-14 px-4">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-aura-gray"></div>
            <span 
              className="text-lg font-semibold"
              style={{ color: category.color }}
            >
              {app.name}
            </span>
          </div>

          {/* Center search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder={`Search in ${app.name}...`}
                className="w-full bg-aura-dark border border-aura-gray rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:border-opacity-50 transition-all"
                style={{ borderColor: category.color + '40' }}
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-2">
            <Button 
              size="sm" 
              className="text-black font-medium"
              style={{ backgroundColor: category.color }}
            >
              <Plus className="h-4 w-4 mr-1" />
              New
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <UserCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Layout with Sidebar */}
      <div className="flex">
        {/* App-specific Sidebar */}
        <TwoLevelSidebar app={app} category={category} currentPage="Dashboard" />

        {/* Main Content Area */}
        <div className="flex-1 bg-aura-dark">
          <div className="p-8">
            {/* Dashboard Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-300">Welcome back! Here's what's happening with your {app.name}.</p>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {app.features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray hover:border-opacity-50 transition-all duration-200"
                  style={{ borderColor: `${category.color}20` }}
                >
                  <div className="flex items-center">
                    <div 
                      className="p-3 rounded-full mr-4"
                      style={{ 
                        backgroundColor: `${category.color}20`,
                        color: category.color 
                      }}
                    >
                      <i className={`${app.icon} text-xl`}></i>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{(index + 1) * 1247}</p>
                      <p className="text-gray-400 text-sm">{feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {app.shortcuts.slice(0, 4).map((shortcut, index) => (
                    <Button 
                      key={index}
                      variant="outline"
                      className="p-4 h-auto flex flex-col items-center justify-center space-y-2 border-aura-gray hover:border-opacity-50"
                      style={{ 
                        borderColor: `${category.color}40`,
                        color: category.color,
                      }}
                    >
                      <i className="fas fa-plus text-lg"></i>
                      <span className="text-sm">{shortcut}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: "New record created", time: "2 minutes ago" },
                    { action: "Report generated", time: "1 hour ago" },
                    { action: "Data imported", time: "3 hours ago" },
                    { action: "Settings updated", time: "1 day ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-aura-gray/30 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: category.color }}
                        ></div>
                        <span className="text-sm">{activity.action}</span>
                      </div>
                      <span className="text-xs text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* App-specific Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Overview Chart</h3>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    View Details
                  </Button>
                </div>
                <div className="h-64 bg-aura-dark rounded-lg flex items-center justify-center border border-aura-gray">
                  <div className="text-center">
                    <i 
                      className="fas fa-chart-line text-4xl mb-4"
                      style={{ color: category.color }}
                    ></i>
                    <p className="text-gray-400">Interactive charts and analytics will be displayed here</p>
                  </div>
                </div>
              </div>

              <div className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
                <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  {app.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{feature}</span>
                        <span style={{ color: category.color }}>{85 + index * 5}%</span>
                      </div>
                      <div className="w-full bg-aura-gray rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-300"
                          style={{ 
                            backgroundColor: category.color,
                            width: `${85 + index * 5}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
