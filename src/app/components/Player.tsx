'use client'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
export default function Player () {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className='flex justify-center items-center w-full'>
        {isClient ? <ReactPlayer  url='https://www.youtube.com/watch?v=H03wb1cZCSQ' controls={true} width={1000}/>:null}
    </div>
  )
}
