/** @format */

export interface ProductData {
  title: string;
  time: string;
  starting: number;
  bids: number;
  highestBid: number;
  img: string[];
  action: "timed" | "upcoming" | "live";
}
