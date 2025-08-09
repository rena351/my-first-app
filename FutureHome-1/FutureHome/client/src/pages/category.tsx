import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Category, type App } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();

  const { data: category, isLoading: categoryLoading } = useQuery<Category>({
    queryKey: ["/api/categories", categoryId],
  });

  const { data: apps, isLoading: appsLoading } = useQuery<App[]>({
    queryKey: ["/api/apps"],
    select: (allApps: App[]) => allApps.filter(app => app.categoryId === categoryId),
  });

  if (categoryLoading || appsLoading) {
    return (
      <div className="min-h-screen bg-aura-dark pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-10 w-32 mb-8" />
          <Skeleton className="h-12 w-64 mb-4" />
          <Skeleton className="h-6 w-96 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-aura-dark pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Category Not Found</h1>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-aura-dark pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-gray-300 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <i className={`${category.icon} text-3xl mr-4`} style={{ color: category.color }}></i>
            <h1 className="text-4xl font-bold">{category.name}</h1>
            <span 
              className="ml-4 text-black text-sm px-3 py-1 rounded-full font-medium"
              style={{ backgroundColor: category.color }}
            >
              {category.appCount} Apps
            </span>
          </div>
          <p className="text-gray-300 text-lg">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps?.map((app) => (
            <Link key={app.id} href={`/app/${app.id}`}>
              <div className="app-card bg-aura-dark-secondary rounded-xl p-6 cursor-pointer">
                <div className="flex items-center mb-4">
                  <i className={`${app.icon} text-2xl mr-3`} style={{ color: category.color }}></i>
                  <h3 className="text-xl font-semibold">{app.name}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{app.description}</p>
                <div className="space-y-2 text-sm">
                  {app.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{feature}</span>
                      <i className="fas fa-arrow-right" style={{ color: category.color }}></i>
                    </div>
                  ))}
                  {app.features.length > 3 && (
                    <div className="text-gray-400">+{app.features.length - 3} more features</div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
