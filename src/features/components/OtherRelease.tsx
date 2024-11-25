import {Albums} from "@/types/types";
import {motion} from "framer-motion";
import Image from "next/image";
import {formatYear} from "@/utils/formatDateYear";
import React from "react";

export default function OtherRelease({ other }: { other?: Albums }) {
  return (
    <ul className="max-w-7xl mx-auto w-full md:grid-cols-5 grid gap-4">
      {other?.items.map((card) => (
        <motion.div
          layoutId={`card-${card.id}`}
          key={card.id}
          className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
        >
          <div className="flex gap-4 flex-col w-full">
            <motion.div layoutId={`image-${card.id}`}>
              <Image
                width={1000}
                height={1000}
                src={card?.images?.[0]?.url || ""}
                alt={card.name}
                className="h-60 w-full  rounded-lg object-cover object-top"
              />
            </motion.div>
            <div className="flex justify-center items-center flex-col">
              <motion.h3
                layoutId={`title-${card.id}}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
              >
                {card.name}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.id}`}
                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
              >
                {card.album_type} • {formatYear(card.release_date || "")} • tracks {card.total_tracks}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </ul>
  )
}
