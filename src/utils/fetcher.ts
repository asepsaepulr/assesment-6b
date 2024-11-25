import {signIn} from "next-auth/react";

export const fetcher = async (url: string, accessToken: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (response.status === 401) {
    return signIn("spotify", { callbackUrl: "http://localhost:3000" });
  }
  if (!response.ok) {

    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return response.json();
};
