import React from 'react';

export const HeroImage: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920"
        />
        <source
          media="(min-width: 768px)"
          srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200"
        />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800"
          alt="Modern sustainable building with glass facade"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </picture>
    </div>
  );
};
