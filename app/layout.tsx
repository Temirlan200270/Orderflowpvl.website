import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/config/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IE ABISHEV | Automotive systems",
  description:
    "Professional automotive maintenance and computer diagnostics in Pavlodar, Kazakhstan. OKED 45201.",
  metadataBase: new URL(BUSINESS_INFO.contact.website),
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
