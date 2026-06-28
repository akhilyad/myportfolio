"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Wrapper = project.url ? motion.a : motion.div;
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      ref={ref as any}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50, rotateX: 18, rotateY: index % 2 === 0 ? -8 : 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 50, damping: 20 }}
      whileHover={{
        rotateY: 8,
        rotateX: -5,
        translateZ: 60,
        scale: 1.03,
        boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.12)",
      }}
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm overflow-hidden"
      style={{ transformStyle: "preserve-3d", cursor: project.url ? "pointer" : "default" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(16,185,129,0.12), transparent 40%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 border-2 border-emerald-300/50" />

      <div className="relative flex items-start justify-between">
        <h4 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
          {project.name}
        </h4>
        {project.url && (
          <ExternalLink className="h-5 w-5 text-slate-400 transition-colors group-hover:text-emerald-600" />
        )}
      </div>
      <p className="relative mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>
      <div className="relative mt-auto pt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 border border-slate-200"
          >
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:px-12 lg:px-24 bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          style={{ perspective: 1000 }}
        >
          <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase">
            Key Projects
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}