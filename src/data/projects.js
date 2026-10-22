export const projects = [
  {
    title: 'Clinic AI – Voice AI Receptionist SaaS',
    client: 'Founder & Sole Engineer',
    overview:
      'Multi-tenant AI voice receptionist for GCC healthcare clinics that answers calls, books appointments, and handles patient queries autonomously. Architected multi-tenant call routing (VAPI.ai + Twilio) with tool-based booking webhooks into Google Calendar, and a NestJS/PostgreSQL/Prisma backend with hardened auth (bcrypt, refresh tokens, rate limiting) and Merchant-of-Record subscription billing, navigating UAE SIP licensing for region-compliant voice infrastructure.',
    technologies: [
      'VAPI.ai',
      'Claude (Anthropic)',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Twilio',
      'Google Calendar API',
    ],
    featured: true,
    status: 'IN_DEV',
  },
  {
    title: 'Orderli – WhatsApp AI Sales & Support Agent',
    client: 'Founder',
    overview:
      'Multi-tenant SaaS that lets businesses deploy an AI agent on their own WhatsApp number to answer queries, recommend products, capture leads, and follow up 24/7. Per-business RAG knowledge base trained from websites, PDFs, catalogs, and FAQs; multimodal handling (text, voice notes, images) with replies in 20+ languages including English, Urdu, and Arabic; tenant-isolated Baileys sessions and a client dashboard for conversations, leads, and analytics.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Baileys', 'LLM APIs', 'RAG'],
    projectUrl: 'https://orderliapp.com',
    featured: true,
    status: 'LIVE',
  },
  {
    title: 'Takafo.ai – AI Recruitment SaaS',
    client: 'Mubadala Investment Company, Dubai',
    overview:
      'Owned backend architecture for end-to-end hiring workflows (~30% faster feature delivery). Built an AI succession planning module with a 5-stage evaluation pipeline and score-based automated nominations.',
    technologies: ['NestJS', 'Node.js', 'Vue.js', 'PostgreSQL', 'OpenAI API', 'CI/CD'],
    featured: true,
    status: 'PRODUCTION',
  },
  {
    title: 'G42 – AI Enterprise Dashboards',
    client: 'G42 Company, Abu Dhabi',
    overview:
      'Data-intensive dashboards and analytics modules for internal business teams, improving insight discovery by ~35%.',
    technologies: ['React.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Azure'],
    featured: true,
    status: 'PRODUCTION',
  },
  {
    title: 'Blackdoor Limo – Limo Booking Platform',
    client: 'Blackdoor Limo, Canada',
    overview:
      'End-to-end chauffeur booking platform covering route selection, scheduling, distance-based fare and tax calculation, vehicle selection, and multi-step responsive booking forms for airport, hourly, and long-distance trips. Integrated Stripe payments with booking status management, invoices, custom quotations, and automated customer/admin email notifications.',
    technologies: ['Laravel', 'PHP', 'Vue.js', 'Inertia.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    projectUrl: 'https://blackdoorlimo.com',
    status: 'LIVE',
  },
  {
    title: 'Diligentsia – AI Company Auditing',
    client: 'Diligentsia UK',
    overview:
      'AI system generating automated audit reports using OpenAI, reducing manual reporting time by 70% for SMEs and investors.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'OpenAI API'],
    projectUrl: 'https://diligentsia.co.uk',
    status: 'LIVE',
  },
  {
    title: 'AI Portfolio Chatbot – RAG Assistant',
    client: 'Personal Project',
    overview:
      'Retrieval-augmented generation chatbot that answers visitor questions about experience and projects, grounded in a custom knowledge base. Embeddings and semantic search via Xenova transformers and Pinecone, with Groq (Llama 3.1) for low-latency generation.',
    technologies: ['LangChain.js', 'Groq', 'Pinecone', 'Xenova', 'Next.js'],
    status: 'LIVE',
  },
  {
    title: 'CUX Sync – Real-Time Collaboration',
    overview:
      'Jira-like project management system with real-time collaboration using dual database architecture for performance and scalability.',
    technologies: ['Nest.js', 'Next.js', 'SocketCluster', 'MongoDB', 'PostgreSQL'],
    status: 'COMPLETED',
  },
  {
    title: 'MPC – Modern Poker Club',
    overview:
      'Web2/Web3 poker platform with 28M tokens, NFT-based rewards, and compliant sweepstakes gameplay.',
    technologies: ['React.js', 'Solidity', 'Rust (Solana)', 'Web3.js', 'Socket.io'],
    status: 'COMPLETED',
  },
];
