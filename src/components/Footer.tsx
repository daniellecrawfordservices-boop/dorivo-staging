import { useNavigate, useLocation } from "react-router-dom";
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

const Footer = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageSwitch = (code: string) => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const langCodes = languages.map(l => l.code);
    const subPath = langCodes.includes(pathParts[0] as any) ? pathParts.slice(1).join("/") : pathParts.join("/");
    
    if (code === "en") {
      navigate(subPath ? `/${subPath}` : "/");
    } else {
      navigate(subPath ? `/${code}/${subPath}` : `/${code}`);
    }
  };

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
          <p>
            <span className="font-bold text-foreground">{t.riskNoticeLabel}</span>: {t.riskNotice}
          </p>
          <p>{t.riskDisclaimer}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4 border-t border-border">
          <div className="flex gap-6">
            <a href={lang === "en" ? "/privacy-policy" : `/${lang}/privacy-policy`} className="text-muted-foreground hover:text-foreground transition-colors">{t.privacyPolicy}</a>
            <a href={lang === "en" ? "/terms-conditions" : `/${lang}/terms-conditions`} className="text-muted-foreground hover:text-foreground transition-colors">{t.termsConditions}</a>
          </div>
          <p className="text-muted-foreground text-sm">
            Contact: hello@dorivo.net | +34915477225
            <br />
            4/F, 570-572 Nathan Rd, Mong Kok, Hong Kong
          </p>
          <p className="text-foreground font-medium text-sm">{t.allRightsReserved}</p>
        </div>
        <div className="flex items-center gap-1 flex-wrap pt-4">
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
    </footer>
  );
};

export default Footer;
