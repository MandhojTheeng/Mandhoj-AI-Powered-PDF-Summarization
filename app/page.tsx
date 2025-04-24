import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";
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
        <div className="relative z-10 space-y-12 sm:space-y-16">
          <HeroSection />
          <DemoSection />
          <HowItWorks />
          <PricingSection />
          <CTA />
        </div>
      </BgGradient>
    </main>
  );
}
