import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const NaturalBeautyIngredients = () => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <main className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Harnessing the Power of Natural Beauty Ingredients</h2>
          <p className="text-muted-foreground leading-relaxed">
            In a world where consumers are becoming increasingly aware of the ingredients in their cosmetics, natural beauty ingredients have taken center stage. These components not only provide effective results but also offer a safer alternative to synthetic counterparts. Let’s explore some of the most beneficial natural ingredients that are revolutionizing the beauty industry.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">1. Organic Oils: Nourishment from Nature</h3>
          <p className="text-muted-foreground leading-relaxed">
            Organic oils, such as argan oil, jojoba oil, and coconut oil, are rich in vitamins, antioxidants, and fatty acids. They serve as excellent moisturizers, help to balance skin oils, and provide deep nourishment. Incorporating these oils into your skincare routine can enhance hydration and improve skin texture.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">2. Botanical Extracts: Nature’s Healing Touch</h3>
          <p className="text-muted-foreground leading-relaxed">
            Botanical extracts like green tea, aloe vera, and chamomile are well-known for their soothing and healing properties. Green tea is packed with antioxidants that fight free radicals, while aloe vera hydrates and calms irritated skin. These extracts can be found in serums, creams, and masks, providing a natural remedy for various skin concerns.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">3. Clay: Detoxifying and Purifying</h3>
          <p className="text-muted-foreground leading-relaxed">
            Clays such as bentonite and kaolin have been used for centuries for their purifying properties. They draw out impurities and excess oil from the skin, making them ideal for acne-prone and oily skin types. Regular use of clay masks can help to clarify the skin and reduce breakouts.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">4. Essential Oils: Aromatic Benefits</h3>
          <p className="text-muted-foreground leading-relaxed">
            Essential oils like lavender, tea tree, and rose not only offer delightful scents but also provide numerous skin benefits. Lavender oil is known for its calming effects and is excellent for sensitive skin, while tea tree oil is a powerful antibacterial agent. Incorporating essential oils into your skincare routine can enhance your overall beauty experience.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">5. Exfoliating Acids: Natural Renewal</h3>
          <p className="text-muted-foreground leading-relaxed">
            Natural exfoliating acids, such as those derived from fruits (AHA) and salicylic acid from willow bark (BHA), can gently slough off dead skin cells and promote cell turnover. These ingredients help reveal brighter, smoother skin and can be effective for tackling issues like dullness and uneven texture.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">6. Honey: Nature's Sweet Elixir</h3>
          <p className="text-muted-foreground leading-relaxed">
            Honey is a natural humectant, attracting moisture to the skin. It is also known for its antibacterial properties, making it beneficial for acne-prone skin. Honey can be used in masks and treatments to hydrate and soothe, providing a radiant glow.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">Conclusion: Embrace Natural Beauty</h3>
          <p className="text-muted-foreground leading-relaxed">
            The shift towards natural beauty ingredients reflects a growing demand for transparency and sustainability in the cosmetics industry. By choosing products infused with these potent natural components, consumers can enjoy effective beauty solutions that are both safe and environmentally friendly. As you explore your beauty routine, consider the power of nature and the remarkable benefits these ingredients can offer.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NaturalBeautyIngredients;