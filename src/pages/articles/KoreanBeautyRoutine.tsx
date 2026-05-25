import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const KoreanBeautyRoutine = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.koreanBeautyTitle}</h1>
          <p className="text-muted-foreground leading-relaxed">
            The Korean beauty routine is not just a trend; it’s a lifestyle that emphasizes the importance of skincare. With a focus on hydration, nourishment, and a radiant complexion, this multi-step routine can transform your skin. Let’s delve into the essential steps that can elevate your beauty regimen.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">1. Double Cleansing</h3>
          <p className="text-muted-foreground leading-relaxed">
            Start with an oil-based cleanser to remove makeup, sunscreen, and excess sebum. Follow up with a water-based cleanser to deep clean your pores. This two-step cleansing ensures that your skin is thoroughly cleansed and prepped for the following products.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">2. Exfoliation</h3>
          <p className="text-muted-foreground leading-relaxed">
            Exfoliation is key in the Korean beauty routine, typically performed 2-3 times a week. Opt for gentle chemical exfoliants, such as AHA or BHA, that remove dead skin cells without causing irritation. This step promotes cell turnover and reveals a brighter complexion.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">3. Toner</h3>
          <p className="text-muted-foreground leading-relaxed">
            Korean toners are not just for balancing your skin’s pH; they also prepare your skin to absorb the next layers of products. Look for hydrating toners infused with ingredients like hyaluronic acid, green tea, or ginseng to deliver moisture and antioxidants.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">4. Essence</h3>
          <p className="text-muted-foreground leading-relaxed">
            The essence is a unique step in the K-beauty routine, acting as a lightweight serum that hydrates and enhances skin texture. Look for essences containing fermented ingredients or snail mucin, known for their ability to rejuvenate and repair the skin.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">5. Serums</h3>
          <p className="text-muted-foreground leading-relaxed">
            Target specific skin concerns with serums rich in active ingredients. Whether you’re addressing fine lines, pigmentation, or acne, choose serums that suit your skin type. Vitamin C serums are excellent for brightening, while niacinamide can help with oil control and enlarged pores.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">6. Sheet Masks</h3>
          <p className="text-muted-foreground leading-relaxed">
            Sheet masks are a fun and effective way to infuse your skin with concentrated serums. Use them 1-2 times a week for an extra boost of hydration and nourishment. They come in various formulations, so choose one that addresses your skin concerns.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">7. Moisturizer</h3>
          <p className="text-muted-foreground leading-relaxed">
            A good moisturizer is essential in sealing in all the previous layers of hydration. Look for lightweight gel creams in the summer and richer creams in the winter. Ingredients like ceramides and shea butter can provide long-lasting moisture.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">8. Sunscreen</h3>
          <p className="text-muted-foreground leading-relaxed">
            The final step in the morning routine is sunscreen, a must-have in any skincare regimen. Opt for a broad-spectrum SPF 30 or higher to protect your skin from UV damage. Korean sunscreens are known for their lightweight feel and often contain skin-benefiting ingredients.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">9. Night Care</h3>
          <p className="text-muted-foreground leading-relaxed">
            In the evening, consider adding a sleeping mask or night cream to your routine. These products provide intensive hydration and help repair your skin overnight, making them a great addition to your K-beauty regimen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KoreanBeautyRoutine;