import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col md:flex-row gap-16 items-stretch">
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 flex items-center gap-4"
          >
            <span className="text-primary">01.</span> Sobre Mim
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            {portfolioData.personalInfo.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col gap-4 w-full">
          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex-1 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
