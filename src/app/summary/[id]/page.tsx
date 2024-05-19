'use client'
import { Switch } from '@/components/ui/switch';
import { UserAi } from '@/utiltis/type';
import React, { Suspense, useEffect, useState } from 'react'
import Markdown from 'react-markdown';

export default function Summary({params} : {params : {id : number}}) {
  const [data , setData] = React.useState<UserAi[]>()
  const [title , setTittle] = useState<string>()
  const [bionic , setBionic] = useState<boolean>(false)
    console.log(params.id);
    useEffect(() => {
      fetch(`/api/userid/${params.id}`,{cache:'no-store'}).then((val) => val.json()).then(val => {
        console.log(val[0].summary)
        setData(val)
        localStorage.removeItem('id')
        localStorage.setItem('id' , String(params.id))
      }
      )
      fetch(`/api/tittle?id=${params.id}`).then((val) => val.json()).then((val) =>{
        console.log(val);
        setTittle(val)
      })
    },[])
  return (
       <div className='lg:px-10'>
         <div  className='bg-white border-2 border-gray-100 rounded-2xl py-7 px-6'>
          <div className='border-b-2 border-gray-500  flex justify-between w-full'>
          <h1 className='font-bold text-xl w-60 truncate'>{title}&ldquo;</h1>
          <div className='flex items-center justify-center gap-3'><span>Bionic Read</span><Switch onCheckedChange={() => bionic? setBionic(false) : setBionic(true)}/></div>
          </div>
       <Suspense fallback={<div>Loading...</div>}><Markdown className={bionic?"h-80 overflow-y-scroll overflow-x-hidden text-xl font-semibold italic font-serif":'h-80 overflow-y-scroll overflow-x-hidden'}>{data?data[0].summary:null}</Markdown></Suspense>
        </div>
       </div>
  )
}