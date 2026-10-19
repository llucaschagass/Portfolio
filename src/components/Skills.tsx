import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 flex items-center gap-4"
      >
        <span className="text-primary">02.</span> Habilidades
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {portfolioData.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="w-full"
          >
            <div className="flex justify-between items-end mb-3 gap-4">
              <span className="text-lg font-semibold text-white">{skill.name}</span>
              <span className="text-sm font-medium text-primary shrink-0">{skill.level}/5</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {[1, 2, 3, 4, 5].map((step) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0.2 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + step * 0.1 }}
                  className="h-3 rounded-full border border-white/5"
                  style={{ backgroundColor: step <= skill.level ? 'var(--primary)' : 'rgba(255,255,255,0.05)' }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
