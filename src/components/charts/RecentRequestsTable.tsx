import { recentRequestsData } from '../../store/data';
import { getStatusColor } from '../../utils/helpers';
import type { FC } from 'react';
import { Maximize2 } from 'lucide-react';

interface RecentRequestsTableProps {
  className?: string;
}

const RecentRequestsTable: FC<RecentRequestsTableProps> = ({ className = '' }) => {
  return (
    <div className={`h-[400px] ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Recent Card Requests</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <Maximize2 size={16} />
        </button>
      </div>
      <div className="h-[calc(100%-2rem)] pb-6 overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
              <th className="pb-3 font-medium">Branch</th>
              <th className="pb-3 font-medium">Card Type</th>
              <th className="pb-3 font-medium">Quantity</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {recentRequestsData.map((req, idx) => (
              <tr key={idx} className="border-b border-gray-50 last:border-0">
                <td className="py-3 text-gray-600">{req.branch}</td>
                <td className="py-3 text-gray-600">{req.type}</td>
                <td className="py-3 text-gray-600">{req.quantity}</td>
                <td className="py-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(req.status)}`}>
                    {req.status}
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-xs">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentRequestsTable;
