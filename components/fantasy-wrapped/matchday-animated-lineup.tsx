"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { PointerEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { TrendingDown, TrendingUp } from "lucide-react"
import type { MatchdayPlayer } from "@/data/mock-data"
import { resolvePlayerImage } from "@/data/player-image-map"
import { AnimatedNumber } from "./animated-number"

interface MatchdayAnimatedLineupProps {
  type: "best" | "worst"
  gameweek: number
  totalPoints: number
  lineup: MatchdayPlayer[]
  advanceSignal?: number
  onFinished?: () => void
}

// Más lento para que dé tiempo a cargar la foto y leer puntos/nombre en móvil.
const PLAYER_INTERVAL_MS = 2500

export function MatchdayAnimatedLineup({
  type,
  gameweek,
  totalPoints,
  lineup,
  advanceSignal = 0,
  onFinished,
}: MatchdayAnimatedLineupProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const hasNotifiedFinish = useRef(false)
  const isBest = type === "best"
  const accentColor = isBest ? "#00FF85" : "#EF4444"

  useEffect(() => {
    setActiveIndex(0)
    setFinished(false)
    hasNotifiedFinish.current = false
  }, [type, gameweek])

  const advancePlayer = useCallback(() => {
    if (finished || lineup.length === 0) return

    if (activeIndex >= lineup.length - 1) {
      setFinished(true)
      return
    }

    setActiveIndex((current) => Math.min(current + 1, lineup.length - 1))
  }, [activeIndex, finished, lineup.length])

  useEffect(() => {
    if (!finished || hasNotifiedFinish.current) return
    hasNotifiedFinish.current = true
    onFinished?.()
  }, [finished, onFinished])

  useEffect(() => {
    if (finished || lineup.length === 0) return
    const timer = window.setTimeout(advancePlayer, PLAYER_INTERVAL_MS)
    return () => window.clearTimeout(timer)
  }, [activeIndex, advancePlayer, finished, lineup.length])

  useEffect(() => {
    if (advanceSignal > 0 && !finished) advancePlayer()
  }, [advanceSignal, advancePlayer, finished])

  const player = lineup[activeIndex]
  const progress = finished || lineup.length === 0 ? 100 : ((activeIndex + 1) / lineup.length) * 100

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.clientX > window.innerWidth * 0.55 && !finished) {
      advancePlayer()
    }
  }

  return (
    <div className="w-full max-w-[340px] mx-auto -mt-2" onPointerDown={handlePointerDown}>
      <motion.div
        className="text-center mb-3"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-center gap-2 mb-2" style={{ color: accentColor }}>
          {isBest ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="text-[10px] tracking-[0.22em] uppercase font-semibold">
            {isBest ? "Tu mejor once" : "Tu peor once"}
          </span>
        </div>
        <h2 className="text-[1.75rem] leading-none font-black text-[#F8FAFC] tracking-tight">
          Jornada <span style={{ color: accentColor }}>{gameweek}</span>
        </h2>
        <p className="text-[#94A3B8] text-xs mt-2 leading-snug">
          {finished ? "Total de la jornada." : "Toca a la derecha para acelerar."}
        </p>
      </motion.div>

      <div className="relative mb-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ backgroundColor: accentColor }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.45 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!finished && player ? (
          <AnimatedLineupPlayer
            key={`${type}-${activeIndex}-${player.name}`}
            player={player}
            index={activeIndex}
            total={lineup.length}
            accentColor={accentColor}
            isBest={isBest}
          />
        ) : (
          <MatchdayTotalReveal
            key={`${type}-total`}
            totalPoints={totalPoints}
            accentColor={accentColor}
            isBest={isBest}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

function AnimatedLineupPlayer({
  player,
  index,
  total,
  accentColor,
  isBest,
}: {
  player: MatchdayPlayer
  index: number
  total: number
  accentColor: string
  isBest: boolean
}) {
  const [hasError, setHasError] = useState(false)
  const resolvedImage = resolvePlayerImage(player.name, player.image)
  const initials = useMemo(
    () =>
      player.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [player.name],
  )

  return (
    <motion.div
      className="relative h-[330px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070B14]/95 px-4 pt-4 pb-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
      initial={{ opacity: 0, y: 20, scale: 0.97, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -18, scale: 1.02, filter: "blur(8px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentColor}22, transparent 42%), linear-gradient(180deg, rgba(255,255,255,0.055), transparent 36%, rgba(0,0,0,0.34))`,
        }}
      />

      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,transparent_0,transparent_48%,rgba(255,255,255,0.7)_49%,transparent_50%,transparent_100%)] bg-[size:42px_42px]" />

      <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-[#94A3B8]">
        <span>Jugador {index + 1}/{total}</span>
        <span style={{ color: accentColor }}>{isBest ? "Impacto" : "Daño"}</span>
      </div>

      <div className="relative z-10 mt-5 flex flex-col items-center text-center">
        <motion.div
          className="relative w-28 h-32 rounded-[1.35rem] overflow-hidden bg-[#0A0F1A] border border-white/10 shrink-0"
          style={{ boxShadow: `0 0 36px ${accentColor}22` }}
          initial={{ scale: 0.9, rotate: -1 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {hasError || !resolvedImage ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] to-[#1a1f2e]">
              <span className="text-3xl font-black text-[#94A3B8]">{initials}</span>
            </div>
          ) : (
            <Image
              src={resolvedImage}
              alt={player.name}
              fill
              className="object-contain p-1"
              onError={() => setHasError(true)}
              sizes="130px"
              priority={index < 2}
            />
          )}
        </motion.div>

        <motion.h3
          className="mt-5 max-w-full break-words text-[1.65rem] leading-[0.95] font-black text-[#F8FAFC] tracking-tight px-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          {player.name}
        </motion.h3>

        <motion.div
          className="mt-4 flex items-end justify-center gap-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.32, type: "spring" }}
        >
          <span className="text-[3.85rem] leading-none font-black" style={{ color: accentColor }}>
            {player.jornadaPoints}
          </span>
          <span className="text-[#94A3B8] text-xs mb-2.5 tracking-widest uppercase">pts</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

function MatchdayTotalReveal({
  totalPoints,
  accentColor,
  isBest,
}: {
  totalPoints: number
  accentColor: string
  isBest: boolean
}) {
  return (
    <motion.div
      className="relative h-[330px] flex items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070B14]/90"
      initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[110px] opacity-25"
        style={{ backgroundColor: accentColor }}
      />
      <div className="relative text-center px-6">
        <p className="text-[11px] text-[#94A3B8] tracking-[0.24em] uppercase mb-3">
          {isBest ? "Total de la jornada" : "El daño total"}
        </p>
        <div className="text-[5.3rem] font-black leading-none" style={{ color: accentColor }}>
          <AnimatedNumber value={totalPoints} duration={1.3} />
        </div>
        <p className="text-[#94A3B8] text-lg mt-2">puntos</p>
      </div>
    </motion.div>
  )
}
