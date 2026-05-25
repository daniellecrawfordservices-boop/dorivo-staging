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
import { Link } from "react-router-dom";

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
            {/* DOMAINER_NAV:/articles/korean-beauty-routine */}
      <Link
        to="/articles/korean-beauty-routine"
        className="block mx-6 md:mx-12 mb-4 rounded-2xl border border-border bg-card hover:bg-accent transition-colors duration-200 shadow-sm group"
      >
        <div className="px-6 py-5 flex items-center justify-between gap-4">
          <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">Korean Beauty Routine</span>
          <span className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors text-xl leading-none">→</span>
        </div>
      </Link>
<Footer />
      <FomoNotification />
    <section className="py-16 px-6 md:px-12 bg-background">
  <div className="max-w-5xl mx-auto space-y-10">
    <h2 className="text-3xl font-semibold text-foreground mb-4">Unlocking the Power of Blockchain Technology in Cosmetics</h2>
    <p className="text-muted-foreground leading-relaxed">
      As the cosmetics industry continues to evolve, blockchain technology is emerging as a transformative force, offering innovative solutions that enhance transparency, authenticity, and consumer trust. For beauty enthusiasts and industry professionals alike, understanding this technology's potential can lead to informed purchasing decisions and a more sustainable future for cosmetics.
    </p>

    <h3 className="text-2xl font-semibold text-foreground mb-2">1. Transparency and Traceability</h3>
    <p className="text-muted-foreground leading-relaxed">
      Consumers today are increasingly concerned about the origins of the products they use. Blockchain provides a secure and immutable ledger that tracks products from creation to sale, allowing brands to showcase their supply chains transparently. This feature not only helps in verifying the authenticity of ingredients but also ensures ethical sourcing practices are followed. Imagine scanning a product’s QR code and instantly accessing its entire history, from ingredient sourcing to manufacturing processes.
    </p>

    <h3 className="text-2xl font-semibold text-foreground mb-2">2. Combatting Counterfeits</h3>
    <p className="text-muted-foreground leading-relaxed">
      The cosmetics industry is plagued by counterfeit products that can pose serious risks to consumers. Blockchain technology helps combat this issue by providing a unique digital signature for each product. This signature verifies the product’s authenticity and confirms that it is genuine. Brands leveraging blockchain can significantly reduce the risk of counterfeit items reaching consumers, ensuring that customers receive safe and effective products.
    </p>

    <h3 className="text-2xl font-semibold text-foreground mb-2">3. Enhancing Consumer Engagement</h3>
    <p className="text-muted-foreground leading-relaxed">
      Blockchain also allows brands to create more personalized experiences for their customers. By integrating loyalty programs and rewards on the blockchain, companies can offer unique incentives for purchases, referrals, and social sharing. This engagement not only fosters brand loyalty but also empowers consumers to be part of a community that values transparency and authenticity.
    </p>

    <h3 className="text-2xl font-semibold text-foreground mb-2">4. Sustainability and Eco-Friendly Practices</h3>
    <p className="text-muted-foreground leading-relaxed">
      Sustainability is a significant concern for modern consumers, and blockchain can play a crucial role in promoting eco-friendly practices within the cosmetics industry. By providing an accurate record of a product's lifecycle, from ingredient sourcing to distribution, brands can demonstrate their commitment to sustainability. This transparency can help consumers make more conscious choices and support brands that prioritize environmental responsibility.
    </p>

    <h3 className="text-2xl font-semibold text-foreground mb-2">5. Future Innovations</h3>
    <p className="text-muted-foreground leading-relaxed">
      As blockchain technology continues to advance, we can expect innovative applications specifically tailored for the cosmetics industry. From decentralized marketplaces that empower independent brands to smart contracts that automate transactions, the possibilities are endless. Staying informed about these developments can position beauty enthusiasts and professionals to take advantage of emerging trends and opportunities.
    </p>

    <p className="text-muted-foreground leading-relaxed">
      In conclusion, blockchain technology is not just a buzzword; it is a powerful tool that can reshape the cosmetics landscape. By embracing transparency, combating counterfeits, enhancing engagement, and promoting sustainability, both brands and consumers stand to benefit. As the industry moves forward, those who understand and leverage blockchain will undoubtedly lead the charge in creating a more trustworthy and innovative cosmetics market.
    </p>
  </div>
</section>
{/* DOMAINER_CONTENT */}
</div>
  );
};

export default Index;
