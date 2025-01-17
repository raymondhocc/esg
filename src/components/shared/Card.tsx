import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-md overflow-hidden',
        'transition duration-300 ease-in-out hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
};
