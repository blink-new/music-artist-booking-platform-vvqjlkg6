import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Music, Video, Folder, Mail } from 'lucide-react';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/services', label: 'Services', icon: Music },
  { to: '/admin/portfolio', label: 'Portfolio', icon: Video },
  { to: '/admin/releases', label: 'Releases', icon: Folder },
  { to: '/admin/contact', label: 'Contact', icon: Mail },
];

export const AdminSidebar: React.FC = () => (
  <aside className="h-full w-64 bg-white/70 backdrop-blur-lg border-r border-pink-100 shadow-lg flex flex-col py-8 px-4">
    <div className="mb-10 text-center">
      <span className="text-2xl font-bold text-pink-600 font-display tracking-tight">Admin</span>
    </div>
    <nav className="flex-1 space-y-2">
      {navItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/admin'}
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-gray-700 hover:bg-pink-50 hover:text-pink-600 ${
              isActive ? 'bg-pink-100 text-pink-700 font-semibold' : ''
            }`
          }
        >
          <Icon className="h-5 w-5 mr-3" />
          {label}
        </NavLink>
      ))}
    </nav>
  </aside>
);
