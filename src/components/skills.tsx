"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:px-12 lg:px-24 bg-slate-50/50">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          style={{ perspective: 1000 }}
        >
          <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase">
            Technical Skills
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30, rotateX: 10, rotateY: -3 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.12, type: "spring", stiffness: 50, damping: 20 }}
              whileHover={{
                y: -10,
                rotateY: 4,
                rotateX: -3,
                translateZ: 30,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
              }}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                {category.category}
              </h4>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 80 }}
                    whileHover={{ scale: 1.08, rotateZ: 2, translateZ: 10 }}
                    className="rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-800 border border-emerald-100 cursor-default"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}