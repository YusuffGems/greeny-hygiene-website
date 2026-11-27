"use client";

import React from "react";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { trackBrochureDownload } from "@/lib/analytics";

interface BrochureDownloadButtonProps {
  source?: string;
  variant?: "primary" | "outline" | "light" | "compact";
  label?: string;
  className?: string;
  directPdfUrl?: string;
  directFileName?: string;
}

export function BrochureDownloadButton({
  source = "website",
  variant = "primary",
  label = "Brochures",
  className = "",
  directPdfUrl,
  directFileName,
}: BrochureDownloadButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-colors cursor-pointer";

  const variants: Record<NonNullable<BrochureDownloadButtonProps["variant"]>, string> = {
    primary:
      "h-12 px-6 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-sm shadow-md",
    outline:
      "h-12 px-5 rounded-lg border-2 border-navy text-navy hover:bg-navy hover:text-white text-sm",
    light:
      "h-12 px-6 rounded-lg bg-white/10 hover:bg-white hover:text-navy border border-white/30 text-white text-sm",
    compact:
      "h-9 px-3.5 rounded-md border border-navy/25 bg-surface-muted hover:bg-navy hover:text-white text-navy text-xs",
  };

  if (directPdfUrl) {
    return (
      <a
        href={directPdfUrl}
        download={directFileName || "Greeny-Hygiene-Brochure.pdf"}
        onClick={() => trackBrochureDownload(`${source}:${directFileName || directPdfUrl}`)}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        <Download className="w-4 h-4 shrink-0" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link
      href={siteConfig.brochure.pageHref}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <FileText className="w-4 h-4 shrink-0" />
      <span>{label}</span>
    </Link>
  );
}
