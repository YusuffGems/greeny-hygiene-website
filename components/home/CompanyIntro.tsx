import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BrochureDownloadButton } from "@/components/common/BrochureDownloadButton";

export function CompanyIntro() {
  const highlights = [
    "Manufacturer, Exporter, Trader, Wholesaler & Supplier",
    "Industrial Safety, Clean-Room, Formal & Casual Footwear",
    "Finished Leather Goods & Accessories",
    "Dedicated B2B, Corporate & Institutional Supply from Chennai",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/90 bg-navy">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/hero-leather.png"
                  alt="Greeny Hygiene Private Limited Chennai Footwear Supply"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="bg-navy text-white p-6 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-1.5">
                  Based in Poonamallee, Chennai
                </p>
                <p className="font-heading font-semibold text-base leading-snug">
                  Serving Domestic Industries, Retailers &amp; Global Export Buyers
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold">
              About Our Company
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Welcome to Greeny Hygiene Private Limited
            </h2>
            <div className="h-1 w-16 bg-gold rounded-full" />

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Greeny Hygiene Private Limited is a Chennai-based footwear business engaged in the
              supply and distribution of quality footwear and finished leather goods. We offer a
              diverse range of products, including industrial safety shoes, clean-room footwear,
              formal shoes, loafers and other footwear solutions.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              With a focus on quality, reliability and customer satisfaction, we aim to serve
              businesses, retailers, wholesalers and industrial customers with dependable footwear
              solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-charcoal leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className="h-12 inline-flex items-center justify-center gap-2 px-6 rounded-lg bg-navy hover:bg-navy-light text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <span>Discover Our Company</span>
                <ArrowRight className="w-4 h-4 text-gold shrink-0" />
              </Link>
              <BrochureDownloadButton
                source="company_intro"
                variant="outline"
                label="Download Brochure (PDF)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
