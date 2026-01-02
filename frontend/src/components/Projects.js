import React from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Brain Tumor Detection System",
      description:
        "CNN-based system to classify MRI brain tumor images using deep learning techniques.",
      tech: ["Python", "TensorFlow", "CNN", "Flask"],
      github: "https://github.com/RahulJhade/brain-tumor-detection",
      live: "",
    },
    {
      title: "Face Recognition System",
      description:
        "Face recognition system using computer vision and deep learning to identify and verify human faces from images or live video.",
      tech: ["Python", "OpenCV", "Deep Learning", "FaceNet"],
      github: "https://github.com/RahulJhade/face-recognition",
      live: "",
    },
    {
      title: "HandsMenThreads-Elevating-the-Art-of-Sophistication-in-Men-s-Fashion",
      description:
        "Implemented Salesforce automation using flows, validation rules, reports, and security settings.",
      tech: ["Salesforce", "Flows", "Automation"],
      github: "https://github.com/RahulJhade/HandsMenThreads-Elevating-the-Art-of-Sophistication-in-Men-s-Fashion",
      live: "",
    },
  ];

  return (
    <section
  id="projects"
  className="relative px-4 py-14 bg-[#020617]">
  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1e1b4b]/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-purple-500 transition-all hover:scale-105"
            >
              {/* Project Icon */}
              <div className="h-40 flex items-center justify-center">
                <Code size={42} className="text-purple-400" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/20 px-3 py-1 rounded-full text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Redirect Buttons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    <Github size={16} /> GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
