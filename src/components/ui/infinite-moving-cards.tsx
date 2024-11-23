"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    date: string;
    city: string;
    event: string;
    time: string;
    venue: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-6 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx}
            className="relative w-[350px] max-w-full md:w-[450px] flex-shrink-0 rounded-xl bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 hover:from-red-500 hover:via-green-500 hover:to-purple-500 transition-all duration-500 ease-in-out border border-slate-700 px-6 py-8 shadow-md"
          >
            <div className="flex items-center gap-4">
              <div
                className="flex flex-col items-center justify-center w-16 h-16 bg-white text-black rounded-lg shadow-lg">
                <span className="text-2xl font-bold">09</span>
                <span className="text-xs uppercase tracking-wide">Jan</span>
              </div>

              <div className="z-50 h-full w-[1px] bg-gray-700"></div>

              <div className="text-white">
                <h3 className="text-lg font-semibold">{item.city}</h3>
                <p className="text-sm text-black">
                  {item.event}
                </p>
                <p className="text-sm text-black">
                  {item.time} • {item.venue}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
