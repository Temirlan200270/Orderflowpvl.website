import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS_INFO.contact.website;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/legal/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
