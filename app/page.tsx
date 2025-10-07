import Image from "next/image";
import Gallery from "@/components/Gallery";
import bg from "@/public/otaniemi_map.jpg";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-40">
      <Image
        src={bg}
        alt="Otaniemi map"
        className="absolute top-0 left-0 w-full -z-2 h-80 object-cover saturate-0 brightness-50"
      />
      <div className="absolute top-0 left-0 w-full -z-1 h-80 bg-gradient-to-t from-black to-transparent"></div>
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
