/** @format */

import ProductCard from "./ProductCard";
const products = [
  {
    title: "Vintage Leather Jacket",
    time: "01d:05h:42sec",
    starting: 75,
    bids: 23,
    highestBid: 100,
    img: [
      "/bag.png",
      "/productImage/Jacket.png",
      "/productImage/Jacket.png",
      "/productImage/Jacket.png",
    ],
    action: "timed" as const,
  },
  {
    title: "Rare First Edition Book",
    time: "05d:12h:10sec",
    starting: 150,
    bids: 10,
    highestBid: 400,
    img: [
      "/bag.png",
      "/productImage/Book.png",
      "/productImage/Book.png",
      "/productImage/Book.png",
    ],
    action: "upcoming" as const,
  },
  {
    title: "Women's Luxury Boot",
    time: "00d:12h:10sec",
    starting: 1050,
    bids: 14,
    highestBid: 2400,
    img: [
      "/bag.png",
      "/productImage/Boot_women.png",
      "/productImage/Boot_women.png",
      "/productImage/Boot_women.png",
    ],
    action: "live" as const,
  },
  {
    title: "Vintage Leather Jacket",
    time: "01d:05h:42sec",
    starting: 75,
    bids: 23,
    highestBid: 100,
    img: [
      "/bag.png",
      "/productImage/Jacket.png",
      "/productImage/Jacket.png",
      "/productImage/Jacket.png",
    ],
    action: "timed" as const,
  },
];

export default function ProductGrid() {
  return (
    <section className="">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl lg:text-4xl font-semibold text-foreground">
          Inspired by your Bids
        </h2>
        <a
          href="#"
          className="text-primary hover:text-accent text-sm font-medium"
        >
          VIEW ALL
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} productData={product} />
        ))}
      </div>
    </section>
  );
}
