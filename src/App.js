import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Linkedin, ExternalLink, Code, Database, Link, Cpu, Calendar, Award, Users, TrendingUp } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Solidity', 'Rust', 'C++', 'SQL', 'PHP'],
    blockchain: ['Web3.js', 'Ethers.js', 'Solana Web3', 'Smart Contracts', 'DeFi', 'NFT', 'Ethereum', 'Binance Smart Chain'],
    frontend: ['React.js', 'Next.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'Nest.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'TypeORM'],
    tools: ['AWS', 'Shopify', 'GitHub', 'Socket.io', 'Retool', 'Bubble.io', 'Mendix', 'Zapier']
  };

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Softtik Technologies',
      period: 'March 2025 - Present',
      achievements: [
        'Developed and integrated third-party APIs (OpenAI, Dropbox), boosting application functionality and reducing manual tasks by 30%',
        'Implemented RAG using OpenAI APIs and vector databases, improving data retrieval accuracy by 40%',
        'Built and customized internal tools using Retool, streamlining operations and increasing productivity by 25%'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Vaival Technologies',
      period: 'October 2023 - February 2025',
      achievements: [
        'Developed secure smart contracts on EVM and non-EVM chains following CEI pattern',
        'Integrated Web3 wallets (Metamask, Phantom, WalletConnect) with DeFi platforms and NFT marketplaces',
        'Collaborated with 15 developers in agile environment with 99.9% accuracy in QA processes',
        'Worked on Solana contracts, Ethereum token transactions, and high-volume blockchain API integrations'
      ]
    },
    {
      title: 'Blockchain Developer',
      company: 'Freelance & Contract',
      period: '2021 - 2022',
      achievements: [
        'Created staking DApp on Ethereum with custom smart contracts',
        'Built NFT Bridge for cross-chain transfers (Ethereum ↔ Solana ↔ Elysium)',
        'Developed Solana-based NFT launchpad using Metaplex and Rust (Anchor)',
        'Integrated DAO-based voting systems and smart contract event listeners'
      ]
    }
  ];

  const projects = [
    {
      title: 'Diligentsia - AI-Powered Auditing',
      description: 'AI system generating audit reports using OpenAI, reducing manual reporting time by 70%',
      tech: ['MERN Stack', 'OpenAI API', 'MongoDB'],
      link: 'https://diligentsia.co.uk',
      type: 'Full Stack'
    },
    {
      title: 'Solana NFT Studio',
      description: 'Full-stack platform for NFT minting, preview, and staking with real-time updates',
      tech: ['Rust', 'Anchor', 'React.js', 'Express.js'],
      link: 'https://solscan.io',
      type: 'Blockchain'
    },
    {
      title: 'NFT Marketplace - Solana',
      description: 'Complete NFT marketplace supporting minting, listing, buying, and transfers',
      tech: ['Solana Anchor', 'Next.js', 'Wallet Integration'],
      link: 'https://solscan.io',
      type: 'Blockchain'
    },
    {
      title: 'MPC Swap',
      description: 'Solana smart contract for atomic swaps between MPC and GOLD SPL tokens',
      tech: ['Anchor', 'Solana', 'Smart Contracts'],
      link: 'https://explorer.solana.com',
      type: 'Blockchain'
    },
    {
      title: 'Trade Winning Software',
      description: 'ML model forecasting market trends with 85% accuracy for investor decision-making',
      tech: ['Machine Learning', 'MySQL', 'PHP', 'JavaScript'],
      link: '#',
      type: 'AI/ML'
    },
    {
      title: 'CUX Sync Model',
      description: 'Jira-like management system with real-time collaboration using dual databases',
      tech: ['Nest.js', 'Next.js', 'SocketCluster', 'MongoDB', 'PostgreSQL'],
      link: '#',
      type: 'Full Stack'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              Usama Khalid
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 from-opacity-20 to-purple-600 to-opacity-20"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8">
            {/* <div className="w-32 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-4xl font-bold"> */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="https://black-petite-donkey-38.mypinata.cloud/ipfs/bafybeihtwhw5qhcdjwokp4pwn23thwodncfogq6mupgyhnwj7htm5xj5ry"
                  alt="Usama Khalid"
                  className="w-full h-full object-cover"
                />
              </div>

            {/* </div> */}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Usama Khalid
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Full Stack & Blockchain Developer
          </p>
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
            2+ years of experience as a Full Stack and MERN Stack Developer with strong expertise in Web3, DeFi, NFT platforms, Solidity, Rust and modern blockchain technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="mx-auto w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Professional Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack and Blockchain Developer with a Bachelor's degree in Computer Science from Minhaj University Lahore.
                With over 2 years of hands-on experience, I specialize in building cutting-edge Web3 applications, DeFi platforms, and modern web solutions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My expertise spans across blockchain technologies including Ethereum, Solana, and Binance Smart Chain, combined with strong full-stack
                development skills in React.js, Node.js, and modern JavaScript frameworks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                  <Award className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="font-semibold">BS Computer Science</h4>
                  <p className="text-sm text-gray-400">Minhaj University Lahore</p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                  <Users className="w-8 h-8 text-purple-400 mb-2" />
                  <h4 className="font-semibold">2+ Years Experience</h4>
                  <p className="text-sm text-gray-400">Web3 & Full Stack</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600 from-opacity-20 to-pink-600 to-opacity-20 p-6 rounded-xl border border-purple-500 border-opacity-20">
                <Code className="w-12 h-12 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Full Stack Development</h4>
                <p className="text-gray-300">Modern web applications with React.js, Node.js, and cloud technologies</p>
              </div>
              <div className="bg-gradient-to-r from-blue-600 from-opacity-20 to-purple-600 to-opacity-20 p-6 rounded-xl border border-blue-500 border-opacity-20">
                <Link className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Blockchain Expertise</h4>
                <p className="text-gray-300">Smart contracts, DeFi protocols, NFT platforms, and cross-chain solutions</p>
              </div>
              <div className="bg-gradient-to-r from-pink-600 from-opacity-20 to-red-600 to-opacity-20 p-6 rounded-xl border border-pink-500 border-opacity-20">
                <TrendingUp className="w-12 h-12 text-pink-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">AI Integration</h4>
                <p className="text-gray-300">OpenAI APIs, RAG implementation, and machine learning solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {category === 'languages' && <Code className="w-6 h-6 text-blue-400 mr-2" />}
                  {category === 'blockchain' && <Link className="w-6 h-6 text-purple-400 mr-2" />}
                  {category === 'frontend' && <Cpu className="w-6 h-6 text-green-400 mr-2" />}
                  {category === 'backend' && <Database className="w-6 h-6 text-orange-400 mr-2" />}
                  {category === 'tools' && <Award className="w-6 h-6 text-pink-400 mr-2" />}
                  <h3 className="text-xl font-semibold capitalize">
                    {category === 'blockchain' ? 'Web3 & Blockchain' : category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 from-opacity-20 to-purple-600 to-opacity-20 border border-blue-500 border-opacity-30 rounded-full text-sm hover:border-blue-400 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.type === 'Blockchain' ? 'bg-purple-600 bg-opacity-20 text-purple-400 border border-purple-500 border-opacity-30' :
                    project.type === 'Full Stack' ? 'bg-blue-600 bg-opacity-20 text-blue-400 border border-blue-500 border-opacity-30' :
                      'bg-green-600 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30'
                    }`}>
                    {project.type}
                  </span>
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a
                href="mailto:raiusamakhalid@gmail.com"
                className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Mail className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400 text-center text-sm">raiusamakhalid@gmail.com</p>
              </a>
              <a
                href="tel:+923207623119"
                className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700 hover:border-green-500 hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Phone className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-400 text-center text-sm">+92 320 7623119</p>
              </a>
              <div className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700">
                <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-400 text-center text-sm">Lahore, Punjab, Pakistan</p>
              </div>
              <a
                href="https://linkedin.com/in/usama-khalid-234a521a0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Linkedin className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400 text-center text-sm">Connect with me</p>
              </a>
            </div>
          </div>
        </div>

      </section >

      {/* Footer */}
      < footer className="py-8 border-t border-gray-700" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Usama Khalid. Built with React.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer >
    </div >
  );
};

export default App;