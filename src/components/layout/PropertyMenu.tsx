import React, { useState } from 'react';
import {
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  KeyIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  ChartBarSquareIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  MapPinIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  ListBulletIcon,
  Cog6ToothIcon,
  CalendarIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  subItems?: MenuItem[];
}

export const PropertyMenu: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['portfolio']));

  const menuItems: MenuItem[] = [
    {
      id: 'portfolio',
      label: 'Portfolio Management',
      icon: <BuildingOfficeIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'add-property',
          label: 'Add Property',
          icon: <PlusCircleIcon className="w-4 h-4" />,
          badge: 'New',
        },
        {
          id: 'property-list',
          label: 'Property List',
          icon: <ListBulletIcon className="w-4 h-4" />,
        },
        {
          id: 'property-map',
          label: 'Property Map',
          icon: <MapPinIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      id: 'leasing',
      label: 'Leasing & Tenants',
      icon: <KeyIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'lease-management',
          label: 'Lease Management',
          icon: <DocumentDuplicateIcon className="w-4 h-4" />,
        },
        {
          id: 'tenant-directory',
          label: 'Tenant Directory',
          icon: <UserGroupIcon className="w-4 h-4" />,
        },
        {
          id: 'occupancy',
          label: 'Occupancy Tracking',
          icon: <ChartBarSquareIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      id: 'operations',
      label: 'Operations',
      icon: <Cog6ToothIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'maintenance',
          label: 'Maintenance',
          icon: <WrenchScrewdriverIcon className="w-4 h-4" />,
        },
        {
          id: 'inspections',
          label: 'Inspections',
          icon: <ClipboardDocumentCheckIcon className="w-4 h-4" />,
        },
        {
          id: 'scheduling',
          label: 'Scheduling',
          icon: <CalendarIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      id: 'financials',
      label: 'Financial Management',
      icon: <CurrencyDollarIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'rent-collection',
          label: 'Rent Collection',
          icon: <CurrencyDollarIcon className="w-4 h-4" />,
        },
        {
          id: 'expenses',
          label: 'Expenses',
          icon: <DocumentDuplicateIcon className="w-4 h-4" />,
        },
        {
          id: 'financial-reports',
          label: 'Financial Reports',
          icon: <ChartBarSquareIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      id: 'assets',
      label: 'Asset Management',
      icon: <BuildingStorefrontIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'asset-registry',
          label: 'Asset Registry',
          icon: <ListBulletIcon className="w-4 h-4" />,
        },
        {
          id: 'documents',
          label: 'Documents',
          icon: <DocumentDuplicateIcon className="w-4 h-4" />,
        },
        {
          id: 'photos',
          label: 'Photos & Media',
          icon: <PhotoIcon className="w-4 h-4" />,
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
          {item.badge && (
            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
              {item.badge}
            </span>
          )}
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
