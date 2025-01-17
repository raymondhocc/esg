import React, { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, BellIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ActivityItem {
  id: number;
  message: string;
  time: string;
  type: 'update' | 'alert' | 'notification';
}

export const RightSidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<'activity' | 'alerts'>('activity');

  const activities: ActivityItem[] = [
    {
      id: 1,
      message: 'Property update: Energy efficiency rating improved',
      time: '2 hours ago',
      type: 'update'
    },
    {
      id: 2,
      message: 'New ESG compliance alert: Carbon emissions report due',
      time: '4 hours ago',
      type: 'alert'
    },
    {
      id: 3,
      message: 'Sustainability goal achieved: Water consumption reduced by 15%',
      time: '1 day ago',
      type: 'notification'
    }
  ];

  const getActivityColor = (type: ActivityItem['type']) => {
    switch (type) {
      case 'alert':
        return 'bg-red-500';
      case 'update':
        return 'bg-blue-500';
      case 'notification':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative h-full">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`absolute top-1/2 ${isVisible ? '-left-4' : '-left-10'} transform -translate-y-1/2 
          bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:shadow-md transition-all z-50`}
      >
        {isVisible ? (
          <ChevronRightIcon className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
        )}
      </button>
      
      <aside 
        className={`w-64 bg-white shadow-sm border-l h-full transform transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('activity')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${
                  activeTab === 'activity' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <ClockIcon className="w-4 h-4" />
                <span className="text-xs font-semibold">Activity</span>
              </button>
              <button
                onClick={() => setActiveTab('alerts')}
                className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${
                  activeTab === 'alerts' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <BellIcon className="w-4 h-4" />
                <span className="text-xs font-semibold">Alerts</span>
              </button>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-500 p-1 hover:bg-gray-50 rounded-full"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto">
            <div className="space-y-4">
              {activities
                .filter(activity => 
                  activeTab === 'activity' ? activity.type === 'update' : activity.type === 'alert'
                )
                .map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-2 h-2 rounded-full ${getActivityColor(item.type)} mt-2`} />
                    <div>
                      <p className="text-sm text-gray-600">{item.message}</p>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
              View All
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};
