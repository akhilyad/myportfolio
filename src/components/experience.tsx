"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Experience() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="experience" className="relative px-6 py-28 md:px-12 lg:px-24 bg-slate-50/50">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          style={{ perspective: 1000 }}
        >
          <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase">
            Experience
          </p>
        </motion.div>

        <div className="relative mt-16 space-y-14">
          <div className="absolute left-4 top-4 bottom-4 w-px bg-slate-200 md:left-6" />

          {experience.map((job, index) => {
            const isOpen = openItems.has(index);

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -40, rotateY: -5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.12, type: "spring", stiffness: 60 }}
                className="relative pl-12 md:pl-20"
                style={{ perspective: 1000 }}
              >
                {/* Pulsing timeline dot */}
                <motion.div
                  className="absolute left-2.5 top-3 h-4 w-4 rounded-full border-4 border-white bg-emerald-600 shadow-md md:left-4.5"
                  animate={
                    isOpen
                      ? {
                          scale: [1, 1.4, 1],
                          boxShadow: [
                            "0 0 0 0px rgba(16,185,129,0.5)",
                            "0 0 0 10px rgba(16,185,129,0)",
                            "0 0 0 0px rgba(16,185,129,0.5)",
                          ],
                        }
                      : { scale: 1, boxShadow: "0 0 0 0px rgba(16,185,129,0)" }
                  }
                  transition={{ repeat: isOpen ? Infinity : 0, duration: 2.2 }}
                />

                <motion.div
                  animate={{
                    translateZ: isOpen ? 30 : 0,
                    scale: isOpen ? 1.01 : 1,
                  }}
                  whileHover={{
                    rotateY: isOpen ? 0 : 2,
                    rotateX: isOpen ? 0 : -1,
                    translateZ: isOpen ? 30 : 20,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {job.company}
                      </h4>
                      <p className="text-lg font-semibold text-slate-700">
                        {job.role}
                      </p>
                    </div>
                    <time className="mt-1 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 tabular-nums sm:mt-0">
                      {job.dates}
                    </time>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {job.location}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.metrics.map((m) => (
                      <span
                        key={m}
                        className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 border border-emerald-100"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleItem(index)}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-200 active:scale-95"
                  >
                    {isOpen ? (
                      <>
                        Click to Collapse <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Click to Expand <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`content-${index}`}
                        initial={{ height: 0, opacity: 0, rotateX: -12, translateZ: -40 }}
                        animate={{ height: "auto", opacity: 1, rotateX: 0, translateZ: 0 }}
                        exit={{ height: 0, opacity: 0, rotateX: -12, translateZ: -40 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                        style={{ transformStyle: "preserve-3d", perspective: 800 }}
                      >
                        <ul className="mt-6 space-y-4">
                          {job.bullets.map((bullet, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -25, rotateX: -10 }}
                              animate={{ opacity: 1, x: 0, rotateX: 0 }}
                              exit={{ opacity: 0, x: -25 }}
                              transition={{ delay: i * 0.08, duration: 0.4, type: "spring", stiffness: 80 }}
                              className="flex gap-3 text-base leading-relaxed text-slate-600"
                              style={{ transformStyle: "preserve-3d" }}
                            >
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}