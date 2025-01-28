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
import { FocusCards } from "./ui/focus-cards";

const Destinations = () => {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/backdrop.jpg",
    },
    {
      title: "Valley of life",
      src: "/backdrop.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/backdrop.jpg",
    },
    {
      title: "Camping is for pros",
      src: "/backdrop.jpg",
    },
    {
      title: "The road not taken",
      src: "/backdrop.jpg",
    },
  ];

  return (
    <div className="pb-20 pt-36 mx-[8rem] " id="header">
      <div className="text-6xl text-center">
        A selection of exceptional destinations
      </div>

      <div className="mt-20">
        <FocusCards cards={cards} />
      </div>
    </div>
  );
};

export default Destinations;
