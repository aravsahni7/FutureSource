import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { services } from '@/data/content';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/work', label: t('nav.work') },
    { href: '/about', label: t('nav.about') },
    { href: '/process', label: t('nav.process') },
    { href: '/pricing', label: language === 'en' ? 'Pricing' : 'Tarifs' },
    { href: '/insights', label: t('nav.insights') },
    { href: '/contact', label: t('nav.contact') },
  ];

  // Hide the Work link from the top navigation for now
  const visibleNavLinks = navLinks.filter(link => link.href !== '/work');

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <Logo variant="full" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {visibleNavLinks.map((link) => {
                if (link.href === '/services') {
                  return (
                    <NavigationMenu key={link.href} className="flex justify-center">
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger 
                            className={cn(
                              "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent h-auto p-0",
                              "transition-colors duration-300 outline-none [&_svg]:hidden"
                            )}
                            onClick={() => navigate(link.href)}
                          >
                            <span
                              className={cn(
                                'text-[15px] font-medium transition-colors duration-300 link-underline flex items-center',
                                isActive(link.href)
                                  ? 'text-foreground'
                                  : 'text-muted-foreground hover:text-foreground'
                              )}
                            >
                              {link.label}
                            </span>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="md:w-auto mt-2">
                            <ul className="w-64 p-3 bg-background/80 backdrop-blur-md border-border/50 shadow-editorial rounded-xl flex flex-col gap-1">
                              {services.map((service) => (
                                <li key={service.id}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={`/services/${service.slug}`}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                                    >
                                      <div className="font-medium text-[15px] group-hover:text-primary transition-colors">
                                        {service.title[language]}
                                      </div>
                                      <p className="text-xs text-muted-foreground line-clamp-1 leading-snug">
                                        {service.tagline[language]}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      'text-[15px] font-medium transition-colors duration-300 link-underline',
                      isActive(link.href)
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center gap-1 bg-secondary/50 rounded-full p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={cn(
                    'px-3 py-1.5 text-caption font-medium rounded-full transition-all duration-300',
                    language === 'en'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={cn(
                    'px-3 py-1.5 text-caption font-medium rounded-full transition-all duration-300',
                    language === 'fr'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  FR
                </button>
              </div>

              {/* CTA Button */}
              <Button asChild variant="default" size="sm">
                <Link to="/book-a-call">{t('nav.bookCall')}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 -mr-2"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-500',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            'absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-editorial',
            'transform transition-transform duration-500 ease-out',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            {/* Navigation Links */}
            <nav className="flex-1 space-y-1 overflow-y-auto">
              {visibleNavLinks.map((link, index) => {
                if (link.href === '/services') {
                  return (
                    <div key={link.href} style={{ animationDelay: `${index * 50}ms` }}>
                      <Link
                        to={link.href}
                        className={cn(
                          'block py-4 text-heading-lg font-editorial transition-all duration-300',
                          'border-b border-border/50',
                          isActive(link.href)
                            ? 'text-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:pl-2'
                        )}
                      >
                        {link.label}
                      </Link>
                      <div className="pl-4 border-b border-border/50 pb-2">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-3 text-body-md text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {service.title[language]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      'block py-4 text-heading-lg font-editorial transition-all duration-300',
                      'border-b border-border/50',
                      isActive(link.href)
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:pl-2'
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-6 border-t border-border">
              {/* Language Toggle */}
              <div className="flex items-center gap-4">
                <span className="text-body-sm text-muted-foreground">Language:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={cn(
                      'px-4 py-2 text-body-sm font-medium rounded-lg transition-all',
                      language === 'en'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    )}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('fr')}
                    className={cn(
                      'px-4 py-2 text-body-sm font-medium rounded-lg transition-all',
                      language === 'fr'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    )}
                  >
                    Français
                  </button>
                </div>
              </div>

              {/* CTA */}
              <Button asChild className="w-full" size="lg">
                <Link to="/book-a-call">{t('nav.bookCall')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
