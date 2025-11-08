/** @format */

import React from "react";
import BusinessInfo from "@/components/ProfileComponents/BusinessInfo";
import BankInfo from "@/components/ProfileComponents/BankInfo";
import Notifications from "@/components/ProfileComponents/Notifications";

const ProfileSettingPage = () => {
  return (
    <div className="w-full">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Profile & Settings
          </h1>
          <p className="text-sm text-gray-600">
            Manage your profile and settings
          </p>
        </div>

        {/* Components */}
        <div className="space-y-6">
          <BusinessInfo />
          <BankInfo />
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingPage;
