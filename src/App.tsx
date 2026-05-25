import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import HreflangTags from "@/components/HreflangTags";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CryptoMining from "./pages/articles/CryptoMining";

const queryClient = new QueryClient();

const WrappedIndex = () => (
  <LanguageProvider>
    <Index />
  </LanguageProvider>
);

const WrappedPrivacyPolicy = () => (
  <LanguageProvider>
    <PrivacyPolicy />
  </LanguageProvider>
);

const WrappedTermsConditions = () => (
  <LanguageProvider>
    <TermsConditions />
  </LanguageProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HreflangTags />
        <Routes>
          {/* English (root) */}
          <Route path="/" element={<WrappedIndex />} />
          <Route path="/privacy-policy" element={<WrappedPrivacyPolicy />} />
          <Route path="/terms-conditions" element={<WrappedTermsConditions />} />
          {/* All languages */}
          <Route path="/:lang" element={<WrappedIndex />} />
          <Route path="/:lang/privacy-policy" element={<WrappedPrivacyPolicy />} />
          <Route path="/:lang/terms-conditions" element={<WrappedTermsConditions />} />
          <Route path="*" element={<NotFound />} />
                {/* DOMAINER_ROUTE:CryptoMining */}
        <Route path="/articles/crypto-mining" element={<CryptoMining />} />
</Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
