/** @format */

"use client";

import React, { useState } from "react";
import { Trophy, Smartphone, TrendingUp } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Notifications = () => {
  const [emailWhenWon, setEmailWhenWon] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-1">
          NOTIFICATIONS SETTINGS
        </h2>
        <p className="text-xs text-gray-500">
          Choose how you want to be notified about your business activities.
        </p>
      </div>

      {/* Notification Options */}
      <div className="space-y-4">
        {/* Email when item won */}
        <div className="flex items-start justify-between py-3 border-b">
          <div className="flex items-start gap-3 flex-1">
            <Trophy className="w-5 h-5 text-gray-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Email when item won
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Get notified via email when one of item you win
              </p>
            </div>
          </div>
          <Switch
            checked={emailWhenWon}
            onCheckedChange={setEmailWhenWon}
            className="shrink-0"
          />
        </div>

        {/* Push notifications for new items */}
        <div className="flex items-start justify-between py-3 border-b">
          <div className="flex items-start gap-3 flex-1">
            <Smartphone className="w-5 h-5 text-gray-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Push notifications for new items
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Receive instant push notifications when new items get live
              </p>
            </div>
          </div>
          <Switch
            checked={pushNotifications}
            onCheckedChange={setPushNotifications}
            className="shrink-0"
          />
        </div>

        {/* Weekly purchase summary */}
        <div className="flex items-start justify-between py-3">
          <div className="flex items-start gap-3 flex-1">
            <TrendingUp className="w-5 h-5 text-gray-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Weekly purchase summary
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Get notified via email when you win an auction item
              </p>
            </div>
          </div>
          <Switch
            checked={weeklySummary}
            onCheckedChange={setWeeklySummary}
            className="shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
