/** @format */

"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemsTable from "@/components/MyBidsComponents/ItemsTable";

const PurchasesPage = () => {
  // Sample data for different purchase statuses
  const allPurchases = [
    {
      id: 1,
      title: "VINTAGE LEATHER JACKET",
      lotNumber: "Lot #C41567",
      myBid: "£8,000",
      status: "winning" as const,
      timeAgo: "2 hr ago",
      purchaseStatus: "to-pay" as const,
    },
    {
      id: 2,
      title: "CLASSIC WRISTWATCH",
      lotNumber: "Lot #C41568",
      myBid: "£5,000",
      status: "winning" as const,
      timeAgo: "1 day ago",
      purchaseStatus: "to-pay" as const,
    },
    {
      id: 3,
      title: "ANTIQUE VASE",
      lotNumber: "Lot #C41569",
      myBid: "£3,500",
      status: "winning" as const,
      timeAgo: "2 days ago",
      purchaseStatus: "to-ship" as const,
    },
    {
      id: 4,
      title: "VINTAGE CAMERA",
      lotNumber: "Lot #C41570",
      myBid: "£2,800",
      status: "winning" as const,
      timeAgo: "3 days ago",
      purchaseStatus: "to-ship" as const,
    },
    {
      id: 5,
      title: "DESIGNER HANDBAG",
      lotNumber: "Lot #C41571",
      myBid: "£4,200",
      status: "winning" as const,
      timeAgo: "4 days ago",
      purchaseStatus: "in-transit" as const,
    },
    {
      id: 6,
      title: "RARE BOOK COLLECTION",
      lotNumber: "Lot #C41572",
      myBid: "£6,500",
      status: "winning" as const,
      timeAgo: "5 days ago",
      purchaseStatus: "in-transit" as const,
    },
    {
      id: 7,
      title: "VINTAGE VINYL RECORDS",
      lotNumber: "Lot #C41573",
      myBid: "£1,800",
      status: "winning" as const,
      timeAgo: "6 days ago",
      purchaseStatus: "completed" as const,
    },
    {
      id: 8,
      title: "ANTIQUE FURNITURE",
      lotNumber: "Lot #C41574",
      myBid: "£12,000",
      status: "winning" as const,
      timeAgo: "7 days ago",
      purchaseStatus: "completed" as const,
    },
  ];

  // Filter purchases by status
  const toPayItems = allPurchases.filter(
    (item) => item.purchaseStatus === "to-pay"
  );
  const toShipItems = allPurchases.filter(
    (item) => item.purchaseStatus === "to-ship"
  );
  const inTransitItems = allPurchases.filter(
    (item) => item.purchaseStatus === "in-transit"
  );
  const completedItems = allPurchases.filter(
    (item) => item.purchaseStatus === "completed"
  );

  return (
    <div className="w-full">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Purchases
          </h1>
          <p className="text-sm text-gray-600">
            Track your orders and manage your purchases history
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="to-pay" className="w-full">
          <TabsList className="mb-6 p-1 bg-gray-200">
            <TabsTrigger value="to-pay">
              TO PAY ({toPayItems.length})
            </TabsTrigger>
            <TabsTrigger value="to-ship">
              TO SHIP ({toShipItems.length})
            </TabsTrigger>
            <TabsTrigger value="in-transit">
              IN TRANSIT ({inTransitItems.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              COMPLETED ({completedItems.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="to-pay">
            <ItemsTable items={toPayItems} />
          </TabsContent>

          <TabsContent value="to-ship">
            <ItemsTable items={toShipItems} />
          </TabsContent>

          <TabsContent value="in-transit">
            <ItemsTable items={inTransitItems} />
          </TabsContent>

          <TabsContent value="completed">
            <ItemsTable items={completedItems} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PurchasesPage;
