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
        {skills.map((domain, index) => (
          <motion.div
            key={domain.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlowCard
              glowColor={domain.glowColor}
              customSize
              className="h-full w-full !p-6 !gap-4 !rounded-2xl !shadow-none hover:!shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                  {domain.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {domain.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-50/80 px-3 py-1.5 text-sm font-medium text-slate-700 border border-slate-100/80 hover:border-slate-300 hover:bg-white transition-colors cursor-default"
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