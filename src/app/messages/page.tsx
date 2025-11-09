/** @format */

import React from "react";
import MessageTable from "@/components/MessageComponents/MessageTable";

const MessagesPage = () => {
  // Sample message data
  const messages = [
    {
      id: 1,
      senderName: "Raira Natasya",
      subject: "Vintage Rolex Submariner 1970",
      preview:
        "Is this piece still available? I'm very interested and would like to know more details...",
      timestamp: "2 min ago",
      isUnread: true,
    },
    {
      id: 2,
      senderName: "Raira Natasya",
      subject: "Vintage Rolex Submariner 1970",
      preview:
        "Is this piece still available? I'm very interested and would like to know more details...",
      timestamp: "5 min ago",
      isUnread: true,
    },
    {
      id: 3,
      senderName: "Raira Natasya",
      subject: "Vintage Rolex Submariner 1970",
      preview:
        "Is this piece still available? I'm very interested and would like to know more details...",
      timestamp: "10 min ago",
      isUnread: true,
    },
    {
      id: 4,
      senderName: "Raira Natasya",
      subject: "Vintage Rolex Submariner 1970",
      preview:
        "Is this piece still available? I'm very interested and would like to know more details...",
      timestamp: "15 min ago",
      isUnread: true,
    },
    {
      id: 5,
      senderName: "Raira Natasya",
      subject: "Vintage Rolex Submariner 1970",
      preview:
        "Is this piece still available? I'm very interested and would like to know more details...",
      timestamp: "20 min ago",
      isUnread: true,
    },
    {
      id: 6,
      senderName: "Raira Natasya",
      subject: "Vintage Rolex Submariner 1970",
      preview:
        "Is this piece still available? I'm very interested and would like to know more details...",
      timestamp: "25 min ago",
      isUnread: false,
    },
    {
      id: 7,
      senderName: "Raira Natasya",
      subject: "Vintage Rolex Submariner 1970",
      preview:
        "Is this piece still available? I'm very interested and would like to know more details...",
      timestamp: "30 min ago",
      isUnread: false,
    },
    {
      id: 8,
      senderName: "John Smith",
      subject: "Antique Furniture Inquiry",
      preview: "Hello, I saw your listing and I'm interested in purchasing...",
      timestamp: "1 hour ago",
      isUnread: false,
    },
    {
      id: 9,
      senderName: "Sarah Johnson",
      subject: "Vintage Camera Collection",
      preview: "Do you have any more details about the camera condition?",
      timestamp: "2 hours ago",
      isUnread: false,
    },
    {
      id: 10,
      senderName: "Mike Brown",
      subject: "Classic Car Parts",
      preview: "Are these parts compatible with 1965 models?",
      timestamp: "3 hours ago",
      isUnread: false,
    },
    {
      id: 11,
      senderName: "Emma Wilson",
      subject: "Designer Handbag",
      preview: "Is this authentic? Can you provide certificate?",
      timestamp: "4 hours ago",
      isUnread: false,
    },
    {
      id: 12,
      senderName: "David Lee",
      subject: "Rare Book Collection",
      preview: "I'd like to make an offer on the entire collection...",
      timestamp: "5 hours ago",
      isUnread: false,
    },
    {
      id: 13,
      senderName: "Lisa Anderson",
      subject: "Vintage Jewelry",
      preview: "Can you tell me more about the provenance?",
      timestamp: "6 hours ago",
      isUnread: false,
    },
    {
      id: 14,
      senderName: "Tom Harris",
      subject: "Art Piece Inquiry",
      preview: "Is the painting signed by the artist?",
      timestamp: "7 hours ago",
      isUnread: false,
    },
    {
      id: 15,
      senderName: "Rachel Green",
      subject: "Antique Clock",
      preview: "Does the clock still work? What's the condition?",
      timestamp: "8 hours ago",
      isUnread: false,
    },
    {
      id: 16,
      senderName: "Chris Martin",
      subject: "Vintage Guitar",
      preview: "I'm interested in the guitar. Is it still available?",
      timestamp: "9 hours ago",
      isUnread: false,
    },
    {
      id: 17,
      senderName: "Anna Taylor",
      subject: "Collectible Coins",
      preview: "What's your best price for the coin set?",
      timestamp: "10 hours ago",
      isUnread: false,
    },
    {
      id: 18,
      senderName: "James Wilson",
      subject: "Vintage Watch",
      preview: "Has the watch been serviced recently?",
      timestamp: "11 hours ago",
      isUnread: false,
    },
    {
      id: 19,
      senderName: "Sophie Clark",
      subject: "Antique Mirror",
      preview: "Can you provide more photos of the mirror?",
      timestamp: "12 hours ago",
      isUnread: false,
    },
    {
      id: 20,
      senderName: "Robert King",
      subject: "Classic Records",
      preview: "Are these first pressing records?",
      timestamp: "13 hours ago",
      isUnread: false,
    },
    {
      id: 21,
      senderName: "Maria Garcia",
      subject: "Vintage Dress",
      preview: "What size is the vintage dress?",
      timestamp: "14 hours ago",
      isUnread: false,
    },
    {
      id: 22,
      senderName: "Daniel White",
      subject: "Antique Lamp",
      preview: "Does the lamp work with modern bulbs?",
      timestamp: "15 hours ago",
      isUnread: false,
    },
    {
      id: 23,
      senderName: "Jessica Brown",
      subject: "Vintage Typewriter",
      preview: "Is the typewriter in working condition?",
      timestamp: "16 hours ago",
      isUnread: false,
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Messages and Inquiries
          </h1>
          <p className="text-sm text-gray-600">
            Manage your buyer communications
          </p>
        </div>

        {/* Messages Table */}
        <MessageTable messages={messages} />
      </div>
    </div>
  );
};

export default MessagesPage;
