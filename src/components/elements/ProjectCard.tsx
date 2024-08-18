import Image from "next/image";
import { ReactNode } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Icons } from "./Icons";

interface ProjectCardProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  dateRange: string;
  stacks: string[];
  navigation?: NavigationProps[];
  details: {
    shortDesc: string;
  };
}

interface NavigationProps {
  icon: ReactNode;
  label: string;
  href: string;
}

const ProjectCard = ({ title, image, dateRange, stacks, navigation, details }: ProjectCardProps) => {
  const slug = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <Link
      href={`/projects/${slug}`}
      className="overflow-hidden cursor-pointer transition duration-300 hover:shadow-lg rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.05)]"
    >
      <Image
        alt={image.alt}
        src={image.src}
        className="aspect-video w-full object-cover object-top rounded-t-lg shadow-[0_3px_10px_rgb(0,0,0,0.05)]"
        height={1024}
        width={1024}
      />

      <div className="bg-white p-4 sm:p-6 dark:bg-[#1A1A1A] rounded-b-lg shadow-[0_3px_10px_rgb(0,0,0,0.05)]">
        {/* <time className="block text-xs text-gray-500 dark:text-gray-300">{dateRange}</time> */}

        <h1 className="mt-0.5 text-2xl text-gray-900 dark:text-white font-bold">{title}</h1>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-100">{details.shortDesc}</p>

        <div className="mt-3 flex items-center gap-1 flex-wrap">
          {stacks.map((item, index) => {
            return (
              <Badge
                key={index}
                className="bg-gray-200 hover:bg-gray-200 text-black rounded dark:bg-[#363636] dark:text-gray-300 dark:hover:bg-[#363636]"
              >
                {item}
              </Badge>
            );
          })}
        </div>

        {/* <div className="mt-3">
          {navigation?.map((item, index) => {
            return (
              <Link href={item.href} key={index}>
                <Badge className="text-sm rounded py-1.5 px-3 flex gap-2 w-fit items-center">
                  <Icons.globe className="size-4" />
                  <span>{item.label}</span>
                </Badge>
              </Link>
            );
          })}
        </div> */}
      </div>
    </Link>
  );
};

export default ProjectCard;
