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
  metadataBase: new URL("https://pdftoolkitapp.com"),

  title: {
    default: "Free Online PDF Tools - Compress, Merge, Split & Convert",
    template: "%s | PDF Toolkit",
  },

  description:
    "Free online PDF tools to compress, merge, split and convert PDF files quickly and securely.",

  keywords: [
    "PDF tools",
    "Compress PDF",
    "Merge PDF",
    "Split PDF",
    "PDF Converter",
    "JPG to PDF",
    "PDF to JPG",
    "Free PDF tools",
  ],


  openGraph: {
    title: "Free Online PDF Tools - PDF Toolkit",
    description:
      "Compress, merge, split and convert PDF files online for free.",
    url: "https://pdftoolkitapp.com",
    siteName: "PDF Toolkit",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">

    <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "PDF Toolkit",
      url: "https://pdftoolkitapp.com",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Web",
      description:
        "Free online PDF tools to compress, merge, split and convert PDF files quickly and securely.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    }),
  }}
/>
    <Header />

    {children}

    <Footer />

    </body>

    </html>
  );
}

