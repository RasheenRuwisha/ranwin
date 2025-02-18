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
        aasdasd
      </div>
    </main>
  );
}
