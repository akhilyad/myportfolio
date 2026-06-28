"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          style={{ perspective: 1000 }}
        >
          <h3 className="text-4xl font-extrabold text-slate-900">
            Get in touch
          </h3>
          <p className="mt-4 max-w-xl text-lg text-slate-600 leading-relaxed">
            Open to Data Center Engineering, Critical MEP, DCS Automation and
            EPC roles in the EU and China. Available immediately.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ scale: 1.05, x: 4, rotateY: 4, translateZ: 20, boxShadow: "0 15px 30px -10px rgba(16,185,129,0.2)" }}
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 text-emerald-700 transition-colors hover:text-emerald-800"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 transition-colors group-hover:bg-emerald-100">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</p>
                <p className="font-bold text-lg">{personalInfo.email}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, x: 4, rotateY: 4, translateZ: 20, boxShadow: "0 15px 30px -10px rgba(16,185,129,0.2)" }}
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-emerald-700 transition-colors hover:text-emerald-800"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200 transition-colors group-hover:bg-emerald-100">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">LinkedIn</p>
                <p className="font-bold text-lg">akhilyad</p>
              </div>
              <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.a>

            <div className="inline-flex items-center gap-3 text-slate-500">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 border border-slate-200">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</p>
                <p className="font-bold text-lg">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
            <p className="text-sm font-semibold text-slate-500">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-slate-400">
              Built with Next.js · Tailwind CSS · Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}