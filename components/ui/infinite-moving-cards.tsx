"use client";
import React, { useState, useRef } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { Rating } from "@smastrom/react-rating";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Review {
  comment: string;
  name: string;
  rating: number;
  media?: string[];
}

export const ReviewCarousel = ({ items }: { items: Review[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<Review | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      checkScrollability();
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      checkScrollability();
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden px-12 bg-black">
      {" "}
      {/* Set background to black shade */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="w-6 h-6 text-gray-400" />{" "}
          {/* Change icon color */}
        </Button>
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="w-6 h-6 text-gray-400" />{" "}
          {/* Change icon color */}
        </Button>
      </div>
      <div
        ref={carouselRef}
        className="flex gap-4 py-4 w-full overflow-x-hidden scrollbar-none scroll-smooth"
        onScroll={checkScrollability}
      >
        {" "}
        {/* Remove scrollbar */}
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-[350px] h-[300px] max-w-full border border-black rounded-xl p-6 flex-shrink-0 cursor-pointer bg-[#18181b] shadow-md"
            onClick={() => setSelectedItem(item)}
          >
            <blockquote>
              <span className="text-sm font-medium text-white-800">
                {item.name}
              </span>
              <div className="mt-2 flex flex-col">
                <Rating
                  readOnly={true}
                  style={{ maxWidth: 100 }}
                  value={item.rating}
                />
        <span className="text-sm mt-4 text-white-600">
  {item.comment.split(" ").length > 30
    ? item.comment.split(" ").slice(0, 30).join(" ") + "..."
    : item.comment}
</span>

              </div>
            </blockquote>

            <div className="mt-4 flex  flex-row gap-5">
                    {item.media && item.media.length > 0 && (
                      <img
                        key={idx}
                        src={item.media[0]}
                        alt={`Image ${idx + 1}`}
                        className="rounded-lg h-20 w-20"
                      />
                    )}

                    {item.media && item.media.length > 1 && (
                      <div className="text-sm bg-black/50 rounded-md p-4 h-20 w-20 text-center align-center content-center">
                        +{item.media.length - 1} image(s)
                      </div>
                    )}
                  </div>
          </div>
        ))}
      </div>
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedItem?.name}</DialogTitle>
          </DialogHeader>
          <p className="text-gray-800">{selectedItem?.comment}</p>
          <Rating
            readOnly={true}
            style={{ maxWidth: 100 }}
            value={selectedItem?.rating ?? 0}
          />
          {selectedItem?.media && selectedItem.media.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {selectedItem.media.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Image ${idx + 1}`}
                  className="rounded-lg w-full h-auto"
                />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
