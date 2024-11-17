"use client";

import {FloatingNav} from "@/components/ui/navbar-menu";
import {IconHome, IconMessage, IconUser} from "@tabler/icons-react";
import Image from "next/image";

export default function NavbarMenu() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Album",
      link: "/Album",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <HeaderNav/>
    </div>
  );
}

const HeaderNav = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <Image
        src="https://eustore.coldplay.com/cdn/shop/files/mm-logo1_copy.png?v=1718604879&width=250"
        alt="Coldplay EU Left"
        width={170}
        height={30}
      />
      <Image
        src="https://www.coldplay.com/wp/wp-content/uploads/2024/06/CP_HEART.gif"
        alt="Coldplay EU Left"
        width={100}
        height={30}
      />
      <Image
        src="https://eustore.coldplay.com/cdn/shop/t/43/assets/NEW-MOON1.png?v=57993414851097429461723118759"
        alt="Coldplay EU Right"
        width={170}
        height={30}
      />
    </div>
  );
};
