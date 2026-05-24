"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PlayerAvatar } from "./player-avatar"
import { AnimatedNumber } from "./animated-number"
import { resolvePlayerImage } from "@/data/player-image-map"

type RoulettePlayer = {
  name: string
  image?: string
}

type RevealStat = {
  label: string
  value: string | number
  suffix?: string
  decimals?: number
}

interface PlayerRouletteRevealProps {
  label: string
  title: string
  subtitle?: string
  target: RoulettePlayer
  pool: RoulettePlayer[]
  accent?: "green" | "gold" | "red" | "blue"
  primaryStat: RevealStat
  secondaryStats?: RevealStat[]
}

const accentMap = {
  green: "#00FF85",
  gold: "#FACC15",
  red: "#EF4444",
  blue: "#00A3FF",
}

export function PlayerRouletteReveal({
  label,
  title,
  subtitle,
  target,
  pool,
  accent = "green",
  primaryStat,
  secondaryStats = [],
}: PlayerRouletteRevealProps) {
  const accentColor = accentMap[accent]
  const candidates = useMemo(() => {
    const merged = [...pool, target]
    const unique = new Map<string, RoulettePlayer>()
    merged.forEach((player) => {
      if (player.name) unique.set(player.name, player)
    })
    return Array.from(unique.values())
  }, [pool, target])

  const [active, setActive] = useState<RoulettePlayer>(candidates[0] ?? target)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    setLocked(false)
    setActive(candidates[0] ?? target)

    candidates.slice(0, 7).forEach((player) => {
      const src = resolvePlayerImage(player.name, player.image)
      if (src) {
        const img = new window.Image()
        img.src = src
      }
    }) 

    let ticks = 0
    const maxTicks = 7
    const interval = window.setInterval(() => {
      ticks += 1
      if (ticks >= maxTicks) {
        window.clearInterval(interval)
        setActive(target)
        setLocked(true)
        return
      }

      const next = candidates[ticks % candidates.length] ?? target
      setActive(next)
    }, 390)

    return () => window.clearInterval(interval)
  }, [candidates, target])

  return (
    <div className="w-full max-w-sm mx-auto text-center flex flex-col justify-start">
      <motion.p
        className="text-[#94A3B8] text-[10px] tracking-[0.24em] uppercase mb-3"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {label}
      </motion.p>

      <motion.h2
        className="text-[2rem] leading-tight font-black text-[#F8FAFC] tracking-tight mb-5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>

      <div className="relative mx-auto mb-5 w-60 h-60 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full blur-[95px] opacity-35"
          style={{ backgroundColor: accentColor }}
          animate={{ scale: locked ? 1.12 : [0.94, 1.04, 0.98] }}
          transition={{ duration: 0.7, repeat: locked ? 0 : Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute inset-6 rounded-full border border-white/10"
          animate={{ rotate: locked ? 0 : 360 }}
          transition={{ duration: locked ? 0.4 : 3.2, repeat: locked ? 0 : Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-transparent"
          style={{ borderTopColor: `${accentColor}66`, borderRightColor: `${accentColor}22` }}
          animate={{ rotate: locked ? 0 : -360 }}
          transition={{ duration: locked ? 0.5 : 4.4, repeat: locked ? 0 : Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            className="relative"
            initial={{ opacity: 0, scale: 0.78, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: locked ? 1.08 : 0.98, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.16, filter: "blur(12px)" }}
            transition={{ duration: locked ? 0.62 : 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <PlayerAvatar
              name={active.name}
              image={active.image ?? ""}
              size="xl"
              variant={accent === "gold" ? "captain" : "default"}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {locked && (
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <motion.h3
              className="text-[2.15rem] leading-none font-black text-[#F8FAFC] tracking-tight mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {target.name}
            </motion.h3>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#94A3B8] mb-1">
                {primaryStat.label}
              </p>
              <p className="text-[4.5rem] font-black leading-none" style={{ color: accentColor }}>
                {typeof primaryStat.value === "number" ? (
                  <AnimatedNumber value={primaryStat.value} duration={1.2} decimals={primaryStat.decimals} />
                ) : (
                  primaryStat.value
                )}
                {primaryStat.suffix && <span className="text-lg ml-1 text-[#94A3B8]">{primaryStat.suffix}</span>}
              </p>
            </motion.div>

            {secondaryStats.length > 0 && (
              <div className="grid grid-cols-2 gap-x-5 gap-y-3 mb-4">
                {secondaryStats.map((stat, index) => (
                  <motion.div
                    key={`${stat.label}-${index}`}
                    className="text-center"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38 + index * 0.14 }}
                  >
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#94A3B8] mb-1">{stat.label}</p>
                    <p className="text-xl font-black text-[#F8FAFC]">
                      {typeof stat.value === "number" ? (
                        <AnimatedNumber value={stat.value} duration={1} decimals={stat.decimals} />
                      ) : (
                        stat.value
                      )}
                      {stat.suffix && <span className="text-xs ml-1 text-[#94A3B8]">{stat.suffix}</span>}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {subtitle && (
              <motion.p
                className="text-[#94A3B8] text-sm italic max-w-xs mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.74 }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}
