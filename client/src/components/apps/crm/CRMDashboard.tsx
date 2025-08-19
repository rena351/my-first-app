import React from 'react';

export const CRMDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">CRM Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
          <h2 className="text-xl font-semibold mb-4">Deals Pipeline</h2>
          <p className="text-gray-400">Placeholder for Deals Pipeline widget.</p>
        </div>
        <div className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
          <h2 className="text-xl font-semibold mb-4">Leads by Source</h2>
          <p className="text-gray-400">Placeholder for Leads by Source widget.</p>
        </div>
        <div className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
          <h2 className="text-xl font-semibold mb-4">Today's Tasks</h2>
          <p className="text-gray-400">Placeholder for Today's Tasks widget.</p>
        </div>
        <div className="bg-aura-dark-secondary rounded-lg p-6 border border-aura-gray">
          <h2 className="text-xl font-semibold mb-4">Today's Meetings</h2>
          <p className="text-gray-400">Placeholder for Today's Meetings widget.</p>
        </div>
      </div>
    </div>
  );
};

export default CRMDashboard;
