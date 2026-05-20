"use client"

import { motion } from "framer-motion"
import { PlayerAvatar } from "./player-avatar"
import { AnimatedNumber } from "./animated-number"
import type { PlayerMetric } from "@/data/mock-data"
import { Sparkles, Users, Shield } from "lucide-react"

interface PlayerCardProps {
  player: PlayerMetric
  title?: string
  subtitle?: string
  showCaptainStats?: boolean
}

export function PlayerCard({
  player,
  title,
  subtitle,
  showCaptainStats = false,
}: PlayerCardProps) {
  return (
    <motion.div
      className="relative max-w-xs mx-auto w-full"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Card container */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1420] to-[#0a0f1a]" />
        
        {/* Top accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${
          showCaptainStats 
            ? "bg-gradient-to-r from-transparent via-[#FACC15] to-transparent" 
            : "bg-gradient-to-r from-transparent via-[#00FF85] to-transparent"
        }`} />

        {/* Content */}
        <div className="relative p-6">
          {/* Player silhouette/avatar area */}
          <div className="relative mb-6">
            {/* Glow behind avatar */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-30 ${
              showCaptainStats ? "bg-[#FACC15]" : "bg-[#00FF85]"
            }`} />
            
            <motion.div
              className="relative mx-auto"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
            >
              <PlayerAvatar 
                name={player.name} 
                image={player.image} 
                size="xl" 
                variant={showCaptainStats ? "captain" : "default"}
              />
            </motion.div>
          </div>

          {/* Player name */}
          <motion.h3
            className="text-2xl font-black text-[#F8FAFC] text-center mb-2 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {player.name}
          </motion.h3>

          {title && (
            <motion.p
              className={`text-sm font-semibold text-center uppercase tracking-wider mb-4 ${
                showCaptainStats ? "text-[#FACC15]" : "text-[#00FF85]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {title}
            </motion.p>
          )}

          {/* Stats strip */}
          <motion.div
            className="flex items-center justify-center gap-6 py-4 border-y border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-[#94A3B8] mb-1">
                <Sparkles className="w-3 h-3" />
                <span className="text-[10px] uppercase tracking-wider">Puntos</span>
              </div>
              <p className="text-xl font-bold text-[#F8FAFC]">
                <AnimatedNumber value={player.totalPoints} duration={1.5} />
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-[#94A3B8] mb-1">
                <Users className="w-3 h-3" />
                <span className="text-[10px] uppercase tracking-wider">Partidos</span>
              </div>
              <p className="text-xl font-bold text-[#F8FAFC]">
                <AnimatedNumber value={player.appearances} duration={1.5} />
              </p>
            </div>
          </motion.div>

          {/* Captain Stats */}
          {showCaptainStats && player.captainTimes && (
            <motion.div
              className="mt-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center justify-center gap-2 text-[#FACC15] mb-4">
                <Shield className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">
                  Capitaneado {player.captainTimes}x
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                  <p className="text-[10px] text-[#94A3B8] uppercase tracking-wider mb-1">Puntos base</p>
                  <p className="text-lg font-bold text-[#F8FAFC]">
                    <AnimatedNumber value={player.baseCaptainPoints || 0} duration={1.5} />
                  </p>
                </div>
                <div className="bg-[#FACC15]/10 rounded-xl p-3 text-center border border-[#FACC15]/20">
                  <p className="text-[10px] text-[#FACC15] uppercase tracking-wider mb-1">Con brazalete</p>
                  <p className="text-lg font-bold text-[#FACC15]">
                    <AnimatedNumber value={player.doubledCaptainPoints || 0} duration={1.5} />
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {subtitle && (
            <motion.p
              className="text-[#94A3B8] text-sm italic text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
