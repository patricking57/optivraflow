export const hostRequirements = {
  basic: [
    "Located in an eligible U.S. location",
    "Secure indoor space",
    "Reliable electricity",
    "Stable broadband internet",
    "Ability to receive company equipment",
    "Ability to maintain equipment in a safe environment",
    "Smartphone for notifications and support",
    "Willingness to follow installation instructions",
    "Ability to communicate with support when necessary",
  ],
  additional: [
    "Wired Ethernet connection where required",
    "Minimum upload/download speed",
    "Low latency",
    "No restrictive ISP policies",
    "Appropriate ventilation",
    "Suitable temperature",
    "Safe electrical outlet",
  ],
};

export const hostResponsibilities = {
  is: [
    "Receiving company-owned equipment",
    "Installing it according to provided instructions",
    "Connecting it to approved power and internet",
    "Keeping the equipment online whenever possible",
    "Reporting outages",
    "Notifying support about hardware issues",
    "Protecting equipment from physical damage",
    "Allowing scheduled maintenance when necessary",
  ],
  isNot: [
    "Performing customer IT work",
    "Selling equipment",
    "Purchasing equipment",
    "Purchasing software",
    "Forwarding packages to unrelated third parties",
    "Accessing customer data",
    "Installing unauthorized software",
  ],
};

export const whatWeProvide = {
  company: [
    "Computing hardware",
    "Shipping",
    "Setup instructions",
    "Remote management",
    "Technical support",
    "Monitoring",
    "Equipment documentation",
    "Host compensation according to agreement",
  ],
  host: [
    "Physical location",
    "Electricity",
    "Internet connectivity",
    "Basic equipment care",
  ],
};

export const compensationStructure = [
  {
    title: "Monthly Hosting Fee",
    description: "Recurring compensation for hosting company-owned equipment.",
  },
  {
    title: "Electricity Reimbursement",
    description: "Where applicable, based on equipment power draw and location.",
  },
  {
    title: "Connectivity Allowance",
    description: "Where applicable, to offset the bandwidth used by hosted equipment.",
  },
  {
    title: "Performance / Availability Bonus",
    description: "Where applicable, tied to uptime and equipment availability.",
  },
];

export const hostApplicationProcess = [
  { step: 1, title: "Apply", description: "Submit the Infrastructure Host application." },
  { step: 2, title: "Location Review", description: "We review your location details for eligibility." },
  { step: 3, title: "Eligibility Screening", description: "We confirm power, connectivity, and space requirements." },
  { step: 4, title: "Interview / Verification", description: "A short call or verification step with our team." },
  { step: 5, title: "Host Agreement", description: "Review and sign the Host Agreement." },
  { step: 6, title: "Equipment Shipment", description: "Company-owned hardware is shipped to your location." },
  { step: 7, title: "Installation", description: "You install the equipment following provided instructions." },
  { step: 8, title: "Activation", description: "Our technical team remotely activates and configures the equipment." },
  { step: 9, title: "Ongoing Support", description: "Support is available for outages, issues, or questions." },
  { step: 10, title: "Monthly Compensation", description: "Compensation is issued according to the Host Agreement." },
];

export const hostFaqs = [
  {
    question: "What does an Infrastructure Host do?",
    answer:
      "An Infrastructure Host provides a secure physical location, reliable electricity, and stable internet connectivity for company-owned computing equipment, and keeps it powered on and connected.",
  },
  {
    question: "Who owns the equipment?",
    answer: "The company owns all computing hardware placed at a Host location. Hosts never purchase or own the equipment.",
  },
  {
    question: "How much space is required?",
    answer:
      "Space requirements vary by equipment type, but most configurations require a small, secure indoor area with ventilation and access to a power outlet.",
  },
  {
    question: "How much electricity does the equipment use?",
    answer:
      "Power draw depends on the specific hardware assigned to your location. Details are provided during onboarding, along with any applicable reimbursement.",
  },
  {
    question: "Who pays shipping?",
    answer: "The company covers shipping for company-owned equipment sent to and, where applicable, returned from a Host location.",
  },
  {
    question: "Who pays for repairs?",
    answer: "The company is responsible for repairing or replacing its own equipment. Hosts are not asked to pay for hardware repairs.",
  },
  {
    question: "What happens if the internet goes down?",
    answer:
      "Hosts are asked to report outages as soon as possible. Our technical team monitors connectivity remotely and will follow up on prolonged outages.",
  },
  {
    question: "What happens during a power outage?",
    answer:
      "Equipment will go offline until power is restored. Hosts should report the outage; no special action is required otherwise.",
  },
  {
    question: "Can I unplug the equipment?",
    answer:
      "Equipment should stay powered on and connected except for approved maintenance or in the case of a genuine safety concern, which should be reported to support.",
  },
  {
    question: "Can I travel while hosting equipment?",
    answer:
      "Yes, as long as the equipment remains powered, connected, and in a secure location, and you remain reachable for support notifications.",
  },
  {
    question: "What happens if I want to stop hosting?",
    answer:
      "You can end participation according to the terms of your Host Agreement. We will coordinate equipment retrieval and offboarding.",
  },
  {
    question: "How are hosts paid?",
    answer: "Compensation is issued according to the payment terms and schedule specified in your Host Agreement.",
  },
  {
    question: "Will I receive a tax form?",
    answer:
      "Hosts who meet applicable reporting thresholds will receive the required tax documentation in accordance with U.S. tax law.",
  },
  {
    question: "Can I host multiple devices?",
    answer:
      "Yes, subject to location eligibility, available space, power capacity, and approval from our team.",
  },
];
