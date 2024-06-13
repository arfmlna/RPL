import { useState, useEffect } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import Image from 'next/image';
// import worker from 'pdfjs-dist/build/pdf.worker.entry.js';

const pdfjsWorker = import('pdfjs-dist/build/pdf.worker.entry.js');

GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function Cover({ url }) {
  const [coverImage, setCoverImage] = useState(null);

  useEffect(() => {
    async function fetchCover() {
      if (!url) return;

      try {
        const pdf = await getDocument(url).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport }).promise;
        const imageData = canvas.toDataURL();
        setCoverImage(imageData);
      } catch (error) {
        console.error('Error fetching PDF cover:', error);
      }
    }

    fetchCover();
  }, [url]);

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      {coverImage ? (
        <Image 
        src={coverImage} 
        alt="PDF Cover"
        quality={80}
        loading="lazy"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
        />
      ) : (
        <p className='w-full'>
          Loading...
        </p>
      )}
    </div>
  );
}
