'use client';

import { IUserfolder } from "@/utiltis/type";
import { Folder, StickyNote } from "lucide-react";
import { useRouter } from "next/navigation";

interface Idata{
  params : {id:number}
}
export default function FolderPage({params}:Idata) {
  const {push} = useRouter()
  if (typeof window != "undefined"){
    const folderdata = localStorage.getItem('folderdata') as string
    const folderresponse : IUserfolder = JSON.parse(folderdata)
    return (
      <div className="w-full flex  flex-col justify-center items-center py-10 gap-40">
        <h1 className="text-3xl text-center font-bold flex gap-3 items-center justify-center cursor-pointer" onClick={() => push('/dashboard')}><Folder />{folderresponse.name}</h1>
        <div>
          <h3 className="text-3xl flex flex-col gap-5 justify-center items-center"><StickyNote size={50} className="text-purple-500"/>You currently have no courses in this folder.</h3>
        </div>
      </div>
    )
  }
}
