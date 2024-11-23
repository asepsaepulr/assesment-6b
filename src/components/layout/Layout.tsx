"use client";

import Footer from "@/components/layout/Footer";
import React, {ReactNode} from "react";
import {BackgroundBeams} from "@/components/ui/background-beams";

const Layout = ({children}: { children: ReactNode }) => (
  <div>
    <BackgroundBeams/>
    {children}
    <Footer/>
  </div>
)


export default Layout
