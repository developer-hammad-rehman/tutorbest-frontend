import React from 'react'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

export default function layout({
    children,
  }:{
    children: React.ReactNode;
  }) {
  return (
    <div className='bg-white h-screen w-full  flex'>
      <SideBar/>
      <div className='w-full h-full overflow-scroll'>
      <NavBar/>
        {children}
      </div>
    </div>
  )
}
