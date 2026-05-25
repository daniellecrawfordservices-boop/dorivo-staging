import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <h2 className="text-3xl font-semibold text-foreground mb-4">{t.aboutTitle1}</h2>
          <p className="text-muted-foreground leading-relaxed">{t.aboutDesc1}</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-foreground mb-4">{t.aboutTitle2}</h2>
          <p className="text-muted-foreground leading-relaxed">{t.aboutDesc2}</p>
        </div>
        <button onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          {t.registerNow}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
