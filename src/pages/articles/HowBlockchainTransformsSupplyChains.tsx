import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect } from "react";

const HowBlockchainTransformsSupplyChains = () => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  useEffect(() => {
    document.title = "How Blockchain Transforms Supply Chains | Dorivo";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <main className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-semibold text-foreground mb-4">How Blockchain Transforms Supply Chains</h2>
          <p className="text-muted-foreground leading-relaxed">
            In the cosmetics industry, the supply chain is integral to delivering quality products to consumers. Blockchain technology is revolutionizing this landscape, enhancing transparency, traceability, and accountability across the entire supply chain.
          </p>

          <h3 className="text-2xl font-semibold">Enhancing Transparency</h3>
          <p className="text-muted-foreground leading-relaxed">
            With blockchain, every transaction and movement of goods is recorded in a decentralized ledger. This means that every stakeholder—from manufacturers to retailers—can access real-time data about product origins and handling. For consumers, this translates to the ability to verify the authenticity of products, ensuring they are purchasing genuine items rather than counterfeits.
          </p>

          <h3 className="text-2xl font-semibold">Improving Traceability</h3>
          <p className="text-muted-foreground leading-relaxed">
            The cosmetics industry has faced significant challenges related to product recalls and safety concerns. Blockchain technology allows brands to trace a product's journey from ingredient sourcing to final sale. This level of traceability not only enhances consumer safety but also allows brands to respond swiftly in case of product issues, thereby maintaining their reputation and trust with customers.
          </p>

          <h3 className="text-2xl font-semibold">Boosting Sustainability</h3>
          <p className="text-muted-foreground leading-relaxed">
            As more consumers seek sustainable and ethically sourced products, blockchain can help brands validate their claims. By providing immutable records of sourcing practices, companies can demonstrate their commitment to sustainability. For instance, a brand can prove that its ingredients are sourced from sustainable farms or that its packaging is eco-friendly, thus appealing to environmentally-conscious consumers.
          </p>

          <h3 className="text-2xl font-semibold">Fostering Collaboration</h3>
          <p className="text-muted-foreground leading-relaxed">
            Blockchain facilitates better collaboration among supply chain partners. By using a shared platform, all stakeholders can access the same information, reducing disputes and enhancing cooperation. This collaborative environment allows for innovations in product development and delivery processes, ultimately benefiting consumers with improved product offerings.
          </p>

          <h3 className="text-2xl font-semibold">Conclusion</h3>
          <p className="text-muted-foreground leading-relaxed">
            The integration of blockchain technology into supply chains represents a significant step forward for the cosmetics industry. By enhancing transparency, improving traceability, boosting sustainability, and fostering collaboration, blockchain not only addresses existing challenges but also positions brands to meet the evolving demands of consumers. As the industry continues to grow, embracing these technological advancements will be crucial for staying competitive and maintaining consumer trust.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowBlockchainTransformsSupplyChains;