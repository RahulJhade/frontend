import React from 'react';
import { Code, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section
  id="about"
  className="relative px-4 py-14 bg-[#020617]">
  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1e1b4b]/40 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
            <Code className="text-purple-400 mb-4" size={32} />
            <h3 className="text-2xl font-semibold mb-4">My Background</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a Computer Science student and aspiring software engineer with
              strong interests in Web Development, Salesforce, and Machine
              Learning. I enjoy building real-world projects that combine
              functionality, performance, and clean UI design.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
            <Briefcase className="text-purple-400 mb-4" size={32} />
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <p className="text-gray-300 leading-relaxed">
              I develop web applications using React, Node.js, MongoDB, and
              Tailwind CSS, and I work with Salesforce Admin & Development tools.
              I also explore Machine Learning solutions for healthcare and data-driven problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
