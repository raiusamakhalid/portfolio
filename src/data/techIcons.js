export const techIconsByCategory = {
  Frontend: [
    { name: 'React.js', iconPath: '/icons/react.svg' },
    { name: 'Next.js', iconPath: '/icons/nextjs.svg' },
    { name: 'Vue.js', iconPath: '/icons/vuejs.svg' },
    { name: 'JavaScript', iconPath: '/icons/javascript.svg' },
    { name: 'TypeScript', iconPath: '/icons/typescript.svg' },
    { name: 'Tailwind CSS', iconPath: '/icons/tailwindcss.svg' },
    { name: 'HTML5', iconPath: '/icons/html5.svg' },
    { name: 'CSS3', iconPath: '/icons/css3.svg' },
  ],
  Backend: [
    { name: 'Node.js', iconPath: '/icons/nodejs.svg' },
    { name: 'Nest.js', iconPath: '/icons/nestjs-red.svg' },
    { name: 'Express.js', iconPath: '/icons/express.svg' },
    { name: 'Socket.io', iconPath: '/icons/socketio.svg' },
    // { name: 'Python', iconPath: '/icons/python.svg' },
    { name: 'PHP', iconPath: '/icons/php.svg' },
  ],
  'AI & LLM': [
    { name: 'OpenAI / LLMs', iconPath: '/icons/openai.svg' },
    { name: 'LangChain.js', iconPath: '/icons/langchain.svg' },
    { name: 'RAG Pipelines', iconPath: '/icons/langchain.svg' },
  ],
  Databases: [
    { name: 'MongoDB', iconPath: '/icons/mongodb.svg' },
    { name: 'PostgreSQL', iconPath: '/icons/postgresql.svg' },
    { name: 'MySQL', iconPath: '/icons/mysql.svg' },
    // { name: 'Prisma', iconPath: '/icons/prisma.svg' },
    // { name: 'TypeORM', iconPath: '/icons/typeorm.png' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', iconPath: '/icons/aws.svg' },
    { name: 'Azure', iconPath: '/icons/azure.svg' },
    { name: 'Docker', iconPath: '/icons/docker.svg' },
    { name: 'GitHub', iconPath: '/icons/github.svg' },
  ],
  Blockchain: [
    { name: 'Solidity', iconPath: '/icons/solidity.svg' },
    { name: 'Rust', iconPath: '/icons/rust.svg' },
    { name: 'Solana', iconPath: '/icons/solana.svg' },
    { name: 'Ethereum', iconPath: '/icons/ethereum.svg' },
  ],
};

export const techIcons = Object.values(techIconsByCategory).flat();
