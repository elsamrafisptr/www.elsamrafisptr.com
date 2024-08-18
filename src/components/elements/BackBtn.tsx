"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  url?: string;
};

export default function BackButton({ url }: BackButtonProps) {
  const router = useRouter();

  const handleOnClick = () => {
    if (url) {
      window.location.href = url;
    } else {
      router.back();
    }
  };

  const className =
    "flex items-center text-sm gap-4 rounded w-fit px-6 py-2.5 text-blue-600 bg-white border border-blue-600 hover:bg-blue-700 hover:text-white md:fill-white dark:bg-blue-400 dark:hover:bg-blue-300 cursor-pointer";

  const BackButtonChildComponent = () => {
    return (
      <>
        <span>Previous Page</span>
      </>
    );
  };

  return (
    <div className="w-fit">
      {url ? (
        <Link data-testid="back-button-url" href={url} passHref>
          <div className={className}>
            <BackButtonChildComponent />
          </div>
        </Link>
      ) : (
        <div data-testid="back-button" className={className} onClick={handleOnClick}>
          <BackButtonChildComponent />
        </div>
      )}
    </div>
  );
}
