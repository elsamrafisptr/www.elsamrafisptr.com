"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  milestones: string[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  milestones,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description || milestones) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link href={href || "#"} className="block cursor-pointer" onClick={handleClick}>
      <Card className="flex items-start dark:bg-transparent">
        <div className="flex-none">
          <Avatar className="size-12 mt-5 bg-muted-background dark:bg-foreground rounded-none">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge variant="secondary" className="align-middle text-xs" key={index}>
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90 opacity-100 translate-x-1 group-hover:rotate-0" : "rotate-0",
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{period}</div>
            </div>
            {subtitle && <div className="font-sans text-xs max-w-40">{subtitle}</div>}
          </CardHeader>
          {(description || milestones) && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.15, 1, 0.15, 1],
              }}
              className=""
            >
              <h1 className="text-xs sm:text-sm px-6">{description}</h1>
              {milestones && (
                <span>
                  <h2 className={cn("text-xs sm:text-sm font-semibold px-6 pb-0.5", description && "pt-3")}>
                    Milestone
                  </h2>
                  <ul className="flex flex-col px-10 gap-0.5">
                    {milestones.map((item, index) => {
                      return (
                        <li key={index} className="list-disc text-xs sm:text-sm text-gray-700">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </span>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
