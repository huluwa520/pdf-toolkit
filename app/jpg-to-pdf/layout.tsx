import type { Metadata } from "next";


export const metadata: Metadata = {

  title:
    "JPG to PDF Converter Online Free - Convert Images to PDF | PDF Toolkit",

  description:
    "Convert JPG and PNG images to PDF online for free. Create PDF documents quickly, easily and securely with our image to PDF converter.",
};


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return children;

}