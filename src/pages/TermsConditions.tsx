import { useLanguage } from "@/i18n/LanguageContext";
import { legalTranslations } from "@/i18n/legalTranslations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  const { lang } = useLanguage();
  const t = legalTranslations[lang];
  const isRTL = lang === "ar";

  return (
    <div className="min-h-screen bg-background text-foreground" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <div className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <h1 className="text-3xl font-bold mb-8">{t.termsTitle}</h1>
          <p>{t.termsIntro1}</p>
          <p>{t.termsIntro2}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.changesToTermsTitle}</h2>
          <p>{t.changesToTermsText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.permittedUseTitle}</h2>
          <p>{t.permittedUseText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.accountRegTitle}</h2>
          <p>{t.accountRegText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.feesTitle}</h2>
          <p>{t.feesText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.taxTitle}</h2>
          <p>{t.taxText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.riskDisclosureTitle}</h2>
          <p>{t.riskDisclosureText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.infoDisclaimerTitle}</h2>
          <p>{t.infoDisclaimerText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.affiliateTitle}</h2>
          <p>{t.affiliateText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.externalContentTitle}</h2>
          <p>{t.externalContentText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.ipTitle}</h2>
          <p>{t.ipText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.liabilityTitle}</h2>
          <p>{t.liabilityText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.severabilityTitle}</h2>
          <p>{t.severabilityText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.jurisdictionTitle}</h2>
          <p>{t.jurisdictionText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.transferabilityTitle}</h2>
          <p>{t.transferabilityText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.noLegalRelTitle}</h2>
          <p>{t.noLegalRelText}</p>

          <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground space-y-4">
            <p><strong className="text-foreground">{t.riskNoticeLabel}:</strong> {t.riskNoticeText}</p>
            <p>{t.riskDisclaimerText}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
