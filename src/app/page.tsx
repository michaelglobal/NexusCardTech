import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SpecsSection from "@/components/SpecsSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import WaitingListSection from "@/components/WaitingListSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SpecsSection />
        <AppPreviewSection />
        <WaitingListSection />
      </main>
      <Footer />
    </>
  );
}
