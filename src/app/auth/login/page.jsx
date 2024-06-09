'use client'
import React from 'react'
import AuthLayout from '../layout'
import { Sign } from '@/lib/sign'
import Link from 'next/link'
import { fail, succes } from '@/components/alert/succes'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  async function getLogin(form){
    const Email = form.get('Email')
    const Password = form.get('Password')
    const err = await Sign(Email, Password)
    if (err) {
      fail('Login', 'Login Gagal', 'error', 'Coba Lagi!')
    } else {
      succes('Login', 'Login Berhasil', 'success', "Masuk!")
      router.push('/')
    }
  }
  return (
    <AuthLayout>
    <form action={getLogin} className='grid place-items-center grid-cols-1 mx-auto h-[100vh]'>
    <div className='bg-slate-300 w-80 p-4 rounded-lg shadow-lg'>
      <h1 className='text-center font-extrabold text-4xl py-5'>Login</h1>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Email</label>
        <input className='p-1 rounded-md' name='Email' type="email" placeholder="Email" autoComplete='username' required />
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Password</label>
        <input className='p-1 rounded-md' name='Password' type="password" placeholder="Password" autoComplete='current-password'  required/>
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Login</button>
      </div>
      <Link href='/auth/register'>
        <p className='text-center italic text-sm'>Register/klik disini jika belum daftar</p>
      </Link>
    </div>
    </form>
    </AuthLayout>  
  )
}
