import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Publications from './components/Publications';
import Contact from './components/Contact';
import CADPortfolio from './components/CADPortfolio';
import { CircuitBackground } from './utils/CircuitElements';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-blue-400 flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin mb-4"></div>
          <p className="text-xl font-mono tracking-widest">INITIALIZING CIRCUITS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-['Roboto_Mono',_monospace] relative overflow-hidden">
      <CircuitBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Research />
          <Experience />
          <Projects />
          <Publications />
            {/* CAD Portfolio Section */}
            <CADPortfolio />
          <Contact />
        </main>
        <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Diti Chhaproo | Systems Engineering Portfolio</p>
            <p className="mt-2 text-xs">Designed with <span className="text-red-500">❤</span> and circuit traces</p>
          </div>
        </footer>
      </div>

      {/* Back to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all duration-200"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
