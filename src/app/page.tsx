/** @format */

import ProductGrid from "@/components/OverViewComponents/ProductGrid";
import StatsCard from "@/components/OverViewComponents/StatsCard";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="max-w-[2000px] mx-auto flex flex-col items-center justify-center gap-6">
        <StatsCard />

        <ProductGrid />
      </div>
    </div>
  );
}
