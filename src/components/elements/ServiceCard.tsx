import { ReactNode } from "react";
import { Badge } from "../ui/badge";
import { Icons } from "./Icons";

interface ServiceCardProps {
  title: string;
  desc: string;
  tags: string[];
  icon?: ReactNode;
}

const ServiceCard = ({ title, desc, tags, icon }: ServiceCardProps) => {
  return (
    <article className="hover:animate-background rounded-xl bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-700 dark:from-sky-300 dark:via-blue-300 dark:to-blue-500 p-0.5 transition hover:bg-[length:400%_400%] hover:shadow-lg hover:[animation-duration:_4s]">
      <div className="rounded-[10px] flex-col flex gap-6 bg-white dark:bg-[#1A1A1A] p-4 sm:p-6">
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2">
            <Icons.globe className="size-5 text-black" />
            <h1 className="mt-0.5 text-lg font-bold text-gray-900 dark:text-white">{title}</h1>
          </span>
          <p className="line-clamp-3 text-gray-500 dark:text-gray-100 text-sm/relaxed">{desc}</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((item, index) => {
            return (
              <Badge
                key={index}
                className="rounded bg-blue-100/75 text-blue-800 font-semibold px-1.5 hover:bg-blue-100 dark:bg-[#363636] dark:text-gray-300 dark:hover:bg-[#363636]"
              >
                {item}
              </Badge>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
