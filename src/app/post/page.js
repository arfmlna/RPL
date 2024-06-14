'use client'
import Cover from "@/components/files/pdfCover/pdfcover";
import RootLayout from "../rootLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { sb } from "@/lib/supabase";



export default function Home() {
  const [data, setData] = useState([])
  const [user, setUser] = useState()

async function getUser(){
    const { data } = await sb.auth.getSession()
    setUser(data.session.user.user_metadata.username)
}

  async function getData(){
    const { data, error } = await sb.from('contents').select().eq('author', user)
    if (error) throw error
    setData(data)
  }
  
  async function deleteData(id){
    const { error } = await sb.from('contents').delete().eq('id', id)
    if (error) throw error
  }

  useEffect(() => {
      getUser()
      getData()
  })

  return (
    <RootLayout>
    <main className="flex min-h-screen">
      <div className="w-full p-5 m-10 mt-28">
        <Link href="../upload" className="p-2 rounded-md mb-10 bg-slate-100">upload</Link>
        <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8 md:gap-10 lg:gap-x-14 justify-items-center">
          { data.map((data, i) => {
            return(
              <div key={i} className="w-52 h-72 sm:w-52 md:w-52 lg:w-56 sm:h-56 md:h-80 lg:h-80">
              <Link href={`/book/${data.id}`} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-red-500 rounded-lg flex items-center justify-center p-5">
                    <Cover url={data.file} />
                  </div>
                  <div className="flip-card-back bg-blue-500 rounded-lg flex flex-col items-center justify-center p-5">
                    <h1 className="text-white text-md font-bold">{data.title}</h1> 
                    <p className="text-white text-[12px] font-bold">{data.author}</p> 
                    <p className="text-white text-[10px] font-bold">{data.desc}</p>
                    <p className="text-white text-[12px] font-bold">{[data.genre].join(', ')}</p>
                  </div>
                </div>
              </Link>
              <div className="mt-3">
                <Link href={`/update/${data.id}`} className="p-2 rounded-md mb-10 bg-slate-400 shadow-lg mr-2">edit</Link>
                <button onClick={() => deleteData(data.id)} className="p-2 rounded-md mb-10 bg-slate-400 shadow-lg mr-2">hapus</button>
              </div>
              </div>
            )
          }) }
        </div>
      </div>
    </main>
    </RootLayout>
  );
}