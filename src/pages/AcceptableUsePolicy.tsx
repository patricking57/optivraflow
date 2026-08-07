const prohibited = [
  "Illegal activity of any kind",
  "Unauthorized access to systems, networks, or data",
  "Malware distribution or development for malicious purposes",
  "Fraud or deceptive practices",
  "Abuse of other users, networks, or services",
  "Unauthorized cryptocurrency mining",
  "Copyright or intellectual property infringement",
  "Attacks against third-party systems, including unauthorized penetration testing",
];

const AcceptableUsePolicy = () => {
  return (
    <div className="mx-auto max-w-[820px] px-4 py-16 sm:py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-secondary sm:text-4xl">
          Acceptable Use Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          This policy applies to all customers accessing computing
          infrastructure on our network.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 text-xl font-bold text-secondary">
            Legitimate purpose
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our infrastructure network exists to provide legitimate,
            authorized computing resources — for AI and ML development,
            software engineering, cybersecurity research, creative work, and
            enterprise workloads. Customers and Infrastructure Hosts are
            never asked to secretly route traffic, conceal identity, bypass
            geographic restrictions, or perform any other questionable
            activity.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-secondary">
            Prohibited activities
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            The following are prohibited on any infrastructure provided
            through our network:
          </p>
          <ul className="space-y-2.5">
            {prohibited.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-secondary">
            Reporting abuse
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you believe infrastructure on our network is being used in
            violation of this policy, contact our support team through the{" "}
            <a href="/support" className="text-primary hover:underline">
              Support page
            </a>{" "}
            or by email at{" "}
            <a href="mailto:iansmith@optivraflow.com" className="text-primary hover:underline">
              iansmith@optivraflow.com
            </a>
            . Reports are reviewed by our technical team, and confirmed
            violations may result in suspension or termination of access.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-secondary">
            Enforcement
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Violations of this Acceptable Use Policy may result in immediate
            suspension of access, termination of service, and, where
            required by law, reporting to appropriate authorities.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy;
