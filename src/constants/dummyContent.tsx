import React from "react";
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandInstagram, IconBrandSpotify, IconBrandTiktok,
  IconBrandX, IconBrandYoutube,
} from "@tabler/icons-react";

export const listTour = [
  {
    "date": "2024-01-09",
    "city": "Abu Dhabi",
    "event": "Coldplay | Enhanced Experiences",
    "time": "6:45 PM",
    "venue": "Zayed Sports City"
  },
  {
    "date": "2024-01-11",
    "city": "Abu Dhabi",
    "event": "Coldplay | Enhanced Experiences",
    "time": "6:45 PM",
    "venue": "Zayed Sports City"
  },
  {
    "date": "2024-01-12",
    "city": "Abu Dhabi",
    "event": "Coldplay: Music Of The Spheres",
    "time": "6:45 PM",
    "venue": "Zayed Sports City"
  },
  {
    "date": "2024-01-14",
    "city": "Abu Dhabi",
    "event": "Coldplay | Enhanced Experiences",
    "time": "6:45 PM",
    "venue": "Zayed Sports City"
  },
  {
    "date": "2024-01-18",
    "city": "Navi Mumbai",
    "event": "Coldplay: Music Of The Spheres",
    "time": "6:00 PM",
    "venue": "D Y Patil Sports"
  },
  {
    "date": "2024-01-19",
    "city": "Navi Mumbai",
    "event": "Coldplay: Music Of The Spheres",
    "time": "6:00 PM",
    "venue": "D Y Patil Sports"
  },
  {
    "date": "2024-01-21",
    "city": "Navi Mumbai",
    "event": "Coldplay: Music Of The Spheres",
    "time": "6:00 PM",
    "venue": "D Y Patil Sports"
  },
  {
    "date": "2024-01-25",
    "city": "Ahmedabad",
    "event": "Coldplay: Music Of The Spheres",
    "time": "6:00 PM",
    "venue": "Sardar Patel Stadium"
  },
  {
    "date": "2024-01-26",
    "city": "Ahmedabad",
    "event": "Coldplay: Music Of The Spheres",
    "time": "6:00 PM",
    "venue": "Sardar Patel Stadium"
  }
];

export const personnels = [
  {
    quote:
      "Christopher Anthony John Martin was born on 2 March 1977 in Exeter, Devon, England. He is the eldest of five children. His father, Anthony John Martin, is a retired chartered accountant. His mother, Alison Martin, is from Rhodesia (modern day Zimbabwe) and works as a music teacher.",
    name: "Chris Martin",
    designation: "Vocalist",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/ChrisMartinManch030623_%28cropped%29.jpg/800px-ChrisMartinManch030623_%28cropped%29.jpg",
  },
  {
    quote:
      "Jonathan Mark Buckland was born on 11 September 1977 in Islington, London, England. He is the second child of John Buckland, a former teacher at Holywell High School, and his wife Joy.",
    name: "Jonny Buckland",
    designation: "Guitarist",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JonnyBucklandGlasto290624_%28cropped%29.jpg/800px-JonnyBucklandGlasto290624_%28cropped%29.jpg",
  },
  {
    quote:
      "Guy Rupert Berryman was born on 12 April 1978 in Kirkcaldy, Fife, Scotland. He is the youngest son of engineer Rupert Berryman and his wife Elizabeth, whose family were merchants and factory owners in the region.",
    name: "Guy Berryman",
    designation: "Bassit",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/GuyBerrymanManch030623_%28cropped%29.jpg/800px-GuyBerrymanManch030623_%28cropped%29.jpg",
  },
  {
    quote:
      "William Champion was born on 31 July 1978 in Southampton, Hampshire, England being the second child of archaeology lecturers Timothy and Sara Champion.",
    name: "Will Champion",
    designation: "Drummers",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/WillChampionLondon07122021_%28cropped%29.jpg/800px-WillChampionLondon07122021_%28cropped%29.jpg",
  },
];

export const linkMedia = [
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram
        className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-red-500 transition-colors duration-300"/>
    ),
    href: "https://instagram.com/coldplay/",
  },

  {
    title: "Facebook",
    icon: (
      <IconBrandFacebook
        className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-orange-500 transition-colors duration-300"/>
    ),
    href: "http://www.facebook.com/coldplay",
  },
  {
    title: "X",
    icon: (
      <IconBrandX
        className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-yellow-500 transition-colors duration-300"/>
    ),
    href: "http://www.twitter.com/coldplay/",
  },
  {
    title: "Spotify",
    icon: (
      <IconBrandSpotify
        className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-green-500 transition-colors duration-300"/>
    ),
    href: "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU",
  },
  {
    title: "Apple Music",
    icon: (
      <IconBrandApple
        className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-blue-500 transition-colors duration-300"
        />
    ),
    href: "https://music.apple.com/gb/artist/coldplay/471744",
  },

  {
    title: "Tiktok",
    icon: (
      <IconBrandTiktok
        className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:ttext-indigo-500 transition-colors duration-300"/>
    ),
    href: "https://www.tiktok.com/@coldplay",
  },
  {
    title: "Youtube",
    icon: (
      <IconBrandYoutube
        className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-purple-500 transition-colors duration-300"/>
    ),
    href: "https://www.youtube.com/user/ColdplayVEVO",
  },
];
