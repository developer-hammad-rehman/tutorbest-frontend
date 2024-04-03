import React from 'react'
import Link from 'next/link'
export default function Button({text , href} : {text:string , href:string}) {
  return (
    <Link href={href} className='bg-indigo-200 px-10 py-5 text-purple-400 font-bold text-xl border-2 border-purple-200 hover:border-purple-500'>{text}</Link>

  )
}
