"use client"
import { useCookies } from 'next-client-cookies'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Plans() {
    const searchParams = useSearchParams()
    const token = searchParams.get("code")
    const email = searchParams.get("email")
    const cookies = useCookies()
    useEffect(() => {
        if(token && email){
           cookies.set("token", token)
           cookies.set("email", email)
        }
    })
  return (
    <div className='w-full h-full py-4 gap-6 flex flex-wrap lg:flex-nowrap justify-center items-center bg-gradient-to-tr from-[#2D155E] to-black'>
   <div className='flex flex-col h-96 gap-10 border-2  bg-gradient-to-t from-[#301E57] to-[#0E0628] border-gray-800 px-8 py-5'>
  <div className='flex justify-between'>
    <h5 className='text-2xl text-white'>Piano mensile</h5>
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1397 10.5593L18.0286 11.2008L14.8185 5.64151L15.9296 5L19.1397 10.5593ZM5.18945 11.2008L6.30055 10.5593L9.51066 16.1199L8.39957 16.7614L5.18945 11.2008ZM35.1903 16.7614L34.0792 16.1199L37.2893 10.5593L38.4004 11.2008L35.1903 16.7614ZM27.659 5L28.7713 5.64151L25.5612 11.2008L24.4501 10.5593L27.659 5ZM24.4514 33.4407L25.5625 32.7992L28.7726 38.3585L27.6615 39L24.4514 33.4407ZM38.4017 32.7992L37.2906 33.4407L34.0805 27.8801L35.1916 27.2386L38.4017 32.7992ZM8.40085 27.2386L9.51194 27.8801L6.30183 33.4407L5.19074 32.7992L8.40085 27.2386ZM15.9322 39L14.8198 38.3585L18.0299 32.7992L19.141 33.4407L15.9309 39H15.9322Z" fill="white" fill-opacity="0.5"/>
<path d="M18.9503 22.6415L16.1109 27.5593L18.9503 32.4784H24.6302L27.4695 27.5593L24.6302 22.6415H18.9503ZM18.9503 21.3584H24.6302L27.4695 16.4406L24.6302 11.5215H18.9503L16.1109 16.4406L18.9503 21.3584ZM14.9986 15.7991L18.21 10.2385H25.3705L28.5806 15.7991H35.0008L38.5805 22L35.0008 28.2008H28.5806L25.3705 33.7614H18.2112L15.0011 28.2008H8.58091L5 22L8.57962 15.7991H14.9986ZM34.2592 26.9178L37.0998 22L34.2592 17.0821H28.5806L25.7426 22L28.5819 26.9178H34.2592ZM14.9998 26.9178L17.8392 22L14.9998 17.0821H9.31993L6.4806 22L9.32121 26.9178H14.9998Z" fill="white"/>
</svg>
  </div>
<div className='flex flex-col gap-10 '>
<h1 className="bg-gradient-to-r from-purple-600  to-pink-400 text-transparent bg-clip-text text-3xl">
24.90 CHF/€
<span className='text-white text-base'>Monthly</span>
</h1>
<ul className='text-white list-item'>
    <li>* 24.90 CHF/€</li>
    <li>* Nessuno sconto</li>
</ul>
    <Link href={'/api/checkout?subscription=month&amount=25'} className='p-3 bg-[#151225] font-bold text-white' >Abbonati -{">"}</Link>
</div>
   </div>
   <div className='flex flex-col h-96 gap-10 border-2  bg-gradient-to-t from-[#301E57] to-[#0E0628] border-gray-800 px-8 py-5'>
  <div className='flex justify-between'>
    <h5 className='text-2xl text-white'>Piano annuale</h5>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.6816 13.7328L32.8825 9.5332L33.7728 10.4235L24.5122 19.6854L23.6219 18.7951L27.7901 14.6256C26.4599 13.4665 24.8242 12.7146 23.0783 12.4597C21.3324 12.2049 19.55 12.4579 17.944 13.1886C16.338 13.9192 14.9762 15.0966 14.0211 16.5802C13.0661 18.0638 12.5582 19.7909 12.5581 21.5554C12.5582 23.3198 13.0661 25.0469 14.0211 26.5305C14.9762 28.0141 16.338 29.1915 17.944 29.9221C19.55 30.6528 21.3324 30.9058 23.0783 30.651C24.8242 30.3961 26.4599 29.6442 27.7901 28.4851L23.6207 24.3144L24.511 23.4241L33.7716 32.6847L32.8813 33.5762L28.6829 29.3766C27.1759 30.7121 25.3152 31.5839 23.3246 31.8872C21.3339 32.1904 19.298 31.9121 17.4618 31.0858C15.6255 30.2595 14.067 28.9204 12.9737 27.2294C11.8803 25.5385 11.2988 23.5677 11.2988 21.5541C11.2992 19.5408 11.881 17.5705 12.9744 15.88C14.0677 14.1894 15.6261 12.8507 17.4621 12.0246C19.2981 11.1985 21.3336 10.9203 23.3239 11.2233C25.3142 11.5263 27.1747 12.3978 28.6816 13.7328Z" fill="white" fill-opacity="0.5"/>
<path d="M22 39C12.611 39 5 31.389 5 22C5 12.611 12.611 5 22 5C31.389 5 39 12.611 39 22C39 31.389 31.389 39 22 39ZM22 37.7407C30.6939 37.7407 37.7407 30.6939 37.7407 22C37.7407 13.3061 30.6939 6.25926 22 6.25926C13.3061 6.25926 6.25926 13.3061 6.25926 22C6.25926 30.6939 13.3061 37.7407 22 37.7407ZM22 25.9037C20.9647 25.9037 19.9717 25.4924 19.2397 24.7603C18.5076 24.0282 18.0963 23.0353 18.0963 22C18.0963 20.9647 18.5076 19.9717 19.2397 19.2397C19.9717 18.5076 20.9647 18.0963 22 18.0963C23.0353 18.0963 24.0282 18.5076 24.7603 19.2397C25.4924 19.9717 25.9037 20.9647 25.9037 22C25.9037 23.0353 25.4924 24.0282 24.7603 24.7603C24.0282 25.4924 23.0353 25.9037 22 25.9037ZM22 24.6444C22.7013 24.6444 23.374 24.3658 23.8699 23.8699C24.3658 23.374 24.6444 22.7013 24.6444 22C24.6444 21.2986 24.3658 20.626 23.8699 20.1301C23.374 19.6342 22.7013 19.3556 22 19.3556C21.2986 19.3556 20.626 19.6342 20.1301 20.1301C19.6342 20.626 19.3556 21.2986 19.3556 22C19.3556 22.7013 19.6342 23.374 20.1301 23.8699C20.626 24.3658 21.2986 24.6444 22 24.6444Z" fill="white"/>
</svg>

  </div>
<div className='flex flex-col gap-10 '>
<h1 className="bg-gradient-to-r from-purple-600  to-pink-400 text-transparent bg-clip-text text-3xl">
202.80 CHF/€
<span className='text-white text-base'>Yearly</span>
</h1>
<ul className='text-white list-item'>
    <li>* 202.80 CHF/€</li>
    <li>* Sconto del 40%</li>
</ul>
<Link href={'/api/checkout?subscription=year&amount=203'} className='p-3 bg-[#151225] font-bold text-white' >Abbonati -{">"}</Link>
</div>
   </div>
    </div>
  )
}
