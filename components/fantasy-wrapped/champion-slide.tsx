"use client"

import { motion } from "framer-motion"
import { getTop3Managers, podiumPrizes } from "@/data/mock-data"
import { ManagerAvatar } from "./manager-avatar"

export function ChampionSlide() {
  const [first, second, third] = getTop3Managers()
  const podium = [
    { manager: second, place: 2, prize: podiumPrizes.second, height: "h-28", label: "2º", accent: "#C0C7D2" },
    { manager: first, place: 1, prize: podiumPrizes.first, height: "h-40", label: "1º", accent: "#FACC15" },
    { manager: third, place: 3, prize: podiumPrizes.third, height: "h-24", label: "3º", accent: "#D97706" },
  ]

  const revealDelayByPlace: Record<number, number> = {
    3: 0.65,
    2: 1.85,
    1: 3.05,
  }

  return (
    <div className="max-w-md mx-auto w-full text-center">
      <motion.p
        className="text-[#94A3B8] text-xs tracking-[0.2em] uppercase mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Los premiados de la temporada
      </motion.p>
      <motion.h2
        className="text-3xl md:text-4xl font-black text-[#F8FAFC] mb-8 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        PODIO
      </motion.h2>

      <div className="relative">
        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-72 h-72 bg-[#FACC15]/10 rounded-full blur-[90px]" />

        <div className="relative grid grid-cols-3 items-end gap-2 min-h-[360px]">
          {podium.map(({ manager, place, prize, height, label, accent }) => (
            <motion.div
              key={manager.id}
              className="flex flex-col items-center justify-end"
              initial={{ opacity: 0, y: 55, scale: 0.86, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: revealDelayByPlace[place], duration: 0.9, type: "spring" }}
            >
              <div className="mb-3 flex flex-col items-center">
                <ManagerAvatar name={manager.name} image={manager.image} size={place === 1 ? "lg" : "md"} accent={place === 1 ? "gold" : "blue"} />
                <p className="text-[#F8FAFC] font-black text-sm mt-3 max-w-[92px] truncate">{manager.name}</p>
                <p className="text-[#94A3B8] text-[10px] uppercase tracking-widest">{manager.totalPoints.toLocaleString("es-ES")} pts</p>
              </div>

              <div
                className={`relative w-full ${height} rounded-t-2xl overflow-hidden border border-white/10`}
                style={{ background: `linear-gradient(180deg, ${accent}22, rgba(10,15,26,0.94))` }}
              >
                <div className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: accent }} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="relative h-full flex flex-col items-center justify-center">
                  <p className="text-4xl font-black" style={{ color: accent }}>{label}</p>
                  <p className="text-[#F8FAFC] text-2xl font-black mt-2">{prize}€</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  )
}
