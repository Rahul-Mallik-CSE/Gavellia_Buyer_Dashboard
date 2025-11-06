/** @format */

import ProductGrid from "@/components/OverViewComponents/ProductGrid";
import StatsCard from "@/components/OverViewComponents/StatsCard";
import LiveAuction from "@/components/OverViewComponents/LiveAuction";
import Activity from "@/components/OverViewComponents/Activity";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="max-w-[2000px] mx-auto flex flex-col items-center justify-center gap-6">
        <StatsCard />

        <ProductGrid />

        {/* Live Auction and Recent Activity Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <LiveAuction />
          <Activity />
        </div>
      </div>
    </div>
  );
}
