import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface SocialIconsProps {
  variant?: "header" | "footer";
}

export function SocialIcons({ variant = "header" }: SocialIconsProps) {
  const socials = [
    {
      name: "Facebook",
      href: siteConfig.socialLinks.facebook,
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: siteConfig.socialLinks.instagram,
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: siteConfig.socialLinks.linkedin,
      icon: Linkedin,
    },
    {
      name: "YouTube",
      href: siteConfig.socialLinks.youtube,
      icon: Youtube,
    },
    {
      name: "X (Twitter)",
      href: siteConfig.socialLinks.twitter,
      icon: Twitter,
    },
    {
      name: "WhatsApp",
      href: buildGeneralWhatsAppUrl(),
      icon: MessageCircle,
    },
  ];

  const isHeader = variant === "header";

  return (
    <div className="flex items-center gap-2" aria-label="Social Media Links">
      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            title={item.name}
            className={
              isHeader
                ? "w-7 h-7 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-gray-200 flex items-center justify-center transition-colors"
                : "w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-gray-200 border border-white/15 flex items-center justify-center transition-colors"
            }
          >
            <Icon className={isHeader ? "w-3.5 h-3.5" : "w-4 h-4"} />
          </a>
        );
      })}
    </div>
  );
}
