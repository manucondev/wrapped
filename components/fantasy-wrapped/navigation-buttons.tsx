"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationButtonsProps {
  onNext: () => void
  onPrev?: () => void
  nextLabel?: string
  showPrev?: boolean
  isLastSlide?: boolean
}

export function NavigationButtons({
  onNext,
  onPrev,
  nextLabel = "Siguiente",
  showPrev = true,
  isLastSlide = false,
}: NavigationButtonsProps) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 p-4 pb-6 flex gap-3 justify-center z-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {showPrev && onPrev && (
        <motion.button
          onClick={onPrev}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0a0f1a] border border-white/10 text-white/70 hover:text-white hover:border-[#00FF85]/30 transition-all active:scale-95"
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      )}
      <motion.button
        onClick={onNext}
        className="relative flex items-center justify-center gap-2 px-8 h-14 rounded-full font-semibold text-base transition-all active:scale-95 overflow-hidden group"
        whileTap={{ scale: 0.95 }}
      >
        {/* Button background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF85] to-[#00A3FF]" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF85] to-[#00A3FF] blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
        
        {/* Shine sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        <span className="relative z-10 text-black font-bold tracking-wide">{nextLabel}</span>
        {!isLastSlide && <ChevronRight className="relative z-10 w-5 h-5 text-black" />}
      </motion.button>
    </motion.div>
  )
}
