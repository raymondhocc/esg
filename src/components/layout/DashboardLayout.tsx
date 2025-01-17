import React from 'react';
import { TopMenu } from './TopMenu';
import { BottomMenu } from './BottomMenu';
import { LeftSidebar } from './LeftSidebar';
import { RightSidebar } from './RightSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenu />
      <div className="flex h-[calc(100vh-8rem)]">
        <LeftSidebar />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
        <RightSidebar />
      </div>
      <BottomMenu />
    </div>
  );
};
