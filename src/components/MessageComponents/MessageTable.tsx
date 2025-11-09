/** @format */

"use client";

import React, { useState } from "react";
import { Search, MoreVertical, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  senderName: string;
  senderAvatar?: string;
  subject: string;
  preview: string;
  timestamp: string;
  isUnread: boolean;
}

interface MessageTableProps {
  messages: Message[];
  itemsPerPage?: number;
}

const MessageTable = ({ messages, itemsPerPage = 7 }: MessageTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("most-recent");
  const [showUnreadFirst, setShowUnreadFirst] = useState(true);

  // Filter and sort messages
  let filteredMessages = messages.filter(
    (msg) =>
      msg.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort messages
  if (showUnreadFirst) {
    filteredMessages = filteredMessages.sort((a, b) =>
      a.isUnread === b.isUnread ? 0 : a.isUnread ? -1 : 1
    );
  }

  if (sortBy === "most-recent") {
    // Already sorted by most recent in sample data
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMessages = filteredMessages.slice(startIndex, endIndex);
  const unreadCount = messages.filter((msg) => msg.isUnread).length;
  const totalConversations = messages.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          {/* Left side - Filters */}
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={showUnreadFirst}
                onChange={(e) => setShowUnreadFirst(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span>Show unread first</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="most-recent">Most recent</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="unread">Unread</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-600">
              {totalConversations} conversations
            </span>
            <span className="text-red-500 font-medium">
              {unreadCount} unread
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-50"
          />
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-lg border">
        {currentMessages.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No messages found</div>
        ) : (
          <div className="divide-y">
            {currentMessages.map((message) => (
              <div
                key={message.id}
                className={`p-4 hover:bg-gray-50 transition-colors ${
                  message.isUnread ? "bg-blue-50/30" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <Avatar className="w-10 h-10 shrink-0">
                    <AvatarImage src={message.senderAvatar} />
                    <AvatarFallback className="bg-gray-200 text-gray-600">
                      {message.senderName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`text-sm ${
                            message.isUnread ? "font-semibold" : "font-medium"
                          } text-gray-900`}
                        >
                          {message.senderName}
                        </h3>
                        {message.isUnread && (
                          <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs"
                        >
                          <Send className="w-3 h-3 mr-1" />
                          REPLY
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Mark as read</DropdownMenuItem>
                            <DropdownMenuItem>Archive</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">
                      Re: {message.subject}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-1">
                      {message.preview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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

              {Array.from({ length: Math.min(totalPages, 8) }, (_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    onClick={() => handlePageChange(i + 1)}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

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
    </div>
  );
};

export default MessageTable;
