import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], weight : "400" });

export const metadata: Metadata = {
  title: "Steven Le",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-black ${inter.className} scrollbar`}>
        <Navbar/>
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}
