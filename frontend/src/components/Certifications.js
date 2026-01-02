import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

// Scroll reveal animation
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Certifications() {
  const certifications = [
    {
      title: "Salesforce Admin Project Master Class (Beginners)",
      issuer: "Udemy",
      value:
        "Hands-on experience with Salesforce admin concepts including objects, automation, security, and reports.",
      link: "/Certificates/SalesforceAdmin_Udmey.pdf",
    },
    {
      title: "LastMile Program – Salesforce AI Agent Developer Track",
      issuer: "SmartBridge (in collaboration with TCS)",
      value:
        "Practical exposure to Salesforce AI-driven solutions, automation, and real-world enterprise use cases.",
      link: "/Certificates/LastMile_Program_Salesforce.pdf",
    },
    {
      title: "Agentforce Specialist",
      issuer: "Salesforce",
      value:
        "Focused training on Salesforce Agentforce features and intelligent automation capabilities.",
      link: "/Certificates/AgentForce_Specialist.pdf",
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      value:
        "Strong understanding of SQL queries, joins, filtering, and data retrieval from relational databases.",
      link: "/Certificates/SQL_Basic.pdf",
    },
    {
      title: "DevOps with Docker",
      issuer: "Infosys Springboard",
      value:
        "Learned containerization concepts using Docker for building, packaging, and deploying applications.",
      link: "/Certificates/DevOps_with_Docker.pdf",
    },
  ];

  return (
    <section
  id="certifications"
  className="relative px-4 py-14 bg-[#020617]">
  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1e1b4b]/40 to-transparent pointer-events-none" />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-purple-500/40 transition"
            >
              <div className="flex items-start gap-4">
                <Award className="text-purple-400 mt-1" size={26} />

                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-purple-400 mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {cert.value}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
