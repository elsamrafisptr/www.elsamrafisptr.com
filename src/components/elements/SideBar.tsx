"use client";

import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { NAVIGATIONDATA } from "@/constants/contents/components/navbar";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/stores/sidebarStore";
import { VerifiedIcon } from "lucide-react";
import { Icons } from "./Icons";
import { useSession } from "next-auth/react";

const SidebarLink = ({ href, label, icon: Icon, isActive, isOpen }: any) => {
  return isOpen ? (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 h-12 hover:bg-gray-100 rounded w-full px-4 dark:hover:bg-gray-500",
        isActive && "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-300",
      )}
    >
      <Icon className={cn("size-5 flex-shrink-0 dark:fill-white", isActive && "fill-white")} />
      <span className="capitalize">{label}</span>
    </Link>
  ) : (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            }),
            "size-12 dark:hover:bg-gray-600",
            isActive && "bg-blue-600 fill-white hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-300",
          )}
        >
          <Icon className="size-4 dark:fill-white" />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const SideBar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleSidebar = useSidebarStore((state) => state.handleShowSidebar); // Avoid inline function in `onClick`
  const pathname = usePathname();
  const { data: session } = useSession();

  if (pathname === "/auth/login" || pathname === "/auth/register") return null;

  return (
    <div className="fixed top-0 left-0 h-screen border-r border-r-gray-300">
      <div
        className={cn(
          "transition-all duration-300 bg-white dark:bg-[#060606] shadow-[0_3px_10px_rgb(0,0,0,0.05)] h-full",
          isOpen ? "w-64" : "w-20",
        )}
      >
        <div className={cn("px-2 relative flex items-center flex-col gap-3", isOpen ? "py-2" : "py-6")}>
          <button
            className={cn(
              "w-[38px] h-[38px] bg-white border border-gray-200 dark:border-gray-800 absolute -right-[18px] rounded-full flex justify-center items-center dark:bg-[#060606]",
              isOpen ? "top-[224px]" : "top-[126px]",
            )}
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
              className={cn("dark:fill-white", isOpen && "rotate-180 duration-300 transition-all ")}
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </button>

          {/* Profile Section */}
          {isOpen ? (
            <div className="flex flex-col gap-3">
              <div className="h-28 bg-gray-600 rounded-lg relative">
                <Image
                  src="/bg-banner.png"
                  alt="Banner Image"
                  height={1024}
                  width={1024}
                  className="w-full object-cover h-28 rounded-lg"
                />
                <div className="aspect-square w-20 h-20 rounded-full border-2 border-white absolute -bottom-9 left-1/2 -translate-x-1/2">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    height={1024}
                    width={1024}
                    className="aspect-square object-cover rounded-full w-full"
                  />
                </div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <span className="flex items-center gap-1">
                  <h1 className="font-bold text-lg text-center">Elsam Rafi Saputra</h1>
                  <VerifiedIcon className="text-white fill-blue-500" />
                </span>
                <p className="text-center font-light">@elsamm___</p>
              </div>
              <Separator className="mt-4" />
            </div>
          ) : (
            <>
              <div className="aspect-square w-12 rounded-full bg-gray-300">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  height={1024}
                  width={1024}
                  className="aspect-square object-cover rounded-full w-full"
                />
              </div>
              <div className="aspect-square w-12 flex justify-center rounded-lg hover:bg-gray-100">
                <ThemeToggle />
              </div>
              <Separator />
            </>
          )}
        </div>

        {/* Navigation Links */}
        <nav className={cn("mt-4 flex flex-col gap-3 px-2 pb-6", !isOpen ? "items-center" : "items-start")}>
          {NAVIGATIONDATA.map((item, index) => (
            <SidebarLink
              key={index}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.href}
              isOpen={isOpen}
            />
          ))}

          {session && (
            <>
              {isOpen && (
                <>
                  <SidebarLink
                    href="/content-management"
                    label="Content Management"
                    icon={Icons.contact}
                    isActive={pathname === "/content-management"}
                    isOpen={isOpen}
                  />
                  <SidebarLink
                    href="/content-type-builder"
                    label="Content Type Builder"
                    icon={Icons.contact}
                    isActive={pathname === "/content-type-builder"}
                    isOpen={isOpen}
                  />
                </>
              )}
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
