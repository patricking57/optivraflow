const plans = [
  {
    badge: "Elite",
    badgeColor: "bg-pink",
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
        <path
          d="M28.8167 7.40013L28.7 13.7168C28.6833 14.5835 29.2334 15.7335 29.9334 16.2501L34.0667 19.3835C36.7167 21.3835 36.2834 23.8335 33.1167 24.8335L27.7334 26.5168C26.8334 26.8001 25.8834 27.7835 25.6501 28.7001L24.3667 33.6001C23.35 37.4668 20.8167 37.8501 18.7167 34.4501L15.7833 29.7001C15.25 28.8335 13.9833 28.1835 12.9833 28.2335L7.41672 28.5168C3.43339 28.7168 2.30004 26.4168 4.90004 23.3835L8.20001 19.5501C8.81668 18.8335 9.1 17.5001 8.81667 16.6001L7.13342 11.2168C6.15008 8.05012 7.91673 6.30014 11.0667 7.33348L15.9834 8.95015C16.8168 9.21681 18.0667 9.03346 18.7667 8.5168L23.9001 4.8168C26.6668 2.81679 28.8833 3.98347 28.8167 7.40013Z"
          fill="#FF3AC8"
        />
        <path
          opacity="0.4"
          d="M35.7333 34.6166L30.6832 29.5666C30.1999 29.0833 29.3999 29.0833 28.9166 29.5666C28.4332 30.0499 28.4332 30.8499 28.9166 31.3333L33.9666 36.3833C34.2166 36.6333 34.5332 36.7499 34.8499 36.7499C35.1666 36.7499 35.4833 36.6333 35.7333 36.3833C36.2166 35.8999 36.2166 35.0999 35.7333 34.6166Z"
          fill="#FF3AC8"
        />
      </svg>
    ),
    name: "Basic",
    price: "Free",
    services: "05",
    features: [
      { text: "Full Access Library", included: true },
      { text: "Business & Finance Analyzing", included: true },
      { text: "Exclusive Templates", included: false },
      { text: "24 hour support", included: false },
      { text: "Customer Management", included: false },
      { text: "Sales of product", included: false },
    ],
    buttonClass:
      "bg-purple-300 text-purple-700 hover:bg-secondary hover:text-white",
    borderClass: "border-purple-200 dark:border-purple-800",
    bgClass: "bg-purple-100 dark:bg-secondary",
    headerBorderClass: "border-purple-300 dark:border-purple-700",
    textClass: "text-purple-700 dark:text-white",
  },
  {
    badge: "Special",
    badgeColor: "bg-yellow",
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
        <path
          d="M36.6667 10.0167V25.9833C36.6667 30.5833 32.9333 34.3167 28.3333 34.3167H11.6667C10.9 34.3167 10.1667 34.2167 9.44999 34.0167C8.41665 33.7333 8.08332 32.4167 8.84999 31.65L26.5667 13.9333C26.9333 13.5667 27.4833 13.4833 28 13.5833C28.5333 13.6833 29.1167 13.5333 29.5333 13.1333L33.8167 8.83333C35.3833 7.26666 36.6667 7.78333 36.6667 10.0167Z"
          fill="#FFD02C"
        />
        <path
          opacity="0.4"
          d="M24.4 12.7667L6.95001 30.2167C6.15001 31.0167 4.81668 30.8167 4.28334 29.8167C3.66668 28.6834 3.33334 27.3667 3.33334 25.9834V10.0167C3.33334 7.78337 4.61668 7.2667 6.18334 8.83337L10.4833 13.15C11.1333 13.7834 12.2 13.7834 12.85 13.15L18.8167 7.1667C19.4667 6.5167 20.5333 6.5167 21.1833 7.1667L24.4167 10.4C25.05 11.05 25.05 12.1167 24.4 12.7667Z"
          fill="#FFD02C"
        />
      </svg>
    ),
    name: "Standard",
    price: "$24",
    services: "05",
    features: [
      { text: "Full Access Library", included: true },
      { text: "Business & Finance Analyzing", included: true },
      { text: "Exclusive Templates", included: true },
      { text: "24 hour support", included: true },
      { text: "Customer Management", included: false },
      { text: "Sales of product", included: false },
    ],
    buttonClass:
      "bg-purple-700 hover:bg-white hover:text-secondary dark:hover:bg-white",
    borderClass: "border-purple-200 dark:border-purple-900",
    bgClass: "bg-secondary dark:bg-purple-900",
    headerBorderClass: "border-purple-700",
    textClass: "text-white",
  },
  {
    badge: "Startup",
    badgeColor: "bg-green",
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
        <path
          opacity="0.4"
          d="M19.95 37.1668C29.1547 37.1668 36.6167 29.7049 36.6167 20.5002C36.6167 11.2954 29.1547 3.8335 19.95 3.8335C10.7452 3.8335 3.28333 11.2954 3.28333 20.5002C3.28333 29.7049 10.7452 37.1668 19.95 37.1668Z"
          fill="#31D2AC"
        />
        <path
          d="M25.4167 19.3335H22.5833V12.7335C22.5833 11.2001 21.75 10.8835 20.7333 12.0335L20 12.8668L13.8 19.9168C12.95 20.8835 13.3 21.6668 14.5833 21.6668H17.4167V28.2668C17.4167 29.8001 18.25 30.1168 19.2667 28.9668L20 28.1335L26.2 21.0835C27.05 20.1168 26.7 19.3335 25.4167 19.3335Z"
          fill="#31D2AC"
        />
      </svg>
    ),
    name: "Enterprise",
    price: "$43",
    services: "05",
    features: [
      { text: "Full Access Library", included: true },
      { text: "Business & Finance Analyzing", included: true },
      { text: "Exclusive Templates", included: true },
      { text: "24 hour support", included: true },
      { text: "Customer Management", included: true },
      { text: "Sales of product", included: true },
    ],
    buttonClass:
      "bg-purple-300 text-purple-700 hover:bg-secondary hover:text-white",
    borderClass: "border-purple-200 dark:border-purple-800",
    bgClass: "bg-purple-100 dark:bg-secondary",
    headerBorderClass: "border-purple-300 dark:border-purple-700",
    textClass: "text-purple-700 dark:text-white",
  },
];

const CheckIcon = ({
  included,
  planIndex,
}: {
  included: boolean;
  planIndex: number;
}) => {
  const colors = ["#FF3AC8", "#FFD02C", "#31D2AC"];
  const color = included ? colors[planIndex] : "#8C879A";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        opacity="0.4"
        d="M15.48 10.7702L11.69 15.8202H6.08C5.12 15.8202 4.64 14.6602 5.32 13.9802L10.5 8.80023C11.33 7.97023 12.68 7.97023 13.51 8.80023L15.48 10.7702Z"
        fill={color}
      />
      <path
        d="M17.92 15.82H11.69L15.48 10.77L18.69 13.98C19.36 14.66 18.88 15.82 17.92 15.82Z"
        fill={color}
      />
    </svg>
  );
};

export const PricingSection = () => {
  return (
    <div className="pb-16 lg:pb-36">
      <div className="mx-auto max-w-[1142px] px-4">
        <div className="mx-auto pb-14 text-center lg:w-2/3 lg:pb-24">
          <h2 className="mb-5 text-[26px] leading-[1.75] font-bold text-purple-700 dark:text-white">
            Choose your plan
          </h2>
          <p className="text-lg md:text-xl">
            Flexible Plans For Small To Fast-Growing Business
          </p>
        </div>
        <div className="grid gap-x-[30px] gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-[32px] border ${plan.borderClass} ${plan.bgClass} px-5 pb-6 pt-9`}
            >
              <div
                className={`absolute -top-5 left-1/2 min-w-[110px] -translate-x-1/2 rounded-full ${plan.badgeColor} px-4 py-2 text-center font-bold text-secondary`}
              >
                {plan.badge}
              </div>
              <div>
                <div
                  className={`flex items-center justify-between gap-3 border-b ${plan.headerBorderClass} py-6 ${plan.textClass}`}
                >
                  <div className="inline-flex items-center gap-4">
                    <span>{plan.icon}</span>
                    <div className="space-y-2 font-semibold">
                      <h3 className={`text-xl ${plan.textClass}`}>
                        {plan.name}
                      </h3>
                      <div className="text-sm text-purple-600">
                        <span className="text-purple-400">
                          {plan.services}/
                        </span>{" "}
                        Service
                      </div>
                    </div>
                  </div>
                  <span className={`text-22 font-extrabold ${plan.textClass}`}>
                    {plan.price}
                  </span>
                </div>
                <div className="py-6">
                  <ul className="space-y-5 dark:text-purple-600">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex gap-3 ${
                          feature.included ? plan.textClass : ""
                        }`}
                      >
                        <span>
                          <CheckIcon
                            included={feature.included}
                            planIndex={index}
                          />
                        </span>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`border-t ${plan.headerBorderClass} pt-6`}>
                <a
                  href="/pricing"
                  className={`btn block rounded-[10px] ${plan.buttonClass}`}
                >
                  Choose your plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
