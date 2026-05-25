import { DollarSign, UserPlus, Award, BookOpen, Headphones, BarChart3 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const UniqueSection = () => {
  const { t } = useLanguage();
  const features = [
    { icon: DollarSign, title: t.uniqueFinance, desc: t.uniqueFinanceDesc },
    { icon: UserPlus, title: t.uniqueRegistration, desc: t.uniqueRegistrationDesc },
    { icon: Award, title: t.uniqueInvestment, desc: t.uniqueInvestmentDesc, highlight: true },
    { icon: BookOpen, title: t.uniquePractice, desc: t.uniquePracticeDesc },
    { icon: Headphones, title: t.uniqueSupport, desc: t.uniqueSupportDesc },
    { icon: BarChart3, title: t.uniqueDiversify, desc: t.uniqueDiversifyDesc },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.uniqueTitle}</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">{t.uniqueDesc}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className={`bg-card rounded-xl p-8 text-center border ${f.highlight ? "border-primary" : "border-border"}`}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
