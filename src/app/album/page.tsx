import AlbumPage from "@/pages/Album";
import {Suspense} from "react";

export default function Album() {
  return (
    <Suspense>
    <AlbumPage/>
    </Suspense>
  )
}
