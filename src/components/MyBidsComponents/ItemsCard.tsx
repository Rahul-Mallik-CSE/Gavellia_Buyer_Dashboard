/** @format */

import React from "react";
import { Clock } from "lucide-react";
import Image from "next/image";

interface ItemsCardProps {
  title: string;
  lotNumber: string;
  myBid: string;
  status: "winning" | "outbid" | "not-highest";
  timeAgo: string;
}

const ItemsCard = ({
  title,
  lotNumber,
  myBid,
  status,
  timeAgo,
}: ItemsCardProps) => {
  const getStatusDisplay = () => {
    switch (status) {
      case "winning":
        return (
          <span className="text-sm font-medium text-green-600">Winning</span>
        );
      case "outbid":
        return <span className="text-sm font-medium text-red-600">Outbid</span>;
      case "not-highest":
        return (
          <span className="text-sm font-medium text-red-600">Not highest</span>
        );
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "winning":
        return "text-green-600";
      case "outbid":
      case "not-highest":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors border-b last:border-b-0">
      {/* Left side - Image and Info */}
      <div className="flex items-center gap-4 flex-1">
        {/* Product Image */}
        <div className="w-20 h-20 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            {/* Placeholder for jacket image */}
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-sm text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500">{lotNumber}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">My Bid</span>
            <span className="text-sm font-semibold text-gray-900">{myBid}</span>
            <span className={`text-xs font-medium ${getStatusColor()}`}>
              {status === "winning" && "Highest"}
              {status === "not-highest" && "Not highest"}
              {status === "outbid" && "Not highest"}
            </span>
          </div>
        </div>
      </div>

      {/* Right side - Time and Status */}
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Clock className="w-3.5 h-3.5" />
          <span>{timeAgo}</span>
        </div>
        {getStatusDisplay()}
      </div>
    </div>
  );
};

export default ItemsCard;
