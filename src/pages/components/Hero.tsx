import Image from "next/image";
import {WobbleCard} from "@/components/ui/wobble-card";
import React from "react";
import {Album} from "@/types/types";
import {useRouter} from "next/navigation";

interface IProps {
  album: Album;
  noAlbum?: boolean;
  noArtist?: boolean;
}

export default function Hero({album}: IProps) {
  const router = useRouter();

  const handleOpen = (albumId : string) => {
    router.push(`/album/${albumId}`);
  };

  const formattedDate = new Date(Date.parse(album?.release_date || "")).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <WobbleCard
      containerClassName="relative bg-blue-900 min-h-[500px] lg:min-h-[800px] xl:min-h-[300px] rounded-2xl overflow-hidden group"
    >
      <div className="absolute inset-0">
        <Image
          src="https://i.scdn.co/image/ab676186000010168653fa3322f48b6f4f966c52"
          alt="Hero Background"
          fill
          className="object-cover brightness-100 transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/20 to-blue-950"></div>
      </div>
      <div className="relative z-10 p-6 lg:p-10 text-white transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-52 h-52 md:w-52 md:h-52 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={album?.images?.[0]?.url || ""}
              alt="Album Cover"
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-left text-xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.018em]">
              New Album Released
            </h2>
            <p className="mt-2 text-left text-sm md:text-base lg:text-lg text-neutral-200">
              Coldplay latest album, {album?.name}, released on {formattedDate}, <br/> represents a continuation of their
              experimental and heartfelt approach to music. <br/> The album features collaborations with various artists
              and includes singles <br/> like Feels Like Im Falling in Love and We Pray which showcase.
            </p>
            <p className="mt-2 text-neutral-200 text-sm lg:text-base">
                <span
                  className="text-blue-400 font-semibold">{album?.artists[0].name}</span>
            </p>
          </div>
        </div>
        <div className="relative z-20">
          <button
            onClick={() => handleOpen(album?.id)}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
               text-white font-semibold text-base rounded-lg shadow-lg transform transition duration-300
               hover:scale-105 hover:from-blue-500 hover:via-indigo-600 hover:to-blue-700
               focus:outline-none focus:ring-4 focus:ring-blue-300">
            Listen Now
          </button>
        </div>
      </div>
    </WobbleCard>
  )
}
