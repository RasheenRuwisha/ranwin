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
  {
    title: "Mirissa: A Tropical Paradise for Beach Lovers",
    description: `Mirissa is a scenic coastal town in southern Sri Lanka, famous for its stunning beaches, whale watching, and vibrant nightlife. It's a top spot for surfing, snorkeling, and relaxing by the ocean.`,
    header: <div></div>,
    image: "/mirissa-3.jpg",
    link: "/cities/mirissa",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Yala: Sri Lanka’s Ultimate Safari Destination",
    description: `Yala is a national park in southeastern Sri Lanka, known for its diverse wildlife, including leopards, elephants, and crocodiles. It offers thrilling safaris through jungles, wetlands, and coastal areas.`,
    header: <div></div>,
    image: "/yala-2.jpg",
    link: "/cities/yala",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bentota: A Serene Coastal Escape",
    description: `Bentota, a charming coastal town in Sri Lanka, is renowned for its pristine beaches, crystal-clear waters, and vibrant marine life. This tropical paradise is a perfect blend of relaxation and adventure, making it an ideal getaway for beach lovers and water sports enthusiasts. From sunbathing on golden sands to thrilling jet-skiing experiences, Bentota offers something for everyone.`,
    header: <div></div>,
    image: "/bentota-6.jpg",
    link: "/cities/bentota",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Katharagama: A Sacred Pilgrimage Destination",
    description: `Kataragama is a sacred town in southern Sri Lanka, revered by Buddhists, Hindus, and Muslims. It is famous for the Kataragama Temple, a major pilgrimage site, and its annual festival with fire-walking and processions.`,
    header: <div></div>,
    image: "/katharagama-2.jpeg",
    link: "/cities/katharagama",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pinnawala: The Land of Gentle Giants",
    description: `Pinnawala is a village in Sri Lanka famous for its Elephant Orphanage, where visitors can see rescued elephants up close, watch them bathe in the river, and learn about conservation efforts.`,
    header: <div></div>,
    image: "/pinnawala-5.jpg",
    link: "/cities/pinnawala",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Udawalawa: Sri Lanka’s Premier Wildlife Haven",
    description: `Udawalawe is a national park in Sri Lanka, known for its large elephant population and diverse wildlife. It offers excellent safari experiences, with sightings of elephants, deer, crocodiles, and various bird species.`,
    header: <div></div>,
    image: "/udawalawa-1.jpg",
    link: "/cities/udawalawa",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Habarana: The Gateway to Sri Lanka’s Cultural Triangle",
    description: `Habarana, a peaceful town in Sri Lanka, serves as the perfect base for exploring the country’s Cultural Triangle. Surrounded by lush forests, scenic lakes, and historic sites, Habarana is a haven for nature lovers, adventure seekers, and history enthusiasts. The town’s central location makes it an ideal starting point for visiting UNESCO-listed sites like Sigiriya, Dambulla, and Polonnaruwa.`,
    header: <div></div>,
    image: "/habarana-4.jpg",
    link: "/cities/habarana",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Haputale: A Hidden Gem in Sri Lanka's Hill Country",
    description: `Haputale is a scenic hill town in Sri Lanka, known for its breathtaking views, tea plantations, and cool climate. It offers attractions like Lipton’s Seat and the Diyaluma Falls, making it a great spot for nature lovers.`,
    header: <div></div>,
    image: "/haputale-5.jpg",
    link: "/cities/haputale",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pasikuda: A Tropical Beach Paradise on Sri Lanka's East Coast",
    description: `Pasikuda is a coastal town in eastern Sri Lanka, famous for its shallow, calm waters and pristine beaches. It’s a top destination for swimming, snorkeling, and relaxing in luxury beachfront resorts.`,
    header: <div></div>,
    image: "/pasikuda-1.jpg",
    link: "/cities/pasikuda",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Negombo: A Coastal Gem with Rich History and Vibrant Culture",
    description: `Negombo is a coastal city near Colombo, Sri Lanka, known for its sandy beaches, fishing industry, and colonial heritage. It offers vibrant markets, seafood restaurants, and a scenic lagoon, making it a popular tourist spot.`,
    header: <div></div>,
    image: "/negombo-1.jpg",
    link: "/cities/negombo",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Polonnaruwa: A Journey Through Sri Lanka’s Ancient Capital",
    description: `Polonnaruwa is an ancient city in Sri Lanka, known for its well-preserved ruins of temples, palaces, and statues. A UNESCO World Heritage Site, it showcases the grandeur of Sri Lanka’s medieval kingdom.`,
    header: <div></div>,
    image: "/polonnaruwa-5.jpg",
    link: "/cities/polonnaruwa",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Riverston: A Hidden Gem in Sri Lanka’s Mountainous Heart",
    description: `Riverston is a scenic mountain area in Sri Lanka, located within the Knuckles Mountain Range. Known for its misty landscapes, lush forests, and hiking trails, it's a peaceful spot for nature lovers and adventure enthusiasts.`,
    header: <div></div>,
    image: "/riverston-1.jpg",
    link: "/cities/riverston",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Horton Plains: A High-altitude Wilderness of Natural Beauty",
    description: `Horton Plains National Park, located in the central highlands of Sri Lanka, is a UNESCO World Heritage site renowned for its breathtaking landscapes, diverse wildlife, and unique ecosystems. With its rolling grasslands, cloud forests, and dramatic cliffs, Horton Plains offers a perfect blend of natural beauty and adventure. The park is famous for its two main attractions: World’s End and Baker’s Falls, which offer stunning vistas and a glimpse into the unspoiled beauty of Sri Lanka’s highlands.`,
    header: <div></div>,
    image: "/horton-plains-3.jpg",
    link: "/cities/horton-plains",
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
