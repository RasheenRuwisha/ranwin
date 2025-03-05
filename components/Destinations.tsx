import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { dataCaro, socialMedia } from "@/data";
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
import {
  Carousel,
  Card as CardPackage2,
} from "@/components/ui/apple-cards-carousel";

const Destinations = () => {
  const cards = dataCaro.map((card, index) => (
    <CardPackage2 key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div
      className="pb-20 pt-36 mx-[2rem] sm:mx-[2rem] xl:mx-[15rem]"
      id="packages"
    >
      <div className="text-2xl lg:text-6xl text-center">
        A selection of exceptional destinations
      </div>

      <div className="mt-10 lg:mt-20">
        <Carousel items={cards} />
      </div>
    </div>
  );
};

export default Destinations;
