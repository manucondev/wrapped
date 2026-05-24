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
const PLAYER_INTERVAL_MS = 2300

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
  const lastAdvanceSignal = useRef(advanceSignal)
  const isBest = type === "best"
  const accentColor = isBest ? "#00FF85" : "#EF4444"

  useEffect(() => {
    setActiveIndex(0)
    setFinished(false)
    hasNotifiedFinish.current = false
  }, [type, gameweek])

  const advancePlayer = useCallback(() => {
    if (finished || lineup.length === 0) return
  
    setActiveIndex((current) => {
      if (current >= lineup.length - 1) {
        setFinished(true)
        return current
      }
  
      return current + 1
    })
  }, [finished, lineup.length])

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
    if (advanceSignal === lastAdvanceSignal.current) return
  
    lastAdvanceSignal.current = advanceSignal
  
    if (!finished) {
      advancePlayer()
    }
  }, [advanceSignal, advancePlayer, finished])

  const player = lineup[activeIndex]
  const progress = finished || lineup.length === 0 ? 100 : ((activeIndex + 1) / lineup.length) * 100

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.clientX > window.innerWidth * 0.55 && !finished) {
      advancePlayer()
    }
  }

  return (
    <div className="w-full max-w-[340px] mx-auto -mt-4" onPointerDown={handlePointerDown}>
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
        <p className="text-[#94A3B8] text-[11px] mt-2 leading-snug">
          {finished ? "Total de la jornada." : "Toca a la derecha o pulsa acelerar para ver el siguiente."}
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

  const shortName = useMemo(() => {
    const parts = player.name.trim().split(/\s+/)

    if (parts.length === 1) return parts[0]

    const firstInitial = parts[0]?.[0] ? `${parts[0][0]}.` : ""
    const lastName = parts[parts.length - 1] ?? player.name

    return `${firstInitial} ${lastName}`
  }, [player.name])

  const points = player.jornadaPoints
  const isPositive = points >= 0
  const topAccent = isBest ? "#00B84A" : "#B91C1C"
  const diagonalAccent = isBest ? "#00FF85" : "#EF4444"
  const checkColor = isPositive ? "#16A34A" : "#DC2626"

  return (
    <motion.div
      className="relative flex justify-center pt-2"
      initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -16, scale: 1.02, filter: "blur(8px)" }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-[185px] h-[265px] overflow-hidden rounded-[0.35rem] bg-[#EDEFF3] shadow-[0_26px_70px_rgba(0,0,0,0.55)]">
        {/* Fondo oscuro superior */}
        <div className="absolute left-0 top-0 right-0 h-[194px] bg-[#1B2030]" />

        {/* Triángulo diagonal estilo Fantasy */}
        <div
          className="absolute left-0 top-0 w-[108px] h-[108px]"
          style={{
            background: `linear-gradient(135deg, ${topAccent} 0%, ${diagonalAccent} 100%)`,
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />

        {/* Puntos */}
        <div className="absolute left-3 top-3 z-20 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
          <div className="text-[2rem] leading-none font-black tracking-tight">
            {points}
          </div>
          <div className="mt-0.5 text-[8px] uppercase tracking-[0.16em] font-bold opacity-90">
            pts
          </div>
        </div>

        {/* Indicador jugador */}
        <div className="absolute right-2 top-2 z-20 rounded-full bg-black/35 px-2 py-1 text-[8px] font-bold tracking-[0.12em] text-white/80">
          {index + 1}/{total}
        </div>

        {/* Imagen */}
        <div className="absolute left-1/2 top-[36px] z-10 h-[154px] w-[145px] -translate-x-1/2">
          {hasError || !resolvedImage ? (
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#111827]">
              <span className="text-4xl font-black text-[#94A3B8]">{initials}</span>
            </div>
          ) : (
            <Image
              src={resolvedImage}
              alt={player.name}
              fill
              className="object-contain object-bottom"
              onError={() => setHasError(true)}
              sizes="145px"
              priority={index < 2}
            />
          )}
        </div>

        {/* Franja inferior */}
        <div className="absolute left-0 right-0 bottom-0 z-30 h-[72px] bg-[#F4F5F7] px-3 pt-3">
          <div className="max-w-[128px] truncate text-[1.35rem] leading-none font-extrabold tracking-tight text-[#111827]">
            {shortName}
          </div>
          <div className="mt-2 text-[9px] uppercase tracking-[0.18em] font-bold text-[#64748B]">
            {isBest ? "Mejor once" : "Peor once"}
          </div>
        </div>

        {/* Check / marca visual */}
        <div
          className="absolute right-2 bottom-[48px] z-40 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
          style={{ backgroundColor: checkColor }}
        >
          {isPositive ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          )}
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
