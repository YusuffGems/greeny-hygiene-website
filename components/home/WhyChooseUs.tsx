import React from "react";
import {
  ShieldCheck,
  Layers,
  Handshake,
  Users,
  Factory,
  Headphones,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality-Focused Products",
    description:
      "Every footwear line and finished leather item is selected and supplied with strict attention to material integrity, build consistency, and durability.",
  },
  {
    icon: Layers,
    title: "Wide Footwear Collection",
    description:
      "From industrial safety shoes and clean-room footwear to formal leather shoes, loafers, and leather goods under one reliable roof.",
  },
  {
    icon: Handshake,
    title: "Reliable Business Partnership",
    description:
      "Dependable fulfilment and transparent communication for wholesalers, retailers, corporate procurement teams, and export buyers.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description:
      "Responsive order handling tailored to your industry sector, quantity volume, and delivery timelines across Chennai and India.",
  },
  {
    icon: Factory,
    title: "Industrial Footwear Solutions",
    description:
      "Purpose-built safety and clean-room footwear options suited for factories, warehouses, pharmaceuticals, and engineering units.",
  },
  {
    icon: Headphones,
    title: "Professional Business Support",
    description:
      "Direct assistance from enquiry to quotation and dispatch via our dedicated sales desk and WhatsApp support channel.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Value Proposition"
          title="Why Choose Us?"
          subtitle="Built on trust, product expertise, and dependable B2B service for domestic and international footwear buyers."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group h-full bg-navy-light/60 border border-white/10 hover:border-gold/60 rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center mb-5 shrink-0 group-hover:bg-gold group-hover:text-navy text-gold transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white leading-snug mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
