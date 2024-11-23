"use client"

import React from 'react'
import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import { signout } from '@/app/actions'

const Logout = () => {
  return (
  <DropdownMenuItem onClick={() => signout()}>Logout</DropdownMenuItem>
  )
}

export default Logout
