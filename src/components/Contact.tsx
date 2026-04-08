import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 flex items-center gap-4"
      >
        <span className="text-primary">05.</span> Contato
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Vamos conversar!</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Sinta-se à vontade para entrar em contato para oportunidades, 
              colaborações ou apenas para trocar uma ideia sobre tecnologia.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              { icon: <Mail />, label: 'Email', value: portfolioData.personalInfo.email, link: `mailto:${portfolioData.personalInfo.email}` },
              { icon: <Phone />, label: 'Telefone', value: portfolioData.personalInfo.phone, link: `tel:${portfolioData.personalInfo.phone.replace(/\D/g, '')}` },
              { icon: <MapPin />, label: 'Localização', value: portfolioData.personalInfo.location },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-lg font-bold text-white hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-bold text-white">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 pt-6">
            <a href={portfolioData.personalInfo.socials.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href={portfolioData.personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href={portfolioData.personalInfo.socials.whatsapp} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
              <MessageCircle />
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-[1.5] glass-card"
        >
          <form action="https://api.staticforms.xyz/submit" method="post" className="space-y-6 p-4">
            <input type="hidden" name="accessKey" value="950d96db-4b76-41e4-9faa-1f499d366207" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Seu Nome</label>
                <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Seu E-mail</label>
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Assunto</label>
              <input type="text" name="subject" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Mensagem</label>
              <textarea name="message" rows={6} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
              <Send size={20} />
              Enviar Mensagem
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
