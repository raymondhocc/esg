import React, { useState, useRef, useEffect } from 'react';
import {
  HomeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  ChartPieIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  XMarkIcon,
  ArrowTrendingUpIcon,
  PresentationChartLineIcon,
  ArrowsPointingOutIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

interface DashboardItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  category: string;
  description?: string;
}

interface ReportItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  category: string;
  description?: string;
  publishDate?: string;
}

interface SettingsConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  component: React.ReactNode;
}

export const BottomMenu: React.FC = () => {
  const [showDashboards, setShowDashboards] = useState(false);
  const [showReports, setShowReports] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 300, y: window.innerHeight / 2 - 250 });
  const [size, setSize] = useState({ width: 600, height: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  // Ollama settings state
  const [ollamaConfig, setOllamaConfig] = useState({
    endpoint: 'http://localhost:11434',
    model: 'llama2',
    temperature: 0.7,
    maxTokens: 2000,
  });

  const [availableModels] = useState([
    { id: 'llama2', name: 'Llama 2', description: 'Meta\'s Llama 2 model' },
    { id: 'codellama', name: 'Code Llama', description: 'Specialized for code generation' },
    { id: 'mistral', name: 'Mistral', description: 'Mistral AI\'s model' },
    { id: 'neural-chat', name: 'Neural Chat', description: 'Optimized for conversation' },
  ]);

  const settings: SettingsConfig[] = [
    {
      id: 'ollama-setup',
      label: 'Ollama Setup',
      icon: <ServerIcon className="w-6 h-6" />,
      category: 'Configuration',
      description: 'Configure Ollama endpoint and basic settings',
      component: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Endpoint URL</label>
            <input
              type="text"
              value={ollamaConfig.endpoint}
              onChange={(e) => setOllamaConfig(prev => ({ ...prev, endpoint: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Temperature</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={ollamaConfig.temperature}
              onChange={(e) => setOllamaConfig(prev => ({ ...prev, temperature: parseFloat(e.target.value) }))}
              className="mt-1 block w-full"
            />
            <span className="text-sm text-gray-500">{ollamaConfig.temperature}</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Tokens</label>
            <input
              type="number"
              value={ollamaConfig.maxTokens}
              onChange={(e) => setOllamaConfig(prev => ({ ...prev, maxTokens: parseInt(e.target.value) }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      ),
    },
    {
      id: 'model-selection',
      label: 'Model Selection',
      icon: <CpuChipIcon className="w-6 h-6" />,
      category: 'Models',
      description: 'Choose and configure AI models',
      component: (
        <div className="space-y-4">
          {availableModels.map((model) => (
            <div
              key={model.id}
              className={`p-4 rounded-lg border ${
                ollamaConfig.model === model.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              } hover:border-blue-500 cursor-pointer`}
              onClick={() => setOllamaConfig(prev => ({ ...prev, model: model.id }))}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${
                  ollamaConfig.model === model.id ? 'bg-blue-500' : 'bg-gray-200'
                }`} />
                <div>
                  <h3 className="font-medium">{model.name}</h3>
                  <p className="text-sm text-gray-500">{model.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'advanced-params',
      label: 'Advanced Parameters',
      icon: <AdjustmentsHorizontalIcon className="w-6 h-6" />,
      category: 'Advanced',
      description: 'Fine-tune model parameters and behavior',
      component: (
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              Advanced parameters are currently in development. Check back soon for more options!
            </p>
          </div>
        </div>
      ),
    },
  ];

  const dashboards: DashboardItem[] = [
    {
      id: 'environmental',
      label: 'Environmental Performance',
      icon: <GlobeAltIcon className="w-6 h-6" />,
      category: 'Environmental',
      description: 'Carbon emissions, energy usage, and waste metrics'
    },
    {
      id: 'social-impact',
      label: 'Social Impact',
      icon: <UserGroupIcon className="w-6 h-6" />,
      category: 'Social',
      description: 'Community engagement and social responsibility'
    },
    {
      id: 'governance',
      label: 'Governance Overview',
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      category: 'Governance',
      description: 'Risk management and compliance tracking'
    },
    {
      id: 'portfolio',
      label: 'Portfolio Analytics',
      icon: <BuildingLibraryIcon className="w-6 h-6" />,
      category: 'Portfolio',
      description: 'Property portfolio performance and trends'
    },
    {
      id: 'benchmarking',
      label: 'ESG Benchmarking',
      icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
      category: 'Benchmarking',
      description: 'Industry comparisons and peer analysis'
    },
    {
      id: 'forecasting',
      label: 'ESG Forecasting',
      icon: <PresentationChartLineIcon className="w-6 h-6" />,
      category: 'Forecasting',
      description: 'Predictive analytics and future trends'
    },
  ];

  const reports: ReportItem[] = [
    {
      id: 'annual-sustainability',
      label: 'Annual Sustainability Report',
      icon: <DocumentTextIcon className="w-6 h-6" />,
      category: 'Sustainability',
      description: 'Comprehensive overview of ESG initiatives and performance',
      publishDate: '2023'
    },
    {
      id: 'carbon-disclosure',
      label: 'Carbon Disclosure Report',
      icon: <GlobeAltIcon className="w-6 h-6" />,
      category: 'Environmental',
      description: 'Detailed carbon emissions and reduction strategies',
      publishDate: '2023'
    },
    {
      id: 'social-impact',
      label: 'Social Impact Assessment',
      icon: <UserGroupIcon className="w-6 h-6" />,
      category: 'Social',
      description: 'Community engagement and social responsibility metrics',
      publishDate: '2023'
    },
    {
      id: 'governance-compliance',
      label: 'Governance & Compliance Report',
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      category: 'Governance',
      description: 'Corporate governance structure and compliance status',
      publishDate: '2023'
    },
    {
      id: 'tcfd-report',
      label: 'TCFD Climate Risk Report',
      icon: <ChartBarIcon className="w-6 h-6" />,
      category: 'Risk Management',
      description: 'Climate-related financial risk disclosures',
      publishDate: '2023'
    },
    {
      id: 'gri-report',
      label: 'GRI Sustainability Report',
      icon: <DocumentTextIcon className="w-6 h-6" />,
      category: 'Standards',
      description: 'Report following Global Reporting Initiative standards',
      publishDate: '2023'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - dragStart.x;
        const dy = e.clientY - dragStart.y;
        setPosition(prev => ({
          x: Math.max(0, Math.min(window.innerWidth - size.width, prev.x + dx)),
          y: Math.max(0, Math.min(window.innerHeight - size.height, prev.y + dy))
        }));
        setDragStart({ x: e.clientX, y: e.clientY });
      } else if (isResizing) {
        const dx = e.clientX - dragStart.x;
        const dy = e.clientY - dragStart.y;
        setSize(prev => ({
          width: Math.max(400, Math.min(window.innerWidth - position.x, prev.width + dx)),
          height: Math.max(300, Math.min(window.innerHeight - position.y, prev.height + dy))
        }));
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragStart, position, size]);

  const handleMouseDown = (e: React.MouseEvent, type: 'drag' | 'resize') => {
    e.preventDefault();
    if (type === 'drag') {
      setIsDragging(true);
    } else {
      setIsResizing(true);
    }
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {(showDashboards || showReports || showSettings) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div
            ref={menuRef}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              width: `${size.width}px`,
              height: `${size.height}px`,
            }}
            className="absolute bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div
              className="h-8 bg-gray-100 cursor-move flex justify-between items-center px-4"
              onMouseDown={(e) => handleMouseDown(e, 'drag')}
            >
              <h2 className="text-lg font-semibold">
                {showDashboards ? 'ESG Dashboards' : showReports ? 'ESG Reports' : 'Settings'}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setShowDashboards(false);
                    setShowReports(false);
                    setShowSettings(false);
                  }}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 2rem)' }}>
              {showSettings ? (
                <div className="space-y-6">
                  {settings.map((setting) => (
                    <div
                      key={setting.id}
                      className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="p-2 bg-blue-50 rounded-lg text-blue-600">
                          {setting.icon}
                        </span>
                        <div>
                          <h3 className="font-medium">{setting.label}</h3>
                          <p className="text-sm text-gray-500">{setting.description}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        {setting.component}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {showDashboards && dashboards.map((dashboard) => (
                    <button
                      key={dashboard.id}
                      className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-left"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="p-2 bg-blue-50 rounded-lg text-blue-600">
                          {dashboard.icon}
                        </span>
                        <span className="font-medium">{dashboard.label}</span>
                      </div>
                      <p className="text-sm text-gray-500">{dashboard.description}</p>
                      <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {dashboard.category}
                      </span>
                    </button>
                  ))}
                  {showReports && reports.map((report) => (
                    <button
                      key={report.id}
                      className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-left"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="p-2 bg-green-50 rounded-lg text-green-600">
                          {report.icon}
                        </span>
                        <span className="font-medium">{report.label}</span>
                      </div>
                      <p className="text-sm text-gray-500">{report.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="inline-block text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                          {report.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {report.publishDate}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div
              className="absolute bottom-0 right-0 w-6 h-6 cursor-se-resize"
              onMouseDown={(e) => handleMouseDown(e, 'resize')}
            >
              <ArrowsPointingOutIcon className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-around max-w-lg mx-auto">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <HomeIcon className="w-6 h-6" />
          </button>
          <button 
            className="p-2 text-gray-600 hover:text-gray-900"
            onClick={() => {
              setShowDashboards(true);
              setShowReports(false);
              setShowSettings(false);
            }}
          >
            <ChartPieIcon className="w-6 h-6" />
          </button>
          <button 
            className="p-2 text-gray-600 hover:text-gray-900"
            onClick={() => {
              setShowReports(true);
              setShowDashboards(false);
              setShowSettings(false);
            }}
          >
            <DocumentTextIcon className="w-6 h-6" />
          </button>
          <button 
            className="p-2 text-gray-600 hover:text-gray-900"
            onClick={() => {
              setShowSettings(true);
              setShowDashboards(false);
              setShowReports(false);
            }}
          >
            <CogIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};
