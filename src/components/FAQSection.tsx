import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import tradingChart from "@/assets/trading-chart.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  const faqItems = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.faqTitle}</h2>
          <p className="text-muted-foreground">{t.faqDesc}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-border pb-4">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="flex items-center justify-between w-full text-left py-2">
                  <span className={`text-lg font-medium ${open === i ? "text-primary" : "text-foreground"}`}>{item.q}</span>
                  {open === i ? <Minus className="w-5 h-5 text-primary flex-shrink-0" /> : <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                </button>
                {open === i && <p className="text-muted-foreground mt-2 leading-relaxed">{item.a}</p>}
              </div>
            ))}
          </div>
          <div className="hidden lg:block rounded-xl overflow-hidden">
            <img src={tradingChart} alt="Trading" className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
