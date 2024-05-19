'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import logo from '../../../../public/logo1.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RiLoader4Fill } from 'react-icons/ri'
interface Input{
    input:string
}
interface Response{
    question:string
    answer:string
}
export default function Chatbot() {
   const {handleSubmit , reset ,register} =  useForm<Input>()
   const [res ,  setRes] = useState<Response[]>([])
   const [loading , setLoading] = useState(false)
   const onSumbit : SubmitHandler<Input> = async (data) => {
    console.log(data);
    setLoading(true)
    const fetcher = await (await fetch('/api/chatbot',{
        method:"POST",
        body:data.input
    })).json()
    console.log(fetcher);
    setRes([...res , {
question:data.input,
answer:fetcher.message
    }])
    setLoading(false)
    reset()
   }
  return (
    <div className= 'hidden sm:flex sm:flex-col bg-gray-100 border rounded-lg h-64 overflow-auto'>
        <h1 className='text-3xl font-bold mx-auto py-4 italic border-b-2 border-b-gray-500 tracking-widest'>Chat Bot</h1>
        <div>
        <div className='h-full w-full px-4 py-3 flex flex-col gap-4'>
        {
            res.map((val , i) => (
            <>
            <div className='bg-gray-200 w-fit px-2 py-4 rounded-md' key={i}>
            {val.question}
        </div>
        <div className='flex items-start gap-4 bg-gray-50 rounded-lg' key={i}>
           <Image src={logo} alt='logo' className='w-14'/>
           <div>
            {val.answer}
           </div>
        </div>
            </>
            ))
        }
        </div>
       <form className='flex gap-3 items-center px-2' onSubmit={handleSubmit(onSumbit)}>
        <input type="text" className='border-purple-50 p-4' placeholder='Enter Your Input' {...register("input",{required:true})}/>
        <button>{loading? <RiLoader4Fill className="animate-spin text-xl"/> :<FaPaperPlane />}</button>
       </form>
        </div>
    </div>
  )
}
