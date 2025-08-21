import React from 'react';
import ZohoTopBar from './zoho-layout/ZohoTopBar';
import ZohoBottomBar from './zoho-layout/ZohoBottomBar';

interface GlobalShellProps {
  children: React.ReactNode;
}

export default function GlobalShell({ children }: GlobalShellProps) {
  return (
    <div className="min-h-screen bg-aura-dark text-white">
      <ZohoTopBar />

      <main>
        {children}
      </main>

      <ZohoBottomBar />
    </div>
  );
}
