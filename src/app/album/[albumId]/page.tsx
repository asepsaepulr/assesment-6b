import AlbumPage from "@/features/Album";
import type {Metadata} from "next";
import { use } from 'react';

export const metadata: Metadata = {
  title: "Album Coldplay",
};

type PageProps = Promise<{ albumId: string }>

export default function Album(props: { params: PageProps }) {
  const params = use(props.params);
  return(
  <AlbumPage albumId={params.albumId}/>
  )
};
