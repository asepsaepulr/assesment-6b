"use client";

import {FloatingNav} from "@/components/ui/navbar-menu";
import {IconHome, IconMessage, IconUser} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Login from "@/features/Login";
import Logout from "@/features/Logout";
import {useSession} from "next-auth/react";

const NavbarMenu = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Artist",
      link: "/artist",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Album",
      link: "/album",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <header className="relative w-[1280px]">
      <FloatingNav navItems={navItems}/>
      <div className="flex justify-between items-center w-full px-4">
        <div className="flex items-center gap-6">
          <Image
            src="https://eustore.coldplay.com/cdn/shop/files/mm-logo1_copy.png?v=1718604879&width=250"
            alt="Coldplay EU Left"
            width={170}
            height={30}
          />
          <nav className="flex gap-6 text-2sm md:text-5sm font-semibold text-neutral-700 dark:text-white">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/artist" className="hover:text-pink-500">Artist</Link>
            <Link href="/album" className="hover:text-orange-500">Album</Link>
          </nav>
        </div>
        <div className="flex justify-center ">
          <Image
            src="https://www.coldplay.com/wp/wp-content/uploads/2024/06/CP_HEART.gif"
            alt="Coldplay Heart"
            width={100}
            height={30}
          />
        </div>

        <div className="flex items-center gap-6">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage
                      src={user?.image || ""}
                      alt={user?.name || ""}
                      referrerPolicy="no-referrer"
                    />
                    <AvatarFallback>{user?.name?.slice(0, 2) || user?.email?.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{user?.name || user?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <Logout/>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
          <Login/>
          )}
          <Image
            src="https://eustore.coldplay.com/cdn/shop/t/43/assets/NEW-MOON1.png?v=57993414851097429461723118759"
            alt="Coldplay Moon"
            width={170}
            height={30}
          />
        </div>
      </div>
    </header>
  );
}

export default NavbarMenu;
