import { Product } from "@/types";

/**
 * Editable Product Catalogue
 * - Images contain zero baked-in text.
 * - Add more photo paths to `gallery` on any product to expand its slide & fullscreen gallery.
 * - Attach `videoUrl` to any product to show the below-image Play Video button on cards & detail pages.
 */
export const products: Product[] = [
  {
    id: "prod-v105-lancer",
    slug: "v-105-lancer-safety-shoes",
    name: "V-105 Lancer Safety Shoes",
    categorySlug: "safety-shoes",
    categoryName: "Safety Shoes",
    brand: "Lancer",
    shortDescription:
      "Durable industrial safety footwear from Lancer built for daily workplace protection, comfort, and reliable grip.",
    fullDescription:
      "The V-105 Lancer Safety Shoes are designed to meet the everyday footwear demands of industrial teams, workshops, and facility personnel. Built for dependable comfort during extended shifts, this model is available for bulk corporate procurement, dealer orders, and institutional supply.",
    image: "/images/products/v105-lancer.png",
    gallery: [
      "/images/products/v105-lancer.png",
      "/images/products/safety-shoes.png",
      "/images/products/pu-sole-safety.png",
    ],
    videoUrl: "/videos/products/17222683_1920_1080_25fps.mp4",
    featured: true,
    features: [
      "Designed for industrial and workplace environments",
      "Built for long-shift comfort and durability",
      "Suitable for bulk corporate and wholesale orders",
      "Available for domestic supply across India",
    ],
  },
  {
    id: "prod-pu-sole-safety",
    slug: "pu-sole-safety-shoes",
    name: "PU Sole Safety Shoes",
    categorySlug: "safety-shoes",
    categoryName: "Safety Shoes",
    shortDescription:
      "Lightweight polyurethane (PU) sole safety shoes engineered for flexibility, underfoot cushioning, and shop-floor endurance.",
    fullDescription:
      "Our PU Sole Safety Shoes offer a balanced combination of lightweight flexibility and rugged construction. Ideal for manufacturing plants, logistics hubs, and engineering units seeking reliable daily footwear for their workforce.",
    image: "/images/products/pu-sole-safety.png",
    gallery: [
      "/images/products/pu-sole-safety.png",
      "/images/products/safety-shoes.png",
    ],
    videoUrl: "/videos/products/17222761_1920_1080_25fps.mp4",
    featured: true,
    soleType: "PU (Polyurethane) Sole",
    features: [
      "Lightweight PU sole construction for reduced foot fatigue",
      "Engineered for industrial floor traction and stability",
      "Suitable for manufacturing, warehousing, and engineering teams",
      "Available in bulk quantities for B2B buyers",
    ],
  },
  {
    id: "prod-highlite-safety",
    slug: "highlite-safety-shoes",
    name: "Highlite Safety Shoes",
    categorySlug: "safety-shoes",
    categoryName: "Safety Shoes",
    brand: "Highlite",
    shortDescription:
      "Reliable Highlite industrial safety footwear tailored for demanding work environments and institutional supply.",
    fullDescription:
      "Highlite Safety Shoes provide dependable protection and practical design for industrial operations and workforce requirements. Supplied by Greeny Hygiene Private Limited for factories, contractors, and trade distributors.",
    image: "/images/products/highlite-safety.png",
    gallery: [
      "/images/products/highlite-safety.png",
      "/images/products/safety-shoes.png",
    ],
    videoUrl: "/videos/products/17222683_1920_1080_25fps.mp4",
    featured: true,
    features: [
      "Trusted Highlite industrial footwear range",
      "Constructed for rugged day-to-day workplace use",
      "Ideal for institutional, contractor, and wholesale supply",
    ],
  },
  {
    id: "prod-clean-room",
    slug: "clean-room-shoes",
    name: "Clean Room Shoes",
    categorySlug: "clean-room-shoes",
    categoryName: "Clean Room Shoes",
    shortDescription:
      "Specialized clean-room footwear designed for hygiene-critical laboratories, pharmaceutical units, and clean manufacturing floors.",
    fullDescription:
      "Clean Room Shoes from Greeny Hygiene Private Limited are tailored for controlled environments where cleanliness, low particle shedding, and staff comfort are essential. Suitable for pharmaceutical plants, electronics assembly lines, and research laboratories.",
    image: "/images/products/clean-room-shoes.png",
    gallery: [
      "/images/products/clean-room-shoes.png",
      "/images/hero-cleanroom.png",
    ],
    videoUrl: "/videos/products/17222761_1920_1080_25fps.mp4",
    featured: true,
    features: [
      "Tailored for controlled and hygiene-sensitive facilities",
      "Lightweight and comfortable for extended clean-room shifts",
      "Easy-to-maintain upper surface",
      "Available for corporate and institutional procurement",
    ],
  },
  {
    id: "prod-mens-formal-leather",
    slug: "mens-formal-leather-shoes",
    name: "Men's Formal Leather Shoes",
    categorySlug: "formal-shoes",
    categoryName: "Formal Shoes",
    shortDescription:
      "Classic men's formal leather shoes crafted with clean lines, polished finish, and executive comfort for office and uniform wear.",
    fullDescription:
      "Our Men's Formal Leather Shoes combine timeless styling with dependable construction. Designed for corporate professionals, hospitality staff, institutional uniforms, and retail footwear partners seeking consistent quality.",
    image: "/images/products/formal-shoes.png",
    gallery: [
      "/images/products/formal-shoes.png",
      "/images/hero-leather.png",
    ],
    videoUrl: "/videos/products/17222683_1920_1080_25fps.mp4",
    featured: true,
    materialInfo: "Finished Leather Upper",
    features: [
      "Polished formal silhouette for corporate and office wear",
      "Comfortable insole support for all-day wear",
      "Suitable for corporate uniform programs, retail, and export",
    ],
  },
  {
    id: "prod-mens-leather-loafers",
    slug: "mens-leather-loafers",
    name: "Men's Leather Loafers",
    categorySlug: "casual-shoes-loafers",
    categoryName: "Casual Shoes & Loafers",
    shortDescription:
      "Versatile slip-on men's leather loafers blending smart-casual aesthetics with everyday ease and durable stitching.",
    fullDescription:
      "Men's Leather Loafers offer effortless slip-on convenience paired with refined leather craftsmanship. Ideal for smart-casual office attire, retail collections, and wholesale distribution.",
    image: "/images/products/casual-loafers.png",
    gallery: [
      "/images/products/casual-loafers.png",
      "/images/products/formal-shoes.png",
    ],
    videoUrl: "/videos/products/17222761_1920_1080_25fps.mp4",
    featured: true,
    materialInfo: "Leather Upper",
    features: [
      "Convenient slip-on loafer profile",
      "Clean stitching and versatile smart-casual styling",
      "Available for wholesale and retail partners",
    ],
  },
  {
    id: "prod-mens-casual-everyday",
    slug: "mens-casual-everyday-shoes",
    name: "Men's Casual Everyday Shoes",
    categorySlug: "casual-shoes-loafers",
    categoryName: "Casual Shoes & Loafers",
    shortDescription:
      "Comfortable everyday casual shoes designed for daily mobility, modern styling, and reliable sole durability.",
    fullDescription:
      "Built for everyday versatility, our Men's Casual Everyday Shoes deliver balanced comfort and clean contemporary design for retail stores and wholesale footwear distributors.",
    image: "/images/products/casual-loafers.png",
    gallery: [
      "/images/products/casual-loafers.png",
      "/images/hero-collection.png",
    ],
    videoUrl: "/videos/products/17222683_1920_1080_25fps.mp4",
    featured: false,
    features: [
      "Lightweight everyday comfort construction",
      "Modern casual styling for broad retail appeal",
      "Supplied in bulk assortments for traders and retailers",
    ],
  },
  {
    id: "prod-finished-leather-accessories",
    slug: "finished-leather-goods-collection",
    name: "Finished Leather Goods & Accessories",
    categorySlug: "finished-leather-goods",
    categoryName: "Finished Leather Goods",
    shortDescription:
      "Precision-crafted finished leather accessories and small leather goods tailored for corporate gifting, retail, and export.",
    fullDescription:
      "Greeny Hygiene Private Limited supplies a curated range of Finished Leather Goods and leather accessories crafted from quality finished leather. Ideal for corporate gifting programs, retail brands, and international buyers.",
    image: "/images/products/leather-goods.png",
    gallery: [
      "/images/products/leather-goods.png",
      "/images/hero-leather.png",
    ],
    videoUrl: "/videos/products/17222683_1920_1080_25fps.mp4",
    featured: false,
    materialInfo: "Finished Leather",
    features: [
      "Clean finishing and durable edge craftsmanship",
      "Suitable for corporate gifting, wholesale, and export orders",
      "Custom order enquiries welcome for B2B clients",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(currentProduct: Product, limit = 3): Product[] {
  const sameCategory = products.filter(
    (p) => p.categorySlug === currentProduct.categorySlug && p.id !== currentProduct.id
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = products.filter(
    (p) => p.categorySlug !== currentProduct.categorySlug && p.id !== currentProduct.id
  );
  return [...sameCategory, ...others].slice(0, limit);
}
