export type CategorySlug =
  | "safety-shoes"
  | "clean-room-shoes"
  | "formal-shoes"
  | "casual-shoes-loafers"
  | "finished-leather-goods";

export interface Category {
  id: string;
  slug: CategorySlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  subcategories: string[];
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  productCode?: string;
  categorySlug: CategorySlug;
  categoryName: string;
  brand?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  videoUrl?: string;
  featured: boolean;
  availableSizes?: string[];
  materialInfo?: string;
  soleType?: string;
  technicalSpecs?: Record<string, string>;
  features?: string[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  logoPath?: string;
  categoryFocus: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Safety Shoes" | "Formal Shoes" | "Leather Footwear" | "Clean Room Shoes" | "Product Collections";
  image: string;
  caption: string;
}

export interface BrochureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  pdfPath: string;
  fileName: string;
  coverImage: string;
  fileFormat: string;
}

export interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  productInterested: string;
  quantityRequired: string;
  message: string;
}
