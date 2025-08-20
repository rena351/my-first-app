import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { type App } from "@shared/schema";
import UniversalTopBar from "@/components/universal-top-bar";
import AnalyticsDashboard from "@/components/apps/analytics/AnalyticsDashboard";
import { Skeleton } from "@/components/ui/skeleton";

export const NewAnalyticsPage = () => {
  // Hardcode the app ID for now. In a real app, this would come from the router.
  const appId = "c9c6f7b1-8b4a-4b0a-8b0a-8b0a8b0a8b0a"; // This is a fake ID

  const { data: app, isLoading: appLoading } = useQuery<App>({
    queryKey: ["/api/apps", appId],
  });

  if (appLoading || !app) {
    return (
      <div className="min-h-screen bg-aura-dark">
        <Skeleton className="h-14 w-full" />
        <div className="p-8">
          <Skeleton className="h-12 w-64 mb-4" />
          <Skeleton className="h-6 w-96 mb-8" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-aura-dark">
      <UniversalTopBar
        searchPlaceholder={app.searchPlaceholder || `Search in ${app.name}...`}
        createMenuItems={app.createMenuItems || []}
      />
      <div className="p-8">
        <AnalyticsDashboard />
      </div>
    </div>
  );
};

export default NewAnalyticsPage;
