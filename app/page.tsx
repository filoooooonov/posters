import Image from "next/image";
import Gallery from "@/components/Gallery";
import bg from "@/public/bg_otaniemi2.png";
import { DialogSubmitPoster } from "@/components/DialogSubmitPoster";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div className="max-w-3xl mx-auto py-40 px-4 lg:px-0">
        <Image
          src={bg}
          alt="Otaniemi map"
          className="absolute top-0 left-0 w-full -z-2 h-80 object-cover saturate-0 opacity-80"
        />
        <div className="absolute top-0 left-0 w-full -z-1 h-80 bg-gradient-to-t from-neutral-950 to-transparent"></div>
        <h1 className="text-5xl font-medium mb-8 text-white">Posters</h1>
        <div className="flex flex-col sm:flex-row justify-between mb-20 gap-4">
          <p className="text-neutral-400 text-sm md:text-base">
            Personal collection of cool Aalto University event posters.
          </p>
          <DialogSubmitPoster />
        </div>
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
