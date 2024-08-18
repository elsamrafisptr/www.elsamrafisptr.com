"use client";

import { ReactNode, useState } from "react";
import SideBar from "../elements/SideBar";
import MobileBar from "../elements/MobileBar";
import useIsMobile from "@/hooks/useIsMobile";
import { useSidebarStore } from "@/stores/sidebarStore";
import { cn } from "@/lib/utils";
interface LayoutsProps {
  children: ReactNode;
}
const Layouts = ({ children }: LayoutsProps) => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const isMobile = useIsMobile();
  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-5 justify-center overflow-x-hidden bg-[#FAFAFA] dark:bg-[#1E1E1E]"
      suppressHydrationWarning
    >
      {isMobile ? <MobileBar /> : <SideBar />}
      <main
        className={cn(
          "no-scrollbar w-full scroll-smooth transition-all duration-300 lg:min-h-screen bg-[#FAFAFA] dark:bg-[#1E1E1E] px-2 md:px-0 pt-2 pb-24 md:py-6",
          isOpen ? "lg:max-w-[736px]" : "lg:max-w-[864px]",
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layouts;
