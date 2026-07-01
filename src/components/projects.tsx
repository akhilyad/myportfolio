"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Offshore Wind Scenario Modelling (Dogger Bank)",
    description: "Developed multi-scenario power system models for the Dogger Bank offshore wind complex, integrating PyPSA-based energy system simulations with real-world meteorological and grid constraint data to validate turbine layouts and inter-array cable routing.",
    tags: ["PyPSA", "Python", "Offshore Wind", "Grid Integration"],
    glowColor: "blue" as const,
    link: "https://docs.google.com/spreadsheets/d/16kuogiz568CArvaD8rarbTpXbpB7gqw6FpeSNKOvMBE/edit?usp=sharing",
    linkLabel: "Go to Project",
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
    <section id="projects" className="py-14 sm:py-16 md:py-24 px-6 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-10 md:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Key Projects</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-emerald-500" />
      </motion.div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="min-w-0 flex justify-center md:justify-start"
          >
            <GlowCard
              glowColor={project.glowColor}
              customSize
              className="h-full w-full max-w-[340px] sm:max-w-none !p-5 sm:!p-6 !gap-3 sm:!gap-4 !rounded-2xl !shadow-none hover:!shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 leading-snug">
                  {project.name}
                </h3>
                <p className="text-[13px] sm:text-sm leading-relaxed text-slate-600 mb-4 sm:mb-5 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100/80 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium text-slate-600 border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    {project.linkLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}