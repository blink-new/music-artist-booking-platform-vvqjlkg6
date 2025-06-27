import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';

export const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-pink-50 via-rose-100 to-white">
      <AdminSidebar />
      <main className="flex-1 min-h-screen p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
