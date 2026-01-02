import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section
  id="experience"
 className="relative px-4 py-14 bg-[#020617]">
  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1e1b4b]/40 to-transparent pointer-events-none" />

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex gap-3">
            <Briefcase className="text-purple-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Salesforce Developer Intern</h3>
              <p className="text-purple-400 text-sm">TheSmartBridge · Jul–Oct 2025</p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-3 space-y-1">
                <li>Sales & Service Cloud automation</li>
                <li>Apex classes and LWC</li>
                <li>Flows, dashboards, and reports</li>
                <li>Data migration and deployment support</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
