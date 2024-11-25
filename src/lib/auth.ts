import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.accessTokenExpires = account.expires_at
        return token
      }
      // access token has not expired
      return token
    },
    async session({session, token}) {
      session.accessToken = token.accessToken as string;
      return session
    },
  },
  pages: {
    signIn: "/artist",
  },
});
