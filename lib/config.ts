export const siteConfig = {
  companyName: "Greeny Hygiene Private Limited",
  shortName: "Greeny Hygiene",
  tagline: "Footwear Manufacturer | Exporter | Trader | Supplier",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.greenyhygiene.com",
  brochure: {
    pageHref: "/brochures",
    pdfPath: "/brochures/Greeny-Hygiene-Company-Profile-Catalogue.pdf",
    fileName: "Greeny-Hygiene-Company-Profile-Catalogue.pdf",
    title: "Corporate Profile & Footwear Product Catalogue",
  },
  socialLinks: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/",
  },
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
  address: {
    line1: "106/1, Ground Floor, Kannagi Street,",
    line2: "Selvaganapathy Nagar, Senneerkuppam,",
    cityStatePin: "Poonamallee, Chennai, Tamil Nadu – 600056, India.",
    full: "106/1, Ground Floor, Kannagi Street, Selvaganapathy Nagar, Senneerkuppam, Poonamallee, Chennai, Tamil Nadu – 600056, India.",
  },
  contact: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9180482 10396",
    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+9180482 10396",
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "Contact Number: To Be Confirmed",
    emailDisplay: process.env.NEXT_PUBLIC_EMAIL_DISPLAY || "info@greenyhygiene.com",
    businessHours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "Monday – Saturday: 10:00 AM – 7:30 PM",
  },
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps?q=106/1,+Kannagi+Street,+Selvaganapathy+Nagar,+Senneerkuppam,+Poonamallee,+Chennai,+Tamil+Nadu+600056&output=embed",
};
