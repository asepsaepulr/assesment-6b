"use client";

import React from "react";
import {Album, Albums} from "@/types/types";
import useSWR from "swr";
import {linkMedia, listTour} from "@/constants/dummyContent";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {buildSpotifyApiUrl} from "@/utils/spotifyApi";
import {fetcher} from "@/utils/fetcher";
import {useSession} from "next-auth/react";
import TracksTable from "@/features/components/TracksTable";
import HeroAlbum from "@/features/components/HeroAlbum";
import OtherRelease from "@/features/components/OtherRelease";
import {FloatingDock} from "@/components/ui/floating-dock";
import Loading from "@/app/loading";

export default function AlbumPage({ albumId }: { albumId: string }) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const artistId = "4gzpq5DPGxSnKTe4SA8HAU";

  const { data: artistAlbum,error } = useSWR<Album>(
    accessToken ? buildSpotifyApiUrl(`albums/${albumId}?market=id`) : null,
    (url : string) => fetcher(url, accessToken as string)
  );

  const { data: otherRelease } = useSWR<Albums>(
    accessToken ? buildSpotifyApiUrl(`artists/${artistId}/albums?include_groups=single&market=id`) : null,
    (url: string) => fetcher(url, accessToken as string)
  );

  if (error) {
    return <div>Error loading album data</div>;
  }
  if (!session || !artistAlbum || !otherRelease) {
    return <div><Loading/></div>;
  }

  return(
    <>
      <HeroAlbum album={artistAlbum}/>
      <TracksTable tracks={artistAlbum?.tracks?.items || []}/>

      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans pt-10">
        Other Release
      </h2>
      <OtherRelease other={otherRelease}/>

      <h4
        className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans py-20">
        On Tour
      </h4>
      <div
        className="rounded-md flex dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={listTour}
          direction="right"
          speed="slow"
        />
      </div>

      <div
        className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1
            className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join Our Newsletter
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Keep up to date with all the latest Coldplay news, gigs and releases with our newsletter, the Coldplay Messenger.
          </p>
          <input
            type="text"
            placeholder="email@domain.com"
            className="rounded-lg border p-6 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full h-11 relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
      </div>

      <div className="flex items-center justify-end pt-10 w-full">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={linkMedia}
        />
      </div>
    </>
  )
}
