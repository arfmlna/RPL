import { useState, useEffect } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

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
    <div>
      {coverImage ? (
        <img src={coverImage} alt="PDF Cover" />
      ) : (
        <p>Loading cover...</p>
      )}
    </div>
  );
}
