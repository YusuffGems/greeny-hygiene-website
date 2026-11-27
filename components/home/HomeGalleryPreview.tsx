import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { GalleryGrid } from "@/components/common/GalleryGrid";

export function HomeGalleryPreview() {
  return (
    <section className="py-16 lg:py-24 bg-surface-muted border-t border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Visual Showcase"
          title="Our Product Gallery"
          subtitle="Browse our footwear collections across safety shoes, formal shoes, clean-room footwear, and finished leather goods."
        />

        <GalleryGrid limit={8} />

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-navy hover:bg-navy-light text-white font-semibold text-sm transition-colors"
          >
            <span>Open Full Gallery</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
