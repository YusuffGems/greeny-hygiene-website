"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Play, X, Film, AlertCircle } from "lucide-react";
import { Product } from "@/types";
import { buildProductWhatsAppUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const whatsappUrl = buildProductWhatsAppUrl(product.name, product.productCode);
  const hasVideo = Boolean(product.videoUrl);

  const handleOpenVideo = () => {
    setVideoError(false);
    setVideoOpen(true);
  };

  return (
    <>
      <article className="group h-full bg-white rounded-xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
        {/* Clean Unobstructed Product Image (Zero Text Inside Image) */}
        <Link
          href={`/products/${product.slug}`}
          className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted block shrink-0"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>

        {/* Below-Image Video Indicator Bar ONLY when `product.videoUrl` exists */}
        {hasVideo && (
          <div className="px-6 py-2.5 bg-surface-muted border-b border-gray-200/80 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy">
              <Film className="w-3.5 h-3.5 text-gold-dark shrink-0" />
              <span>Product Video Available</span>
            </span>
            <button
              type="button"
              onClick={handleOpenVideo}
              aria-label={`Play video for ${product.name}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy hover:bg-gold hover:text-navy text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current shrink-0" />
              <span>Play Video</span>
            </button>
          </div>
        )}

        {/* Card Body with Equal-Height Flex Layout */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="min-h-[20px] mb-1.5 flex items-center">
              {product.brand ? (
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
                  {product.brand}
                </span>
              ) : (
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                  Greeny Hygiene
                </span>
              )}
            </div>

            <h3 className="font-heading text-lg font-bold text-navy leading-snug line-clamp-2 min-h-[50px] group-hover:text-gold-dark transition-colors">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>

            <p className="mt-2.5 text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[68px]">
              {product.shortDescription}
            </p>
          </div>

          {/* Uniform Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-5 mt-5 border-t border-gray-100">
            <Link
              href={`/products/${product.slug}`}
              className="h-11 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-lg bg-navy hover:bg-navy-light text-white text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-lg border border-[#25D366] text-[#15803d] hover:bg-[#25D366] hover:text-white text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </article>

      {/* Product Video Modal when user clicks Play */}
      {videoOpen && product.videoUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-navy text-white rounded-2xl overflow-hidden shadow-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Play className="w-4 h-4 text-gold fill-current" />
                <h4 className="font-heading text-base sm:text-lg font-bold">
                  {product.name}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close Video Player"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-black aspect-video w-full flex items-center justify-center relative">
              {videoError ? (
                <div className="p-6 text-center space-y-2">
                  <AlertCircle className="w-8 h-8 text-gold mx-auto" />
                  <p className="text-sm font-semibold text-white">
                    Unable to play video file ({product.videoUrl})
                  </p>
                  <p className="text-xs text-gray-300">
                    Place a valid MP4 video at public/videos/products/ or update videoUrl in data/products.ts.
                  </p>
                </div>
              ) : (
                <video
                  key={product.videoUrl}
                  src={product.videoUrl}
                  poster={product.image}
                  controls
                  autoPlay
                  preload="metadata"
                  playsInline
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={product.videoUrl} type="video/mp4" />
                </video>
              )}
            </div>

            <div className="p-5 flex flex-wrap items-center justify-between gap-3 bg-navy-dark">
              <p className="text-xs sm:text-sm text-gray-300">{product.shortDescription}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 inline-flex items-center gap-1.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold whitespace-nowrap transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
