"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";


export default function JPGtoPDF() {


  const [files, setFiles] = useState<File[]>([]);

  const [message, setMessage] = useState("");

  const [downloadUrl, setDownloadUrl] = useState("");

  const [processing, setProcessing] = useState(false);



  async function convertPDF() {


    if(files.length === 0){

      setMessage(
        "Please upload image files."
      );

      return;

    }



    try{


      setProcessing(true);


      setMessage(
        "Creating PDF..."
      );



      const pdfDoc =
        await PDFDocument.create();



      for(const file of files){


        const imageBytes =
          await file.arrayBuffer();



        let image;


if (file.name.toLowerCase().endsWith(".png")) {


  image =
    await pdfDoc.embedPng(
      imageBytes
    );


} else {


  image =
    await pdfDoc.embedJpg(
      imageBytes
    );


}


        const page =
          pdfDoc.addPage();



        const pageWidth =
          page.getWidth();



        const pageHeight =
          page.getHeight();



        const ratio =
          Math.min(
            pageWidth / image.width,
            pageHeight / image.height
          );



        const width =
          image.width * ratio;


        const height =
          image.height * ratio;



        page.drawImage(
          image,
          {
            x:
            (pageWidth - width) / 2,

            y:
            (pageHeight - height) / 2,

            width,

            height,

          }
        );

      }




      const pdfBytes =
        await pdfDoc.save();



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
        "PDF created successfully!"
      );



    }catch(error){


      console.error(error);


      setMessage(
        "Unable to create PDF."
      );


    }finally{


      setProcessing(false);


    }


  }





  return (

    <main className="min-h-screen bg-gray-50 p-10">


      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">


        <h1 className="text-3xl font-bold mb-5">

          JPG to PDF Online Free

        </h1>



        <p className="text-gray-600 mb-6">

          Convert images into PDF files quickly.

        </p>




        <input

          type="file"

          accept="image/jpeg,image/png"

          multiple

          onChange={(e)=>{


const selected =
  Array.from(
    e.target.files || []
  );


const validFiles =
  selected.filter(
    (file) =>
      file.name.toLowerCase().endsWith(".jpg") ||
      file.name.toLowerCase().endsWith(".jpeg") ||
      file.name.toLowerCase().endsWith(".png")
  );


setFiles(validFiles);

            setDownloadUrl("");

            setMessage("");

          }}

        />




        {
          files.length > 0 && (

            <div className="mt-4">


              <p>
                Selected Images:
              </p>



              {
                files.map(
                  (file,index)=>(

                    <p
                      key={index}
                      className="text-sm"
                    >

                      {index + 1}.
                      {" "}
                      {file.name}

                    </p>

                  )
                )
              }


            </div>

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
            "Convert to PDF"
          }


        </button>




        <p className="mt-5">

          {message}

        </p>





        {
          downloadUrl && (

            <a

              href={downloadUrl}

              download="images.pdf"

              className="inline-block mt-5 bg-green-600 text-white px-6 py-3 rounded-lg"

            >

              Download PDF

            </a>

          )
        }



      </div>


    </main>

  );

}