import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Development",
      skills: ["JavaScript", "Python", "Java", "SQL"],
    },
    {
      title: "Salesforce",
      skills: [
        "Sales Cloud",
        "Service Cloud",
        "Flows",
        "Apex",
        "Lightning Web Components (LWC)",
      ],
    },
    {
      title: "Data & DevOps",
      skills: [
        "Microsoft Power BI",
        "Docker",
        "DevOps Basics",
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <section
  id="skills"
  className="relative px-4 py-14 bg-[#020617]">
  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1e1b4b]/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full text-sm text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
