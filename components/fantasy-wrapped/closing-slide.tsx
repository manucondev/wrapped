"use client"

import { motion } from "framer-motion"
import { RotateCcw } from "lucide-react"

interface ClosingSlideProps {
  onRestart: () => void
}

export function ClosingSlide({ onRestart }: ClosingSlideProps) {
  return (
    <div className="max-w-md mx-auto text-center">
      {/* Decorative lines */}
      <motion.div
        className="w-16 h-px bg-gradient-to-r from-transparent via-[#00FF85] to-transparent mx-auto mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h2
        className="text-3xl md:text-4xl font-black text-[#F8FAFC] mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Esto fue la Juankar I League 25/26
      </motion.h2>

      <motion.p
        className="text-lg text-[#94A3B8] mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Nos vemos en la próxima temporada.
      </motion.p>

      <motion.button
        onClick={onRestart}
        className="relative group px-8 py-4 rounded-full font-bold text-base overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Button background */}
        <div className="absolute inset-0 bg-[#0a0f1a] border border-white/10 rounded-full group-hover:border-[#00FF85]/30 transition-colors" />
        
        {/* Hover glow */}
        <div className="absolute inset-0 bg-[#00FF85]/0 group-hover:bg-[#00FF85]/5 rounded-full transition-colors" />
        
        <span className="relative z-10 flex items-center gap-2 text-[#F8FAFC] group-hover:text-[#00FF85] transition-colors">
          <RotateCcw className="w-4 h-4" />
          Volver al inicio
        </span>
      </motion.button>

      {/* Bottom decorative element */}
      <motion.div
        className="mt-16 flex justify-center items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-8 h-px bg-white/10" />
        <p className="text-xs text-[#94A3B8] tracking-wider">FANTASY WRAPPED</p>
        <div className="w-8 h-px bg-white/10" />
      </motion.div>
    </div>
  )
}
