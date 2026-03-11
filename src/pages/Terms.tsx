import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Terms() {
  const { language, t } = useLanguage();

  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-editorial text-display-lg mb-8">
            {t('legal.terms.title')}
          </h1>
          <p className="text-body-sm text-muted-foreground mb-12">
            {language === 'en' ? 'Last updated: January 2025' : 'Dernière mise à jour : Janvier 2025'}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Acceptance of Terms' : 'Acceptation des conditions'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'By accessing and using our website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
                  : 'En accédant et en utilisant notre site web et nos services, vous acceptez d\'être lié par ces Conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Services Description' : 'Description des services'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'FutureSource provides digital marketing services including paid advertising, SEO, content strategy, and conversion rate optimization. The specific scope of services will be defined in individual client agreements.'
                  : 'FutureSource fournit des services de marketing numérique incluant la publicité payante, le SEO, la stratégie de contenu et l\'optimisation du taux de conversion. La portée spécifique des services sera définie dans les ententes individuelles avec les clients.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Client Obligations' : 'Obligations du client'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'Clients agree to provide accurate information, timely feedback, and access to necessary accounts and platforms required for service delivery. Clients are responsible for ensuring they have the rights to all content and materials provided to us.'
                  : 'Les clients acceptent de fournir des informations exactes, des commentaires en temps opportun et un accès aux comptes et plateformes nécessaires à la prestation des services. Les clients sont responsables de s\'assurer qu\'ils ont les droits sur tout le contenu et les matériaux qui nous sont fournis.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Payment Terms' : 'Conditions de paiement'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'Payment terms will be specified in individual service agreements. Unless otherwise agreed, invoices are due within 14 days of receipt. Late payments may incur additional charges.'
                  : 'Les conditions de paiement seront spécifiées dans les ententes de service individuelles. Sauf accord contraire, les factures sont dues dans les 14 jours suivant leur réception. Les retards de paiement peuvent entraîner des frais supplémentaires.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Limitation of Liability' : 'Limitation de responsabilité'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'FutureSource shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid for the services in question.'
                  : 'FutureSource ne sera pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs découlant de l\'utilisation de nos services. Notre responsabilité totale ne dépassera pas les frais payés pour les services en question.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Termination' : 'Résiliation'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'Either party may terminate services with 30 days written notice. Upon termination, client will be responsible for payment of all services rendered up to the termination date.'
                  : 'L\'une ou l\'autre des parties peut résilier les services avec un préavis écrit de 30 jours. À la résiliation, le client sera responsable du paiement de tous les services rendus jusqu\'à la date de résiliation.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Governing Law' : 'Loi applicable'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'These terms shall be governed by and construed in accordance with the laws of the Province of Quebec, Canada.'
                  : 'Ces conditions seront régies et interprétées conformément aux lois de la province de Québec, Canada.'
                }
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
