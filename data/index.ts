import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Packages", link: "#packages" },
  { name: "Contact", link: "#footer" },
];

export const dataCaro = [
  {
    category: "5 Days",
    title: "Culture & Nature Escape",
    src: "/5-1.jpg",
    link: "/package/nature-escape",
  },
  {
    category: "5 Days",
    title: "Sri Lankan Coastal Escape",
    src: "/5.jpg",
    link: "/package/coastal-escape",
  },
  {
    category: "7 Days",
    title: "Southern Wonders of Sri Lanka",
    src: "/7.jpg",
    link: "/package/southern-wonders",
  },
  {
    category: "6 Days",
    title: "Cultural Heart of Sri Lanka",
    src: "/6.jpg",
    link: "/package/cultural-heart",
  },

  {
    category: "15 Days",
    title: "Sri Lanka’s Scenic & Cultural Odyssey",
    src: "/15.jpg",
    link: "/package/scenic-odyysey",
  },
];

export const socialMedia = [
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
  image_1:
    "https://images.pexels.com/photos/1998440/pexels-photo-1998440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image_2: "https://simpsonsforest.com/wp-content/uploads/2024/03/01-1.jpg",
  image_3:
    "https://www.andbeyond.com/wp-content/uploads/sites/5/colombo-sri-lanka.jpg",
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
  whats_included: ["Sim card", "Bottled Water"],
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
        {
          name: "Pinnawala Elephant Orphanage",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pinnawala_01.jpg/1200px-Pinnawala_01.jpg",
        },
        {
          name: "Kandy Spice Garden",
          image:
            "https://travelinfosrilanka.com/wp-content/uploads/2023/09/Spice-Garden-Sri-Lanka.jpg",
        },
        {
          name: "Tooth Relic Temple",
          image:
            "https://srisrilanka.com/wp-content/uploads/2023/06/temple-of-the-sacred-tooth-relic-kandy.jpg",
        },
        {
          name: "Kandy View Point",
          image:
            "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/07/kandyviewpoint-.jpg",
        },
        {
          name: "Traditional Kandy Dancers",
          image:
            "https://assets.roar.media/Life/2017/09/Featured-Image-e1505121383658.jpg?w=1200",
        },
      ],
    },
    2: {
      start: "Kandy",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Nuwara Eliya Gem Museum",
          image:
            "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/07/Natural-Gems-and-Gemological-Museum.jpg",
        },
        {
          name: "Wood Carving Center",
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/f7/55/ae/caption.jpg?w=900&h=500&s=1",
        },
        {
          name: "Peradeniya Botanical Garden",
          image:
            "https://simpsonsforest.com/wp-content/uploads/2024/03/01-1.jpg",
        },
        {
          name: "Tea Factory",
          image:
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/fe/8d/e7.jpg",
        },
        {
          name: "Ramboda waterfall",
          image:
            "https://www.lankatourexperts.com/wp-content/uploads/2018/12/Ramboda-Falls-Sri-Lanka-Economy-Tours.png",
        },
        {
          name: "Hanuman Temple",
          image:
            "https://www.ceylonexpeditions.com/medias/destination_places/big/79/shri-bhakta-hanuman-temple-ramboda-sri-lanka-ramayana-ceylon-expedition-travels-3-1.jpg",
        },
      ],
    },
    3: {
      start: "Nuwara Eliya",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Pink Post Office",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeOJZwv4Th-5AS4HPp3RINurWGcsrmilRbg&s",
        },
        {
          name: "Rama Seetha Temple",
          image:
            "https://pyt-blogs.imgix.net/2021/06/Depositphotos_158390642_s-2019.jpg?auto=format&ixlib=php-3.3.0",
        },
        {
          name: "Haggala Garden",
          image:
            "https://lp-cms-production.imgix.net/2023-05/shutterstock_639029941.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75",
        },
        {
          name: "Gregory Lake Boat Ride",
          image:
            "https://yannaratawate.lk/images/nuwara-eliya/gregory-lake-nuwara-eliya-31.jpg",
        },
      ],
    },
    4: {
      start: "Nuwara Eliya",
      end: "Colombo",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Ambewela Farm",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ambewela_farm_%28Cattle%29.jpg",
        },
        {
          name: "Devon Waterfall",
          image:
            "https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/devon-waterfalls-in-sri-lanka-s-central-highlands-940_orig.jpg",
        },
        {
          name: "Saint Clair Waterfall",
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/86/ab/e8/st-clair-s-falls.jpg?w=900&h=500&s=1",
        },
        {
          name: "Kithulgala White Water Rafting",
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/1e/31/caption.jpg?w=1200&h=-1&s=1",
        },
      ],
    },
    5: {
      start: "Colombo",
      end: "BIA",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Colombo City Tour (Tuktuk or Car)",
          image:
            "https://www.andbeyond.com/wp-content/uploads/sites/5/colombo-sri-lanka.jpg",
        },
      ],
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
