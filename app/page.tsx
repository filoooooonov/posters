import Image from "next/image";
import Gallery from "@/components/Gallery";
import bg from "@/public/bg_otaniemi2.png";
import { DialogSubmitPoster } from "@/components/DialogSubmitPoster";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative pb-60">
      {/* Full-width hero with robust gradient overlay */}
      <section className="relative w-full h-40 md:h-80">
        <Image
          src={bg}
          alt="Otaniemi map"
          fill
          priority
          className="hidden md:block object-cover saturate-0 opacity-80"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-[#0a0a0a]/30" />
        <div className="absolute inset-0">
          <div className="max-w-3xl mx-auto h-full flex items-end px-4 lg:px-0">
            <h1 className="text-5xl font-medium mb-8 text-white">Posters</h1>
          </div>
        </div>
      </section>

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
