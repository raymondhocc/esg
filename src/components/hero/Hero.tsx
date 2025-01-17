import React from 'react';
import { HeroImage } from './HeroImage';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] md:h-[70vh] lg:h-[80vh] mt-16">
      <HeroImage />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            ESG Analysis Dashboard
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-3xl mx-auto">
            Comprehensive environmental, social, and governance insights for your real estate portfolio
          </p>
        </div>
      </div>
    </section>
  );
};
