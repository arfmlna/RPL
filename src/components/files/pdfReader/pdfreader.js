import { useState, useEffect, useRef } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

const pdfjsWorker = import('pdfjs-dist/build/pdf.worker.entry.js');

GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function PDFViewer({ url }) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const canvasRef = useRef(null);
  async function fetchPage(pageNumber) {
    if (!url) return;
    try {
      const pdf = await getDocument(url).promise;
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.0 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await page.render({ canvasContext: context, viewport }).promise;
    } catch (error) {
      console.error('Error fetching PDF page:', error);
    }
  }
  useEffect(() => {
    const fetchPdf = async () => {
      const pdf = await getDocument(url).promise;
      setNumPages(pdf.numPages);
      fetchPage(1);
    };
    fetchPdf();
  }, [url]);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      fetchPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
      fetchPage(currentPage + 1);
    }
  };
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-20 w-full grid grid-cols-1 place-items-center'>
      <canvas className='w-full' ref={canvasRef} />
      <div className='p-2 w-full flex flex-row place-items-center justify-center gap-2 rounded-sm bg-slate-300'>
        <button className='p-1 bg-white rounded-md' onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous 
        </button>
        <span className='mx-1'>
          Page {currentPage} of {numPages}
        </span>
        <button className='p-1 bg-white rounded-md' onClick={handleNextPage} disabled={currentPage === numPages}>
          Next
        </button>
      </div>
    </div>
  );
}
