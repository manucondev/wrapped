"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import type { ManagerWrapped } from "@/data/mock-data"

interface AwardSlideProps {
  award: ManagerWrapped["personalAward"]
}

export function AwardSlide({ award }: AwardSlideProps) {
  return (
    <div className="max-w-sm mx-auto text-center">
      <motion.p
        className="text-[#94A3B8] text-xs tracking-[0.2em] uppercase mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Tu premio personal
      </motion.p>

      {/* Trophy/Award icon */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
      >
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#FACC15] rounded-full blur-[80px] opacity-20" />
        
        {/* Award container */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#FACC15]/30" />
          
          {/* Inner circle */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-b from-[#FACC15]/10 to-transparent border border-[#FACC15]/20 flex items-center justify-center">
            <Award className="w-12 h-12 text-[#FACC15]" strokeWidth={1.5} />
          </div>
          
          {/* Animated ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#FACC15]/50"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Award Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-black text-[#FACC15] mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {award.title}
      </motion.h2>

      {/* Award Description */}
      <motion.p
        className="text-[#94A3B8] text-base leading-relaxed max-w-xs mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {award.description}
      </motion.p>

      {/* Bottom accent */}
      <motion.div
        className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent mx-auto"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      />
    </div>
  )
}
