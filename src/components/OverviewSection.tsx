import { useLanguage } from "@/i18n/LanguageContext";

const OverviewSection = () => {
  const { t } = useLanguage();

  const rows = [
    { emoji: "🌍", label: t.ovRow1Label, value: t.ovRow1Value },
    { emoji: "🤝", label: t.ovRow2Label, value: t.ovRow2Value },
    { emoji: "💸", label: t.ovRow3Label, value: t.ovRow3Value },
    { emoji: "💰", label: t.ovRow4Label, value: t.ovRow4Value },
    { emoji: "💳", label: t.ovRow5Label, value: t.ovRow5Value },
    { emoji: "🏦", label: t.ovRow6Label, value: t.ovRow6Value },
    { emoji: "📊", label: t.ovRow7Label, value: t.ovRow7Value },
    { emoji: "💻", label: t.ovRow8Label, value: t.ovRow8Value },
    { emoji: "📱", label: t.ovRow9Label, value: t.ovRow9Value },
    { emoji: "😊", label: t.ovRow10Label, value: t.ovRow10Value },
    { emoji: "👤", label: t.ovRow11Label, value: t.ovRow11Value },
    { emoji: "👥", label: t.ovRow12Label, value: t.ovRow12Value },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-10">{t.overviewTitle}</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-[250px_1fr] ${i !== rows.length - 1 ? "border-b border-border" : ""}`}>
              <div className="px-6 py-4 font-medium text-foreground flex items-center gap-2">
                <span>{row.emoji}</span> {row.label}
              </div>
              <div className="px-6 py-4 text-muted-foreground">{row.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
