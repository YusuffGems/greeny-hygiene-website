"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

const slides = [
  {
    id: 1,
    badge: "Industrial Safety Footwear",
    headline: "Quality Footwear. Trusted Protection. Timeless Craftsmanship.",
    subtext:
      "Your Trusted Partner for Safety Footwear, Leather Shoes and Finished Leather Goods. Delivering Quality, Comfort and Reliability for Every Step.",
    image: "/images/hero-safety.png",
    ctaPrimary: { label: "Explore Our Products", href: "/products" },
  },
  {
    id: 2,
    badge: "Premium Leather & Formal Shoes",
    headline: "Refined Leather Footwear for Corporate & Export Excellence.",
    subtext:
      "Supplying executive formal leather shoes, loafers, and finished leather goods crafted for durability, comfort, and timeless presentation.",
    image: "/images/hero-leather.png",
    ctaPrimary: { label: "View Formal Shoes", href: "/formal-shoes" },
  },
  {
    id: 3,
    badge: "Clean Room & Industrial Footwear",
    headline: "Specialized Clean-Room & Workplace Footwear Solutions.",
    subtext:
      "Dependable footwear tailored for pharmaceutical plants, laboratories, clean manufacturing environments, and industrial operations.",
    image: "/images/hero-cleanroom.png",
    ctaPrimary: { label: "Explore Clean Room Shoes", href: "/clean-room-shoes" },
  },
  {
    id: 4,
    badge: "Quality Footwear Solutions",
    headline: "Chennai-Based Footwear Manufacturer, Exporter & B2B Supplier.",
    subtext:
      "Partnering with industries, corporate buyers, wholesalers, and retailers across India and global markets.",
    image: "/images/hero-collection.png",
    ctaPrimary: { label: "Discover Our Company", href: "/about" },
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative bg-navy text-white overflow-hidden min-h-[560px] lg:min-h-[640px] flex items-center">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.badge}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold/50 text-gold-light text-xs font-bold uppercase tracking-[0.18em] mb-5">
              {slide.badge}
            </span>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.15] tracking-tight text-white mb-6">
              {slide.headline}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-9 max-w-2xl">
              {slide.subtext}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={slide.ctaPrimary.href}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-sm sm:text-base transition-colors shadow-lg"
              >
                <span>{slide.ctaPrimary.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-white/10 hover:bg-white hover:text-navy border border-white/30 text-white font-semibold text-sm sm:text-base transition-colors"
              >
                <span>Enquire Now</span>
              </Link>
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-lg text-gold-light hover:text-white text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls & Dots */}
        <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-6">
          <div className="flex items-center gap-2.5">
            {slides.map((s, index) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  current === index ? "w-10 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Banner"
              className="p-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Banner"
              className="p-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
