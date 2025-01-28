import { FloatingNav } from "@/components/ui/navbar-menu";
import Image from "next/image";
import { navItems } from "@/data";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav navItems={navItems} />

        <Hero />
        <p>asdas</p>
        <p>asdas</p>
        <p>asdas</p>
        <p>asdas</p>
        <p>asdas</p>
        <p>asdas</p>
        <p>asdas</p>
        <p>asdas</p>
        <p>asdas</p>
      </div>
    </main>
  );
}
