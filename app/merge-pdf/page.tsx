"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";


export default function MergePDF() {


  const [files, setFiles] = useState<File[]>([]);

  const [message, setMessage] = useState("");

  const [downloadUrl, setDownloadUrl] = useState("");

  const [processing, setProcessing] = useState(false);



  async function mergePDF() {


    if (files.length < 2) {

      setMessage(
        "Please upload at least 2 PDF files."
      );

      return;

    }


    try {


      setProcessing(true);

      setMessage(
        "Merging PDF files..."
      );



      const mergedPdf =
        await PDFDocument.create();



      for (const file of files) {


        const bytes =
          await file.arrayBuffer();



        const pdf =
          await PDFDocument.load(bytes);



        const pages =
          await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
          );



        pages.forEach((page)=>{

          mergedPdf.addPage(page);

        });


      }



      const pdfBytes =
        await mergedPdf.save();



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
        "Merge completed!"
      );


    } catch(error) {


      console.error(error);


      setMessage(
        "Unable to merge PDF files."
      );


    } finally {


      setProcessing(false);


    }


  }





  return (

    <main className="min-h-screen bg-gray-50 p-10">


      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">


        <h1 className="text-3xl font-bold mb-5">

          Merge PDF Online Free

        </h1>



        <p className="text-gray-600 mb-6">

          Combine multiple PDF files into one document.

        </p>



        <input

          type="file"

          accept="application/pdf"

          multiple

          onChange={(e)=>{


            const selected =
              Array.from(
                e.target.files || []
              );


            setFiles(selected);

            setDownloadUrl("");

            setMessage("");

          }}

        />



        {
          files.length > 0 && (

            <div className="mt-4">

              <p>
                Selected Files:
              </p>


              {
                files.map((file,index)=>(

                  <p key={index}
                    className="text-sm"
                  >
                    {index+1}.
                    {" "}
                    {file.name}
                  </p>

                ))
              }


            </div>

          )
        }




        <button

          onClick={mergePDF}

          disabled={processing}

          className="mt-6 bg-black text-white px-6 py-3 rounded-lg"

        >

          {
            processing
            ?
            "Processing..."
            :
            "Merge PDF"
          }


        </button>




        <p className="mt-5">

          {message}

        </p>




        {
          downloadUrl && (

            <a

              href={downloadUrl}

              download="merged.pdf"

              className="inline-block mt-5 bg-green-600 text-white px-6 py-3 rounded-lg"

            >

              Download Merged PDF

            </a>

          )
        }



      </div>


    </main>

  );

}