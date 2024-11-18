"use client";

import {FloatingNav} from "@/components/ui/navbar-menu";
import {IconHome, IconMessage, IconUser} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarMenu() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Album",
      link: "/album",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Artist",
      link: "/artist",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <header className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <HeaderNav/>
    </header>
  );
}

const HeaderNav = () => {
  return (
    <div className="flex justify-between items-center w-full px-4">
      {/* Left Section: Navigation + Image 1 */}
      <div className="flex items-center gap-6">
        <Image
          src="https://eustore.coldplay.com/cdn/shop/files/mm-logo1_copy.png?v=1718604879&width=250"
          alt="Coldplay EU Left"
          width={170}
          height={30}
        />
        <nav className="flex gap-6 text-white text-xl">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/album" className="hover:text-orange-500">Album</Link>
          <Link href="/artist" className="hover:text-pink-500">Artist</Link>
        </nav>
      </div>

      {/* Center Section: Image 2 */}
      <div className="flex justify-center">
        <Image
          src="https://www.coldplay.com/wp/wp-content/uploads/2024/06/CP_HEART.gif"
          alt="Coldplay Heart"
          width={100}
          height={30}
        />
      </div>

      {/* Right Section: Name + Icon + Image 3 */}
      <div className="flex items-center gap-6">
        {/* Name and Icon */}
        <div className="flex items-center gap-3 py-2 px-4 bg-black rounded-full bg-opacity-70">
          <span className="text-sm font-bold tracking-wide text-white">Aldo</span>
          <button
            className="flex items-center justify-center bg-black bg-opacity-70 rounded-full h-10 w-10 hover:bg-[#181818] focus:outline-none cursor-pointer"
          >
            <IconUser/>
          </button>
        </div>

        {/* Image 3 */}
        <Image
          src="https://eustore.coldplay.com/cdn/shop/t/43/assets/NEW-MOON1.png?v=57993414851097429461723118759"
          alt="Coldplay Moon"
          width={170}
          height={30}
        />
      </div>
    </div>
  );
};
