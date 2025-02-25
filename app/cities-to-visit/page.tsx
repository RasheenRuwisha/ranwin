import { BentoGrid, BentoGridItem } from "@/components/ui/test-bento";
import { FloatingNav } from "@/components/ui/navbar-menu-second";
import { navItems } from "@/data";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const items = [
  {
    title: "Kandy: The Hilltop Sanctuary",
    description: `Nestled in the heart of Sri Lanka, Kandy is a picturesque city surrounded by lush greenery and tranquil lakes. As the last capital of the ancient Sinhala kings, it holds a special place in Sri Lanka’s history and culture. Kandy is home to the revered Temple of the Tooth, beautiful gardens, and scenic hill views, making it a perfect blend of spirituality, history, and natural beauty.`,
    header: <div></div>,
    image: "/kandy-1.jpg",
    link: "/cities/kandy",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ella: Nature's Tranquil Escape",
    description:
      "Immerse yourself in the serene beauty of Ella, where lush landscapes, breathtaking waterfalls, and scenic hikes provide the perfect retreat for nature lovers and adventurers alike.",
    header: <div></div>,
    image: "/ella.jpg",
    link: "/cities/ella",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Colombo: Where Tradition Meets Innovation",
    description:
      "Discover the vibrant city of Colombo, where rich cultural heritage blends seamlessly with modern advancements, offering a unique fusion of old and new.",
    header: <div></div>,
    image: "/colombo.jpg",
    link: "/cities/colombo",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Hikkaduwa: The Coastal Paradise",
    description:
      "Experience the vibrant charm of Hikkaduwa, where pristine beaches, colorful coral reefs, and a lively atmosphere invite you to relax, explore, and enjoy the best of Sri Lanka’s coastal life.",
    header: <div></div>,
    image: "/hikkaduwa.jpg",
    link: "/cities/hikkaduwa",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jaffna: A Journey Through Culture and Resilience",
    description:
      "Step into the heart of northern Sri Lanka, where rich Tamil heritage, ancient temples, and a resilient spirit combine to offer a unique glimpse into the island's diverse history and culture.",
    header: <div></div>,
    image: "/jaffna.jpg",
    link: "/cities/jaffna",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Nuwara Eliya: The Little England of Sri Lanka",
    description:
      "Escape to the cool, misty hills of Nuwara Eliya, where colonial charm meets lush tea plantations, offering a refreshing retreat amidst breathtaking landscapes and serene gardens.",
    header: <div></div>,
    image: "/nuwara.jpg",
    link: "/cities/nuwara-eliya",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Anuradhapura: The Ancient Kingdom",
    description: `Anuradhapura, the first capital of Sri Lanka, is an awe-inspiring UNESCO 
    World Heritage Site that holds immense historical, cultural, and religious significance.
     As one of the oldest continuously inhabited cities in the world, 
     it offers a journey back in time to an era of grand temples, advanced irrigation systems, and remarkable architectural feats. 
    .`,
    header: <div></div>,
    image: "/anuradhapura-1.jpg",
    link: "/cities/anuradhapura",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Trincomalee: The Jewel of the East Coast",
    description: `Trincomalee, located on Sri Lanka’s east coast, is a stunning beachside town known for its pristine beaches, rich history, and diverse marine life. From ancient temples to breathtaking diving spots, this coastal paradise has something for everyone.`,
    header: <div></div>,
    image: "/trincomalee-1.jpg",
    link: "/cities/trincomalee",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Galle: A Colonial Gem by the Sea",
    description: `Galle, a UNESCO World Heritage Site, is a charming city that blends colonial history with coastal beauty. Famous for its well-preserved fort, stunning beaches, and vibrant arts scene, Galle is an unforgettable destination.`,
    header: <div></div>,
    image: "/galle-4.jpg",
    link: "/cities/galle",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sigiriya: The Eighth Wonder of the World",
    description: `Sigiriya, also known as Lion Rock, is one of Sri Lanka’s most famous landmarks. This ancient rock fortress, built in the 5th century, is a UNESCO World Heritage Site and offers breathtaking views, stunning frescoes, and fascinating history.`,
    header: <div></div>,
    image: "/sigiriya-1.jpg",
    link: "/cities/sigiriya",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Arugam Bay: A Surfer’s Paradise",
    description: `Arugam Bay, located on Sri Lanka’s east coast, is a world-renowned surfing destination with golden beaches, laid-back vibes, and stunning coastal scenery. Whether you're an experienced surfer or just looking to relax by the beach, this paradise has something for everyone.`,
    header: <div></div>,
    image: "/arugambay-5.jpg",
    link: "/cities/arugambay",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

export default function CardDemoPage() {
  return (
    <div className="min-h-screen flex flex-wrap justify-center gap-6 p-6 ">
      <FloatingNav navItems={navItems} />

      <div className="min-h-screen flex flex-wrap justify-center gap-6 p-6 mt-20">
        <BentoGrid>
          {items.map((item, index) => {
            // Calculate row span based on description length
            const wordCount = item.description.split(" ").length;
            const rowSpan = wordCount > 40 ? 2 : 1; // Items with descriptions longer than 100 words will span 2 rows

            return (
              <BentoGridItem
                key={index}
                title={item.title}
                description={item.description}
                header={item.header}
                image={item.image}
                link={item.link}
                colSpan={rowSpan} // Apply row span based on description length
              />
            );
          })}
        </BentoGrid>
      </div>
    </div>
  );
}
