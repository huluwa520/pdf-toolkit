import Link from "next/link";


export default function Home() {


  const tools = [

    {
      title: "Compress PDF",
      description:
        "Reduce PDF file size while keeping good quality.",
      link: "/compress-pdf"
    },


    {
      title: "Merge PDF",
      description:
        "Combine multiple PDF files into one document.",
      link: "/merge-pdf"
    },


    {
      title: "Split PDF",
      description:
        "Extract pages from PDF files quickly.",
      link: "/split-pdf"
    },


    {
      title: "JPG to PDF",
      description:
        "Convert images into PDF documents online.",
      link: "/jpg-to-pdf"
    },


    {
      title: "PDF to JPG",
      description:
        "Convert PDF pages into JPG images.",
      link: "/pdf-to-jpg"
    }

  ];



  return (

    <main className="min-h-screen bg-gray-50">


      {/* Hero Section */}

      <section className="text-center py-20 px-5">


        <h1 className="text-5xl font-bold mb-6">

          Free Online PDF Tools

        </h1>


        <p className="text-xl text-gray-600 max-w-2xl mx-auto">

          Compress, merge, split and convert PDF files easily.
          Fast, secure and completely free.

        </p>


      </section>





      {/* Tools */}

      <section className="max-w-5xl mx-auto px-5">


        <h2 className="text-3xl font-bold mb-8 text-center">

          PDF Tools

        </h2>




        <div className="grid md:grid-cols-2 gap-6">


          {
            tools.map(
              (tool)=>(


                <Link

                  key={tool.link}

                  href={tool.link}

                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"

                >


                  <h3 className="text-2xl font-bold mb-3">

                    {tool.title}

                  </h3>



                  <p className="text-gray-600">

                    {tool.description}

                  </p>


                </Link>


              )
            )
          }



        </div>


      </section>






      {/* SEO Content */}


      <section className="max-w-4xl mx-auto px-5 py-20">


        <h2 className="text-3xl font-bold mb-5">

          All-in-One PDF Solution

        </h2>



        <p className="text-gray-700 leading-8">


          PDF Toolkit provides simple online PDF tools
          for everyday document tasks.
          You can compress PDF files, merge documents,
          split PDF pages and convert images easily.


        </p>



      </section>






      {/* FAQ */}


      <section className="max-w-4xl mx-auto px-5 pb-20">


        <h2 className="text-3xl font-bold mb-5">

          Frequently Asked Questions

        </h2>




        <div className="space-y-5">


          <div>

            <h3 className="font-bold">

              Is PDF Toolkit free?

            </h3>

            <p>

              Yes. All PDF tools are free to use.

            </p>

          </div>




          <div>

            <h3 className="font-bold">

              Are my files secure?

            </h3>

            <p>

              Files are processed locally in your browser
              and are not stored permanently.

            </p>

          </div>




          <div>

            <h3 className="font-bold">

              Can I use these tools on mobile?

            </h3>

            <p>

              Yes. PDF Toolkit works on desktop,
              tablets and mobile devices.

            </p>

          </div>



        </div>



      </section>






      <footer className="text-center py-10 text-gray-500">

        © 2026 PDF Toolkit. All rights reserved.

      </footer>



    </main>

  );

}