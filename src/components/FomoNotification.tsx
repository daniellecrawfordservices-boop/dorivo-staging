import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { X } from "lucide-react";

const firstNames: Record<string, string[]> = {
  en: ["James", "Sarah", "Michael", "Emma", "David", "Olivia", "Daniel", "Sophie"],
  de: ["Hans", "Anna", "Klaus", "Maria", "Stefan", "Lena", "Thomas", "Julia"],
  fr: ["Pierre", "Marie", "Jean", "Sophie", "Louis", "Camille", "Hugo", "Léa"],
  es: ["Carlos", "María", "Juan", "Ana", "Pedro", "Lucía", "Miguel", "Elena"],
  cz: ["Jan", "Eva", "Petr", "Anna", "Tomáš", "Lucie", "Martin", "Tereza"],
  pl: ["Tomasz", "Anna", "Marek", "Kasia", "Piotr", "Magda", "Adam", "Ewa"],
  it: ["Marco", "Giulia", "Luca", "Francesca", "Andrea", "Sofia", "Giuseppe", "Elena"],
  ar: ["أحمد", "فاطمة", "محمد", "نور", "خالد", "سارة", "عمر", "ليلى"],
  ru: ["Алексей", "Анна", "Дмитрий", "Мария", "Сергей", "Елена", "Иван", "Ольга"],
  pt: ["João", "Maria", "Pedro", "Ana", "Carlos", "Beatriz", "Miguel", "Sofia"],
  ja: ["太郎", "花子", "健太", "美咲", "翔太", "さくら", "大輔", "愛"],
  no: ["Erik", "Ingrid", "Lars", "Kari", "Ole", "Hilde", "Nils", "Astrid"],
  sv: ["Erik", "Anna", "Lars", "Maria", "Anders", "Eva", "Johan", "Karin"],
  da: ["Lars", "Anna", "Jens", "Marie", "Mads", "Sofie", "Peter", "Lise"],
  tr: ["Mehmet", "Ayşe", "Ali", "Fatma", "Mustafa", "Zeynep", "Ahmet", "Elif"],
  fi: ["Matti", "Anna", "Juha", "Maria", "Mikko", "Sari", "Jari", "Tiina"],
};

const cities: Record<string, string[]> = {
  en: ["London", "New York", "Sydney", "Toronto", "Dublin"],
  de: ["Berlin", "München", "Hamburg", "Frankfurt", "Wien"],
  fr: ["Paris", "Lyon", "Marseille", "Bruxelles", "Genève"],
  es: ["Madrid", "Barcelona", "México", "Buenos Aires", "Lima"],
  cz: ["Praha", "Brno", "Ostrava", "Plzeň", "Olomouc"],
  pl: ["Warszawa", "Kraków", "Wrocław", "Gdańsk", "Poznań"],
  it: ["Roma", "Milano", "Napoli", "Torino", "Firenze"],
  ar: ["دبي", "الرياض", "القاهرة", "عمّان", "الدوحة"],
  ru: ["Москва", "Санкт-Петербург", "Казань", "Новосибирск", "Екатеринбург"],
  pt: ["Lisboa", "São Paulo", "Porto", "Rio de Janeiro", "Brasília"],
  ja: ["東京", "大阪", "名古屋", "福岡", "札幌"],
  no: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Tromsø"],
  sv: ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Linköping"],
  da: ["København", "Aarhus", "Odense", "Aalborg", "Esbjerg"],
  tr: ["İstanbul", "Ankara", "İzmir", "Antalya", "Bursa"],
  fi: ["Helsinki", "Tampere", "Turku", "Oulu", "Espoo"],
};

const FomoNotification = () => {
  const { t, lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState({ name: "", city: "", time: "" });

  const generateNotification = () => {
    const names = firstNames[lang] || firstNames.en;
    const cityList = cities[lang] || cities.en;
    const name = names[Math.floor(Math.random() * names.length)];
    const city = cityList[Math.floor(Math.random() * cityList.length)];
    const mins = Math.floor(Math.random() * 15) + 1;
    const time = t.fomoMinutesAgo.replace("{min}", String(mins));
    return { name, city, time };
  };

  useEffect(() => {
    const showNotification = () => {
      setNotification(generateNotification());
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };

    const initialDelay = setTimeout(showNotification, 8000);
    const interval = setInterval(showNotification, 25000 + Math.random() * 15000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [lang]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500 max-w-sm">
      <div className="relative rounded-xl border border-border bg-card p-4 shadow-2xl">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-lg">✓</span>
          </div>
          <div className="pr-4">
            <p className="text-sm font-semibold text-foreground">
              {t.fomoJustSignedUp.replace("{name}", notification.name).replace("{city}", notification.city)}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">{notification.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FomoNotification;
