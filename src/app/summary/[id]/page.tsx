'use client'
import { UserAi } from '@/utiltis/type';
import React, { Suspense, useEffect, useState } from 'react'

export default function Summary({params} : {params : {id : number}}) {
  const [data , setData] = React.useState<UserAi[]>()
  const [title , setTittle] = useState<string>()
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
          <h1 className='text-2xl font-bold border-b-2 border-gray-500'>{title}&ldquo;</h1>
       <Suspense fallback={<div>Loading...</div>}><p className='h-80 overflow-y-scroll overflow-x-hidden'>{data?data[0].summary:null}</p></Suspense>
        </div>
       </div>
  )
}