import React from 'react';
import { BarChart, TrendingUp, Users, Eye } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}

function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold text-gray-100 mt-1">{value}</h3>
        </div>
        <div className="text-purple-400">{icon}</div>
      </div>
      {trend && (
        <div className="mt-2 flex items-center text-sm">
          <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
          <span className="text-green-400">{trend}</span>
        </div>
      )}
    </div>
  );
}

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-100">Analytics Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Posts"
          value="124"
          icon={<BarChart className="w-6 h-6" />}
          trend="+12% this month"
        />
        <StatCard
          title="Total Views"
          value="48.5K"
          icon={<Eye className="w-6 h-6" />}
          trend="+24% this month"
        />
        <StatCard
          title="Active Feeds"
          value="8"
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <StatCard
          title="Subscribers"
          value="1.2K"
          icon={<Users className="w-6 h-6" />}
          trend="+8% this month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add charts and detailed analytics here */}
      </div>
    </div>
  );
}