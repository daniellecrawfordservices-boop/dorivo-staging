import { useLanguage } from "@/i18n/LanguageContext";
import { legalTranslations } from "@/i18n/legalTranslations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const { lang } = useLanguage();
  const t = legalTranslations[lang];
  const isRTL = lang === "ar";

  return (
    <div className="min-h-screen bg-background text-foreground" dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      <div className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <h1 className="text-3xl font-bold mb-8">{t.privacyPolicyTitle}</h1>
          <p>{t.privacyIntro}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.commitmentTitle}</h2>
          <p>{t.commitmentText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.dataTypesTitle}</h2>
          <p><strong>{t.logData}</strong> {t.logDataDesc}</p>
          <p><strong>{t.deviceInfo}</strong> {t.deviceInfoDesc}</p>
          <p><strong>{t.userData}</strong> {t.userDataDesc}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.legalBasisTitle}</h2>
          <p>{t.legalBasisIntro}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t.legalBasis1}</li>
            <li>{t.legalBasis2}</li>
            <li>{t.legalBasis3}</li>
            <li>{t.legalBasis4}</li>
            <li>{t.legalBasis5}</li>
          </ul>
          <p>{t.legalBasisOutro}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.dataProtectionTitle}</h2>
          <p>{t.dataProtectionText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.howWeUseTitle}</h2>
          <p>{t.howWeUseIntro}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t.howWeUse1}</li>
            <li>{t.howWeUse2}</li>
            <li>{t.howWeUse3}</li>
            <li>{t.howWeUse4}</li>
            <li>{t.howWeUse5}</li>
            <li>{t.howWeUse6}</li>
            <li>{t.howWeUse7}</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.infoSharingTitle}</h2>
          <p>{t.infoSharingText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.crossBorderTitle}</h2>
          <p>{t.crossBorderText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.userRightsTitle}</h2>
          <p>{t.userRightsIntro}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t.userRight1}</li>
            <li>{t.userRight2}</li>
            <li>{t.userRight3}</li>
            <li>{t.userRight4}</li>
            <li>{t.userRight5}</li>
            <li>{t.userRight6}</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.cookieUsageTitle}</h2>
          <p>{t.cookieUsageText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.businessChangesTitle}</h2>
          <p>{t.businessChangesText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.externalLinksTitle}</h2>
          <p>{t.externalLinksText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.policyChangesTitle}</h2>
          <p>{t.policyChangesText}</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t.cookiePolicyTitle}</h2>
          <p>{t.cookiePolicyIntro}</p>

          <h3 className="text-lg font-semibold mt-6 mb-3">{t.cookieTypesTitle}</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t.cookieEssential}</li>
            <li>{t.cookiePerformance}</li>
            <li>{t.cookieFunctionality}</li>
            <li>{t.cookieAdvertising}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">{t.cookieHelpTitle}</h3>
          <p>{t.cookieHelpIntro}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t.cookieHelp1}</li>
            <li>{t.cookieHelp2}</li>
            <li>{t.cookieHelp3}</li>
            <li>{t.cookieHelp4}</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">{t.thirdPartyCookiesTitle}</h3>
          <p>{t.thirdPartyCookiesText}</p>

          <h3 className="text-lg font-semibold mt-6 mb-3">{t.managingCookiesTitle}</h3>
          <p>{t.managingCookiesText}</p>

          <h3 className="text-lg font-semibold mt-6 mb-3">{t.cookieUpdatesTitle}</h3>
          <p>{t.cookieUpdatesText}</p>

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

export default PrivacyPolicy;
