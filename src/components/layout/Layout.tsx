"use client";

import Footer from "@/components/layout/Footer";
import {ReactNode} from "react";
import NavbarMenu from "@/components/layout/Navbar";

const Layout = ({children}: { children: ReactNode }) => (
<div>
      <NavbarMenu/>
      {children}
      <Footer/>
</div>
)


export default Layout
