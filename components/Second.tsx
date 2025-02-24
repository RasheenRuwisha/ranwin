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
      title: "Colombo: Where Tradition Meets Innovation",
      description:
        "Discover the vibrant city of Colombo, where rich cultural heritage blends seamlessly with modern advancements, offering a unique fusion of old and new.",
      header: <div></div>,
      image: "/colombo.jpg",
      imageclass: "",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Ella: Nature's Tranquil Escape",
      description:
        "Immerse yourself in the serene beauty of Ella, where lush landscapes, breathtaking waterfalls, and scenic hikes provide the perfect retreat for nature lovers and adventurers alike.",
      header: <div></div>,
      image: "/ella.jpg",
      imageclass: "",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Hikkaduwa: The Coastal Paradise",
      description:
        "Experience the vibrant charm of Hikkaduwa, where pristine beaches, colorful coral reefs, and a lively atmosphere invite you to relax, explore, and enjoy the best of Sri Lanka’s coastal life.",
      header: <div></div>,
      image: "/hikkaduwa.jpg",
      imageclass: "",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Jaffna: A Journey Through Culture and Resilience",
      description:
        "Step into the heart of northern Sri Lanka, where rich Tamil heritage, ancient temples, and a resilient spirit combine to offer a unique glimpse into the island's diverse history and culture.",
      header: <div></div>,
      image: "/jaffna.jpg",
      imageclass: "",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Nuwara Eliya: The Little England of Sri Lanka",
      description:
        "Escape to the cool, misty hills of Nuwara Eliya, where colonial charm meets lush tea plantations, offering a refreshing retreat amidst breathtaking landscapes and serene gardens.",
      header: <div></div>,
      image: "/nuwara.jpg",
      imageclass: "",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div
      className="pb-20 pt-36 mx-[2rem] sm:mx-[2rem] xl:mx-[15rem]"
      id="about"
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
