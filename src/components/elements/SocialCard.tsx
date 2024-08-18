import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface SocialCardProps {
  title: string;
  desc: string;
  href: string;
  className?: {
    classContainer: string;
    classText: string;
    classBtn: string;
  };
  socialName: string;
  socialImage: {
    src: string;
    alt: string;
  };
  icon: ReactNode;
}

const SocialCard = ({ title, desc, href, className, socialName, socialImage, icon }: SocialCardProps) => {
  return (
    <div className={cn("p-6 border rounded-lg relative flex flex-col gap-6", className?.classContainer)}>
      <div className={cn("flex flex-col gap-1", className?.classText)}>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-sm max-w-56">{desc}</p>
      </div>
      <Link
        href={href}
        className={cn(" text-white rounded px-4 py-2 w-fit flex items-center gap-2", className?.classBtn)}
      >
        <span className="font-medium">Go to {socialName}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" className="fill-white">
          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
        </svg>
      </Link>

      {/* <Image
        src={socialImage.src}
        alt={socialImage.alt}
        width={1024}
        height={1024}
        className="absolute w-16 rounded-full aspect-square right-6 bottom-6"
      /> */}
      <div
        className={cn(
          "absolute w-16 rounded-full flex justify-center items-center aspect-square right-6 bottom-6",
          className?.classBtn,
        )}
      >
        {icon}
      </div>
    </div>
  );
};

export default SocialCard;
