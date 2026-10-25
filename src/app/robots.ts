import type { MetadataRoute } from "next";
import { isProductionDeploy, siteUrl } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeploy()) {
    // Deploy previews / branch deploys must never be indexed.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
