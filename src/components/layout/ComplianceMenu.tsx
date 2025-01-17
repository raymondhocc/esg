import React, { useState } from 'react';
import {
  DocumentTextIcon,
  FolderIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentArrowUpIcon,
  DocumentChartBarIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: MenuItem[];
}

export const ComplianceMenu: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['documents']));

  const menuItems: MenuItem[] = [
    {
      id: 'documents',
      label: 'Documents',
      icon: <FolderIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'upload',
          label: 'Upload Documents',
          icon: <DocumentArrowUpIcon className="w-4 h-4" />,
        },
        {
          id: 'recent',
          label: 'Recent Documents',
          icon: <ClockIcon className="w-4 h-4" />,
        },
        {
          id: 'search',
          label: 'Search Documents',
          icon: <DocumentMagnifyingGlassIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      id: 'reports',
      label: 'Compliance Reports',
      icon: <DocumentChartBarIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'monthly',
          label: 'Monthly Reports',
          icon: <DocumentTextIcon className="w-4 h-4" />,
        },
        {
          id: 'annual',
          label: 'Annual Reports',
          icon: <DocumentTextIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      id: 'status',
      label: 'Compliance Status',
      icon: <CheckCircleIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'current',
          label: 'Current Status',
          icon: <CheckCircleIcon className="w-4 h-4" className="text-green-500" />,
        },
        {
          id: 'pending',
          label: 'Pending Reviews',
          icon: <ClockIcon className="w-4 h-4" className="text-yellow-500" />,
        },
        {
          id: 'issues',
          label: 'Issues',
          icon: <ExclamationTriangleIcon className="w-4 h-4" className="text-red-500" />,
        },
      ],
    },
  ];

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems.has(item.id);

    return (
      <div key={item.id} className="relative">
        <button
          onClick={() => hasSubItems && toggleExpand(item.id)}
          className={`w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg text-gray-700
            ${depth > 0 ? 'ml-4 text-sm' : ''}`}
        >
          <span className="flex-shrink-0">{item.icon}</span>
          <span className="flex-grow text-left">{item.label}</span>
          {hasSubItems && (
            <span className="flex-shrink-0">
              {isExpanded ? (
                <ChevronDownIcon className="w-4 h-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </span>
          )}
        </button>
        {hasSubItems && isExpanded && (
          <div className="mt-1">
            {item.subItems.map((subItem) => renderMenuItem(subItem, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-2 space-y-1">
      {menuItems.map((item) => renderMenuItem(item))}
    </div>
  );
};
