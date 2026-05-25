import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { languages } from "@/i18n/translations";

const DOMAIN = "https://financelegend.net";

const HreflangTags = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove old hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    const pathParts = location.pathname.split("/").filter(Boolean);
    const langCodes = languages.map(l => l.code);
    const subPath = langCodes.includes(pathParts[0] as any) ? pathParts.slice(1).join("/") : pathParts.join("/");

    // Add hreflang for each language
    languages.forEach(l => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = l.code === "cz" ? "cs" : l.code;
      if (l.code === "en") {
        link.href = subPath ? `${DOMAIN}/${subPath}` : DOMAIN;
      } else {
        link.href = subPath ? `${DOMAIN}/${l.code}/${subPath}` : `${DOMAIN}/${l.code}`;
      }
      document.head.appendChild(link);
    });

    // x-default points to English
    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = subPath ? `${DOMAIN}/${subPath}` : DOMAIN;
    document.head.appendChild(xDefault);

    return () => {
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    };
  }, [location.pathname]);

  return null;
};

export default HreflangTags;
