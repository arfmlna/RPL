import Image from "next/image";
import BKI from "../../public/next.svg"
import RootLayout from "./rootLayout";
import Link from "next/link";
import { lazy } from "react";

export default function Home() {
  const row = []
  for (let i = 0; i < 12; i++) {
    row.push(
      <Link key={i} href={`/${i}`} className="flip-card w-52 h-72 sm:w-52 md:w-52 lg:w-56 sm:h-72 md:h-80 lg:h-96">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-red-500 rounded-lg flex items-center justify-center p-5">
            <Image src={BKI} alt="Avatar" priority={true} />
          </div>
          <div className="flip-card-back bg-blue-500 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-white text-xl font-bold">John Doe</h1> 
            <p className="text-white text-md font-bold">Architect & Engineer</p> 
            <p className="text-white text-md font-bold">We love that guy</p>
          </div>
        </div>
      </Link>
    )  
  }

  return (
    <RootLayout>
    <main className="flex min-h-screen">
      <div className="w-full p-5 m-10 mt-28">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8 md:gap-10 lg:gap-x-14 justify-items-center">
          { row }
        </div>
      </div>
    </main>
    </RootLayout>
  );
}