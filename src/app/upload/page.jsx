'use client'
import React from 'react'
import { sb } from '@/lib/supabase'
import { fail, succes } from '@/components/alert/succes'
import { useRouter } from 'next/navigation';


export default function Upload() {
  const router = useRouter()
    async function getData(form) {
      const { data } = await sb.auth.getSession()
      const username = data.session.user.user_metadata.username
      const title = form.get('title')
      const desc = form.get('desc')
      const genre = form.getAll('genre')
      const jenis = form.get('jenis')
      const file = form.get('file')
      const formData = new FormData();
      formData.append("username", username);
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("genre", genre);
      formData.append("jenis", jenis);
      formData.append("file", file);
      const response = await fetch("/dataku/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/pdf", 
        },
      });
      if (response.ok) {
        succes('upload', 'upload berhasil', 'success', 'yes')
        // router.push('/')
      } else {
        fail('upload', 'upload gagal', 'error', 'no')
      }
      }
  return (
    <form action={getData} className='grid place-items-center grid-cols-1 gap-10 mx-auto my-10'>
    <div className='bg-slate-300 w-80 md:w-96 lg:w-full p-4 rounded-lg shadow-lg'>
      <h1 className='text-center font-extrabold text-4xl py-5'>Upload</h1>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Title</label>
        <input className='p-1 rounded-md' type="text" name='title' placeholder="Title" />
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Deskripsi</label>
        <textarea className='p-1 rounded-md h-20' type="text" name='desc' placeholder="Deskripsi"></textarea>
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Jenis</label>
        <select name="jenis" id="genre" className='p-1 rounded-md'>
          <option value="novel">Novel</option>
          <option value="komik">Komik</option>
          <option value="fiksi">Fiksi</option>
          <option value="ensiklopedia">Ensiklopedia</option>
        </select>
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Genre</label>
        <div className="p-5 rounded-md bg-white">
          <div className="py-1 grid grid-cols-2 justify-start">
            <label className=''>Action</label>
            <input type="checkbox" className='' name="genre" id="genre" value="action" placeholder='action' />
          </div>
          <div className="py-1 grid grid-cols-2 justify-start">
            <label className=''>Fantasy</label>
            <input type="checkbox" className='' name="genre" id="genre" value="fantasy" placeholder='fantasy' />
          </div>
          <div className="py-1 grid grid-cols-2 justify-start">
            <label className=''>Drama</label>
            <input type="checkbox" className='' name="genre" id="genre" value="drama" placeholder='drama' />
          </div>
          <div className="py-1 grid grid-cols-2 justify-start">
            <label className=''>Horror</label>
            <input type="checkbox" className='' name="genre" id="genre" value="horror" placeholder='horror' />
          </div>
          <div className="py-1 grid grid-cols-2 justify-start">
            <label className=''>Romance</label>
            <input type="checkbox" className='' name="genre" id="genre" value="romance" placeholder='romance' />
          </div>
        </div>
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label>File</label>
        <input className='p-1 rounded-md' type="file" name='file' placeholder="insert file..." />
      </div>
      <div className='mb-1 flex flex-col gap-1'>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Kirim</button>
      </div>
    </div>
    </form>
  )
}
