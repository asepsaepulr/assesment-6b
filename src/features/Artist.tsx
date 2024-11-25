"use client";

import useSWR from "swr";
import React from "react";
import {Albums} from "@/types/types";
import {FloatingDock} from "@/components/ui/floating-dock";
import {AnimatedTestimonials} from "@/components/ui/animated-personels";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {buildSpotifyApiUrl} from "@/utils/spotifyApi";
import {fetcher} from "@/utils/fetcher";
import {useSession} from "next-auth/react";
import {Card, Carousel} from "@/components/ui/apple-cards-carousel";
import Hero from "@/features/components/Hero";
import {linkMedia, listTour, personnels} from "@/constants/dummyContent";
import Loading from "@/app/loading";

export default function ArtistPage() {
  const {data: session} = useSession();
  const accessToken = session?.accessToken;

  const artistId = "4gzpq5DPGxSnKTe4SA8HAU";

  const {data: artistData} = useSWR(
    accessToken ? buildSpotifyApiUrl(`artists/${artistId}`) : null,
    (url) => fetcher(url, accessToken as string)
  );

  const {data: artistAlbum} = useSWR<Albums>(
    accessToken ? buildSpotifyApiUrl(`artists/${artistId}/albums?include_groups=album&market=id`) : null,
    (url: string) => fetcher(url, accessToken as string)
  );

  if (!session || !artistData || !artistAlbum) {
    return <div><Loading/></div>;
  }

  const cards = artistAlbum?.items.map((album, index) => (
    <Card key={album.id} card={album} index={index} />
  ));
  return (
    <div className="gap-4 mx-auto w-full">
      <Hero album={artistAlbum.items[0]}/>
      <div className="w-full h-full py-20">
        <h4
          className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Our Discography
        </h4>
        <Carousel items={cards}/>
      </div>
      <h4
        className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans py-10">
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
      <h4
        className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans py-10">
        Personnels
      </h4>
      <div className="flex items-center w-full pb-20">
        <AnimatedTestimonials testimonials={personnels}/>
      </div>
      <div className="flex items-center justify-end pt-10 w-full">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={linkMedia}
        />
      </div>
    </div>
  )
}




