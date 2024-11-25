import {WobbleCard} from "@/components/ui/wobble-card";
import Image from "next/image";
import {formatYear} from "@/utils/formatDateYear";
import React from "react";
import {Album} from "@/types/types";

export default function HeroAlbum({ album }: { album?: Album }) {
  return (
    <div className="grid gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="relative bg-orange-700 min-h-[100px] lg:min-h-[200px] rounded-2xl overflow-hidden group shadow-lg"
      >
        <div
          className="absolute inset-0 bg-gradient-to-l from-orange-500 to-orange-800 bg-cover bg-center"
          style={{
            backgroundImage: `url(${album?.images?.[0]?.url})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[90%] bg-gradient-to-l from-transparent via-blue-900/20 to-blue-950"></div>
          {/* 30% overlay + 70% blur */}
        </div>
        <div
          className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
          {album && (
            <>
              <div className="w-52 h-52 lg:w-52 lg:h-52 flex-shrink-0 rounded-md overflow-hidden shadow-lg">
                <Image
                  src={album?.images?.[0]?.url || ""}
                  alt="Album Cover"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="text-sm font-bold">{album.album_type}</span>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold">
                  {album.name}
                </h2>
                <p className="mt-2 text-neutral-200 text-sm lg:text-base">
                  <span className="text-blue-400">{album.artists[0].name}</span>{" "}
                  • {formatYear(album.release_date || "")} • Songs {album?.tracks?.total}
                </p>
              </div>
            </>
          )}
        </div>
      </WobbleCard>
    </div>
  )
}
