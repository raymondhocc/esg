import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from './NavLink';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#performance', label: 'ESG Performance' },
    { href: '#benchmarks', label: 'Benchmarks' },
    { href: '#recommendations', label: 'Recommendations' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-900">ESG Analytics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
