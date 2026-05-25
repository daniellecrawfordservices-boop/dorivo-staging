import { useEffect, useMemo, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { useLanguage } from "@/i18n/LanguageContext";

type ApiResponse = {
  id?: string | number;
  url?: string;
  message?: string;
  error?: string;
};

type LeadFormProps = {
  endpoint: string;
  pageName: string;
  language?: string;
  lp?: string;
  afp?: string;
  sub1?: string;
  sub2?: string;
  sub3?: string;
  referrer?: string;
  title?: string;
  submitText?: string;
  className?: string;
};

export default function LeadForm({
  endpoint,
  pageName,
  lp,
  afp,
  sub1,
  sub2,
  sub3,
  referrer,
  submitText,
  className = "",
}: LeadFormProps) {
  const { t, lang: currentLang } = useLanguage();

  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<any>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const actualUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  const detectedReferrer = useMemo(() => {
    if (referrer) return referrer;
    if (typeof document === "undefined") return "";
    return document.referrer || "";
  }, [referrer]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timer = setTimeout(() => {
      if (phoneInputRef.current && !itiRef.current) {
        itiRef.current = intlTelInput(phoneInputRef.current, {
          initialCountry: "auto",
          nationalMode: true,
          separateDialCode: true,
          autoPlaceholder: "aggressive",
          strictMode: true,
          formatAsYouType: true,
          allowedNumberTypes: null,
          loadUtils: () => import("intl-tel-input/utils"),

          geoIpLookup: async (success, failure) => {
            try {
              const res = await fetch("https://ipapi.co/json/");
              if (!res.ok) throw new Error("ipapi failed");

              const data = await res.json();
              const countryCode = (data?.country_code || "").toLowerCase();

              if (countryCode) {
                success(countryCode as Parameters<typeof success>[0]);
                return;
              }

              throw new Error("No country code from ipapi");
            } catch {
              try {
                const res = await fetch("https://api.dorivo.net/api/geoLocation.php");
                if (!res.ok) throw new Error("fallback failed");

                const data = await res.json();
                const fallbackCountry = (data?.iso || "us").toLowerCase();

                success(fallbackCountry as Parameters<typeof success>[0]);
              } catch {
                success("us" as Parameters<typeof success>[0]);
                failure();
              }
            }
          },
        });
      }
    }, 0);

    return () => {
      clearTimeout(timer);
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, []);

  const inputClass =
    "h-14 w-full rounded-lg border border-white/20 bg-white/5 px-4 text-base text-white placeholder:text-white/50 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30";

  const labelClass = "mb-2 block text-base font-medium text-white";

  const getPhoneErrorMessage = (errorCode?: number) => {
    switch (errorCode) {
      case 1:
        return "Invalid country code";
      case 2:
        return "Phone number is too short";
      case 3:
        return "Phone number is too long";
      case 4:
        return "Invalid phone number";
      case 5:
        return "Invalid phone number";
      default:
        return "Please enter a valid phone number";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      setLoading(true);

      const iti = itiRef.current;
      const rawPhone = phoneInputRef.current?.value?.trim() || "";

      if (!iti || !rawPhone) {
        setErrorMessage("Please enter a phone number");
        return;
      }

      if (rawPhone.startsWith("+")) {
        setErrorMessage("Enter the phone number without the country code");
        return;
      }

      if (iti.promise) {
        await iti.promise;
      }

      const validationError = iti.getValidationError?.();

      const isValidPhone = iti.isValidNumberPrecise?.() ?? false;

      if (!isValidPhone) {
        setErrorMessage(getPhoneErrorMessage(validationError));
        return;
      }

      const fullPhone = iti.getNumber?.() || "";

      const e164Regex = /^\+[1-9]\d{6,14}$/;
      if (!e164Regex.test(fullPhone)) {
        setErrorMessage("Phone number must be in valid E.164 format");
        return;
      }

      const countryData = iti.getSelectedCountryData?.();
      const countryIso = countryData?.iso2?.toUpperCase() || "";
      const prefix = countryData?.dialCode || "";

      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("phone", fullPhone);
      formData.append("prefix", prefix);
      formData.append("language", currentLang);
      formData.append("actual_url", actualUrl);
      formData.append("page_name", pageName);
      formData.append("country_iso", countryIso);

      if (lp) formData.append("lp", lp);
      if (afp) formData.append("afp", afp);
      if (sub1) formData.append("sub_1", sub1);
      if (sub2) formData.append("sub_2", sub2);
      if (sub3) formData.append("sub_3", sub3);
      if (detectedReferrer) formData.append("referrer", detectedReferrer);

      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data: ApiResponse = await res.json();

      if (data.error) {
        setErrorMessage(data.error);
        return;
      }

      setSuccessMessage(data.message || t.formSuccess);

      if (data.url) {
        setTimeout(() => {
          window.location.href = data.url!;
        }, 1200);
      }
    } catch {
      setErrorMessage(t.formError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md ${className}`}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>{t.firstName}</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t.firstName}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>{t.lastName}</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={t.lastName}
              required
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>{t.email}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.email}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>{t.phone}</label>
          <div className="phone-field">
            <input
              ref={phoneInputRef}
              type="tel"
              placeholder={t.phone}
              required
              className={inputClass}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="h-14 w-full rounded-lg bg-emerald-400 text-base font-semibold text-black transition hover:bg-emerald-300 disabled:opacity-60"
        >
          {loading ? t.formLoading : submitText || t.signUpNow}
        </button>

        {successMessage && (
          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
