"use client"

import React from 'react'
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  const handeLogout = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };
  return (
    <DropdownMenuItem onClick={handeLogout}>Logout</DropdownMenuItem>
  )
}

export default LogoutButton
