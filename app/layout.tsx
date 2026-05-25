import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/config/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Автосервис в Павлодаре. Диагностика и обслуживание автомобилей.";

export const metadata: Metadata = {
  title: "ИП АБИШЕВ | Автосервис в Павлодаре",
  description: siteDescription,
  metadataBase: new URL(BUSINESS_INFO.contact.website),
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: "/",
    siteName: BUSINESS_INFO.name,
    title: "ИП АБИШЕВ | Автосервис в Павлодаре",
    description: siteDescription,
  },
  verification: {
    other: {
      "facebook-domain-verification": "juk7p2bfj0a2kmw0lzdxytyll2838p",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
