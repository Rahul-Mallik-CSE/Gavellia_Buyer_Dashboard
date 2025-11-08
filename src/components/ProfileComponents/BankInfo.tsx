/** @format */

"use client";

import React from "react";
import { Landmark, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const BankInfo = () => {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
          <Landmark className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            BAK PAYOUT DETAILS
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Manage your payout preferences & connected accounts.
          </p>
        </div>
      </div>

      {/* Bank Account Card */}
      <div className="border border-dashed rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Bank Icon */}
            <div className="w-10 h-10 bg-black rounded flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">BANK</span>
            </div>
            {/* Bank Details */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Barclays Bank UK
              </h3>
              <p className="text-xs text-gray-500">
                Account ending in ************26645
              </p>
            </div>
          </div>

          {/* Status and Action */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-green-600">
              Connected
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              DISCONNECT
            </Button>
          </div>
        </div>
      </div>

      {/* Add Another Payment Method */}
      <button className="w-full border-2 border-dashed border-gray-300 rounded-lg py-3 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors">
        <Plus className="w-4 h-4" />
        ADD ANOTHER PAYMENT METHOD
      </button>
    </div>
  );
};

export default BankInfo;
