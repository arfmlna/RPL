'use client'
import { fail, succes } from '@/components/alert/succes';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Upload() {
  const router = useRouter()
  async function upload(form){
    const file = form.get('file')
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("dataku/upload", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/pdf", 
      },
      
    });
    if (response.ok) {
      succes('upload', 'upload berhasil', 'success', 'yes')
      router.push('/')
    } else {
      fail('upload', 'upload gagal', 'error', 'no')
    }
  }

  return (
    <div>
    <form action={upload} className='grid place-items-center grid-cols-1 mx-auto h-[90vh]'>
    {/* <Image src={file ? URL.createObjectURL(file) : next} alt='image' priority={true} width={500} height={500} /> */}
    <div className='bg-slate-300 w-80 p-4 rounded-lg shadow-lg'>
      <h1 className='text-center font-extrabold text-4xl py-5'>Upload</h1>
      <div className='mb-7 flex flex-col gap-1'>
        <label>File</label>
        <input className='p-1 rounded-md' type="file" accept='.pdf' name='file' placeholder="insert file..." />
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Kirim</button>
      </div>
    </div>
    </form>
    </div>
  )
}