'use client';
import React from 'react'
import Image from 'next/image'
import pic1 from "../../../public/1.png"
import pic2 from "../../../public/2.png"
import pic3 from "../../../public/3.png"
import { useRouter } from 'next/navigation';
export default function Card() {
  const {push} = useRouter()
  return (
    <div className='w-full flex flex-col items-center justify-center gap-y-40 px-16'>
        <h3 className='text-3xl sm:text-5xl text-center text-white font-bold'>Gli studenti di tutto il mondo adorano TutorBest!</h3>
        <div className='py-4 px-7 sm:py-10 lg:flex items-center border-4 rounded-xl border-gray-800 sm:px-10 gap-3 bg-gradient-to-t from-[#301E57] to-[#0E0628] w-64 sm:w-auto'>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-3 items-center text-xs sm:text-base text-white bg-[#180C39] w-fit p-5 rounded-full'>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.72801 5.05899C5.85579 4.71367 6.34421 4.71367 6.47199 5.05899L7.7508 8.51488C7.79096 8.62344 7.87656 8.70904 7.98512 8.7492L11.441 10.028C11.7863 10.1558 11.7863 10.6442 11.441 10.772L7.98512 12.0508C7.87656 12.091 7.79096 12.1766 7.7508 12.2851L6.47199 15.741C6.34421 16.0863 5.85579 16.0863 5.72801 15.741L4.44921 12.2851C4.40904 12.1766 4.32344 12.091 4.21487 12.0508L0.75899 10.772C0.41367 10.6442 0.41367 10.1558 0.75899 10.028L4.21487 8.7492C4.32344 8.70904 4.40904 8.62344 4.44921 8.51488L5.72801 5.05899Z" fill="url(#paint0_linear_484_5398)"/>
<path d="M5.72801 5.05899C5.85579 4.71367 6.34421 4.71367 6.47199 5.05899L7.7508 8.51488C7.79096 8.62344 7.87656 8.70904 7.98512 8.7492L11.441 10.028C11.7863 10.1558 11.7863 10.6442 11.441 10.772L7.98512 12.0508C7.87656 12.091 7.79096 12.1766 7.7508 12.2851L6.47199 15.741C6.34421 16.0863 5.85579 16.0863 5.72801 15.741L4.44921 12.2851C4.40904 12.1766 4.32344 12.091 4.21487 12.0508L0.75899 10.772C0.41367 10.6442 0.41367 10.1558 0.75899 10.028L4.21487 8.7492C4.32344 8.70904 4.40904 8.62344 4.44921 8.51488L5.72801 5.05899Z" fill="white" fill-opacity="0.4"/>
<path d="M9.73216 0.256128C9.85848 -0.085376 10.3415 -0.085376 10.4678 0.256128L10.885 1.38329C10.9247 1.49066 11.0094 1.5753 11.1167 1.61504L12.2438 2.03212C12.5854 2.15849 12.5854 2.64151 12.2438 2.76788L11.1167 3.18496C11.0094 3.2247 10.9247 3.30934 10.885 3.41671L10.4678 4.54387C10.3415 4.88538 9.85848 4.88538 9.73216 4.54387L9.31504 3.41671C9.27528 3.30934 9.19064 3.2247 9.08328 3.18496L7.95616 2.76788C7.61464 2.64151 7.61464 2.15849 7.95616 2.03212L9.08328 1.61504C9.19064 1.5753 9.27528 1.49066 9.31504 1.38329L9.73216 0.256128Z" fill="url(#paint1_linear_484_5398)"/>
<path d="M9.73216 0.256128C9.85848 -0.085376 10.3415 -0.085376 10.4678 0.256128L10.885 1.38329C10.9247 1.49066 11.0094 1.5753 11.1167 1.61504L12.2438 2.03212C12.5854 2.15849 12.5854 2.64151 12.2438 2.76788L11.1167 3.18496C11.0094 3.2247 10.9247 3.30934 10.885 3.41671L10.4678 4.54387C10.3415 4.88538 9.85848 4.88538 9.73216 4.54387L9.31504 3.41671C9.27528 3.30934 9.19064 3.2247 9.08328 3.18496L7.95616 2.76788C7.61464 2.64151 7.61464 2.15849 7.95616 2.03212L9.08328 1.61504C9.19064 1.5753 9.27528 1.49066 9.31504 1.38329L9.73216 0.256128Z" fill="white" fill-opacity="0.4"/>
<path d="M14.6547 5.77075C14.739 5.54308 15.061 5.54308 15.1453 5.77075L15.4233 6.52216C15.4498 6.59376 15.5062 6.65024 15.5778 6.67672L16.3293 6.95472C16.5569 7.03896 16.5569 7.36104 16.3293 7.44528L15.5778 7.72328C15.5062 7.74976 15.4498 7.80624 15.4233 7.87784L15.1453 8.62928C15.061 8.85688 14.739 8.85688 14.6547 8.62928L14.3767 7.87784C14.3502 7.80624 14.2938 7.74976 14.2222 7.72328L13.4707 7.44528C13.2431 7.36104 13.2431 7.03896 13.4707 6.95472L14.2222 6.67672C14.2938 6.65024 14.3502 6.59376 14.3767 6.52216L14.6547 5.77075Z" fill="url(#paint2_linear_484_5398)"/>
<path d="M14.6547 5.77075C14.739 5.54308 15.061 5.54308 15.1453 5.77075L15.4233 6.52216C15.4498 6.59376 15.5062 6.65024 15.5778 6.67672L16.3293 6.95472C16.5569 7.03896 16.5569 7.36104 16.3293 7.44528L15.5778 7.72328C15.5062 7.74976 15.4498 7.80624 15.4233 7.87784L15.1453 8.62928C15.061 8.85688 14.739 8.85688 14.6547 8.62928L14.3767 7.87784C14.3502 7.80624 14.2938 7.74976 14.2222 7.72328L13.4707 7.44528C13.2431 7.36104 13.2431 7.03896 13.4707 6.95472L14.2222 6.67672C14.2938 6.65024 14.3502 6.59376 14.3767 6.52216L14.6547 5.77075Z" fill="white" fill-opacity="0.4"/>
<defs>
<linearGradient id="paint0_linear_484_5398" x1="0.5" y1="0" x2="16.5002" y2="0.000206102" gradientUnits="userSpaceOnUse">
<stop offset="0.0001" stop-color="#E59CFF"/>
<stop offset="0.5001" stop-color="#BA9CFF"/>
<stop offset="1" stop-color="#9CB2FF"/>
</linearGradient>
<linearGradient id="paint1_linear_484_5398" x1="0.5" y1="0" x2="16.5002" y2="0.000206102" gradientUnits="userSpaceOnUse">
<stop offset="0.0001" stop-color="#E59CFF"/>
<stop offset="0.5001" stop-color="#BA9CFF"/>
<stop offset="1" stop-color="#9CB2FF"/>
</linearGradient>
<linearGradient id="paint2_linear_484_5398" x1="0.5" y1="0" x2="16.5002" y2="0.000206102" gradientUnits="userSpaceOnUse">
<stop offset="0.0001" stop-color="#E59CFF"/>
<stop offset="0.5001" stop-color="#BA9CFF"/>
<stop offset="1" stop-color="#9CB2FF"/>
</linearGradient>
</defs>
</svg>
<div>
AI-Powered Writing Tool
</div>
            </div>
          <h1 className='text-sm sm:text-4xl text-white'>Affronta tutte le materie con maggiore serenità</h1>
          <p className='text-white text-xs sm:text-base font-bold'>
          Trasforma istantaneamente appunti, PDF, video e PowerPoint in:
<br />
- Riassunti
<br />
- Flashcards
<br />
- Mappe mentali
<br />
- Quiz
Inoltre accedi a:
- Chat Al personalizzata
- Tabelle di organizzazione di studio
- Trasformazione testi in Bionic Reading
          </p>
          <button className='bg-[#160E2D] font-semibold p-4 rounded-full border-2 border-purple-900 text-white' onClick={() => push('/dashboard')}>Intiza -{'>'}</button>
          </div>
<Image src={pic1} alt='pic1' className='w-96 hidden lg:flex'/>
        </div>
        <div className='flex flex-col sm:flex-row gap-20'>
        <div className='py-4 px-7  flex flex-col items-center border-4 rounded-xl border-gray-800  gap-3 bg-gradient-to-t from-[#301E57] to-[#0E0628] w-64 md:w-96'>
<Image src={pic2} alt='pic1' className='w-96'/>
          <div>
          <div className='flex flex-col gap-6'>
          <h1 className='text-xl font-semibold sm:text-4xl text-white'>Quiz</h1>
          <p className='text-white text-xs sm:text-base font-bold'>
          Dì addio alle infinite ricerche di domande e risposte. Inizia subito con il Quiz personalizzato
          </p>
          </div>
          </div>
        </div>
        <div className='py-4 px-7  flex flex-col items-center border-4 rounded-xl border-gray-800  gap-3 bg-gradient-to-t from-[#301E57] to-[#0E0628] w-64 md:w-96'>
<Image src={pic3} alt='pic1' className='w-96 '/>
          <div>
          <div className='flex flex-col gap-6'>
          <h1 className='text-xl font-bold sm:text-4xl text-white'>Flashcard</h1>
          <p className='text-white text-xs sm:text-base font-bold'>
          Dì addio alle infinite ricerche di domande e risposte. Inizia subito con il Quiz personalizzato
          </p>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}
