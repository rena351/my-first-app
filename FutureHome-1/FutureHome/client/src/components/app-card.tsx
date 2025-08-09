import { Link } from "wouter";
import { type Category } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import { type App } from "@shared/schema";

interface AppCardProps {
  category: Category;
}

export default function AppCard({ category }: AppCardProps) {
  const { data: apps } = useQuery<App[]>({
    queryKey: ["/api/apps"],
    select: (allApps: App[]) => allApps.filter(app => app.categoryId === category.id),
  });

  const displayApps = apps?.slice(0, 3) || [];
  const remainingCount = (apps?.length || 0) - 3;

  return (
    <Link href={`/category/${category.id}`}>
      <div className="app-card bg-aura-dark-secondary rounded-xl p-6 neon-border cursor-pointer">
        <div className="flex items-center mb-4">
          <i className={`${category.icon} text-2xl mr-3`} style={{ color: category.color }}></i>
          <h3 className="text-xl font-semibold">{category.name}</h3>
          <span 
            className="ml-auto text-black text-xs px-2 py-1 rounded-full font-medium"
            style={{ backgroundColor: category.color }}
          >
            {category.appCount} Apps
          </span>
        </div>
        <p className="text-gray-300 text-sm mb-4">{category.description}</p>
        <div className="space-y-2 text-sm">
          {displayApps.map((app) => (
            <div key={app.id} className="flex justify-between">
              <span>{app.name}</span>
              <i className="fas fa-arrow-right" style={{ color: category.color }}></i>
            </div>
          ))}
          {remainingCount > 0 && (
            <div className="text-gray-400">+{remainingCount} more apps</div>
          )}
        </div>
      </div>
    </Link>
  );
}
