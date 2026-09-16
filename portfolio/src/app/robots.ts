import type { MetadataRoute } from "next";

const SITE_URL = "https://ryan-hercule.vercel.app";

function robots(): MetadataRoute.Robots {
   return {
      rules: {
         userAgent: "*",
         allow: "/",
      },
      sitemap: `${SITE_URL}/sitemap.xml`,
   };
}

export default robots;
