"use client";

import { ReactNode, useState } from "react";
import SideBar from "../elements/SideBar";
import MobileBar from "../elements/MobileBar";
import useIsMobile from "@/hooks/useIsMobile";
import { useSidebarStore } from "@/stores/sidebarStore";
import { cn } from "@/lib/utils";
import AccountBar from "../elements/AccountBar";
import { SessionProvider } from "next-auth/react";

interface LayoutsProps {
  children: ReactNode;
}
const Layouts = ({ children }: LayoutsProps) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row lg:gap-5 overflow-x-hidden justify-center bg-white dark:bg-[#1E1E1E] transition-all duration-300",
      )}
      suppressHydrationWarning
    >
      <SessionProvider>
        {isMobile ? <MobileBar /> : <SideBar />}
        <main
          className={cn(
            "no-scrollbar  w-full scroll-smooth lg:max-w-[840px] transition-all duration-300 lg:min-h-screen bg-white dark:bg-[#1E1E1E] px-2 md:px-0 pt-2 pb-24 md:py-6",
          )}
        >
          {children}
        </main>
        {isMobile ? null : <AccountBar />}
      </SessionProvider>
    </div>
  );
};

export default Layouts;
