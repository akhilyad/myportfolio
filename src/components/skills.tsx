"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const skills = [
  {
    category: "DCS & AUTOMATION",
    items: ["ABB 800xA", "Yokogawa CENTUM VP", "IEC 61131-3 (ST, FBD, Ladder)", "SCADA/HMI Design", "Object-Based Engineering", "NAMUR NE 107", "HAC Redundancy", "OPC DA/AE/UA", "Modbus TCP/RTU", "IEC 61850"],
    glowColor: "blue" as const,
  },
  {
    category: "PROJECT ENGINEERING",
    items: ["SLD Review", "Control Schematics", "ISA Sheets", "BOMs", "FDS / MRB Index", "I/O Lists", "Design Authority", "PyPSA Modelling", "PCA + DNN"],
    glowColor: "purple" as const,
  },
  {
    category: "COMMISSIONING",
    items: ["FAT / SAT", "Loop Checks", "Pre-Commissioning", "RFI Resolution", "Alarm Rationalisation", "Defect Density Reduction", "99.7–99.9% Uptime Delivery"],
    glowColor: "green" as const,
  },
  {
    category: "STRATEGIC PROCUREMENT",
    items: ["Vendor Management", "Contract Administration", "Conflict Resolution", "Change Management"],
    glowColor: "orange" as const,
  },
  {
    category: "TOOLS & SOFTWARE",
    items: ["AutoCAD", "SAP Ariba / ERP", "Power BI", "MS Project", "MS Excel (Advanced)", "Python"],
    glowColor: "red" as const,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-16 md:py-24 px-6 sm:px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-10 md:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Technical Skills</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-blue-500" />
      </motion.div>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 items-start">
        {skills.map((domain, index) => (
          <motion.div
            key={domain.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="min-w-0 flex justify-center md:justify-start"
          >
            <GlowCard
              glowColor={domain.glowColor}
              customSize
              className="w-full max-w-[340px] sm:max-w-none !p-4 sm:!p-5 !gap-2 !rounded-2xl !shadow-none hover:!shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="flex flex-col">
                <h3 className="mb-2.5 sm:mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                  {domain.category}
                </h3>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {domain.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-50/80 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-medium text-slate-700 border border-slate-100/80 hover:border-slate-300 hover:bg-white transition-colors cursor-default"
                    >
                      {item}
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