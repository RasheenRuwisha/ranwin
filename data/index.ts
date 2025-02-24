import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.instagram.com/rasheen_ruwisha/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/RRuwisha",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://github.com/RasheenRuwisha",
  },
];

export const package1 = {
  price_with_hotel: 750,
  price: 225,
  number_of_days: 5,
  short_title: "Sri Lanka: Culture & Nature Escape",
  title: " Sri Lanka’s 5-Day Journey: Culture, Nature, and Adventure Awaits",
  route: {
    1: "BIA",
    2: "Kandy",
    3: "Nuwara Eliya",
    4: "Colombo",
  },
  itenary: [
    {
      1: {
        title: "Kandy",
        duration: "1 Night",
        things_to_do: [
          "Tooth Relic Temple",
          "Kandy View Point",
          "Peradeniya Botanical Garden",
          "Gem Museum",
          "Wood Carving Center",
          "Traditional Kandy Dance",
          "Pinnawala Elephant Orphanage",
          "Spice Garden",
        ],
      },
      2: {
        title: "Nuwara Eliya",
        duration: "2 Nights",
        things_to_do: [
          "Tea Factory",
          "Ramboda waterfall",
          "Hanuman Temple",
          "Pink Post Office",
          "Haggala Garden",
          "Rama Seetha Temple",
        ],
      },
      3: {
        title: "Colombo",
        duration: "1 Night",
        things_to_do: ["City tour", "Tuk Tuk Ride"],
      },
    },
  ],
  whats_included: ["Sim card", "Water Bottle"],
  tickets_included: [
    "Spice Garden",
    "Tea Factory",
    "Gem Museum",
    "Wood Carving Center",
  ],
  day_break_down: {
    1: {
      start: "BIA",
      end: "Kandy",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        { name: "Pinnawala Elephant Orphanage", image: "" },
        { name: "Kandy Spice Garden", image: "" },
        { name: "Tooth Relic Temple", image: "" },
        { name: "Kandy View Point", image: "" },
        { name: "Traditional Kandy Dancers", image: "" },
      ],
    },
    2: {
      start: "Kandy",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        { name: "Nuwara Eliya Gem Museum", image: "" },
        { name: "Wood Carving Center", image: "" },
        { name: "Peradeniya Botanical Garden", image: "" },
        { name: "Tea Factory", image: "" },
        { name: "Ramboda waterfall", image: "" },
        { name: "Hanuman Temple", image: "" },
      ],
    },
    3: {
      start: "Nuwara Eliya",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        { name: "Pink Post Office", image: "" },
        { name: "Rama Seetha Temple", image: "" },
        { name: "Haggala Garden", image: "" },
        { name: "Gregory Lake Boat Ride", image: "" },
      ],
    },
    4: {
      start: "Nuwara Eliya",
      end: "Colombo",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        { name: "Ambewela Farm", image: "" },
        { name: "Devon Waterfall", image: "" },
        { name: "Saint Clair Waterfall", image: "" },
        { name: "Kithulgala White Water Rafting", image: "" },
      ],
    },
    5: {
      start: "Colombo",
      end: "BIA",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [{ name: "Colombo City Tour (Tuktuk or Car)", image: "" }],
    },
  },
  short_description:
    "A scenic 5-day journey through Sri Lanka, featuring Kandy’s cultural heritage, Nuwara Eliya’s picturesque landscapes, and Colombo’s bustling city life.",
  description:
    "Explore the beauty and culture of Sri Lanka in this 5-day adventure. Start in Kandy, where you’ll visit the Tooth Relic Temple and the Pinnawala Elephant Orphanage. Head to Nuwara Eliya for a taste of Sri Lanka’s tea history and stunning waterfalls, before finishing in Colombo with a city tour and a Tuk Tuk ride. A perfect mix of nature, history, and city life!",
};

export const package2 = {
  price_with_hotel: 750,
  price: 225,
  title: "Traditional Kandy tour",
  route: {
    1: "BIA",
    2: "Kandy",
    3: "Nuwara Eliya",
    4: "Colombo",
  },
  itenary: [
    {
      1: {
        title: "Kandy",
        duration: "1 Night",
        things_to_do: [
          "Tooth Relic Temple",
          "Kandy View Point",
          "Peradeniya Botanical Garden",
          "Gem Museum",
          "Wood Carving Center",
          "Traditional Kandy Dance",
          "Pinnawala Elephant Orphanage",
          "Spice Garden",
        ],
      },
      2: {
        title: "Nuwara Eliya",
        duration: "2 Nights",
        things_to_do: [
          "Tea Factory",
          "Ramboda waterfall",
          "Hanuman Temple",
          "Pink Post Office",
          "Haggala Garden",
          "Rama Seetha Temple",
        ],
      },
      3: {
        title: "Colombo",
        duration: "1 Night",
        things_to_do: ["City tour", "Tuk Tuk Ride"],
      },
    },
  ],
  whats_included: ["Sim card", "Water Bottle"],
  tickets_included: [
    "Spice Garden",
    "Tea Factory",
    "Gem Museum",
    "Wood Carving Center",
  ],
};
