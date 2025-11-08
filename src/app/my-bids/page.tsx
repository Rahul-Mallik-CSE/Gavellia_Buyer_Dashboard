/** @format */

"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemsTable from "@/components/MyBidsComponents/ItemsTable";

const MyBidsPage = () => {
  // Sample data for different bid statuses
  const allBids = [
    {
      id: 1,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "2 hr ago",
    },
    {
      id: 2,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "outbid" as const,
      timeAgo: "2 hr ago",
    },
    {
      id: 3,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "2 hr ago",
    },
    {
      id: 4,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "2 hr ago",
    },
    {
      id: 5,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "2 hr ago",
    },
    {
      id: 6,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "2 hr ago",
    },
    {
      id: 7,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "outbid" as const,
      timeAgo: "3 hr ago",
    },
    {
      id: 8,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "3 hr ago",
    },
    {
      id: 9,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "4 hr ago",
    },
    {
      id: 10,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "outbid" as const,
      timeAgo: "4 hr ago",
    },
    {
      id: 11,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "5 hr ago",
    },
    {
      id: 12,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "5 hr ago",
    },
    {
      id: 13,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "outbid" as const,
      timeAgo: "6 hr ago",
      bidStatus: "active" as const,
    },
    {
      id: 14,
      title: "CLASSIC WRISTWATCH",
      lotNumber: "Lot #C41568",
      myBid: "£5,000",
      status: "winning" as const,
      timeAgo: "1 day ago",
      bidStatus: "won" as const,
    },
    {
      id: 15,
      title: "VINTAGE CAMERA",
      lotNumber: "Lot #C41569",
      myBid: "£3,500",
      status: "winning" as const,
      timeAgo: "2 days ago",
      bidStatus: "won" as const,
    },
  ];

  // Add more lost bids for demonstration
  const lostBids = Array.from({ length: 38 }, (_, i) => ({
    id: 100 + i,
    title: "VINTAGE ITEM",
    lotNumber: `Lot #C${41600 + i}`,
    myBid: "£2,000",
    status: "outbid" as const,
    timeAgo: `${i + 1} days ago`,
    bidStatus: "lost" as const,
  }));

  const allBidsData = [...allBids, ...lostBids];

  // Filter bids by status
  const activeBids = allBidsData.filter((bid) => bid.bidStatus === "active");
  const wonBids = allBidsData.filter((bid) => bid.bidStatus === "won");
  const lostBidsData = allBidsData.filter((bid) => bid.bidStatus === "lost");

  return (
    <div className="w-full">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bids</h1>
          <p className="text-sm text-gray-600">
            Track all your bidding activity
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="active" className="w-full ">
          <TabsList className="mb-6 p-1 bg-gray-200">
            <TabsTrigger value="active">
              ACTIVE ({activeBids.length})
            </TabsTrigger>
            <TabsTrigger value="won">WON ({wonBids.length})</TabsTrigger>
            <TabsTrigger value="lost">LOST ({lostBidsData.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <ItemsTable items={activeBids} />
          </TabsContent>

          <TabsContent value="won">
            <ItemsTable items={wonBids} />
          </TabsContent>

          <TabsContent value="lost">
            <ItemsTable items={lostBidsData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyBidsPage;
