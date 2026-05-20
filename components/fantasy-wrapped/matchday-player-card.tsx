"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import type { MatchdayPlayer } from "@/data/mock-data"
import { resolvePlayerImage } from "@/data/player-image-map"

interface MatchdayPlayerCardProps {
  player: MatchdayPlayer
  variant: "positive" | "negative"
  index: number
}

export function MatchdayPlayerCard({ player, variant, index }: MatchdayPlayerCardProps) {
  const [hasError, setHasError] = useState(false)
  
  const resolvedImage = resolvePlayerImage(player.name, player.image)
  const isPositive = variant === "positive"
  const accentColor = isPositive ? "#00FF85" : "#EF4444"
  
  const initials = player.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* Card container */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1420] to-[#0a0f1a]" />
        
        {/* Top accent */}
        <div 
          className="absolute top-0 left-0 right-0 h-1"
          style={{ 
            background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` 
          }}
        />

        {/* Content */}
        <div className="relative p-6">
          {/* Player photo area */}
          <div className="relative mb-6">
            {/* Glow behind */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: accentColor }}
            />
            
            <motion.div
              className="relative mx-auto w-28 h-28 rounded-full overflow-hidden bg-[#0a0f1a] border-2"
              style={{ borderColor: `${accentColor}50` }}
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
            >
              {hasError || !resolvedImage ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] to-[#1a1f2e]">
                  <span className="text-2xl font-bold text-[#94A3B8]">{initials}</span>
                </div>
              ) : (
                <Image
                  src={resolvedImage}
                  alt={player.name}
                  fill
                  className="object-cover"
                  onError={() => setHasError(true)}
                />
              )}
            </motion.div>
          </div>

          {/* Player name */}
          <motion.h3
            className="text-2xl font-black text-[#F8FAFC] text-center mb-2 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {player.name}
          </motion.h3>

          {/* Points */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <div 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full"
              style={{ 
                backgroundColor: `${accentColor}15`,
                border: `1px solid ${accentColor}30`
              }}
            >
              <span 
                className="text-4xl font-black"
                style={{ color: accentColor }}
              >
                {player.jornadaPoints}
              </span>
              <span className="text-[#94A3B8] text-sm ml-2">pts</span>
            </div>
          </motion.div>

          {/* Subtle comment based on points */}
          <motion.p
            className="text-[#94A3B8] text-sm italic text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {getPlayerComment(player.jornadaPoints, isPositive)}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

function getPlayerComment(points: number, isPositive: boolean): string {
  if (isPositive) {
    if (points >= 15) return "Máquina absoluta"
    if (points >= 10) return "Nivel élite"
    if (points >= 7) return "Sólido como siempre"
    return "Cumplió su parte"
  } else {
    if (points <= 2) return "Desaparecido en combate"
    if (points <= 4) return "Mejor no hablar de esto"
    return "Podría haber sido peor... o no"
  }
}
