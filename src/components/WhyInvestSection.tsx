import tradingChart from "@/assets/trading-chart.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const WhyInvestSection = () => {
  const { t } = useLanguage();
  const reasons = [
    { title: t.why1Title, desc: t.why1Desc },
    { title: t.why2Title, desc: t.why2Desc },
    { title: t.why3Title, desc: t.why3Desc },
    { title: t.why4Title, desc: t.why4Desc },
    { title: t.why5Title, desc: t.why5Desc },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="rounded-xl overflow-hidden">
          <img src={tradingChart} alt="Trading chart" className="w-full h-auto rounded-xl" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.whyTitle}</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">{t.whyDesc}</p>
          <div className="space-y-6">
            {reasons.map((r, i) => (
              <div key={i}>
                <p className="text-foreground">
                  <span className="font-bold">{i + 1}. {r.title}</span> – {r.desc}
                </p>
              </div>
            ))}
          </div>
          <button onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            {t.registerNow}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
