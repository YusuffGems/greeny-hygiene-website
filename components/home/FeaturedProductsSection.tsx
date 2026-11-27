import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product Catalogue"
          title="Our Featured Products"
          subtitle="Explore key models across industrial safety footwear, clean-room shoes, formal leather shoes, and loafers. Contact our team for detailed product sheets and B2B quotations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold text-sm transition-colors"
          >
            <span>View Full Product Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
