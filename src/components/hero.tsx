"use client";

import { LiquidButton } from "@/components/ui/liquid-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { LocationMap } from "@/components/ui/expand-map";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, FileText } from "lucide-react";

export function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 50, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const contentX = useTransform(smoothX, [0, 1], [-12, 12]);
  const contentY = useTransform(smoothY, [0, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  return (
    <AuroraBackground className="h-auto min-h-0">
      <section
        onMouseMove={handleMouseMove}
        className="relative flex flex-col justify-center overflow-hidden px-4 pt-8 pb-12 sm:px-6 md:px-12 lg:px-24"
      >
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

            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 60 }}
              className="mt-6 flex flex-wrap gap-5 items-center"
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
              className="mt-8"
            >
              <LocationMap
                location="Berlin, Germany"
                coordinates="52.5200° N, 13.4050° E"
                className="w-[200px] sm:w-[240px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}