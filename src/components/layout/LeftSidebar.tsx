import React, { useState } from 'react';
import {
  ChartPieIcon,
  BuildingOfficeIcon,
  UsersIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { Chat } from '../chat/Chat';
import { ComplianceMenu } from './ComplianceMenu';
import { ResearchMenu } from './ResearchMenu';
import { PropertyMenu } from './PropertyMenu';

export const LeftSidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [showComplianceMenu, setShowComplianceMenu] = useState(false);
  const [showResearchMenu, setShowResearchMenu] = useState(false);
  const [showPropertyMenu, setShowPropertyMenu] = useState(false);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    if (section === 'compliance') {
      setShowComplianceMenu(!showComplianceMenu);
      setShowResearchMenu(false);
      setShowPropertyMenu(false);
    } else if (section === 'stakeholders') {
      setShowResearchMenu(!showResearchMenu);
      setShowComplianceMenu(false);
      setShowPropertyMenu(false);
    } else if (section === 'properties') {
      setShowPropertyMenu(!showPropertyMenu);
      setShowResearchMenu(false);
      setShowComplianceMenu(false);
    } else {
      setShowComplianceMenu(false);
      setShowResearchMenu(false);
      setShowPropertyMenu(false);
    }
  };

  return (
    <aside className="w-64 bg-white shadow-sm hidden md:block">
      <nav className="p-4 space-y-2">
        <h2 className="text-xs uppercase text-gray-500 font-semibold mb-4">Dashboard</h2>
        <a 
          href="#" 
          onClick={() => handleSectionClick('overview')}
          className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg ${
            activeSection === 'overview' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
          }`}
        >
          <ChartPieIcon className="w-5 h-5" />
          <span>Overview</span>
        </a>
        <div>
          <a 
            href="#" 
            onClick={() => handleSectionClick('properties')}
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg ${
              activeSection === 'properties' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
            }`}
          >
            <BuildingOfficeIcon className="w-5 h-5" />
            <span>Properties</span>
          </a>
          {showPropertyMenu && <PropertyMenu />}
        </div>
        <div>
          <a 
            href="#" 
            onClick={() => handleSectionClick('stakeholders')}
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg ${
              activeSection === 'stakeholders' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
            }`}
          >
            <UsersIcon className="w-5 h-5" />
            <span>Research</span>
          </a>
          {showResearchMenu && <ResearchMenu />}
        </div>
        <div>
          <a 
            href="#" 
            onClick={() => handleSectionClick('compliance')}
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg ${
              activeSection === 'compliance' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'
            }`}
          >
            <ShieldCheckIcon className="w-5 h-5" />
            <span>Compliance</span>
          </a>
          {showComplianceMenu && <ComplianceMenu />}
        </div>

        <div className="border-t border-gray-200 my-4 pt-4">
          <h2 className="text-xs uppercase text-gray-500 font-semibold mb-2">Support</h2>
          <Chat />
        </div>
      </nav>
    </aside>
  );
};
