import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  BuildingLibraryIcon,
  NewspaperIcon,
  AcademicCapIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
  ArrowTrendingUpIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  subItems?: MenuItem[];
}

export const ResearchMenu: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['market-research']));

  const menuItems: MenuItem[] = [
    {
      id: 'market-research',
      label: 'Market Research',
      icon: <ChartBarIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'industry-analysis',
          label: 'Industry Analysis',
          icon: <BuildingLibraryIcon className="w-4 h-4" />,
        },
        {
          id: 'market-trends',
          label: 'Market Trends',
          icon: <ArrowTrendingUpIcon className="w-4 h-4" />,
        },
        {
          id: 'competitor-analysis',
          label: 'Competitor Analysis',
          icon: <PresentationChartLineIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      id: 'data-sources',
      label: 'Data Sources',
      icon: <RectangleStackIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'financial-databases',
          label: 'Financial Databases',
          icon: <TableCellsIcon className="w-4 h-4" />,
          badge: 'Premium',
        },
        {
          id: 'news-feeds',
          label: 'News Feeds',
          icon: <NewspaperIcon className="w-4 h-4" />,
        },
        {
          id: 'academic-research',
          label: 'Academic Research',
          icon: <AcademicCapIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      id: 'research-tools',
      label: 'Research Tools',
      icon: <MagnifyingGlassIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'search',
          label: 'Advanced Search',
          icon: <MagnifyingGlassIcon className="w-4 h-4" />,
        },
        {
          id: 'reports',
          label: 'Report Builder',
          icon: <DocumentTextIcon className="w-4 h-4" />,
        },
        {
          id: 'visualization',
          label: 'Data Visualization',
          icon: <ChartBarIcon className="w-4 h-4" />,
        },
      ],
    },
    {
      id: 'knowledge-base',
      label: 'Knowledge Base',
      icon: <BookOpenIcon className="w-5 h-5" />,
      subItems: [
        {
          id: 'methodologies',
          label: 'Research Methods',
          icon: <AcademicCapIcon className="w-4 h-4" />,
        },
        {
          id: 'case-studies',
          label: 'Case Studies',
          icon: <DocumentTextIcon className="w-4 h-4" />,
        },
        {
          id: 'global-insights',
          label: 'Global Insights',
          icon: <GlobeAltIcon className="w-4 h-4" />,
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
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
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
