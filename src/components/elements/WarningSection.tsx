import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
import BackButton from "./BackBtn";

interface WarningSectionProps {
  title: string;
  desc?: string;
  icon?: ReactNode;
}
const WarningSection = ({ title, desc, icon }: WarningSectionProps) => {
  return (
    <div className="flex items-center px-6 py-12">
      <div className="flex flex-col items-center text-center">
        <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">{title}</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-sm">
          {"The page you are looking for doesn't exist. Here are some helpful links:"}
        </p>

        <span className="flex items-center mt-4 gap-3">
          <Link
            href={"/"}
            className={cn(
              "flex items-center text-sm h-[42px] gap-4 rounded w-fit px-6 py-2.5 bg-blue-600 text-white hover:bg-blue-700 md:fill-white dark:bg-blue-400 dark:hover:bg-blue-300",
            )}
          >
            Take me home
          </Link>
          <BackButton />
        </span>
      </div>
    </div>
  );
};

export default WarningSection;
