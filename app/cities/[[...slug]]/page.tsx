"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Map from "@/components/Map";
import { dataCaro, ella, package1 } from "@/data";
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
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/navbar-menu";
import { BookButton } from "@/components/book-button";

export default function PackagePage({ params }) {
  const [packages, setPackages] = useState(null);
  const [url, setUrl] = useState("");

  const [hoveredImage, setHoveredImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const cards = dataCaro
    .filter((card) => !card.link.includes(url))
    .map((card, index) => (
      <CardPackage2 key={card.src} card={card} index={index} layout={true} />
    ));

  console.log(cards);

  useEffect(() => {
    if (params?.slug?.[0] === "ella") {
      setUrl(params?.slug?.[0]);
      setPackages(ella);
    }
  }, [params]);

  const handleMouseEnter = (activity) => {
    const imageUrl = activity?.image || null;
    setHoveredImage(imageUrl);
  };

  return (
    <div>
      <FloatingNav navItems={navItems} />

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

        <div className=" pt-5 lg:pt:36 mb-10" id="header">
          <div className="text-lg  text-left">{packages?.description}</div>
        </div>

        <div>
          <div className=" text-left my-10">
            <p className="text-md my-2">[Activities]</p>
            <p className="text-2xl lg:text-2xl">Things to do</p>
          </div>
          <div>
            {packages != null ? (
              packages.things_to_do.map((activity, index) => (
                <div
                  className="grid grid-cols-1 md:grid-cols-[50%,50%] gap-6"
                  key={index}
                >
                  {index % 2 === 0 ? ( // Even index: Text first
                    <>
                      <Card className=" border-none text-left align-center content-center">
                        <CardContent className="flex flex-col mt-6 align-center content-center">
                          <h3 className="text-xl font-semibold">
                            {activity.section}
                          </h3>
                          <p className="text-gray-600 mt-2">{activity.text}</p>
                        </CardContent>
                      </Card>

                      <Card className="p-4 border-none">
                        <CardContent>
                          <div
                            className="relative w-full"
                            style={{ paddingTop: "50%" }}
                          >
                            <Image
                              src={
                                activity?.image === ""
                                  ? "https://images.pexels.com/photos/1998440/pexels-photo-1998440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                  : activity?.image
                              }
                              alt="Bali View"
                              layout="fill"
                              objectFit="cover"
                              className="rounded-lg"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  ) : (
                    // Odd index: Image first
                    <>
                      <Card className="p-4 border-none">
                        <CardContent>
                          <div
                            className="relative w-full"
                            style={{ paddingTop: "50%" }}
                          >
                            <Image
                              src={
                                activity?.image === ""
                                  ? "https://images.pexels.com/photos/1998440/pexels-photo-1998440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                  : activity?.image
                              }
                              alt="Bali View"
                              layout="fill"
                              objectFit="cover"
                              className="rounded-lg"
                            />
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="p-4 border-none align-center content-center">
                        <CardContent className="flex flex-col mt-6 align-center content-center">
                          <h3 className="text-xl font-semibold">
                            {activity.section}
                          </h3>
                          <p className="text-gray-600 mt-2">{activity.text}</p>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className=" pt-5 lg:pt:36 mt-10" id="header">
          <div className="text-lg  text-left">{packages?.conclusion}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
