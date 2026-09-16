import type { MetadataRoute } from "next";

const SITE_URL = "https://ryan-hercule.vercel.app";

const ROUTES = ["", "/about", "/experience", "/project"] as const;

function sitemap(): MetadataRoute.Sitemap {
   return ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
   }));
}

export default sitemap;
