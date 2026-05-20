"use client"

import { motion } from "framer-motion"
import { mockManagers, type ManagerWrapped } from "@/data/mock-data"
import { AnimatedBackground } from "./animated-background"
import { ManagerAvatar } from "./manager-avatar"

interface ManagerSelectorProps {
  onSelect: (manager: ManagerWrapped) => void
}

export function ManagerSelector({ onSelect }: ManagerSelectorProps) {
  const managers = [...mockManagers].sort((a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }))

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-14 relative overflow-hidden">
      <AnimatedBackground />

      <motion.div
        className="text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#94A3B8] text-xs tracking-[0.28em] uppercase mb-3">Juankar I League</p>
        <h1 className="text-3xl md:text-4xl font-black text-[#F8FAFC] mb-2 tracking-tight">ELIGE TU MANAGER</h1>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#00FF85] to-transparent mx-auto mt-4" />
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-3 max-w-sm w-full relative z-10 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        {managers.map((manager, index) => (
          <motion.button
            key={manager.id}
            onClick={() => onSelect(manager)}
            className="group relative text-center"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.06 * index, duration: 0.45 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative min-h-[170px] rounded-[1.7rem] overflow-hidden bg-[#060A14]/92 border border-white/8 backdrop-blur-sm group-hover:border-[#00FF85]/45 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-black/35" />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-[#00FF85]/12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <div className="relative h-full min-h-[170px] p-4 flex flex-col items-center justify-center gap-4">
                <ManagerAvatar name={manager.name} image={manager.image} size="lg" accent="green" />
                <h3 className="text-[#F8FAFC] font-black text-base leading-tight truncate max-w-full group-hover:text-[#00FF85] transition-colors">
                  {manager.name}
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FF85]/0 to-transparent group-hover:via-[#00FF85]/60 transition-all duration-300" />
            </div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
