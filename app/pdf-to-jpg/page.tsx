"use client";

import { useState } from "react";






export default function PDFtoJPG() {


  const [file, setFile] =
    useState<File | null>(null);


  const [message, setMessage] =
    useState("");


  const [images, setImages] =
    useState<string[]>([]);


  const [processing, setProcessing] =
    useState(false);



  async function convertPDF() {

    const pdfjsLib = await import("pdfjs-dist");


    if (!file) {

      setMessage(
        "Please upload a PDF file."
      );

      return;

    }


    try {


      setProcessing(true);

      setImages([]);

      setMessage(
        "Converting PDF..."
      );



      const arrayBuffer =
        await file.arrayBuffer();



      const pdf =
        await pdfjsLib.getDocument({
          data: arrayBuffer
        }).promise;



      const result:string[] = [];



      for (
        let pageNumber = 1;
        pageNumber <= pdf.numPages;
        pageNumber++
      ) {


        const page =
          await pdf.getPage(pageNumber);



        const viewport =
          page.getViewport({
            scale: 2
          });



        const canvas =
          document.createElement(
            "canvas"
          );


        const context =
          canvas.getContext(
            "2d"
          );


        if (!context) {

          throw new Error(
            "Canvas error"
          );

        }



        canvas.width =
          viewport.width;


        canvas.height =
          viewport.height;



        await page.render({

        canvas: canvas,

        canvasContext: context,

        viewport: viewport

        }).promise;



        const image =
          canvas.toDataURL(
            "image/jpeg",
            0.9
          );



        result.push(image);


      }



      setImages(result);


      setMessage(
        "Conversion completed!"
      );


    } catch(error) {


      console.error(error);


      setMessage(
        "Unable to convert PDF."
      );


    } finally {


      setProcessing(false);


    }


  }





  return (

    <main className="min-h-screen bg-gray-50 p-10">


      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">


        <h1 className="text-3xl font-bold mb-5">

          PDF to JPG Online Free

        </h1>



        <p className="text-gray-600 mb-6">

          Convert PDF pages into JPG images.

        </p>




        <input

          type="file"

          accept="application/pdf"

          onChange={(e)=>{


            const selected =
              e.target.files?.[0] || null;


            setFile(selected);

            setImages([]);

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




        <button

          onClick={convertPDF}

          disabled={processing}

          className="mt-6 bg-black text-white px-6 py-3 rounded-lg"

        >

          {
            processing
            ?
            "Processing..."
            :
            "Convert to JPG"
          }


        </button>





        <p className="mt-5">

          {message}

        </p>





        {
          images.length > 0 && (

            <div className="mt-5">


              <h2 className="font-bold mb-3">

                Converted Images:

              </h2>



              {
                images.map(
                  (img,index)=>(

                    <div
                      key={index}
                      className="mb-5"
                    >


                      <img

                        src={img}

                        className="border"

                      />



                      <a

                        href={img}

                        download={
                          `page-${index+1}.jpg`
                        }

                        className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded"

                      >

                        Download Page {index+1}

                      </a>


                    </div>

                  )
                )
              }


            </div>

          )
        }



      </div>


    </main>

  );

}