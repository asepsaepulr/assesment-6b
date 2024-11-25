"use client"

import React from 'react'
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import { signOut } from 'next-auth/react';

const Logout = () => {
  const hangeLogout = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };
  return (
  <DropdownMenuItem onClick={hangeLogout}>Logout</DropdownMenuItem>
  )
}

export default Logout
