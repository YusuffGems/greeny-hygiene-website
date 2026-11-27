import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { GalleryGrid } from "@/components/common/GalleryGrid";
import { BusinessCtaBanner } from "@/components/common/BusinessCtaBanner";

export const metadata: Metadata = {
  title: "Product Gallery | Safety Shoes, Formal Shoes & Leather Goods",
  description:
    "View the footwear and finished leather goods gallery of Greeny Hygiene Private Limited, Chennai.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-navy text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_nav]:text-gray-300 [&_span.text-navy]:text-gold-light">
            <Breadcrumbs items={[{ label: "Gallery" }]} />
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
            Showcase
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold max-w-3xl">
            Our Product Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
            Explore visual highlights across our Safety Shoes, Formal Shoes, Leather Footwear,
            Clean Room Shoes, and Product Collections. Click any image to enlarge.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <BusinessCtaBanner />
    </div>
  );
}
