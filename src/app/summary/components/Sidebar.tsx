'use client'
import React from 'react'
import Button from './Link'
import HoverButton from './Button'

export default function Sidebar() {
  const id = typeof window != 'undefined'?String(localStorage.getItem('id')):0
  return (
    <div className='bg-gray-50 border-2 border-white  shadow-2xl w-full h-full flex flex-col justify-between py-10 px-10'>
    <div className='flex flex-col gap-5'>
    <Button href={`/summary/${id}`} text='Study Guide'/>
    <Button href='/summary/question' text='Question'/>
    <Button href='/summary/flashcard' text='Flashcard'/>
    </div>
    {/* <HoverButton text='View Lesson'/> */}
    </div>
  )
}
