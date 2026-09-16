import type { MetadataRoute } from "next";

import { getPostSlugs } from "@/lib/blog";

const SITE_URL = "https://ryan-hercule.vercel.app";

const ROUTES = ["", "/about", "/experience", "/project", "/blog"] as const;

function sitemap(): MetadataRoute.Sitemap {
   const staticRoutes = ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
   }));

   const postRoutes = getPostSlugs().map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(),
   }));

   return [...staticRoutes, ...postRoutes];
}

export default sitemap;
