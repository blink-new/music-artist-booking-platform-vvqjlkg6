import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-rose">
      <header className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-pink-600 bg-white/90 px-4 py-2 rounded-full backdrop-blur-sm">
                Harmony Live
              </h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <Navigation />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Harmony Live</h3>
            <p className="text-gray-400 mb-4">
              Professional music entertainment for every occasion
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Harmony Live</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};