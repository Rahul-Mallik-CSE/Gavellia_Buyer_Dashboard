/** @format */

"use client";

import React, { useState } from "react";
import { Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BusinessInfo = () => {
  const [businessName, setBusinessName] = useState("FitGear Store");
  const [vatNumber, setVatNumber] = useState("DFGG5660 56605 565");
  const [businessAddress, setBusinessAddress] = useState(
    "Street Name, NY, USA"
  );
  const [charCount, setCharCount] = useState(businessAddress.length);
  const maxChars = 200;

  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setBusinessAddress(value);
      setCharCount(value.length);
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              BUSINESS INFORMATION
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Update your business details and verification status.
            </p>
          </div>
        </div>
        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
          Verified
        </span>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Business Name and VAT Number Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Business Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Business Name
            </label>
            <div className="relative">
              <Input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="pr-10"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
              </div>
            </div>
          </div>

          {/* VAT Number */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              VAT Number
            </label>
            <Input
              value={vatNumber}
              onChange={(e) => setVatNumber(e.target.value)}
            />
          </div>
        </div>

        {/* Business Address */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Business address
          </label>
          <Textarea
            value={businessAddress}
            onChange={handleAddressChange}
            rows={3}
            className="resize-none"
          />
          <div className="flex justify-end mt-1">
            <span className="text-xs text-gray-400">
              {charCount}/{maxChars}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
