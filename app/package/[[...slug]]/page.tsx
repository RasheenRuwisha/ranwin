"use client";

import { useRouter } from "next/navigation";
import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
type PackagePageProps = {
  params: { slug?: string[] };
};

export default function PackagePage({ params }: PackagePageProps) {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Title & Rating */}
      <div className="flex flex-col space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-bold">
          Bali Beach Bliss: 7-Day Coastal Getaway
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-2 text-gray-600">
          <div className="flex items-center space-x-1">
            <span>Indonesia, Bali</span>
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
        {/* Details Card */}
        <Card className=" w-full">
          <CardContent className="mt-6">
            <h2 className="text-xl font-semibold">
              Bali Bliss: Ubud and Seminyak Adventure
            </h2>
            <p className="text-gray-600 mt-2">
              Experience Bali’s beauty on this 7-day tour, exploring temples,
              jungles, beaches, and cultural sites in Ubud, Nusa Penida, and
              Tanah Lot.
            </p>
            <div className="flex flex-wrap items-center  mt-4 flex flex-row gap-3">
              <span className=" px-3 py-1 rounded-md border-white-200 border">
                🏨 Hotel & Destination
              </span>
              <span className=" px-3 py-1 rounded-md border-white-200 border">
                ⏳ 7 Days
              </span>
              <span className="px-3 py-1 rounded-md border-white-200 border">
                📍 9 Places
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mt-6">
              <div>
                {" "}
                <p>Price</p>
                <span className="text-2xl font-bold">
                  $1,250 <span className="text-sm">per person</span>
                </span>
              </div>

              <Button className="bg-black text-white px-6 py-2 rounded-md mt-4 md:mt-0">
                Booking Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Description Card */}
        <Card className="p-4 w-full border-none align-center content-center">
          <CardContent>
            <h3 className="text-xl font-semibold">Description</h3>
            <p className="text-gray-600 mt-2">
              Discover the breathtaking beauty of Bali on this immersive 7-day
              tour. Explore temples, jungles, and stunning beaches while
              enjoying the island’s vibrant culture.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
