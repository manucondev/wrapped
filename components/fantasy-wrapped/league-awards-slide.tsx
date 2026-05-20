"use client"

import { motion } from "framer-motion"
import { leagueAwardsData } from "@/data/mock-data"
import { TrendingUp, TrendingDown } from "lucide-react"
import { PlayerAvatar } from "./player-avatar"

type AwardItem = {
  title: string
  subject: string
  stat: string
  description: string
  color: string
  kind: "manager" | "player" | "money"
  playerName?: string
}

const awards: AwardItem[] = [
  {
    title: "Mejor jornada",
    subject: leagueAwardsData.bestMatchday.managerName,
    stat: `${leagueAwardsData.bestMatchday.value} pts`,
    description: `Jornada ${leagueAwardsData.bestMatchday.gameweek}. Una jornada de museo.`,
    kind: "manager",
    color: "#00FF85",
  },
  {
    title: "Peor jornada no nula",
    subject: leagueAwardsData.worstMatchdayNonZero.managerName,
    stat: `${leagueAwardsData.worstMatchdayNonZero.value} pts`,
    description: `Jornada ${leagueAwardsData.worstMatchdayNonZero.gameweek}. No fue cero, pero casi dolió igual.`,
    kind: "manager",
    color: "#EF4444",
  },
  {
    title: "Mejor puntuación de un único jugador",
    subject: leagueAwardsData.bestSinglePlayerScore.playerName,
    playerName: leagueAwardsData.bestSinglePlayerScore.playerName,
    stat: `${leagueAwardsData.bestSinglePlayerScore.value} pts`,
    description: leagueAwardsData.bestSinglePlayerScore.context ?? leagueAwardsData.bestSinglePlayerScore.managerName ?? "Actuación diferencial.",
    kind: "player",
    color: "#FACC15",
  },
  {
    title: "Peor puntuación de un único jugador",
    subject: leagueAwardsData.worstSinglePlayerScore.playerName,
    playerName: leagueAwardsData.worstSinglePlayerScore.playerName,
    stat: `${leagueAwardsData.worstSinglePlayerScore.value} pts`,
    description: leagueAwardsData.worstSinglePlayerScore.context ?? leagueAwardsData.worstSinglePlayerScore.managerName ?? "La fantasía también castiga.",
    kind: "player",
    color: "#EF4444",
  },
  {
    title: "Equipo más caro",
    subject: leagueAwardsData.mostExpensiveTeam.managerName,
    stat: leagueAwardsData.mostExpensiveTeam.teamValue,
    description: leagueAwardsData.mostExpensiveTeam.description ?? "Dato editable manualmente en mock-data.ts.",
    kind: "money",
    color: "#00A3FF",
  },
]

export function LeagueAwardsSlide() {
  return (
    <div className="max-w-sm mx-auto w-full">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[#94A3B8] text-xs tracking-[0.2em] uppercase mb-2">Reconocimientos 25/26</p>
        <h2 className="text-2xl md:text-3xl font-black text-[#F8FAFC]">PREMIOS DE LA LIGA</h2>
      </motion.div>

      <div className="space-y-3">
        {awards.map((award, index) => (
          <motion.div
            key={award.title}
            className="relative rounded-2xl overflow-hidden bg-[#070b14]/92 border border-white/7"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.18 + index * 0.1 }}
          >
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-3xl opacity-20" style={{ backgroundColor: award.color }} />
            <div className="relative p-4 flex items-start gap-3">
              <AwardVisual award={award} />

              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-[#94A3B8] uppercase tracking-wider mb-1">{award.title}</p>
                <p className="text-[#F8FAFC] font-black text-base mb-1 truncate">{award.subject}</p>
                <p className="text-sm font-black mb-1" style={{ color: award.color }}>{award.stat}</p>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{award.description}</p>
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: award.color }} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function AwardVisual({ award }: { award: AwardItem }) {
  if (award.kind === "player" && award.playerName) {
    return (
      <div className="flex-shrink-0">
        <PlayerAvatar
          name={award.playerName}
          image={`/players/${slugify(award.playerName)}.png`}
          size="sm"
          variant={award.color === "#FACC15" ? "captain" : "default"}
        />
      </div>
    )
  }

  if (award.kind === "money") {
    return (
      <div
        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border text-xl"
        style={{ backgroundColor: `${award.color}16`, borderColor: `${award.color}35` }}
      >
        💸
      </div>
    )
  }

  const Icon = award.color === "#EF4444" ? TrendingDown : TrendingUp
  return (
    <div
      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border"
      style={{ backgroundColor: `${award.color}16`, borderColor: `${award.color}35` }}
    >
      <Icon className="w-5 h-5" style={{ color: award.color }} />
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
