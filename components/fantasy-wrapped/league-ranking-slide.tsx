"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { getRankedManagers, type ManagerWrapped } from "@/data/mock-data"
import { ManagerAvatar } from "./manager-avatar"

interface LeagueRankingSlideProps {
  selectedManager?: ManagerWrapped
}

const REVEAL_INTERVAL_MS = 2000

export function LeagueRankingSlide({ selectedManager }: LeagueRankingSlideProps) {
  const revealOrder = useMemo(
    () =>
      getRankedManagers()
        .filter((manager) => manager.rank >= 4)
        .sort((a, b) => b.rank - a.rank),
    [],
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const activeManager = revealOrder[activeIndex]
  const isSelected = selectedManager?.id === activeManager?.id

  useEffect(() => {
    setActiveIndex(0)
  }, [])

  useEffect(() => {
    if (activeIndex >= revealOrder.length - 1) return
    const timer = window.setTimeout(() => {
      setActiveIndex((index) => Math.min(index + 1, revealOrder.length - 1))
    }, REVEAL_INTERVAL_MS)
    return () => window.clearTimeout(timer)
  }, [activeIndex, revealOrder.length])

  return (
    <div className="max-w-sm mx-auto w-full min-h-[620px] flex flex-col justify-center">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[#94A3B8] text-xs tracking-[0.2em] uppercase mb-2">Así terminó la Juankar I League</p>
        <h2 className="text-3xl md:text-4xl font-black text-[#F8FAFC] tracking-tight">CLASIFICACIÓN FINAL</h2>
        <p className="text-[#94A3B8] text-sm mt-2">Del 7º al 4º. Los tres primeros esperan en el podio.</p>
      </motion.div>

      <div className="relative flex-1 min-h-[420px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeManager && (
            <motion.div
              key={activeManager.id}
              className="w-full"
              initial={{ opacity: 0, y: 42, scale: 0.92, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -38, scale: 0.96, filter: "blur(12px)" }}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            >
              <RankingCard manager={activeManager} isSelected={Boolean(isSelected)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {revealOrder.map((manager, index) => (
          <motion.div
            key={manager.id}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-[#00FF85]" : "w-1.5 bg-white/20"}`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  )
}

function RankingCard({ manager, isSelected }: { manager: ManagerWrapped; isSelected: boolean }) {
  const accent = isSelected ? "#00FF85" : "#00A3FF"

  return (
    <div className={`relative min-h-[390px] rounded-[2rem] bg-[#050816] border ${isSelected ? "border-[#00FF85]/55" : "border-white/10"} overflow-hidden shadow-[0_28px_90px_rgba(0,0,0,0.55)]`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-black/65" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[110px] opacity-25" style={{ backgroundColor: accent }} />
      <div className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: `${accent}99` }} />

      <div className="relative px-6 pt-7 pb-6 min-h-[390px] flex flex-col items-center text-center">
        <div className="w-full flex items-center justify-between mb-5">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#94A3B8]">Puesto final</span>
          {isSelected && <span className="text-[10px] uppercase tracking-[0.24em] text-[#00FF85]">Tú</span>}
        </div>

        <motion.div
          className="text-8xl font-black leading-none mb-5"
          style={{ color: accent }}
          initial={{ scale: 0.78, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring" }}
        >
          {manager.rank}º
        </motion.div>

        <div className="mb-5">
          <ManagerAvatar name={manager.name} image={manager.image} size="xl" accent={isSelected ? "green" : "blue"} />
        </div>

        <h3 className="text-3xl font-black text-[#F8FAFC] tracking-tight mb-6 max-w-full truncate">{manager.name}</h3>

        <div className="mt-auto">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#94A3B8] mb-2">Puntos totales</p>
          <div className="flex items-end justify-center gap-2">
            <span className="text-6xl font-black text-[#F8FAFC] leading-none">{manager.totalPoints.toLocaleString("es-ES")}</span>
            <span className="text-[#94A3B8] text-sm mb-2 uppercase tracking-widest">pts</span>
          </div>
        </div>
      </div>
    </div>
  )
}
