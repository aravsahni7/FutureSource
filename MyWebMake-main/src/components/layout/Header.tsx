import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { siteConfig, navigation } from "@/data/siteData";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import the logo from src/assets (fixes production)
import logoImg from "@/assets/ChatGPT Image Dec 24, 2025, 08_00_51 AM.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-lg border-b border-border text-foreground"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center overflow-hidden ${
                  isScrolled ? "bg-accent" : "bg-white"
                }`}
              >
                <img
                  src={logoImg}
                  alt="MyWebMake Websites logo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base md:text-lg leading-tight">
                  MyWebMake
                </span>
                <span className="text-[10px] md:text-xs font-medium -mt-0.5 hidden sm:block">
                  Websites
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation
              .filter((item) => item.name !== "Blog")
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-accent bg-accent/10"
                      : isScrolled
                      ? "text-foreground hover:text-accent hover:bg-muted"
                      : "text-white hover:text-accent hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className={`transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <Link to="/quote">{siteConfig.ctas.secondary}</Link>
            </Button>

            <Button
              variant="accent"
              size="sm"
              asChild
              className={`transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                {siteConfig.ctas.primary}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container-wide py-4 space-y-4">
              <nav className="flex flex-col gap-1">
                {navigation
                  .filter((item) => item.name !== "Blog")
                  .map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-accent bg-accent/10"
                          : isScrolled
                          ? "text-foreground hover:text-accent hover:bg-muted"
                          : "text-white hover:text-accent hover:bg-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
              </nav>

              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button
                  variant="outline"
                  asChild
                  className={`w-full justify-center transition-colors ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  <Link to="/quote">{siteConfig.ctas.secondary}</Link>
                </Button>

                <Button variant="accent" asChild className="w-full justify-center">
                  <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4" />
                    {siteConfig.ctas.primary}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
