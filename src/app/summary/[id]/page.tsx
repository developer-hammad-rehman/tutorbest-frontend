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
       <div className='lg:px-10 h-80 overflow-auto'>
         <div  className='bg-gray-100 border-2 rounded-2xl py-7 px-6'>
          <h1 className='text-2xl font-bold border-b-2 border-gray-500'>{title}</h1>
       <Suspense fallback={<div>Loading...</div>}><p>{data?data[0].summary:null}</p></Suspense>
        </div>
       </div>
  )
}