"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import type { ManagerWrapped } from "@/data/mock-data"
import { AnimatedBackground } from "./animated-background"
import { StoryProgress } from "./story-progress"
import { NavigationButtons } from "./navigation-buttons"
import { WrappedSlide } from "./wrapped-slide"
import { LeagueRankingSlide } from "./league-ranking-slide"
import { ChampionSlide } from "./champion-slide"
import { LeagueAwardsSlide } from "./league-awards-slide"
import { FinalShareCard } from "./final-share-card"

interface LeagueSummaryProps {
  selectedManager: ManagerWrapped
  onRestart: () => void
  onBack: () => void
  onChangeManager?: () => void
}

const TOTAL_SLIDES = 4

export function LeagueSummary({ selectedManager, onRestart, onBack, onChangeManager }: LeagueSummaryProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide((prev) => prev + 1)
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
    switch (currentSlide) {
      case 0:
        return "Ver podio"
      case 1:
        return "Ver premios"
      case 2:
        return "Tu resumen"
      default:
        return "Siguiente"
    }
  }

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <WrappedSlide key="ranking">
            <LeagueRankingSlide selectedManager={selectedManager} />
          </WrappedSlide>
        )
      case 1:
        return (
          <WrappedSlide key="podium">
            <ChampionSlide />
          </WrappedSlide>
        )
      case 2:
        return (
          <WrappedSlide key="awards">
            <LeagueAwardsSlide />
          </WrappedSlide>
        )
      case 3:
        return (
          <WrappedSlide key="final-summary">
            <FinalShareCard manager={selectedManager} onRestart={onRestart} onChangeManager={onChangeManager} />
          </WrappedSlide>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <StoryProgress current={currentSlide} total={TOTAL_SLIDES} />
      <AnimatePresence mode="wait">{renderSlide()}</AnimatePresence>

      {currentSlide < TOTAL_SLIDES - 1 && (
        <NavigationButtons onNext={nextSlide} onPrev={prevSlide} nextLabel={getButtonLabel()} showPrev={true} />
      )}
    </div>
  )
}
