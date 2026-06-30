"use client";

import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { LocationTag } from "@/components/ui/location-tag";
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
    <AuroraBackground className="h-auto min-h-0 overflow-x-hidden">
      <section
        onMouseMove={handleMouseMove}
        className="relative flex flex-col justify-center overflow-hidden px-5 sm:px-6 md:px-12 lg:px-24 pt-20 pb-10 sm:pt-24 sm:pb-12"
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
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              {personalInfo.name}
            </h1>

            <motion.h2
              initial={{ opacity: 0, x: -40, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.7, type: "spring", stiffness: 70 }}
              className="mt-4 sm:mt-5 font-semibold text-slate-700 text-[clamp(11px,2.2vw,26px)] tracking-tight overflow-hidden text-ellipsis"
              style={{ transformStyle: "preserve-3d" }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 60 }}
              className="relative z-10 mt-5 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 md:gap-5 items-center"
            >
              <GlassButton
                type="button"
                aria-label="Contact"
                onClick={() => {
                  window.location.href = `mailto:${personalInfo.email}`;
                }}
                glassColor="oklch(from var(--foreground) l c h / 8%)"
                className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm font-bold rounded-full"
                contentClassName="gap-2"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">Contact</span>
              </GlassButton>

              <GlassButton
                type="button"
                aria-label="Resume"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/myportfolio/Akhil_Yadav_ABB_ProjectLeadEngineer.pdf";
                  link.download = "Akhil_Yadav_ABB_ProjectLeadEngineer.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                glassColor="oklch(from var(--foreground) l c h / 8%)"
                className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm font-bold rounded-full"
                contentClassName="gap-2"
              >
                <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">Resume</span>
              </GlassButton>

              <GlassButton
                type="button"
                aria-label="LinkedIn"
                onClick={() => {
                  window.open(personalInfo.linkedIn, "_blank", "noopener,noreferrer");
                }}
                glassColor="oklch(from var(--foreground) l c h / 8%)"
                className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm font-bold rounded-full"
                contentClassName="gap-2"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">LinkedIn</span>
              </GlassButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-6 sm:mt-8"
            >
              <LocationTag
                city="Berlin"
                country="Germany"
                timezone="CET"
                ianaTimeZone="Europe/Berlin"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}