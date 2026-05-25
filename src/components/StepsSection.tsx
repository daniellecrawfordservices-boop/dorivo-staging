import { useLanguage } from "@/i18n/LanguageContext";

const StepsSection = () => {
  const { t } = useLanguage();
  const steps = [
    { title: t.step1Title, desc: t.step1Desc },
    { title: t.step2Title, desc: t.step2Desc },
    { title: t.step3Title, desc: t.step3Desc },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.stepsTitle}</h2>
        <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">{t.stepsDesc}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
