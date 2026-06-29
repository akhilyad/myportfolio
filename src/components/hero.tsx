"use client";

import { LiquidButton } from "@/components/ui/liquid-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, FileText, MapPin, ArrowRight } from "lucide-react";

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
   <AuroraBackground className="h-auto min-h-[calc(100vh-4rem)]">
     <section
       onMouseMove={handleMouseMove}
       className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden px-4 pt-8 pb-16 sm:px-6 md:px-12 lg:px-24"
     >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-100)_10%,var(--indigo-100)_15%,var(--violet-100)_20%,var(--slate-100)_25%,var(--blue-50)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            opacity-50 will-change-transform
            [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"
        ></div>
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
          className="mt-12 flex flex-wrap gap-5 items-center"
        >
          <a href={`mailto:${personalInfo.email}`} className="no-underline">
            <LiquidButton icon={<Mail className="h-4 w-4" />}>
              Contact
            </LiquidButton>
          </a>

          <a
            href="/Akhil_Yadav_ABB_ProjectLeadEngineer.pdf"
            download
            className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/20 backdrop-blur-xl px-7 py-3.5 text-sm font-bold text-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all no-underline cursor-pointer"
          >
            <FileText className="h-5 w-5" />
            <span className="whitespace-nowrap">View Résumé</span>
          </a>

          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/20 backdrop-blur-xl px-7 py-3.5 text-sm font-bold text-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all no-underline cursor-pointer"
          >
            <Linkedin className="h-5 w-5" />
            <span className="whitespace-nowrap">LinkedIn</span>
          </a>
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
  </AuroraBackground>
  );
}