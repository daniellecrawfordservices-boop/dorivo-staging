import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const SpotsRemaining = () => {
  const { t } = useLanguage();
  const [spots, setSpots] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpots((prev) => {
        if (prev <= 3) return 14;
        return prev - 1;
      });
    }, 30000 + Math.random() * 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 justify-center py-2 px-4 rounded-lg bg-destructive/10 border border-destructive/20 text-sm">
      <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
      <span className="text-foreground font-medium">
        {t.fomoSpotsLeft.replace("{spots}", String(spots))}
      </span>
    </div>
  );
};

export default SpotsRemaining;
