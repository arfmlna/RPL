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
    <div className=''>
      <div className='mx-0 sm:mx-0 md:mx-48 lg:mx-48'>
        <canvas className='w-full' ref={canvasRef} />
      </div>
      <div className='py-3 px-2 w-full flex flex-row justify-between gap-2 rounded-sm bg-slate-300'>
        <button className='bg-white p-2 rounded-md' onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous 
        </button>
        <span className='my-auto'>
          Page {currentPage} of {numPages}
        </span>
        <button className='bg-white p-2 rounded-md' onClick={handleNextPage} disabled={currentPage === numPages}>
          Next
        </button>
      </div>
    </div>
  );
}
