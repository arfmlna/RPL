'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import urlImage from '../../../public/Vektor-Logo.svg'
import Link from 'next/link'
import { sb } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { info } from '../alert/succes'

export default function Navbar() {
  const router = useRouter()
  const [show, setShow] = useState({
    parent: false,
    child: false,
  })
  const [username, setUsername] = useState()
  function handleShow() {
    setShow({ parent: true })
    if (show.parent == true) {
      setShow({ parent: false })
    }
  }

  function handleShowChild() {
    setShow({ child: true })
    if (show.child == true) {
      setShow({ child: false })
    }
  }

  async function Logout(){
    const { error } = await sb.auth.signOut()
    info('Logout', 'anda logout dari website', 'success', 'Logout')
    if (!error) {
      router.refresh()
    }
    return error
  }

  async function session(){
    const { data, error } = await sb.auth.getSession()
    if (error) throw error
    if (data.session) {
      setUsername(data.session.user.user_metadata.username)
    }
  }

  useEffect(() => {
    session()
  },[])

  return (
    <>
        <nav className="fixed z-10 left-0 right-0 navbar flex py-5 backdrop-blur-3xl px-5 opacity-80 bg-[#88AB8E] text-gray-100">
            <div className="nav-identity flex flex-row ml-3">
                <Image className='mr-2 w-7 h-7' src={urlImage} alt='icon' />
                <h3><Link href="/">Kelompok 1</Link></h3>
            </div>
            <div className="mx-auto"></div>
            <ul className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex flex-row gap-2">
              <Link className="border-b-2 border-transparent hover:border-b-2 hover:border-black" href="/">home</Link>
              <Link className="border-b-2 border-transparent hover:border-b-2 hover:border-black" href="/about">about</Link>
              { username ? 
                <div className="relative inline-block">
                  <span className='border-b-2 border-transparent hover:border-b-2 hover:border-black' onClick={handleShowChild}>More</span>
                  { show.child ? 
                  <div className="absolute flex flex-col bg-[#163020] rounded-md p-2 mt-7 duration-1000 ease-in-out">
                    <Link href="/post" className="dropdown-item">Post</Link>
                    <Link href="/settings" className="dropdown-item">Settings</Link>
                    <span onClick={Logout} className="dropdown-item">Logout</span>
                  </div>
                : null }
                </div>
                : <Link className="" href="/auth/login">Login</Link> }
            </ul>
            { show.parent ? 
            <ul className="flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden absolute transition-transform ease-in-out duration-300 flex-col gap-2 p-5 top-16 right-0 w-52 bg-[#163020] rounded-md">
              <Link className="border-b-2 border-transparent hover:border-b-2 hover:border-black" href="/">home</Link>
              <Link className="border-b-2 border-transparent hover:border-b-2 hover:border-black" href="/about">about</Link>
              { username ? 
                <span onClick={handleShowChild} className="border-b-2 border-transparent hover:border-b-2 hover:border-black">More</span>
                : 
                <Link className="border-b-2 border-transparent hover:border-b-2 hover:border-black" href="/auth/login">Login</Link> 
              }
            </ul>
            : ""}
            <p className='bg-[#163020] text-white ml-3 mr-3 p-[1px] rounded-md italic text-[14px]'>
              { username ? username : "Guest" }
            </p>
            <button className='flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden' onClick={handleShow}>x</button>
              { show.child && username ? 
                <div className="absolute flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden right-0 flex-col bg-[#163020] rounded-md p-2 mt-10 duration-1000 ease-in-out">
                  <Link href="/post" className="dropdown-item">Post</Link>
                  <Link href="/settings" className="dropdown-item">Settings</Link>
                  <button onClick={Logout} className="dropdown-item">Logout</button>
                </div>
              : null }
        </nav>
    </>
  )
}
