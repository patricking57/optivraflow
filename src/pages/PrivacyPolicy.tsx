import { useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";

import { NewsletterSection } from "@/components/NewsletterSection";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="overflow-x-hidden w-full mx-auto pt-10 md:pt-16">
        <div className="mx-auto max-w-[1536px] px-4">
          <div className="relative mx-auto pb-14 text-center xl:pb-24">
            <h1
              className="text-4xl font-extrabold leading-tight text-purple-700 dark:text-white lg:text-[56px]"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Privacy Policy
            </h1>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                Privacy policy
              </h2>

              <div className="space-y-5 leading-[30px]">
                <p>
                  At Optivraflow, accessible through our website, one of our main
                  priorities is the privacy of our visitors and clients. This
                  Privacy Policy document contains types of information that is
                  collected and recorded by Optivraflow and how we use it.
                </p>

                <p>
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us
                  through email at privacy@optivraflow.com or through our contact
                  form.
                </p>

                <p>
                  This privacy policy applies to our online activities, software
                  services, and client interactions. It is valid for visitors to
                  our website, users of our software services, and clients who
                  engage with our development services. This policy is not
                  applicable to any information collected offline or via
                  channels other than our official website and services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                Consent
              </h2>

              <div className="space-y-5 leading-[30px]">
                <p>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>

                <p>
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website. Cookies help us retrieve user
                  preferences, analyze website traffic, and enable functionality
                  of certain areas. We use both session cookies (temporary) and
                  persistent cookies (stored on your device). You can control
                  cookie preferences through your browser settings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                Information we collect
              </h2>

              <div className="space-y-5 leading-[30px]">
                <p>
                  The personal information that you are asked to provide &amp;
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  info.
                </p>

                <p>
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and/or attachments you may
                  send us, and any other information you may choose to provide.
                </p>

                <p>
                  When you register for an Account or engage our software
                  development services, we may ask for your contact information,
                  including items such as name, company name, address, email
                  address, telephone number, and project requirements.
                </p>

                <p>
                  For software development projects, we may collect technical
                  information, business requirements, and other data necessary
                  to deliver our services effectively.
                </p>
              </div>
            </section>

            <section>
              <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                How we use your information
              </h2>

              <div className="space-y-5 leading-[30px]">
                <p>
                  We use the information we collect in various ways, including
                  to:
                </p>

                <ul className="list-disc ps-7">
                  <li>
                    Provide, operate, and maintain our website and software
                    services
                  </li>
                  <li>
                    Deliver software development services and fulfill project
                    requirements
                  </li>
                  <li>
                    Improve, personalize, and expand our website and service
                    offerings
                  </li>
                  <li>
                    Understand and analyze how you use our website and services
                  </li>
                  <li>
                    Develop new software products, services, features, and
                    functionality
                  </li>
                  <li>
                    Communicate with you regarding projects, updates, support,
                    and service-related matters
                  </li>
                  <li>
                    Process payments and manage client accounts and contracts
                  </li>
                  <li>
                    Send you technical updates, security notices, and service
                    announcements
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                Links to Other Sites/Apps
              </h2>

              <div className="space-y-5 leading-[30px]">
                <p>
                  Our website may contain links to other websites, third-party
                  services, or software tools that may collect personally
                  identifiable information about you. Optivraflow is not
                  responsible for the privacy practices or the content of those
                  linked websites or services. We encourage you to review the
                  privacy policies of any third-party sites you visit.
                </p>

                <p>
                  When we integrate third-party services (such as cloud
                  platforms, payment processors, or development tools) into our
                  software solutions, their privacy policies will also apply to
                  your use of those services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                Security Precautions
              </h2>

              <div className="space-y-5 leading-[30px]">
                <p>
                  Optivraflow implements stringent security measures to protect
                  against the loss, misuse, and alteration of information under
                  our control. We use industry-standard encryption technologies,
                  secure servers, and access controls to safeguard your data.
                </p>

                <p>
                  For software development projects, we maintain strict
                  confidentiality and security protocols. Client data, source
                  code, and project information are protected through encrypted
                  storage, secure communication channels, and restricted access
                  controls. We follow best practices for data protection and
                  comply with relevant data protection regulations.
                </p>

                <p>
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your information, we
                  cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                Data Retention and Deletion
              </h2>

              <div className="space-y-5 leading-[30px]">
                <p>
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this Privacy Policy,
                  unless a longer retention period is required or permitted by
                  law. For active clients, we retain project-related data for
                  the duration of the service agreement and as required for
                  contractual obligations.
                </p>

                <p>
                  You have the right to request access to, correction of, or
                  deletion of your personal information. To make such a request,
                  please contact us at privacy@optivraflow.com. We will respond
                  to your request within a reasonable timeframe.
                </p>
              </div>
            </section>

            <section>
              <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                Choice/Opt-Out
              </h2>

              <div className="space-y-5 leading-[30px]">
                <p>
                  We provide all users with the opportunity to opt-out of
                  receiving non-essential (promotional, marketing-related)
                  communications from us. You can unsubscribe from marketing
                  emails by clicking the unsubscribe link in any marketing email
                  or by contacting us directly.
                </p>

                <p>
                  Please note that even if you opt-out of marketing
                  communications, we may still send you important
                  service-related messages, project updates, and security
                  notices that are necessary for the provision of our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                Changes to This Privacy Policy
              </h2>

              <div className="space-y-5 leading-[30px]">
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last Updated" date. We encourage
                  you to review this Privacy Policy periodically for any
                  changes.
                </p>

                <p>
                  Changes to this Privacy Policy are effective when they are
                  posted on this page. Your continued use of our website and
                  services after any changes indicates your acceptance of the
                  updated Privacy Policy.
                </p>
              </div>
            </section>
          </div>

          <div className="pt-16 lg:pt-24">
            <NewsletterSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
