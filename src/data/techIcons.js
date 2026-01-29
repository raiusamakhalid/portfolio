// Technology icons data organized by category
export const techIconsByCategory = {
  Frontend: [
    { name: 'React', iconPath: '/icons/react.svg' },
    { name: 'Next.js', iconPath: '/icons/nextjs.svg' },
    { name: 'JavaScript', iconPath: '/icons/javascript.svg' },
    { name: 'TypeScript', iconPath: '/icons/typescript.svg' },
    // { name: 'HTML5', iconPath: '/icons/html5.svg' },
    // { name: 'CSS3', iconPath: '/icons/css3.svg' },
    // { name: 'Tailwind CSS', iconPath: '/icons/tailwindcss.svg' },
    // { name: 'Bootstrap', iconPath: '/icons/bootstrap.svg' },
  ],
  Backend: [
    { name: 'Node.js', iconPath: '/icons/nodejs.svg' },
    { name: 'Express.js', iconPath: '/icons/express.svg' },
    { name: 'Nest.js', iconPath: '/icons/nestjs-red.svg' },
    { name: 'PHP', iconPath: '/icons/php.svg' },
    { name: 'Socket.io', iconPath: '/icons/socketio.svg' }
  ],
  Blockchain: [
    { name: 'Solidity', iconPath: '/icons/solidity.svg' },
    { name: 'Solana', iconPath: '/icons/solana.svg' },
    { name: 'Ethereum', iconPath: '/icons/ethereum.svg' },
    { name: 'Rust', iconPath: '/icons/rust.svg' },
    // { name: 'Anchor', iconPath: '/icons/solana.svg' } // Using Solana icon as placeholder for Anchor
  ],
  Databases: [
    { name: 'MongoDB', iconPath: '/icons/mongodb.svg' },
    { name: 'PostgreSQL', iconPath: '/icons/postgresql.svg' },
    { name: 'MySQL', iconPath: '/icons/mysql.svg' },
    { name: 'TypeORM', iconPath: '/icons/typeorm.png' }
  ],
  Tools: [
    { name: 'AWS', iconPath: '/icons/aws.svg' },
    { name: 'Azure', iconPath: '/icons/azure.svg' },
    { name: 'GitHub', iconPath: '/icons/github.svg' },
    { name: 'Cursor', iconPath: '/icons/cursor.svg' },
    // { name: 'C++', iconPath: '/icons/cplusplus.svg' }
  ]
};

// Legacy export for backward compatibility (if needed)
export const techIcons = Object.values(techIconsByCategory).flat();
