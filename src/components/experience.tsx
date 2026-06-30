"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

function ExperienceCard({ job, index }: { job: typeof experience[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = expanded ? job.bullets : job.bullets.slice(0, 3);
  const hasMore = job.bullets.length > 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[29px] top-2 h-4 w-4 rounded-full border-2 border-emerald-500 bg-white shadow-sm z-10" />
      
      <div
        onClick={() => hasMore && setExpanded(!expanded)}
        className={`rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-sm p-5 sm:p-6 md:p-8 shadow-sm transition-all duration-300 ${
          hasMore ? "cursor-pointer hover:shadow-lg hover:border-emerald-200" : ""
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">{job.company}</h3>
            <p className="text-sm sm:text-base font-medium text-slate-700 mt-1">{job.role}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4 mt-2 text-xs sm:text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                {job.dates}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {job.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full bg-emerald-50 px-2.5 py-1 sm:px-3 text-[11px] sm:text-xs font-semibold text-emerald-700 border border-emerald-100"
            >
              {metric}
            </span>
          ))}
        </div>

        <ul className="relative space-y-2.5 sm:space-y-3">
          {visibleBullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={expanded ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-sm leading-relaxed text-slate-600"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{bullet}</span>
            </motion.li>
          ))}
          
          {/* Fade gradient when collapsed and has more */}
          {!expanded && hasMore && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
          )}
        </ul>

        {hasMore && (
          <div className="mt-4 flex items-center justify-center">
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700"
            >
              <ChevronDown className="h-4 w-4" />
              <span>{expanded ? "Show less" : `Show ${job.bullets.length - 3} more`}</span>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Experience</h2>
        <div className="mt-2 h-1 w-16 sm:w-20 rounded-full bg-emerald-500" />
      </motion.div>

      <div className="relative ml-1 sm:ml-4 md:ml-6 border-l-2 border-slate-200 pl-6 sm:pl-8 md:pl-10 space-y-8 sm:space-y-10">
        {experience.map((job, index) => (
          <ExperienceCard key={job.company} job={job} index={index} />
        ))}
      </div>
    </section>
  );
}