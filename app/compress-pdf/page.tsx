"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function CompressPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [savedPercent, setSavedPercent] = useState(0);

  async function compressPDF() {
    if (!file) {
      setMessage("Please upload a PDF file.");
      return;
    }

    if (file.size === 0) {
      setMessage("The file is empty. Please upload a valid PDF.");
      return;
    }

    if (file.type !== "application/pdf") {
      setMessage("Please upload a PDF file.");
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      setMessage("File size must be smaller than 20MB.");
      return;
    }

    try {
      setProcessing(true);
      setMessage("Processing PDF...");

      const bytes = await file.arrayBuffer();

      const pdfDoc = await PDFDocument.load(bytes);

      const pdfBytes = await pdfDoc.save({
        useObjectStreams: true,
      });

      const newSize = pdfBytes.length;

      setCompressedSize(newSize);

      const saved = ((file.size - newSize) / file.size) * 100;

      setSavedPercent(Number(Math.max(0, saved).toFixed(1)));

        const blob = new Blob(
        [new Uint8Array(pdfBytes)],
        {
            type: "application/pdf",
        }
        );

      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setMessage("Compression completed!");
    } catch (error) {
      console.error(error);
      setMessage("Unable to process this PDF file.");
    } finally {
      setProcessing(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-5">
          Compress PDF Online Free
        </h1>

        <p className="text-gray-600 mb-6">
          Reduce PDF size quickly and securely.
        </p>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0] || null;

            setFile(selectedFile);
            setOriginalSize(selectedFile?.size || 0);
            setCompressedSize(0);
            setSavedPercent(0);
            setDownloadUrl("");
            setMessage("");
          }}
        />

        {file && (
          <div className="mt-4 text-sm">
            <p>
              Selected: {file.name}
            </p>

            <p>
              Original Size: {(originalSize / 1024).toFixed(2)} KB
            </p>
          </div>
        )}

        <button
          onClick={compressPDF}
          disabled={processing}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
        >
          {processing ? "Processing..." : "Compress PDF"}
        </button>

        <p className="mt-5">
          {message}
        </p>

        {compressedSize > 0 && (
          <div className="mt-5">
            <p>
              Compressed Size: {(compressedSize / 1024).toFixed(2)} KB
            </p>

            <p>
              Saved: {savedPercent}%
            </p>
          </div>
        )}

        {downloadUrl && (
          <a
            href={downloadUrl}
            download="compressed.pdf"
            className="inline-block mt-5 bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Download PDF
          </a>
        )}
      </div>
    </main>
  );
}
