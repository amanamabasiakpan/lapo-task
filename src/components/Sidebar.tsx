import type { FC } from 'react';
import { sidebarData } from '../store/data';
import { getIconComponent } from '../utils/helpers';
import { LogOut } from 'lucide-react';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col">
      {/* Logo */}
      <div className="p-6 flex-none">
        <img src="/lapo.png" alt="LAPO Logo" className="h-10 -ml-5" />
      </div>

      {/* Main Navigation - Scrollable */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="px-3 overflow-y-auto flex-1">
          {/* Dashboard - Active State */}
          <button className="w-full flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg mb-6">
            {getIconComponent('LayoutDashboard', 18, 'text-blue-600')}
            <span className="text-sm font-medium">Dashboard</span>
          </button>

          {/* Main Menu Section */}
          <div>
            <span className="px-3 text-xs font-medium text-gray-400 uppercase">Main Menu</span>
            <div className="mt-3 space-y-1">
              {[...sidebarData.menuItems, ...sidebarData.cardMenu, ...sidebarData.authMenu, ...sidebarData.settingsMenu].map((item, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg group"
                >
                  {getIconComponent(item.icon, 18, 'text-gray-400 group-hover:text-gray-600')}
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section - Always at bottom */}
        <div className="flex-none border-t border-gray-100">
          {/* Logout Button */}
          <button className="w-full flex items-center gap-3 px-6 py-4 text-gray-600 hover:bg-gray-50 group">
            <LogOut size={18} className="text-gray-400 group-hover:text-gray-600" />
            <span className="text-sm">Logout</span>
          </button>

          {/* Powered By Section */}
          <div className="px-6 py-4 flex flex-col items-start mt-5">
            <span className="text-xs font-medium text-gray-400">POWERED BY</span>
            <img src="/cardinfra.png" alt="Cardinfra Logo" className="h-9 mt-2" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;