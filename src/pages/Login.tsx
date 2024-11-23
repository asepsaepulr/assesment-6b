"use client";

import {Button} from "@/components/ui/button";
import {signInWithSpotify} from "@/app/actions";
import Link from "next/link";

export default function Login() {

  return (
    <div>
      <Button onClick={(e) => {
        e.preventDefault();
        signInWithSpotify();
      }}
              className="w-full"
      >
        <Link href={`/login`}>Sign in</Link>
      </Button>
    </div>
  );
}
