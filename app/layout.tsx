import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "PDF Toolkit - Free Online PDF Tools",

  description:
    "Free online PDF tools to compress, merge, split and convert PDF files quickly.",

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">

    <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>

    <Header />

    {children}

    <Footer />

    </body>

    </html>
  );
}

