export const projects = [
  {
    title: 'Clinic AI – Voice AI SaaS Receptionist',
    client: 'Founder & Sole Engineer',
    overview:
      'Multi-tenant AI voice receptionist for GCC healthcare clinics that answers calls, books appointments, and manages patient queries. Architected call routing (VAPI.ai + Twilio), NestJS/PostgreSQL/Prisma backend with hardened auth and subscription billing, navigating Gulf telephony and UAE SIP licensing constraints.',
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
    title: 'Takafo.ai – AI Recruitment SaaS',
    client: 'Mubadala Investment Company, Dubai',
    overview:
      'Owned backend architecture for end-to-end hiring workflows. AI-powered succession planning with a 5-stage evaluation pipeline and automated successor nominations based on score thresholds (85%+ immediate, 70–84% potential, 50–69% development), reducing feature delivery time by ~30%.',
    technologies: ['PostgreSQL', 'NestJS', 'Vue.js', 'Node.js', 'OpenAI API', 'CI/CD'],
    featured: true,
    status: 'PRODUCTION',
  },
  {
    title: 'G42 – AI Enterprise Dashboards',
    client: 'G42 Company, Abu Dhabi',
    overview:
      'Data-intensive dashboards and analytics modules for internal business teams, improving insight discovery by ~35%.',
    technologies: ['React.js', 'Nest.js', 'TypeScript', 'PostgreSQL', 'Azure'],
    featured: true,
    status: 'PRODUCTION',
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
    title: 'Diligentsia – AI Company Auditing',
    client: 'Diligentsia UK',
    overview:
      'AI system generating automated audit reports using OpenAI, reducing manual reporting time by 70% for SMEs and investors.',
    technologies: ['MERN Stack', 'OpenAI API', 'RAG', 'Pinecone', 'AWS'],
    projectUrl: 'https://diligentsia.co.uk',
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
