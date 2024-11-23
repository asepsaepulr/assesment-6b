import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      /** Extend the user type here if needed */
      id?: string;
    } & DefaultSession["user"];
  }
}
