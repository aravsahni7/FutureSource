import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const Terms = () => (
  <>
    <Helmet><title>Terms of Service | MyWebMake Websites</title></Helmet>
    <Layout>
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide"><h1 className="font-heading text-4xl font-bold">Terms of Service</h1><p className="text-primary-foreground/80 mt-2">Last updated: December 2025</p></div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2>Services</h2>
          <p>MyWebMake Websites provides web design, development, and related digital services. Specific deliverables and timelines are outlined in individual project proposals.</p>
          <h2>Payment Terms</h2>
          <p>Payment terms are specified in each project proposal. Generally, we require a deposit to begin work, with remaining payments due at project milestones.</p>
          <h2>Client Responsibilities</h2>
          <p>Clients are responsible for providing content, feedback, and approvals in a timely manner. Delays in client response may affect project timelines.</p>
          <h2>Intellectual Property</h2>
          <p>Upon full payment, clients receive ownership of the final deliverables. We retain the right to showcase work in our portfolio unless otherwise agreed.</p>
          <h2>Revisions</h2>
          <p>Projects include a specified number of revision rounds. Additional revisions may incur extra charges as outlined in your proposal.</p>
          <h2>Limitation of Liability</h2>
          <p>Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, contact us at mywebmake0.gmail.com.</p>
        </div>
      </section>
    </Layout>
  </>
);

export default Terms;
