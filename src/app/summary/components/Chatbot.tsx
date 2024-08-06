'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import logo from '../../../../public/logo1.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RiLoader4Fill } from 'react-icons/ri'

interface Input {
    input: string;
  }
  
  interface Response {
    question: string;
    answer: string;
  }
  
  export default function Chatbot() {
    const { handleSubmit, reset, register } = useForm<Input>();
    const [res, setRes] = useState<Response[]>([]);
    const [loading, setLoading] = useState(false);
  
    const onSubmit : SubmitHandler<Input> = async (data) => {
      console.log(data);
      setLoading(true);
      try {
        const response = await fetch('/api/chatbot', {
          method: "POST",
          body: data.input
        });
        const fetcher = await response.json();
        console.log(fetcher);
        setRes(res => [...res, {
          question: data.input,
          answer: fetcher.message
        }]);
      } catch (error) {
        console.error('Error fetching:', error);
      } finally {
        setLoading(false);
        reset();
      }
    };
  
    return (
      <div className='flex flex-col bg-gray-100 border rounded-lg h-full overflow-auto'>
        <h1 className='text-3xl font-bold mx-auto py-4 italic border-b-2 border-gray-500 tracking-widest'>Chat Bot</h1>
        <div className='flex flex-col gap-4 px-4 py-3 overflow-y-auto'>
          {res.map((val, index) => (
            <React.Fragment key={index}>
              <div className='bg-purple-300 w-full p-2 my-2 rounded-md text-white self-end'>
                {val.question}
              </div>
              <div className='flex items-center gap-4 bg-white p-2 my-2 rounded-lg shadow'>
                <Image src={logo} alt='logo' width={56} height={56} className='rounded-full'/>
                <div className='text-gray-800'>
                  {val.answer}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <form className='flex gap-3 items-center p-4' onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className='flex-1 border-2 border-purple-300 p-2 rounded' placeholder='Enter Your Input' {...register("input", { required: true })} />
          <button type="submit" className='bg-purple-500 p-2 rounded-full text-white'>
            {loading ? <RiLoader4Fill className="animate-spin text-xl" /> : <FaPaperPlane />}
          </button>
        </form>
      </div>
    );
  }