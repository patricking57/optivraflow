const sections = [
  {
    title: "Acceptance of terms",
    body: "By accessing or using this website or our infrastructure services, you agree to these Terms of Service. If you do not agree, do not use this website or our services.",
  },
  {
    title: "Description of service",
    body: "We provide company-owned, professionally managed computing hardware deployed across a distributed U.S. network, made available to authorized customers through secure remote access. We also operate an Infrastructure Host program under which approved hosts provide a physical location, power, and internet connectivity for our equipment in exchange for compensation under a separate Host Agreement.",
  },
  {
    title: "Eligibility and authorized use",
    body: "Access to computing infrastructure is limited to authorized customers who have been approved through our onboarding process. You agree to use assigned infrastructure only for lawful purposes and in accordance with our Acceptable Use Policy.",
  },
  {
    title: "Equipment ownership",
    body: "All computing hardware provided through our network remains the property of the company. Customers receive access rights, not ownership, to assigned equipment.",
  },
  {
    title: "Service availability",
    body: "We work to keep infrastructure available and performant, but we do not guarantee uninterrupted access. Scheduled maintenance, hardware issues, or connectivity problems at a host location may affect availability from time to time.",
  },
  {
    title: "Fees and billing",
    body: "Fees for infrastructure services and compensation for Infrastructure Hosts are set out in individual service agreements or the Host Agreement, as applicable, and are not published generally on this website.",
  },
  {
    title: "Limitation of liability",
    body: "To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of our website or infrastructure services.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these Terms of Service from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.",
  },
  {
    title: "Governing law",
    body: "[Placeholder — governing law and jurisdiction to be finalized with legal counsel.]",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be directed to our team through the Contact page.",
  },
];

const TermsOfService = () => {
  return (
    <div className="mx-auto max-w-[820px] px-4 py-16 sm:py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-secondary sm:text-4xl">
          Terms of Service
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

export default TermsOfService;
