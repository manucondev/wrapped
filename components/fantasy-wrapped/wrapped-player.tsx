"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { ManagerWrapped, MatchdayPlayer, PlayerMetric, SinglePlayerGameweekScore } from "@/data/mock-data"
import { AnimatedBackground } from "./animated-background"
import { StoryProgress } from "./story-progress"
import { NavigationButtons } from "./navigation-buttons"
import { WrappedSlide } from "./wrapped-slide"
import { AnimatedNumber } from "./animated-number"
import { ManagerAvatar } from "./manager-avatar"
import { MatchdayAnimatedLineup } from "./matchday-animated-lineup"
import { PlayerRouletteReveal } from "./player-roulette-reveal"
import { Target } from "lucide-react"

interface WrappedPlayerProps {
  manager: ManagerWrapped
  onComplete: () => void
  onBack: () => void
}

type RoulettePoolPlayer = {
  name: string
  image?: string
}

export function WrappedPlayer({ manager, onComplete, onBack }: WrappedPlayerProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [bestLineupDone, setBestLineupDone] = useState(false)
  const [worstLineupDone, setWorstLineupDone] = useState(false)
  const [bestAdvanceSignal, setBestAdvanceSignal] = useState(0)
  const [worstAdvanceSignal, setWorstAdvanceSignal] = useState(0)

  const bestLineupIndex = 3
  const worstLineupIndex = 4
  const averageIndex = 5
  const mvpIndex = 6
  const captainIndex = 7
  const mostUsedIndex = 8
  const bestSingleIndex = 9
  const worstSingleIndex = 10
  const totalSlides = 11

  useEffect(() => {
    setCurrentSlide(0)
    setBestLineupDone(false)
    setWorstLineupDone(false)
    setBestAdvanceSignal(0)
    setWorstAdvanceSignal(0)
  }, [manager.id])

  const playerPool = useMemo(() => buildPlayerPool(manager), [manager])
  const bestSinglePlayerScore = useMemo(() => getBestSinglePlayerScore(manager), [manager])
  const worstSinglePlayerScore = useMemo(() => getWorstSinglePlayerScore(manager), [manager])

  const nextSlide = () => {
    if (currentSlide === bestLineupIndex && !bestLineupDone) {
      setBestAdvanceSignal((value) => value + 1)
      return
    }

    if (currentSlide === worstLineupIndex && !worstLineupDone) {
      setWorstAdvanceSignal((value) => value + 1)
      return
    }

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
    if (currentSlide === 0) return "Vamos allá"
    if (currentSlide === bestLineupIndex) return bestLineupDone ? "Continuar" : "Acelerar"
    if (currentSlide === worstLineupIndex) return worstLineupDone ? "Continuar" : "Acelerar"
    if (currentSlide === totalSlides - 1) return "Ver resumen de la liga"
    return "Siguiente"
  }

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <WrappedSlide key="intro">
            <div className="text-center max-w-md">
              <motion.p
                className="text-[#94A3B8] text-xs tracking-[0.2em] uppercase mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Este es tu Fantasy Wrapped 25/26
              </motion.p>

              <motion.div
                className="flex justify-center mb-7"
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, type: "spring" }}
              >
                <ManagerAvatar name={manager.name} image={manager.image} size="xl" accent={manager.rank === 1 ? "gold" : "green"} />
              </motion.div>

              <motion.h2
                className="text-5xl md:text-6xl font-black text-[#F8FAFC] mb-6 tracking-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                {manager.name}
              </motion.h2>

              <motion.p
                className="text-[#94A3B8] text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                La temporada de {manager.name}, resumida sin piedad.
              </motion.p>

              <motion.div
                className="mt-8 w-24 h-px bg-gradient-to-r from-transparent via-[#00FF85]/50 to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </div>
          </WrappedSlide>
        )

      case 1:
        return (
          <WrappedSlide key="total-points" vertical="center">
            <div className="text-center">
              <motion.p className="text-[#94A3B8] text-xs tracking-[0.2em] uppercase mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Puntos totales
              </motion.p>
              <motion.div className="relative" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00FF85] rounded-full blur-[100px] opacity-20" />
                <div className="relative text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#F8FAFC] to-[#94A3B8]">
                  <AnimatedNumber value={manager.totalPoints} duration={2} />
                </div>
              </motion.div>
            </div>
          </WrappedSlide>
        )

      case 2:
        return (
          <WrappedSlide key="position" vertical="center">
            <div className="text-center">
              <motion.p className="text-[#94A3B8] text-xs tracking-[0.2em] uppercase mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Tu posición final
              </motion.p>
              <motion.div className="relative" initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", delay: 0.2 }}>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[80px] opacity-30 ${manager.rank === 1 ? "bg-[#FACC15]" : "bg-[#00FF85]"}`} />
                <div className={`relative text-9xl font-black ${manager.rank === 1 ? "text-[#FACC15]" : "text-[#F8FAFC]"}`}>
                  #{manager.rank}
                </div>
              </motion.div>
              <motion.p className="text-[#94A3B8] text-lg mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                de 7 managers
              </motion.p>
              {manager.rank <= 3 && (
                <motion.p className="text-[#00FF85] text-base mt-4 font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                  Aquí se ganó respeto.
                </motion.p>
              )}
            </div>
          </WrappedSlide>
        )

      case bestLineupIndex:
        return (
          <WrappedSlide key="best-lineup">
            <MatchdayAnimatedLineup
              type="best"
              gameweek={manager.bestGameweek}
              totalPoints={manager.bestGameweekPoints}
              lineup={manager.bestGameweekLineup}
              advanceSignal={bestAdvanceSignal}
              onFinished={() => setBestLineupDone(true)}
            />
          </WrappedSlide>
        )

      case worstLineupIndex:
        return (
          <WrappedSlide key="worst-lineup">
            <MatchdayAnimatedLineup
              type="worst"
              gameweek={manager.worstGameweek}
              totalPoints={manager.worstGameweekPoints}
              lineup={manager.worstGameweekLineup}
              advanceSignal={worstAdvanceSignal}
              onFinished={() => setWorstLineupDone(true)}
            />
          </WrappedSlide>
        )

      case averageIndex:
        return (
          <WrappedSlide key="average" vertical="center">
            <div className="text-center max-w-xs mx-auto">
              <motion.div className="flex items-center justify-center gap-2 text-[#00A3FF] mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Target className="w-5 h-5" />
                <span className="text-xs tracking-[0.2em] uppercase font-semibold">Tu media por jornada</span>
              </motion.div>
              <motion.div className="relative mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <div className="text-7xl font-black text-[#F8FAFC] mb-4">
                  <AnimatedNumber value={manager.averagePoints} duration={1.5} decimals={1} />
                </div>
                <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00FF85]" initial={{ width: 0 }} animate={{ width: `${Math.min((manager.averagePoints / 80) * 100, 100)}%` }} transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
                  </motion.div>
                </div>
                <div className="flex justify-between text-[10px] text-[#94A3B8] mt-2">
                  <span>0</span><span>40</span><span>80</span>
                </div>
              </motion.div>
              <motion.p className="text-[#94A3B8] text-base" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                puntos de media cada jornada
              </motion.p>
            </div>
          </WrappedSlide>
        )

      case mvpIndex:
        return (
          <WrappedSlide key="mvp">
            <PlayerRouletteReveal
              label="MVP"
              title="El jugador que más te dio fue..."
              target={manager.mvpPlayer}
              pool={playerPool}
              accent="green"
              primaryStat={{ label: "Puntos totales", value: manager.mvpPlayer.totalPoints, suffix: "pts" }}
              secondaryStats={[
                { label: "Apariciones", value: manager.mvpPlayer.appearances },
                { label: "Rol", value: "MVP" },
              ]}
            />
          </WrappedSlide>
        )

      case captainIndex:
        return (
          <WrappedSlide key="captain">
            <PlayerRouletteReveal
              label="El brazalete tuvo dueño"
              title="Tu capitán más importante"
              target={manager.bestCaptain}
              pool={playerPool}
              accent="gold"
              primaryStat={{ label: "Con brazalete", value: manager.bestCaptain.doubledCaptainPoints ?? manager.bestCaptain.totalPoints, suffix: "pts" }}
              secondaryStats={[
                { label: "Puntos base", value: manager.bestCaptain.baseCaptainPoints ?? 0 },
                { label: "Capitaneado", value: manager.bestCaptain.captainTimes ?? 0, suffix: "x" },
              ]}
            />
          </WrappedSlide>
        )

      case mostUsedIndex:
        return (
          <WrappedSlide key="most-used">
            <PlayerRouletteReveal
              label="El más alineado"
              title="Titular indiscutible"
              target={manager.mostUsedPlayer}
              pool={playerPool}
              accent="blue"
              primaryStat={{ label: "Apariciones", value: manager.mostUsedPlayer.appearances }}
              secondaryStats={[
                { label: "Puntos", value: manager.mostUsedPlayer.totalPoints, suffix: "pts" },
                { label: "Estado", value: "Fijo" },
              ]}
            />
          </WrappedSlide>
        )

      case bestSingleIndex:
        return (
          <WrappedSlide key="best-single-player-score">
            <PlayerRouletteReveal
              label="Mejor puntuación individual"
              title="Tu mayor alegría"
              target={bestSinglePlayerScore}
              pool={playerPool}
              accent="green"
              primaryStat={{ label: "Puntos en una jornada", value: bestSinglePlayerScore.points, suffix: "pts" }}
              secondaryStats={[
                { label: "Jornada", value: bestSinglePlayerScore.gameweek },
                { label: "Tipo", value: "Pico" },
              ]}
            />
          </WrappedSlide>
        )

      case worstSingleIndex:
        return (
          <WrappedSlide key="worst-single-player-score">
            <PlayerRouletteReveal
              label="Peor puntuación individual"
              title="Sin comentarios"
              target={worstSinglePlayerScore}
              pool={playerPool}
              accent="red"
              primaryStat={{ label: "Puntos en una jornada", value: worstSinglePlayerScore.points, suffix: "pts" }}
              secondaryStats={[
                { label: "Jornada", value: worstSinglePlayerScore.gameweek },
                { label: "Tipo", value: "Bajón" },
              ]}
            />
          </WrappedSlide>
        )

      default:
        return null
    }
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
        isLastSlide={currentSlide === totalSlides - 1}
      />
    </div>
  )
}

function buildPlayerPool(manager: ManagerWrapped): RoulettePoolPlayer[] {
  const players: RoulettePoolPlayer[] = [
    manager.mvpPlayer,
    manager.bestCaptain,
    manager.mostUsedPlayer,
    ...(manager.bestSinglePlayerScore ? [manager.bestSinglePlayerScore] : []),
    ...(manager.worstSinglePlayerScore ? [manager.worstSinglePlayerScore] : []),
    ...manager.bestGameweekLineup,
    ...manager.worstGameweekLineup,
  ]

  const unique = new Map<string, RoulettePoolPlayer>()
  players.forEach((player) => {
    if (player?.name && !unique.has(player.name)) {
      unique.set(player.name, { name: player.name, image: player.image })
    }
  })

  return Array.from(unique.values())
}

function getBestSinglePlayerScore(manager: ManagerWrapped): SinglePlayerGameweekScore {
  if (manager.bestSinglePlayerScore) return manager.bestSinglePlayerScore

  const candidates = getKnownLineupScores(manager)
  return candidates.reduce((best, current) => (current.points > best.points ? current : best))
}

function getWorstSinglePlayerScore(manager: ManagerWrapped): SinglePlayerGameweekScore {
  if (manager.worstSinglePlayerScore) return manager.worstSinglePlayerScore

  const candidates = getKnownLineupScores(manager)
  return candidates.reduce((worst, current) => (current.points < worst.points ? current : worst))
}

function getKnownLineupScores(manager: ManagerWrapped): SinglePlayerGameweekScore[] {
  const best = manager.bestGameweekLineup.map((player) => toSingleScore(player, manager.bestGameweek))
  const worst = manager.worstGameweekLineup.map((player) => toSingleScore(player, manager.worstGameweek))
  return [...best, ...worst]
}

function toSingleScore(player: MatchdayPlayer, gameweek: number): SinglePlayerGameweekScore {
  return {
    name: player.name,
    image: player.image,
    points: player.jornadaPoints,
    gameweek,
  }
}
