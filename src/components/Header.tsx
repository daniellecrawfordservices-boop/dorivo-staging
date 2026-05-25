import { useNavigate, useLocation } from "react-router-dom";
import logoArrow from "@/assets/dorivo-logo-arrow.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";
import gbFlag from "@/assets/flags/gb.svg";
import deFlag from "@/assets/flags/de.svg";
import frFlag from "@/assets/flags/fr.svg";
import esFlag from "@/assets/flags/es.svg";
import czFlag from "@/assets/flags/cz.svg";
import plFlag from "@/assets/flags/pl.svg";
import itFlag from "@/assets/flags/it.svg";
import arFlag from "@/assets/flags/ar.svg";
import ruFlag from "@/assets/flags/ru.svg";
import ptFlag from "@/assets/flags/pt.svg";
import jaFlag from "@/assets/flags/ja.svg";
import noFlag from "@/assets/flags/no.svg";
import svFlag from "@/assets/flags/sv.svg";
import daFlag from "@/assets/flags/da.svg";
import trFlag from "@/assets/flags/tr.svg";
import fiFlag from "@/assets/flags/fi.svg";

const flagMap: Record<string, string> = {
  en: gbFlag, de: deFlag, fr: frFlag, es: esFlag, cz: czFlag, pl: plFlag,
  it: itFlag, ar: arFlag, ru: ruFlag, pt: ptFlag, ja: jaFlag, no: noFlag,
  sv: svFlag, da: daFlag, tr: trFlag, fi: fiFlag,
};

const Header = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageSwitch = (code: string) => {
    // Get the current sub-path (e.g., /privacy-policy)
    const pathParts = location.pathname.split("/").filter(Boolean);
    // Remove current lang prefix if present
    const langCodes = languages.map(l => l.code);
    const subPath = langCodes.includes(pathParts[0] as any) ? pathParts.slice(1).join("/") : pathParts.join("/");
    
    if (code === "en") {
      navigate(subPath ? `/${subPath}` : "/");
    } else {
      navigate(subPath ? `/${code}/${subPath}` : `/${code}`);
    }
  };

  return (
    <header className="w-full py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoArrow} alt="Dorivo" className="w-14 h-14 rounded-lg" />
        </div>
        <div className="flex items-center gap-1 flex-wrap justify-end">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLanguageSwitch(l.code)}
              className={`w-7 h-5 rounded overflow-hidden border-2 transition-all ${
                lang === l.code ? "border-primary scale-110" : "border-transparent opacity-70 hover:opacity-100"
              }`}
              title={l.label}
            >
              <img src={flagMap[l.code]} alt={l.label} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
