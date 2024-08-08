'use client';

import Link from 'next/link'
import React from 'react'

export default function Route() {
   if (typeof window != 'undefined') {
     const id = localStorage.getItem("id")
     return (
       <div className='flex flex-col w-full h-screen gap-10 py-10 bg-[#0E0628]'>
           <Link href={`/summary/${id}`} className='bg-gray-200 p-4 text-xl text-center font-bold'>Riassunto</Link>
           <Link href={`/summary/question?id=${id}`} className='bg-gray-200 p-4 text-xl text-center font-bold'>Test</Link>
           <Link href={`/summary/flashcard?id=${id}`} className='bg-gray-200 p-4 text-xl text-center font-bold'>Flashcard</Link>
           <Link href={`/dashboard`} className='bg-gray-200 p-4 text-xl text-center font-bold'>Dashboard</Link>
           <Link href={`/chatbot`} className='bg-gray-200 p-4 text-xl text-center font-bold'>Chatbot</Link>
       </div>
     )
    
   }

}
