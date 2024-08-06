'use client'
import React, { useEffect, useState } from 'react'
import logo from "../../../../public/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { CiMenuBurger } from 'react-icons/ci'

export default function Navbar() {
    const email = typeof window != 'undefined'?localStorage.getItem('email'):''
    const [isClient , setClient] = useState(false)
  useEffect(() => {
    setClient(true)
  })
  return (
   <header className='flex justify-between items-center border px-6'>
    <Link href={'/'}>
        <Image src={logo} alt='logo' className='w-20 sm:w-36'/>
    </Link >
    {isClient?<div className='hidden lg:flex lg:text-base'>
        | {email}
    </div>:null}
    <Link href={'/routes'} className='flex lg:hidden'>
    <CiMenuBurger />
    </Link>
   </header>
  )
}
