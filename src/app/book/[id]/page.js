'use client'
import PDFViewer from '@/components/files/pdfReader/pdfreader'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import { sb } from '@/lib/supabase'
import React, { useEffect, useState } from 'react'

export default function PageDetail({ params }) {
  const [data, setData] = useState([])
  const [modal, setModal] = useState(false)
  const [file, setFile] = useState()
  function handleModal(){
    setModal(!modal)
  }
  async function getData(){
    const { data, error } = await sb.from('contents').select().eq('id', params.id)
    if (error) throw error
    setData(data)
    setFile(`../${data[0].file}`)
  }
  useEffect(()=> {
    getData()
  })
  return (
    <>
    <Navbar/>
        { modal == false ? 
    <div className="flex min-h-screen justify-center">
      <div className="p-5 m-10 mt-28">
        <div className='p-5 bg-slate-200'>
          { data.map((data, i) => {
            return(
              <div key={i}>
                <p className='py-3 px-2 rounded-md bg-white mb-3'>{data.created_at}</p>
                <p className='py-3 px-2 rounded-md bg-white mb-3'>{data.title}</p>
                <p className='py-3 px-2 rounded-md bg-white mb-3'>{data.author}</p>
                <p className='py-3 px-2 rounded-md bg-white mb-3'>{data.desc}</p>
                <p className='py-3 px-2 rounded-md bg-white mb-3'>
                  <span className='py-2 px-1 bg-cyan-400 rounded-md'>{
                    [data.genre].join(', ')
                  }</span>
                </p>
                <button className='px-2 py-1 rounded-md bg-white' onClick={handleModal}>open</button>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
      : 
    <div className='pt-[4.5rem] rounded-md pb-1 bg-black'>
        <PDFViewer url={file} />
        <div className='my-3 flex justify-center'>
          <button className='px-2 py-1 rounded-md bg-cyan-400' onClick={handleModal}>close</button>
        </div>
    </div>
        }
    <Footer/>
    </>
  )
}
