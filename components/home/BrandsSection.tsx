import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";
import { SectionHeader } from "@/components/common/SectionHeader";

export function BrandsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-muted border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Available Brands"
          title="Brands We Offer"
          subtitle="We supply footwear collections across established brands to serve industrial, institutional, and trade requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="h-full bg-white rounded-xl border border-gray-200/90 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="h-16 px-5 rounded-lg bg-navy/5 border border-navy/10 flex items-center justify-center mb-6">
                  {brand.logoPath ? (
                    <img
                      src={brand.logoPath}
                      alt={`${brand.name} logo`}
                      className="max-h-10 object-contain"
                    />
                  ) : (
                    <span className="font-heading text-2xl font-bold tracking-wider uppercase text-navy">
                      {brand.name}
                    </span>
                  )}
                </div>

                <span className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-gold-dark mb-2">
                  {brand.categoryFocus}
                </span>
                <h3 className="font-heading text-xl font-bold text-navy leading-snug mb-3">
                  {brand.name} Footwear Range
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {brand.description}
                </p>
              </div>

              <Link
                href={`/brands#${brand.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark transition-colors pt-4 border-t border-gray-100"
              >
                <span>Explore {brand.name} Collection</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
