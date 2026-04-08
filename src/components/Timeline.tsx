import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Timeline = () => {
  return (
    <section id="experience" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 flex items-center gap-4"
      >
        <span className="text-primary">03.</span> Trajetória
      </motion.h2>

      <div className="space-y-12">
        {portfolioData.experience.map((item, index) => (
          <motion.div
            key={item.title + index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-12 border-l-2 border-primary/30"
          >
            {/* Icon */}
            <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-bg-dark border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/20">
              {item.title.toLowerCase().includes('técnico') || item.title.toLowerCase().includes('engenharia') ? (
                <GraduationCap size={20} />
              ) : (
                <Briefcase size={20} />
              )}
            </div>

            <div className="glass-card">
              <span className="text-sm font-bold text-primary mb-2 block tracking-wider">
                {item.duration}
              </span>
              <h3 className="text-2xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-lg font-medium text-gray-300 mb-4">
                {item.institution}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
