'use client'
import React from 'react'
import Button from './Link'
import HoverButton from './Button'
import { CreditCard, FileQuestion, StickyNote } from 'lucide-react'

export default function Sidebar() {
  const id = typeof window != 'undefined'?String(localStorage.getItem('id')):0
  
  return (
    <div className='bg-gray-50 border-2 border-white  shadow-2xl w-full h-full flex flex-col justify-between py-10 px-10'>
    <div className='flex flex-col gap-5'>
    <Button icon={<StickyNote />}  href={`/summary/${id}`} text='Riassunto'/>
    <Button  icon={<FileQuestion />} href='/summary/question' text='Domande'/>
    <Button  icon={<CreditCard />} href='/summary/flashcard' text='Flashcard'/>
    </div>
    <HoverButton text='Dashboard ->'/>
    <div className='text-sm text-center font-bold font-serif text-gray-500'>
    &#169; 2024 Tutorbest.
    </div>
    </div>
  )
}