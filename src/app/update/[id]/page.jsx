'use client'
import { Update } from '@/lib/update';

export default function Upload({ params }) {
  return (
    <form action={Update} className='grid place-items-center grid-cols-1 gap-10 mx-auto my-10'>
    <div className='bg-slate-300 w-80 md:w-96 lg:w-[720px] p-4 rounded-lg shadow-lg'>
      <h1 className='text-center font-extrabold text-4xl py-5'>Upload</h1>
          <input className='hidden' type="text" id='id' defaultValue={params.id} name='id' />
          <div className='mb-7 flex flex-col gap-1'>
            <label id="title">Title</label>
            <input className='p-1 rounded-md' type="text" id='title' name='title' 
            placeholder='title' />
          </div>
          <div className='mb-7 flex flex-col gap-1'>
            <label id="desc">Deskripsi</label>
            <textarea className='p-1 rounded-md h-20' type="text" id='desc' name='desc' placeholder='deskripsi'></textarea>
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
            <label id="file">File</label>
              <input className='p-1 rounded-md' type="file" name='file'/>
          </div>
          <div className='mb-7 flex flex-col gap-1'>
            <button className='bg-blue-500 text-white p-2 rounded-md'>Kirim</button>
          </div>
        </div>
    </form>
  )
}