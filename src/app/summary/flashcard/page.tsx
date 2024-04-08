'use client'
import React, { Suspense, useEffect, useState } from 'react'
interface Question {
  question: string;
  answer : string
}

interface AIQuestions {
  questions: Question[];
}
export default function Flashcard() {
  const id = typeof window != 'undefined'?String(localStorage.getItem('id')):0
  const [res , setRes] = useState<AIQuestions>()
  const [count , setCount] = useState<number>(0)
  const [loading , setLoading] = useState(false)
  const[swipe  , setSwipe] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`/api/flashcard?id=${id}`).then((val) => val.json()).then((val) => {
      console.log(val);
      setRes(val)
      setLoading(false)
    })
  },[])
  console.log(count);
  return (
    <div className='border-2 border-black rounded-lg px-5 py-4 mx-4 '>
      <h3 className='text-xl text-gray-600 border-b-4 border-gray-500 my-4'>Flashcard 📚</h3>
     {swipe?<div className='bg-green-300 px-10 py-10 font-semibold text-2xl text-center md:text-3xl lg:text-4xl'>
      {res?.questions[count].answer}
     </div>:<div className='bg-purple-200 px-10 py-10 font-semibold text-2xl text-center md:text-3xl lg:text-4xl'>
      {res?.questions[count].question}
     </div>}
<div className='flex justify-between w-full'>
<button className='bg-gray-400 p-4 text-white font-semibold mx-auto w-full' onClick={() => {
  count == 9  ? setCount(0) : setCount(count +  1)
  setSwipe(false)
}
  } disabled={loading}>
    {loading?"Loading....":"Next"}
    </button>
     <button className='bg-green-700 p-4 text-white font-semibold mx-auto w-full' onClick={() => {swipe ? setSwipe(false):setSwipe(true)}}>{loading?null:"Swipe"}</button>
</div>
    </div>
  )
}
