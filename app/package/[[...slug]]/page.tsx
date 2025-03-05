"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Map from "@/components/Map";
import {
  dataCaro,
  package1,
  package2,
  package3,
  package4,
  package5,
  package6,
} from "@/data";
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
import { FileUpload } from "@/components/ui/file-upload";
import { Textarea } from "@/components/ui/textarea";
import LoadingButton from "@/components/loading-buttom";
import { setCookie, getCookie } from "cookies-next/client";
import { v4 as uuidv4 } from "uuid";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { addReview, getReviews } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { ReviewCarousel } from "@/components/ui/infinite-moving-cards";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PackagePage({ params }) {
  const fileUploadRef = useRef(null);

  const [packages, setPackages] = useState(null);
  const [packagesR, setPackagesR] = useState(null);
  const [url, setUrl] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [rating, setRating] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rloading, setRloading] = useState(false);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");

  const { toast } = useToast();

  const cards = dataCaro
    .filter((card) => !card.link.includes(url))
    .map((card, index) => (
      <CardPackage2 key={card.src} card={card} index={index} layout={true} />
    ));

  useEffect(() => {
    const fetchData = async () => {
      let userName = getCookie("ranwin-user-token-name");
      setName(userName);

      if (params?.slug?.[0] === "nature-escape") {
        setUrl(params.slug[0]);
        setPackages(package1);
      } else if (params?.slug?.[0] === "coastal-escape") {
        setUrl(params.slug[0]);
        setPackages(package2);
      } else if (params?.slug?.[0] === "southern-wonders") {
        setUrl(params.slug[0]);
        setPackages(package3);
      } else if (params?.slug?.[0] === "cultural-heart") {
        setUrl(params.slug[0]);
        setPackages(package4);
      } else if (params?.slug?.[0] === "scenic-odyysey") {
        setUrl(params.slug[0]);
        setPackages(package5);
      } else if (params?.slug?.[0] === "north-to-south") {
        setUrl(params.slug[0]);
        setPackages(package6);
      }

      const reviews = await getReviews(params?.slug?.[0]);
      setReviews(reviews);
      setPackagesR(params?.slug?.[0]);
      console.log(reviews);
    };

    fetchData();
  }, [params?.slug?.[0]]);

  const handleMouseEnter = (activity) => {
    const imageUrl = activity?.image || null;
    setHoveredImage(imageUrl);
  };

  const handleFileUpload = (newFiles: File[]) => {
    setFiles([...files, ...newFiles]);

    console.log(files);
  };

  const uploadReview = async () => {
    try {
      setRloading(true);
      let token = getCookie("ranwin-user-token-reviews");
      let userName = getCookie("ranwin-user-token-name");

      if (!token) {
        token = uuidv4();
        setCookie("ranwin-user-token-reviews", token);
      }

      if (!userName) {
        setCookie("ranwin-user-token-name", name);
      }

      const newReview = {
        id: crypto.randomUUID(), // Temporary ID for UI consistency
        packageId: params?.slug?.[0] || "default-package",
        rating,
        comment: review,
        media: fileUploadRef.current?.getFiles,
        name,
        tokenId: token,
        createdAt: new Date().toISOString(), // Ensure ordering consistency
      };
      console.log(files);

      // Optimistically update UI

      // Reset form
      setReview("");
      setRating(0);
      setName(userName);
      fileUploadRef.current?.clearFiles();

      // Send to backend
      const response = await addReview(newReview);
      console.log("Review added:", response);

      // If the backend returns an actual ID, update it in state
      if (response) {
        const reviews = await getReviews(packagesR);
        setReviews(reviews);
      }

      toast({
        title: "Review submitted",
        description:
          "Your review has been added successfully. Please wait a couple of seconds for it to appear.",
      });
    } catch (error) {
      console.error("Error uploading review:", error);
      toast({
        title: "Error",
        description: "Something went wrong while submitting your review.",
        variant: "destructive",
      });

      // Rollback UI update if the request fails
      setReviews((prevReviews) =>
        prevReviews.filter((r) => r.id !== newReview.id)
      );
    } finally {
      setRloading(false);
    }
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

        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-6">
          <Card>
            <CardContent className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold">{packages?.short_title}</h2>
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
              <BookButton />
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
                {packages != null ? (
                  <Map waypoints={packages?.waypoints} />
                ) : (
                  <></>
                )}
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

        <div className=" pt-5 lg:pt:36">
          <div className="text-2xl  text-left">
            A selection of more exceptional destinations to explore
          </div>

          <div>
            <Carousel items={cards} />
          </div>
        </div>

        <div className=" pt-5 lg:pt:36" id="header">
          <div className="text-2xl  text-left">Reviews</div>

          <div className="h-[22rem] mt-10 rounded-md flex flex-col antialiased dark:bg-black items-center justify-center relative overflow-hidden">
            {reviews.length > 0 ? <ReviewCarousel items={reviews} /> : <></>}
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <div className="text-2xl text-left">Leave a review</div>

            <div className="flex gap-5 flex-col">
              <div className="grid md:grid-cols-2 grid-cols-2 gap-10">
                <div className="flex gap-2 flex-col">
                  <div className="grid grid-cols-2  gap-10 ">
                    <div className="justify-center align-center content-center">
                      <Label>Name</Label>
                      <Input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="border p-2 w-full rounded"
                      />
                    </div>
                    <div className="f justify-center align-center content-center">
                      <Label>Star Rating</Label>
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={rating}
                        onChange={setRating}
                      />
                    </div>
                  </div>
                  <Textarea
                    value={review}
                    rows={20}
                    onChange={(e) => setReview(e.target.value)}
                  />
                </div>

                <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                  <FileUpload ref={fileUploadRef} onChange={handleFileUpload} />
                </div>
              </div>
            </div>
            <LoadingButton
              onClick={() => uploadReview()}
              loading={rloading}
              disabled={rloading}
            >
              Submit Review
            </LoadingButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
