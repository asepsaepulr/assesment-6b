import Image from "next/image";
import {WobbleCard} from "@/components/ui/wobble-card";
import {Card, Carousel} from "@/components/ui/apple-cards-carousel";
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandInstagram, IconBrandSpotify, IconBrandTiktok,
  IconBrandX, IconBrandYoutube,
} from "@tabler/icons-react";
import {FloatingDock} from "@/components/ui/floating-dock";
import {AnimatedTestimonials} from "@/components/ui/animated-personels";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";

export default function ArtistPage() {

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));


  return (
    <div className="gap-4 mx-auto w-full">
      <WobbleCard
        containerClassName="relative bg-blue-900 min-h-[500px] lg:min-h-[800px] xl:min-h-[300px] rounded-2xl overflow-hidden group">
        {/* Background Image with Gradient */}
        <div className="absolute inset-0">
          <Image
            src="https://i.scdn.co/image/ab676186000010168653fa3322f48b6f4f966c52"
            alt="Hero Background"
            fill
            className="object-cover brightness-100 transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/10 to-blue-900"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 lg:p-10 max-w-lg text-white transition-all duration-300">
          <h2 className="text-left text-balance text-xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em]">
            New Album Released
          </h2>
          <p className="mt-4 text-left text-base md:text-lg text-neutral-200">
            With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.
          </p>
          {/* Button */}
          <div className="relative z-20">
            <button
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base rounded-lg shadow-md transition duration-300 group-hover:backdrop-blur-sm">
              Listen Now
            </button>
          </div>
        </div>
      </WobbleCard>


      <div className="w-full h-full py-20">
        <h2
          className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Our Discography
        </h2>
        <Carousel items={cards}/>
      </div>


      <div className="flex items-center justify-end h-[35rem] w-full">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={links}
        />
      </div>
      {/*<div className="relative w-full h-[35rem]">*/}
      {/*  /!* Floating Dock *!/*/}
      {/*  <div*/}
      {/*    className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg">*/}
      {/*    {links.map((link, index) => (*/}
      {/*      <a*/}
      {/*        key={index}*/}
      {/*        href={link.href}*/}
      {/*        className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-full transition"*/}
      {/*      >*/}
      {/*        {link.icon} /!* Replace with actual icon or content *!/*/}
      {/*      </a>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div
        className="rounded-md flex dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonialsCard}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="flex items-center w-full pb-20">
        <AnimatedTestimonials testimonials={testimonials}/>
      </div>

    </div>
  )
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

const testimonialsCard = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const links = [
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-red-500 transition-colors duration-300" />
    ),
    href: "https://instagram.com/coldplay/",
  },

  {
    title: "Facebook",
    icon: (
      <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-orange-500 transition-colors duration-300" />
    ),
    href: "http://www.facebook.com/coldplay",
  },
  {
    title: "X",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-yellow-500 transition-colors duration-300" />
    ),
    href: "http://www.twitter.com/coldplay/",
  },
  {
    title: "Spotify",
    icon: (
      <IconBrandSpotify className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-green-500 transition-colors duration-300" />
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
      <IconBrandTiktok className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:ttext-indigo-500 transition-colors duration-300" />
    ),
    href: "https://www.tiktok.com/@coldplay",
  },
  {
    title: "Youtube",
    icon: (
      <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300 hover:text-purple-500 transition-colors duration-300" />
    ),
    href: "https://www.youtube.com/user/ColdplayVEVO",
  },
];

const testimonials = [
  {
    quote:
      "Christopher Anthony John Martin was born on 2 March 1977 in Exeter, Devon, England. He is the eldest of five children. His father, Anthony John Martin, is a retired chartered accountant.",
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
