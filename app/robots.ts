import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/config/business";

/**
 * Facebook Sharing Debugger expects a real /robots.txt and often suggests
 * allowlisting facebookexternalhit. A missing route previously returned 404 HTML.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Facebot", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${BUSINESS_INFO.contact.website}/sitemap.xml`,
  };
}
