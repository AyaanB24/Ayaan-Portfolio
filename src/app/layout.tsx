import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Avatar from "@/components/Avatar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Ayaan Bargir | Computer Science Engineer",
  description: "DevOps, Full Stack, and Automation Engineer Portfolio",
};

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${mono.variable} antialiased grain`}>
        <SmoothScroll />
        <Navbar />
        <Avatar />
        {children}
      </body>
    </html>
  );
}
