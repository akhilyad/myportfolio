"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, MapPin, ArrowRight, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 -z-10" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34h4v4h-4zM20 20h4v4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let's build something <span className="text-emerald-400">extraordinary</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Open to Data Center Engineering, Critical MEP, DCS Automation and EPC roles in the EU and China. Available immediately.
          </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-colors no-underline cursor-pointer"
        >
          <Mail className="h-5 w-5" />
          Get in Touch
          <ArrowRight className="h-5 w-5" />
        </a>

        <a
          href="/Akhil_Yadav_ABB_ProjectLeadEngineer.pdf"
          download
          className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-600 bg-transparent px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors no-underline cursor-pointer"
        >
          <Download className="h-5 w-5" />
          Download Résumé
        </a>
      </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span className="text-sm">{personalInfo.email}</span>
            </a>
            <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Linkedin className="h-4 w-4" />
              <span className="text-sm">akhilyad</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{personalInfo.location}</span>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-slate-700/50 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}