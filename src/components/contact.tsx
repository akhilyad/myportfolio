"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 -z-10" />
      
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Akhil Yadav. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}