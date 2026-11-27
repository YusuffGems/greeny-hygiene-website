import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-safety",
    slug: "safety-shoes",
    name: "Safety Shoes",
    shortName: "Safety Shoes",
    tagline: "Dependable Foot Protection for Industrial & Workplace Environments",
    description:
      "Engineered for industrial workplaces, factories, construction sites, and warehousing operations. Our range includes Industrial Safety Shoes, Lancer Safety Shoes, Highlite Safety Shoes, and PU Sole Safety Shoes.",
    subcategories: [
      "Industrial Safety Shoes",
      "Lancer Safety Shoes",
      "Highlite Safety Shoes",
      "PU Sole Safety Shoes",
    ],
    image: "/images/products/safety-shoes.png",
    seoTitle: "Safety Shoes Supplier & Wholesaler in Chennai | Greeny Hygiene",
    seoDescription:
      "Bulk and corporate supplier of Industrial Safety Shoes, Lancer Safety Shoes, Highlite Safety Shoes, and PU Sole Safety Shoes in Chennai, Tamil Nadu.",
  },
  {
    id: "cat-cleanroom",
    slug: "clean-room-shoes",
    name: "Clean Room Shoes",
    shortName: "Clean Room Shoes",
    tagline: "Controlled Environment & Industrial Clean-Room Footwear",
    description:
      "Specialized clean-room footwear designed for pharmaceutical facilities, electronics assembly, laboratories, and hygiene-sensitive manufacturing environments.",
    subcategories: [
      "Clean Room Footwear",
      "Industrial Clean Room Shoes",
    ],
    image: "/images/products/clean-room-shoes.png",
    seoTitle: "Clean Room Shoes Supplier in Chennai | Greeny Hygiene Private Limited",
    seoDescription:
      "Reliable supplier of Clean Room Footwear and Industrial Clean Room Shoes for laboratories, pharma, and clean manufacturing environments in India.",
  },
  {
    id: "cat-formal",
    slug: "formal-shoes",
    name: "Formal Shoes",
    shortName: "Formal Shoes",
    tagline: "Refined Leather Craftsmanship for Corporate & Executive Wear",
    description:
      "Classic and contemporary men's formal leather shoes tailored for corporate uniforms, hospitality teams, office professionals, and retail distribution.",
    subcategories: [
      "Men's Formal Leather Shoes",
      "Office Wear Footwear",
      "Premium Leather Shoes",
    ],
    image: "/images/products/formal-shoes.png",
    seoTitle: "Formal Leather Shoes Supplier & Manufacturer in Chennai | Greeny Hygiene",
    seoDescription:
      "Source Men's Formal Leather Shoes, Office Wear Footwear, and Premium Leather Shoes for corporate and wholesale needs from Greeny Hygiene Private Limited.",
  },
  {
    id: "cat-casual-loafers",
    slug: "casual-shoes-loafers",
    name: "Casual Shoes & Loafers",
    shortName: "Casual Shoes & Loafers",
    tagline: "Versatile Comfort & Everyday Style for Modern Retail",
    description:
      "A versatile assortment of Men's Casual Shoes, Everyday Footwear, Leather Loafers, and Casual Loafers crafted for all-day comfort and durable wear.",
    subcategories: [
      "Men's Casual Shoes",
      "Everyday Footwear",
      "Leather Loafers",
      "Casual Loafers",
    ],
    image: "/images/products/casual-loafers.png",
    seoTitle: "Casual Shoes & Leather Loafers Wholesaler in Chennai | Greeny Hygiene",
    seoDescription:
      "Wholesale and B2B supply of Men's Casual Shoes, Leather Loafers, and Everyday Footwear from Greeny Hygiene Private Limited, Chennai.",
  },
  {
    id: "cat-leather-goods",
    slug: "finished-leather-goods",
    name: "Finished Leather Goods",
    shortName: "Finished Leather Goods",
    tagline: "Quality Finished Leather Products & Accessories for Domestic & Export Markets",
    description:
      "Carefully crafted leather accessories and finished leather products designed for corporate gifting, retail distribution, and international export buyers.",
    subcategories: [
      "Leather Accessories",
      "Other Finished Leather Products",
    ],
    image: "/images/products/leather-goods.png",
    seoTitle: "Finished Leather Goods Exporter & Supplier in Chennai | Greeny Hygiene",
    seoDescription:
      "Finished Leather Goods, leather accessories, and leather products supplied and exported by Greeny Hygiene Private Limited, Chennai, India.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
