import type { Metadata } from "next";


export const metadata: Metadata = {

  title:
    "JPG to PDF Converter Online Free",

  description:
    "Convert JPG and PNG images into PDF files online. Create PDF documents quickly and easily.",

};


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return children;

}