import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { monthlyIssuanceData } from '../../store/data';
import type { FC } from 'react';
import { Maximize2 } from 'lucide-react';

interface MonthlyIssuanceProps {
  className?: string;
}

const MonthlyIssuanceChart: FC<MonthlyIssuanceProps> = ({ className = '' }) => {
  return (
    <div className={`h-[400px] ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Monthly Issuance</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <Maximize2 size={16} />
        </button>
      </div>
      <div className="h-[calc(100%-2rem)] pb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyIssuanceData} margin={{ top: 20, right: 10, left: -20, bottom: 30 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#f1f5f9" 
            />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              fontSize={12} 
              stroke="#64748b" 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              fontSize={12} 
              stroke="#64748b"
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            />
            <Legend 
              iconType="circle"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                bottom: -25,
                fontSize: '12px',
                color: '#64748b'
              }}
            />
            <Bar 
              dataKey="Personalized" 
              stackId="a" 
              fill="#94a3b8" 
              radius={[4, 4, 0, 0]} 
              name="Personalized"
            />
            <Bar 
              dataKey="Instant" 
              stackId="a" 
              fill="#0ea5e9" 
              radius={[4, 4, 0, 0]} 
              name="Instant"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyIssuanceChart;