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
