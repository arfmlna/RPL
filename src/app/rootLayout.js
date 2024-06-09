import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

export default function rootLayout({ children }) {
  return (
    <>
        <Navbar />
         { children }
        <Footer />
    </>
  )
}
