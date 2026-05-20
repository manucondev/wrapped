"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { MatchdayPlayer } from "@/data/mock-data"
import { AnimatedBackground } from "./animated-background"
import { StoryProgress } from "./story-progress"
import { NavigationButtons } from "./navigation-buttons"
import { WrappedSlide } from "./wrapped-slide"
import { MatchdayPlayerCard } from "./matchday-player-card"
import { AnimatedNumber } from "./animated-number"
import { TrendingUp, TrendingDown, Sparkles } from "lucide-react"

interface MatchdaySequenceProps {
  type: "best" | "worst"
  gameweek: number
  totalPoints: number
  lineup: MatchdayPlayer[]
  onComplete: () => void
  onBack: () => void
}

export function MatchdaySequence({
  type,
  gameweek,
  totalPoints,
  lineup,
  onComplete,
  onBack,
}: MatchdaySequenceProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = lineup.length + 2 // intro + players + final

  const isBest = type === "best"
  const accentColor = isBest ? "#00FF85" : "#EF4444"

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1)
    } else {
      onComplete()
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    } else {
      onBack()
    }
  }

  const getButtonLabel = () => {
    if (currentSlide === 0) return "Ver alineación"
    if (currentSlide === totalSlides - 1) return "Continuar"
    return "Siguiente"
  }

  const renderSlide = () => {
    // Intro slide
    if (currentSlide === 0) {
      return (
        <WrappedSlide key="intro">
          <div className="text-center max-w-md">
            <motion.div
              className={`flex items-center justify-center gap-2 mb-8`}
              style={{ color: accentColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {isBest ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
              <span className="text-xs tracking-[0.2em] uppercase font-semibold">
                {isBest ? "Tu mejor jornada" : "Tu peor jornada"}
              </span>
            </motion.div>

            <motion.p
              className="text-[#94A3B8] text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {isBest ? "Fue la" : "Esa vez que preferirías olvidar..."}
            </motion.p>

            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              {/* Glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[80px] opacity-30"
                style={{ backgroundColor: accentColor }}
              />
              
              <div className="relative">
                <span className="text-[#94A3B8] text-2xl font-medium">Jornada</span>
                <div 
                  className="text-8xl md:text-9xl font-black"
                  style={{ color: accentColor }}
                >
                  {gameweek}
                </div>
              </div>
            </motion.div>

            <motion.p
              className="text-[#94A3B8] text-base mt-8 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {isBest 
                ? "Vamos a ver quién hizo posible esa locura." 
                : "Veamos quién te dejó tirado ese día."}
            </motion.p>
          </div>
        </WrappedSlide>
      )
    }

    // Player reveal slides
    if (currentSlide > 0 && currentSlide <= lineup.length) {
      const playerIndex = currentSlide - 1
      const player = lineup[playerIndex]

      return (
        <WrappedSlide key={`player-${playerIndex}`}>
          <div className="w-full max-w-xs mx-auto">
            {/* Progress indicator */}
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-[#94A3B8] text-xs tracking-[0.2em] uppercase">
                Jugador {playerIndex + 1} de {lineup.length}
              </p>
            </motion.div>

            <MatchdayPlayerCard
              player={player}
              variant={isBest ? "positive" : "negative"}
              index={playerIndex}
            />
          </div>
        </WrappedSlide>
      )
    }

    // Final total slide
    return (
      <WrappedSlide key="final">
        <div className="text-center max-w-md">
          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            style={{ color: accentColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold">
              {isBest ? "Total de la jornada" : "El daño total"}
            </span>
          </motion.div>

          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            {/* Glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-25"
              style={{ backgroundColor: accentColor }}
            />
            
            <div 
              className="relative text-8xl md:text-9xl font-black"
              style={{ color: accentColor }}
            >
              <AnimatedNumber value={totalPoints} duration={2} />
            </div>
            <p className="text-[#94A3B8] text-lg mt-2">puntos</p>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {isBest 
              ? "Total de la jornada."
              : "El daño total."}
          </motion.p>

          <motion.p
            className="text-[#94A3B8] text-sm italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {isBest 
              ? "La perfección existe, y tú la viviste."
              : "Al menos no fue un cero. O sí. No miramos."}
          </motion.p>
        </div>
      </WrappedSlide>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <StoryProgress current={currentSlide} total={totalSlides} />
      <AnimatePresence mode="wait">{renderSlide()}</AnimatePresence>
      <NavigationButtons
        onNext={nextSlide}
        onPrev={prevSlide}
        nextLabel={getButtonLabel()}
        showPrev={true}
      />
    </div>
  )
}
