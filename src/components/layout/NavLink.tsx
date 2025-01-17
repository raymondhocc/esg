import React from 'react';
import { clsx } from 'clsx';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  onClick,
}) => {
  return (
    <a
      href={href}
      className={clsx(
        'text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'transition duration-150 ease-in-out',
        className
      )}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
