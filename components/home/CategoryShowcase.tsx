import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const categoryCards = [
  {
    title: "Safety Shoes",
    href: "/safety-shoes",
    image: "/images/products/safety-shoes.png",
    description:
      "Industrial Safety Shoes, Lancer Safety Shoes, Highlite Safety Shoes, and PU Sole Safety Shoes for demanding workplaces.",
    items: [
      "Industrial Safety Shoes",
      "Lancer Safety Shoes",
      "Highlite Safety Shoes",
      "PU Sole Safety Shoes",
    ],
  },
  {
    title: "Clean Room Shoes",
    href: "/clean-room-shoes",
    image: "/images/products/clean-room-shoes.png",
    description:
      "Clean Room Footwear and Industrial Clean Room Shoes engineered for laboratories, pharma, and controlled facilities.",
    items: ["Clean Room Footwear", "Industrial Clean Room Shoes"],
  },
  {
    title: "Formal Shoes",
    href: "/formal-shoes",
    image: "/images/products/formal-shoes.png",
    description:
      "Men's Formal Leather Shoes, Office Wear Footwear, and Premium Leather Shoes built for executive and uniform wear.",
    items: [
      "Men's Formal Leather Shoes",
      "Office Wear Footwear",
      "Premium Leather Shoes",
    ],
  },
  {
    title: "Casual Shoes",
    href: "/casual-shoes-loafers",
    image: "/images/products/casual-loafers.png",
    description:
      "Men's Casual Shoes and Everyday Footwear combining modern comfort with durable construction for retail and trade.",
    items: ["Men's Casual Shoes", "Everyday Footwear"],
  },
  {
    title: "Loafers",
    href: "/casual-shoes-loafers",
    image: "/images/products/casual-loafers.png",
    description:
      "Leather Loafers and Casual Loafers offering slip-on convenience and versatile smart-casual styling.",
    items: ["Leather Loafers", "Casual Loafers"],
  },
  {
    title: "Finished Leather Goods",
    href: "/finished-leather-goods",
    image: "/images/products/leather-goods.png",
    description:
      "Leather Accessories and Finished Leather Products crafted for corporate gifting, retail, and export buyers.",
    items: ["Leather Accessories", "Other Finished Leather Products"],
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-muted border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Product Categories"
          title="Explore Our Footwear Collection"
          subtitle="A comprehensive portfolio spanning industrial protection, clean-room environments, formal leather craftsmanship, casual wear, and finished leather goods."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {categoryCards.map((cat) => (
            <article
              key={cat.title}
              className="group h-full bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Link
                href={cat.href}
                className="block relative aspect-[16/10] w-full overflow-hidden bg-navy shrink-0"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy leading-snug mb-2.5 group-hover:text-gold-dark transition-colors">
                    <Link href={cat.href}>{cat.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 min-h-[68px]">
                    {cat.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {cat.items.map((sub) => (
                      <li
                        key={sub}
                        className="text-xs font-medium text-charcoal flex items-center gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={cat.href}
                  className="h-11 inline-flex items-center justify-center gap-2 w-full px-4 rounded-lg bg-navy group-hover:bg-gold group-hover:text-navy text-white text-sm font-semibold transition-colors mt-auto"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
