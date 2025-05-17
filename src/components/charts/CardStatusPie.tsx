import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { cardStatusData } from '../../store/data';
import type { FC } from 'react';
import { Maximize2 } from 'lucide-react';

interface CardStatusPieProps {
  className?: string;
}

const COLORS = {
  Active: '#0ea5e9',    // Sky blue
  Expired: '#f59e0b',   // Amber
  Inactive: '#64748b',  // Slate
  Blocked: '#8b5cf6',   // Violet
  Lost: '#ef4444'       // Red
};

const CardStatusPie: FC<CardStatusPieProps> = ({ className = '' }) => {
  const totalCards = cardStatusData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={`h-[400px] ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Card Status Distribution</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <Maximize2 size={16} />
        </button>
      </div>
      <div className="h-[calc(100%-2rem)] pb-6 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 20, right: 0, bottom: 30, left: 0 }}>
            <Pie
              data={cardStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              innerRadius={70}
              outerRadius={90}
              paddingAngle={2}
            >
              {cardStatusData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[entry.name as keyof typeof COLORS]} 
                  strokeWidth={0}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                fontSize: '12px'
              }}
              formatter={(value: number) => [`${value.toLocaleString()}`, 'Cards']}
            />
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                bottom: -25,
                fontSize: '12px',
                color: '#64748b'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-sm text-gray-500">Total Cards</div>
          <div className="text-xl font-semibold text-gray-900">{totalCards.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default CardStatusPie;
