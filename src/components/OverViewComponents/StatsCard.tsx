/** @format */

import { Heart, Trophy, TrendingUp } from "lucide-react";
import { PiGavelLight } from "react-icons/pi";

export default function StatsCard() {
  const stats = [
    {
      icon: PiGavelLight,
      label: "Currently Bidding",
      value: "05 BIDS",
      color: "text-white",
    },
    {
      icon: Heart,
      label: "Saved",
      value: "12 ITEMS",
      color: "text-white",
    },
    {
      icon: Trophy,
      label: "Haven't Payments",
      value: "2 WON",
      color: "text-white",
    },
    {
      icon: TrendingUp,
      label: "Spent",
      value: "£890.00",
      subtext: "THIS MONTH",
      color: "text-white",
    },
  ];

  return (
    <div className="bg-[#6C63FF] rounded-2xl p-8 md:p-12 text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="flex flex-col gap-3">
              <Icon className="w-6 h-6 " />
              <div className="text-sm font-medium ">{stat.label}</div>

              <div className="flex  justify-between">
                <span className="text-4xl font-bold">{stat.value}</span>
                {stat.subtext && (
                  <span className="text-xs  font-semibold">{stat.subtext}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
