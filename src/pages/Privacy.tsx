import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Privacy() {
  const { language, t } = useLanguage();

  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-editorial text-display-lg mb-8">
            {t('legal.privacy.title')}
          </h1>
          <p className="text-body-sm text-muted-foreground mb-12">
            {language === 'en' ? 'Last updated: January 2025' : 'Dernière mise à jour : Janvier 2025'}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Information We Collect' : 'Informations que nous collectons'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, company name, and any other information you choose to provide.'
                  : 'Nous collectons les informations que vous nous fournissez directement, comme lorsque vous remplissez un formulaire de contact, vous abonnez à notre infolettre ou communiquez avec nous. Cela peut inclure votre nom, adresse courriel, nom d\'entreprise et toute autre information que vous choisissez de fournir.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'How We Use Your Information' : 'Comment nous utilisons vos informations'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'We use the information we collect to provide, maintain, and improve our services, to communicate with you about our services, and to send you marketing communications (with your consent).'
                  : 'Nous utilisons les informations collectées pour fournir, maintenir et améliorer nos services, pour communiquer avec vous au sujet de nos services et pour vous envoyer des communications marketing (avec votre consentement).'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Information Sharing' : 'Partage d\'informations'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or serving you.'
                  : 'Nous ne vendons, n\'échangeons ni ne transférons autrement vos informations personnelles à des tiers. Cela n\'inclut pas les tiers de confiance qui nous aident à exploiter notre site web, à mener nos activités ou à vous servir.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Data Security' : 'Sécurité des données'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
                  : 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l\'accès non autorisé, la modification, la divulgation ou la destruction.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Your Rights' : 'Vos droits'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails.'
                  : 'Vous avez le droit d\'accéder, de corriger ou de supprimer vos informations personnelles. Vous pouvez également vous désabonner des communications marketing à tout moment en cliquant sur le lien de désabonnement dans nos courriels.'
                }
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-heading-xl mb-4">
                {language === 'en' ? 'Contact Us' : 'Nous contacter'}
              </h2>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'If you have any questions about this Privacy Policy, please contact us at privacy@futuresource.co.'
                  : 'Si vous avez des questions concernant cette Politique de confidentialité, veuillez nous contacter à privacy@futuresource.co.'
                }
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
