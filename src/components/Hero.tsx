import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-[100svh] flex flex-col justify-center items-center text-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative"
      >
        <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl mx-auto">
          <img 
            src="/perfil.jpg" 
            alt="Lucas Chagas" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200';
            }}
          />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-primary text-black font-bold px-4 py-2 rounded-lg shadow-lg">
          Olá! 👋
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold mb-4"
      >
        Eu sou <span className="gradient-text">{portfolioData.personalInfo.name}</span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl text-gray-400 font-medium mb-8 h-12"
      >
        Eu sou um{' '}
        <span className="text-primary">
          <Typewriter
            words={portfolioData.personalInfo.roles}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl text-gray-400 text-lg mb-10 mx-auto leading-relaxed"
      >
        {portfolioData.personalInfo.description}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a href={portfolioData.personalInfo.cvUrl} className="btn-primary" target="_blank" rel="noreferrer">
          <Download size={20} />
          Baixar Currículo
        </a>
        <a href="#about" className="btn-outline">
          Saber Mais
        </a>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
