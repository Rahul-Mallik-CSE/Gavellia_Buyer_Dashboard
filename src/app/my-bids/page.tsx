/** @format */

"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ItemsCard from "@/components/MyBidsComponents/ItemsCard";

const MyBidsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample data - You can expand this array
  const activeBids = [
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
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(activeBids.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = activeBids.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <TabsTrigger value="active">ACTIVE (13)</TabsTrigger>
            <TabsTrigger value="won">WON (2)</TabsTrigger>
            <TabsTrigger value="lost">LOST (38)</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {/* Items Section */}
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="px-4 py-3 border-b">
                <h2 className="font-semibold text-gray-900">Items</h2>
              </div>
              <div className="divide-y">
                {currentItems.map((bid) => (
                  <ItemsCard
                    key={bid.id}
                    title={bid.title}
                    lotNumber={bid.lotNumber}
                    myBid={bid.myBid}
                    status={bid.status}
                    timeAgo={bid.timeAgo}
                  />
                ))}
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          currentPage > 1 && handlePageChange(currentPage - 1)
                        }
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>

                    {getPageNumbers().map((page, index) =>
                      page === "ellipsis" ? (
                        <PaginationItem key={`ellipsis-${index}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      ) : (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => handlePageChange(page as number)}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          currentPage < totalPages &&
                          handlePageChange(currentPage + 1)
                        }
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </TabsContent>

          <TabsContent value="won">
            <div className="bg-white rounded-lg border shadow-sm p-8 text-center">
              <p className="text-gray-500">No won bids yet</p>
            </div>
          </TabsContent>

          <TabsContent value="lost">
            <div className="bg-white rounded-lg border shadow-sm p-8 text-center">
              <p className="text-gray-500">No lost bids yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyBidsPage;
