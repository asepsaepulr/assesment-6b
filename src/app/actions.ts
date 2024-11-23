'use server'

import {signIn, signOut} from "@/lib/auth";

export const signInWithSpotify = async () => {
    await signIn("spotify", { callbackUrl: "/artist" });
}

export const signout = async () => {
    await signOut();
}
