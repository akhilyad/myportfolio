"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ExternalLink } from "lucide-react";

const papers = [
  {
    name: "A Comparative Study of Machine Learning Algorithms for Gas Leak Detection",
    description: "Published research on machine learning algorithms for gas leak detection in industrial environments. Springer Singapore, 2020 — covering feature engineering and classifier optimisation.",
    tags: ["Python", "Scikit-learn", "Signal Processing"],
    glowColor: "orange" as const,
    link: "https://www.researchgate.net/publication/345485153_A_Comparative_Study_of_Machine_Learning_Algorithms_for_Gas_Leak_Detection",
    linkLabel: "Read Paper",
  },
  {
    name: "Green Hydrogen Cost Modelling",
    description: "Thesis modelling green hydrogen LCOH across 9 countries using PyPSA with 8,760 hourly dispatch steps. Key finding: a 1% rise in financing cost (WACC) cancels a 10% gain in renewable output.",
    tags: ["PyPSA", "Python", "Energy Economics"],
    glowColor: "red" as const,
  },
];

export function ResearchPapers() {
  return (
    <section id="research-papers" className="py-14 sm:py-16 md:py-24 px-6 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-10 md:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Research Papers</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-orange-500" />
      </motion.div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
        {papers.map((paper, index) => (
          <motion.div
            key={paper.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="min-w-0 flex justify-center md:justify-start"
          >
            <GlowCard
              glowColor={paper.glowColor}
              customSize
              className="h-full w-full max-w-[340px] sm:max-w-none !p-5 sm:!p-6 !gap-3 sm:!gap-4 !rounded-2xl !shadow-none hover:!shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 leading-snug">
                  {paper.name}
                </h3>
                <p className="text-[13px] sm:text-sm leading-relaxed text-slate-600 mb-4 sm:mb-5 flex-grow">
                  {paper.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100/80 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium text-slate-600 border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    {paper.linkLabel}
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
