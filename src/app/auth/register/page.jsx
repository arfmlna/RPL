'use client'
import React from 'react'
import AuthLayout from '../layout'
import { Auth } from '@/lib/auth'
import { fail, succes } from '@/components/alert/succes'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  async function getRegister(form) {
    const Name = form.get('Name')
    const Email = form.get('Email')
    const Password = form.get('Password')
    const err = await Auth(Email, Password, Name)
    if (err) {
      console.log(err)
      fail('Register', 'Register Gagal', 'error', 'Coba Lagi!')
    } else {
      succes('Register', 'Register Berhasil', 'success', 'Login!')
      router.push('/auth/login')
    }
  }
  return (
    <AuthLayout>
    <form action={getRegister} className='grid place-items-center grid-cols-1 mx-auto h-[100vh]'>
    <div className='bg-slate-300 w-80 p-4 rounded-lg shadow-lg'>
      <h1 className='text-center font-extrabold text-4xl py-5'>Registrasi</h1>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Username</label>
        <input className='p-1 rounded-md' name='Name' type="text" placeholder="Name" required />
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Email</label>
        <input className='p-1 rounded-md' name='Email' type="email" placeholder="Email" autoComplete='username' required />
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <label>Password</label>
        <input className='p-1 rounded-md' name='Password' type="password" placeholder="Password" autoComplete='current-password' required />
      </div>
      <div className='mb-7 flex flex-col gap-1'>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Register</button>
      </div>
    </div>
    </form>
    </AuthLayout>  
  )
}
