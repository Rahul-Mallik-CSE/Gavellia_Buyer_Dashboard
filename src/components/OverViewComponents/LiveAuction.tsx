/** @format */

import { Calendar } from "lucide-react";
import Image from "next/image";

export default function LiveAuction() {
  const upcomingAuctions = [
    {
      id: 1,
      title: "VINTAGE LEATHER JACKET",
      startTime: "Aug 28, 2025 at 9:00 PM (GMT+6)",
      image: "/bag.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "VINTAGE LEATHER JACKET",
      startTime: "Aug 28, 2025 at 9:00 PM (GMT+6)",
      image: "/bag.png", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Live Auction Starting Soon
        </h2>
        <div className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-red-500 uppercase">
            LIVE
          </span>
        </div>
      </div>

      {/* Auction Items */}
      <div className="space-y-4">
        {upcomingAuctions.map((auction) => (
          <div key={auction.id} className="flex items-start gap-4">
            {/* Image */}
            <div className="w-20 h-20 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                {/* Placeholder for jacket image */}
                <Image
                  src={auction.image}
                  alt={auction.title}
                  height={78}
                  width={78}
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="text-xs text-gray-500 mb-1">Upcoming</div>
              <h3 className="font-semibold text-sm text-gray-900 mb-2">
                {auction.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Calendar className="w-3.5 h-3.5" />
                <span>Starts on {auction.startTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
