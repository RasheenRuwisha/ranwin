"use client";

import { FloatingNav } from "@/components/ui/navbar-menu";
import Image from "next/image";
import { navItems } from "@/data";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Hero from "@/components/Hero";
import Second from "@/components/Second";
import WorldMap from "@/components/ui/world-map";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/ui/file-upload";
import LoadingButton from "@/components/loading-buttom";
import { useRef, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Rating } from "@smastrom/react-rating";
import { useToast } from "@/hooks/use-toast";
import { setCookie, getCookie } from "cookies-next/client";
import { v4 as uuidv4 } from "uuid";
import { addReview, getReviews } from "./actions";
import "@smastrom/react-rating/style.css";

export default function Home() {
  const fileUploadRef = useRef(null);

  const [packages, setPackages] = useState(null);
  const [rloading, setRloading] = useState(false);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(reviews);
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
        packageId: "main",
        rating,
        comment: review,
        media: files,
        name,
        tokenId: token,
        createdAt: new Date().toISOString(), // Ensure ordering consistency
      };

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
        const reviews = await getReviews("main");
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
    <main className="relative flex justify-center items-center flex-col overflow-hidden ">
      <div className="w-full">
        <FloatingNav navItems={navItems} />

        <Hero />
        <Second />
        <div className="relative h-[500px] my-20">
          <WorldMap />
          <div className="absolute top-[50%] translate-y-[-50%] xs:px-[20px]  sm:text-md  px-[2rem]  md:px-[5rem] md:text-xl   xl:px-[10rem]  xl:text-4xl">
            The beauty of Sri Lanka lies in its diverse landscapes, where golden
            sandy beaches meet lush green mountains. From the turquoise waters
            of its coastal areas to the misty hills covered in tea plantations,
            the island offers a captivating blend of serenity and adventure. Its
            national parks, wildlife sanctuaries, and ancient heritage sites
            create a perfect harmony between nature and history, inviting you to
            explore and be inspired.
          </div>
        </div>
        <Destinations />
        <div className=" pt-5 lg:pt:36" id="header">
          <div className="text-2xl  text-left">Reviews</div>

          <div className="h-[20rem] mt-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            {reviews.length > 0 ? (
              <InfiniteMovingCards
                items={reviews}
                direction="right"
                speed="normal"
              />
            ) : (
              <></>
            )}
          </div>
          <div className="max-w-7xl mx-auto p-6 space-y-6 z-20">
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
                    <FileUpload
                      ref={fileUploadRef}
                      onChange={handleFileUpload}
                    />
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
    </main>
  );
}
