'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import placeholder from '../../../../public/img1.jpg'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { LoaderCircle, PackageOpen, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCookies } from 'next-client-cookies'

export default function NavBar() {
  const [isLoading, setLoading] = useState(false);
  const {refresh} = useRouter()
  const cookies= useCookies()
  if(cookies.get('email')){
    const cookiesEmail = cookies.get('email') as string
    console.log(cookiesEmail);
    const loacalEmail = typeof window != 'undefined'?(localStorage.getItem('email')?null:localStorage.setItem('email' , cookiesEmail)):null
  }
   const email = typeof window != 'undefined' ? localStorage.getItem('email') : ''
  const handlerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try{
      setLoading(true);
    const list = e.target.files as FileList;
    const file = list[0];
    const formdata = new FormData();
    formdata.append("file", file);
    console.log(formdata.get('file'));
    const fetcher = await (
      await fetch("https://tutorbest-vercel-fastapi.vercel.app/fileupload", {
        method: "POST",
        body: formdata,
      })
      
    ).json();
    setLoading(false);
    console.log(fetcher);
    const email = localStorage.getItem("email");

    
    const fetcher2 = await (
      await fetch("api/usercreate", {
        method: "POST",
        body: JSON.stringify({ email: email, filename: file.name }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    console.log(fetcher2);
    window.location.reload()
    }catch(srror){
      setLoading(false)
      alert("Something Went Wrong")
    }
  };
  return (
   <header className='flex justify-between px-2 py-2 items-center border-b border-gray-300 gap-3'>
    <input type="search" placeholder='Search Front' className='py-3 px-3 sm:px-5'/>
    
    <AlertDialog>
  <AlertDialogTrigger><Image src={placeholder} alt='' className='w-10 border rounded-full'/></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className='text-black '>User Profile</AlertDialogTitle>
      <AlertDialogDescription className='flex flex-col justify-center items-center gap-10'>
      <Image src={placeholder} alt='' className='w-40 border rounded-full'/>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-xl font-bold'>Email</h3>
        <p className='p-2 border border-black'>{email}</p>
      </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={() =>{
        localStorage.clear()
       fetch('/api/logout').then((val) => val.json()).then((val) => {
        refresh()
        console.log(val)})
      }}> Logout</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    <AlertDialog>
  <AlertDialogTrigger className='flex sm:hidden'><Plus /></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className='text-black '>Upload file</AlertDialogTitle>
      <AlertDialogDescription className='flex flex-col justify-center items-center gap-10'>
      <PackageOpen size={50}/>
      <div>
      {
        isLoading?<div className='flex gap-3'><LoaderCircle className='animate-spin'/> Uploading File</div>:<div>
          <label htmlFor="file" className='p-4 bg-gray-300'>Browse File</label>
          <input
              type="file"
              id="file"
              className="hidden"
              onChange={handlerUpload}
              accept=".pdf"
            />
        </div>
      }
      </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

   </header>
  )
}
