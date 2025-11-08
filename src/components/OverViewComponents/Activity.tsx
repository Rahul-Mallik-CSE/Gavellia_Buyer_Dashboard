/** @format */

import { TrendingDown, Trophy, Package } from "lucide-react";

export default function Activity() {
  const activities = [
    {
      id: 1,
      type: "outbid",
      title: "You were outbid on Vintage Rolex",
      subtitle: "Current bid £2,100",
      time: "2 hr ago",
      icon: TrendingDown,
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      id: 2,
      type: "won",
      title: "You won Abstract Painting",
      subtitle: "Final bid £2,100",
      time: "2 hr ago",
      icon: Trophy,
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      id: 3,
      type: "interest",
      title: "New item matching your interests",
      subtitle: "Omega Seamaster",
      time: "2 hr ago",
      icon: Package,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <button className="text-xs font-medium text-blue-600 hover:text-blue-700 uppercase">
          VIEW ALL
        </button>
      </div>

      {/* Activity Items */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-lg ${activity.iconBg} flex items-center justify-center shrink-0`}
            >
              <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 mb-0.5">
                {activity.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{activity.subtitle}</span>
                <span>•</span>
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
