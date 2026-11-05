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
  title: "SmartCraft Digital Writers | Writing and Digital Solutions",
  description:
    "SmartCraft Digital Writers provides academic and research support, nursing learning support, data analysis, professional writing, presentations, and web development.",
  keywords: [
    "SmartCraft Digital Writers",
    "academic support",
    "research support",
    "professional writing",
    "data analysis",
    "presentation design",
    "web development",
    "digital solutions",
  ],
  authors: [{ name: "SmartCraft Digital Writers" }],
  creator: "SmartCraft Digital Writers",
  openGraph: {
    title: "SmartCraft Digital Writers",
    description:
      "Ideas into words. Solutions into reality. Explore writing, research, data analysis, and digital solutions.",
    siteName: "SmartCraft Digital Writers",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
