"use client";

import {SWRConfig} from "swr";
import {ReactNode} from "react";

// const cacheProvider = () => new Map();

export const SWRProvider =  ({children}: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((res) => {
            if (!res.ok) throw new Error(`Error fetching: ${res.statusText}`);
            return res.json();
          }),
      }}
    >
      {children}
    </SWRConfig>
  )
}
