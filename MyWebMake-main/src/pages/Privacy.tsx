import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const Privacy = () => (
  <>
    <Helmet><title>Privacy Policy | MyWebMake Websites</title></Helmet>
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide"><h1 className="font-heading text-4xl font-bold">Privacy Policy</h1><p className="text-primary-foreground/80 mt-2">Last updated: January 2024</p></div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly, including name, email, phone number, and project details when you contact us or request a quote.</p>
          <h2>How We Use Your Information</h2>
          <p>We use your information to respond to inquiries, provide quotes, deliver our services, and send relevant communications about your project.</p>
          <h2>Cookies & Analytics</h2>
          <p>We use cookies and analytics tools (like Google Analytics) to understand how visitors use our website. This helps us improve our services.</p>
          <h2>Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
          <h2>Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us at mywebmake0@gmail.com.</p>
          <h2>Contact</h2>
          <p>For privacy-related questions, contact us at mywebmake0@gmail.com.</p>
        </div>
      </section>
    </Layout>
  </>
);

export default Privacy;
