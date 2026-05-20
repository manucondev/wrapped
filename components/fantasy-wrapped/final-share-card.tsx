"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { ManagerWrapped } from "@/data/mock-data"
import { RotateCcw } from "lucide-react"
import { resolvePlayerImage } from "@/data/player-image-map"

interface FinalShareCardProps {
  manager: ManagerWrapped
  onRestart?: () => void
  onChangeManager?: () => void
}

export function FinalShareCard({ manager, onRestart, onChangeManager }: FinalShareCardProps) {
  const captainPoints = manager.bestCaptain.doubledCaptainPoints ?? manager.bestCaptain.totalPoints

  return (
    <div className="max-w-sm mx-auto w-full -mt-1">
      <motion.div
        className="relative min-h-[610px] rounded-[2rem] overflow-hidden bg-[#050816] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(0,255,133,0.22),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(0,163,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_28%,rgba(0,0,0,0.35))]" />
        <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(90deg,transparent_0,transparent_46%,rgba(255,255,255,0.7)_47%,transparent_48%,transparent_100%),linear-gradient(0deg,transparent_0,transparent_88%,rgba(255,255,255,0.5)_89%,transparent_90%)] bg-[size:68px_68px]" />
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#00FF85]/12 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.62)_100%)]" />

        <div className="relative z-10 p-5 min-h-[610px] flex flex-col text-[#F8FAFC]">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="min-w-0">
              <p className="text-[10px] text-[#00FF85] font-black tracking-[0.24em] uppercase">Juankar I League</p>
              <h3 className="text-4xl leading-[0.95] font-black tracking-tight mt-1 max-w-[230px] truncate">{manager.name}</h3>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] text-[#94A3B8] font-black tracking-[0.18em] uppercase">Puesto</p>
              <p className="text-5xl leading-none font-black text-[#00FF85]">#{manager.rank}</p>
            </div>
          </div>

          <motion.div
            className="relative mb-5 overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#090E1A] min-h-[178px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FF85]/16 via-transparent to-[#00A3FF]/12" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
            <SummaryImage name={manager.name} image={manager.image} />
            <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between gap-3">
              <div>
                <p className="text-[10px] text-[#94A3B8] font-black tracking-[0.22em] uppercase mb-1">Manager</p>
                <p className="text-2xl font-black leading-none truncate">{manager.name}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-[#94A3B8] font-black tracking-[0.22em] uppercase mb-1">Total</p>
                <p className="text-3xl font-black leading-none text-[#00FF85]">{manager.totalPoints.toLocaleString("es-ES")}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <PosterMetric label="Media" value={manager.averagePoints.toFixed(1)} detail="pts/jornada" delay={0.45} />
            <PosterMetric label="Mejor jornada" value={`${manager.bestGameweekPoints}`} detail={`J${manager.bestGameweek}`} delay={0.52} />
            <PosterMetric label="Capitán" value={`${captainPoints}`} detail={manager.bestCaptain.name} delay={0.59} />
            <PosterMetric label="MVP" value={manager.mvpPlayer.name} detail={`${manager.mvpPlayer.totalPoints} pts`} delay={0.66} compact />
          </div>

          <motion.div
            className="relative rounded-[1.35rem] bg-white/[0.045] border border-white/10 p-4 grid grid-cols-[76px_1fr] gap-4 items-center mb-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.76, duration: 0.5 }}
          >
            <PlayerSummaryImage name={manager.mvpPlayer.name} image={manager.mvpPlayer.image} />
            <div className="min-w-0">
              <p className="text-[10px] text-[#00A3FF] font-black tracking-[0.24em] uppercase mb-1">MVP de temporada</p>
              <p className="text-2xl leading-none font-black tracking-tight truncate">{manager.mvpPlayer.name}</p>
              <p className="text-sm text-[#94A3B8] font-bold mt-1">
                {manager.mvpPlayer.totalPoints} pts · {manager.mvpPlayer.appearances} apariciones
              </p>
            </div>
          </motion.div>

          <div className="mt-auto flex items-center justify-between text-[11px] text-[#94A3B8] font-black tracking-[0.18em] uppercase">
            <span>Fantasy Wrapped</span>
            <span>25/26</span>
          </div>
        </div>
      </motion.div>

      {(onRestart || onChangeManager) && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] bg-gradient-to-t from-black/90 via-black/55 to-transparent flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {onRestart && (
            <button
              onClick={onRestart}
              className="h-14 rounded-full bg-gradient-to-r from-[#00FF85] to-[#00A3FF] text-black font-black tracking-wide flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <RotateCcw className="w-4 h-4" />
              Volver al inicio
            </button>
          )}
          {onChangeManager && (
            <button
              onClick={onChangeManager}
              className="h-12 rounded-full bg-[#0a0f1a] border border-white/10 text-[#F8FAFC] font-bold tracking-wide active:scale-95 transition-transform"
            >
              Cambiar manager
            </button>
          )}
        </motion.div>
      )}
    </div>
  )
}

function SummaryImage({ name, image }: { name: string; image?: string }) {
  const [imageAttempt, setImageAttempt] = useState(0)
  const imageCandidates = useMemo(() => {
    if (!image) return []
    const lower = image.toLowerCase()
    if (!lower.endsWith(".png")) return [image]
    const basePath = image.slice(0, -4)
    return [image, `${basePath}.jpg`, `${basePath}.jpeg`, `${basePath}.webp`]
  }, [image])

  const currentImage = imageCandidates[imageAttempt]
  const hasError = imageCandidates.length > 0 && imageAttempt >= imageCandidates.length
  const initials = getInitials(name)

  if (hasError || !currentImage) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] to-[#111827]">
        <span className="text-7xl font-black text-white/35">{initials}</span>
      </div>
    )
  }

  return (
    <Image
      src={currentImage}
      alt={name}
      fill
      className="object-cover opacity-90"
      onError={() => setImageAttempt((attempt) => attempt + 1)}
      sizes="360px"
    />
  )
}

function PlayerSummaryImage({ name, image }: { name: string; image: string }) {
  const [hasError, setHasError] = useState(false)
  const resolvedImage = resolvePlayerImage(name, image)
  const initials = getInitials(name)

  return (
    <div className="relative w-[76px] h-[76px] rounded-2xl overflow-hidden bg-[#0a0f1a] border border-white/10">
      {hasError || !resolvedImage ? (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] to-[#1a1f2e]">
          <span className="text-xl font-black text-[#94A3B8]">{initials}</span>
        </div>
      ) : (
        <Image
          src={resolvedImage}
          alt={name}
          fill
          className="object-cover"
          onError={() => setHasError(true)}
          sizes="90px"
        />
      )}
    </div>
  )
}

function PosterMetric({ label, value, detail, delay, compact }: { label: string; value: string; detail?: string; delay: number; compact?: boolean }) {
  return (
    <motion.div
      className="rounded-[1.2rem] bg-white/[0.045] border border-white/10 p-3 min-h-[84px] flex flex-col justify-between"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
    >
      <p className="text-[9px] text-[#94A3B8] font-black uppercase tracking-[0.2em] mb-2">{label}</p>
      <p className={`${compact ? "text-lg" : "text-3xl"} text-[#F8FAFC] font-black leading-none tracking-tight truncate`}>{value}</p>
      {detail && <p className="text-xs text-[#94A3B8] font-bold mt-2 truncate">{detail}</p>}
    </motion.div>
  )
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}
