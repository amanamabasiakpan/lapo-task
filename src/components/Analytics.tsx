// File: src/components/Analytics.tsx
import { statCardsData } from '../store/data';
import { getIconComponent } from '../utils/helpers';
import MonthlyIssuanceChart from "./charts/MonthlyIssuanceChart";
import WeeklyIncomeChart from "./charts/WeeklyIncomeChart";
import CardStatusPie from "./charts/CardStatusPie";
import RecentRequestsTable from "./charts/RecentRequestsTable";
import type { FC } from 'react';

interface AnalyticsProps {
  className?: string;
}

const Analytics: FC<AnalyticsProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCardsData.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
          >
            <div className="space-y-2">
              {getIconComponent(card.icon, 20, `text-${card.color}-600`)}
              <div className="text-sm text-gray-500">{card.title}</div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="text-2xl font-semibold text-gray-800">{card.value}</div>
              <div className="flex items-center gap-2">
                {card.change && (
                  <>
                    <span className="bg-green-50 text-green-600 text-xs px-2 py-0.5 rounded-full font-medium">
                      {card.change}
                    </span>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{card.changeText}</span>
                  </>
                )}
                {!card.change && (
                  <span className="text-xs text-orange-500 font-medium">
                    {card.changeText}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <MonthlyIssuanceChart />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <RecentRequestsTable />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <WeeklyIncomeChart />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <CardStatusPie />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
