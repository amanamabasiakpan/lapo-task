import type { FC } from 'react';
import { Bell, Search, LayoutDashboard, Calendar } from 'lucide-react';

interface HeaderProps {
  className?: string;
  userName?: string;
  lastLogin?: string;
}

const Header: FC<HeaderProps> = ({ 
  className = '', 
  userName = 'Nazeer',
  lastLogin = '26/11/2024 14:39:58'
}) => {
  const today = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className={`w-full space-y-6 ${className}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          <LayoutDashboard size={18} />
          <span className="text-sm font-medium">Dashboard</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none text-sm w-48 focus:outline-none text-gray-600 placeholder-gray-400"
            />
          </div>
          <button className="relative p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600">
            <span className="text-sm font-medium">{userName[0]}</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-gray-900">
            Hi {userName}, what would you like to do today?
          </h1>
          <p className="text-sm text-gray-500">
            Last login: {lastLogin}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
          <Calendar size={16} className="text-gray-500" />
          <span className="text-sm text-gray-600">Today</span>
          <span className="text-sm font-medium text-gray-900">{today}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
