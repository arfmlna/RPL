'use client'
import React from 'react'
import { Insert } from '@/lib/insert'

export default function Upload() {
    async function getData(form) {
        const username = form.get('username');
        const file = form.get('file')
        const arrayBuffer = await file.arrayBuffer()
        const buffer = new Uint8Array(arrayBuffer)
        Insert(username, 'Laporan', 'laporan PLP 1 Arif Maulana', ['kampus', 'tugas'], buffer)
        alert('berhasil upload')
    }
  return (
    <form action={getData} className='bg-slate-50 grid place-items-center grid-cols-1 mx-auto h-[100vh]'>
    <div className='bg-slate-300 w-96 p-4 rounded-lg shadow-lg'>
      <h1 className='text-center font-extrabold text-4xl py-5'>Upload</h1>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Username</label>
        <input className='p-1 rounded-md' type="text" name='username' placeholder="Username" />
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label>File</label>
        <input className='p-1 rounded-md' type="file" name='file' placeholder="insert file..." />
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Login</button>
      </div>
    </div>
    </form>
  )
}
