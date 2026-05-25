import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import WhyInvestSection from "@/components/WhyInvestSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import UniqueSection from "@/components/UniqueSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import OverviewSection from "@/components/OverviewSection";
import Footer from "@/components/Footer";
import FomoNotification from "@/components/FomoNotification";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <HeroSection />
      <StepsSection />
      <WhyInvestSection />
      <OpportunitiesSection />
      <UniqueSection />
      <AboutSection />
      <FAQSection />
      <OverviewSection />
      <Footer />
      <FomoNotification />
    </div>
  );
};

export default Index;
