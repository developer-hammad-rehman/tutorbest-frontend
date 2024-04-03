import React from 'react'

export default function HoverButton({text} :{text:string}) {
  return (
    <button className='px-8 py-3 border-4 border-purple-200 rounded-md text-purple-700'>{text}</button>
  )
}
