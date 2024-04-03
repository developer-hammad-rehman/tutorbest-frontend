'use client'
import  { type IUserfolder, type Userdata } from '@/utiltis/type'
import React, { useEffect, useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import fileImage  from '../../../public/file.png'
import Image from 'next/image'
import Link from 'next/link'
import { EllipsisVertical, Flag, Folder, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function Userdata() {
  const [data , setData] = useState<Userdata[]>()
  const [res , setRes]  = useState<IUserfolder[]>()
  useEffect(() => {
    const email = typeof window != 'undefined'?localStorage.getItem('email'):''
     fetch('/api/userdata',{
      method:"POST",
      body:email
     }).then(res=>res.json().then((data)=>{
      setData(data)
      console.log('data : ' , data);
    }))
    fetch(`/api/folder?q=${email}`).then((val) => val.json()).then((val) => {
    console.log(val);
     setRes(val)
    })
  },[])
  return (
    <div className='px-10 py-6 flex flex-col gap-10  w-full '>
     <h3 className='text-xl font-bold flex gap-x-4 items-center '>Recent Guide <AiOutlineQuestionCircle /></h3>
    <div className='h-full w-full flex items-center'>
    <div className='w-full h-full flex justify-center items-center gap-4 flex-wrap '>
       {/* @ts-ignore */}
    {data?.map((val , i) =>(
          <div  key={i}>
        <div   className='flex flex-col justify-center items-center  bg-gray-100 px-5 py-5 gap-4 border rounded-lg'>
          <Link href={`/summary/${val.id}`}>

          <Image src={fileImage} alt='fileimage' className='w-52'/>
          </Link>
          <div className='flex gap-4'>

          <p className='text-sm font-bold truncate w-20'>{val.filename}</p>
          <DropdownMenu>
  <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Setting</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className='flex agp-3'><Flag />Report</DropdownMenuItem>
    <DropdownMenuItem className='text-red-400 flex gap-3' onClick={() =>{
      fetch(`/api/userdata/${val.id}` , {
        method:"DELETE",
      }).then((val) => val.json()).then((val) => {
      console.log(val)
      window.location.reload()
    }
      )
      
    }}><Trash2 />Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          </div>
        </div>
          </div>
      ))}
    </div>
    </div>
      <h1 className='text-xl font-bold'>Folders</h1>
    <div className='flex gap-4  flex-wrap justify-center items-center'>
      {
        res?.map((items) =>(
        <Link href={`/dashboard/folder/${items.id}`} key={items.id} className='bg-gray-100 px-7 py-4 rounded-xl w-fit cursor-pointer flex gap-4' onClick={() =>{
          localStorage.removeItem('folderdata')
          localStorage.setItem('folderdata' , JSON.stringify({
            email: items.email,
            id:items.id,
            name:items.name
          }))
        }}><Folder />{items.name}</Link>
        ))
      }
    </div>
    </div>
  )
}
