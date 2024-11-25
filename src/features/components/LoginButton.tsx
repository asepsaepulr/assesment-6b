"use client";

import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";

export default function LoginButton() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000" });
  };
  return (
    <div>
      <Button onClick={handleLogin} className="w-full">
        Sign in
      </Button>
    </div>
  );
}
