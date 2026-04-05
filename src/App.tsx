import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import IntroScreen from "@/components/IntroScreen";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Work from "@/pages/Work";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import About from "@/pages/About";
import Process from "@/pages/Process";
import Pricing from "@/pages/Pricing";
import Insights from "@/pages/Insights";
import InsightDetail from "@/pages/InsightDetail";
import Contact from "@/pages/Contact";
import BookCall from "@/pages/BookCall";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Only show intro once per browser session and prevent on page reloads
  const [showIntro, setShowIntro] = useState(() => {
    // Fallback for SSR or missing performance API
    if (typeof window === 'undefined' || !window.performance) {
      return !sessionStorage.getItem('intro_shown');
    }

    try {
      const navEntries = window.performance.getEntriesByType('navigation');
      if (navEntries && navEntries.length > 0) {
        const navEntry = navEntries[0] as any;
        if (navEntry.type === 'reload') {
          sessionStorage.setItem('intro_shown', '1');
          return false;
        }
      } else if (window.performance.navigation && window.performance.navigation.type === 1) {
        // Fallback for older browsers
        sessionStorage.setItem('intro_shown', '1');
        return false;
      }
    } catch (e) {
      console.warn('Could not determine navigation type', e);
    }

    return !sessionStorage.getItem('intro_shown');
  });

  useEffect(() => {
    // Set intro_shown immediately when intro is active, 
    // so if they refresh midway it won't play again.
    if (showIntro) {
      sessionStorage.setItem('intro_shown', '1');
    }
  }, [showIntro]);

  const handleIntroComplete = () => {
    sessionStorage.setItem('intro_shown', '1');
    setShowIntro(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/">
            <ScrollToTop />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:slug" element={<CaseStudyDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/process" element={<Process />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<InsightDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book-a-call" element={<BookCall />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
