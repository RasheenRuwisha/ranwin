import { title } from "process";

export const navItems = [
  { name: "Home", link: "/#" },
  { name: "About", link: "/#about" },
  { name: "Packages", link: "/#packages" },
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
  waypoints: [
    [79.88452, 7.17929], // Example waypoint 1
    [80.649991, 7.292631], // Example waypoint 2
    [80.69836, 7.01334], // Example waypoint 3
    [79.97408, 6.87053], // Example waypoint 3
    [79.88452, 7.17929], // Example waypoint 3
  ],
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

export const ella = {
  title: "Ella: Nature's Tranquil Escape",
  image_1: "/ella.jpg",
  image_2: "https://simpsonsforest.com/wp-content/uploads/2024/03/01-1.jpg",
  image_3:
    "https://www.andbeyond.com/wp-content/uploads/sites/5/colombo-sri-lanka.jpg",
  description: `Nestled in the lush green hills of Sri Lanka, Ella is a charming town that captivates visitors with its breathtaking landscapes and serene atmosphere. Known for its stunning vistas, this idyllic destination is surrounded by rolling hills, tea plantations, and cascading waterfalls, making it a haven for nature lovers and adventure enthusiasts alike. Ella is not just a feast for the eyes; it’s a place where you can immerse yourself in the rich culture and history of Sri Lanka while enjoying outdoor activities like hiking, exploring tea estates, and experiencing local cuisine.

    As you wander through the town, you'll be greeted by the friendly smiles of the locals and the soothing sounds of nature that envelop this enchanting area. The cool climate and vibrant greenery create an inviting ambiance that encourages exploration. Whether you seek thrilling adventures or tranquil moments in nature, Ella offers something for everyone. From iconic landmarks like the famous Nine Arches Bridge to breathtaking hikes up to Ella Rock and Little Adam's Peak, the town is a treasure trove of experiences waiting to be discovered.
    
    If you're planning a trip to this picturesque destination, here’s a guide to some of the must-visit attractions in Ella that will ensure your journey is unforgettable.`,
  conclusion:
    "Ella is truly a gem in the heart of Sri Lanka, offering a perfect blend of adventure, relaxation, and natural beauty. Whether you're hiking through the hills, exploring tea plantations, or simply enjoying the breathtaking views, Ella promises an unforgettable experience that will leave you enchanted. So pack your bags and get ready to discover the magic of this beautiful town!",

  things_to_do: [
    {
      section: "Nine Arches Bridge: A Marvel of Engineering",
      text: "One of Ella’s most iconic landmarks, the Nine Arches Bridge is a stunning viaduct that dates back to the 1920s. Constructed entirely of bricks and stone, this architectural marvel is surrounded by lush greenery and tea plantations. The bridge is not only a perfect spot for photography but also offers stunning views of the surrounding landscape. Be sure to catch a train passing over the bridge for an unforgettable experience!",
      image: "/ella.jpg",
    },
    {
      section: "Ella Rock: A Hiker’s Paradise",
      text: "For those who love a challenge, Ella Rock is a must-visit. This challenging hike rewards adventurers with breathtaking views of the surrounding mountains and valleys. The trek typically takes about 2-3 hours, and it's best to start early in the morning to catch the sunrise over the hills. Don’t forget your camera; the views are worth every step!",
      image: "/ella.jpg",
    },
    {
      section: "Little Adam's Peak: A Scenic Walk",
      text: "If you’re looking for a more leisurely hike, Little Adam's Peak is perfect for you. This easier trek takes about 1-2 hours and is suitable for all fitness levels. The hike offers panoramic views of Ella and the surrounding landscape, making it a favorite among visitors. Bring a picnic and enjoy the serene atmosphere at the summit.",
      image: "/ella.jpg",
    },
    {
      section: "Explore Tea Plantations and Factories",
      text: "No trip to Ella is complete without experiencing its famous tea culture. Visit local tea plantations and factories, such as the Halpe Tea Factory, to learn about the tea-making process. You'll have the chance to sample some of the finest teas and understand the importance of this industry in Sri Lanka's economy.",
      image: "/ella.jpg",
    },
    {
      section: "Diyaluma Falls: Nature’s Spectacle",
      text: "Just a short drive from Ella, Diyaluma Falls is one of the tallest waterfalls in Sri Lanka, cascading down from a height of 220 meters. You can hike to the top for stunning views or relax in the natural pools at the base. It's an ideal spot for a refreshing swim and a picnic amid nature’s beauty.",
      image: "/ella.jpg",
    },
    {
      section: "Ella Spice Garden: A Flavorful Experience",
      text: "Discover the secrets of Sri Lanka's spices at the Ella Spice Garden. Here, you can take a guided tour to learn about various spices, their uses, and how they are cultivated. It's a fascinating experience that will deepen your appreciation for the island's rich culinary heritage.",
      image: "/ella.jpg",
    },
    {
      section: "Buddha's Statue: A Peaceful Retreat",
      text: "Take a moment to reflect at the Buddha's Statue, located near the Ella town center. This large seated statue provides a peaceful atmosphere and offers beautiful views of the surrounding hills. It's a perfect spot for meditation and quiet contemplation.",
      image: "/ella.jpg",
    },
    {
      section: "Ravana Falls: A Natural Wonder",
      text: "Ravana Falls is another picturesque waterfall located near Ella, named after the legendary king of Sri Lanka. The waterfall is easily accessible and is a great spot for a quick dip or a relaxing picnic amidst nature.",
      image: "/ella.jpg",
    },
    {
      section: "The Green Tea Plantation: A Scenic Walk",
      text: "Wander through the rolling hills of the Green Tea Plantation, where endless fields of tea stretch across the landscape. This is a photographer’s dream and a fantastic opportunity to enjoy a peaceful walk in nature.",
      image: "/ella.jpg",
    },
    {
      section: "Kithal Ella Railway Station: A Charming Stop",
      text: "Don’t forget to visit the quaint Kithal Ella Railway Station, which is popular for its charming scenery and serves as a starting point for various hiking trails. It's a great place to soak in the local atmosphere.",
      image: "/ella.jpg",
    },
  ],
};
