import React from "react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ExpertiseSplit } from "@/components/home/ExpertiseSplit";
import { HomeGalleryPreview } from "@/components/home/HomeGalleryPreview";
import { BusinessCtaBanner } from "@/components/common/BusinessCtaBanner";
import { HomeContactSection } from "@/components/home/HomeContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CompanyIntro />
      <CategoryShowcase />
      <FeaturedProductsSection />
      <WhyChooseUs />
      <BrandsSection />
      <ExpertiseSplit />
      <HomeGalleryPreview />
      <BusinessCtaBanner />
      <HomeContactSection />
    </>
  );
}
