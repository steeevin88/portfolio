import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CSPostHogProvider } from './providers'

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
      <CSPostHogProvider>
        <body className={`text-black ${inter.className} scrollbar`}>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
