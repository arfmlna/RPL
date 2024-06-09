'use client'
import Cover from "@/components/files/pdfCover/pdfcover";
import RootLayout from "./rootLayout";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Home() {
  const [data, setData] = useState([])

  async function getData(){
    const response = await fetch("/dataku/book")
    const data = await response.json()
    setData(data)
  }
  
  getData()

  return (
    <RootLayout>
    <main className="flex min-h-screen">
      <div className="w-full p-5 m-10 mt-28">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8 md:gap-10 lg:gap-x-14 justify-items-center">
          { data.map((data, i) => {
            return(
              <Link key={i} href={`/${i}`} className="flip-card w-52 h-72 sm:w-52 md:w-52 lg:w-56 sm:h-72 md:h-80 lg:h-96">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-red-500 rounded-lg flex items-center justify-center p-5">
                    <Cover url={data.file} />
                  </div>
                  <div className="flip-card-back bg-blue-500 rounded-lg flex flex-col items-center justify-center p-5">
                    <h1 className="text-white text-md font-bold">{data.title}</h1> 
                    <p className="text-white text-[12px] font-bold">{data.author}</p> 
                    <p className="text-white text-[10px] font-bold">{data.desc}</p>
                    <p className="text-white text-[12px] font-bold">{data.genre}</p>
                  </div>
                </div>
              </Link>
            )
          }) }
        </div>
      </div>
    </main>
    </RootLayout>
  );
}