import Image from "next/image";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-40">
      <h1 className="text-5xl font-medium mb-8">Posters</h1>
      <div className="flex justify-between items-center mb-20">
        <p className="text-neutral-400">
          Personal collection of Aalto University event posters I found cool.
        </p>
        <button className="cursor-not-allowed text-neutral-600">
          Submit a poster
        </button>
      </div>
      <Gallery />
    </main>
  );
}
