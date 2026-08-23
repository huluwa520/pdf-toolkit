"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";


export default function SplitPDF() {


  const [file, setFile] = useState<File | null>(null);

  const [pages, setPages] = useState("");

  const [message, setMessage] = useState("");

  const [downloadUrl, setDownloadUrl] = useState("");

  const [processing, setProcessing] = useState(false);



  async function splitPDF() {


    if (!file) {

      setMessage(
        "Please upload a PDF file."
      );

      return;

    }



    if (!pages) {

      setMessage(
        "Please enter page numbers."
      );

      return;

    }



    try {


      setProcessing(true);

      setMessage(
        "Splitting PDF..."
      );



      const bytes =
        await file.arrayBuffer();



      const pdf =
        await PDFDocument.load(bytes);



      const totalPages =
        pdf.getPageCount();



      const selectedPages =
        pages
        .split(",")
        .map(
          p => Number(p.trim()) - 1
        )
        .filter(
          p =>
          p >= 0 &&
          p < totalPages
        );



      if(selectedPages.length === 0){

        setMessage(
          "Invalid page numbers."
        );

        return;

      }



      const newPdf =
        await PDFDocument.create();



      const copiedPages =
        await newPdf.copyPages(
          pdf,
          selectedPages
        );



      copiedPages.forEach(
        page =>
        newPdf.addPage(page)
      );



      const pdfBytes =
        await newPdf.save();



      const blob =
        new Blob(
          [
            new Uint8Array(pdfBytes)
          ],
          {
            type:"application/pdf"
          }
        );



      const url =
        URL.createObjectURL(blob);



      setDownloadUrl(url);


      setMessage(
        "Split completed!"
      );



    }catch(error){


      console.error(error);


      setMessage(
        "Unable to split PDF file."
      );


    }finally{


      setProcessing(false);


    }


  }




  return (

    <main className="min-h-screen bg-gray-50 p-10">


      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">


        <h1 className="text-3xl font-bold mb-5">

          Split PDF Online Free

        </h1>



        <p className="text-gray-600 mb-6">

          Extract selected pages from PDF files.

        </p>




        <input

          type="file"

          accept="application/pdf"

          onChange={(e)=>{

            setFile(
              e.target.files?.[0] || null
            );

            setDownloadUrl("");

            setMessage("");

          }}

        />




        {
          file && (

            <p className="mt-4">

              Selected:
              {" "}
              {file.name}

            </p>

          )
        }




        <input

          type="text"

          placeholder="Example: 1,2,3"

          value={pages}

          onChange={
            (e)=>
            setPages(e.target.value)
          }

          className="mt-5 border p-3 w-full rounded"

        />




        <button

          onClick={splitPDF}

          disabled={processing}

          className="mt-6 bg-black text-white px-6 py-3 rounded-lg"

        >

          {
            processing
            ?
            "Processing..."
            :
            "Split PDF"
          }


        </button>




        <p className="mt-5">

          {message}

        </p>




        {
          downloadUrl && (

            <a

              href={downloadUrl}

              download="split-pages.pdf"

              className="inline-block mt-5 bg-green-600 text-white px-6 py-3 rounded-lg"

            >

              Download Split PDF

            </a>

          )
        }




      </div>


    </main>

  );

}