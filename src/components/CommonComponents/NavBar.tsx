/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import { AiOutlineHome } from "react-icons/ai";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { GiSelfLove } from "react-icons/gi";
import { PiReceiptThin, PiUserCircleGear } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className=" sticky top-0 z-50">
      <div className="max-w-[2000px] bg-background rounded-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <h1 className="hidden lg:block text-2xl font-semibold text-foreground">
              Gavellia
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { name: "Overview", icon: AiOutlineHome, href: "/" },
              { name: "My Bids", icon: HiOutlineHandRaised, href: "/my-bids" },
              { name: "Watchlist", icon: GiSelfLove, href: "/watch-list" },
              { name: "Purchases", icon: PiReceiptThin, href: "/purchases" },
              { name: "Messages", icon: TiMessages, href: "/messages" },
              {
                name: "Profile & Settings",
                icon: PiUserCircleGear,
                href: "/profile-settings",
              },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm flex items-center gap-0.5 px-1.5 py-1 rounded-xs ${
                    isActive
                      ? "bg-gray-100 text-[#6C63FF]"
                      : "text-black hover:bg-gray-50 hover:text-[#6C63FF]"
                  }`}
                >
                  <item.icon className="w-3 h-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 border-0 font-medium"
            >
              £8,660
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-sm font-medium text-foreground">
                  Alex Morgan
                </span>
                <span className="text-xs text-muted-foreground">
                  £42,000.00
                </span>
              </div>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/diverse-user-avatars.png" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
