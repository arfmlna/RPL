'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import urlImage from '@/app/favicon.ico'
import Link from 'next/link'

export default function Navbar() {
  const [show, setShow] = useState(false)
  function handleShow() {
    setShow(true)
    if (show == true) {
      setShow(false)
    }
  }
  return (
    <>
        <nav className="fixed left-0 right-0 navbar flex py-5 px-5 bg-slate-400 opacity-80">
            <div className="nav-identity flex flex-row ml-3">
                <Image className='mr-2 w-5 h-5' src={urlImage} alt='icon' />
                <h3>Kelompok 1</h3>
            </div>
            <div className="mx-auto"></div>
            <button className='flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden' onClick={handleShow}>x</button>
            <ul className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex flex-row gap-2">
              <Link className="" href="/">home</Link>
              <Link className="" href="/about">about</Link>
              <Link className="" href="/login">More</Link>
            </ul>
            { (show == true) ? 
            <ul className="flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden bg-slate-400 absolute transition-transform ease-in-out duration-300 flex-col gap-2 p-5 top-16 right-0 w-52">
              <Link className="" href="/">home</Link>
              <Link className="" href="/about">about</Link>
              <Link className="" href="/login">More</Link>
            </ul>
            : ""}
        </nav>
    </>
  )
}
