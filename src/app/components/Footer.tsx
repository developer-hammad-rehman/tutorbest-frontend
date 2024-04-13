'use client'
import React from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
export default function Footer() {
  const router = useRouter()
  const path = usePathname()
 if (path.startsWith('/summary')) {
  return null
 }else{
  return<div className='border-t-2  border-gray-800   flex flex-col lg:flex-row w-full items-center justify-between px-5 gap-4 bg-gradient-to-tr from-[#2D155E] to-black'>
  <div className='text-white'>
  <Image src={logo} alt='logo' className='w-40 cursor-pointer' onClick={() => router.push('/')}/>
  @Copyright 2024
  </div>
  <div>
  <h5 className='text-xl font-bold text-gray-50'>Website</h5>
  <ul className='flex flex-col gap-2 justify-center items-center text-gray-400'>
    <Link href={'/sigin'}>Sigin</Link>
    <Link href={'/sigup'}>SigUp</Link>
  </ul>
  </div>
  <div>
  <h5 className='text-xl font-bold text-gray-50'>SOCIAL MEDIA</h5>
  <ul className='flex flex-col gap-2 justify-center items-center text-gray-400'>
    <Link href={'https://www.instagram.com'}>Instagram</Link>
    <Link href={'/https://www.facebook.com'}>Facebook</Link>
    <Link href={'https://www.linkedin.com'}>Linkdien</Link>
  </ul>
  </div>
  <div>
  <h5 className='text-xl font-bold text-gray-50'>PAGES</h5>
  <ul className='flex flex-col gap-2 justify-center items-center text-gray-400'>
    <Link href={'#'}>Tools</Link>
    <Link href={'/privicay-policy'}>Privacy </Link>
    <Link href={'/privicay-policy'}>Terms</Link>
  </ul>
  </div>
  </div>
 }
}
