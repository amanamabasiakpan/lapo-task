import type { FC } from 'react';
import { ChevronRight } from 'lucide-react';
import { quickActionsData } from '../store/data';
import { getIconComponent } from '../utils/helpers';

interface QuickActionsProps {
  className?: string;
}

const QuickActions: FC<QuickActionsProps> = ({ className = '' }) => {
  return (
    <div className={`my-8 ${className}`}>
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-base font-semibold text-gray-800 mb-4">Your Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActionsData.map((action, idx) => (
            <button
              key={idx}
              className="flex items-center justify-between p-4 bg-blue-50/60 rounded-xl hover:bg-blue-100/70 transition-colors group text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  {getIconComponent(action.icon, 20, 'text-blue-600')}
                </div>
                <span className="text-sm font-medium text-gray-700">{action.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
      <h2 className="text-base font-semibold text-gray-800 mt-8 mb-2">Analytics</h2>
    </div>
  );
};

export default QuickActions;
