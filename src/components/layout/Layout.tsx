"use client";

import Footer from "@/components/layout/Footer";
import React, {ReactNode} from "react";
import {BackgroundBeams} from "@/components/ui/background-beams";
import PreviewPlayer from "@/features/components/PreviewPlayer";

const Layout = ({children}: { children: ReactNode }) => (
  <div>
    <BackgroundBeams/>
    {children}
    <PreviewPlayer />
    <Footer/>
  </div>
)


export default Layout
