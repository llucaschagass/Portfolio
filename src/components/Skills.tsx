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
            <div className="flex justify-between items-end mb-3">
              <span className="text-lg font-semibold text-white">{skill.name}</span>
              <span className="text-sm font-medium text-primary">{skill.level}</span>
            </div>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full"
                style={{ backgroundColor: 'var(--primary)' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
