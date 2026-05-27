import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect } from "react";

const Top5SkincareMistakesToAvoid = () => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  useEffect(() => {
    document.title = "Top 5 Skincare Mistakes To Avoid | Dorivo";
  }, []);

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <main className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-3xl font-semibold text-foreground mb-4">Top 5 Skincare Mistakes To Avoid</h1>
          <p className="text-muted-foreground leading-relaxed">
            Skincare enthusiasts often make common errors that can hinder their skin's health and appearance. Here are the top five mistakes to be aware of and avoid in your skincare routine.
          </p>

          <h3 className="text-2xl font-semibold text-foreground">1. Skipping Sunscreen Daily</h3>
          <p className="text-muted-foreground leading-relaxed">
            One of the most significant mistakes is neglecting sunscreen. Even on cloudy days, UV rays can penetrate through clouds and damage your skin. Make it a habit to apply a broad-spectrum sunscreen with at least SPF 30 every morning, regardless of your plans.
          </p>

          <h3 className="text-2xl font-semibold text-foreground">2. Over-Exfoliating</h3>
          <p className="text-muted-foreground leading-relaxed">
            While exfoliation is essential for removing dead skin cells, doing it too frequently can strip your skin of its natural oils, leading to irritation and breakouts. Limit exfoliation to 1-2 times a week and opt for gentle exfoliants that suit your skin type.
          </p>

          <h3 className="text-2xl font-semibold text-foreground">3. Ignoring Ingredients</h3>
          <p className="text-muted-foreground leading-relaxed">
            Not all products are created equal. It's crucial to read the ingredient list and choose products that cater to your skin's specific needs. Avoid harsh ingredients that can cause irritation and instead opt for soothing, hydrating components like hyaluronic acid and ceramides.
          </p>

          <h3 className="text-2xl font-semibold text-foreground">4. Neglecting to Patch Test</h3>
          <p className="text-muted-foreground leading-relaxed">
            Introducing new products without patch testing can lead to adverse reactions. Always test a small amount on your skin before fully incorporating a new product into your routine. This practice helps ensure compatibility and prevents potential breakouts or allergies.
          </p>

          <h3 className="text-2xl font-semibold text-foreground">5. Not Adjusting Skincare for Seasons</h3>
          <p className="text-muted-foreground leading-relaxed">
            Skin's needs change with the seasons. For instance, during winter, your skin may require more hydration due to dryness. Be proactive in adjusting your routine by incorporating richer creams and more emollient products in colder months, while switching to lighter formulations in summer.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            By avoiding these common skincare mistakes, you can enhance your skincare routine and help achieve healthier, more radiant skin. Remember, consistency and attention to your skin's unique needs are key to long-term results.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Top5SkincareMistakesToAvoid;