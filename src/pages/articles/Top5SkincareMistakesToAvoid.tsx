import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect } from "react";

const Top5SkincareMistakesToAvoid = () => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  useEffect(() => {
    document.title = "Top 5 Skincare Mistakes To Avoid | Test Dorivo";
  }, []);

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <main className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Top 5 Skincare Mistakes To Avoid</h2>
          <p className="text-muted-foreground leading-relaxed">
            Navigating the world of skincare can be overwhelming, especially with the vast array of products and advice available. However, avoiding common pitfalls can make a significant difference in the health and appearance of your skin. Here are the top five skincare mistakes to steer clear of.
          </p>

          <h3 className="text-2xl font-semibold">1. Skipping Sunscreen</h3>
          <p className="text-muted-foreground leading-relaxed">
            One of the most common mistakes is neglecting sunscreen. Even on cloudy days, UV rays can damage your skin. Daily application of a broad-spectrum sunscreen with at least SPF 30 is crucial for preventing premature aging and skin cancer.
          </p>

          <h3 className="text-2xl font-semibold">2. Over-Exfoliating</h3>
          <p className="text-muted-foreground leading-relaxed">
            While exfoliation is essential for removing dead skin cells, overdoing it can lead to irritation and compromised skin barriers. Limit physical and chemical exfoliants to 2-3 times a week, and always follow up with hydration to soothe the skin.
          </p>

          <h3 className="text-2xl font-semibold">3. Ignoring Ingredient Compatibility</h3>
          <p className="text-muted-foreground leading-relaxed">
            Not all skincare ingredients work well together. For instance, combining retinol with strong acids can cause irritation. Research ingredient compatibility and consider introducing new products slowly to monitor how your skin reacts.
          </p>

          <h3 className="text-2xl font-semibold">4. Neglecting the Neck and Décolletage</h3>
          <p className="text-muted-foreground leading-relaxed">
            Many people focus solely on their face, forgetting the neck and décolletage, which are just as prone to aging and sun damage. Extend your skincare routine to these areas to maintain a consistent appearance.
          </p>

          <h3 className="text-2xl font-semibold">5. Not Adjusting Your Routine Seasonally</h3>
          <p className="text-muted-foreground leading-relaxed">
            Skin's needs change with the seasons. For instance, you may need a heavier moisturizer in winter and a lighter formula in summer. Assess your skin’s condition regularly to ensure your products are still effective and suitable.
          </p>
          
          <p className="text-muted-foreground">
            By avoiding these five common skincare mistakes, you can enhance your skincare routine and achieve a healthier complexion. Remember, consistency is key, and listening to your skin will guide you toward the best practices for your unique needs.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Top5SkincareMistakesToAvoid;