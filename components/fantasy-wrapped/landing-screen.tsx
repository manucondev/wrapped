"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { AnimatedBackground } from "./animated-background"

interface LandingScreenProps {
  onStart: () => void
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <AnimatedBackground />

      {/* Content */}
      <motion.div
        className="text-center relative z-10 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* League name */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-[#94A3B8] text-sm tracking-[0.3em] uppercase mb-4">
            Juankar I League
          </p>
        </motion.div>

        {/* Main title */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-black text-[#F8FAFC] tracking-tight leading-none">
            FANTASY
          </h1>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00FF85] to-[#00A3FF] tracking-tight leading-none">
            WRAPPED
          </h1>
        </motion.div>

        {/* Season */}
        <motion.p
          className="text-4xl md:text-5xl font-black text-[#F8FAFC] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          25/26
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-[#94A3B8] text-lg mb-12 max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Tu temporada, resumida sin piedad.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={onStart}
          className="relative group px-10 py-5 rounded-full font-bold text-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF85] via-[#00D970] to-[#00FF85] bg-[length:200%_100%] animate-gradient-x" />
          
          {/* Glow */}
          <div className="absolute inset-0 bg-[#00FF85] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
          
          {/* Border glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00FF85] to-[#00A3FF] rounded-full opacity-50" />
          <div className="absolute inset-[1px] bg-gradient-to-r from-[#00FF85] via-[#00D970] to-[#00FF85] rounded-full bg-[length:200%_100%] animate-gradient-x" />
          
          {/* Shine sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full" />
          
          <span className="relative z-10 flex items-center gap-3 text-black font-bold tracking-wide">
            <Play className="w-5 h-5 fill-current" />
            EMPEZAR REWIND
          </span>
        </motion.button>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FF85]/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
    </div>
  )
}
