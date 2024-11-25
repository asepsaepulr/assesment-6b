<div align="center">

# Coldplay Website

</div>

![App Screenshot](/public/landing.png)

This is a frontend assessment project built with Next.js that allows users to select their favorite Coldplay songs. It integrates the Spotify Web API to fetch and display song data, offering a seamless and interactive experience.

## Technologies and Libraries used

- [Next.JS 15](https://nextjs.org/)
- Typescript
- [TailwindCSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/) for Spotify OAuth authentication
- [Acerternity UI](https://ui.aceternity.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [SWR](https://swr.vercel.app/) for hooks data fetching

## Features

- Log-in into the application using Spotify OAuth through the next-auth package
- Hero show latest releases
- Discography
- On Tour
- Personnels
- Media links
- List track/song
- Play a track with sound and play/pause
- Join Newsletter

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SPOTIFY_CLIENT_SECRET`

`SPOTIFY_CLIENT_ID`

`NEXTAUTH_URL`= http://localhost:3000

`NEXTAUTH_SECRET`

## API Reference

The API endpoints and their response are listed in [https://developer.spotify.com/console/](https://developer.spotify.com/console/)

## Run Locally

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
   git clone https://github.com/asepsaepulr/assesment-6b.git
   cd assesment-6b
```

2. **Install dependencies:**

```bash
   npm install
```

3. **Set up environment variables:**

```bash
   cp .env.example .env
```

4. **Run the application:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
