"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Wind, Zap, BarChart3, Factory, Satellite, FlaskConical } from "lucide-react";

const categoryConfig: Record<string, { color: string; bgColor: string; icon: React.ReactNode }> = {
  "Energy": { color: "bg-amber-500", bgColor: "bg-amber-50", icon: <Zap className="h-4 w-4 text-amber-600" /> },
  "Data Center": { color: "bg-blue-500", bgColor: "bg-blue-50", icon: <BarChart3 className="h-4 w-4 text-blue-600" /> },
  "Industrial": { color: "bg-slate-600", bgColor: "bg-slate-50", icon: <Factory className="h-4 w-4 text-slate-600" /> },
  "Research": { color: "bg-violet-500", bgColor: "bg-violet-50", icon: <FlaskConical className="h-4 w-4 text-violet-600" /> },
  "Offshore": { color: "bg-cyan-500", bgColor: "bg-cyan-50", icon: <Wind className="h-4 w-4 text-cyan-600" /> },
  "Satellite": { color: "bg-rose-500", bgColor: "bg-rose-50", icon: <Satellite className="h-4 w-4 text-rose-600" /> },
};

function getCategory(title: string): string {
  if (title.includes("Wind") || title.includes("Offshore") || title.includes("Platform")) return "Offshore";
  if (title.includes("Hydrogen") || title.includes("Power") || title.includes("Energy")) return "Energy";
  if (title.includes("Dashboard") || title.includes("Procurement")) return "Data Center";
  if (title.includes("DCS") || title.includes("Migration")) return "Industrial";
  if (title.includes("Satellite")) return "Satellite";
  return "Research";
}

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
        {projects.map((project, index) => {
          const category = getCategory(project.name);
          const config = categoryConfig[category];

          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Colored header bar */}
              <div className={`h-1.5 w-full ${config.color}`} />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`flex items-center justify-center h-8 w-8 rounded-lg ${config.bgColor}`}>
                    {config.icon}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{category}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    View Project
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}