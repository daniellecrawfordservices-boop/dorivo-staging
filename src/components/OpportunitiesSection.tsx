import tradingChart from "@/assets/trading-chart.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const OpportunitiesSection = () => {
  const { t } = useLanguage();
  const opportunities = [
    { title: t.opp1Title, desc: t.opp1Desc },
    { title: t.opp2Title, desc: t.opp2Desc },
    { title: t.opp3Title, desc: t.opp3Desc },
    { title: t.opp4Title, desc: t.opp4Desc },
    { title: t.opp5Title, desc: t.opp5Desc },
    { title: t.opp6Title, desc: t.opp6Desc },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">{t.oppTitle}</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">{t.oppDesc}</p>
          <div className="space-y-6">
            {opportunities.map((o, i) => (
              <div key={i}>
                <p className="text-foreground">
                  <span className="font-bold">{o.title}</span> - {o.desc}
                </p>
              </div>
            ))}
          </div>
          <button onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            {t.registerNow}
          </button>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src={tradingChart} alt="Trading chart" className="w-full h-auto rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
