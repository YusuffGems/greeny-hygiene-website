"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Play,
  Film,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  X,
  AlertCircle,
} from "lucide-react";

interface ProductMediaGalleryProps {
  productName: string;
  mainImage: string;
  gallery?: string[];
  videoUrl?: string;
}

export function ProductMediaGallery({
  productName,
  mainImage,
  gallery,
  videoUrl,
}: ProductMediaGalleryProps) {
  const slides = React.useMemo(() => {
    const list = gallery && gallery.length > 0 ? gallery : [mainImage];
    return list.includes(mainImage) ? list : [mainImage, ...list];
  }, [gallery, mainImage]);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isVideoMode, setIsVideoMode] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [fullscreenOpen, setFullscreenOpen] = useState<boolean>(false);

  useEffect(() => {
    setActiveIndex(0);
    setIsVideoMode(false);
    setVideoError(false);
  }, [mainImage, gallery]);

  const currentSlide = slides[activeIndex] || mainImage;
  const hasVideo = Boolean(videoUrl);

  const prevSlide = useCallback(() => {
    setIsVideoMode(false);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setIsVideoMode(false);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePlayVideo = () => {
    setVideoError(false);
    setIsVideoMode(true);
  };

  useEffect(() => {
    if (!fullscreenOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreenOpen(false);
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [fullscreenOpen, prevSlide, nextSlide]);

  return (
    <div className="space-y-4">
      <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-navy shadow-sm aspect-[4/3] w-full flex items-center justify-center group">
        {isVideoMode && videoUrl ? (
          videoError ? (
            <div className="p-6 text-center text-white space-y-2">
              <AlertCircle className="w-8 h-8 text-gold mx-auto" />
              <p className="text-sm font-semibold">Unable to load product video</p>
              <p className="text-xs text-gray-300">{videoUrl}</p>
            </div>
          ) : (
            <video
              key={videoUrl}
              src={videoUrl}
              poster={currentSlide}
              controls
              autoPlay
              preload="metadata"
              playsInline
              onError={() => setVideoError(true)}
              className="w-full h-full object-contain bg-black"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )
        ) : (
          <img
            src={currentSlide}
            alt={`${productName} - slide ${activeIndex + 1}`}
            onClick={() => setFullscreenOpen(true)}
            className="w-full h-full object-cover object-center cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}

        {slides.length > 1 && !isVideoMode && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous product photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy/80 hover:bg-navy text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next product photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy/80 hover:bg-navy text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      <div className="px-4 py-3 rounded-xl bg-surface-muted border border-gray-200 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          {hasVideo ? (
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy">
              <Film className="w-4 h-4 text-gold-dark shrink-0" />
              <span>Product Video Available</span>
            </span>
          ) : (
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              Slide {activeIndex + 1} of {slides.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {hasVideo && (
            <button
              type="button"
              onClick={isVideoMode ? () => setIsVideoMode(false) : handlePlayVideo}
              aria-label={isVideoMode ? `Show image for ${productName}` : `Play video for ${productName}`}
              className="h-9 px-3.5 rounded-lg bg-navy hover:bg-gold hover:text-navy text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>{isVideoMode ? "Show Image" : "Play Video"}</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              setIsVideoMode(false);
              setFullscreenOpen(true);
            }}
            aria-label={`View ${productName} in fullscreen`}
            className="h-9 px-3.5 rounded-lg border border-gray-300 bg-white hover:border-navy text-navy text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 shrink-0" />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {slides.map((imgUrl, idx) => {
            const isSelected = !isVideoMode && activeIndex === idx;
            return (
              <button
                key={`${imgUrl}-${idx}`}
                type="button"
                onClick={() => {
                  setIsVideoMode(false);
                  setActiveIndex(idx);
                }}
                aria-label={`Select photo ${idx + 1} for ${productName}`}
                className={`w-24 h-20 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? "border-gold shadow-sm"
                    : "border-gray-200 opacity-75 hover:opacity-100"
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`${productName} slide ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}

      {fullscreenOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setFullscreenOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} Fullscreen Photo Viewer`}
        >
          <div
            className="flex items-center justify-between text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs sm:text-sm font-semibold text-gray-200">
              {productName} — Photo {activeIndex + 1} of {slides.length}
            </span>
            <button
              type="button"
              onClick={() => setFullscreenOpen(false)}
              aria-label="Exit Fullscreen"
              className="h-10 px-4 rounded-lg bg-white/10 hover:bg-gold hover:text-navy text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Minimize2 className="w-4 h-4" />
              <span>Close Fullscreen</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center my-4 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSlide}
              alt={`${productName} fullscreen slide ${activeIndex + 1}`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />

            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous fullscreen slide"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-gold hover:text-navy text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next fullscreen slide"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-gold hover:text-navy text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {slides.length > 1 && (
            <div
              className="flex items-center justify-center gap-2.5 overflow-x-auto py-1"
              onClick={(e) => e.stopPropagation()}
            >
              {slides.map((imgUrl, idx) => (
                <button
                  key={`fs-${imgUrl}-${idx}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Fullscreen slide ${idx + 1}`}
                  className={`w-20 h-14 rounded-md overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    activeIndex === idx
                      ? "border-gold scale-105"
                      : "border-white/20 opacity-65 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${productName} thumb ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
