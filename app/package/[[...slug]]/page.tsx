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

const UNSPLASH_API_KEY = "5A1syFn-66a7EdWUbqkCmXZQl7VpPloEApn02a64Su0";
const UNSPLASH_URL = "https://api.unsplash.com/search/photos";

export default function PackagePage({ params }) {
  const [packages, setPackages] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const hideTimeoutRef = useRef(null);
  const [lastFetchedActivity, setLastFetchedActivity] = useState(null);

  useEffect(() => {
    if (params?.slug?.[0] === "kandy-5-day") {
      setPackages(package1);
    }
  }, [params]);

  const fetchImage = async (query) => {
    clearTimeout(hideTimeoutRef.current);
    setLoading(true);
    try {
      const response = await axios.get(UNSPLASH_URL, {
        params: { query, client_id: UNSPLASH_API_KEY, per_page: 1 },
      });
      setHoveredImage(response.data.results[0]?.urls?.small || null);
    } catch (error) {
      console.error("Error fetching image:", error);
      setHoveredImage(null);
    }
    setLoading(false);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => setHoveredImage(null), 300);
  };

  return (
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
            src="/backdrop.jpg"
            alt="Bali Beach"
            width={800}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <Image
            src="/backdrop.jpg"
            alt="Bali View"
            width={400}
            height={200}
            className="rounded-lg object-cover w-full"
          />
          <Image
            src="/backdrop.jpg"
            alt="Bali Temple"
            width={400}
            height={200}
            className="rounded-lg object-cover w-full"
          />
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
              {[packages?.price, packages?.price_with_hotel].map((price, i) => (
                <div key={i}>
                  <p>Price</p>
                  <span className="text-2xl font-bold">
                    ${price}{" "}
                    <span className="text-sm">
                      per person {i === 1 ? "w/ hotel" : ""}
                    </span>
                  </span>
                </div>
              ))}
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

      <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-6">
        <Card>
          <CardContent className="mt-6">
            <Accordion type="single" collapsible>
              {packages?.day_break_down &&
                Object.entries(packages.day_break_down).map(([dayKey, day]) => (
                  <AccordionItem key={dayKey} value={`day-${dayKey}`}>
                    <AccordionTrigger>
                      Day {dayKey}:{" "}
                      {day.start === day.end
                        ? day.start
                        : `${day.start} to ${day.end}`}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        <strong>Distance:</strong> {day.distance}
                      </p>
                      <p>
                        <strong>Duration:</strong> {day.duration}
                      </p>
                      <h4>Things to Do:</h4>
                      <div className="flex flex-col flex-wrap gap-2">
                        {day.things_to_do.map((activity, index) => (
                          <HoverCard className="max-w-[300px] max-h-[500px] rounded-lg">
                            <HoverCardTrigger
                              onMouseEnter={() => {
                                if (lastFetchedActivity !== activity) {
                                  fetchImage(activity);
                                  setLastFetchedActivity(activity);
                                }
                              }}
                            >
                              <Badge
                                key={index}
                                className="px-2 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-md"
                              >
                                {activity}
                              </Badge>
                            </HoverCardTrigger>
                            <HoverCardContent
                              align="start"
                              side="left"
                              className="max-w-[300px] max-h-[500px] rounded-lg"
                            >
                              {loading && <p>Loading image...</p>}
                              {hoveredImage && !loading && (
                                <div className="mt-2">
                                  <img
                                    src={hoveredImage}
                                    alt="Hovered activity"
                                    className="w-[600px]  rounded-lg"
                                  />
                                </div>
                              )}
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardContent>
            <Map />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
