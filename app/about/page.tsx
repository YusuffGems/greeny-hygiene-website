import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Award, Building2, Globe2, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BusinessCtaBanner } from "@/components/common/BusinessCtaBanner";

export const metadata: Metadata = {
  title: "About Us | Footwear Manufacturer, Exporter & Supplier in Chennai",
  description:
    "Learn about Greeny Hygiene Private Limited, a Poonamallee, Chennai-based Manufacturer, Exporter, Trader, Wholesaler, and Supplier of safety shoes, leather footwear, and finished leather goods.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const roles = [
    {
      icon: Building2,
      title: "Manufacturer & Exporter",
      text: "Focused on quality footwear and finished leather goods tailored for domestic and international buyers.",
    },
    {
      icon: ShieldCheck,
      title: "Industrial & Safety Supply",
      text: "Supplying durable safety shoes and clean-room footwear for factories, laboratories, and corporate facilities.",
    },
    {
      icon: Globe2,
      title: "Trader, Wholesaler & Distributor",
      text: "Reliable bulk distribution of formal shoes, casual shoes, loafers, and established footwear brands.",
    },
  ];

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-navy text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_nav]:text-gray-300 [&_span.text-navy]:text-gold-light">
            <Breadcrumbs items={[{ label: "About Us" }]} />
          </div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
            Corporate Profile
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold max-w-3xl leading-tight">
            About Greeny Hygiene Private Limited
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
            Delivering dependable safety footwear, leather shoes, and finished leather goods
            from Chennai, Tamil Nadu to businesses across India and global markets.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl font-bold text-navy">
                A Trusted Footwear &amp; Leather Goods Partner in Chennai
              </h2>
              <div className="h-1 w-16 bg-gold rounded-full" />
              <p className="text-base text-gray-700 leading-relaxed">
                Greeny Hygiene Private Limited is a Chennai-based footwear business operating as a
                Manufacturer, Exporter, Trader, Wholesaler, and Supplier. Located in Poonamallee,
                Chennai, we specialize in supplying quality footwear and finished leather goods
                that balance workplace protection, everyday comfort, and refined craftsmanship.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our portfolio covers industrial safety shoes, clean-room footwear, men&apos;s
                formal leather shoes, casual shoes, loafers, and finished leather accessories.
                Whether fulfilling corporate safety orders, retail wholesale assortments, or
                export requirements, we prioritize consistent product quality and responsive
                service.
              </p>
              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-block px-6 py-3.5 rounded-lg bg-navy hover:bg-navy-light text-white font-semibold text-sm transition-colors"
                >
                  Explore Our Product Range
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src="/images/hero-collection.png"
                alt="Greeny Hygiene Private Limited Footwear Solutions"
                className="rounded-2xl shadow-xl border border-gray-200 w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Business Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {roles.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="bg-surface-muted rounded-xl p-7 border border-gray-200/80"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-surface-muted border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Direction"
            title="Mission, Vision & Quality Commitment"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <Target className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy mb-3">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To deliver reliable, comfortable, and well-crafted footwear and finished leather
                goods that meet the practical demands of industrial buyers, corporate clients,
                retailers, and export partners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <Eye className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy mb-3">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To be recognized as a dependable footwear and leather goods supplier in India,
                known for long-term B2B relationships, product integrity, and responsive service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <Award className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading text-xl font-bold text-navy mb-3">Quality Focus</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every product line is evaluated for build durability, material finish, and
                suitability for its intended industrial, clean-room, or formal application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BusinessCtaBanner />
    </div>
  );
}
