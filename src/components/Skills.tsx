import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const iconUrl = (icon: string) => {
  const variant = icon === "react" || icon === "mysql" ? "original" : "plain";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@2.16.0/icons/${icon}/${icon}-${variant}.svg`;
};

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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {portfolioData.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card flex flex-col items-center gap-4 py-8"
          >
            <span
              aria-hidden="true"
              className="w-12 h-12 bg-primary"
              style={{
                maskImage: `url(${iconUrl(skill.icon)})`,
                WebkitMaskImage: `url(${iconUrl(skill.icon)})`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center"
              }}
            />
            <span className="text-base font-semibold text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
