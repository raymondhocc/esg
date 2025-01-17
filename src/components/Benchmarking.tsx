import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ESGReport } from '../types/esg';

interface BenchmarkingProps {
  report: ESGReport;
}

export const Benchmarking: React.FC<BenchmarkingProps> = ({ report }) => {
  const benchmarkData = [
    {
      category: 'Industry Average',
      score: report.benchmarks.industryAverage,
    },
    {
      category: 'Portfolio Score',
      score: (report.environmental.energyEfficiencyRating + 
              report.social.tenantSatisfaction + 
              report.governance.riskManagementScore) / 3,
    },
    {
      category: 'Competitor Score',
      score: report.benchmarks.competitorScore,
    },
    {
      category: 'International Standard',
      score: report.benchmarks.internationalStandard,
    },
  ];

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Performance Benchmarking</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={benchmarkData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
