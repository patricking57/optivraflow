const sections = [
  {
    title: "Overview",
    body: [
      "This Host Agreement outlines the terms under which an individual or entity (\"Host\") agrees to provide a physical location, electricity, and internet connectivity for company-owned computing equipment. This page is a summary for informational purposes; the executed Host Agreement provided during onboarding is the binding document.",
    ],
  },
  {
    title: "Equipment ownership",
    body: [
      "All computing hardware placed at a Host location remains the property of the company at all times. The Host does not purchase, own, sell, or acquire any interest in the equipment.",
    ],
  },
  {
    title: "Host obligations",
    body: [
      "The Host agrees to install equipment according to provided instructions, connect it to approved power and internet, keep it online whenever possible, report outages and hardware issues promptly, and protect the equipment from physical damage.",
    ],
  },
  {
    title: "Company obligations",
    body: [
      "The company agrees to provide the equipment, shipping, setup instructions, remote management, technical support, monitoring, and compensation according to the terms agreed during onboarding.",
    ],
  },
  {
    title: "Compensation",
    body: [
      "Compensation is based on equipment type, location, connectivity requirements, availability, and the specific terms agreed to during onboarding. Payment schedule and method are specified in the executed agreement.",
    ],
  },
  {
    title: "Access and privacy",
    body: [
      "The Host's personal devices, network, and files remain separate from company equipment. The Host is not required or permitted to access customer data on hosted equipment.",
    ],
  },
  {
    title: "Term and termination",
    body: [
      "Either party may end the hosting arrangement according to the notice terms specified in the executed agreement. Upon termination, the Host agrees to make the equipment available for retrieval.",
    ],
  },
  {
    title: "Maintenance access",
    body: [
      "The Host agrees to allow scheduled maintenance access — physical or remote — as reasonably required to keep the equipment operational.",
    ],
  },
];

const HostAgreement = () => {
  return (
    <div className="mx-auto max-w-[820px] px-4 py-16 sm:py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-secondary sm:text-4xl">
          Host Agreement
        </h1>
        <p className="text-sm text-muted-foreground">
          Summary for informational purposes. [Placeholder — full legal
          agreement to be finalized and provided during Host onboarding.]
        </p>
      </div>
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-xl font-bold text-secondary">
              {section.title}
            </h2>
            {section.body.map((p) => (
              <p key={p} className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default HostAgreement;
