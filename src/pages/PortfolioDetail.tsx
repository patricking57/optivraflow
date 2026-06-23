import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { portfolioProjects } from "@/data/portfolioData";

const PortfolioDetail = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const project = portfolioProjects.find((p) => p.slug === projectSlug);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-white">
          Case study not found
        </h1>
        <Link
          to="/insights"
          className="mt-4 inline-block text-primary hover:underline"
        >
          Back to case studies
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <div className="overflow-x-hidden">
        <div className="mx-auto max-w-[1536px] px-4 pt-12 pb-12 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
            <div
              className="space-y-6 text-center lg:text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary lg:justify-start">
                <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                  {project.category}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs text-primary shadow-sm">
                  {project.type}
                </span>
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-purple-700 dark:text-white md:text-4xl lg:text-[48px]">
                {project.title}
              </h1>
              <p className="text-lg text-purple-600 dark:text-purple-300">
                {project.heroDescription}
              </p>

              <div className="grid gap-4 pt-4 text-sm text-purple-700 dark:text-purple-200 sm:grid-cols-3 sm:text-base">
                <div>
                  <p className="text-xs uppercase tracking-wide text-purple-400">
                    Client
                  </p>
                  <p className="font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-purple-400">
                    Industry
                  </p>
                  <p className="font-semibold">{project.industry}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-purple-400">
                    Timeline
                  </p>
                  <p className="font-semibold">{project.timeline}</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white nav-link hover:bg-secondary border"
                >
                  Start a similar project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-3xl shadow-[10px_18px_45px_rgba(15,23,42,0.18)]"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overview & Goals Section */}
      <div className="overflow-x-hidden bg-purple-50/60 dark:bg-purple-950/40">
        <div className="mx-auto max-w-[1536px] px-4 py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
            <div
              className="space-y-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="text-2xl font-bold text-purple-700 dark:text-white">
                Project overview
              </h2>
              <p className="text-lg text-purple-700/80 dark:text-purple-200">
                {project.slug === "ai-care-coordination-platform"
                  ? "We built Butterflies AI to revolutionize how people interact with artificial intelligence. Instead of cold, robotic interactions, we created a platform where personal AIs become genuine companions - complete with personalities, the ability to share photos, and even take pictures together in real life."
                  : project.slug === "ringfree-voip-platform"
                  ? "We developed Ringfree as a comprehensive cloud-based business VoIP and unified communications provider that helps teams handle calls, video meetings, and messaging from anywhere on any device. The platform focuses on reliable call quality, remote and hybrid work enablement, and highly hands-on, US-based customer support for small and mid-sized businesses."
                  : project.slug === "mlr-live-stream-multicam"
                  ? "We developed a comprehensive live streaming application for a professional sports league that captures and plays back all camera angles from all matches, both live and on demand. The app enables field operators to add markers in real-time during matches, with seamless multicam switching capabilities for complete match coverage."
                  : project.slug === "ai-slack-airtable-automation"
                  ? "We built an intelligent automation workflow that streamlines content creation from voice notes to social media posting. Users send voice notes in Slack channels, which are automatically transcribed, processed by AI to generate content, saved to Airtable for review, and upon approval, posted to social media platforms including Instagram with support for images, text, and carousel posts."
                  : project.slug === "roxys-pub-pos-system"
                  ? "We developed a custom Java-based point of sale system for Roxy's Pub, a historic neighborhood bar and restaurant in downtown West Palm Beach. The system was built to handle the fast-paced environment of a busy pub serving 64+ beers on tap, award-winning wings, and a full menu late into the night, with support for sports events, live music, and rooftop parties."
                  : project.slug === "sally-ai-meeting-assistant"
                  ? "We built Sally as an intelligent AI meeting assistant that revolutionizes how teams capture, process, and act on conversations. Sally automatically joins online meetings, transcribes discussions in real-time, and generates concise summaries with task detection and key point highlighting. The platform supports audio and video file uploads, on-site recording through mobile apps, and seamlessly integrates with 5,000+ business tools."
                  : project.slug === "vocca-healthcare-voice-ai"
                  ? "We developed Vocca as a healthcare-focused voice and text AI platform designed to automate patient communication for medical groups and practices. The platform uses natural-sounding conversational AI agents to handle inbound and outbound calls, appointment bookings, reminders, and common patient questions 24/7, enabling clinic staff to focus on patient care instead of administrative tasks."
                  : project.slug === "mesh-fantasy-football-squads"
                  ? "We built MESH to revolutionize fantasy football by introducing squad-based management leagues, where entire groups manage roster teams together. Unlike traditional fantasy apps designed for one person managing one team, MESH enables Head Coaches to set up leagues and invite unlimited squad members—friends, family, classmates, coworkers—to collaborate on team management, making fantasy football more social, interactive, and fun."
                  : "We worked alongside the product and engineering teams to evolve the experience from a dense, difficult-to-scan interface into a focused, flexible workspace that surfaces the right insights at the right time."}
              </p>
              <p className="text-lg text-purple-700/80 dark:text-purple-200">
                {project.slug === "ai-care-coordination-platform"
                  ? "The platform combines advanced AI technology with social features, creating a unique space where AIs and humans coexist in a vibrant community. Users can customize their AI's personality, engage in natural conversations, and share moments through photos - making every interaction feel authentic and meaningful."
                  : project.slug === "ringfree-voip-platform"
                  ? "Our solution integrates PBXware, Asterisk, and Linux infrastructure with advanced voice AI capabilities using LiveKit, Python, and ElevenLabs to create intelligent, seamless communication experiences. We implemented real-time voice AI features, SD-WAN failover technology for always-on voice connectivity, and built centralized call management features, all backed by white-glove onboarding and ongoing 5-star support."
                  : project.slug === "mlr-live-stream-multicam"
                  ? "We built the solution using AWS Elemental for video processing, AWS CloudFront for global content delivery, and Amazon EC2 for scalable infrastructure. The React frontend provides intuitive multicam switching controls, while Supabase handles real-time data synchronization for instant marker placement and seamless on-demand playback of all matches with full camera angle selection."
                  : project.slug === "ai-slack-airtable-automation"
                  ? "The automation integrates Slack API for voice note capture, Python for transcription processing, OpenAI API for intelligent content generation, Airtable for data management and approval workflows, and Make.com for orchestrating the entire workflow. The system supports multiple social media platforms with Instagram-specific features for images, text posts, and carousel formats, enabling seamless end-to-end content automation."
                  : project.slug === "roxys-pub-pos-system"
                  ? "The POS system was built using Java and JavaFX for the modern desktop interface, MySQL for robust database management, and JDBC for seamless database connectivity. We integrated hardware support for barcode scanners (keyboard wedge), receipt printers, cash drawers, and touch screens. The application was packaged as a standalone executable using jpackage, ensuring easy deployment and cross-platform compatibility. The system includes comprehensive features such as sales screen with cart management, real-time receipt generation, inventory tracking, customer management, user authentication, daily sales reports, product reports, and export capabilities to PDF and Excel formats."
                  : project.slug === "sally-ai-meeting-assistant"
                  ? "The platform was built using React Native for cross-platform mobile development, Django for the robust backend API, and advanced AI models with NLP tokenization for accurate transcription and summarization. We developed custom AI model training pipelines to improve transcription accuracy and context understanding. The system includes an AI chatbot that automatically joins meetings, processes conversations in real-time, and generates actionable insights. All data processing maintains full GDPR compliance with enterprise-grade security, and the platform integrates seamlessly with 5,000+ business tools through a comprehensive API architecture."
                  : project.slug === "vocca-healthcare-voice-ai"
                  ? "The platform was built using Python and Django for the backend infrastructure, LiveKit for real-time voice communication, and ElevenLabs for natural-sounding AI voice generation. We developed a React frontend for clinic administrators to manage workflows and patient interactions. The system uses Supabase for scalable database management and integrates with existing EHR and practice management systems through secure APIs. The platform supports SMS and WhatsApp messaging in addition to voice calls, and is built with healthcare-grade security featuring end-to-end encryption and full compliance with HIPAA, GDPR, and SOC 2 standards. The AI agents can manage hundreds of calls simultaneously, reducing missed calls, improving first-call resolution, and significantly reducing no-shows while increasing appointment requests."
                  : project.slug === "mesh-fantasy-football-squads"
                  ? "The platform was built using Node.js and ExpressJS for the backend API, MongoDB for flexible data storage of leagues, squads, rosters, and voting data, and React for the web application. We also developed a React Native mobile app for iOS and Android, ensuring squads can manage their teams, vote on decisions, and participate in drafts from anywhere. The system features rolling drafts that run across multiple days with squad voting and debate functionality, weekly lineup voting where squads collectively decide starters, and collaborative trade and waiver processes where every squad member has a voice. All roster moves run through the squad, and leagues operate with head-to-head matchups powered by group decisions, creating a truly collaborative fantasy football experience."
                  : "Our approach combined qualitative research, product analytics, and rapid prototyping to validate decisions quickly before committing them to production."}
              </p>
            </div>

            <div
              className="space-y-8 rounded-2xl bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.08)] dark:bg-purple-900"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div>
                <h3 className="mb-3 text-base font-semibold uppercase tracking-wide text-purple-400">
                  Project goals
                </h3>
                <ul className="space-y-3 text-sm text-purple-700 dark:text-purple-100">
                  {project.goals.map((goal, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-[6px] inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-base font-semibold uppercase tracking-wide text-purple-400">
                  Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-white/10 dark:text-white"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-base font-semibold uppercase tracking-wide text-purple-400">
                  Impact
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-xl font-extrabold text-purple-700 dark:text-white">
                        {result.metric}
                      </p>
                      <p className="text-xs text-purple-500 dark:text-purple-300">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section (using Optivraflow images) */}
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-purple-700 dark:text-white md:text-3xl">
              Our process for this project
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-purple-600 dark:text-purple-300">
              A repeatable, battle-tested process that ensures every project
              ships with clarity, confidence, and measurable outcomes.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {project.processSteps.map((step, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.18)] dark:bg-purple-900"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 120}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 px-6 py-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Step {index + 1}
                  </p>
                  <h3 className="text-lg font-semibold text-purple-700 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-purple-600 dark:text-purple-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials & Newsletter (matching other pages) */}
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default PortfolioDetail;
