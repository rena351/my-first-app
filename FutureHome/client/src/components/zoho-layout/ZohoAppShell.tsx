import React from 'react';
import ZohoTopBar from './ZohoTopBar';
import ZohoBottomBar from './ZohoBottomBar';

interface ZohoAppShellProps {
  children: React.ReactNode;
}

export default function ZohoAppShell({ children }: ZohoAppShellProps) {
  return (
    <div className="min-h-screen bg-aura-dark text-white">
      <ZohoTopBar />

      <main className="pt-16 pb-12">
        {/* The padding-top (pt-16) and padding-bottom (pb-12) are to prevent content
            from being hidden behind the fixed top and bottom bars. */}
        {children}
      </main>

      <ZohoBottomBar />
    </div>
  );
}
