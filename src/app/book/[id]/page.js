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
    <div className="flex min-h-screen">
      <div className="w-full p-5 m-10 mt-28">
        { modal == false ? 
        <div className='p-5 bg-slate-200'>
          { data.map((data, i) => {
            return(
              <div key={i}>
                <p>{data.id}</p>
                <p>{data.created_at}</p>
                <p>{data.title}</p>
                <p>{data.author}</p>
                <p>{data.desc}</p>
                <p>{data.genre}</p>
                <p>{data.file}</p>
                <button onClick={handleModal}>open</button>
              </div>
            )
          }) }
        </div>
        : 
        <div className='w-full h-full'>
          <PDFViewer url={file} />
          <button onClick={handleModal}>close</button>
        </div>
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}
