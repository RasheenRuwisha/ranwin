import { FloatingNav } from "@/components/ui/navbar-menu";
import Image from "next/image";
import { navItems } from "@/data";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Hero from "@/components/Hero";
import Second from "@/components/Second";
import WorldMap from "@/components/ui/world-map";
import Destinations from "@/components/Destinations";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden ">
      <div className="w-full">
        <FloatingNav navItems={navItems} />

        <Hero />
        <Second />
        <div className="relative h-[500px] my-20">
          <WorldMap />
          <div className="absolute top-[50%] translate-y-[-50%] text-4xl px-[10rem]">
            The beauty of Sri Lanka lies in its diverse landscapes, where golden
            sandy beaches meet lush green mountains. From the turquoise waters
            of its coastal areas to the misty hills covered in tea plantations,
            the island offers a captivating blend of serenity and adventure. Its
            national parks, wildlife sanctuaries, and ancient heritage sites
            create a perfect harmony between nature and history, inviting you to
            explore and be inspired.
          </div>
        </div>
        <Destinations />
      </div>
    </main>
  );
}
