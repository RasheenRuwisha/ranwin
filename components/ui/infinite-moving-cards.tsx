"use client";

import { cn } from "@/lib/utils";
import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    comment: string;
    name: string;
    rating: number;
    media?: string[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    comment: string;
    name: string;
    rating: number;
    media?: string[];
  } | null>(null);

  useEffect(() => {
    getDirection();
    getSpeed();
    setStart(true);
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map(
          (
            item,
            idx // Map twice instead of cloning
          ) => (
            <li
              key={idx}
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] cursor-pointer"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
              onClick={() => setSelectedItem(item)}
            >
              <blockquote>
                <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.name}
                </span>
                <div className="relative z-20 mt-2 flex flex-col ">
                  <span className="flex flex-col gap-1">
                    <Rating
                      readOnly={true}
                      style={{ maxWidth: 100 }}
                      value={item.rating}
                    />
                    <span className="text-sm mt-4 leading-[1.6] text-gray-400 font-normal">
                      {item.comment}
                    </span>
                  </span>

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
              </blockquote>
            </li>
          )
        )}
      </ul>
      {/* Popup Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedItem?.name}</DialogTitle>
          </DialogHeader>
          <p className="text-gray-100">{selectedItem?.comment}</p>
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
