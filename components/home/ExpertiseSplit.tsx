import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Industrial Safety Footwear",
    detail: "Dependable work boots and PU sole safety shoes for factories, workshops, and sites.",
  },
  {
    title: "Clean Room Footwear",
    detail: "Specialized footwear suited for hygiene-controlled manufacturing and laboratories.",
  },
  {
    title: "Premium Leather Footwear",
    detail: "Crafted leather shoes with refined finishing for corporate and export standards.",
  },
  {
    title: "Formal & Casual Shoes",
    detail: "Office wear, executive formal shoes, everyday casual shoes, and leather loafers.",
  },
  {
    title: "Finished Leather Goods",
    detail: "Leather accessories and finished leather products for retail and corporate gifting.",
  },
  {
    title: "Wholesale & Business Supply",
    detail: "Structured B2B supply capabilities for distributors, dealers, institutions, and exporters.",
  },
];

export function ExpertiseSplit() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Our Expertise &amp; Capabilities
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Footwear Solutions for Every Need
            </h2>
            <div className="h-1 w-16 bg-gold rounded-full" />
            <p className="text-base text-gray-600 leading-relaxed">
              Operating as a Manufacturer, Exporter, Trader, Wholesaler, and Supplier in Chennai,
              Greeny Hygiene Private Limited bridges industrial safety requirements with refined
              leather craftsmanship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-navy">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{cap.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-sm transition-colors"
              >
                <span>Discuss Your Business Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Photography */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <img
              src="/images/products/safety-shoes.png"
              alt="Industrial Safety Footwear"
              className="rounded-xl shadow-md border border-gray-200 w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src="/images/products/formal-shoes.png"
              alt="Formal Leather Footwear"
              className="rounded-xl shadow-md border border-gray-200 w-full h-56 object-cover mt-6"
              loading="lazy"
            />
            <img
              src="/images/products/clean-room-shoes.png"
              alt="Clean Room Footwear"
              className="rounded-xl shadow-md border border-gray-200 w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src="/images/products/leather-goods.png"
              alt="Finished Leather Goods"
              className="rounded-xl shadow-md border border-gray-200 w-full h-56 object-cover mt-6"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
