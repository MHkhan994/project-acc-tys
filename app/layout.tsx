import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Pages/Shared/Navbar'

export const metadata: Metadata = {
  title: 'ACC - Home',
  description: "WELCOME TO THE WORLD OF ACC",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
