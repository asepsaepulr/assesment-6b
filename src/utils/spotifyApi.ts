export const buildSpotifyApiUrl = (endpoint: string, params?: Record<string, string>) => {
  const baseUrl = "https://api.spotify.com/v1";
  const url = new URL(`${baseUrl}/${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  return url.toString();
};
