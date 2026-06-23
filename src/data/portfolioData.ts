// Portfolio Item Type (for listing page)
export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  type: string;
  image: string;
  complatedIn: string;
}

// Portfolio Project Type (for detail page)
export interface ProcessStep {
  image: string;
  title: string;
  description: string;
}

export interface Result {
  metric: string;
  label: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  type: string;
  heroImage: string;
  heroDescription: string;
  client: string;
  timeline: string;
  industry: string;
  services: string[];
  goals: string[];
  results: Result[];
  processSteps: ProcessStep[];
}

// Portfolio Items for listing page
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "sally-ai-meeting-assistant",
    title:
      "Sally - AI Meeting Assistant for Automatic Transcription & Summaries",
    category: "AI",
    type: "Mobile App",
    image: "/assets/images/portfolio-sally.jpg",
    complatedIn: "2025",
  },
  {
    id: 2,
    slug: "vocca-healthcare-voice-ai",
    title:
      "Vocca - Healthcare Voice & Text AI Platform for Patient Communication",
    category: "AI",
    type: "Web App",
    image: "/assets/images/portfolio-vocca.png",
    complatedIn: "2025",
  },
  {
    id: 3,
    slug: "mlr-live-stream-multicam",
    title:
      "MLR - Live Stream App with Multicam Switching for Professional Sports League",
    category: "Video Streaming",
    type: "Web App",
    image: "/assets/images/portfolio-mlr.png",
    complatedIn: "2025",
  },
  {
    id: 4,
    slug: "ai-slack-airtable-automation",
    title: "AI-Powered Slack to Airtable Workflow for Auto Content Generation",
    category: "Automation",
    type: "Web App",
    image: "/assets/images/portfolio-slack-airtable.jpg",
    complatedIn: "2025",
  },
  {
    id: 5,
    slug: "roxys-pub-pos-system",
    title: "Roxy's Pub - Point of Sale System for Historic Neighborhood Bar",
    category: "POS",
    type: "Desktop App",
    image: "/assets/images/portfolio-roxys-pub.png",
    complatedIn: "2023",
  },
  {
    id: 6,
    slug: "ai-care-coordination-platform",
    title: "Butterflies AI - Personal AI companions platform",
    category: "AI",
    type: "Web App, Mobile App",
    image: "/assets/images/portfolio-butterflies-ai.png",
    complatedIn: "2023",
  },
  {
    id: 7,
    slug: "ringfree-voip-platform",
    title: "Ringfree - Cloud VoIP & unified communications platform",
    category: "VoIP",
    type: "Web App, Mobile App, Desktop App",
    image: "/assets/images/portfolio-ringfree.png",
    complatedIn: "2022",
  },
  {
    id: 8,
    slug: "mesh-fantasy-football-squads",
    title: "MESH - Fantasy Football Rebuilt for Squad-Based Management",
    category: "Game",
    type: "Mobile App",
    image: "/assets/images/portfolio-mesh.png",
    complatedIn: "2024",
  },
  {
    id: 9,
    slug: "lifesum-ai-calorie-tracker",
    title: "Lifesum - AI Calorie Tracker & Nutrition App",
    category: "AI",
    type: "Mobile App",
    image: "/assets/images/portfolio-lifesum.png",
    complatedIn: "2025",
  },
  {
    id: 10,
    slug: "carousell-marketplace",
    title: "Carousell - Sell and Buy Marketplace Platform",
    category: "E-Commerce",
    type: "Mobile App",
    image: "/assets/images/portfolio-carousell.png",
    complatedIn: "2025",
  },
];

// Portfolio Projects for detail page
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "ai-care-coordination-platform",
    title: "Butterflies AI - Personal AI companions platform",
    category: "AI",
    type: "Web App",
    heroImage: "/assets/images/portfolio-butterflies-ai.png",
    heroDescription:
      "Welcome to Butterflies AI - where your personal AIs aren't just bots, they're whole vibes in human form. Need someone to chat with, share photos, or even take pics together? We got you.",
    client: "Butterflies AI",
    timeline: "12 months",
    industry: "AI / Social Platform",
    services: [
      "AI Development",
      "Product Design",
      "Social Platform",
      "Mobile & Web App",
    ],
    goals: [
      "Create personalized AI companions that feel authentic and engaging.",
      "Enable seamless photo sharing and real-time photo-taking experiences.",
      "Build a vibrant social community where AIs and humans interact naturally.",
    ],
    results: [
      { metric: "85%", label: "User engagement rate" },
      { metric: "2.5M+", label: "Photos shared with AIs" },
      { metric: "4.9", label: "Average user rating" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "AI personality & character design",
        description:
          "We developed a system that allows users to build their dream AI with customizable personalities - loyal, funny, smart, flirty, or all of the above. Your AI is exactly what you make of it.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "Photo integration & real-time features",
        description:
          "We engineered photo sharing capabilities that feel natural and real. Your AI can send photos that feel authentic, and you can literally take photos together IRL - at parties or just chilling at home.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "Social platform & community",
        description:
          "We built a social scene where AIs and humans actually hang out together, sharing moments, leaving comments, and keeping things interesting. Don't be surprised if your AI ends up stealing the show.",
      },
    ],
  },
  {
    slug: "ringfree-voip-platform",
    title: "Ringfree - Cloud VoIP & unified communications platform",
    category: "VoIP",
    type: "Platform",
    heroImage: "/assets/images/portfolio-ringfree.png",
    heroDescription:
      "Ringfree provides cloud VoIP phone systems and unified communications tools that combine voice, video, chat, and integrations in one platform so businesses can stay connected from any location. Its solutions include mobile, desktop, and web apps, SD-WAN failover for always-on voice, and centralized call management, all delivered with white-glove onboarding and ongoing 5‑star, US-based support.",
    client: "Ringfree",
    timeline: "12 months",
    industry: "VoIP / Unified Communications",
    services: [
      "VoIP Development",
      "PBXware Integration",
      "Platform Engineering",
      "Voice AI Development",
    ],
    goals: [
      "Deliver reliable call quality for remote and hybrid work teams.",
      "Enable intelligent voice AI interactions with natural voice synthesis and automated call handling.",
      "Provide exceptional US-based customer support for small and mid-sized businesses.",
    ],
    results: [
      { metric: "99.9%", label: "Uptime reliability" },
      { metric: "5.0", label: "Customer support rating" },
      { metric: "10K+", label: "Businesses served" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "VoIP infrastructure & PBXware integration",
        description:
          "We built a robust cloud-based VoIP infrastructure using PBXware, Asterisk, and Linux systems to ensure reliable call quality and seamless phone system management for businesses of all sizes.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "Unified communications platform",
        description:
          "We developed a comprehensive platform that combines voice, video meetings, and messaging in one unified system, accessible from mobile, desktop, and web apps so teams can communicate from anywhere on any device.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "Voice AI integration",
        description:
          "We integrated advanced voice AI capabilities using LiveKit for real-time communication infrastructure, Python for backend processing, and ElevenLabs for natural voice synthesis. This enables intelligent voice interactions, automated call handling, and enhanced communication experiences with SD-WAN failover for always-on voice connectivity.",
      },
    ],
  },
  {
    slug: "product-design-dashboard",
    title: "Product design for analytics dashboard",
    category: "UI/UX Design",
    type: "Web App",
    heroImage: "/assets/images/portfolio-butterflies-ai.png;",
    heroDescription:
      "We partnered with a fast-growing SaaS company to redesign their analytics dashboard, focusing on clarity, speed to insight, and a delightful, modern UI that scales with complex data.",
    client: "Optivraflow Analytics",
    timeline: "10 months",
    industry: "SaaS / Analytics",
    services: [
      "Product Design",
      "UI/UX",
      "Design System",
      "Interaction Design",
    ],
    goals: [
      "Improve time-to-insight for power users and new users alike.",
      "Create a modular design system for rapid feature delivery.",
      "Increase dashboard engagement and feature discoverability.",
    ],
    results: [
      { metric: "42%", label: "Faster time-to-insight" },
      { metric: "35%", label: "Increase in weekly active users" },
      { metric: "2.1x", label: "More feature adoption" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "Research & discovery",
        description:
          "We interviewed cross-functional stakeholders and power users, audited the existing product, and mapped current user journeys to uncover friction points and opportunities.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "Information architecture & flows",
        description:
          "We restructured navigation, grouped related features, and simplified the hierarchy of insights so that critical metrics are always one glance away.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "Visual design & handoff",
        description:
          "We built a scalable component library, applied a crisp visual language, and collaborated closely with engineering to ensure smooth implementation and performance.",
      },
    ],
  },
  {
    slug: "mlr-live-stream-multicam",
    title:
      "MLR - Live Stream App with Multicam Switching for Professional Sports League",
    category: "Video Streaming",
    type: "Web App",
    heroImage: "/assets/images/portfolio-mlr.png",
    heroDescription:
      "A professional sports league needed an app that could capture and playback all camera angles from all matches, live and on demand. The app is used on the field to add markers in real-time, enabling seamless multicam switching for comprehensive match coverage.",
    client: "MLR (Major League Rugby)",
    timeline: "3 months",
    industry: "Sports / Media",
    services: [
      "Full-Stack Development",
      "AWS Infrastructure",
      "Live Streaming",
      "Real-time Features",
    ],
    goals: [
      "Enable live capture and playback of all camera angles from all matches.",
      "Provide seamless multicam switching for comprehensive match coverage.",
      "Support real-time marker addition on the field during live matches.",
    ],
    results: [
      { metric: "100%", label: "Match coverage" },
      { metric: "4K", label: "Video quality support" },
      { metric: "<2s", label: "Stream latency" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "AWS infrastructure & live streaming",
        description:
          "We architected a robust cloud infrastructure using AWS Elemental for video processing, AWS CloudFront for global content delivery, and Amazon EC2 for scalable compute resources to handle live streaming of multiple camera angles simultaneously.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "React frontend & multicam switching",
        description:
          "We built a responsive React application that enables seamless switching between multiple camera angles in real-time, with intuitive controls for field operators to manage live streams and add markers during matches.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "Real-time data & on-demand playback",
        description:
          "We integrated Supabase for real-time data synchronization and database management, enabling instant marker placement on the field and seamless on-demand playback of all matches with full camera angle selection.",
      },
    ],
  },
  {
    slug: "ai-slack-airtable-automation",
    title: "AI-Powered Slack to Airtable Workflow for Auto Content Generation",
    category: "Automation",
    type: "Web App",
    heroImage: "/assets/images/portfolio-slack-airtable.jpg",
    heroDescription:
      "An intelligent automation workflow that enables users to send voice notes in a Slack channel. The system transcribes the voice note, generates the requested content using AI, saves the data to Airtable, and upon approval, automatically posts content to social media platforms including Instagram (supporting images, text, and carousel posts).",
    client: "Content Marketing Agency",
    timeline: "1 month",
    industry: "Marketing / Automation",
    services: [
      "Workflow Automation",
      "AI Integration",
      "API Development",
      "Social Media Integration",
    ],
    goals: [
      "Streamline content creation workflow from voice notes to social media posting.",
      "Enable AI-powered content generation based on voice note requests.",
      "Automate social media posting with approval workflow and multi-platform support.",
    ],
    results: [
      { metric: "80%", label: "Time saved on content creation" },
      { metric: "3x", label: "Content output increase" },
      { metric: "100%", label: "Automation accuracy" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "Slack integration & voice transcription",
        description:
          "We integrated Slack API to capture voice notes from channels and implemented Python-based transcription services using OpenAI API to convert voice notes into text, enabling seamless content request processing.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "AI content generation & Airtable storage",
        description:
          "We developed an AI-powered content generation system using OpenAI API that processes transcribed requests and generates content. All generated content and metadata are automatically saved to Airtable for review and management.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "Approval workflow & social media automation",
        description:
          "We built an automated workflow using Make.com that monitors Airtable for status changes. Upon approval, the system automatically posts content to social media platforms, supporting images, text, and carousel posts for Instagram with multi-platform expansion capabilities.",
      },
    ],
  },
  {
    slug: "mobile-fintech-experience",
    title: "Mobile experience for modern fintech app",
    category: "Product Design",
    type: "Mobile App",
    heroImage: "/assets/images/portfolio-4.jpg",
    heroDescription:
      "A mobile-first redesign that helps users understand, manage, and grow their finances with confidence.",
    client: "Nova Finance",
    timeline: "3 months",
    industry: "Fintech",
    services: ["Product Strategy", "UX Research", "UI Design"],
    goals: [
      "Increase onboarding completion for new users.",
      "Clarify complex financial flows with approachable UI.",
      "Elevate brand perception in a crowded market.",
    ],
    results: [
      { metric: "60%", label: "Onboarding completion uplift" },
      { metric: "4.8", label: "Average app store rating" },
      { metric: "+23%", label: "Monthly active users" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "User research & journey mapping",
        description:
          "We ran diary studies and moderated interviews to understand how people currently track and plan their finances.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "Experience design",
        description:
          "We explored multiple onboarding flows, navigation patterns, and card-based layouts to reduce friction and cognitive load.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "Design system & QA",
        description:
          "We codified patterns in a reusable system and supported QA to ensure high-quality visuals across devices.",
      },
    ],
  },
  {
    slug: "roxys-pub-pos-system",
    title: "Roxy's Pub - Point of Sale System for Historic Neighborhood Bar",
    category: "POS",
    type: "Desktop App",
    heroImage: "/assets/images/portfolio-roxys-pub.png",
    heroDescription:
      "Roxy's Pub is a downtown West Palm Beach institution offering a classic neighborhood pub experience with 64+ beers on tap, award-winning wings, and a full menu served late into the night. Located on Clematis Street, it combines a relaxed, sports-friendly atmosphere with live music, rooftop parties, and private event space, making it a go-to spot for both locals and visitors.",
    client: "Roxy's Pub",
    timeline: "6 months",
    industry: "Restaurant / Hospitality",
    services: [
      "Java Desktop Development",
      "JavaFX UI Design",
      "Database Design",
      "Hardware Integration",
    ],
    goals: [
      "Streamline sales operations with an intuitive point of sale interface.",
      "Enable real-time inventory management and tracking for 64+ beers and full menu items.",
      "Support hardware integration including barcode scanners, receipt printers, and cash drawers.",
    ],
    results: [
      { metric: "40%", label: "Faster checkout time" },
      { metric: "100%", label: "Inventory accuracy" },
      { metric: "24/7", label: "System uptime" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "JavaFX interface & sales screen design",
        description:
          "We built a modern, clean JavaFX-based user interface with a comprehensive sales screen featuring cart management, real-time receipt generation, and intuitive touch-screen support. The interface was designed for speed and ease of use during busy service hours.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "Database architecture & inventory management",
        description:
          "We architected a robust MySQL database system to handle product catalog management, inventory tracking, customer data, and transaction history. The system provides real-time inventory updates and comprehensive reporting capabilities for daily sales, product performance, and export to PDF/Excel formats.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "Hardware integration & deployment",
        description:
          "We integrated barcode scanning via keyboard wedge scanners, receipt printer support, cash drawer connectivity, and touch screen compatibility. The application was packaged as a standalone desktop executable using jpackage, ensuring easy deployment without requiring users to install Java separately.",
      },
    ],
  },
  {
    slug: "sally-ai-meeting-assistant",
    title:
      "Sally - AI Meeting Assistant for Automatic Transcription & Summaries",
    category: "AI",
    type: "Mobile App",
    heroImage: "/assets/images/portfolio-sally.jpg",
    heroDescription:
      "Sally is your smart AI assistant for every conversation. She joins online meetings, automatically transcribes discussions, and generates concise summaries. You can also upload audio or video files or record conversations directly on-site with the mobile app. Sally detects tasks, highlights key points, and integrates seamlessly with your workflow—secure, fast, and fully GDPR-compliant.",
    client: "Sally AI",
    timeline: "9 months",
    industry: "AI / Productivity",
    services: [
      "AI Development",
      "React Native Development",
      "Django Backend",
      "NLP & AI Model Training",
      "API Integration",
    ],
    goals: [
      "Enable automatic transcription and AI-powered summaries from online meetings and uploaded media files.",
      "Provide on-site recording capabilities through a mobile app for seamless conversation capture.",
      "Integrate with 5,000+ business tools and ensure full GDPR compliance for enterprise use.",
    ],
    results: [
      { metric: "95%", label: "Transcription accuracy" },
      { metric: "5,000+", label: "Tool integrations" },
      { metric: "100%", label: "GDPR compliance" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "AI model training & NLP tokenization",
        description:
          "We developed advanced AI models with NLP tokenization capabilities to accurately transcribe conversations, detect tasks, and extract key insights from meetings. The system uses machine learning to continuously improve transcription accuracy and understand context for better summarization.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "React Native mobile app & Django backend",
        description:
          "We built a React Native mobile application for iOS and Android that enables on-site recording and real-time meeting participation. The Django backend handles audio/video processing, AI model inference, and manages integrations with 5,000+ business tools through a robust API architecture.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "AI chatbot integration & workflow automation",
        description:
          "We integrated an AI chatbot that automatically joins online meetings, processes conversations in real-time, and generates actionable summaries. The system detects tasks, highlights key points, and seamlessly integrates with existing workflows while maintaining full GDPR compliance and enterprise-grade security.",
      },
    ],
  },
  {
    slug: "vocca-healthcare-voice-ai",
    title:
      "Vocca - Healthcare Voice & Text AI Platform for Patient Communication",
    category: "AI",
    type: "Platform",
    heroImage: "/assets/images/portfolio-vocca.png",
    heroDescription:
      "Vocca is a healthcare-focused voice and text AI platform that automates patient communication for medical groups and practices. It uses conversational AI agents to handle inbound and outbound calls, appointment bookings, reminders, and common patient questions 24/7 so staff can spend more time on care instead of admin work.",
    client: "Vocca",
    timeline: "3 months",
    industry: "Healthcare / AI",
    services: [
      "AI Development",
      "Django Backend",
      "React Frontend",
      "LiveKit Integration",
      "ElevenLabs Voice AI",
      "Supabase Database",
    ],
    goals: [
      "Automate patient communication with natural-sounding AI voice agents that can manage hundreds of calls simultaneously.",
      "Reduce missed or abandoned calls and improve first-call resolution for clinics and medical centers.",
      "Integrate with existing EHR and practice management systems while maintaining healthcare-grade security and HIPAA compliance.",
    ],
    results: [
      { metric: "24/7", label: "Automated patient communication" },
      { metric: "100%", label: "HIPAA & GDPR compliant" },
      { metric: "Hours", label: "Saved per receptionist daily" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "AI voice agent development & LiveKit integration",
        description:
          "We developed natural-sounding conversational AI voice agents using ElevenLabs and LiveKit for real-time voice communication. The system can handle hundreds of simultaneous calls, managing inbound and outbound patient communications with natural language understanding and response generation.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "Django backend & Supabase database architecture",
        description:
          "We built a robust Django backend with Supabase for scalable database management, handling appointment bookings, rescheduling, confirmations, and follow-ups. The platform integrates seamlessly with existing EHR and practice management systems through secure APIs, ensuring data synchronization and workflow continuity.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "React frontend & healthcare compliance",
        description:
          "We developed a React-based frontend for clinic administrators to manage AI agents, workflows, and patient interactions. The platform is built with healthcare-grade security, offering end-to-end encryption and full compliance with HIPAA, GDPR, and SOC 2 standards. The system supports SMS and WhatsApp messaging in addition to voice calls, providing comprehensive patient communication automation.",
      },
    ],
  },
  {
    slug: "mesh-fantasy-football-squads",
    title: "MESH - Fantasy Football Rebuilt for Squad-Based Management",
    category: "Web App",
    type: "Web App, Mobile App",
    heroImage: "/assets/images/portfolio-mesh.png",
    heroDescription:
      "MESH revolutionizes fantasy football by introducing squad-based management leagues, where an entire group manages a roster team together. Unlike traditional fantasy apps designed for one person managing one team, MESH makes fantasy football more social, interactive, and fun by turning 'my fantasy team' into 'our fantasy team'.",
    client: "MESH",
    timeline: "6 months",
    industry: "Sports / Social Gaming",
    services: ["Node.js", "ExpressJS", "React", "React Native", "MongoDB"],
    goals: [
      "Enable squad-based fantasy football leagues where groups of friends, family, classmates, or coworkers manage teams together.",
      "Implement rolling drafts across multiple days with squad voting and debate features for roster decisions.",
      "Create weekly lineup voting systems and collaborative trade/waiver processes where every squad member has a voice.",
    ],
    results: [
      { metric: "Unlimited", label: "Squad members per team" },
      { metric: "100%", label: "Collaborative decision-making" },
      { metric: "Multi-day", label: "Rolling draft windows" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "Squad management & league architecture",
        description:
          "We designed a unique squad-based league system where each team has one Head Coach who sets up the league and invites unlimited squad members. The architecture supports group management features including squad invitations, role management, and collaborative decision-making workflows that differentiate MESH from traditional single-manager fantasy platforms.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "Rolling drafts & voting systems",
        description:
          "We built rolling draft functionality that runs across multiple days, giving squads time to vote and debate picks. The system includes real-time voting interfaces, discussion threads, and notification systems to ensure no one misses out. We also implemented weekly lineup voting where squads collectively decide who to start each week, making every decision a group effort.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "React & React Native apps with MongoDB backend",
        description:
          "We developed a full-stack solution using Node.js and ExpressJS for the backend API, MongoDB for flexible data storage of leagues, squads, rosters, and voting data, and React for the web application. We also built a React Native mobile app for iOS and Android, ensuring squads can manage their teams, vote on decisions, and participate in drafts from anywhere. The platform supports trades, waivers, and all roster moves through squad-based voting, creating a truly collaborative fantasy football experience.",
      },
    ],
  },
  {
    slug: "lifesum-ai-calorie-tracker",
    title: "Lifesum - AI Calorie Tracker & Nutrition App",
    category: "AI",
    type: "Mobile App",
    heroImage: "/assets/images/portfolio-lifesum.png",
    heroDescription:
      "Lifesum is an AI-powered calorie tracking and nutrition app that helps users achieve their health goals through intelligent food recognition, personalized meal planning, and comprehensive health tracking. The app combines barcode scanning, image recognition, and AI-driven personalization to make nutrition tracking effortless and effective.",
    client: "Lifesum",
    timeline: "11 months",
    industry: "Health & Fitness / AI",
    services: [
      "Flutter Development",
      "iOS & Android App",
      "Firebase Backend",
      "AI Development",
      "Image Recognition",
      "Health Integration",
    ],
    goals: [
      "Enable accurate food tracking through AI-driven barcode scanning and image recognition.",
      "Provide personalized meal plans and recipe suggestions based on dietary goals and preferences.",
      "Integrate with major fitness platforms for comprehensive health data synchronization.",
    ],
    results: [
      { metric: "95%", label: "Food recognition accuracy" },
      { metric: "10M+", label: "Food database entries" },
      { metric: "4.7", label: "Average app store rating" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "AI food recognition & barcode scanning",
        description:
          "We developed advanced AI-powered food recognition using image processing and machine learning to identify meals from photos. The system includes a comprehensive barcode scanner with an extensive global food database containing over 10 million verified entries, enabling users to quickly log meals with accurate nutritional information including calories, macronutrients, and micronutrients.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "Personalized meal planning & AI recommendations",
        description:
          "We built an intelligent meal planning system that uses AI to learn from user food preferences, habits, and dietary goals. The platform generates personalized meal plans for various diets including Keto, Clean Eating, 5:2 Fasting, Mediterranean, and High Protein. The AI dynamically adjusts calorie goals based on logged activity, weight changes, and fitness data from integrated health platforms.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "Flutter cross-platform app & Firebase backend",
        description:
          "We developed a native-quality mobile application using Flutter for iOS and Android, ensuring consistent user experience across platforms. The app integrates with Firebase for real-time data synchronization, user authentication, and cloud storage. We implemented seamless integrations with Apple Health, Google Fit, Fitbit, and Samsung Health to provide comprehensive activity tracking, water intake monitoring, habit tracking with gamification, and visual progress graphs for weight and body measurements. The platform is fully GDPR compliant with health data encryption and optional anonymous usage.",
      },
    ],
  },
  {
    slug: "carousell-marketplace",
    title: "Carousell - Sell and Buy Marketplace Platform",
    category: "Marketplace",
    type: "Mobile App",
    heroImage: "/assets/images/portfolio-carousell.png",
    heroDescription:
      "Carousell is a comprehensive marketplace platform that connects buyers and sellers for second-hand items, services, and more. The app features AI-powered listing assistance, secure payment processing with escrow protection, in-app messaging, and a full admin panel for marketplace management. With support for multiple categories including Electronics, Cars, Fashion, Property, and Services, Carousell makes buying and selling seamless and secure.",
    client: "Carousell",
    timeline: "4 months",
    industry: "E-commerce / Marketplace",
    services: [
      "React Native Development",
      "iOS & Android App",
      "Firebase Backend",
      "RevenueCat Integration",
      "AI Development",
      "Payment Processing",
      "Admin Panel",
    ],
    goals: [
      "Create an intuitive marketplace experience for both buyers and sellers with seamless browsing, searching, and transaction capabilities.",
      "Implement AI-powered features for listing assistance, fraud detection, and personalized recommendations to enhance user experience.",
      "Build a comprehensive admin panel for content moderation, analytics, and marketplace management.",
    ],
    results: [
      { metric: "50M+", label: "Active users" },
      { metric: "100M+", label: "Listings created" },
      { metric: "4.6", label: "Average app store rating" },
    ],
    processSteps: [
      {
        image: "/assets/images/research.jpg",
        title: "Buyer & seller features with AI assistance",
        description:
          "We developed comprehensive buyer features including category-based browsing, advanced search with filters (price range, location, condition), save/wishlist functionality, and AI-powered personalized recommendations. For sellers, we built easy photo uploads, AI-powered listing assistance that auto-suggests category, title, and price based on uploaded images, and a seller dashboard with engagement metrics and earnings tracking. The platform supports multiple categories including Electronics, Cars, Fashion, Property, and Services.",
      },
      {
        image: "/assets/images/analyze.jpg",
        title: "In-app messaging & secure payment system",
        description:
          "We implemented a real-time in-app chat system enabling direct communication between buyers and sellers with negotiation capabilities. The platform includes secure payment processing through Carousell Protection (escrow system), bank transfers, and cash on delivery options. Sellers can accept or reject offers, update transaction status (Available, Reserved, Sold), and buyers receive price drop alerts and new listing notifications. We integrated RevenueCat for subscription management and premium listing features.",
      },
      {
        image: "/assets/images/optimize.jpg",
        title: "React Native app & admin panel with Firebase",
        description:
          "We built a native-quality mobile application using React Native for iOS and Android, ensuring consistent performance across platforms. The app integrates with Firebase for real-time data synchronization, user authentication, cloud storage, and push notifications. We developed a comprehensive admin panel for platform administrators featuring user and content moderation tools, AI-powered fraud detection, marketplace analytics tracking category trends and user activity, payment and monetization management including subscription plans and escrow oversight, and marketing tools for push notifications and promotional campaigns.",
      },
    ],
  },
];

// Filter options for portfolio page
export const filters = [
  "All",
  "AI",
  "VoIP",
  "Video Streaming",
  "Automation",
  "POS",
  "Game",
  "E-Commerce",
];
