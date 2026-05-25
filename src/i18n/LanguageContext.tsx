import { createContext, useContext, ReactNode } from "react";
import { useParams } from "react-router-dom";
import { translations, Language } from "./translations";

type TranslationType = typeof translations.en;

const LanguageContext = createContext<{ lang: Language; t: TranslationType }>({
  lang: "en",
  t: translations.en,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const validLang = (lang && lang in translations ? lang : "en") as Language;

  return (
    <LanguageContext.Provider value={{ lang: validLang, t: translations[validLang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
