import ArtistPage from "@/pages/Artist";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <div className="items-center justify-items-center">
      <main className="flex flex-col gap-8 p-3 row-start-2 items-center sm:items-start">
        <Layout><ArtistPage/></Layout>
      </main>
    </div>
  );
}
