import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Cookies() {
  const { language, t } = useLanguage();

  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-editorial text-display-lg mb-8">
            {t('legal.cookies.title')}
          </h1>
          <p className="text-body-sm text-muted-foreground mb-12">
            {language === 'en' ? 'Last updated: January 2025' : 'Dernière mise à jour : Janvier 2025'}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'What Are Cookies' : 'Qu\'est-ce que les cookies'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.'
                  : 'Les cookies sont de petits fichiers texte placés sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Ils sont largement utilisés pour faire fonctionner les sites web plus efficacement et pour fournir des informations aux propriétaires de sites web.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'How We Use Cookies' : 'Comment nous utilisons les cookies'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed mb-4">
                {language === 'en'
                  ? 'We use cookies for the following purposes:'
                  : 'Nous utilisons les cookies aux fins suivantes :'
                }
              </p>
              <ul className="space-y-2">
                {[
                  { en: 'Essential cookies: Required for the website to function properly', fr: 'Cookies essentiels : Nécessaires au bon fonctionnement du site web' },
                  { en: 'Analytics cookies: Help us understand how visitors interact with our website', fr: 'Cookies analytiques : Nous aident à comprendre comment les visiteurs interagissent avec notre site web' },
                  { en: 'Preference cookies: Remember your language and other preferences', fr: 'Cookies de préférence : Mémorisent votre langue et autres préférences' },
                  { en: 'Marketing cookies: Track visitors across websites for advertising purposes', fr: 'Cookies marketing : Suivent les visiteurs sur les sites web à des fins publicitaires' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="text-body-md text-muted-foreground">{item[language]}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Third-Party Cookies' : 'Cookies tiers'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'Some cookies on our website are set by third parties such as Google Analytics, LinkedIn, and other marketing platforms. These third parties have their own privacy policies governing the use of cookies.'
                  : 'Certains cookies sur notre site web sont définis par des tiers tels que Google Analytics, LinkedIn et d\'autres plateformes marketing. Ces tiers ont leurs propres politiques de confidentialité régissant l\'utilisation des cookies.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Managing Cookies' : 'Gestion des cookies'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, if you disable cookies, some features of our website may not function properly.'
                  : 'La plupart des navigateurs web vous permettent de contrôler les cookies via leurs paramètres. Vous pouvez configurer votre navigateur pour refuser les cookies ou pour vous alerter lorsque des cookies sont envoyés. Cependant, si vous désactivez les cookies, certaines fonctionnalités de notre site web peuvent ne pas fonctionner correctement.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Updates to This Policy' : 'Mises à jour de cette politique'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.'
                  : 'Nous pouvons mettre à jour cette Politique des cookies de temps en temps. Tout changement sera publié sur cette page avec une date de révision mise à jour.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Contact Us' : 'Nous contacter'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'If you have any questions about our use of cookies, please contact us at privacy@futuresource.co.'
                  : 'Si vous avez des questions concernant notre utilisation des cookies, veuillez nous contacter à privacy@futuresource.co.'
                }
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
