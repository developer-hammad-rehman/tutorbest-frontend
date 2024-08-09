import Image from "next/image";
import Hero from "./components/Hero";
import Player from "./components/Player";
import Card from "./components/Card";
import AboveFooter from "./components/AboveFooter";
import Prize from "./components/Prize";
import pic1 from "../../public/Hero.jpg"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-gradient-to-tr from-[#2D155E] to-black " >
      <Hero/>
      {/* <Player /> */}
      <Image src={pic1} alt="Landing Page Image" className='flex justify-center items-center w-full'  />
      <Card/>
      <AboveFooter/>
      <Prize/>
    </div>
  );
}
