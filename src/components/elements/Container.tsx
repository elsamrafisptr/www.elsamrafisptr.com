import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <section className={cn("bg-white dark:bg-[#060606] p-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.05)]", className)}>
      {children}
    </section>
  );
};

export default Container;
