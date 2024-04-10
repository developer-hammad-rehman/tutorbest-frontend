"use client";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../../../public/logo1.png";
import Image from "next/image";
import { CiClock2, CiFolderOn } from "react-icons/ci";
import { SiPowerpages } from "react-icons/si";
import { IoIosAdd } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { LuLoader2 } from "react-icons/lu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export default function SideBar() {
  const [isShow, setIsShow] = useState(false);
  const [isshow, setshow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [value , setValue] = useState('')
  const email = typeof window != 'undefined' ? localStorage.getItem('email') : ''
  const handleCLick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    fetch('/api/folder',{
      method:"POST",
      body:JSON.stringify({email:email , name:value}),
      headers:{
        "Content-Type" : 'application/json'
      }
    }).then((val)=> val.json()).then((val) =>{ 
      console.log(val)
      window.location.reload()
    })
  }
  const handlerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try{
      setLoading(true);
    const list = e.target.files as FileList;
    const file = list[0];
    const formdata = new FormData();
    formdata.append("file", file);
    console.log(formdata.get('file'));
    const fetcher = await (
      await fetch("https://tutorbest-vercel-fastapi.vercel.app/fileupload", {
        method: "POST",
        body: formdata,
      })
      
    ).json();
    setLoading(false);
    console.log(fetcher)
    const email = localStorage.getItem("email");

    
    const fetcher2 = await (
      await fetch("api/usercreate", {
        method: "POST",
        body: JSON.stringify({ email: email, filename: file.name }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    console.log(fetcher2);
    window.location.reload()
    }catch(error){
      setLoading(false)
      console.log('Error : ' + ((error as Error).message))
      alert("Something Went Wrong")
    }
  };
  return (
    <aside className="px-10 border-r-2 border-gray-300  w-1/3 hidden sm:flex flex-col items-center gap-16 overflow-auto py-7">
      {isshow ? (
        <div className="mx-auto w-1/2 h-80 bg-gray-100 absolute z-50 top-10 right-[90%] left-[40%] rounded-2xl flex flex-col justify-center items-center border-4 border-dotted">
          <div className="flex justify-between items-center w-full px-5">
            <span className="text-xl font-bold">Add File</span>
            <RxCross1
              className="cursor-pointer"
              onClick={(e) => setshow(false)}
            />
          </div>
          <div className="bg-gray-200 flex flex-col justify-center gap-7 items-center py-10 px-8 rounded-2xl">
            <div className="flex flex-col justify-center items-center">
              <BsBox size={80} className="text-gray-700 " />
              <h3 className="text-2xl font-bold">Upload The File Here</h3>
            </div>
            <label
              htmlFor="file"
              className="bg-gray-400 text-white font-bold px-5 py-3 cursor-pointer"
            >
              {isLoading ? (
                <div className="flex gap-3 items-center">
                  <LuLoader2 className="animate-spin" /> Browse File
                </div>
              ) : (
                "Browse File"
              )}
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handlerUpload}
              accept=".pdf"
            />
          </div>
        </div>
      ) : null}
      <Image src={logo} alt="logo" className="w-40" />
      <ul className="flex gap-5 flex-col ">
        <li
          className="bg-purple-500 text-xs sm:text-sm md:text-base lg:text-xl p-2 sm:p-3 md:p-4 lg:p-6 cursor-pointer  font-bold text-gray-50 rounded-xl flex gap-x-3 items-center"
          onClick={() => (isShow ? setIsShow(false) : setIsShow(true))}
        >
          <IoIosAdd />
          Nuovo
        </li>
        {isShow ? (
          <>
            <li
              className="hover:bg-gray-300 lg:p-6 cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-gray-950 rounded-xl flex gap-x-3 items-center p-2 md:p-3"
              onClick={() => setshow(true)}
            >
              <IoIosAdd />
              Progetto
            </li>
            <li className="hover:bg-gray-300 lg:p-6 cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-gray-950 rounded-xl flex gap-x-3 items-center p-2 md:p-3">
            <AlertDialog>
  <AlertDialogTrigger className="flex gap-3"><CiFolderOn />
              Cartella</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Create Folder</AlertDialogTitle>
      <AlertDialogDescription>
        <input type="text" className="p-6 border border-black w-full" onChange={(e) => setValue(e.target.value)} placeholder="Enter Your Folder Name"/>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleCLick}>Create</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

            </li>
          </>
        ) : null}
        <li className="bg-gray-300 lg:p-6 cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-gray-950 rounded-xl flex gap-x-3 items-center p-2 md:p-3">
          <CiClock2 />
          Recenti
        </li>
        <li className="bg-gray-300 lg:p-6 cursor-pointer text-xs sm:text-xs md:text-lg lg:text-xl font-bold text-gray-950 rounded-xl flex gap-x-3 items-center p-2 md:p-3">
          <SiPowerpages />
          Files condivisi
        </li>
      </ul>
    </aside>
  );
}
