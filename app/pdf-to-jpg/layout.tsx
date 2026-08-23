import type { Metadata } from "next";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {

  title:
    "PDF to JPG Converter Online Free",

  description:
    "Convert PDF pages into JPG images online. Extract high quality images from PDF files quickly and easily.",

};


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return children;

}