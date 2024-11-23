import AlbumPage from "@/pages/Album";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Album Coldplay",
};

const Album = ({params: {albumId}}: { params: { albumId: string } }) => (
  <AlbumPage albumId={albumId}/>
);

export default Album;
