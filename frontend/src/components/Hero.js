import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Download } from 'lucide-react';

// Hover animation for icons
const iconHover = {
  hover: {
    scale: 1.12,
    y: -3,
    transition: { type: 'spring', stiffness: 300 },
  },
};

export default function Hero({ scrollToSection }) {
  return (
    <section
  id="home"
  className="relative flex items-center justify-center px-4
  py-16 md:py-20
  bg-[#020617]"
>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Profile Image with soft glow (NO round circle) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-500/30 blur-2xl rounded-xl" />

            {/* Image */}
            <img
              src="/profile.png"   // use transparent PNG
              alt="Rahul Jhade"
              className="relative w-56 sm:w-60 rounded-xl object-contain"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-2">
          Hi, I’m{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rahul Jhade
          </span>
        </h1>

        {/* Role */}
        <p className="text-purple-300 font-medium mb-3 text-lg">
          Salesforce Developer | Web Developer
        </p>

        {/* Intro */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-6 text-sm sm:text-base">
          Final year Computer Science student with hands-on experience in Salesforce,
          automation, and data-driven applications.
        </p>

        {/* Social + Actions */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {[
            { icon: Linkedin, link: 'https://www.linkedin.com/in/rahul-jhade-65018b25a' },
            { icon: Github, link: 'https://github.com/RahulJhade' },
            { icon: Mail, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=rahuljhade05@gmail.com' },
            { icon: MessageCircle, link: 'https://wa.me/919353965598' },
            { icon: Download, link: '/Resume.pdf', download: true },
          ].map(({ icon: Icon, link, download }, i) => (
            <motion.a
              key={i}
              href={link}
              {...(download ? { download: true } : {})}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconHover}
              whileHover="hover"
              className="p-3 rounded-full bg-white/5 backdrop-blur
              border border-white/10 hover:bg-purple-600/20 transition"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-lg font-semibold"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-lg font-semibold"
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ['5+', 'Projects'],
            ['15+', 'Skills'],
            ['5', 'Certifications'],
            ['Fresher', 'Experience'],
          ].map(([v, t], i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-3"
            >
              <p className="text-purple-400 font-bold">{v}</p>
              <p className="text-xs text-gray-300">{t}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
