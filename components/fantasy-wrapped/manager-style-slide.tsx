"use client"

import { motion } from "framer-motion"
import type { ManagerWrapped } from "@/data/mock-data"
import { Activity, Zap, Shield } from "lucide-react"

interface ManagerStyleSlideProps {
  manager: ManagerWrapped
}

export function ManagerStyleSlide({ manager }: ManagerStyleSlideProps) {
  const traits = [
    { 
      name: "Regularidad", 
      value: manager.traits.regularity, 
      color: "#00FF85",
      icon: Activity,
    },
    { 
      name: "Explosividad", 
      value: manager.traits.explosiveness, 
      color: "#00A3FF",
      icon: Zap,
    },
    { 
      name: "Dependencia del capitán", 
      value: manager.traits.captainDependency, 
      color: "#FACC15",
      icon: Shield,
    },
  ]

  return (
    <div className="max-w-sm mx-auto w-full text-center">
      <motion.p
        className="text-[#94A3B8] text-xs tracking-[0.2em] uppercase mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Tu perfil de manager
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-black text-[#F8FAFC] mb-8 tracking-tight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        {manager.managerStyle}
      </motion.h2>

      {/* Trait bars - broadcast style */}
      <div className="space-y-5">
        {traits.map((trait, index) => {
          const Icon = trait.icon
          return (
            <motion.div
              key={trait.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.15 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" style={{ color: trait.color }} />
                  <span className="text-[#94A3B8] text-sm font-medium">{trait.name}</span>
                </div>
                <span className="text-[#F8FAFC] font-bold text-lg">{trait.value}</span>
              </div>
              
              {/* Bar container */}
              <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                {/* Background grid effect */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)`,
                  }}
                />
                
                {/* Progress bar */}
                <motion.div
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: trait.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${trait.value}%` }}
                  transition={{ delay: 0.6 + index * 0.15, duration: 1, ease: "easeOut" }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Trait badges */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {manager.traits.regularity > 75 && (
          <span className="px-3 py-1.5 rounded-full bg-[#00FF85]/10 border border-[#00FF85]/30 text-[#00FF85] text-xs font-semibold uppercase tracking-wider">
            Consistente
          </span>
        )}
        {manager.traits.explosiveness > 75 && (
          <span className="px-3 py-1.5 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/30 text-[#00A3FF] text-xs font-semibold uppercase tracking-wider">
            Explosivo
          </span>
        )}
        {manager.traits.captainDependency > 75 && (
          <span className="px-3 py-1.5 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] text-xs font-semibold uppercase tracking-wider">
            Fiel al capitán
          </span>
        )}
      </motion.div>
    </div>
  )
}
