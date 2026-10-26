import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Statement & Legal Disclaimer",
  description:
    "ZhypLearn's Privacy Statement and Legal Disclaimer, covering how Zhypility InfoSolutions collects and uses information, and the terms governing use of this website.",
};

export default function LegalPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl font-bold text-charcoal">
        Privacy Statement &amp; Legal Disclaimer
      </h1>

      <nav aria-label="Legal page sections" className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
        <a href="#privacy" className="text-gold-dark hover:underline">
          Privacy Statement
        </a>
        <a href="#disclaimer" className="text-gold-dark hover:underline">
          Legal Disclaimer
        </a>
      </nav>

      {/* scroll-mt accounts for the sticky 92px header so a jump to the
          anchor doesn't land the heading underneath it. */}
      <article className="mt-14 scroll-mt-28" id="privacy">
        <h2 className="font-display text-2xl font-bold text-charcoal scroll-mt-28">Privacy Statement</h2>
        <p className="mt-2 text-sm text-gray-500">Last Updated: 26 October 2026</p>

        <div className="mt-6 flex flex-col gap-5 text-gray-700">
          <p>
            Zhypility InfoSolutions (&ldquo;Zhypility,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal
            information you share with us through the ZhypLearn website.
          </p>
          <p>
            This Privacy Statement explains what information we may collect, how we use it, when we
            may share it, and the choices available to you when you visit our website or contact us.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            1. Information We Collect
          </h3>
          <p>
            Depending on how you interact with our website, we may collect the following types of
            information:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Contact information:</strong> Your name, business email address, telephone
              number, company name, job title, and other information you voluntarily provide through
              enquiry or demo request forms.
            </li>
            <li>
              <strong>Communication information:</strong> The contents of messages, questions,
              feedback, or other communications you send to us.
            </li>
            <li>
              <strong>Technical information:</strong> Information such as your browser type, device
              information, IP address, operating system, and website usage data, where collected
              through our website infrastructure or technologies.
            </li>
            <li>
              <strong>Other information:</strong> Any additional information you voluntarily provide
              when interacting with our website or representatives.
            </li>
          </ul>
          <p>
            Please avoid submitting confidential business information or sensitive personal
            information through general website enquiry forms unless specifically requested through
            an appropriate channel.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            2. How We Use Your Information
          </h3>
          <p>We may use the information collected to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Respond to enquiries and demo requests.</li>
            <li>Provide information about ZhypLearn and our services.</li>
            <li>Communicate with prospective customers, clients, and business partners.</li>
            <li>Improve our website, content, products, and user experience.</li>
            <li>Maintain website functionality, security, and performance.</li>
            <li>Prevent misuse, spam, or other unauthorized activity.</li>
            <li>Comply with applicable legal obligations and protect our legitimate business interests.</li>
          </ul>
          <p>
            Where required by applicable law, we will obtain consent or establish another valid legal
            basis before processing personal information.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            3. Cookies and Similar Technologies
          </h3>
          <p>
            Our website or its hosting infrastructure may use cookies or similar technologies to
            support essential functionality, security, performance measurement, or website analytics.
          </p>
          <p>
            The technologies used may vary depending on the website configuration and services
            enabled. Where legally required, we will provide appropriate information and obtain
            consent before using non-essential cookies or similar technologies.
          </p>
          <p>You may also be able to manage cookies through your browser settings.</p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            4. Sharing of Information
          </h3>
          <p>We do not sell personal information to third parties as part of our ordinary business practices.</p>
          <p>We may share information, where appropriate and lawful, with:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Service providers supporting website hosting, communications, security, or website operations.</li>
            <li>Our employees or authorized representatives who need the information to perform their responsibilities.</li>
            <li>Professional advisers, auditors, or legal representatives where necessary.</li>
            <li>Government authorities, regulators, or other parties where required by law or necessary to protect legal rights.</li>
          </ul>
          <p>
            Third-party service providers may process information in accordance with their own terms
            and applicable contractual arrangements.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            5. Data Retention and Security
          </h3>
          <p>
            We retain personal information for as long as reasonably necessary for the purposes
            described in this statement, including responding to enquiries, maintaining business
            records, resolving disputes, and meeting applicable legal obligations.
          </p>
          <p>
            We take reasonable measures appropriate to the circumstances to protect information
            against unauthorized access, loss, misuse, alteration, or disclosure. However, no method
            of electronic transmission or storage can be guaranteed to be completely secure.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            6. Third-Party Websites and Services
          </h3>
          <p>
            Our website may contain links to third-party websites, applications, or services,
            including external product login pages.
          </p>
          <p>
            Those third parties operate independently and may have their own privacy policies, terms,
            and data-handling practices. We encourage you to review their policies before providing
            personal information. We are not responsible for the privacy practices of third-party
            services that we do not control.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            7. Your Privacy Rights
          </h3>
          <p>
            Depending on your location and applicable law, you may have rights to request access to,
            correction of, deletion of, or information about the processing of your personal
            information. You may also have the right to withdraw consent where processing is based on
            consent.
          </p>
          <p>
            Requests will be handled in accordance with applicable legal requirements, subject to
            relevant exceptions and obligations.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            8. Children&apos;s Privacy
          </h3>
          <p>
            Our website is intended primarily for business and professional audiences. We do not
            knowingly seek to collect personal information from children through this marketing
            website. If you believe a child has provided personal information to us, please contact
            us so that we can assess the matter and take appropriate action.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            9. Changes to This Statement
          </h3>
          <p>
            We may update this Privacy Statement from time to time to reflect changes in our website,
            business practices, technology, or legal requirements. The updated version will be
            published on this page with a revised &ldquo;Last Updated&rdquo; date.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            10. Contact Us
          </h3>
          <p>
            If you have questions about this Privacy Statement or wish to make a privacy-related
            request, please contact us through the official contact details provided on the ZhypLearn
            website.
          </p>
          <p className="font-semibold text-charcoal">
            Zhypility InfoSolutions
            <br />
            Website:{" "}
            <a
              href="https://zhypility.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark hover:underline"
            >
              https://zhypility.com
            </a>
            <br />
            Product: ZhypLearn
          </p>
        </div>
      </article>

      <article className="mt-16 scroll-mt-28 border-t border-gray-200 pt-14" id="disclaimer">
        <h2 className="font-display text-2xl font-bold text-charcoal scroll-mt-28">Legal Disclaimer</h2>
        <p className="mt-2 text-sm text-gray-500">Last Updated: 26 October 2026</p>

        <div className="mt-6 flex flex-col gap-5 text-gray-700">
          <p>
            The ZhypLearn website is operated by Zhypility InfoSolutions (&ldquo;Zhypility,&rdquo;
            &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) to provide general information
            about ZhypLearn, our learning management platform, and our related products and services.
          </p>
          <p>By accessing or using this website, you acknowledge the following terms.</p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            1. General Information
          </h3>
          <p>
            The information on this website is provided for general informational and business
            purposes. Although we make reasonable efforts to maintain accurate and current
            information, we do not warrant that all content is complete, accurate, current, or free
            from errors.
          </p>
          <p>Website content may be updated, modified, or removed without prior notice.</p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            2. Product Information and Capabilities
          </h3>
          <p>
            Descriptions of ZhypLearn features, functionality, and capabilities are provided for
            general informational purposes. Actual functionality, availability, compatibility, and
            performance may vary depending on product configuration, implementation, supported
            technologies, and other relevant factors.
          </p>
          <p>
            Illustrations, mockups, and conceptual product visuals, where used, may be representative
            rather than screenshots of the live product.
          </p>
          <p>
            Specific features, integrations, technical requirements, deliverables, and service
            commitments are subject to confirmation and, where applicable, the relevant written
            agreement.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            3. No Guarantee of Results
          </h3>
          <p>
            Any examples or descriptions of potential benefits are illustrative and should not be
            interpreted as a guarantee of particular business, training, learning, productivity,
            financial, or operational outcomes.
          </p>
          <p>
            Results may vary depending on individual circumstances, implementation, content quality,
            user engagement, and other factors.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            4. Intellectual Property
          </h3>
          <p>
            Unless otherwise stated, the text, graphics, branding, logos, visual elements, and other
            materials on this website are owned by or used with permission by Zhypility InfoSolutions
            or the respective rights holders.
          </p>
          <p>
            You may access the website for lawful informational and business purposes. You may not
            reproduce, distribute, modify, publish, commercially exploit, or otherwise use protected
            website materials without the necessary authorization, except where permitted by
            applicable law.
          </p>
          <p>All third-party names, trademarks, and logos remain the property of their respective owners.</p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            5. Third-Party Links and Services
          </h3>
          <p>
            This website may link to third-party websites, applications, or services for convenience.
            Such links do not necessarily constitute an endorsement of those services.
          </p>
          <p>
            Zhypility does not control third-party websites and is not responsible for their content,
            availability, terms, privacy practices, or security. Your use of third-party services is
            subject to their applicable terms and policies.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            6. Website Availability
          </h3>
          <p>
            We aim to keep this website accessible and functioning properly. However, we do not
            guarantee uninterrupted availability or that the website will always be free from
            technical issues, errors, or harmful components.
          </p>
          <p>We may modify, suspend, or discontinue parts of the website where reasonably necessary.</p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            7. Limitation of Liability
          </h3>
          <p>
            To the extent permitted by applicable law, Zhypility InfoSolutions will not be liable for
            indirect, incidental, special, consequential, or punitive losses arising from or related
            to the use of, or inability to use, this website or reliance on its general informational
            content.
          </p>
          <p>
            Nothing in this disclaimer excludes or limits liability where such exclusion or limitation
            is prohibited by applicable law.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            8. Professional Advice and Agreements
          </h3>
          <p>
            Information on this website does not constitute legal, financial, regulatory, or other
            professional advice.
          </p>
          <p>
            Product purchases, subscriptions, implementation services, and other commercial
            engagements, where applicable, are governed by their respective written agreements and
            applicable terms. In the event of a conflict, the applicable agreement will govern to the
            extent provided by law.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            9. Changes to This Disclaimer
          </h3>
          <p>
            We may revise this Legal Disclaimer from time to time. Updates will be published on this
            page with a revised &ldquo;Last Updated&rdquo; date.
          </p>

          <h3 className="font-display mt-4 text-lg font-bold text-charcoal scroll-mt-28">
            10. Contact Us
          </h3>
          <p>
            For questions regarding this Legal Disclaimer or the content of this website, please
            contact Zhypility InfoSolutions through the official contact details provided on the
            website.
          </p>
          <p className="font-semibold text-charcoal">
            Zhypility InfoSolutions
            <br />
            Website:{" "}
            <a
              href="https://zhypility.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark hover:underline"
            >
              https://zhypility.com
            </a>
            <br />
            Product: ZhypLearn
          </p>
        </div>
      </article>
    </section>
  );
}
