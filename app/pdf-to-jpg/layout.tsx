import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title:
    "PDF to JPG Converter Online Free | PDF Toolkit",

  description:
    "Convert PDF pages to JPG images online for free. Extract high quality images from PDF files quickly, easily and securely.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}