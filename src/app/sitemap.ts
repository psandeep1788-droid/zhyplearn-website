import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const routes = ["", "/about", "/contact", "/book-a-demo", "/privacy"];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
