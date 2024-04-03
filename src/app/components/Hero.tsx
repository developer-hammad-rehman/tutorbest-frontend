'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Hero () {
  const {push} = useRouter()
  return (
    <div className='w-full  h-screen flex flex-col justify-center items-center gap-6'>
        <h1 className='text-center text-3xl sm:text-5xl px-10 font-bold text-white'>Crea riassunti, flashcards, mappe mentali e quiz dai tuoi materiali di studio</h1>
        <button className='bg-[#894FEE] p-4 font-bold text-white rounded-2xl' onClick={() => push('/dashboard')}>Intiza</button>
    </div>
  )
}
