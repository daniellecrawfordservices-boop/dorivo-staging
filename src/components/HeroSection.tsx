import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import chartArrow from "@/assets/chart-arrow.png";
import bitcoinIcon from "@/assets/bitcoin-icon.png";
import trustfeedLogo from "@/assets/trustfeed-logo.svg";
import LeadForm from "@/components/LeadForm";
import LiveCounter from "@/components/LiveCounter";
import SpotsRemaining from "@/components/SpotsRemaining";
import RecentActivity from "@/components/RecentActivity";

const HeroSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { title: t.benefitEarn, desc: t.benefitEarnDesc },
    { title: t.benefitEasyEntry, desc: t.benefitEasyEntryDesc },
    { title: t.benefitLowRisk, desc: t.benefitLowRiskDesc },
  ];

  return (
    <section id="signup-form" className="py-12 md:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-between px-4">
            <img
              src={chartArrow}
              alt="Growth"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <img
              src={bitcoinIcon}
              alt="Bitcoin"
              className="w-12 h-12 md:w-16 md:h-16 animate-[spin-quarter_3s_ease-in-out_infinite]"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {t.heroTitle}
              <span className="text-primary">{t.heroHighlight1}</span>{" "}
              <span className="text-primary">{t.heroHighlight2}</span>!
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.heroDesc}
            </p>
            <p className="text-muted-foreground">
              <span className="text-primary font-medium cursor-pointer hover:underline">
                {t.heroSignup}
              </span>
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-7 h-7 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-muted-foreground">
              {t.heroRated}
              <span className="text-primary font-medium">
                {t.heroExcellent}
              </span>
              {t.heroOnTrustfeed}
            </p>
            <div className="flex justify-center">
              <img
                src={trustfeedLogo}
                alt="TrustFeed"
                className="h-14 md:h-16 cursor-pointer"
                onClick={() =>
                  window.open("https://trustfeed.io/dorivo", "_blank")
                }
              />
            </div>
          </div>

          <LiveCounter />
          <SpotsRemaining />

          <div className="flex flex-col gap-4 lg:hidden">
            {benefits.map((b, i) => (
              <BenefitCard key={i} title={b.title} desc={b.desc} />
            ))}
          </div>

          <RecentActivity />
        </div>

        <div className="flex gap-6">
          <LeadForm
            endpoint="https://api.dorivo.net/api/lead.php"
            pageName="dorivo"
            lp="119"
            afp="270"
            submitText={t.signUpNow}
            className="flex-1"
          />

          <div className="hidden lg:flex flex-col gap-4 w-48">
            {benefits.map((b, i) => (
              <BenefitCard key={i} title={b.title} desc={b.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="bg-card border border-border rounded-lg p-5 text-center">
    <h3 className="font-bold text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
  </div>
);

export default HeroSection;
