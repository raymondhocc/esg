import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ESGReport } from '../types/esg';

interface ESGPerformanceProps {
  report: ESGReport;
}

export const ESGPerformance: React.FC<ESGPerformanceProps> = ({ report }) => {
  const environmentalData = [
    { name: 'Energy Efficiency', value: report.environmental.energyEfficiencyRating },
    { name: 'Carbon Footprint', value: report.environmental.carbonFootprint },
    { name: 'Water Usage', value: report.environmental.waterUsage },
    { name: 'Waste Management', value: report.environmental.wasteManagement },
  ];

  const socialData = [
    { name: 'Tenant Satisfaction', value: report.social.tenantSatisfaction },
    { name: 'Accessibility', value: report.social.accessibilityScore },
    { name: 'Community Engagement', value: report.social.communityEngagement },
    { name: 'Workforce Welfare', value: report.social.workforceWelfare },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Environmental Performance</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={environmentalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#34D399" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Social Impact</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={socialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#60A5FA" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">Governance Assessment</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Ownership Structure</dt>
              <dd className="mt-1 text-sm text-gray-900">{report.governance.ownershipStructure}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Regulatory Compliance</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {report.governance.regulatoryCompliance ? 'Compliant' : 'Non-compliant'}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Risk Management Score</dt>
              <dd className="mt-1 text-sm text-gray-900">{report.governance.riskManagementScore}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Stakeholder Engagement</dt>
              <dd className="mt-1 text-sm text-gray-900">{report.governance.stakeholderEngagement}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
