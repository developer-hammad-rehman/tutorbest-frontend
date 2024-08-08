"use client";
import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const path = usePathname();

  if (path.startsWith("/summary")) {
    return null;
  } else {
    return (
      <>
        <div className="border-t-2 border-gray-800 flex flex-col lg:flex-row w-full items-center justify-between  px-5 gap-4 bg-gradient-to-tr from-[#2D155E] to-black py-4">
          <div className="text-white">
            <Image
              src={logo}
              alt="logo"
              className="cursor-pointer w-40"
              onClick={() => router.push("/")}
            />
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-50">Website</h5>
            <ul className="flex flex-col gap-2 justify-center items-center text-gray-400">
              <Link href={"/sigin"}>Login</Link>
              <Link href={"/sigup"}>Sign Up</Link>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-50">SOCIAL MEDIA</h5>
            <ul className="flex flex-col gap-2 justify-center items-center text-gray-400">
              <Link href={"https://www.instagram.com"}>Instagram</Link>
              <Link href={"https://www.facebook.com"}>Facebook</Link>
              <Link href={"https://www.linkedin.com"}>LinkedIn</Link>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-50">PAGES</h5>
            <ul className="flex flex-col gap-2 justify-center items-center text-gray-400">
              <Link href={"#"}>Tools</Link>
              <Link href={"/privicay-policy"}>Privacy</Link>
              <Link href={"/privicay-policy"}>Terms</Link>
            </ul>
          </div>
        </div>
        <div className="bg-black text-gray-400 text-sm py-2 px-4 flex justify-between items-center">
          <span>Nextrend, LLC 1111B S Governors Ave #20753 Dover, DE 19904</span>
          <span>001 (302) 310-4370</span>
        </div>
      </>
    );
  }
}
