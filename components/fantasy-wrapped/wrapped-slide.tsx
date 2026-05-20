"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface WrappedSlideProps {
  children: ReactNode
  className?: string
}

export const slideVariants = {
  initial: { opacity: 0, scale: 0.95, filter: "blur(12px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 1.02, filter: "blur(8px)" },
}

export function WrappedSlide({ children, className = "" }: WrappedSlideProps) {
  return (
    <motion.div
      className={`h-[100svh] min-h-[100svh] overflow-hidden flex flex-col items-center justify-start px-5 pt-[calc(env(safe-area-inset-top)+4.75rem)] pb-[calc(env(safe-area-inset-bottom)+6.5rem)] relative ${className}`}
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
