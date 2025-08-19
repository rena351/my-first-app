import React from 'react';

export const AnalyticsDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
            <h2 className="text-xl font-semibold mb-4">My Favorite Dashboards</h2>
            <p className="text-gray-400">Placeholder for favorite dashboards.</p>
          </div>
        </div>
        <div>
          <div className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
            <h2 className="text-xl font-semibold mb-4">Recently Viewed Reports</h2>
            <p className="text-gray-400">Placeholder for recently viewed reports.</p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
            <h2 className="text-xl font-semibold mb-4">Zia Insights</h2>
            <p className="text-gray-400">Placeholder for Zia Insights feed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
