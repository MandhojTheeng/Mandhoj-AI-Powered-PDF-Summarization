import HeroSection from "@/components/home/hero-section";
import HowItWorks from "@/components/home/how-it-works";
import PricingSection from "@/components/home/pricing-section";
import CTA from "@/components/home/cta-action";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BgGradient from "@/components/common/bg-gradient";

export default function Home() {
  return (
    <main className="relative w-full">
      <BgGradient>
        <HeroSection/>
      </BgGradient>
      
      <div className="bg-white">
        <HowItWorks/>
        <PricingSection/>
        <CTA/>
      </div>
    </main>
  );
}
