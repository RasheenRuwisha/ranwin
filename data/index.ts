import { title } from "process";

export const navItems = [
  { name: "Home", link: "/#" },
  { name: "About", link: "/#about" },
  { name: "Packages", link: "/#packages" },
  { name: "Cities to Visit", link: "/cities-to-visit" },
  { name: "Custom Package", link: "/make-your-own-package" },
  { name: "Contact", link: "/#footer" },
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
    id: 1,
    img: "/facebook.png",
    link: "https://www.facebook.com/people/Ranwin-Tours-Travels/61571960647288/",
  },

  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/ranwin.tours/",
  },
  {
    id: 23,
    img: "/twit.svg",
    link: "https://www.twitter.com/ranwin_tours",
  },
];

export const package1 = {
  price_with_hotel: 750,
  waypoints: [
    [79.88452, 7.17929], // Example waypoint 1
    [80.649991, 7.292631], // Example waypoint 2
    [80.69836, 7.01334], // Example waypoint 3
    [79.97408, 6.87053], // Example waypoint 3
    [79.88452, 7.17929], // Example waypoint 3
  ],
  image_3: "/nuwaraeliya-3.jpg",
  image_2: "/kandy-3.jpg",
  image_1: "/colomboa.jpg",
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
          image: "/pinnawala.jpg",
        },
        {
          name: "Kandy Spice Garden",
          image: "/kandy-5.jpg",
        },
        {
          name: "Tooth Relic Temple",
          image: "/kandy-1.jpg",
        },
        {
          name: "Kandy View Point",
          image: "/kandy-4.jpg",
        },
        {
          name: "Traditional Kandy Dancers",
          image: "/kandy-6.jpg",
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
          image: "/gem.jpg",
        },
        {
          name: "Wood Carving Center",
          image: "/galle-6.jpg",
        },
        {
          name: "Peradeniya Botanical Garden",
          image: "/nuwaraeliya-4.jpg",
        },
        {
          name: "Tea Factory",
          image: "/ella-4.jpg",
        },
        {
          name: "Ramboda waterfall",
          image: "/ramboda.png",
        },
        {
          name: "Hanuman Temple",
          image: "/hanuman.jpg",
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
          image: "/pink.jpg",
        },
        {
          name: "Rama Seetha Temple",
          image: "/rama.jpg",
        },
        {
          name: "Haggala Garden",
          image: "/haggala.jpg",
        },
        {
          name: "Gregory Lake Boat Ride",
          image: "/kandy-2.jpg",
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
          image: "/ambewela.jpg",
        },
        {
          name: "Devon Waterfall",
          image: "/devon.jpg",
        },
        {
          name: "Saint Clair Waterfall",
          image: "/stclar.jpg",
        },
        {
          name: "Kithulgala White Water Rafting",
          image: "/waterratft.jpg",
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
          image: "/colomboa.jpg",
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
  price_with_hotel: 800,
  waypoints: [
    [79.88452, 7.17929], // Example waypoint 1
    [79.997854, 6.421528], // Example waypoint 2
    [80.108277, 6.135434], // Example waypoint 3
    [80.214955, 6.032814], // Example waypoint 3
    [80.247484, 6.020177], // Example waypoint 3
    [80.455813, 5.949363], // Example waypoint 3
    [79.88452, 7.17929], // Example waypoint 1
  ],
  image_1: "/galle-9.jpg",
  image_2: "/galle-3.jpg",
  image_3: "/hikkaduwa-2.jpg",
  price: 285,
  number_of_days: 5,
  short_title: "Sri Lankan Coastal Escape",
  title: "Sri Lanka’s Coastal Escape: From Golden Shores to Coastal Charms",
  route: {
    1: "BIA",
    2: "Bentota",
    3: "Hikkaduwa",
    4: "Galle",
    5: "Unawatuna",
    6: "Mirissa",
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
      end: "Bentota",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Water Sports",
          image: "/water-sport.jpg",
        },
        {
          name: "Bentota Beach",
          image: "/bentota-beach.jpg",
        },
      ],
    },
    2: {
      start: "Bentota",
      end: "Bentota",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Turtle Conservatory",
          image: "/turtle.jpg",
        },
        {
          name: "Mangrove Boat Ride",
          image: "/mangrove.jpg",
        },
        {
          name: "Fish Therapy",
          image: "/fish.jpg",
        },
      ],
    },
    3: {
      start: "Benota",
      end: "Hikkaduwa -> Mirissa",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Glass Bottom Boat Ride",
          image: "/glass.jpg",
        },
        {
          name: "Snorkeling",
          image: "/hikkaduwa-1.jpg",
        },
        {
          name: "Galle Fort",
          image: "/galle-1.jpg",
        },
        {
          name: "Galle Light House",
          image: "/galle-9.jpg",
        },
        {
          name: "Unawatuna Jungle Beach",
          image: "/galle-5.jpg",
        },
      ],
    },
    4: {
      start: "Mirissa",
      end: "Mirissa",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Whale watching",
          image: "/whale.jpg",
        },
        {
          name: "Still fishermen",
          image: "/fisher.jpg",
        },
      ],
    },
    5: {
      start: "Mirissa",
      end: "BIA",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [],
    },
  },
  short_description:
    "Discover Sri Lanka’s breathtaking southern coastline, where pristine beaches and rich history meet.",
  description:
    "Starting from Bandaranaike International Airport (BIA), this route takes you to the serene beaches of Bentota and the lively surf town of Hikkaduwa. Explore the colonial charm of Galle and the turquoise waters of Unawatuna before unwinding in the tropical paradise of Mirissa. Enjoy sun-kissed beaches, vibrant marine life, and a perfect blend of relaxation and adventure.",
};

export const package3 = {
  price_with_hotel: 1100,
  waypoints: [
    [79.88452, 7.17929], // Example waypoint 1
    [79.997854, 6.421528], // Example waypoint 2
    [80.108277, 6.135434], // Example waypoint 3
    [80.214955, 6.032814], // Example waypoint 3
    [80.455813, 5.949363], // Example waypoint 3
    [81.399583, 6.515248], // Example waypoint 3
    [79.88452, 7.17929], // Example waypoint 1
  ],
  image_1: "/galle-9.jpg",
  image_2: "/mirissa.jpg",
  image_3: "/yala.jpg",
  price: 375,
  number_of_days: 5,
  short_title: "Southern Wonders of Sri Lanka",
  title:
    "Coastal Wonders & Wildlife: A Journey Through Sri Lanka’s Southern Beauty",
  route: {
    1: "BIA",
    2: "Bentota",
    3: "Hikkaduwa",
    4: "Galle",
    5: "Mirissa",
    6: "Yala",
  },
  itenary: [
    {
      1: {
        title: "Bentota",
        duration: "2 Night",
        things_to_do: [
          "Water spots",
          "Mangrove Boat ride",
          "Fish Therapy",
          "Turtle conservation center",
        ],
      },
      2: {
        title: "Hikkaduwa",
        duration: "1 Night",
        things_to_do: ["Glass Bottom Boat Ride", "Snorkeling"],
      },
      3: {
        title: "Galle",
        duration: "1 Night",
        things_to_do: [
          "Galle Fort",
          "Galle Light house",
          "Wood carving center",
        ],
      },
      4: {
        title: "Unawatuna",
        duration: "1 Night",
        things_to_do: ["Jungle Beach"],
      },
      5: {
        title: "Mirissa",
        duration: "2 Night",
        things_to_do: ["Whale Watching", "Still Fishermen"],
      },
      6: {
        title: "Yala",
        duration: "2 Night",
        things_to_do: ["Yala Safari"],
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
      end: "Bentota",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Water Sports",
          image: "/water-sport.jpg",
        },
        {
          name: "Bentota Beach",
          image: "/bentota-beach.jpg",
        },
      ],
    },
    2: {
      start: "Bentota",
      end: "Bentota",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Turtle Conservatory",
          image: "/turtle.jpg",
        },
        {
          name: "Mangrove Boat Ride",
          image: "/mangrove.jpg",
        },
        {
          name: "Fish Therapy",
          image: "/fish.jpg",
        },
      ],
    },
    3: {
      start: "Benota",
      end: "Hikkaduwa -> Mirissa",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Glass Bottom Boat Ride",
          image: "/glass.jpg",
        },
        {
          name: "Snorkeling",
          image: "/hikkaduwa-1.jpg",
        },
        {
          name: "Galle Fort",
          image: "/galle-1.jpg",
        },
        {
          name: "Galle Light House",
          image: "/galle-9.jpg",
        },
        {
          name: "Unawatuna Jungle Beach",
          image: "/galle-5.jpg",
        },
      ],
    },
    4: {
      start: "Mirissa",
      end: "Mirissa",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Whale watching",
          image: "/whale.jpg",
        },
        {
          name: "Still fishermen",
          image: "/fisher.jpg",
        },
      ],
    },
    5: {
      start: "Mirissa",
      end: "Yala",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Katharagama Temple",
          image: "/katharagama.jpg",
        },
      ],
    },
    6: {
      start: "Yala",
      end: "Yala",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Yala Safari",
          image: "/yala.jpg",
        },
      ],
    },
    7: {
      start: "Yala",
      end: "BIA",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [],
    },
  },
  short_description:
    "Explore Sri Lanka’s stunning southern coastline, from golden beaches to wildlife adventures.",
  description:
    "Starting at Bandaranaike International Airport (BIA), this route takes you through the tropical paradise of Bentota and the vibrant surf town of Hikkaduwa. Continue to the historic city of Galle, known for its Dutch fort, then unwind on the pristine beaches of Mirissa. End your journey with an exhilarating safari at Yala National Park, home to leopards, elephants, and diverse wildlife. Experience the best of Sri Lanka’s southern coast on this unforgettable adventure!",
};

export const package4 = {
  price_with_hotel: 900,
  waypoints: [
    [79.88452, 7.17929], // Example waypoint 1
    [80.649991, 7.292631], // Example waypoint 2
    [80.746205, 7.942106], // Example waypoint 3
    [80.635036, 7.293121], // Example waypoint 3
    [79.88452, 7.17929], // Example waypoint 3
  ],
  image_1: "/kandy-2.jpg",
  image_2: "/colombo-2.jpg",
  image_3: "/sigiriya-6.jpg",
  price: 270,
  number_of_days: 5,
  short_title: "Cultural Heart of Sri Lanka",
  title:
    "Exploring Sri Lanka’s Cultural Heritage: From Colombo to the Sacred City of Kandy",
  route: {
    1: "BIA",
    2: "Colombo",
    3: "Sigiriya",
    4: "Kandy",
  },
  itenary: [
    {
      1: {
        title: "Colombo",
        duration: "1 Night",
        things_to_do: ["City tour", "Galle Face Green", "Lotus Tower"],
      },
      2: {
        title: "Sigiriya",
        duration: "2 Nights",
        things_to_do: [
          "Pinnawala Elephant Orphanage",
          "Sigiriya Rock",
          "Pollonawa Ruins",
          "Habarna Safari",
          "Sigiriya Safari",
          "Elephant Back Safari",
          "Dambulla Cave Temple",
          "Spice Garden",
        ],
      },
      3: {
        title: "Kandy",
        duration: "2 Nights",
        things_to_do: [
          "Tooth Relic Temple",
          "Kandy View Point",
          "Peradeniya Botanical Garden",
          "Gem Museum",
          "Wood Carving Center",
          "Traditional Kandy Dance",
          "Tea Factory",
        ],
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
      end: "Colombo",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "City Tour",
          image: "/colombo-5.jpg",
        },
        {
          name: "Lotus Tower",
          image: "/lotus-tower.jpg",
        },
      ],
    },
    2: {
      start: "Colombo",
      end: "Sigiya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Pinnawala Elephant Orphanage",
          image: "/pinnawala.jpg",
        },
        {
          name: "Sigiya Rock",
          image: "/sigiriya-1.jpg",
        },
      ],
    },
    3: {
      start: "Sigiya",
      end: "Sigiya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Habarna Safari",
          image: "/habarana.jpg",
        },
        {
          name: "Ancient Pollonaruwa Ruins",
          image: "/pollonaruwa.jpg",
        },
        {
          name: "Sigiriya Safari",
          image: "/sigiriya-7.jpg",
        },
        {
          name: "Elephant Back Safari",
          image: "/elephant.jpg",
        },
      ],
    },
    4: {
      start: "Sigiya",
      end: "Kandy",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Damubulla Cave Temple",
          image: "/sigiriya-8.jpg",
        },
        {
          name: "Spice Garden",
          image: "/kandy-5.jpg",
        },
        {
          name: "Tooth Relic Temple",
          image: "/kandy-1.jpg",
        },
      ],
    },
    5: {
      start: "Kandy",
      end: "Kandy",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Gem Museum",
          image: "/gem.jpg",
        },
        {
          name: "Wood Carving Center",
          image: "/galle-6.jpg",
        },
        {
          name: "Peradeniya Botanical Garden",
          image: "/nuwaraeliya-4.jpg",
        },
        {
          name: "Traditional Kandy Dance",
          image: "/kandy-6.jpg",
        },
      ],
    },
    6: {
      start: "Kandy",
      end: "BIA",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Kandy View Point",
          image: "/kandy-2.jpg",
        },
        {
          name: "Tea Factory",
          image: "/ella-4.jpg",
        },
      ],
    },
  },
  short_description:
    "A journey through Sri Lanka’s rich cultural heritage, from the bustling capital to ancient wonders and sacred cities.",
  description:
    "This route takes you from Bandaranaike International Airport (BIA) to the vibrant city of Colombo, then to the historic rock fortress of Sigiriya. Continue to Kandy, the cultural capital, home to the revered Temple of the Tooth. Experience Sri Lanka’s deep-rooted history, breathtaking landscapes, and rich traditions along the way.",
};

export const package5 = {
  price_with_hotel: 2200,
  waypoints: [
    [79.88452, 7.17929], // Example waypoint 1
    [80.649991, 7.292631], // Example waypoint 2
    [80.746205, 7.942106], // Example waypoint 3
    [80.635036, 7.293121], // Example waypoint 3
    [79.88452, 7.17929], // Example waypoint 3
  ],
  image_1: "/kandy-2.jpg",
  image_2: "/colombo-2.jpg",
  image_3: "/sigiriya-6.jpg",
  price: 675,
  number_of_days: 14,
  short_title: "Sri Lanka’s Scenic & Cultural Odyssey",
  title: "Ultimate Sri Lanka Adventure: From Heritage to Coast",
  route: {
    1: "BIA",
    2: "Colombo",
    3: "Polonnaruwa",
    4: "Sigiriya",
    5: "Kandy",
    6: "Nuwara Eliya",
    7: "Ella",
    8: "Yala",
    9: "Mirissa",
    10: "Bentota",
  },
  itenary: [
    {
      1: {
        title: "Colombo",
        duration: "1 Night",
        things_to_do: ["City tour", "Galle Face Green", "Lotus Tower"],
      },
      2: {
        title: "Sigiriya",
        duration: "2 Nights",
        things_to_do: [
          "Pinnawala Elephant Orphanage",
          "Sigiriya Rock",
          "Pollonawa Ruins",
          "Habarna Safari",
          "Sigiriya Safari",
          "Elephant Back Safari",
          "Dambulla Cave Temple",
          "Spice Garden",
        ],
      },
      3: {
        title: "Kandy",
        duration: "2 Nights",
        things_to_do: [
          "Tooth Relic Temple",
          "Kandy View Point",
          "Peradeniya Botanical Garden",
          "Gem Museum",
          "Wood Carving Center",
          "Traditional Kandy Dance",
          "Tea Factory",
        ],
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
      end: "Colombo",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "City Tour",
          image: "/colombo-5.jpg",
        },
        {
          name: "Lotus Tower",
          image: "/lotus-tower.jpg",
        },
      ],
    },
    2: {
      start: "Colombo",
      end: "Pollonaruwa",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Pinnawala Elephant Orphanage",
          image: "/pinnawala.jpg",
        },
        {
          name: "Ancient Pollonaruwa Ruins",
          image: "/pollonaruwa.jpg",
        },
        {
          name: "Parakrama Samudra",
          image: "/sigiriya-1.jpg",
        },
      ],
    },
    3: {
      start: "Pollonaruwa",
      end: "Sigiya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Habarna Safari",
          image: "/habarana.jpg",
        },
        {
          name: "Elephant Back Safari",
          image: "/elephant.jpg",
        },
      ],
    },
    4: {
      start: "Sigiya",
      end: "Sigiya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Sigiriya Rock",
          image: "/sigiriya-8.jpg",
        },
        {
          name: "Sigiriya Safari",
          image: "/kandy-5.jpg",
        },
      ],
    },
    5: {
      start: "Sigiya",
      end: "Kandy",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Damubulla Cave Temple",
          image: "/sigiriya-8.jpg",
        },
        {
          name: "Spice Garden",
          image: "/kandy-5.jpg",
        },
        {
          name: "Tooth Relic Temple",
          image: "/kandy-1.jpg",
        },
        {
          name: "Gem Museum",
          image: "/kandy-1.jpg",
        },
        {
          name: "Wood Carving Center",
          image: "/kandy-1.jpg",
        },
        {
          name: "Kandy Traditional Dance",
          image: "/kandy-1.jpg",
        },
      ],
    },
    6: {
      start: "Kandy",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Kandy View Point",
          image: "/gem.jpg",
        },
        {
          name: "Wood Carving Center",
          image: "/galle-6.jpg",
        },
        {
          name: "Peradeniya Botanical Garden",
          image: "/nuwaraeliya-4.jpg",
        },
        {
          name: "Tea Factory",
          image: "/kandy-6.jpg",
        },
        {
          name: "Ramboda Waterfall",
          image: "/kandy-6.jpg",
        },
        {
          name: "Hanuman Temple",
          image: "/kandy-6.jpg",
        },
      ],
    },
    7: {
      start: "Nuwara Eliya",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Rama seetha temple",
          image: "/kandy-2.jpg",
        },
        {
          name: "Haggala Garden",
          image: "/ella-4.jpg",
        },
        {
          name: "Gregory Lake Boat Ride",
          image: "/ella-4.jpg",
        },
      ],
    },
    8: {
      start: "Nuwara Eliya",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Pink Post Office",
          image: "/kandy-2.jpg",
        },
        {
          name: "Ambevela Farm",
          image: "/ella-4.jpg",
        },
      ],
    },
    9: {
      start: "Nuwara Eliya",
      end: "Ella (by train)",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Nine arches bridge",
          image: "/kandy-2.jpg",
        },
        {
          name: "Rawana Waterfall",
          image: "/ella-4.jpg",
        },
      ],
    },
    10: {
      start: "Ella",
      end: "Yala",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Little Adam's Peak",
          image: "/kandy-2.jpg",
        },
        {
          name: "Katagarama Temple",
          image: "/ella-4.jpg",
        },
      ],
    },
    11: {
      start: "Yala",
      end: "Yala",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Yala Safari",
          image: "/kandy-2.jpg",
        },
      ],
    },
    12: {
      start: "Yala",
      end: "Mirissa",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Whale watching",
          image: "/kandy-2.jpg",
        },
      ],
    },
    13: {
      start: "Mirissa",
      end: "Bentota",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Waligama Still Fishermen",
          image: "/kandy-2.jpg",
        },
        {
          name: "Galle Fort",
          image: "/kandy-2.jpg",
        },
        {
          name: "Hikkaduwa Glass Bottom Boat Ride",
          image: "/kandy-2.jpg",
        },
        {
          name: "Turtle Conservation Center",
          image: "/kandy-2.jpg",
        },
      ],
    },
    14: {
      start: "Bentota",
      end: "Bentota",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Water Sports",
          image: "/kandy-2.jpg",
        },
        {
          name: "Mongrove Boat Ride",
          image: "/kandy-2.jpg",
        },
        {
          name: "Fish Therapy",
          image: "/kandy-2.jpg",
        },
      ],
    },
    15: {
      start: "Bentota",
      end: "BIA",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [],
    },
  },
  short_description:
    "Discover Sri Lanka’s best destinations on this all-encompassing route, covering history, nature, wildlife, and stunning beaches from Colombo to Bentota.",
  description:
    "Embark on an unforgettable journey through Sri Lanka, from the bustling capital to ancient cities, misty highlands, and breathtaking coastal escapes. Explore cultural landmarks in Polonnaruwa and Sigiriya, experience the charm of Kandy and Nuwara Eliya, and enjoy the scenic beauty of Ella. Encounter wildlife in Yala before unwinding on the golden beaches of Mirissa and Bentota.",
};

export const package6 = {
  price_with_hotel: 900,
  waypoints: [
    [79.88452, 7.17929], // Example waypoint 1
    [80.649991, 7.292631], // Example waypoint 2
    [80.746205, 7.942106], // Example waypoint 3
    [80.635036, 7.293121], // Example waypoint 3
    [79.88452, 7.17929], // Example waypoint 3
  ],
  image_1: "/kandy-2.jpg",
  image_2: "/colombo-2.jpg",
  image_3: "/sigiriya-6.jpg",
  price: 270,
  number_of_days: 14,
  short_title: "Sri Lanka’s Scenic & Cultural Odyssey",
  title: "Ultimate Sri Lanka Adventure: From Heritage to Coast",
  route: {
    1: "BIA",
    2: "Colombo",
    3: "Polonnaruwa",
    4: "Sigiriya",
    5: "Kandy",
    6: "Nuwara Eliya",
    7: "Ella",
    8: "Yala",
    9: "Mirissa",
    10: "Bentota",
  },
  itenary: [
    {
      1: {
        title: "Colombo",
        duration: "1 Night",
        things_to_do: ["City tour", "Galle Face Green", "Lotus Tower"],
      },
      2: {
        title: "Sigiriya",
        duration: "2 Nights",
        things_to_do: [
          "Pinnawala Elephant Orphanage",
          "Sigiriya Rock",
          "Pollonawa Ruins",
          "Habarna Safari",
          "Sigiriya Safari",
          "Elephant Back Safari",
          "Dambulla Cave Temple",
          "Spice Garden",
        ],
      },
      3: {
        title: "Kandy",
        duration: "2 Nights",
        things_to_do: [
          "Tooth Relic Temple",
          "Kandy View Point",
          "Peradeniya Botanical Garden",
          "Gem Museum",
          "Wood Carving Center",
          "Traditional Kandy Dance",
          "Tea Factory",
        ],
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
      end: "Colombo",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "City Tour",
          image: "/colombo-5.jpg",
        },
        {
          name: "Lotus Tower",
          image: "/lotus-tower.jpg",
        },
      ],
    },
    2: {
      start: "Colombo",
      end: "Pollonaruwa",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Pinnawala Elephant Orphanage",
          image: "/pinnawala.jpg",
        },
        {
          name: "Ancient Pollonaruwa Ruins",
          image: "/pollonaruwa.jpg",
        },
        {
          name: "Parakrama Samudra",
          image: "/sigiriya-1.jpg",
        },
      ],
    },
    3: {
      start: "Pollonaruwa",
      end: "Sigiya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Habarna Safari",
          image: "/habarana.jpg",
        },
        {
          name: "Elephant Back Safari",
          image: "/elephant.jpg",
        },
      ],
    },
    4: {
      start: "Sigiya",
      end: "Sigiya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Sigiriya Rock",
          image: "/sigiriya-8.jpg",
        },
        {
          name: "Sigiriya Safari",
          image: "/kandy-5.jpg",
        },
      ],
    },
    5: {
      start: "Sigiya",
      end: "Kandy",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Damubulla Cave Temple",
          image: "/sigiriya-8.jpg",
        },
        {
          name: "Spice Garden",
          image: "/kandy-5.jpg",
        },
        {
          name: "Tooth Relic Temple",
          image: "/kandy-1.jpg",
        },
        {
          name: "Gem Museum",
          image: "/kandy-1.jpg",
        },
        {
          name: "Wood Carving Center",
          image: "/kandy-1.jpg",
        },
        {
          name: "Kandy Traditional Dance",
          image: "/kandy-1.jpg",
        },
      ],
    },
    6: {
      start: "Kandy",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Kandy View Point",
          image: "/gem.jpg",
        },
        {
          name: "Wood Carving Center",
          image: "/galle-6.jpg",
        },
        {
          name: "Peradeniya Botanical Garden",
          image: "/nuwaraeliya-4.jpg",
        },
        {
          name: "Tea Factory",
          image: "/kandy-6.jpg",
        },
        {
          name: "Ramboda Waterfall",
          image: "/kandy-6.jpg",
        },
        {
          name: "Hanuman Temple",
          image: "/kandy-6.jpg",
        },
      ],
    },
    7: {
      start: "Nuwara Eliya",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Rama seetha temple",
          image: "/kandy-2.jpg",
        },
        {
          name: "Haggala Garden",
          image: "/ella-4.jpg",
        },
        {
          name: "Gregory Lake Boat Ride",
          image: "/ella-4.jpg",
        },
      ],
    },
    8: {
      start: "Nuwara Eliya",
      end: "Nuwara Eliya",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Pink Post Office",
          image: "/kandy-2.jpg",
        },
        {
          name: "Ambevela Farm",
          image: "/ella-4.jpg",
        },
      ],
    },
    9: {
      start: "Nuwara Eliya",
      end: "Ella (by train)",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Nine arches bridge",
          image: "/kandy-2.jpg",
        },
        {
          name: "Rawana Waterfall",
          image: "/ella-4.jpg",
        },
      ],
    },
    10: {
      start: "Ella",
      end: "Yala",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Little Adam's Peak",
          image: "/kandy-2.jpg",
        },
        {
          name: "Katagarama Temple",
          image: "/ella-4.jpg",
        },
      ],
    },
    11: {
      start: "Yala",
      end: "Yala",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Yala Safari",
          image: "/kandy-2.jpg",
        },
      ],
    },
    12: {
      start: "Yala",
      end: "Mirissa",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Whale watching",
          image: "/kandy-2.jpg",
        },
      ],
    },
    13: {
      start: "Mirissa",
      end: "Bentota",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Waligama Still Fishermen",
          image: "/kandy-2.jpg",
        },
        {
          name: "Galle Fort",
          image: "/kandy-2.jpg",
        },
        {
          name: "Hikkaduwa Glass Bottom Boat Ride",
          image: "/kandy-2.jpg",
        },
        {
          name: "Turtle Conservation Center",
          image: "/kandy-2.jpg",
        },
      ],
    },
    14: {
      start: "Bentota",
      end: "Bentota",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [
        {
          name: "Water Sports",
          image: "/kandy-2.jpg",
        },
        {
          name: "Mongrove Boat Ride",
          image: "/kandy-2.jpg",
        },
        {
          name: "Fish Therapy",
          image: "/kandy-2.jpg",
        },
      ],
    },
    15: {
      start: "Bentota",
      end: "BIA",
      distance: "115km",
      duration: "3 hours",
      things_to_do: [],
    },
  },
  short_description:
    "Discover Sri Lanka’s best destinations on this all-encompassing route, covering history, nature, wildlife, and stunning beaches from Colombo to Bentota.",
  description:
    "Embark on an unforgettable journey through Sri Lanka, from the bustling capital to ancient cities, misty highlands, and breathtaking coastal escapes. Explore cultural landmarks in Polonnaruwa and Sigiriya, experience the charm of Kandy and Nuwara Eliya, and enjoy the scenic beauty of Ella. Encounter wildlife in Yala before unwinding on the golden beaches of Mirissa and Bentota.",
};

export const ella = {
  title: "Ella: Nature's Tranquil Escape",
  image_1: "/ella.jpg",
  image_2: "/ella-10.jpg",
  image_3: "/ella-2.jpg",
  description: `Nestled in the lush green hills of Sri Lanka, Ella is a charming town that captivates visitors with its breathtaking landscapes and serene atmosphere. Known for its stunning vistas, this idyllic destination is surrounded by rolling hills, tea plantations, and cascading waterfalls, making it a haven for nature lovers and adventure enthusiasts alike. Ella is not just a feast for the eyes; it’s a place where you can immerse yourself in the rich culture and history of Sri Lanka while enjoying outdoor activities like hiking, exploring tea estates, and experiencing local cuisine.

    As you wander through the town, you'll be greeted by the friendly smiles of the locals and the soothing sounds of nature that envelop this enchanting area. The cool climate and vibrant greenery create an inviting ambiance that encourages exploration. Whether you seek thrilling adventures or tranquil moments in nature, Ella offers something for everyone. From iconic landmarks like the famous Nine Arches Bridge to breathtaking hikes up to Ella Rock and Little Adam's Peak, the town is a treasure trove of experiences waiting to be discovered.
    
    If you're planning a trip to this picturesque destination, here’s a guide to some of the must-visit attractions in Ella that will ensure your journey is unforgettable.`,
  conclusion:
    "Ella is truly a gem in the heart of Sri Lanka, offering a perfect blend of adventure, relaxation, and natural beauty. Whether you're hiking through the hills, exploring tea plantations, or simply enjoying the breathtaking views, Ella promises an unforgettable experience that will leave you enchanted. So pack your bags and get ready to discover the magic of this beautiful town!",

  things_to_do: [
    {
      section: "Nine Arches Bridge: A Marvel of Engineering",
      text: "One of Ella’s most iconic landmarks, the Nine Arches Bridge is a stunning viaduct that dates back to the 1920s. Constructed entirely of bricks and stone, this architectural marvel is surrounded by lush greenery and tea plantations. The bridge is not only a perfect spot for photography but also offers stunning views of the surrounding landscape. Be sure to catch a train passing over the bridge for an unforgettable experience!",
      image: "/ella-1.jpg",
    },
    {
      section: "Ella Rock: A Hiker’s Paradise",
      text: "For those who love a challenge, Ella Rock is a must-visit. This challenging hike rewards adventurers with breathtaking views of the surrounding mountains and valleys. The trek typically takes about 2-3 hours, and it's best to start early in the morning to catch the sunrise over the hills. Don’t forget your camera; the views are worth every step!",
      image: "/ella-2.jpg",
    },
    {
      section: "Little Adam's Peak: A Scenic Walk",
      text: "If you’re looking for a more leisurely hike, Little Adam's Peak is perfect for you. This easier trek takes about 1-2 hours and is suitable for all fitness levels. The hike offers panoramic views of Ella and the surrounding landscape, making it a favorite among visitors. Bring a picnic and enjoy the serene atmosphere at the summit.",
      image: "/ella-3.jpg",
    },
    {
      section: "Explore Tea Plantations and Factories",
      text: "No trip to Ella is complete without experiencing its famous tea culture. Visit local tea plantations and factories, such as the Halpe Tea Factory, to learn about the tea-making process. You'll have the chance to sample some of the finest teas and understand the importance of this industry in Sri Lanka's economy.",
      image: "/ella-4.jpg",
    },
    {
      section: "Diyaluma Falls: Nature’s Spectacle",
      text: "Just a short drive from Ella, Diyaluma Falls is one of the tallest waterfalls in Sri Lanka, cascading down from a height of 220 meters. You can hike to the top for stunning views or relax in the natural pools at the base. It's an ideal spot for a refreshing swim and a picnic amid nature’s beauty.",
      image: "/ella-5.jpg",
    },
    {
      section: "Ella Spice Garden: A Flavorful Experience",
      text: "Discover the secrets of Sri Lanka's spices at the Ella Spice Garden. Here, you can take a guided tour to learn about various spices, their uses, and how they are cultivated. It's a fascinating experience that will deepen your appreciation for the island's rich culinary heritage.",
      image: "/ella-6.jpg",
    },
    {
      section: "Buddha's Statue: A Peaceful Retreat",
      text: "Take a moment to reflect at the Buddha's Statue, located near the Ella town center. This large seated statue provides a peaceful atmosphere and offers beautiful views of the surrounding hills. It's a perfect spot for meditation and quiet contemplation.",
      image: "/ella-7.jpg",
    },
    {
      section: "Ravana Falls: A Natural Wonder",
      text: "Ravana Falls is another picturesque waterfall located near Ella, named after the legendary king of Sri Lanka. The waterfall is easily accessible and is a great spot for a quick dip or a relaxing picnic amidst nature.",
      image: "/ella-8.jpg",
    },
    {
      section: "The Green Tea Plantation: A Scenic Walk",
      text: "Wander through the rolling hills of the Green Tea Plantation, where endless fields of tea stretch across the landscape. This is a photographer’s dream and a fantastic opportunity to enjoy a peaceful walk in nature.",
      image: "/ella-9.jpg",
    },
    {
      section: "Kithal Ella Railway Station: A Charming Stop",
      text: "Don’t forget to visit the quaint Kithal Ella Railway Station, which is popular for its charming scenery and serves as a starting point for various hiking trails. It's a great place to soak in the local atmosphere.",
      image: "/ella-10.jpg",
    },
  ],
};

export const colombo = {
  title: "Colombo: The Vibrant Capital",
  image_1: "/colombo.jpg",
  image_2: "/colombo-2.jpg",
  image_3: "/colombo-1.jpg",
  description: `Colombo, the bustling commercial and cultural hub of Sri Lanka, offers a unique blend of modernity and tradition. With its rich history, colonial architecture, and thriving street markets, Colombo is a city that constantly evolves while retaining its heritage. Whether you’re walking along the palm-lined beaches or exploring ancient temples, Colombo has something for everyone—history enthusiasts, food lovers, and adventure seekers alike.`,
  conclusion:
    "From its lively streets to the tranquil temples, Colombo offers an eclectic mix of experiences. Whether you're exploring colonial history, indulging in street food, or relaxing by the sea, Colombo promises a memorable urban adventure.",
  things_to_do: [
    {
      section: "Galle Face Green: A Seaside Escape",
      text: "Galle Face Green, a large open space by the sea, is the perfect place to unwind and enjoy the sunset. Once used as a racecourse during the British colonial era, it is now a vibrant park where families gather, children fly kites, and street vendors offer delicious local snacks. The view of the Indian Ocean and the breeze from the sea make it an ideal spot for a leisurely evening.",
      image: "/colombo-1.jpg",
    },
    {
      section: "Gangaramaya Temple: A Spiritual Retreat",
      text: "Gangaramaya Temple is an important Buddhist temple in Colombo, renowned for its stunning architecture and eclectic collection of relics. The temple blends traditional Sri Lankan, Thai, Indian, and Chinese architectural styles. Visitors can explore the temple, the museum, and the adjacent library, which contains ancient manuscripts and artifacts. It’s a serene space to meditate and learn about Buddhist teachings.",
      image: "/colombo-2.jpg",
    },
    {
      section: "Colombo National Museum: A Walk Through History",
      text: "The Colombo National Museum, housed in a grand colonial building, is the largest museum in Sri Lanka. It showcases a vast collection of artifacts, including ancient sculptures, paintings, and royal regalia. The museum provides insight into Sri Lanka’s cultural and historical development, making it a must-visit for history buffs and those interested in the island’s past.",
      image: "/colombo-3.jpg",
    },
    {
      section: "Beira Lake: A Serene Escape",
      text: "Beira Lake, located in the heart of Colombo, offers a peaceful escape from the hustle and bustle of the city. Visitors can take a boat ride around the lake or enjoy a leisurely stroll along its shore, surrounded by trees and lush greenery. The lake is also home to the Seema Malaka Temple, an iconic structure designed by renowned architect Geoffrey Bawa, which floats on the water.",
      image: "/colombo-4.jpg",
    },
    {
      section: "Pettah Market: A Cultural Shopping Experience",
      text: "Pettah Market is a bustling, colorful market where locals shop for everything from textiles to spices, electronics, and fresh produce. It’s a chaotic but exciting place to explore, with vibrant street life and plenty of opportunities to haggle for a good deal. The market offers a unique insight into Colombo’s lively culture and economy.",
      image: "/colombo-5.jpg",
    },
    {
      section: "Independence Square: A Historic Landmark",
      text: "Independence Square is a key national landmark that commemorates Sri Lanka’s independence from British rule in 1948. The area is beautifully landscaped, with a large pavilion and a statue of the first prime minister. Visitors can enjoy a walk through the park, reflect on Sri Lanka’s independence, or simply relax in the peaceful surroundings.",
      image: "/colombo-6.jpg",
    },
    {
      section: "Colombo Harbour: The Gateway to Sri Lanka",
      text: "As one of the busiest ports in South Asia, Colombo Harbour has played a crucial role in Sri Lanka’s trade and history. Take a boat tour around the harbor to see the ships docked, the bustling port activities, and the vibrant life along the waterfront. It's a great way to understand Colombo’s maritime heritage.",
      image: "/colombo-7.jpg",
    },
    {
      section: "Colombo Lighthouse: A Beacon of History",
      text: "Located near Galle Face Green, the Colombo Lighthouse is one of the oldest lighthouses in Sri Lanka. It stands as a symbol of the city’s colonial past and maritime history. Visitors can take a short walk to the lighthouse, enjoy the view of the coast, and learn about its significance in guiding ships into Colombo’s busy harbor.",
      image: "/colombo-8.jpg",
    },
  ],
};

export const hikkaduwa = {
  title: "Hikkaduwa: Coastal Paradise",
  image_1: "/hikkaduwa-4.jpg",
  image_2: "/hikkaduwa-7.jpg",
  image_3: "/hikkaduwa-8.jpg",
  description: `Hikkaduwa is a charming beach town on the southwest coast of Sri Lanka, famous for its crystal-clear waters, vibrant coral reefs, and laid-back atmosphere. Known as a surfing hotspot, it also attracts snorkelers, divers, and beach lovers who come to relax and enjoy the sunny climate. With its lively beachfront cafes, yoga retreats, and water activities, Hikkaduwa offers an unforgettable coastal experience.`,
  conclusion:
    "Whether you’re surfing the waves, exploring coral reefs, or enjoying a leisurely day on the beach, Hikkaduwa promises a perfect getaway with a mix of adventure, relaxation, and natural beauty.",
  things_to_do: [
    {
      section: "Snorkeling at Hikkaduwa Coral Reef",
      text: "Hikkaduwa is home to one of the most popular coral reefs in Sri Lanka, making it an ideal spot for snorkeling. The clear blue waters provide an up-close look at vibrant coral gardens, tropical fish, and sea turtles. Several dive centers along the beach offer guided snorkeling tours, ensuring you get the most out of your underwater adventure.",
      image: "/hikkaduwa-1.jpg",
    },
    {
      section: "Surfing at Hikkaduwa Beach",
      text: "Hikkaduwa’s consistent waves make it a haven for surfers of all levels. Whether you’re a seasoned surfer or a beginner looking for lessons, Hikkaduwa Beach has surf schools and rental shops that cater to all your needs. The lively surf culture here ensures you’ll find plenty of fellow surfers to share the waves with.",
      image: "/hikkaduwa-2.jpg",
    },
    {
      section: "Visit Hikkaduwa National Park",
      text: "Hikkaduwa National Park is a protected area that includes both land and marine ecosystems. You can explore the park’s biodiversity by taking a boat ride through mangrove swamps or walking along the trails that wind through the forest. The park is home to a variety of bird species, reptiles, and coastal wildlife, making it a must-visit for nature enthusiasts.",
      image: "/hikkaduwa-3.jpg",
    },
    {
      section: "Relax at Hikkaduwa Beach",
      text: "If you're looking to simply relax and unwind, Hikkaduwa Beach offers a perfect spot to do so. The wide sandy beach is ideal for sunbathing, leisurely walks, and beach volleyball. The gentle waves and warm sand make it a serene escape from the hustle and bustle of daily life.",
      image: "/hikkaduwa-4.jpg",
    },
    {
      section: "Explore the Tsunami Photo Museum",
      text: "The Tsunami Photo Museum in Hikkaduwa tells the story of the devastating 2004 Indian Ocean tsunami and its impact on the region. The museum features photos, personal stories, and accounts from locals who survived the tragedy. Visiting the museum is both moving and educational, offering an opportunity to reflect on the resilience of the community.",
      image: "/hikkaduwa-5.jpg",
    },
    {
      section: "Boat Trip to Hikkaduwa Coral Sanctuary",
      text: "Take a boat trip to the nearby coral sanctuary, where you can explore the marine life from the comfort of a glass-bottom boat. The sanctuary is home to a wide variety of fish, sea turtles, and other marine creatures. It's an ideal way to enjoy the underwater world without getting wet!",
      image: "/hikkaduwa-6.jpg",
    },
    {
      section: "Sunset at Narigama Beach",
      text: "For a more tranquil beach experience, head to Narigama Beach. This quieter beach, located just outside of the main Hikkaduwa area, offers a peaceful spot to watch the sunset. The serene atmosphere and picturesque views make it a perfect place to end a day of adventure.",
      image: "/hikkaduwa-7.jpg",
    },
    {
      section: "Visit the Hikkaduwa Temple",
      text: "The Hikkaduwa Temple is a small but beautiful Buddhist temple that is worth visiting for a quiet moment of reflection. The temple features traditional Sri Lankan architecture and provides insight into the spiritual life of the local community.",
      image: "/hikkaduwa-8.jpg",
    },
  ],
};

export const jaffna = {
  title: "Jaffna: The Northern Gem",
  image_1: "/jaffna-1.jpg",
  image_2: "/jaffna-4.jpg",
  image_3: "/jaffna-3.jpg",
  description: `Jaffna, located at the northern tip of Sri Lanka, is a cultural melting pot that offers a glimpse into the island’s rich Tamil heritage. Known for its unique history, vibrant Hindu temples, and stunning landscapes, Jaffna is a destination for those looking to explore Sri Lanka’s lesser-known but equally captivating side. Its colonial fort, ancient temples, and sandy beaches offer visitors a mix of history, culture, and natural beauty.`,
  conclusion:
    "Jaffna’s captivating history, rich culture, and scenic beauty make it an off-the-beaten-path destination that offers a deeply enriching experience. Whether you're exploring ancient forts, sampling local cuisine, or visiting sacred temples, Jaffna is a place that will leave a lasting impression.",
  things_to_do: [
    {
      section: "Jaffna Fort: A Glimpse Into the Past",
      text: "Built in the 17th century by the Portuguese and later expanded by the Dutch, Jaffna Fort stands as a powerful reminder of the city’s colonial past. The fort is a maze of walls, gates, and dungeons that once housed military personnel and prisoners. Today, it serves as a popular tourist attraction where visitors can explore its ramparts and learn about its history.",
      image: "/jaffna-1.jpg",
    },
    {
      section: "Nallur Kandaswamy Kovil: A Sacred Temple",
      text: "The Nallur Kandaswamy Kovil is one of the most revered Hindu temples in Sri Lanka. Dedicated to Lord Murugan, the temple is known for its intricate carvings, golden statues, and annual festivals. The temple complex is vibrant and spiritual, attracting thousands of devotees each year. Visitors can explore the temple’s architectural beauty and participate in daily rituals.",
      image: "/jaffna-2.jpg",
    },
    {
      section: "Jaffna Library: A Center of Knowledge",
      text: "The Jaffna Public Library is one of the largest and most important libraries in Sri Lanka. It holds a vast collection of Tamil literature, historical records, and manuscripts. The library was destroyed during the civil war but has since been restored to its former glory. It remains a symbol of knowledge and resilience for the people of Jaffna.",
      image: "/jaffna-3.jpg",
    },
    {
      section: "Casuarina Beach: A Quiet Escape",
      text: "For a relaxing beach experience, head to Casuarina Beach, located on the nearby island of Karainagar. The beach is known for its pristine sand, clear water, and calm atmosphere. It’s a great place to enjoy a peaceful day swimming, sunbathing, or taking a leisurely walk along the shore.",
      image: "/jaffna-4.jpg",
    },
    {
      section: "Keerimalai Springs: A Sacred Natural Wonder",
      text: "Keerimalai Springs is a natural spring located by the sea. The waters are believed to have healing properties, attracting many devotees who come to bathe in the springs for spiritual purification. The location also offers stunning views of the coastline and is a peaceful place for contemplation.",
      image: "/jaffna-5.jpg",
    },
    {
      section: "Dambakola Patuna: A Historical Landmark",
      text: "Dambakola Patuna is a historic site where Buddhism was introduced to Sri Lanka by the missionary Mahinda Thera. The site is home to ancient ruins, a Buddhist stupa, and stunning views of the surrounding area. Visiting this site provides insight into the island’s early Buddhist history.",
      image: "/jaffna-6.jpg",
    },
    {
      section: "Jaffna Market: A Taste of Local Life",
      text: "The bustling Jaffna Market offers a vibrant display of local life. From fresh produce and seafood to spices and handmade crafts, the market provides an authentic look at the daily lives of Jaffna’s residents. It’s a great place to sample local delicacies and purchase unique souvenirs.",
      image: "/jaffna-7.jpg",
    },
    {
      section: "Point Pedro: The Northernmost Tip of Sri Lanka",
      text: "Point Pedro is the northernmost point of Sri Lanka, offering panoramic views of the surrounding ocean. The area is serene and quiet, making it a perfect spot to reflect and enjoy nature. It’s a unique destination for those wanting to explore Sri Lanka’s northernmost landscape.",
      image: "/jaffna-8.jpg",
    },
  ],
};

export const nuwara_eliya = {
  title: "Nuwara Eliya: The Little England of Sri Lanka",
  image_1: "/nuwaraeliya-1.jpg",
  image_2: "/nuwaraeliya-2.jpg",
  image_3: "/nuwaraeliya-3.jpg",
  description: `Nuwara Eliya, often called ‘Little England,’ is a charming hill station in Sri Lanka known for its cool climate, colonial-era architecture, and endless tea plantations. Surrounded by misty mountains and lush greenery, it’s the perfect destination for those seeking a scenic retreat.`,
  conclusion:
    "Whether you're sipping world-famous Ceylon tea, strolling through beautifully landscaped gardens, or hiking through breathtaking landscapes, Nuwara Eliya is a destination that offers relaxation and adventure in equal measure.",
  things_to_do: [
    {
      section: "Gregory Lake: A Scenic Getaway",
      text: "Enjoy boating, cycling, or a peaceful walk along Gregory Lake, a picturesque spot right in the heart of Nuwara Eliya.",
      image: "/nuwaraeliya-1.jpg",
    },
    {
      section: "Horton Plains National Park: A Hiker’s Paradise",
      text: "A UNESCO World Heritage Site, Horton Plains offers the famous World's End viewpoint, stunning waterfalls, and diverse wildlife.",
      image: "/nuwaraeliya-2.jpg",
    },
    {
      section: "Tea Plantation Tours: A Taste of Sri Lanka",
      text: "Visit renowned tea factories like Pedro Tea Estate and Mackwoods to learn about tea production and sample fresh brews.",
      image: "/nuwaraeliya-3.jpg",
    },
    {
      section: "Victoria Park: A Botanical Wonderland",
      text: "One of the most well-maintained parks in South Asia, Victoria Park is perfect for a relaxing stroll among colorful flowers and exotic bird species.",
      image: "/nuwaraeliya-4.jpg",
    },
    {
      section: "Ambewela Farm: The Dairy Land of Sri Lanka",
      text: "Known as ‘Little New Zealand,’ this farm offers fresh dairy products and a chance to see cows, goats, and rabbits in a scenic setting.",
      image: "/nuwaraeliya-5.jpg",
    },
    {
      section: "Seetha Amman Temple: A Mythological Landmark",
      text: "A beautiful Hindu temple tied to the Ramayana legend, said to be the place where Sita was held captive by Ravana.",
      image: "/nuwaraeliya-6.jpg",
    },
    {
      section: "Moon Plains: A 360-Degree View of Nature",
      text: "A less crowded alternative to Horton Plains, Moon Plains offers breathtaking panoramic views of surrounding mountains.",
      image: "/nuwaraeliya-7.jpg",
    },
    {
      section: "Lover’s Leap Waterfall: A Romantic Escape",
      text: "This stunning waterfall is tied to a local legend and offers a serene hiking trail with mesmerizing views.",
      image: "/nuwaraeliya-8.jpg",
    },
  ],
};

export const trincomalee = {
  title: "Trincomalee: The Jewel of the East Coast",
  image_1: "/trincomalee-1.jpg",
  image_2: "/trincomalee-2.jpg",
  image_3: "/trincomalee-3.jpg",
  description: `Trincomalee, located on Sri Lanka’s east coast, is a stunning beachside town known for its pristine beaches, rich history, and diverse marine life. From ancient temples to breathtaking diving spots, this coastal paradise has something for everyone.`,
  conclusion:
    "Whether you're exploring historical landmarks, swimming with dolphins, or soaking up the sun on golden beaches, Trincomalee is a must-visit destination for beach lovers and adventure seekers alike.",
  things_to_do: [
    {
      section: "Nilaveli Beach: A Tropical Escape",
      text: "One of the most beautiful beaches in Sri Lanka, Nilaveli Beach is perfect for sunbathing, swimming, and relaxing in paradise.",
      image: "/trincomalee-1.jpg",
    },
    {
      section: "Pigeon Island National Park: A Snorkeler’s Dream",
      text: "This marine sanctuary is home to vibrant coral reefs and a variety of marine life, making it a top spot for snorkeling and diving.",
      image: "/trincomalee-2.jpg",
    },
    {
      section: "Koneswaram Temple: A Sacred Pilgrimage",
      text: "Perched on Swami Rock, this stunning Hindu temple offers breathtaking ocean views and deep spiritual significance.",
      image: "/trincomalee-3.jpg",
    },
    {
      section: "Fort Frederick: A Colonial Relic",
      text: "Built by the Portuguese and later expanded by the Dutch and British, this historic fort is a must-visit for history lovers.",
      image: "/trincomalee-4.jpg",
    },
    {
      section: "Uppuveli Beach: A Tranquil Retreat",
      text: "Less crowded than Nilaveli, Uppuveli Beach is perfect for a peaceful escape with calm waters and beachfront restaurants.",
      image: "/trincomalee-5.jpg",
    },
    {
      section: "Whale and Dolphin Watching: A Spectacular Sight",
      text: "Trincomalee is one of the best places in Sri Lanka to spot blue whales and playful dolphins in their natural habitat.",
      image: "/trincomalee-6.jpg",
    },
    {
      section: "Hot Water Wells of Kanniya: A Natural Wonder",
      text: "These ancient hot springs are believed to have healing properties and are a unique experience for visitors.",
      image: "/trincomalee-7.jpg",
    },
    {
      section: "Swami Rock: The Lover’s Leap",
      text: "A breathtaking cliffside viewpoint with a tragic legend, offering some of the most picturesque ocean views in Trincomalee.",
      image: "/trincomalee-8.jpg",
    },
  ],
};

export const galle = {
  title: "Galle: A Colonial Gem by the Sea",
  image_1: "/galle-4.jpg",
  image_2: "/galle-6.jpg",
  image_3: "/galle-1.jpg",
  description: `Galle, a UNESCO World Heritage Site, is a charming city that blends colonial history with coastal beauty. Famous for its well-preserved fort, stunning beaches, and vibrant arts scene, Galle is an unforgettable destination.`,
  conclusion:
    "From exploring historic forts to enjoying stunning beaches, Galle offers a perfect mix of history, culture, and relaxation, making it a must-visit spot on Sri Lanka’s southern coast.",
  things_to_do: [
    {
      section: "Galle Fort: A Walk Through History",
      text: "Built by the Portuguese and later fortified by the Dutch, this UNESCO-listed fort is filled with charming streets, colonial architecture, and stunning sea views.",
      image: "/galle-1.jpg",
    },
    {
      section: "Galle Lighthouse: A Picture-Perfect Landmark",
      text: "Sri Lanka’s oldest lighthouse stands tall within Galle Fort, offering a scenic coastal view and a great photo opportunity.",
      image: "/galle-9.jpg",
    },
    {
      section: "Unawatuna Beach: A Tropical Paradise",
      text: "Just a short drive from Galle, Unawatuna Beach is perfect for swimming, snorkeling, and enjoying the laid-back beach vibe.",
      image: "/galle-3.jpg",
    },
    {
      section: "Japanese Peace Pagoda: A Serene Escape",
      text: "Perched on a hill overlooking the ocean, this Buddhist stupa offers a peaceful atmosphere and breathtaking sunset views.",
      image: "/galle-4.jpg",
    },
    {
      section: "Jungle Beach: A Hidden Gem",
      text: "Tucked away from the crowds, Jungle Beach offers crystal-clear waters and a tranquil atmosphere, ideal for relaxation.",
      image: "/galle-5.jpg",
    },
    {
      section: "Explore Galle’s Art Scene",
      text: "Galle is home to vibrant art galleries and boutique shops, perfect for discovering local artists and unique souvenirs.",
      image: "/galle-6.jpg",
    },
    {
      section: "Visit the Maritime Archaeology Museum",
      text: "Located inside Galle Fort, this museum showcases artifacts from shipwrecks and Sri Lanka’s maritime history.",
      image: "/galle-7.jpg",
    },
    {
      section: "Koggala Lake: A Scenic Boat Ride",
      text: "Take a boat ride on Koggala Lake, exploring small islands, Buddhist temples, and a cinnamon plantation.",
      image: "/galle-8.jpg",
    },
  ],
};

export const kandy = {
  title: "Kandy: The Hilltop Sanctuary",
  image_1: "/kandy-1.jpg",
  image_2: "/kandy-2.jpg",
  image_3: "/kandy-3.jpg",
  description: `Nestled in the heart of Sri Lanka, Kandy is a picturesque city surrounded by lush greenery and tranquil lakes. As the last capital of the ancient Sinhala kings, it holds a special place in Sri Lanka’s history and culture. Kandy is home to the revered Temple of the Tooth, beautiful gardens, and scenic hill views, making it a perfect blend of spirituality, history, and natural beauty.`,
  conclusion:
    "Kandy’s rich cultural heritage, combined with its stunning landscapes and serene atmosphere, makes it a must-visit destination in Sri Lanka. Whether you’re exploring ancient temples, enjoying the beauty of the Peradeniya Botanical Gardens, or simply soaking in the peaceful vibe of Kandy Lake, this hilltop city will leave you in awe.",
  things_to_do: [
    {
      section: "Temple of the Tooth Relic: A Sacred Experience",
      text: "The Temple of the Tooth Relic is the most sacred Buddhist temple in Sri Lanka, housing the relic of the Buddha’s tooth. It is believed that the relic holds divine power, and pilgrims from all over the world visit Kandy to worship here. The temple is a magnificent blend of Sri Lankan and South Indian architectural styles and offers a tranquil atmosphere for reflection and devotion.",
      image: "/kandy-1.jpg",
    },
    {
      section: "Kandy Lake: A Peaceful Retreat",
      text: "Kandy Lake, located in the heart of the city, offers a serene escape from the hustle and bustle. Visitors can take a leisurely stroll around the lake or enjoy a boat ride while taking in the beauty of the surrounding hills. The lake is also home to the Kandy Esala Perahera, one of Sri Lanka’s most famous cultural festivals, held annually in honor of the Tooth Relic.",
      image: "/kandy-2.jpg",
    },
    {
      section: "Peradeniya Botanical Gardens: A Floral Paradise",
      text: "The Royal Botanical Gardens in Peradeniya is a stunning 147-acre garden located just outside Kandy. Known for its diverse collection of plants, including orchids, spices, and medicinal plants, the gardens are a peaceful oasis for nature lovers. Visitors can explore the well-maintained pathways, relax by the lotus pond, and marvel at the giant trees.",
      image: "/kandy-3.jpg",
    },
    {
      section: "Kandy Viewpoint: A Breathtaking Panoramic View",
      text: "For a stunning panoramic view of the city, head to the Kandy Viewpoint located on a hill above the city. The viewpoint offers an incredible view of Kandy Lake, the Temple of the Tooth, and the surrounding hills. It’s the perfect spot for photography, especially at sunrise or sunset.",
      image: "/kandy-4.jpg",
    },
    {
      section: "Udawatta Kele Sanctuary: A Nature Lover’s Haven",
      text: "Udawatta Kele Sanctuary is a forest reserve located in the heart of Kandy. The sanctuary is home to a variety of wildlife, including monkeys, birds, and butterflies. It offers several walking trails that take visitors through lush forests, past streams, and up to viewpoints with stunning views of Kandy. It’s a great place for birdwatching and nature walks.",
      image: "/kandy-5.jpg",
    },
    {
      section: "Cultural Show in Kandy: A Glimpse Into Tradition",
      text: "Kandy is famous for its cultural performances, which include traditional Kandyan dance and drumming. These shows are often held in the evenings at various cultural centers, offering visitors a chance to experience Sri Lanka’s rich performing arts tradition. The vibrant dances, rhythmic drumming, and colorful costumes are sure to leave you mesmerized.",
      image: "/kandy-6.jpg",
    },
    {
      section: "The Royal Palace of Kandy: A Glimpse Into Royalty",
      text: "The Royal Palace of Kandy, once home to the Sinhala kings, is now a museum that showcases the royal artifacts and historical items from the era. The palace offers insight into the grandeur of Sri Lanka’s monarchy and the cultural significance of Kandy as the last capital of the island’s ancient kingdoms.",
      image: "/kandy-7.jpg",
    },
    {
      section: "Kandy City Tour: Discover the Heart of Sri Lanka",
      text: "A city tour of Kandy offers an opportunity to explore the local markets, historical landmarks, and colorful temples. A walk through the streets of Kandy reveals the unique blend of colonial-era architecture and traditional Sri Lankan culture. The city is full of life, with its bustling markets, vibrant shops, and friendly locals.",
      image: "/kandy-8.jpg",
    },
  ],
};

export const anuradhapura = {
  title: "Anuradhapura: The Ancient Kingdom",
  image_1: "/anuradhapura-1.jpg",
  image_2: "/anuradhapura-2.jpg",
  image_3: "/anuradhapura-3.jpg",
  description: `Anuradhapura, the first capital of Sri Lanka, is an awe-inspiring UNESCO World Heritage Site that holds immense historical, cultural, and religious significance. As one of the oldest continuously inhabited cities in the world, it offers a journey back in time to an era of grand temples, advanced irrigation systems, and remarkable architectural feats. The city flourished for over a thousand years before being abandoned due to invasions, yet its ruins stand as a testament to the brilliance of ancient Sri Lankan civilization. Whether you’re a history buff, a spiritual seeker, or simply an explorer of unique destinations, Anuradhapura will leave you mesmerized with its vast heritage, tranquil landscapes, and sacred Buddhist sites.`,
  conclusion:
    "With its incredible archaeological sites and deep spiritual significance, Anuradhapura is a destination unlike any other. As you wander through the vast ruins, meditate under sacred bodhi trees, or admire the marvels of ancient engineering, you’ll gain a profound appreciation for Sri Lanka’s rich history and Buddhist heritage. Anuradhapura is not just a place to visit—it’s an experience that stays with you forever.",
  things_to_do: [
    {
      section: "Ruwanwelisaya Stupa: The Crown Jewel of Anuradhapura",
      text: "One of the most significant and breathtaking stupas in Sri Lanka, Ruwanwelisaya was built by King Dutugemunu in the 2nd century BC to honor the teachings of Buddhism. This colossal white structure, standing 103 meters tall, is believed to enshrine sacred relics of the Buddha. The atmosphere here is deeply spiritual, with thousands of devotees gathering daily to offer flowers, chant prayers, and meditate. The stupa is especially mesmerizing at dusk, as golden lights illuminate its magnificent dome against the twilight sky. Walking around Ruwanwelisaya, you’ll feel a sense of tranquility and reverence that makes it one of the most unforgettable experiences in Anuradhapura.",
      image: "/anuradhapura-1.jpg",
    },
    {
      section: "Sri Maha Bodhi Tree: A Living Relic of Buddhism",
      text: "Considered one of the most sacred places in Sri Lanka, the Sri Maha Bodhi is a direct descendant of the tree under which Buddha attained enlightenment in Bodh Gaya, India. Planted in 288 BC, this is the oldest living tree in the world with a recorded history, carefully protected and worshipped for over 2,300 years. Devotees from across the country visit this sacred site to perform rituals, offer prayers, and light oil lamps. The sight of pilgrims dressed in white, chanting mantras, and the gentle rustling of the sacred tree’s leaves create an atmosphere of deep peace and devotion. Visiting the Sri Maha Bodhi at sunrise or sunset enhances the spiritual experience, making it an unmissable stop in Anuradhapura.",
      image: "/anuradhapura-2.jpg",
    },
    {
      section: "Jetavanaramaya Stupa: A Marvel of Ancient Engineering",
      text: "Built in the 3rd century AD by King Mahasena, the Jetavanaramaya Stupa was once the tallest structure in the ancient world, standing at 122 meters. This immense stupa, constructed using over 93 million bricks, showcases the advanced engineering skills of early Sri Lankan civilizations. As you walk around its vast ruins, you can still sense the grandeur of what was once a major Buddhist monastery housing thousands of monks. Despite centuries of weathering, the Jetavanaramaya remains an imposing and humbling presence, reminding visitors of Sri Lanka’s golden age of architecture and religious devotion.",
      image: "/anuradhapura-3.jpg",
    },
    {
      section: "Isurumuniya Temple: A Hidden Gem Among Rocks",
      text: "Tucked away amidst rocky landscapes, Isurumuniya Temple is known for its intricate stone carvings, including the world-famous ‘Isurumuniya Lovers.’ This 6th-century carving, depicting a royal couple in an intimate pose, has sparked many theories about its origins. The temple itself exudes a peaceful ambiance, with a lotus pond reflecting the rock-hewn shrine. A short climb up the surrounding rocks offers a stunning panoramic view of Anuradhapura. This is an ideal spot for meditation, photography, or simply soaking in the serenity of this ancient sanctuary.",
      image: "/anuradhapura-4.jpg",
    },
    {
      section: "Abhayagiri Monastery: A Glimpse Into Monastic Life",
      text: "Once a thriving center of Buddhist learning, the Abhayagiri Monastery was home to thousands of monks and scholars from around the world. Established in the 1st century BC, it was one of the largest Buddhist monastic complexes in South Asia. The towering Abhayagiri Stupa, standing at 75 meters, dominates the site, surrounded by ruins of lecture halls, meditation chambers, and stone inscriptions. Exploring this vast complex feels like stepping into an ancient world where monks once debated philosophy, practiced meditation, and preserved Buddhist scriptures. The serene surroundings make it a perfect place to reflect on the wisdom of the past.",
      image: "/anuradhapura-5.jpg",
    },
    {
      section: "Kuttam Pokuna (Twin Ponds): An Ancient Bathing Complex",
      text: "These beautifully designed twin ponds are among the finest examples of ancient Sri Lankan hydraulic engineering. Believed to have been used by monks for bathing and ritual purification, the ponds showcase remarkable symmetry, stone craftsmanship, and a sophisticated water filtration system. The tranquil setting, with reflections of the surrounding trees in the water, makes it a peaceful and picturesque spot to admire Anuradhapura’s architectural brilliance.",
      image: "/anuradhapura-6.jpg",
    },
    {
      section: "Mihintale: The Birthplace of Buddhism in Sri Lanka",
      text: "Mihintale, located a short drive from Anuradhapura, is considered the cradle of Buddhism in Sri Lanka. It was here that Mahinda Thero, the son of Emperor Ashoka of India, met King Devanampiya Tissa and introduced Buddhism to the island in 247 BC. The site is dotted with ancient stupas, meditation caves, and a grand staircase of over 1,800 steps leading to the summit. Reaching the top rewards you with breathtaking views and a profound sense of spirituality. Visiting Mihintale during the Poson Poya festival, when thousands of pilgrims gather here, is an unforgettable experience.",
      image: "/anuradhapura-7.jpg",
    },
    {
      section: "Anuradhapura Archaeological Museum: A Window Into the Past",
      text: "For those wanting to dive deeper into the history of Anuradhapura, this museum houses a fascinating collection of artifacts, sculptures, coins, and ancient tools. It provides invaluable insight into the daily lives, trade, and religious practices of the people who once inhabited this grand kingdom. A visit here will give you a newfound appreciation for the complexity and richness of Sri Lanka’s ancient civilization.",
      image: "/anuradhapura-8.jpg",
    },
  ],
};

export const arugambay = {
  title: "Arugam Bay: A Surfer’s Paradise",
  image_1: "/arugambay-4.jpg",
  image_2: "/arugambay-2.jpg",
  image_3: "/arugambay-3.jpg",
  description: `Arugam Bay, located on Sri Lanka’s east coast, is a world-renowned surfing destination with golden beaches, laid-back vibes, and stunning coastal scenery. Whether you're an experienced surfer or just looking to relax by the beach, this paradise has something for everyone.`,
  conclusion:
    "Whether you're catching waves, enjoying beachside cafes, or exploring the nearby wildlife, Arugam Bay is a must-visit destination for beach lovers and adventure seekers.",
  things_to_do: [
    {
      section: "Surfing at Main Point",
      text: "One of the best surfing spots in Sri Lanka, perfect for experienced surfers looking to ride some epic waves.",
      image: "/arugambay-1.jpg",
    },
    {
      section: "Whiskey Point",
      text: "A fantastic surf break for beginners and a great place to relax with a beachfront bar atmosphere.",
      image: "/arugambay-2.jpg",
    },
    {
      section: "Pottuvil Lagoon Safari",
      text: "A scenic boat ride where you can spot crocodiles, elephants, and a variety of bird species.",
      image: "/arugambay-3.jpg",
    },
    {
      section: "Elephant Rock",
      text: "A scenic viewpoint and a hidden beach, perfect for sunset views and some light rock climbing.",
      image: "/arugambay-4.jpg",
    },
    {
      section: "Kudumbigala Monastery",
      text: "A hidden Buddhist monastery in the jungle, offering breathtaking panoramic views.",
      image: "/arugambay-5.jpg",
    },
    {
      section: "Lahugala National Park",
      text: "A great place to spot elephants in the wild, just a short drive from Arugam Bay.",
      image: "/arugambay-6.jpg",
    },
    {
      section: "Panama Beach",
      text: "A quiet and secluded beach, ideal for a peaceful escape from the crowds.",
      image: "/arugambay-7.jpg",
    },
    {
      section: "Enjoy the Nightlife",
      text: "Arugam Bay has a lively nightlife with beach parties, fire shows, and great music at local bars.",
      image: "/arugambay-8.jpg",
    },
  ],
};

export const sigiriya = {
  title: "Sigiriya: The Eighth Wonder of the World",
  image_1: "/sigiriya-1.jpg",
  image_2: "/sigiriya-6.jpg",
  image_3: "/sigiriya-8.jpg",
  description: `Sigiriya, also known as Lion Rock, is one of Sri Lanka’s most famous landmarks. This ancient rock fortress, built in the 5th century, is a UNESCO World Heritage Site and offers breathtaking views, stunning frescoes, and fascinating history.`,
  conclusion:
    "Sigiriya is a must-visit destination for history lovers and adventurers alike. Climbing this ancient fortress is an unforgettable experience that offers incredible views and insights into Sri Lanka’s rich past.",
  things_to_do: [
    {
      section: "Climb Sigiriya Rock Fortress",
      text: "One of Sri Lanka’s most iconic attractions, featuring ancient ruins, stunning frescoes, and breathtaking views from the summit.",
      image: "/sigiriya-1.jpg",
    },
    {
      section: "Explore the Sigiriya Frescoes",
      text: "Beautiful ancient paintings depicting celestial maidens, preserved for over a thousand years.",
      image: "/sigiriya-2.jpg",
    },
    {
      section: "Visit the Mirror Wall",
      text: "An ancient graffiti-covered wall where visitors centuries ago left their poetic impressions of Sigiriya’s beauty.",
      image: "/sigiriya-3.jpg",
    },
    {
      section: "Pidurangala Rock Hike",
      text: "A less crowded alternative to Sigiriya, offering equally stunning panoramic views.",
      image: "/sigiriya-4.jpg",
    },
    {
      section: "Sigiriya Museum",
      text: "A great place to learn more about the history and excavation of Sigiriya.",
      image: "/sigiriya-5.jpg",
    },
    {
      section: "Explore the Water Gardens",
      text: "Ingenious ancient water gardens with pools, fountains, and intricate landscaping.",
      image: "/sigiriya-6.jpg",
    },
    {
      section: "Elephant Safari at Minneriya National Park",
      text: "A short drive from Sigiriya, this national park is famous for its large gatherings of wild elephants.",
      image: "/sigiriya-7.jpg",
    },
    {
      section: "Dambulla Cave Temple",
      text: "A nearby UNESCO-listed cave temple filled with beautiful Buddhist murals and statues.",
      image: "/sigiriya-8.jpg",
    },
  ],
};

export const mirissa = {
  title: "Mirissa: A Tropical Paradise for Beach Lovers",
  image_1: "/mirissa.jpg",
  image_2: "/mirissa-10.jpg",
  image_3: "/mirissa-2.jpg",
  description: `Mirissa is one of Sri Lanka’s most famous beach destinations, known for its golden sands, turquoise waters, and vibrant nightlife. This coastal town is a haven for surfers, whale watchers, and travelers seeking a laid-back tropical escape.

  Whether you want to relax under a palm tree, embark on a whale-watching adventure, or enjoy fresh seafood at a beachfront café, Mirissa has it all. The town’s relaxed vibe and stunning sunsets make it a must-visit destination.`,

  conclusion:
    "With its pristine beaches, thrilling ocean adventures, and relaxing atmosphere, Mirissa is a tropical paradise that offers something for everyone. Whether you're seeking adventure or relaxation, this coastal gem is the perfect getaway.",

  things_to_do: [
    {
      section: "Mirissa Beach: A Coastal Dream",
      text: "Mirissa Beach is the heart of the town, offering soft golden sands and clear waters. It’s perfect for sunbathing, swimming, and enjoying the lively beach bars.",
      image: "/mirissa-1.jpg",
    },
    {
      section: "Whale Watching: A Majestic Experience",
      text: "Mirissa is one of the best places in the world to spot blue whales and dolphins. Take a boat tour early in the morning for an unforgettable wildlife encounter.",
      image: "/mirissa-2.jpg",
    },
    {
      section: "Coconut Tree Hill: A Picture-Perfect View",
      text: "One of the most Instagrammable spots in Sri Lanka, Coconut Tree Hill offers breathtaking views of the ocean framed by swaying palm trees.",
      image: "/mirissa-3.jpg",
    },
    {
      section: "Secret Beach: A Hidden Gem",
      text: "Escape the crowds and relax at Secret Beach, a secluded and tranquil spot ideal for unwinding in nature.",
      image: "/mirissa-4.jpg",
    },
    {
      section: "Parrot Rock: A Mini Adventure",
      text: "Climb Parrot Rock for panoramic views of Mirissa Beach. It’s a great place to watch the sunset and feel the ocean breeze.",
      image: "/mirissa-5.jpg",
    },
    {
      section: "Surfing in Mirissa",
      text: "Mirissa offers excellent waves for both beginners and experienced surfers. Rent a board or take a lesson from a local surf school.",
      image: "/mirissa-6.jpg",
    },
    {
      section: "Turtle Bay: Swim with Sea Turtles",
      text: "Snorkel in Turtle Bay, where you can swim alongside gentle sea turtles in their natural habitat.",
      image: "/mirissa-7.jpg",
    },
    {
      section: "Nightlife and Beach Parties",
      text: "Mirissa is known for its lively beach parties. Enjoy music, cocktails, and a vibrant atmosphere at the many beachfront bars.",
      image: "/mirissa-8.jpg",
    },
    {
      section: "Weligama: A Surfer’s Haven",
      text: "Just a short drive from Mirissa, Weligama is a great spot for surfing, with gentle waves perfect for beginners.",
      image: "/mirissa-9.jpg",
    },
    {
      section: "Dondra Head Lighthouse: A Historic Landmark",
      text: "Visit the southernmost point of Sri Lanka at Dondra Head Lighthouse, offering spectacular ocean views.",
      image: "/mirissa-10.jpg",
    },
  ],
};

export const yala = {
  title: "Yala: Sri Lanka’s Ultimate Safari Destination",
  image_1: "/yala.jpg",
  image_2: "/yala-10.jpg",
  image_3: "/yala-2.jpg",
  description: `Yala National Park is Sri Lanka’s most famous wildlife sanctuary, offering visitors an unparalleled safari experience. Home to the elusive Sri Lankan leopard, elephants, crocodiles, and a rich variety of birdlife, Yala is a paradise for nature lovers.

  The park’s diverse landscapes, ranging from dense jungles to coastal lagoons, create a unique ecosystem that supports a wide array of wildlife. A safari here is a must for any traveler seeking adventure and close encounters with nature.`,

  conclusion:
    "Yala National Park is an unforgettable destination for wildlife enthusiasts. Whether you're spotting leopards, elephants, or exotic birds, the experience of being in nature’s wild heart is truly mesmerizing.",

  things_to_do: [
    {
      section: "Leopard Safari: Spot the King of Yala",
      text: "Yala is one of the best places in the world to see leopards in the wild. Join a guided safari to catch a glimpse of these majestic big cats.",
      image: "/yala-1.jpg",
    },
    {
      section: "Elephant Watching in the Wild",
      text: "Large herds of elephants roam freely in Yala. Witness these gentle giants as they graze and interact in their natural habitat.",
      image: "/yala-2.jpg",
    },
    {
      section: "Birdwatching: A Paradise for Avian Enthusiasts",
      text: "With over 200 species of birds, Yala is a birdwatcher’s haven. Spot colorful kingfishers, eagles, and flamingos.",
      image: "/yala-3.jpg",
    },
    {
      section: "Kumana National Park: Bird Sanctuary",
      text: "Adjacent to Yala, Kumana is another incredible wildlife sanctuary, known especially for its rich birdlife.",
      image: "/yala-4.jpg",
    },
    {
      section: "Situlpawwa Rock Temple: A Spiritual Escape",
      text: "This ancient Buddhist temple inside the park offers stunning panoramic views and a peaceful atmosphere.",
      image: "/yala-5.jpg",
    },
    {
      section: "Lagoons and Wetlands: Explore Diverse Ecosystems",
      text: "The park features lagoons and wetlands teeming with crocodiles, water buffalo, and migratory birds.",
      image: "/yala-6.jpg",
    },
    {
      section: "Camping in Yala: A Night in the Wilderness",
      text: "Stay overnight in a luxury campsite within the park to experience the raw beauty of nature under the stars.",
      image: "/yala-7.jpg",
    },
    {
      section: "Beach at Yala: A Secluded Coastal Gem",
      text: "Yala’s coastline offers pristine, untouched beaches where you can relax and enjoy the natural surroundings.",
      image: "/yala-8.jpg",
    },
    {
      section: "Exploring Yala’s Ancient Ruins",
      text: "Yala is home to ancient rock inscriptions and ruins that date back thousands of years, adding a historical dimension to your safari.",
      image: "/yala-9.jpg",
    },
    {
      section: "Sunrise and Sunset Safaris",
      text: "The best time to spot wildlife is during early morning and late evening safaris when animals are most active.",
      image: "/yala-10.jpg",
    },
  ],
};

export const bentota = {
  title: "Bentota: A Serene Coastal Escape",
  image_1: "/bentota.jpg",
  image_2: "/bentota-10.jpg",
  image_3: "/bentota-2.jpg",
  description: `Bentota, a charming coastal town in Sri Lanka, is renowned for its pristine beaches, crystal-clear waters, and vibrant marine life. This tropical paradise is a perfect blend of relaxation and adventure, making it an ideal getaway for beach lovers and water sports enthusiasts. From sunbathing on golden sands to thrilling jet-skiing experiences, Bentota offers something for everyone.

  Apart from its stunning coastline, Bentota is also home to scenic rivers, lush mangroves, and rich wildlife. The town is famous for its luxury resorts, Ayurvedic wellness centers, and cultural attractions, making it a great place for both leisure and exploration. Whether you're looking for a romantic escape or an adrenaline-filled adventure, Bentota has it all.`,

  conclusion:
    "Bentota is a must-visit destination in Sri Lanka, offering a mix of relaxation, adventure, and natural beauty. Whether you want to explore marine life, indulge in water sports, or simply soak up the sun, Bentota promises an unforgettable experience.",

  things_to_do: [
    {
      section: "Bentota Beach: Sun, Sand, and Serenity",
      text: "Bentota Beach is a paradise for beach lovers. The golden sands, swaying palm trees, and turquoise waters make it an ideal place for relaxation and fun. You can enjoy sunbathing, swimming, or even thrilling water sports like jet skiing and windsurfing.",
      image: "/bentota-1.jpg",
    },
    {
      section: "Bentota River Safari: A Journey Through Mangroves",
      text: "Explore the beauty of Bentota River on an exciting boat safari. Cruise through lush mangroves, spot exotic birds, and witness monitor lizards and crocodiles in their natural habitat. It's a perfect way to connect with nature.",
      image: "/bentota-2.jpg",
    },
    {
      section: "Brief Garden: A Botanical Wonderland",
      text: "Designed by Bevis Bawa, Brief Garden is a stunning landscape filled with exotic plants, sculptures, and artistic elements. This peaceful retreat is a must-visit for nature and art enthusiasts alike.",
      image: "/bentota-3.jpg",
    },
    {
      section: "Kosgoda Turtle Hatchery: A Conservation Experience",
      text: "Visit the Kosgoda Turtle Hatchery to learn about sea turtle conservation. Here, you can see baby turtles being released into the ocean and gain insight into the importance of protecting these magnificent creatures.",
      image: "/bentota-4.jpg",
    },
    {
      section: "Galapata Vihara: A Historical Buddhist Temple",
      text: "Galapata Vihara is an ancient Buddhist temple that dates back to the 12th century. It is known for its beautiful murals, stone carvings, and a secret underground tunnel, making it a fascinating cultural site.",
      image: "/bentota-5.jpg",
    },
    {
      section: "Cinnamon Island: A Spice Lover’s Delight",
      text: "Take a tour of Cinnamon Island, where you can witness the process of cinnamon production. Learn about Sri Lanka’s spice heritage and enjoy the aromatic experience of fresh cinnamon.",
      image: "/bentota-6.jpg",
    },
    {
      section: "Lunuganga Estate: A Tranquil Retreat",
      text: "Once the country estate of architect Geoffrey Bawa, Lunuganga is a beautifully landscaped garden offering breathtaking views. It's a great place to relax and appreciate stunning architectural artistry.",
      image: "/bentota-7.jpg",
    },
    {
      section: "Snorkeling and Diving at Barberyn Reef",
      text: "Explore the underwater beauty of Bentota by snorkeling or diving at Barberyn Reef. Witness vibrant coral reefs, colorful fish, and marine life in this stunning aquatic paradise.",
      image: "/bentota-8.jpg",
    },
    {
      section: "Ayurvedic Spa Retreats: A Wellness Escape",
      text: "Bentota is known for its Ayurvedic wellness centers, offering traditional Sri Lankan healing therapies. Indulge in relaxing massages and herbal treatments for a rejuvenating experience.",
      image: "/bentota-9.jpg",
    },
    {
      section: "Bentota Bazaar: A Shopping and Cultural Hub",
      text: "Visit the local markets of Bentota to shop for handicrafts, souvenirs, and fresh seafood. Experience the vibrant culture and hospitality of the locals.",
      image: "/bentota-10.jpg",
    },
  ],
};

export const katharagama = {
  title: "Katharagama: A Sacred Pilgrimage Destination",
  image_1: "/katharagama.jpg",
  image_2: "/katharagama-10.jpg",
  image_3: "/katharagama-2.jpg",
  description: `Katharagama, a revered pilgrimage town in Sri Lanka, is a place of deep spiritual significance for Buddhists, Hindus, Muslims, and indigenous Vedda communities. Nestled in the southeastern part of the island, this sacred town is best known for the Katharagama Devalaya, dedicated to the deity Skanda (Murugan). Devotees from all over the country visit Katharagama to seek blessings, perform rituals, and partake in the vibrant annual festival.

  Beyond its religious importance, Katharagama is surrounded by natural beauty, with lush forests, serene rivers, and abundant wildlife. The town serves as a gateway to Yala National Park, making it an ideal destination for both spiritual seekers and nature lovers.`,  

  conclusion:
    "Katharagama is a unique blend of spirituality, tradition, and natural beauty. Whether you’re a pilgrim, a history enthusiast, or an adventurer, this sacred town offers a profound and unforgettable experience.",  

  things_to_do: [
    {
      section: "Katharagama Devalaya: A Sacred Shrine",
      text: "The Katharagama Devalaya is the town’s most important religious site, dedicated to Lord Murugan. Pilgrims from various faiths visit this temple to offer prayers, light oil lamps, and perform age-old rituals.",
      image: "/katharagama-1.jpg",
    },
    {
      section: "Kirivehera: A Historic Buddhist Stupa",
      text: "Kirivehera is an ancient Buddhist stupa believed to have been built by King Mahasena in the 3rd century BCE. It is a revered site where Buddhist monks and devotees engage in meditation and prayer.",
      image: "/katharagama-2.jpg",
    },
    {
      section: "Sella Katharagama: A Tranquil Pilgrimage Site",
      text: "A short drive from the main temple complex, Sella Katharagama is a peaceful site with smaller shrines and scenic surroundings. It is believed to be a place where Lord Murugan rested on his journey.",
      image: "/katharagama-3.jpg",
    },
    {
      section: "Katharagama Festival: A Grand Religious Celebration",
      text: "The annual Katharagama Esala Festival is a spectacular event featuring vibrant processions, fire-walking, and traditional dances. Thousands of devotees take part in this colorful and spiritual experience.",
      image: "/katharagama-4.jpg",
    },
    {
      section: "Manik Ganga: A Holy River for Ritual Bathing",
      text: "Manik Ganga (River of Gems) is a sacred river where pilgrims take a ritual bath before visiting the temple. The river’s crystal-clear waters add to the serene and spiritual atmosphere.",
      image: "/katharagama-5.jpg",
    },
    {
      section: "Yala National Park: A Wildlife Adventure",
      text: "Just a short distance from Katharagama, Yala National Park offers an incredible wildlife experience. Spot elephants, leopards, sloth bears, and exotic birds in one of Sri Lanka’s most famous national parks.",
      image: "/katharagama-6.jpg",
    },
    {
      section: "Wedihiti Kanda: A Sacred Mountain Trek",
      text: "A trek to Wedihiti Kanda is a spiritual journey offering breathtaking views of the surrounding landscapes. It is believed to be a meditation spot for sages in ancient times.",
      image: "/katharagama-7.jpg",
    },
    {
      section: "Kebiliththa: A Remote and Sacred Pilgrimage Site",
      text: "Kebiliththa is a deeply revered and remote jungle shrine believed to be a meditative site of Lord Kataragama. It requires a challenging off-road journey through dense forests, adding to its mystical aura.",
      image: "/katharagama-8.jpg",
    },
    {
      section: "Murugan Kovil: A Hindu Spiritual Haven",
      text: "Katharagama is home to several Hindu temples dedicated to Lord Murugan. These shrines are significant for Tamil devotees and serve as centers of devotion and celebration.",
      image: "/katharagama-9.jpg",
    },
    {
      section: "Local Markets: A Taste of Culture and Tradition",
      text: "Explore the bustling markets of Katharagama, where you can find religious artifacts, fresh fruits, and local delicacies. Experience the town’s vibrant cultural atmosphere.",
      image: "/katharagama-10.jpg",
    },
  ],
};

export const pinnawala = {
  title: "Pinnawala: The Land of Gentle Giants",
  image_1: "/pinnawala.jpg",
  image_2: "/pinnawala-10.jpg",
  image_3: "/pinnawala-2.jpg",
  description: `Pinnawala, a charming village in Sri Lanka, is world-famous for its elephant orphanage, where rescued and orphaned elephants are cared for. Located near Kegalle, this unique destination allows visitors to witness elephants up close, observe their daily routines, and even participate in feeding sessions. The sight of these majestic creatures bathing in the Maha Oya River is truly unforgettable.

  Beyond the elephant orphanage, Pinnawala offers lush landscapes, serene river views, and cultural experiences. Whether you’re an animal lover or a nature enthusiast, Pinnawala provides a rare opportunity to connect with Sri Lanka’s gentle giants in a responsible and ethical way.`,

  conclusion:
    "Pinnawala is a must-visit for wildlife lovers, offering a rare chance to interact with elephants while supporting conservation efforts. From feeding baby elephants to watching them bathe in the river, this experience is both heartwarming and educational.",

  things_to_do: [
    {
      section: "Pinnawala Elephant Orphanage: A Haven for Elephants",
      text: "Visit the world-famous Pinnawala Elephant Orphanage and witness rescued elephants being cared for. Enjoy watching them roam freely, interact with caretakers, and learn about Sri Lanka's elephant conservation efforts.",
      image: "/pinnawala-1.jpg",
    },
    {
      section: "Elephant Bathing at Maha Oya River",
      text: "Watch herds of elephants bathing in the Maha Oya River, a sight that is both peaceful and mesmerizing. Capture stunning photos as these gentle giants splash and play in the water.",
      image: "/pinnawala-2.jpg",
    },
    {
      section: "Elephant Feeding Sessions",
      text: "Get the chance to bottle-feed baby elephants and hand-feed fruits to the older ones at the orphanage. This interactive experience allows you to connect with these magnificent animals in a meaningful way.",
      image: "/pinnawala-3.jpg",
    },
    {
      section: "Pinnawala Zoo: A Family-Friendly Wildlife Experience",
      text: "Explore Pinnawala Zoo, home to a variety of animals, including birds, reptiles, and other mammals. A great place for families and nature lovers to learn about Sri Lanka’s diverse wildlife.",
      image: "/pinnawala-4.jpg",
    },
    {
      section: "Millennium Elephant Foundation: Ethical Elephant Encounters",
      text: "Visit the Millennium Elephant Foundation for a more ethical approach to interacting with elephants. Learn about their conservation programs, walk with an elephant, and gain insight into their rehabilitation efforts.",
      image: "/pinnawala-5.jpg",
    },
    {
      section: "Pinnawala Handicrafts and Souvenirs",
      text: "Shop for unique handicrafts, wooden carvings, and elephant-themed souvenirs at local stalls near the orphanage. Take home a meaningful memento of your visit.",
      image: "/pinnawala-6.jpg",
    },
    {
      section: "Cultural Performances and Traditional Music",
      text: "Experience Sri Lankan culture through traditional dance performances and live drumming sessions held at select locations near Pinnawala.",
      image: "/pinnawala-7.jpg",
    },
    {
      section: "Scenic Walks and Photography",
      text: "Enjoy a leisurely walk through the lush surroundings of Pinnawala and capture breathtaking photographs of elephants, rivers, and the tranquil landscape.",
      image: "/pinnawala-8.jpg",
    },
    {
      section: "Pinnawala Spice Garden: A Fragrant Retreat",
      text: "Visit a local spice garden to learn about Sri Lanka’s rich spice heritage. Discover the medicinal and culinary uses of cinnamon, cardamom, and other exotic spices.",
      image: "/pinnawala-9.jpg",
    },
    {
      section: "Local Cuisine: Taste Authentic Sri Lankan Flavors",
      text: "Indulge in delicious Sri Lankan cuisine at local restaurants, featuring traditional rice and curry, hoppers, and fresh tropical fruits.",
      image: "/pinnawala-10.jpg",
    },
  ],
};

export const udawalawa = {
  title: "Udawalawa: Sri Lanka’s Premier Wildlife Haven",
  image_1: "/udawalawa.jpg",
  image_2: "/udawalawa-10.jpg",
  image_3: "/udawalawa-2.jpg",
  description: `Udawalawa, home to the famous Udawalawe National Park, is a paradise for wildlife enthusiasts and nature lovers. Located in southern Sri Lanka, this vast sanctuary is best known for its large population of wild elephants, making it one of the best places in Asia to see these majestic creatures in their natural habitat. The park’s open grasslands, dense forests, and scenic reservoirs provide a stunning backdrop for an unforgettable safari experience.

  Beyond elephants, Udawalawa boasts a rich variety of wildlife, including leopards, crocodiles, sloth bears, and hundreds of bird species. Whether you’re on a jeep safari, exploring the Elephant Transit Home, or admiring the breathtaking landscapes, Udawalawa offers a true escape into nature.`,

  conclusion:
    "Udawalawa is a must-visit destination for wildlife lovers, offering thrilling safaris, conservation experiences, and breathtaking natural scenery. Whether you seek adventure or relaxation, Udawalawa promises an unforgettable journey into the heart of Sri Lanka’s wilderness.",

  things_to_do: [
    {
      section: "Udawalawe National Park Safari: A Wildlife Adventure",
      text: "Embark on an exciting jeep safari through Udawalawe National Park and witness herds of wild elephants up close. Keep an eye out for leopards, deer, water buffalo, and a variety of bird species.",
      image: "/udawalawa-1.jpg",
    },
    {
      section: "Elephant Transit Home: A Conservation Initiative",
      text: "Visit the Elephant Transit Home, where orphaned and injured elephants are rehabilitated before being released back into the wild. Observe feeding sessions and learn about conservation efforts.",
      image: "/udawalawa-2.jpg",
    },
    {
      section: "Birdwatching: A Paradise for Avian Enthusiasts",
      text: "Udawalawa is a birdwatcher’s dream, with over 200 species of birds, including eagles, hornbills, and vibrant kingfishers. Bring your binoculars and enjoy spotting rare and exotic birds.",
      image: "/udawalawa-3.jpg",
    },
    {
      section: "Udawalawa Reservoir: A Scenic Escape",
      text: "Relax by the picturesque Udawalawa Reservoir, a vital water source for wildlife. Enjoy stunning sunrise and sunset views while observing animals gathering at the water’s edge.",
      image: "/udawalawa-4.jpg",
    },
    {
      section: "Camping in Udawalawa: A Night Under the Stars",
      text: "Experience the thrill of camping in the wilderness, surrounded by the sounds of nature. Several eco-lodges and campsites offer unique overnight stays near the park.",
      image: "/udawalawa-5.jpg",
    },
    {
      section: "Jungle Trekking and Nature Walks",
      text: "Explore Udawalawa’s lush forests and trails on foot, discovering hidden waterfalls, exotic plants, and signs of wildlife along the way.",
      image: "/udawalawa-6.jpg",
    },
    {
      section: "Visit a Local Village: Experience Rural Sri Lanka",
      text: "Get a glimpse of traditional village life by visiting a nearby rural community. Interact with locals, learn about their culture, and enjoy authentic Sri Lankan hospitality.",
      image: "/udawalawa-7.jpg",
    },
    {
      section: "Photography: Capture Sri Lanka’s Wild Beauty",
      text: "With its diverse wildlife and breathtaking landscapes, Udawalawa is a photographer’s paradise. Bring your camera and capture stunning moments of animals in their natural environment.",
      image: "/udawalawa-8.jpg",
    },
    {
      section: "Explore Nearby Waterfalls",
      text: "Take a short drive to visit beautiful waterfalls near Udawalawa, such as Diyaluma Falls and Elle Wala Waterfall, for a refreshing escape into nature.",
      image: "/udawalawa-9.jpg",
    },
    {
      section: "Taste Authentic Sri Lankan Cuisine",
      text: "Indulge in traditional Sri Lankan flavors at local restaurants, offering delicious rice and curry, seafood dishes, and fresh tropical fruits.",
      image: "/udawalawa-10.jpg",
    },
  ],
};

export const habarana = {
  title: "Habarana: The Gateway to Sri Lanka’s Cultural Triangle",
  image_1: "/habarana.jpg",
  image_2: "/habarana-10.jpg",
  image_3: "/habarana-2.jpg",
  description: `Habarana, a peaceful town in Sri Lanka, serves as the perfect base for exploring the country’s Cultural Triangle. Surrounded by lush forests, scenic lakes, and historic sites, Habarana is a haven for nature lovers, adventure seekers, and history enthusiasts. The town’s central location makes it an ideal starting point for visiting UNESCO-listed sites like Sigiriya, Dambulla, and Polonnaruwa.

  In addition to its cultural significance, Habarana is known for its rich wildlife. The nearby Minneriya and Kaudulla National Parks offer some of the best elephant safaris in Sri Lanka, while the serene Habarana Lake provides a tranquil retreat for birdwatching and scenic boat rides. Whether you seek history, nature, or relaxation, Habarana has something for everyone.`,

  conclusion:
    "Habarana is a must-visit destination for those exploring Sri Lanka’s Cultural Triangle. With its mix of history, wildlife, and natural beauty, this charming town offers a truly unforgettable experience for travelers.",

  things_to_do: [
    {
      section: "Sigiriya Rock Fortress: A UNESCO World Heritage Site",
      text: "Climb the iconic Sigiriya Rock Fortress and marvel at its ancient frescoes, breathtaking views, and fascinating ruins. This 5th-century marvel is one of Sri Lanka’s most famous landmarks.",
      image: "/habarana-1.jpg",
    },
    {
      section: "Minneriya National Park: Witness the Elephant Gathering",
      text: "Go on a thrilling safari at Minneriya National Park, where you can witness the famous ‘Elephant Gathering’—one of the largest congregations of wild elephants in the world.",
      image: "/habarana-2.jpg",
    },
    {
      section: "Dambulla Cave Temple: A Spiritual and Artistic Wonder",
      text: "Visit the Dambulla Cave Temple, home to stunning Buddhist murals and over 150 statues of the Buddha. This ancient rock temple is a UNESCO World Heritage Site and a must-see attraction.",
      image: "/habarana-3.jpg",
    },
    {
      section: "Habarana Lake: A Serene Escape",
      text: "Enjoy a relaxing boat ride or a nature walk around Habarana Lake, a beautiful setting teeming with birdlife and surrounded by lush greenery.",
      image: "/habarana-4.jpg",
    },
    {
      section: "Kaudulla National Park: A Wildlife Safari Adventure",
      text: "Embark on a jeep safari at Kaudulla National Park, known for its thriving elephant population, leopards, and diverse bird species.",
      image: "/habarana-5.jpg",
    },
    {
      section: "Polonnaruwa: Explore Ancient Ruins",
      text: "Discover the ancient city of Polonnaruwa, a well-preserved UNESCO-listed site featuring stunning temples, palaces, and statues from Sri Lanka’s medieval era.",
      image: "/habarana-6.jpg",
    },
    {
      section: "Village Safari: Experience Traditional Sri Lankan Life",
      text: "Take a guided village tour to experience the simple lifestyle of rural Sri Lanka. Enjoy a bullock cart ride, canoeing, and a traditional home-cooked meal.",
      image: "/habarana-7.jpg",
    },
    {
      section: "Pidurangala Rock: A Hiker’s Paradise",
      text: "For a less crowded alternative to Sigiriya, climb Pidurangala Rock and enjoy breathtaking panoramic views of the surrounding landscapes.",
      image: "/habarana-8.jpg",
    },
    {
      section: "Birdwatching in Habarana",
      text: "Habarana is a paradise for birdwatchers, with numerous species of endemic and migratory birds thriving in its lakes, wetlands, and forests.",
      image: "/habarana-9.jpg",
    },
    {
      section: "Ayurvedic Spa Retreats: Relax and Rejuvenate",
      text: "Indulge in a traditional Ayurvedic spa experience, offering herbal treatments and relaxing massages to refresh your mind and body.",
      image: "/habarana-10.jpg",
    },
  ],
};

export const haputale = {
  title: "Haputale: A Hidden Gem in Sri Lanka's Hill Country",
  image_1: "/haputale.jpg",
  image_2: "/haputale-10.jpg",
  image_3: "/haputale-2.jpg",
  description: `Nestled in the heart of Sri Lanka's hill country, Haputale offers a peaceful escape surrounded by rolling hills, lush tea plantations, and cool mountain air. Located in the Badulla District, Haputale is less crowded than some of the more popular hill stations, making it the perfect place for nature lovers and those seeking tranquility. The town's elevation provides stunning views of the surrounding landscapes, including the famous Diyaluma Falls and the magical Horton Plains National Park.

  Haputale’s cool climate and breathtaking views are complemented by its rich tea heritage. Visitors can enjoy exploring the tea estates, visiting local tea factories, and hiking through scenic trails. Whether you're seeking a quiet retreat or an adventurous hike, Haputale is a perfect destination for nature lovers and explorers alike.`,

  conclusion:
    "Haputale offers a unique and serene experience for travelers looking to explore Sri Lanka’s hill country. With its stunning landscapes, tea plantations, and tranquil atmosphere, it’s an ideal spot for those seeking a peaceful getaway.",

  things_to_do: [
    {
      section: "Diyaluma Falls: A Majestic Waterfall",
      text: "Visit Diyaluma Falls, Sri Lanka’s second-highest waterfall, where you can enjoy breathtaking views, take a refreshing dip in natural pools, or hike to the top for a panoramic vista.",
      image: "/haputale-1.jpg",
    },
    {
      section: "Horton Plains National Park: A Nature Lover’s Paradise",
      text: "Hike through Horton Plains National Park, known for its spectacular landscapes, including the famous World's End cliff. The park is home to endemic species and offers a variety of hiking trails.",
      image: "/haputale-2.jpg",
    },
    {
      section: "Lipton's Seat: A Tea Plantation Panorama",
      text: "Head to Lipton's Seat, a viewpoint located on a tea plantation that offers stunning views of the surrounding valleys, mountains, and tea fields. It’s the perfect spot for photography and relaxation.",
      image: "/haputale-3.jpg",
    },
    {
      section: "Tea Factory Tours: Discover the Art of Tea Making",
      text: "Explore the local tea factories around Haputale, where you can learn about Sri Lanka's world-renowned tea production process. Enjoy guided tours and sample freshly brewed tea.",
      image: "/haputale-4.jpg",
    },
    {
      section: "Ella Rock: A Scenic Hike with Panoramic Views",
      text: "Hike up to Ella Rock for panoramic views of the surrounding valleys, tea plantations, and distant mountains. It’s a challenging but rewarding hike for nature enthusiasts.",
      image: "/haputale-5.jpg",
    },
    {
      section: "Sita Amman Temple: A Spiritual Visit",
      text: "Visit the Sita Amman Temple, a sacred Hindu site dedicated to the goddess Sita, located in the nearby village of Seetha Eliya. The temple is surrounded by serene landscapes and historical significance.",
      image: "/haputale-6.jpg",
    },
    {
      section: "Adisham Bungalow: A Colonial Retreat",
      text: "Explore Adisham Bungalow, a British colonial-style mansion set amidst tea plantations. The bungalow offers beautiful gardens and panoramic views, making it a peaceful spot for a stroll or a picnic.",
      image: "/haputale-7.jpg",
    },
    {
      section: "Bambarakanda Falls: The Tallest Waterfall in Sri Lanka",
      text: "Visit Bambarakanda Falls, the tallest waterfall in Sri Lanka, located a short drive from Haputale. This stunning cascade is surrounded by lush greenery and is perfect for a nature walk.",
      image: "/haputale-8.jpg",
    },
    {
      section: "Haputale Market: A Glimpse of Local Life",
      text: "Visit the local market in Haputale to experience the vibrant culture and shop for fresh produce, spices, and handcrafted goods. It’s a great way to experience the daily life of the hill country locals.",
      image: "/haputale-9.jpg",
    },
    {
      section: "Sri Lanka’s Hill Country Cuisine: Taste the Flavors",
      text: "Indulge in the flavors of Sri Lanka's hill country cuisine, with fresh vegetables, spices, and traditional dishes like rice and curry, served in local restaurants with scenic views.",
      image: "/haputale-10.jpg",
    },
  ],
};

export const pasikuda = {
  title: "Pasikuda: A Tropical Beach Paradise on Sri Lanka's East Coast",
  image_1: "/pasikuda.jpg",
  image_2: "/pasikuda-10.jpg",
  image_3: "/pasikuda-2.jpg",
  description: `Pasikuda, located on the east coast of Sri Lanka, is renowned for its stunning beaches, calm azure waters, and relaxed vibe. Known for one of the longest stretches of shallow, golden sand beaches in the world, Pasikuda is the perfect destination for those looking to unwind by the sea. The crystal-clear water is ideal for swimming, snorkeling, and other water sports, while the gentle waves make it a family-friendly beach destination.

  This coastal town is not only a haven for beach lovers but also offers rich cultural experiences and nearby historical sites. Whether you’re looking to relax by the beach, indulge in fresh seafood, or explore cultural landmarks, Pasikuda provides a perfect blend of serenity and adventure.`,

  conclusion:
    "Pasikuda is an idyllic beach destination, offering a mix of relaxation, water activities, and cultural exploration. Whether you want to unwind or explore the wonders of Sri Lanka’s east coast, Pasikuda promises an unforgettable experience.",

  things_to_do: [
    {
      section: "Pasikuda Beach: Sun, Sand, and Serenity",
      text: "Spend your days relaxing on the golden sands of Pasikuda Beach. The shallow waters are perfect for swimming, and the beach offers excellent opportunities for sunbathing and water sports.",
      image: "/pasikuda-1.jpg",
    },
    {
      section: "Snorkeling and Diving: Explore the Underwater World",
      text: "Discover the vibrant underwater world off Pasikuda’s coast by snorkeling or diving. See colorful coral reefs, exotic fish, and marine life in the crystal-clear waters of the Indian Ocean.",
      image: "/pasikuda-2.jpg",
    },
    {
      section: "Kalkudah Beach: A Quiet and Scenic Escape",
      text: "Visit nearby Kalkudah Beach, known for its tranquil atmosphere and pristine beauty. Enjoy a peaceful day by the sea, far from the crowds, perfect for relaxation and solitude.",
      image: "/pasikuda-3.jpg",
    },
    {
      section: "Cultural Sites: Explore Historical Temples",
      text: "Pasikuda is close to several historical temples and sites, including the ancient Buddhist temple of Koneswaram, located in Trincomalee. Visit these spiritual places to learn about the rich cultural heritage of the area.",
      image: "/pasikuda-4.jpg",
    },
    {
      section: "Fishing and Boat Tours: Experience Local Life",
      text: "Take a traditional fishing boat tour, where you can experience the local fishing culture and enjoy a scenic cruise along the coast. You might even have the chance to catch some fresh fish for a beachside barbecue.",
      image: "/pasikuda-5.jpg",
    },
    {
      section: "Pasikuda Lagoon: A Nature Lover's Haven",
      text: "Visit the Pasikuda Lagoon, a peaceful spot ideal for birdwatching, boat tours, and photography. The area is home to a variety of bird species and lush mangrove forests.",
      image: "/pasikuda-6.jpg",
    },
    {
      section: "Kalmunai: A Glimpse into Local Life",
      text: "Explore the nearby town of Kalmunai, where you can experience the daily life of Sri Lankan coastal communities, visit local markets, and sample authentic Sri Lankan street food.",
      image: "/pasikuda-7.jpg",
    },
    {
      section: "Ayurvedic Spas: Relax and Rejuvenate",
      text: "Unwind at one of Pasikuda’s luxury resorts or Ayurvedic spas, offering traditional treatments like massages, herbal therapies, and wellness services to relax and rejuvenate your body and mind.",
      image: "/pasikuda-8.jpg",
    },
    {
      section: "Pasikuda Sunrise and Sunset: A Perfect View",
      text: "Wake up early for a mesmerizing sunrise over the horizon and end the day with a stunning sunset over the ocean. The panoramic views from the beach are simply breathtaking.",
      image: "/pasikuda-9.jpg",
    },
    {
      section: "Seafood Delights: Savor the Fresh Catch",
      text: "Indulge in the freshest seafood at one of the local restaurants, offering delicious dishes like grilled fish, prawn curry, and calamari, all prepared with Sri Lankan spices and flavors.",
      image: "/pasikuda-10.jpg",
    },
  ],
};

export const negombo = {
  title: "Negombo: A Coastal Gem with Rich History and Vibrant Culture",
  image_1: "/negombo.jpg",
  image_2: "/negombo-10.jpg",
  image_3: "/negombo-2.jpg",
  description: `Located just a short drive from Colombo, Negombo is a bustling coastal town known for its beautiful beaches, lively markets, and rich cultural history. The town is renowned for its fishing industry, providing a glimpse into local life while offering stunning views of the Indian Ocean. With its wide range of attractions, from serene beaches to historical sites, Negombo is a great place to start or end your journey in Sri Lanka.

  Aside from its beaches, Negombo is home to a vibrant mix of Portuguese, Dutch, and British influences, reflected in its architecture, culture, and cuisine. Whether you’re looking for relaxation or adventure, Negombo offers something for everyone, including boat tours, seafood feasts, and visits to ancient churches and temples.`,

  conclusion:
    "Negombo is a charming coastal town that perfectly blends history, culture, and natural beauty. Whether you're seeking a relaxing beach escape, a cultural adventure, or a taste of local life, Negombo offers an unforgettable experience.",

  things_to_do: [
    {
      section: "Negombo Beach: Relax by the Ocean",
      text: "Negombo Beach is a perfect spot to unwind, soak up the sun, and enjoy the tropical surroundings. The beach is known for its long stretch of golden sand and calm waters, ideal for swimming and leisurely walks.",
      image: "/negombo-1.jpg",
    },
    {
      section: "Negombo Lagoon: A Scenic Boat Ride",
      text: "Take a boat ride along the serene Negombo Lagoon, where you can witness the local fishing methods, birdwatching opportunities, and explore the tranquil mangrove forests.",
      image: "/negombo-2.jpg",
    },
    {
      section: "Angurukaramulla Temple: A Spiritual Journey",
      text: "Visit the Angurukaramulla Temple, a significant Buddhist site in Negombo. Admire its impressive murals, statues, and the massive Buddha statue, while experiencing the serene atmosphere.",
      image: "/negombo-3.jpg",
    },
    {
      section: "Dutch Fort: A Glimpse into the Past",
      text: "Explore the remains of the Dutch Fort, built by the Portuguese in the 17th century. The fort offers a historical insight into Negombo’s colonial past and is located near the heart of the town.",
      image: "/negombo-4.jpg",
    },
    {
      section: "Negombo Fish Market: A Taste of Local Life",
      text: "Visit the lively Negombo Fish Market, where you can see fishermen selling the day’s fresh catch. It's a vibrant place to experience the local fishing culture and taste some delicious seafood.",
      image: "/negombo-5.jpg",
    },
    {
      section: "St. Mary's Church: Colonial Architecture",
      text: "St. Mary’s Church is an architectural gem in Negombo, known for its beautiful design and religious significance. The church is famous for its intricate ceiling murals and peaceful ambiance.",
      image: "/negombo-6.jpg",
    },
    {
      section: "Muthurajawela Marsh: Nature and Birdwatching",
      text: "Explore the Muthurajawela Marsh, a vast wetland area that offers fantastic birdwatching opportunities and a chance to see unique wildlife in their natural habitat.",
      image: "/negombo-7.jpg",
    },
    {
      section: "Boat Tours: Discover the Local Life",
      text: "Take a traditional boat tour through the canals of Negombo, offering an intimate view of the town’s waterways, local villages, and scenic landscapes.",
      image: "/negombo-8.jpg",
    },
    {
      section: "Buddhist Temples: A Spiritual Experience",
      text: "Negombo is home to several Buddhist temples that offer spiritual insights and beautiful surroundings. Take time to explore and appreciate the peaceful atmosphere and stunning architecture.",
      image: "/negombo-9.jpg",
    },
    {
      section: "Seafood Feast: Savor the Fresh Catch",
      text: "Negombo is famous for its seafood, offering delicious dishes like crab curry, prawn and fish delicacies, all prepared using fresh, local ingredients. Enjoy a seafood feast by the beach or at a local restaurant.",
      image: "/negombo-10.jpg",
    },
  ],
};

export const polonnaruwa = {
  title: "Polonnaruwa: A Journey Through Sri Lanka’s Ancient Capital",
  image_1: "/polonnaruwa.jpg",
  image_2: "/polonnaruwa-10.jpg",
  image_3: "/polonnaruwa-2.jpg",
  description: `Polonnaruwa, once the ancient capital of Sri Lanka, is a UNESCO World Heritage site filled with historical ruins, Buddhist temples, and stunning archaeological landmarks. Located in the North Central Province, Polonnaruwa offers a glimpse into Sri Lanka's rich cultural heritage, dating back to the 11th century. Visitors can explore the remnants of royal palaces, statues of Buddha, and ancient reservoirs that showcase the architectural brilliance of the Chola and Sinhalese kingdoms.

  The archaeological park in Polonnaruwa is a treasure trove of history, where visitors can see well-preserved ruins, intricate carvings, and beautiful lotus ponds. Whether you’re a history enthusiast, a photographer, or just seeking a quiet, peaceful experience, Polonnaruwa’s ancient charm promises an unforgettable journey back in time.`,

  conclusion:
    "Polonnaruwa is an ancient city that offers a unique window into Sri Lanka’s rich history and culture. With its remarkable ruins, temples, and serene surroundings, Polonnaruwa is a must-visit destination for history lovers and cultural explorers.",

  things_to_do: [
    {
      section: "The Royal Palace: A Glimpse of Royal Life",
      text: "Explore the remains of the Royal Palace, once home to the kings of Polonnaruwa. The complex includes impressive stone structures and views of the surrounding gardens and lakes.",
      image: "/polonnaruwa-1.jpg",
    },
    {
      section: "Gal Vihara: The Rock Temple of Polonnaruwa",
      text: "Visit Gal Vihara, a remarkable rock temple known for its stunning Buddha statues carved directly into the rock. The serene atmosphere and artistic grandeur make it a must-see site.",
      image: "/polonnaruwa-2.jpg",
    },
    {
      section: "Parakrama Samudra: A Massive Reservoir",
      text: "Admire the grandeur of Parakrama Samudra, an ancient reservoir built by King Parakramabahu I. The vast waterbody reflects the ingenuity of ancient Sri Lankan engineering.",
      image: "/polonnaruwa-3.jpg",
    },
    {
      section: "The Quadrangle: A Historical Complex",
      text: "The Quadrangle in Polonnaruwa houses some of the most well-preserved ruins of the city. Visit the ancient temples and structures that were once the heart of religious and royal life.",
      image: "/polonnaruwa-4.jpg",
    },
    {
      section: "Lankatilaka Temple: Ancient Architecture",
      text: "Visit Lankatilaka Temple, known for its massive structure and impressive murals. The temple was once one of the most important religious sites in Polonnaruwa.",
      image: "/polonnaruwa-5.jpg",
    },
    {
      section: "Kiri Vihara: A Sacred Buddhist Stupa",
      text: "Explore the Kiri Vihara stupa, one of the most sacred religious sites in Polonnaruwa. Its beautiful white dome and tranquil surroundings make it a peaceful spot for reflection.",
      image: "/polonnaruwa-6.jpg",
    },
    {
      section: "The Archaeological Museum: Uncover Ancient Artifacts",
      text: "Visit the Archaeological Museum of Polonnaruwa to see a collection of ancient artifacts, sculptures, and relics that offer insight into the rich history of this ancient city.",
      image: "/polonnaruwa-7.jpg",
    },
    {
      section: "The Lotus Pond: A Beautiful Reflection",
      text: "Relax at the Lotus Pond, a tranquil spot known for its beautiful stone carvings of lotus flowers. The pond is a serene and picturesque place to take a break and enjoy the peaceful surroundings.",
      image: "/polonnaruwa-8.jpg",
    },
    {
      section: "Safari at Minneriya National Park: See the Elephants",
      text: "Take a safari at nearby Minneriya National Park, famous for its large herds of elephants. It’s a great opportunity to spot wildlife and experience Sri Lanka’s natural beauty.",
      image: "/polonnaruwa-9.jpg",
    },
    {
      section: "Polonnaruwa Market: Local Culture and Crafts",
      text: "Explore the local markets of Polonnaruwa, where you can shop for handmade crafts, fresh produce, and traditional Sri Lankan goods. It’s a perfect spot to experience the local culture and buy souvenirs.",
      image: "/polonnaruwa-10.jpg",
    },
  ],
};

export const riverston = {
  title: "Riverston: A Hidden Gem in Sri Lanka’s Mountainous Heart",
  image_1: "/riverston.jpg",
  image_2: "/riverston-10.jpg",
  image_3: "/riverston-2.jpg",
  description: `Nestled in the central highlands of Sri Lanka, Riverston is a tranquil haven known for its breathtaking landscapes, misty mountains, and serene surroundings. Often referred to as the "Little Scotland of Sri Lanka," Riverston offers spectacular views, diverse flora and fauna, and a peaceful atmosphere perfect for nature lovers and adventure enthusiasts. The region is part of the Knuckles Mountain Range and is home to cascading waterfalls, lush forests, and vibrant wildlife.

  Riverston is an ideal spot for hiking, trekking, and birdwatching. The area’s untouched beauty makes it a hidden gem for those seeking an off-the-beaten-path escape. Whether you're exploring nature trails, taking in panoramic views, or relaxing by the waterfalls, Riverston offers an unforgettable natural experience.`,

  conclusion:
    "Riverston is a pristine escape into nature, offering stunning landscapes, hiking opportunities, and a peaceful environment. Whether you’re looking to reconnect with nature or embark on an adventurous trek, Riverston is an unmissable destination for nature lovers.",

  things_to_do: [
    {
      section: "Riverston Peak: A Hiker's Paradise",
      text: "Hike to the top of Riverston Peak for panoramic views of the surrounding mountains, valleys, and forests. The trail offers a rewarding experience with stunning vistas along the way.",
      image: "/riverston-1.jpg",
    },
    {
      section: "Waterfalls of Riverston: Nature's Beauty",
      text: "Explore the enchanting waterfalls in Riverston, including the famous “Riverston Falls.” These scenic falls offer great spots for photography, picnicking, or simply relaxing in nature.",
      image: "/riverston-2.jpg",
    },
    {
      section: "Knuckles Mountain Range: Trekking Adventures",
      text: "Embark on an unforgettable trek through the Knuckles Mountain Range, known for its diverse ecosystems, rich biodiversity, and dramatic landscapes. Riverston serves as the perfect gateway to explore this UNESCO World Heritage site.",
      image: "/riverston-3.jpg",
    },
    {
      section: "Birdwatching in Riverston: A Paradise for Ornithologists",
      text: "Riverston is a birdwatcher’s paradise, with over 200 species of birds to spot. The misty forests and mountains provide a habitat for many endemic bird species, making it an ideal destination for birdwatching.",
      image: "/riverston-4.jpg",
    },
    {
      section: "Nature Trails: Immerse Yourself in Wilderness",
      text: "Take a leisurely walk or hike through the lush green nature trails of Riverston. The peaceful ambiance, vibrant flora, and fresh mountain air make it a perfect place for nature enthusiasts.",
      image: "/riverston-5.jpg",
    },
    {
      section: "Haththikuchchi Cave: A Historical Site",
      text: "Visit Haththikuchchi Cave, a historical Buddhist site near Riverston. The cave has ancient inscriptions and provides a peaceful spot for reflection amidst the serene surroundings.",
      image: "/riverston-6.jpg",
    },
    {
      section: "Camping in Riverston: A Night Under the Stars",
      text: "For adventure seekers, camping in Riverston offers a memorable experience. Spend the night surrounded by nature, under a starlit sky, with the sounds of the forest as your lullaby.",
      image: "/riverston-7.jpg",
    },
    {
      section: "Misty Views: Sunrise and Sunset at Riverston",
      text: "Wake up early to catch the sunrise over the mist-covered mountains, or enjoy a breathtaking sunset as the sky is painted in hues of orange and pink. Riverston offers some of the most picturesque moments in Sri Lanka.",
      image: "/riverston-8.jpg",
    },
    {
      section: "Local Villages: Experience Rural Sri Lanka",
      text: "Explore the nearby villages of Riverston, where you can experience rural Sri Lankan life. Meet the locals, learn about traditional farming practices, and enjoy authentic Sri Lankan hospitality.",
      image: "/riverston-9.jpg",
    },
    {
      section: "Relax and Unwind: Peaceful Escape",
      text: "Riverston’s tranquil atmosphere makes it the perfect place to relax and unwind. Whether you prefer reading a book by the waterfall or simply soaking in the natural beauty, it’s a haven of peace and serenity.",
      image: "/riverston-10.jpg",
    },
  ],
};

export const hortonPlains = {
  title: "Horton Plains: A High-altitude Wilderness of Natural Beauty",
  image_1: "/horton-plains.jpg",
  image_2: "/horton-plains-10.jpg",
  image_3: "/horton-plains-2.jpg",
  description: `Horton Plains National Park, located in the central highlands of Sri Lanka, is a UNESCO World Heritage site renowned for its breathtaking landscapes, diverse wildlife, and unique ecosystems. With its rolling grasslands, cloud forests, and dramatic cliffs, Horton Plains offers a perfect blend of natural beauty and adventure. The park is famous for its two main attractions: World’s End and Baker’s Falls, which offer stunning vistas and a glimpse into the unspoiled beauty of Sri Lanka’s highlands.

  The park is a haven for nature enthusiasts, birdwatchers, and trekkers. Its cool climate and rich biodiversity make it a perfect destination for exploring the island’s unique flora and fauna. Whether you're trekking to World’s End, admiring the waterfalls, or simply enjoying the peace of the wilderness, Horton Plains provides an unforgettable experience.`,

  conclusion:
    "Horton Plains is a must-visit destination for nature lovers, offering striking landscapes, remarkable wildlife, and hiking opportunities. The park’s natural beauty, tranquility, and dramatic views make it one of Sri Lanka’s most iconic natural sites.",

  things_to_do: [
    {
      section: "World’s End: A Majestic Drop",
      text: "Hike to World’s End, a sheer cliff with a drop of over 1,000 meters, offering one of the most stunning views in Sri Lanka. The view of the plains stretching out below is breathtaking, especially in the early morning mist.",
      image: "/horton-plains-1.jpg",
    },
    {
      section: "Baker’s Falls: A Serene Cascade",
      text: "Visit Baker’s Falls, a picturesque waterfall nestled amidst the cloud forest of Horton Plains. The falls are surrounded by lush greenery, providing a tranquil setting for nature lovers and photographers.",
      image: "/horton-plains-2.jpg",
    },
    {
      section: "Nature Trails: Explore the Wilderness",
      text: "Explore the various nature trails within Horton Plains, offering opportunities to witness the park's unique ecosystems, including grasslands, cloud forests, and diverse plant life. The trails are perfect for trekking and birdwatching.",
      image: "/horton-plains-3.jpg",
    },
    {
      section: "Wildlife Watching: Discover the Fauna",
      text: "Horton Plains is home to a variety of wildlife, including sambar deer, purple-faced langurs, and a wide range of bird species. Keep an eye out for the endemic species that thrive in this high-altitude environment.",
      image: "/horton-plains-4.jpg",
    },
    {
      section: "Birdwatching: A Paradise for Ornithologists",
      text: "Horton Plains is a haven for birdwatchers, with over 200 species of birds, including endemics like the Sri Lanka bush warbler and the Sri Lanka wood pigeon. The diverse habitats within the park make it ideal for spotting rare and unique species.",
      image: "/horton-plains-5.jpg",
    },
    {
      section: "The Mini World’s End: A Smaller, Yet Stunning View",
      text: "For a shorter trek, visit the Mini World’s End, another cliff offering a beautiful view of the surrounding plains and forests. It’s less crowded than the main World’s End, offering a more peaceful experience.",
      image: "/horton-plains-6.jpg",
    },
    {
      section: "Lover’s Leap Waterfall: A Hidden Gem",
      text: "Take a short detour to visit Lover’s Leap Waterfall, a hidden gem within the park. It’s a peaceful and picturesque waterfall, perfect for a quiet moment amidst the natural beauty of Horton Plains.",
      image: "/horton-plains-7.jpg",
    },
    {
      section: "Trekking: Challenging Yet Rewarding",
      text: "Horton Plains offers various trekking routes, from easy walks to more challenging hikes. The trails provide an opportunity to explore the park’s diverse landscapes and ecosystems, making it an ideal destination for trekkers.",
      image: "/horton-plains-8.jpg",
    },
    {
      section: "Camping: Experience the Wilderness",
      text: "For those seeking a deeper connection with nature, camping in Horton Plains offers a chance to spend the night surrounded by the park’s cool climate and serene atmosphere. Enjoy the sounds of the forest as you sleep under the stars.",
      image: "/horton-plains-9.jpg",
    },
    {
      section: "Photography: Capture the Beauty",
      text: "With its dramatic landscapes, diverse wildlife, and stunning viewpoints, Horton Plains is a photographer’s paradise. Don’t forget your camera as you capture the breathtaking beauty of this unique national park.",
      image: "/horton-plains-10.jpg",
    },
  ],
};
