import type { Metadata } from "next";
import localFont from "next/font/local";
import "../style/globals.css";
import Layout from "@/components/layout/Layout";
import {SWRProvider} from "@/provider/swr-provider";
import SessionWrapper from "@/provider/session-provider";
import NavbarMenu from "@/components/layout/Navbar";
import React from "react";
import {PlayerProvider} from "@/context/PlayerContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Coldplay",
  description: "Website For Assessment",
  icons: {
    icon: 'https://www.coldplay.com/favicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <SessionWrapper>
    <div className="items-center justify-items-center">
      <main className="flex flex-col gap-8 p-3 row-start-2 items-center sm:items-start">
        <PlayerProvider>
        <SWRProvider>
        <Layout>
          <NavbarMenu/>
          {children}
        </Layout>
        </SWRProvider>

        </PlayerProvider>
      </main>
    </div>
    </SessionWrapper>
    </body>
    </html>
);
}
