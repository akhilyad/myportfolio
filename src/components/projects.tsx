"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const projects = [
  {
    name: "Offshore Wind Scenario Modelling (Dogger Bank)",
    description: "Developed multi-scenario power system models for the Dogger Bank offshore wind complex, integrating PyPSA-based energy system simulations with real-world meteorological and grid constraint data to validate turbine layouts and inter-array cable routing.",
    tags: ["PyPSA", "Python", "Offshore Wind", "Grid Integration"],
    glowColor: "blue" as const,
  },
  {
    name: "Gas Leak Detection ML Pipeline",
    description: "Built an end-to-end machine learning pipeline for real-time gas leak detection in process plants, combining acoustic sensor arrays with anomaly detection algorithms to achieve sub-second response times and 99.2% classification accuracy.",
    tags: ["Python", "TensorFlow", "Signal Processing", "DCS Integration"],
    glowColor: "purple" as const,
  },
  {
    name: "Green Hydrogen Cost Modelling",
    description: "Created a comprehensive techno-economic model for green hydrogen production facilities, incorporating electrolyser degradation curves, renewable energy intermittency profiles, and CAPEX/OPEX sensitivity analysis for investment decision support.",
    tags: ["PyPSA", "Excel VBA", "Techno-Economic Analysis", "Renewables"],
    glowColor: "green" as const,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Key Projects</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-emerald-500" />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <GlowCard
              glowColor={project.glowColor}
              customSize
              className="h-full w-full !p-6 !gap-4 !rounded-2xl !shadow-none hover:!shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-5 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100/80 px-2.5 py-1 text-xs font-medium text-slate-600 border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}