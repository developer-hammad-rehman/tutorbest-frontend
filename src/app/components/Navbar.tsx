'use client'
import React from 'react'
import logo from "../../../public/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
const router = useRouter()
const path = usePathname()
 if (path.startsWith('/dashboard') || path.startsWith('/summary')) {
  return null
 } else {
  return (
    <header className='bg-[#0E0628] flex justify-around items-center p-3 sticky top-0 z-50 ' >
        <Image src={logo} alt='Logo' className='w-32 cursor-pointer bg-white rounded-xl' onClick={() => router.push('/')}/>
        <ul className='text-white hidden sm:flex gap-4 ' >
            <li className='hover:border hover:border-gray-700 hover:bg-gray-700 cursor-pointer font-bold p-2 rounded-full'><Link href={'/#1'}>Home</Link></li>
            <li className='hover:border hover:border-gray-700 hover:bg-gray-700 cursor-pointer font-bold p-2 rounded-full'><Link href={'/#2'}>Tools</Link></li>
            <li className='hover:border hover:border-gray-700 hover:bg-gray-700 cursor-pointer font-bold p-2 rounded-full'><Link href={'/#3'}>Prezi</Link></li>
        </ul>
        <div className='text-white flex gap-5'>
            <button onClick={() => router.push('/sigin')}>Login</button>
            <button className='bg-purple-700 p-3 font-bold rounded-2xl' onClick={() => router.push('/signup')}> Sign Up -{">"}</button>
        </div>
    </header>
  )
 }
}
