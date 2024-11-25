"use client";

import {LinkPreview} from "@/components/ui/link-preview";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-[45rem] flex-col px-4 relative">
      <span className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
      <LinkPreview
        url="https://raw.githubusercontent.com/asepsaepulr/assesment-6b/refs/heads/main/public/landing.png"
        className="font-bold text-6xl">
          Welcome
        </LinkPreview>{" "}
        this is the coldplay website explore{" "}
        <LinkPreview url="https://raw.githubusercontent.com/asepsaepulr/assesment-6b/refs/heads/main/public/information.png" className="font-bold text-4xl">
          Information
        </LinkPreview>{" "}
        about us search listen to our latest albums and{" "}
        <LinkPreview
          url="https://raw.githubusercontent.com/asepsaepulr/assesment-6b/refs/heads/main/public/songs.png"
          className="font-bold text-4xl"
        >
          Songs
        </LinkPreview>{" "}
      </span>
    </div>
  );
}
