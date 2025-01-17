import React from 'react';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';

export const TopMenu: React.FC = () => {
  return (
    <header className="h-16 bg-white shadow-sm">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-900">ESG Analytics</h1>
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <BellIcon className="w-6 h-6" />
          </button>
          <div className="h-8 w-8 rounded-full bg-blue-500" />
        </div>
      </div>
    </header>
  );
};
