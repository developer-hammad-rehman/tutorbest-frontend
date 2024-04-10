'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function HoverButton({text} :{text:string}) {
  const {push} = useRouter()
  return (
    <button className='px-8 py-3 border-4 border-purple-200 rounded-full text-purple-700' onClick={() => push('/dashboard')}>{text}</button>
  )
}
