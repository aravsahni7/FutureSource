import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const serviceOptions = [
  'Digital Marketing Ads (PPC)',
  'Account Based Marketing (ABM)',
  'SEO Optimization',
  'Website',
];

export default function Contact() {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
    services: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      alert('Please select at least one service.');
      return;
    }

    // Handle form submission here (API / Email service)
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-editorial text-display-sm mb-4">
              {t('contact.success.title')}
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              {t('contact.success.text')}
            </p>
            <Button asChild variant="outline">
              <Link to="/">{t('nav.home')}</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero grain-overlay relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-overline uppercase tracking-widest mb-6">
              {language === 'en' ? 'Get In Touch' : 'Contactez-nous'}
            </span>
            <h1 className="font-editorial text-display-lg mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-body-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">{t('contact.form.company')}</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">{t('contact.form.website')}</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://"
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Services Required */}
                <div className="space-y-3">
                  <Label>Services Required</Label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {serviceOptions.map(service => (
                      <label
                        key={service}
                        className={cn(
                          'flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition',
                          formData.services.includes(service)
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:bg-muted'
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="h-4 w-4 accent-primary"
                        />
                        <span className="text-body-md">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="group">
                  {t('contact.form.submit')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="p-8 rounded-2xl bg-gradient-card border border-border">
                  <h3 className="font-editorial text-heading-xl mb-6">
                    {language === 'en'
                      ? 'Prefer to book directly?'
                      : 'Préférez réserver directement?'}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {language === 'en'
                      ? 'Schedule a 30-minute discovery call to discuss your growth goals.'
                      : 'Planifiez un appel découverte de 30 minutes.'}
                  </p>
                  <Button asChild className="w-full group">
                    <Link to="/book-a-call">
                      {t('nav.bookCall')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-6">
                  <InfoItem icon={Mail} title="Email" text="hello@futuresource.ca" />
                  <InfoItem icon={Mail} title={language === 'en' ? 'Phone' : 'Téléphone'} text="438 923 5809" />
                  <InfoItem
                    icon={Clock}
                    title={language === 'en' ? 'Response Time' : 'Temps de réponse'}
                    text={language === 'en' ? 'Within 24 hours' : 'Sous 24 heures'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoItem({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <p className="font-medium mb-1">{title}</p>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
