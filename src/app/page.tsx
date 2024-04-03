import Image from "next/image";
import Hero from "./components/Hero";
import Player from "./components/Player";
import Card from "./components/Card";
import AboveFooter from "./components/AboveFooter";
import Prize from "./components/Prize";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-gradient-to-tr from-[#2D155E] to-black " >
      <Hero/>
      <Player />
      <Card/>
      <AboveFooter/>
      <Prize/>
    </div>
  );
}
