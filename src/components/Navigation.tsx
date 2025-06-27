import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/releases', label: t('nav.releases') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            'text-sm font-medium transition-colors duration-200 hover:text-pink-600 px-3 py-2 rounded-full',
            location.pathname === item.href
              ? 'text-pink-600 bg-white/90 backdrop-blur-sm'
              : 'text-gray-700 hover:bg-white/50'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};