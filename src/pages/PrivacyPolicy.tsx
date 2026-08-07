const sections = [
  {
    title: "Overview",
    body: "This Privacy Policy describes what information we collect from customers, Infrastructure Hosts, and website visitors, and how we use it. It applies to our website, infrastructure services, and the Infrastructure Host program.",
  },
  {
    title: "Information we collect",
    body: "We collect information you provide directly, such as contact details submitted through our forms (name, email, phone, company, workload requirements) and Infrastructure Host application details (location, connectivity, and equipment-related information). Additional information, such as shipping address, identity verification, and tax information, is collected later in the onboarding process, only from applicants who progress to that stage.",
  },
  {
    title: "Device and network monitoring",
    body: "Company-owned equipment deployed at host locations is monitored for availability, performance, and security purposes. This monitoring is limited to the equipment itself and does not extend to a host's personal devices or personal network traffic.",
  },
  {
    title: "Host privacy",
    body: "A host's personal computer and personal files remain separate from company equipment. Hosted hardware is independently configured and managed by our technical team, and hosts are not asked to access, manage, or view customer data on that equipment.",
  },
  {
    title: "How we use information",
    body: "We use collected information to evaluate and process infrastructure requests and Host applications, provide technical support, manage billing and compensation, communicate service updates, and maintain the security of our network.",
  },
  {
    title: "Support access",
    body: "Our support and technical teams may access device configuration and monitoring data as needed to diagnose issues, but access to customer data on assigned machines is limited to what is necessary to provide support.",
  },
  {
    title: "Data sharing",
    body: "We do not sell personal information. Information may be shared with service providers who help us operate our infrastructure and business (such as shipping or payment processing) under confidentiality obligations, or as required by law.",
  },
  {
    title: "Data retention",
    body: "We retain information for as long as necessary to provide services, fulfill legal obligations, or resolve disputes. You may request access to, correction of, or deletion of your personal information by contacting us.",
  },
  {
    title: "Security",
    body: "We apply access controls, monitoring, and encryption where appropriate to protect information under our control. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Changes to this policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be reflected by updating the date on this page.",
  },
  {
    title: "Contact",
    body: "Questions about this Privacy Policy can be directed to our team through the Contact page.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="mx-auto max-w-[820px] px-4 py-16 sm:py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-secondary sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          [Placeholder — this page will be finalized with legal counsel before launch.]
        </p>
      </div>
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-xl font-bold text-secondary">
              {section.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
