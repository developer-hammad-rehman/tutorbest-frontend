import React from 'react'
import Link from 'next/link'
export default function Button({text , href , icon} : {text:string , href:string , icon:any}) {
  return (
    <Link href={href} className='bg-violet-100 font-mono rounded-xl px-10 py-4 text-purple-400 font-bold text-sm border-2 border-purple-200 hover:border-purple-500 flex gap-x-6 '>{icon}{text}</Link>

  )
}
