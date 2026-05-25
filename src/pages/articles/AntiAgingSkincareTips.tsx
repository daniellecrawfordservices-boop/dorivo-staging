import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const AntiAgingSkincareTips = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Anti-Aging Skincare Tips</h2>
          <p className="text-muted-foreground leading-relaxed">
            As we age, our skin undergoes various changes, leading to the appearance of fine lines, wrinkles, and loss of elasticity. However, with the right skincare routine, you can maintain a youthful glow and combat the signs of aging effectively. Here are some advanced tips tailored for those truly passionate about cosmetics.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">1. Incorporate Retinoids into Your Routine</h3>
          <p className="text-muted-foreground leading-relaxed">
            Retinoids are a powerhouse in anti-aging skincare. They promote cell turnover, stimulate collagen production, and reduce the appearance of fine lines. Start with a lower concentration and gradually increase to avoid irritation. Look for products that contain retinol or prescription-strength tretinoin for maximum effectiveness.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">2. Don't Skip the Sunscreen</h3>
          <p className="text-muted-foreground leading-relaxed">
            UV damage is one of the primary causes of premature aging. Use a broad-spectrum sunscreen with at least SPF 30 daily, even on cloudy days. Consider reapplying every two hours, especially if you're outdoors. Products with added antioxidants can provide an extra layer of protection against free radicals.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">3. Hydrate with Hyaluronic Acid</h3>
          <p className="text-muted-foreground leading-relaxed">
            Hyaluronic acid is a natural humectant that can hold up to 1000 times its weight in water. Incorporate serums or moisturizers that contain this ingredient to plump your skin and maintain hydration. This helps reduce the appearance of fine lines and gives the skin a smoother texture.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">4. Embrace Antioxidants</h3>
          <p className="text-muted-foreground leading-relaxed">
            Antioxidants, such as Vitamin C, E, and ferulic acid, help protect the skin from oxidative stress caused by environmental factors. Incorporate serums enriched with these ingredients into your morning routine to brighten your complexion and enhance your skin's resilience against aging.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">5. Consider Peptides</h3>
          <p className="text-muted-foreground leading-relaxed">
            Peptides are short chains of amino acids that play a vital role in building proteins in the skin, such as collagen and elastin. Look for peptide-infused creams or serums that can help firm your skin and improve its overall texture and tone.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">6. Don't Forget Your Neck and Décolletage</h3>
          <p className="text-muted-foreground leading-relaxed">
            The neck and décolletage often show signs of aging before the face. Apply your anti-aging products to these areas as well. Look for specific creams formulated for these regions that can help improve texture and elasticity.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">7. Regular Exfoliation is Key</h3>
          <p className="text-muted-foreground leading-relaxed">
            Regular exfoliation removes dead skin cells and promotes cell turnover, revealing a fresher complexion. Consider chemical exfoliants like AHAs and BHAs for a more effective approach. However, avoid over-exfoliating, as this can cause irritation and sensitivity.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">8. Maintain a Healthy Lifestyle</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your skin reflects your overall health. Stay hydrated, eat a balanced diet rich in antioxidants, and get regular exercise to improve circulation and promote a healthy glow. Don't underestimate the impact of quality sleep on your skin's appearance as well.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mb-2">Conclusion</h3>
          <p className="text-muted-foreground leading-relaxed">
            Aging is a natural process, but with these skincare tips, you can maintain a youthful appearance and boost your confidence. Experiment with products that suit your skin type and remember that consistency is key in achieving visible results. Embrace your beauty at every age!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AntiAgingSkincareTips;