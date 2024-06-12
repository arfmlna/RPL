'use client'
import React, { useEffect, useState } from 'react'
import { uploadFile } from '@/lib/insert';
import { sb } from '@/lib/supabase';

export default function Upload() {
  const [username, setUsername] = useState()
  async function session(){
    const { data, error } = await sb.auth.getSession()
    if (error) throw error
    if (data.session) {
      setUsername(data.session.user.user_metadata.username)
    }
  }

  useEffect(() => {
    session()
  },[session])

  return (
    <form action={uploadFile} className='grid place-items-center grid-cols-1 gap-10 mx-auto my-10'>
    <div className='bg-slate-300 w-80 md:w-96 lg:w-[720px] p-4 rounded-lg shadow-lg'>
      <h1 className='text-center font-extrabold text-4xl py-5'>Upload</h1>
      <div className="hidden">
        <input type="text" name="username" value={username}/>
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label id="title">Title</label>
        <input className='p-1 rounded-md' type="text" name='title' placeholder="Title" />
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label id='desc'>Deskripsi</label>
        <textarea className='p-1 rounded-md h-20' type="text" name='desc' placeholder="Deskripsi"></textarea>
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label id='jenis'>Jenis</label>
        <select name="jenis" className='p-1 rounded-md'>
          <option value="novel">Novel</option>
          <option value="komik">Komik</option>
          <option value="fiksi">Fiksi</option>
          <option value="ensiklopedia">Ensiklopedia</option>
        </select>
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label id='genre'>Genre</label>
        <div className="p-5 rounded-md bg-white">
          <div className="py-1 grid grid-cols-2 justify-start">
            <p>Action</p>
            <input type="checkbox" className='' name="genre" value="action" placeholder='action' />
          </div>
          <div className="py-1 grid grid-cols-2 justify-start">
            <p>Fantasy</p>
            <input type="checkbox" className='' name="genre" value="fantasy" placeholder='fantasy' />
          </div>
          <div className="py-1 grid grid-cols-2 justify-start">
            <p>Drama</p>
            <input type="checkbox" className='' name="genre" value="drama" placeholder='drama' />
          </div>
          <div className="py-1 grid grid-cols-2 justify-start">
            <p>Horror</p>
            <input type="checkbox" className='' name="genre" value="horror" placeholder='horror' />
          </div>
          <div className="py-1 grid grid-cols-2 justify-start">
            <p>Romance</p>
            <input type="checkbox" className='' name="genre" value="romance" placeholder='romance' />
          </div>
        </div>
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label id='file'>File</label>
        <input className='p-1 rounded-md' type="file" name='file' placeholder="insert file..." />
      </div>
      <div className='mb-1 flex flex-col gap-1'>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Kirim</button>
      </div>
    </div>
    </form>
  )
}