"use client";

import React from "react";
import { Poster, posters } from "@/data/posters";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Gallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  return (
    <div>
      <AnimatePresence>
        {selectedPoster ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPoster(null)}
              className="fixed bg-neutral-900/50 w-full h-full top-0 left-0 backdrop-blur-lg"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-lg pointer-events-none"
            >
              <Image
                src={selectedPoster.image}
                alt={selectedPoster.name}
                className="rounded-lg"
              />
              <p className="mt-6 w-max text-base text-neutral-200 !pointer-events-auto">
                {selectedPoster.name}
              </p>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {posters.map((poster) => (
          <div
            key={poster.name}
            className="break-inside-avoid cursor-pointer"
            onClick={() => setSelectedPoster(poster)}
          >
            <Image
              src={poster.image}
              alt={poster.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
