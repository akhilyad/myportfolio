"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, FileText, MapPin, ArrowRight } from "lucide-react";
import { MagneticButton } from "./magnetic-button";

export function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 50, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const orbX = useTransform(smoothX, [0, 1], [-40, 40]);
  const orbY = useTransform(smoothY, [0, 1], [-40, 40]);
  const contentX = useTransform(smoothX, [0, 1], [-12, 12]);
  const contentY = useTransform(smoothY, [0, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  const sentences = personalInfo.summary
    .split(/\. (?=[A-Z])/)
    .filter(Boolean)
    .map((s) => s.trim() + (s.endsWith(".") ? "" : "."));

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden px-4 pt-8 pb-16 sm:px-6 md:px-12 lg:px-24"
    >
      {/* Ambient depth orbs with parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="absolute -top-20 -right-20 h-[700px] w-[700px] rounded-full bg-emerald-100/50 blur-3xl"
        />
        <motion.div
          style={{ x: useTransform(orbX, (v) => v * -0.6), y: useTransform(orbY, (v) => v * -0.6) }}
          className="absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-slate-200/60 blur-3xl"
        />
      </div>

      <motion.div
        style={{ x: contentX, y: contentY, perspective: 1200 }}
        className="mx-auto w-full max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, rotateX: 15, translateZ: -80, y: 50 }}
          animate={{ opacity: 1, rotateX: 0, translateZ: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 70 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-800 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            {personalInfo.available}
          </motion.div>

          <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 md:text-7xl lg:text-8xl leading-[0.95]">
            {personalInfo.name}
          </h1>

          <motion.h2
            initial={{ opacity: 0, x: -40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 0.7, type: "spring", stiffness: 70 }}
            className="mt-6 font-semibold text-slate-700 whitespace-nowrap text-[clamp(9px,2.4vw,28px)] tracking-tight"
            style={{ transformStyle: "preserve-3d" }}
          >
            {personalInfo.title}
          </motion.h2>

          <div className="mt-8 max-w-3xl space-y-3" style={{ perspective: 800 }}>
            {sentences.map((sentence, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, rotateX: 20, y: 25, translateZ: -50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0, translateZ: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.7, type: "spring", stiffness: 60 }}
                className="text-lg leading-relaxed text-slate-600 hyphens-none md:text-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {sentence}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 60 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <MagneticButton
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition-colors hover:bg-emerald-800"
          >
            <Mail className="h-4 w-4" />
            Contact
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>

          <MagneticButton
            href="/Akhil_Yadav_ABB_ProjectLeadEngineer.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <FileText className="h-4 w-4" />
            View Résumé
          </MagneticButton>

          <MagneticButton
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex items-center gap-2 text-sm text-slate-500"
        >
          <MapPin className="h-4 w-4" />
          <span>{personalInfo.location}</span>
          <span className="mx-2">·</span>
          <span>{personalInfo.email}</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-300 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="h-2 w-full rounded-full bg-slate-400"
          />
        </div>
      </motion.div>
    </section>
  );
}