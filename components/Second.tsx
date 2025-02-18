import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { socialMedia } from "@/data";
import { ShinyButton } from "./ui/shiny-button";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Second = () => {
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <div></div>,
      image: "/backdrop.jpg",
      imageclass: "",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <div></div>,
      image: "/backdrop.jpg",
      imageclass: "",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <div></div>,
      image: "/backdrop.jpg",
      imageclass: "",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <div></div>,
      image: "/backdrop.jpg",
      imageclass: "",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <div></div>,
      image: "/backdrop.jpg",
      imageclass: "",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div
      className="pb-20 pt-36 mx-[2rem] sm:mx-[2rem] xl:mx-[15rem]"
      id="header"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-end">
        <div className="text-4xl lg:text-6xl">
          Breathtaking journey around the island
        </div>
        <div className="text-md max-w-xl justify-start justify-self-start lg:justify-self-end lg:justify-end">
          <p>
            This journey offers an unforgettable experience that blends
            adventure, culture and the natural beauty if the country. Filled
            with activities and unforgettable moments this journey takes 45 days
            to complete.
          </p>
          <button className="mt-7 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-3xl font-bold transform hover:-translate-y-1 transition duration-400">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-20">
        <BentoGrid className="mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              image={item.image}
              imgClassName={item.imageclass}
              className={i === 0 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Second;
