import React, { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Award,
  FolderGit2,
  Mail,
} from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home },
  { id: 'about', icon: User },
  { id: 'skills', icon: Code },
  { id: 'experience', icon: Briefcase },
  { id: 'certifications', icon: Award },
  { id: 'projects', icon: FolderGit2 },
  { id: 'contact', icon: Mail },
];

export default function Navbar({ isMenuOpen, setIsMenuOpen, scrollToSection }) {
  const [activeSection, setActiveSection] = useState('home');
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  /* -----------------------------
     SCROLL HIDE / SHOW
  ----------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Always visible near top
      if (currentScroll < 80) {
        setHidden(false);
        lastScrollY.current = currentScroll;
        return;
      }

      if (currentScroll > lastScrollY.current) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* -----------------------------
     SHOW NAVBAR ON MOUSE TOP EDGE
  ----------------------------- */
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY <= 60) {
        setHidden(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* -----------------------------
     SCROLL SPY
  ----------------------------- */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300
      ${hidden ? '-translate-y-full' : 'translate-y-0'}
      bg-slate-900/90 backdrop-blur border-b border-white/10`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Rahul Jhade
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(({ id, icon: Icon }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative flex items-center gap-1 text-sm group"
              >
                <Icon
                  size={14}
                  className={
                    isActive
                      ? 'text-purple-400'
                      : 'text-gray-400 group-hover:text-purple-400'
                  }
                />
                <span
                  className={
                    isActive
                      ? 'text-purple-400'
                      : 'text-gray-300 group-hover:text-purple-400'
                  }
                >
                  {id}
                </span>

                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px]
                    bg-purple-500 rounded-full
                    shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
