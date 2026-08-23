import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pdf-toolkit-sooty.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/compress-pdf`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/merge-pdf`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/split-pdf`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/jpg-to-pdf`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pdf-to-jpg`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}