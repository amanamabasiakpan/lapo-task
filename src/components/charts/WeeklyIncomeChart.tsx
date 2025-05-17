import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { weeklyIncomeData } from '../../store/data';
import type { FC } from 'react';
import { Maximize2 } from 'lucide-react';

interface WeeklyIncomeChartProps {
  className?: string;
}

const WeeklyIncomeChart: FC<WeeklyIncomeChartProps> = ({ className = '' }) => {
  return (
    <div className={`h-[400px] ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">This Week's Income</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <Maximize2 size={16} />
        </button>
      </div>
      <div className="h-[calc(100%-2rem)] pb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyIncomeData} margin={{ top: 20, right: 10, left: -20, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={12} stroke="#64748b" />
            <YAxis axisLine={false} tickLine={false} fontSize={12} stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke="#0ea5e9" 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#0ea5e9" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyIncomeChart;
