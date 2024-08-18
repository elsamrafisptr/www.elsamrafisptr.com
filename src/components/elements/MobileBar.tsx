import { Dock, DockIcon } from "@/components/ui/dock";
import { ThemeToggle } from "@/components/elements/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NAVIGATIONDATA } from "@/constants/contents/components/navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // const [isSigned, setIsSigned] = useState<boolean>(false);
  // const handleClick = () => {
  //   setIsSigned(!isSigned);
  // };

  const pathname = usePathname();
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-5 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg bg-white dark:bg-black [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center bg-white dark:bg-[#252525] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {NAVIGATIONDATA.filter((e) => e.label !== "Dashboard").map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "size-12 dark:hover:bg-gray-600",
                  )}
                >
                  <item.icon
                    className={cn(
                      "size-4 fill-black dark:fill-white",
                      pathname === item.href && "fill-blue-600 dark:fill-blue-300",
                    )}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full py-2 bg-black dark:bg-gray-100" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ThemeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}

{
  /* {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        className={cn(
                                            buttonVariants({
                                                variant:
                                                    "ghost",
                                                size: "icon",
                                            }),
                                            "size-12",
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))} */
}

// import Link from "next/link";
// import React from "react";
// import { useWindowSize } from "usehooks-ts";
// import { ThemeToggle } from "./ThemeToggle";

// const MobileBar = () => {
//   return (
//     <div className="fixed bottom-0 flex justify-center w-full left-0 px-5 py-6">
//       <div
//         className={`h-16 border transition-all duration-300 bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.05)] p-2 grid grid-cols-5 gap-2`}
//       >
//         <div className=" h-full bg-blue-600 rounded text-white flex justify-center items-center">
//           Home
//         </div>
//         <div className=" h-full rounded flex justify-center items-center">
//           About
//         </div>
//         <div className=" h-full rounded flex justify-center items-center">
//           Dashboard
//         </div>
//         <div className=" h-full rounded flex justify-center items-center">
//           Projects
//         </div>
//         <div className=" h-full rounded flex justify-center items-center">
//           <ThemeToggle />
//         </div>
//       </div>
//     </div>
//   );
// };

// interface MobileBtnBarProps {
//   name: string;
//   href: string;
// }

// const MobileBtnBar = ({ name, href }: MobileBtnBarProps) => {
//   return <Link href={href}>{name}</Link>;
// };

// export default MobileBar;
