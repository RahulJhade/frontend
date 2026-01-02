import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Gradient divider between sections
const SectionDivider = () => (
  <div className="h-14 bg-gradient-to-b from-[#020617] via-[#1e1b4b] to-[#0b1120]" />
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white bg-[#020617]">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Sections with smooth gradient transitions */}
      <Hero scrollToSection={scrollToSection} />
      <SectionDivider />

      <About />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <Experience />
      <SectionDivider />

      <Certifications />
      <SectionDivider />

      <Projects />
      <SectionDivider />

      <Contact />

      <Footer />
    </div>
  );
}
