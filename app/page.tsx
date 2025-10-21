import Image from "next/image";
import Gallery from "@/components/Gallery";
import bg from "@/public/bg_otaniemi2.png";
import { DialogSubmitPoster } from "@/components/DialogSubmitPoster";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Full-width hero background */}
      <div className="relative h-80 w-full">
        <Image
          src={bg}
          alt="Otaniemi map"
          fill
          priority
          className="object-cover saturate-0 opacity-80 z-0"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 to-transparent" />
        <div className="relative z-20 h-full flex items-end">
          <div className="max-w-3xl mx-auto w-full px-4 lg:px-0">
            <h1 className="text-5xl font-medium mb-8 text-white">Posters</h1>
          </div>
        </div>
      </div>

      {/* Constrained content below hero */}
      <div className="max-w-3xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col sm:flex-row justify-between mb-20 gap-4">
          <p className="text-neutral-400 text-sm md:text-base">
            Personal collection of cool Aalto University event posters.
          </p>
          <DialogSubmitPoster />
        </div>
        <div className="relative">
          <Gallery />
        </div>
      </div>
      <Footer />
    </main>
  );
}
