import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const amounts = [250, 500, 1000, 750, 300, 1500, 2000, 450, 800, 350];

const cityMap: Record<string, string[]> = {
  en: ["London", "New York", "Sydney"],
  de: ["Berlin", "München", "Hamburg"],
  fr: ["Paris", "Lyon", "Marseille"],
  es: ["Madrid", "Barcelona", "México"],
  cz: ["Praha", "Brno", "Ostrava"],
  pl: ["Warszawa", "Kraków", "Gdańsk"],
  it: ["Roma", "Milano", "Napoli"],
  ar: ["دبي", "الرياض", "القاهرة"],
  ru: ["Москва", "Казань", "Екатеринбург"],
  pt: ["Lisboa", "Porto", "São Paulo"],
  ja: ["東京", "大阪", "名古屋"],
  no: ["Oslo", "Bergen", "Trondheim"],
  sv: ["Stockholm", "Göteborg", "Malmö"],
  da: ["København", "Aarhus", "Odense"],
  tr: ["İstanbul", "Ankara", "İzmir"],
  fi: ["Helsinki", "Tampere", "Turku"],
};

type ActivityItem = { city: string; amount: number; mins: number };

const RecentActivity = () => {
  const { t, lang } = useLanguage();
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  const generateItem = (): ActivityItem => {
    const cities = cityMap[lang] || cityMap.en;
    return {
      city: cities[Math.floor(Math.random() * cities.length)],
      amount: amounts[Math.floor(Math.random() * amounts.length)],
      mins: Math.floor(Math.random() * 30) + 1,
    };
  };

  useEffect(() => {
    setActivities([generateItem(), generateItem(), generateItem()]);
    const interval = setInterval(() => {
      setActivities((prev) => [generateItem(), ...prev.slice(0, 2)]);
    }, 15000 + Math.random() * 10000);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div className="rounded-xl border border-border bg-card/50 p-4 space-y-2">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">{t.fomoRecentActivity}</span>
      </div>
      {activities.map((item, i) => (
        <div
          key={i}
          className={`flex items-center justify-between text-xs py-2 px-3 rounded-lg ${
            i === 0 ? "bg-primary/5 animate-in fade-in duration-500" : "bg-muted/30"
          }`}
        >
          <span className="text-muted-foreground">
            {t.fomoSomeoneFrom} {item.city}
          </span>
          <span className="font-semibold text-primary">${item.amount.toLocaleString()}</span>
          <span className="text-muted-foreground">
            {t.fomoMinutesAgo.replace("{min}", String(item.mins))}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
