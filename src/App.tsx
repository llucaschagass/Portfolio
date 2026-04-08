import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-bg-dark text-text-main">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Lucas Chagas. Todos os direitos reservados.</p>
        <p className="mt-2">Feito com React, Vite e Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
