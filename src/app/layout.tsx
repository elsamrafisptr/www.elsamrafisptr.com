import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layouts from "@/components/layouts/Layouts";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/elements/ThemeProvider";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.DOMAIN || ""),
  title: {
    default: DATA.name,
    template: `%s | Personal Website`,
  },
  description: DATA.description,
  keywords: "",
  creator: "",
  authors: {
    name: "",
    url: "",
  },
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    images: "",
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <Layouts>{children}</Layouts>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
