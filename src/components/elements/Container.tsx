import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <section className={cn("dark:bg-[#060606] p-6", className)}>{children}</section>;
};

export default Container;
