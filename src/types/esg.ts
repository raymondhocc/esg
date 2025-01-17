export interface Property {
  id: string;
  name: string;
  location: string;
  type: string;
  size: number;
  age: number;
  environmentalFeatures: string[];
  socialAmenities: string[];
  managementStructure: string;
}

export interface EnvironmentalMetrics {
  energyEfficiencyRating: number;
  carbonFootprint: number;
  waterUsage: number;
  wasteManagement: number;
  greenCertifications: string[];
}

export interface SocialMetrics {
  tenantSatisfaction: number;
  accessibilityScore: number;
  communityEngagement: number;
  workforceWelfare: number;
}

export interface GovernanceMetrics {
  ownershipStructure: string;
  regulatoryCompliance: boolean;
  riskManagementScore: number;
  stakeholderEngagement: number;
}

export interface ESGReport {
  property: Property;
  environmental: EnvironmentalMetrics;
  social: SocialMetrics;
  governance: GovernanceMetrics;
  benchmarks: {
    industryAverage: number;
    competitorScore: number;
    internationalStandard: number;
  };
}
