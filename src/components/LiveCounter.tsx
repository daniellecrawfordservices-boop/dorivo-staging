import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const LiveCounter = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(347);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 12000 + Math.random() * 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-primary/10 border border-primary/20 mx-auto w-fit">
      <Users className="w-4 h-4 text-primary animate-pulse" />
      <span className="text-sm font-medium text-foreground">
        <span className="text-primary font-bold">{count.toLocaleString()}</span>{" "}
        {t.fomoSignedUpToday}
      </span>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
    </div>
  );
};

export default LiveCounter;
