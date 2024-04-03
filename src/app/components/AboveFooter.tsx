import React from 'react'
import Image from "next/image"
import pic1 from "../../../public/ai.png"
import pic2 from "../../../public/5.png"


export default function AboveFooter() {
  return (
    <div className='flex flex-col gap-10' id='2'>
        <div className='py-4 px-7 sm:py-10 lg:flex items-center border-4 rounded-xl border-gray-800 sm:px-10 gap-3 bg-gradient-to-t from-[#301E57] to-[#0E0628] w-64 sm:w-auto'>
          <div className='flex flex-col gap-6'>
          <h1 className='text-2xl font-bold sm:text-4xl text-white'>Ai Chat</h1>
          <p className='text-white text-xs sm:text-base font-bold'>
          Connettiti con il tuo Tutor Al personale e ricevi risposte 24/7
          </p>
          </div>
<Image src={pic1} alt='pic1' className='w-96 '/>
        </div>
        <div className='py-4 px-7 sm:py-10 lg:flex items-center border-4 rounded-xl border-gray-800 sm:px-10 gap-3 bg-gradient-to-t from-[#301E57] to-[#0E0628] w-64 sm:w-auto'>
<Image src={pic2} alt='pic1' className='w-96 '/>
          <div className='flex flex-col gap-6'>
          <h1 className='text-2xl font-bold sm:text-4xl text-white'>Organizzazione dello studio</h1>
          <p className='text-white text-xs sm:text-base font-bold'>
          Carica il tuo materiale di studio. Verrà suddiviso in parti più gestibili, in modo che tu ti senta più sicuro in ogni fase del percorso
          </p>
          </div>
        </div>
    </div>
  )
}
