import React from 'react';
import { Property } from '../types/esg';

interface PortfolioOverviewProps {
  properties: Property[];
}

export const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({ properties }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Portfolio Overview</h3>
      </div>
      <div className="border-t border-gray-200">
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-lg">{property.name}</h4>
              <dl className="mt-2 text-sm text-gray-600">
                <div className="mt-1">
                  <dt className="font-medium">Location</dt>
                  <dd>{property.location}</dd>
                </div>
                <div className="mt-1">
                  <dt className="font-medium">Type</dt>
                  <dd>{property.type}</dd>
                </div>
                <div className="mt-1">
                  <dt className="font-medium">Size</dt>
                  <dd>{property.size} sq ft</dd>
                </div>
                <div className="mt-1">
                  <dt className="font-medium">Age</dt>
                  <dd>{property.age} years</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
