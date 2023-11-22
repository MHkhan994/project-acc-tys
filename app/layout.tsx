import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/Pages/Shared/Navbar'
import Footer from '@/app/Pages/Shared/Footer'

export const metadata: Metadata = {
  title: 'ACC - Home',
  description: "WELCOME TO THE WORLD OF ACC",
}

const RootLayout = ({ children, }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}

export default RootLayout
