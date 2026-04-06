import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ScrollTransition } from '@/components/animations/ScrollTransition';

export default function Privacy() {
  const { language, t } = useLanguage();

  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <ScrollTransition className="max-w-3xl mx-auto">
          <h1 className="font-editorial text-display-lg mb-8">
            {t('legal.privacy.title')}
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-body-lg text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6 italic">
              {language === 'en' 
                ? 'At FutureSource, we value your privacy. This simple policy outlines how we handle your information.'
                : 'Chez FutureSource, nous accordons une grande importance à votre vie privée. Cette politique simple décrit comment nous traitons vos informations.'}
            </p>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Information Collection' : 'Collecte d\'informations'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'We only collect information that you voluntarily provide to us through our contact forms or newsletter subscriptions, such as your name and email address.'
                  : 'Nous ne collectons que les informations que vous nous fournissez volontairement via nos formulaires de contact ou nos inscriptions à l\'infolettre, telles que votre nom et votre adresse courriel.'}
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'How We Use It' : 'Comment nous l\'utilisons'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'We use your information solely to respond to your inquiries, provide our services, and send you relevant updates if you have subscribed to our newsletter.'
                  : 'Nous utilisons vos informations uniquement pour répondre à vos demandes, fournir nos services et vous envoyer des mises à jour pertinentes si vous vous êtes abonné à notre infolettre.'}
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Data Sharing' : 'Partage de données'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'We do not sell or share your personal information with third parties for marketing purposes. Your data is kept secure and only used for the purposes intended.'
                  : 'Nous ne vendons ni ne partageons vos informations personnelles avec des tiers à des fins de marketing. Vos données sont conservées en sécurité et uniquement utilisées aux fins prévues.'}
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-body-lg font-medium">
                {language === 'en' ? 'Contact us:' : 'Contactez-nous :'} <a href="mailto:privacy@futuresource.ca" className="text-primary hover:underline">privacy@futuresource.ca</a>
              </p>
            </section>
          </div>
        </ScrollTransition>
      </div>
    </section>
  );
}
