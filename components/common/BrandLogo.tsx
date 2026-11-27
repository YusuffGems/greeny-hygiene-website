import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "dark" | "light";
}

export function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  const isLight = variant === "light";
  return (
    <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Greeny Hygiene Private Limited Home">
      <div className="w-11 h-11 rounded-md bg-navy border border-gold/60 flex items-center justify-center shadow-sm group-hover:border-gold transition-colors">
        <span className="font-heading font-bold text-lg tracking-wider text-gold">GH</span>
      </div>
      <div className="flex flex-col">
        <span
          className={`font-heading font-bold text-base sm:text-lg leading-tight tracking-tight ${
            isLight ? "text-white" : "text-navy"
          }`}
        >
          GREENY HYGIENE
        </span>
        <span
          className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] ${
            isLight ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          Private Limited
        </span>
      </div>
    </Link>
  );
}
