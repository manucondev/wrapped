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
const PLAYER_INTERVAL_MS = 3600

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
    <div className="w-full max-w-[360px] mx-auto" onPointerDown={handlePointerDown}>
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
        <h2 className="text-[2rem] leading-none font-black text-[#F8FAFC] tracking-tight">
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
      className="relative h-[405px] overflow-hidden"
      initial={{ opacity: 0, y: 24, scale: 0.97, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -22, scale: 1.03, filter: "blur(10px)" }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full blur-[95px] opacity-25"
        style={{ backgroundColor: accentColor }}
      />
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-[#94A3B8] z-10">
        <span>Jugador {index + 1}/{total}</span>
        <span style={{ color: accentColor }}>{isBest ? "Impacto" : "Daño"}</span>
      </div>

      <div className="relative pt-8 flex flex-col items-center h-full">
        <motion.div
          className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-[#0a0f1a] shrink-0"
          style={{ boxShadow: `0 0 72px ${accentColor}28` }}
          initial={{ scale: 0.84, rotate: -2 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {hasError || !resolvedImage ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] to-[#1a1f2e]">
              <span className="text-5xl font-black text-[#94A3B8]">{initials}</span>
            </div>
          ) : (
            <Image
              src={resolvedImage}
              alt={player.name}
              fill
              className="object-cover"
              onError={() => setHasError(true)}
              sizes="192px"
              priority={index < 2}
            />
          )}
        </motion.div>

        <div className="text-center w-full mt-5">
          <motion.h3
            className="text-[2rem] leading-none font-black text-[#F8FAFC] tracking-tight mb-3 truncate px-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            {player.name}
          </motion.h3>

          <motion.div
            className="flex items-end justify-center gap-2"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.38, type: "spring" }}
          >
            <span className="text-[4.8rem] leading-none font-black" style={{ color: accentColor }}>
              {player.jornadaPoints}
            </span>
            <span className="text-[#94A3B8] text-sm mb-3 tracking-widest uppercase">pts</span>
          </motion.div>
        </div>
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
      className="relative h-[405px] flex items-center justify-center overflow-hidden"
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
        <div className="text-[6.5rem] font-black leading-none" style={{ color: accentColor }}>
          <AnimatedNumber value={totalPoints} duration={1.3} />
        </div>
        <p className="text-[#94A3B8] text-lg mt-2">puntos</p>
      </div>
    </motion.div>
  )
}
