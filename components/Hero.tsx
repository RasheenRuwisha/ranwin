import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import backdrop from "@/assets/ella.jpg";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { socialMedia } from "@/data";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="pb-20 pt-36 mx-auto sm:px-10 px-5" id="header">
      <div
        className="h-[80vh] lg:h-[90vh] w-full 
       absolute top-0 left-0 flex items-center justify-center"
      >
        <Image
          src={backdrop}
          alt="Logo"
          className="mx-auto md:ms-0 h-full w-full"
        />
        <div className="h-[80vh] lg:h-[90vh] absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100/50" />
      </div>
      <div className="flex w-full justify-start">
        <div
          className="flex justify-center relative  z-10 text-m back w-[350px] py-2"
          style={{
            backdropFilter: "blur(30px) saturate(180%)",
            backgroundColor: "rgba(163, 148, 148, 0.75)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          A Place Where Nature and Adventure Unite
        </div>
      </div>
      <div className="flex justify-start relative  z-10 my-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[40.5vw] flex flex-col items-start justify-start">
          <TextGenerateEffect
            className="text-start text-[30px] md:text-5xl lg:text-6xl"
            words="Experience the Wonders of Sri Lanka"
          />
        </div>
      </div>
      <Link href="/cities-to-visit">
        <InteractiveHoverButton>Explore Now</InteractiveHoverButton>
      </Link>

      <div className="flex  flex-row lg:flex-col items-end md:gap-3 gap-6 mt-40">
        {socialMedia.map((info) => (
          <a target="_blank" href={info.link}>
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-10 bg-opacity-40 bg-white-200 rounded-3xl border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
