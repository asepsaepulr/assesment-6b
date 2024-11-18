"use client";

import Footer from "@/components/layout/Footer";
import React, {ReactNode} from "react";
import NavbarMenu from "@/components/layout/Navbar";
import {BackgroundBeams} from "@/components/ui/background-beams";

const Layout = ({children}: { children: ReactNode }) => (
<div>
      <BackgroundBeams/>
      <NavbarMenu/>
      {children}
      <Footer/>
</div>
)


export default Layout
