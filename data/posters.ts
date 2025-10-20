import { StaticImageData } from "next/image";
import poster1 from "@/public/buildit13.jpg";
import poster2 from "@/public/lihy.jpg";
import poster3 from "@/public/molkky.jpg";
import poster4 from "@/public/ohlhafv.jpg";
import poster5 from "@/public/otadancenight.jpg";
import poster6 from "@/public/silta.jpg";
import poster7 from "@/public/taffaterde.jpg";
import poster8 from "@/public/campustrials.jpg";
import poster9 from "@/public/apelit.jpg";
import poster10 from "@/public/diili.jpg";
import poster11 from "@/public/gamejam.jpg";
import poster12 from "@/public/ignite24.jpg";
import poster13 from "@/public/niemenhalki.jpg";

export interface Poster {
  name: string;
  image: StaticImageData;
}

export const posters: Poster[] = [
  {
    name: "build_it v13",
    image: poster1,
  },
  // {
  // name: "Lihy",
  // image: poster2,
  // },
  {
    name: "Mölkky",
    image: poster3,
  },
  {
    name: "Øhlhäfv 2025",
    image: poster4,
  },
  {
    name: "OtaDance Night",
    image: poster5,
  },
  {
    name: "Silta & Bain & Company",
    image: poster6,
  },
  {
    name: "Täffä AB's Summer Terde",
    image: poster7,
  },
  {
    name: "ESN Campus Trials",
    image: poster8,
  },
  {
    name: "A!-pelit",
    image: poster9,
  },
  {
    name: "Äpy Diili",
    image: poster10,
  },
  {
    name: "Equinox Gamejam",
    image: poster11,
  },
  {
    name: "Ignite 2024",
    image: poster12,
  },
  {
    name: "Niemenhalki",
    image: poster13,
  },
];
