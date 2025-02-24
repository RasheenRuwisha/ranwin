"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Map from "@/components/Map";
import { package1 } from "@/data";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { FocusCards } from "@/components/ui/focus-cards-2";
import {
  Carousel,
  Card as CardPackage2,
} from "@/components/ui/apple-cards-carousel";
import Footer from "@/components/Footer";

const UNSPLASH_API_KEY = "5A1syFn-66a7EdWUbqkCmXZQl7VpPloEApn02a64Su0";
const UNSPLASH_URL = "https://api.unsplash.com/search/photos";

export default function PackagePage({ params }) {
  const [packages, setPackages] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const hideTimeoutRef = useRef(null);
  const [lastFetchedActivity, setLastFetchedActivity] = useState(null);

  const data = [
    {
      category: "5 Days",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "8 Days",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "10 Days",
      title: "Launching the new Apple Vision Pro.",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      category: "10 Days",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const cards = data.map((card, index) => (
    <CardPackage2 key={card.src} card={card} index={index} layout={true} />
  ));

  console.log(cards);

  useEffect(() => {
    if (params?.slug?.[0] === "kandy-5-day") {
      setPackages(package1);
    }
  }, [params]);

  const handleMouseEnter = (activity) => {
    const imageUrl = activity?.image || null;
    setHoveredImage(imageUrl);
  };

  const waypoints = [
    [79.88452, 7.17929], // Example waypoint 1
    [80.649991, 7.292631], // Example waypoint 2
    [80.69836, 7.01334], // Example waypoint 3
    [79.97408, 6.87053], // Example waypoint 3
    [79.88452, 7.17929], // Example waypoint 3
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Title & Rating */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-bold">{packages?.title}</h1>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-2 text-gray-600">
            <div className="flex items-center space-x-1">
              <span>Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="md:col-span-2">
            <Image
              src={
                packages?.image_1 == ""
                  ? "https://images.pexels.com/photos/1998440/pexels-photo-1998440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  : packages?.image_1
              }
              alt="Bali Beach"
              width={800}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="relative w-full" style={{ paddingTop: "50%" }}>
              {/* Aspect ratio of 2:1 */}
              <Image
                src={
                  packages?.image_2 == ""
                    ? "https://images.pexels.com/photos/1998440/pexels-photo-1998440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    : packages?.image_2
                }
                alt="Bali View"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-full" style={{ paddingTop: "50%" }}>
              {/* Aspect ratio of 2:1 */}
              <Image
                src={
                  packages?.image_3 == ""
                    ? "https://images.pexels.com/photos/1998440/pexels-photo-1998440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    : packages?.image_3
                }
                alt="Bali View"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-6">
          <Card>
            <CardContent className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold">{packages?.title}</h2>
              <p className="text-gray-600">{packages?.short_description}</p>
              <div className="flex flex-wrap gap-3">
                {[
                  "🏨 Destination",
                  `⏳ ${packages?.number_of_days} Days`,
                  `📍 ${
                    packages?.route ? Object.entries(packages?.route).length : 0
                  } Places`,
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md border border-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                {[packages?.price, packages?.price_with_hotel].map(
                  (price, i) => (
                    <div key={i}>
                      <p>Price</p>
                      <span className="text-2xl font-bold">
                        ${price}{" "}
                        <span className="text-sm">
                          per person {i === 1 ? "w/ hotel" : ""}
                        </span>
                      </span>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="p-4 border-none align-center content-center">
            <CardContent>
              <h3 className="text-xl font-semibold">Description</h3>
              <p className="text-gray-600 mt-2">{packages?.description}</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className=" text-left my-10">
            <p className="text-md my-2">[Travel Plans]</p>
            <p className="text-2xl lg:text-2xl">
              A selection of more exceptional destinations to explore
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-6">
            <Card>
              <CardContent className="mt-6">
                <Accordion type="single" collapsible>
                  {packages?.day_break_down &&
                    Object.entries(packages.day_break_down).map(
                      ([dayKey, day]) => (
                        <AccordionItem key={dayKey} value={`day-${dayKey}`}>
                          <AccordionTrigger>
                            Day {dayKey}:{" "}
                            {day.start === day.end
                              ? day.start
                              : `${day.start} to ${day.end}`}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-lg">
                              <strong>
                                {" "}
                                {day.start === day.end
                                  ? day.start
                                  : `${day.start} to ${day.end}`}
                              </strong>
                            </p>
                            <div className="flex flex-row gap-5 space-between my-5">
                              <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 rounded-md border border-gray-200">
                                  <strong>Distance:</strong> {day.distance}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 rounded-md border border-gray-200">
                                  <strong>Duration:</strong> {day.duration}
                                </span>
                              </div>
                            </div>
                            <h4 className="text-lg mb-5">Things to Do:</h4>
                            <div className="flex flex-row flex-wrap gap-2">
                              {day.things_to_do.map((activity, index) => (
                                <HoverCard
                                  className="max-w-[300px] max-h-[500px] rounded-lg"
                                  key={index}
                                >
                                  <HoverCardTrigger
                                    onMouseEnter={() =>
                                      handleMouseEnter(activity)
                                    }
                                  >
                                    <Badge className="px-2 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                                      {activity.name}
                                    </Badge>
                                  </HoverCardTrigger>
                                  <HoverCardContent
                                    align="start"
                                    side="top"
                                    className="max-w-[300px] max-h-[500px] rounded-lg"
                                  >
                                    {loading && <p>Loading image...</p>}
                                    {hoveredImage && !loading ? (
                                      <div className="mt-2">
                                        <img
                                          src={hoveredImage}
                                          alt="Hovered activity"
                                          className="w-[600px] rounded-lg"
                                        />
                                      </div>
                                    ) : (
                                      // Optionally, you can display a fallback message or leave it empty
                                      <p>No image available</p>
                                    )}
                                  </HoverCardContent>
                                </HoverCard>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    )}
                </Accordion>
              </CardContent>
            </Card>

            <Card className="p-4">
              <CardContent>
                <Map waypoints={waypoints} />
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className=" text-left my-10">
            <p className="text-md my-2">[Whats Included]</p>
            <p className="text-2xl lg:text-2xl">
              Whats Covered in your Experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[50%,50%] gap-6">
            <Card>
              <CardContent className="mt-6">
                <Accordion type="single" collapsible>
                  <AccordionItem key={"amenities"} value={"amenities"}>
                    <AccordionTrigger>Amenities</AccordionTrigger>
                    <AccordionContent className="flex flex-row flex-wrap gap-2">
                      <Badge className="px-2 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                        Sim Card{" "}
                      </Badge>
                      <Badge className="px-2 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                        Bottled Water{" "}
                      </Badge>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem key={"tickets"} value={"tickets"}>
                    <AccordionTrigger>Tickets</AccordionTrigger>
                    <AccordionContent className="flex flex-row flex-wrap gap-2">
                      {packages != null ? (
                        packages.tickets_included.map((activity, index) => (
                          <Badge className="px-2 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                            {activity}
                          </Badge>
                        ))
                      ) : (
                        <></>
                      )}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem key={"tour"} value={"tour"}>
                    <AccordionTrigger>Guided Tours</AccordionTrigger>
                    <AccordionContent className="flex flex-col flex-wrap gap-2">
                      The tours guides will be available to help you with your
                      journey.
                      <p>Languages</p>
                      <div className="flex flex-row flex-wrap gap-2">
                        <Badge className="px-2 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                          English
                        </Badge>
                        <Badge className="px-2 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                          Sinhala
                        </Badge>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem key={"hotel"} value={"hotel"}>
                    <AccordionTrigger>
                      Hotel Accommodation (depending on package)
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col flex-wrap gap-2">
                      Hotel Accomodation will be provided for the duration of
                      the trip if you choose the package with hotel.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="p-4 border-none">
              <CardContent>
                <div className="relative w-full" style={{ paddingTop: "50%" }}>
                  {/* Aspect ratio of 2:1 */}
                  <Image
                    src={
                      packages?.image_3 == ""
                        ? "https://images.pexels.com/photos/1998440/pexels-photo-1998440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        : packages?.image_3
                    }
                    alt="Bali View"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className=" pt-5 lg:pt:36" id="header">
          <div className="text-2xl  text-left">
            A selection of more exceptional destinations to explore
          </div>

          <div>
            <Carousel items={cards} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
