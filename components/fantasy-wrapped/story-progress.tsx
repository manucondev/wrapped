"use client"

import { motion } from "framer-motion"

interface StoryProgressProps {
  current: number
  total: number
}

export function StoryProgress({ current, total }: StoryProgressProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 pb-2 bg-gradient-to-b from-black/60 to-transparent">
      <div className="flex gap-1 max-w-lg mx-auto">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-[3px] rounded-full bg-white/10 overflow-hidden"
          >
            {i < current ? (
              <div className="h-full w-full bg-[#00FF85]" />
            ) : i === current ? (
              <motion.div
                className="h-full bg-[#00FF85]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
