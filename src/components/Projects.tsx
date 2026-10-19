import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const Projects = () => {
  return (
    <section id="portfolio" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 flex items-center gap-4"
      >
        <span className="text-primary">04.</span> Meus Projetos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary">{t}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={project.frontendUrl} target="_blank" rel="noreferrer" className="btn-outline text-sm !px-4 !py-2">
                <GithubIcon /> Frontend
              </a>
              <a href={project.backendUrl} target="_blank" rel="noreferrer" className="btn-outline text-sm !px-4 !py-2">
                <GithubIcon /> Backend
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 mb-6">Confira mais projetos em meu GitHub</p>
        <a href={portfolioData.personalInfo.socials.github} target="_blank" rel="noreferrer" className="btn-outline inline-flex">
          Ver Perfil Completo
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
