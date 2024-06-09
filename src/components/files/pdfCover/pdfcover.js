'use client'
import { useState } from 'react';
import { Document, Page
, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function PDFCover({ url }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={1} width={180} height={180} renderMode='canvas'/>
    </Document>
  );
}

export default PDFCover;
