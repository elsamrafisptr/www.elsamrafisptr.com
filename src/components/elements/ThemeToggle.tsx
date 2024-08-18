"use client";

import { useTheme } from "next-themes";
import { Icons } from "./Icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="px-2 duration-150 transition-colors dark:hover:fill-black"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Icons.moon className="size-4 fill-black dark:fill-white hidden dark:block dark:hover:fill-black" />
      ) : (
        <Icons.sun className="size-4 fill-black dark:fill-white dark:hidden " />
      )}
    </button>
  );
}
