"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Technical Skills</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-blue-500" />
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}