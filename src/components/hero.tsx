        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 60 }}
          className="mt-12 flex flex-wrap gap-5"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 transition-colors no-underline"
          >
            <Mail className="h-5 w-5" />
            <span className="whitespace-nowrap">Contact</span>
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          <motion.a
            href="/Akhil_Yadav_ABB_ProjectLeadEngineer.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-slate-300 bg-white/80 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-slate-800 hover:bg-white hover:border-slate-400 transition-all no-underline"
          >
            <FileText className="h-5 w-5" />
            <span className="whitespace-nowrap">View Résumé</span>
          </motion.a>

          <motion.a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-slate-300 bg-white/80 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-slate-800 hover:bg-white hover:border-slate-400 transition-all no-underline"
          >
            <Linkedin className="h-5 w-5" />
            <span className="whitespace-nowrap">LinkedIn</span>
          </motion.a>
        </motion.div>