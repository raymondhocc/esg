import { DashboardLayout } from './components/layout/DashboardLayout';
import { PortfolioOverview } from './components/PortfolioOverview';
import { ESGPerformance } from './components/ESGPerformance';
import { Benchmarking } from './components/Benchmarking';
import { Recommendations } from './components/Recommendations';
import { ESGReport } from './types/esg';

const sampleData: ESGReport = {
  property: {
    id: '1',
    name: 'Green Office Tower',
    location: 'Downtown Business District',
    type: 'Commercial Office',
    size: 50000,
    age: 5,
    environmentalFeatures: ['Solar Panels', 'Green Roof'],
    socialAmenities: ['Fitness Center', 'Community Space'],
    managementStructure: 'Professional Property Management'
  },
  environmental: {
    energyEfficiencyRating: 85,
    carbonFootprint: 45,
    waterUsage: 65,
    wasteManagement: 78,
    greenCertifications: ['LEED Gold', 'ENERGY STAR']
  },
  social: {
    tenantSatisfaction: 88,
    accessibilityScore: 92,
    communityEngagement: 75,
    workforceWelfare: 85
  },
  governance: {
    ownershipStructure: 'REIT',
    regulatoryCompliance: true,
    riskManagementScore: 82,
    stakeholderEngagement: 78
  },
  benchmarks: {
    industryAverage: 75,
    competitorScore: 80,
    internationalStandard: 85
  }
};

function App() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PortfolioOverview properties={[sampleData.property]} />
        <ESGPerformance report={sampleData} />
        <Benchmarking report={sampleData} />
        <Recommendations report={sampleData} />
      </div>
    </DashboardLayout>
  );
}

export default App;
