"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { GalleryItem } from "@/types";

const galleryCategories = [
  "All",
  "Safety Shoes",
  "Formal Shoes",
  "Leather Footwear",
  "Clean Room Shoes",
  "Product Collections",
] as const;

interface GalleryGridProps {
  limit?: number;
}

export function GalleryGrid({ limit }: GalleryGridProps) {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const filtered =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const displayed = limit ? filtered.slice(0, limit) : filtered;
  const lightboxItem: GalleryItem | null =
    activeIndex !== null && displayed[activeIndex] ? displayed[activeIndex] : null;

  const closeModal = useCallback(() => {
    setActiveIndex(null);
    setIsFullscreen(false);
  }, []);

  const prevSlide = useCallback(() => {
    if (displayed.length === 0) return;
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev - 1 + displayed.length) % displayed.length
    );
  }, [displayed.length]);

  const nextSlide = useCallback(() => {
    if (displayed.length === 0) return;
    setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % displayed.length));
  }, [displayed.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, closeModal, prevSlide, nextSlide]);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveTab(cat);
              setActiveIndex(null);
            }}
            className={`h-10 px-4 rounded-full text-xs sm:text-sm font-semibold transition-colors inline-flex items-center justify-center cursor-pointer ${
              activeTab === cat
                ? "bg-navy text-white shadow-sm"
                : "bg-white text-charcoal border border-gray-200 hover:border-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Uniform Card Grid (Zero Text Inside Image) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {displayed.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setActiveIndex(idx);
              setIsFullscreen(false);
            }}
            className="group h-full relative rounded-xl overflow-hidden bg-white border border-gray-200/90 shadow-sm hover:shadow-xl transition-all text-left flex flex-col cursor-pointer"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-navy shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white flex-1 flex flex-col justify-center">
              <h3 className="font-heading text-sm font-bold text-navy leading-snug line-clamp-2">
                {item.title}
              </h3>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy/85 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>

      {/* Gallery Slide & Fullscreen Modal (Zero Text Inside Image) */}
      {lightboxItem && activeIndex !== null && (
        <div
          className={`fixed inset-0 z-50 bg-black/90 flex items-center justify-center ${
            isFullscreen ? "p-0" : "p-4"
          }`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
        >
          <div
            className={`relative bg-white overflow-hidden shadow-2xl flex flex-col ${
              isFullscreen
                ? "w-full h-full rounded-none"
                : "max-w-3xl w-full rounded-2xl"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Controls: Fullscreen Toggle & Close */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFullscreen((prev) => !prev)}
                aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                className="h-10 px-3.5 rounded-full bg-navy/90 text-white flex items-center gap-1.5 text-xs font-semibold hover:bg-gold hover:text-navy transition-colors cursor-pointer"
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-4 h-4" />
                    <span>Exit Fullscreen</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-4 h-4" />
                    <span>Fullscreen</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close Gallery Slide"
                className="w-10 h-10 rounded-full bg-navy/90 text-white flex items-center justify-center hover:bg-gold hover:text-navy transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Clean Image Slide Area (No Text Over Image) */}
            <div
              className={`relative flex-1 flex items-center justify-center bg-charcoal min-h-[320px] ${
                isFullscreen ? "h-full" : "max-h-[70vh]"
              }`}
            >
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                onClick={() => setIsFullscreen((prev) => !prev)}
                className="w-full h-full max-h-full object-contain cursor-zoom-in"
              />

              {displayed.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous gallery slide"
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy/85 hover:bg-gold hover:text-navy text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next gallery slide"
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy/85 hover:bg-gold hover:text-navy text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption Bar Below Image */}
            {!isFullscreen && (
              <div className="p-6 bg-white flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                    {lightboxItem.caption}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-gray-500 shrink-0 pt-1">
                  {activeIndex + 1} / {displayed.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
