import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = "http://localhost:3000" || "https://www.elsamrafisptr.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
