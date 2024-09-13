import { Metadata } from 'next'
import React from 'react'
import "./globals.css"

export const metadata: Metadata = {
  title: "MoneyMapper",
  description: "Web Aplication for personal finance adminitration"
}

const RootLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <html lang="en" className='h-full overflow-hidden'>
        <body className='p-24 bg-gradient-to-b from-pink-200 to-pink-950'>
          <section className='background'>
            <figure className='w-96 h-96 rounded-full absolute bg-pink-50 glass top-0 left-0'></figure>
            <figure className='w-96 h-96 rounded-full absolute bg-pink-100 glass top-20 left-3/4'></figure>
            <figure className='w-96 h-96 rounded-full absolute bg-pink-200 glass top-56 left-1/4'></figure>
            <figure className='w-96 h-96 rounded-full absolute bg-pink-300 glass top-1/4 left-3/4'></figure>
            <figure className='w-96 h-96 rounded-full absolute bg-pink-400 glass top-1/3 left-1/5'></figure>
            <figure className='w-96 h-96 rounded-full absolute bg-pink-500 glass top-1/2 left-1/4'></figure>
            <figure className='w-80 h-80 rounded-full absolute bg-pink-600 glass top-2/3 left-0'></figure>
            <figure className='w-96 h-96 rounded-full absolute bg-pink-700 glass top-3/4 left-2/3'></figure>
          </section>
            { children }
        </body>
    </html>
  )
}

export default RootLayout