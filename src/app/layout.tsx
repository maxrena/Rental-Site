import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Havenly | Find Your Perfect Home",
  description:
    "Discover premium houses and apartments for rent. Curated properties in the best neighborhoods, designed for modern living.",
  openGraph: {
    title: "Havenly | Find Your Perfect Home",
    description:
      "Discover premium houses and apartments for rent in the best neighborhoods.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
