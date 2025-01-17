import React from 'react';
import { ESGReport } from '../types/esg';

interface RecommendationsProps {
  report: ESGReport;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ report }) => {
  const getEnvironmentalRecommendations = () => {
    const recommendations = [];
    if (report.environmental.energyEfficiencyRating < 80) {
      recommendations.push('Implement energy efficiency upgrades');
    }
    if (report.environmental.waterUsage > 50) {
      recommendations.push('Install water conservation systems');
    }
    return recommendations;
  };

  const getSocialRecommendations = () => {
    const recommendations = [];
    if (report.social.tenantSatisfaction < 85) {
      recommendations.push('Enhance tenant engagement programs');
    }
    if (report.social.accessibilityScore < 90) {
      recommendations.push('Improve property accessibility features');
    }
    return recommendations;
  };

  const getGovernanceRecommendations = () => {
    const recommendations = [];
    if (!report.governance.regulatoryCompliance) {
      recommendations.push('Address regulatory compliance issues');
    }
    if (report.governance.riskManagementScore < 75) {
      recommendations.push('Strengthen risk management protocols');
    }
    return recommendations;
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Strategic Recommendations</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Environmental Improvements</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                {getEnvironmentalRecommendations().map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Social Initiatives</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                {getSocialRecommendations().map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Governance Enhancements</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="list-disc pl-5 space-y-2">
                {getGovernanceRecommendations().map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
