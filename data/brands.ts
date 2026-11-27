import { Brand } from "@/types";

/**
 * Available Footwear Brands
 * NOTE: Official brand logos should only be added to logoPath when officially authorized.
 * Do not imply exclusive partnerships or authorized dealership status unless verified.
 */
export const brands: Brand[] = [
  {
    id: "brand-lancer",
    name: "Lancer",
    slug: "lancer",
    description:
      "Recognized footwear range offering dependable industrial safety shoes and everyday workwear options supplied for institutional and trade requirements.",
    categoryFocus: "Safety Shoes & Industrial Footwear",
  },
  {
    id: "brand-highlite",
    name: "Highlite",
    slug: "highlite",
    description:
      "Practical and sturdy safety footwear solutions suited for manufacturing plants, contractors, and industrial workforce supply.",
    categoryFocus: "Industrial Safety Footwear",
  },
  {
    id: "brand-ramer",
    name: "Ramer",
    slug: "ramer",
    description:
      "Quality footwear collection available through our distribution network for commercial, institutional, and wholesale buyers.",
    categoryFocus: "Footwear Collections",
  },
];
