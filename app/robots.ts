import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

  const baseUrl = "https://pdf-toolkit-sooty.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}