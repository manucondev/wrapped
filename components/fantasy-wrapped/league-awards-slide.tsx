"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Sparkles } from "lucide-react"
import { useState } from "react"
import { customLeagueAwards, type CustomLeagueAward, type ManagerWrapped } from "@/data/mock-data"

export function LeagueAwardsSlide() {
  return (
    <div className="mx-auto flex h-full w-full max-w-sm flex-col">
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#B8A76A]">
          Gala Fantasy 25/26
        </p>

        <h2 className="text-[1.85rem] leading-none font-black tracking-tight text-[#F8FAFC]">
          PREMIOS DE LA LIGA
        </h2>

        <p className="mx-auto mt-2 max-w-[290px] text-[11px] leading-snug text-[#94A3B8]">
          Siete reconocimientos. Algunos por gloria, otros por supervivencia.
        </p>
      </motion.div>

      <div className="min-h-0 flex-1 overflow-y-auto pr-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid grid-cols-2 gap-3">
          {customLeagueAwards.map((award, index) => (
            <SmallAwardCard key={award.id} award={award} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function PersonalLeagueAwardSlide({ manager }: { manager: ManagerWrapped }) {
  const award =
    customLeagueAwards.find((item) => item.managerId === manager.id) ??
    customLeagueAwards.find((item) => item.managerName.toLowerCase() === manager.name.toLowerCase())

  if (!award) {
    return (
      <div className="mx-auto flex h-full w-full max-w-sm flex-col items-center justify-center text-center">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#94A3B8]">
          Premio personal
        </p>
        <h2 className="mt-3 text-3xl font-black text-white">
          Sin premio asignado
        </h2>
        <p className="mt-3 text-sm text-[#94A3B8]">
          No se ha encontrado un premio para {manager.name}.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-sm flex-col justify-center">
      <motion.div
        className="mb-5 text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#B8A76A]">
          Reconocimiento especial
        </p>

        <h2 className="text-[1.7rem] leading-none font-black tracking-tight text-[#F8FAFC]">
          TU PREMIO
        </h2>
      </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-[2.1rem] border border-[#C8B76A]/25 bg-[#070B14]/95 px-5 pb-6 pt-5 text-center shadow-[0_32px_100px_rgba(0,0,0,0.62)]"
        initial={{ opacity: 0, y: 30, scale: 0.96, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Luz superior elegante */}
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#B8A76A]/20 blur-3xl" />

        {/* Vignette interna */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(248,250,252,0.08),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_45%,rgba(0,0,0,0.32))]" />

        {/* Líneas tipo gala */}
        <div className="absolute inset-x-8 top-5 h-px bg-gradient-to-r from-transparent via-[#C8B76A]/50 to-transparent" />
        <div className="absolute inset-x-8 bottom-5 h-px bg-gradient-to-r from-transparent via-[#C8B76A]/35 to-transparent" />

        <div className="relative z-10">
          <motion.div
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C8B76A]/35 bg-[#C8B76A]/10 shadow-[0_0_45px_rgba(200,183,106,0.18)]"
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.12 }}
          >
            <Award className="h-7 w-7 text-[#D6C47A]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.22 }}
          >
            <ManagerPhoto award={award} size="lg" />
          </motion.div>

          <motion.p
            className="mt-5 text-[10px] uppercase tracking-[0.26em] text-[#94A3B8]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
          >
            Para
          </motion.p>

          <motion.p
            className="mt-1 text-lg font-black tracking-tight text-[#F8FAFC]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
          >
            {award.managerName}
          </motion.p>

          <motion.div
            className="mx-auto my-5 flex items-center justify-center gap-2"
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8B76A]/60" />
            <Sparkles className="h-4 w-4 text-[#D6C47A]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8B76A]/60" />
          </motion.div>

          <motion.h3
            className="mx-auto max-w-[300px] text-[2.55rem] leading-[0.88] font-black tracking-tight text-white"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
          >
            {award.title}
          </motion.h3>

          <motion.p
            className="mx-auto mt-6 max-w-[285px] text-[1rem] leading-snug font-semibold text-[#CBD5E1]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72 }}
          >
            {award.reason}
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

function SmallAwardCard({ award, index }: { award: CustomLeagueAward; index: number }) {
  return (
    <motion.div
      className="relative min-h-[188px] overflow-hidden rounded-[1.35rem] border border-[#C8B76A]/18 bg-[#070B14]/95 px-3 py-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.36)]"
      initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.1 + index * 0.055, duration: 0.45 }}
    >
      {/* Fondo premium, no colorines */}
      <div className="absolute -top-16 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-[#C8B76A]/12 blur-2xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,183,106,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_48%,rgba(0,0,0,0.25))]" />

      {/* Borde superior de premio */}
      <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-[#C8B76A]/60 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center">
        <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#C8B76A]/30 bg-[#C8B76A]/10">
          <Award className="h-4 w-4 text-[#D6C47A]" />
        </div>

        <ManagerPhoto award={award} size="sm" />

        <p className="mt-3 text-[1.02rem] leading-[0.95] font-black tracking-tight text-white">
          {award.title}
        </p>

        <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#B8A76A]">
          {award.managerName}
        </p>

        <p className="mt-2 text-[10.5px] leading-snug text-[#CBD5E1]">
          {award.reason}
        </p>
      </div>
    </motion.div>
  )
}

function ManagerPhoto({ award, size }: { award: CustomLeagueAward; size: "sm" | "lg" }) {
  const [hasError, setHasError] = useState(false)

  const sizeClass =
    size === "lg"
      ? "h-28 w-28 rounded-[1.6rem]"
      : "h-12 w-12 rounded-xl"

  const initials = award.managerName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className={`relative mx-auto overflow-hidden border border-[#C8B76A]/25 bg-[#0A0F1A] ${sizeClass}`}
      style={{ boxShadow: "0 0 34px rgba(200,183,106,0.16)" }}
    >
      {hasError || !award.image ? (
        <div className="flex h-full w-full items-center justify-center bg-[#0A0F1A]">
          <span
            className={
              size === "lg"
                ? "text-3xl font-black text-[#94A3B8]"
                : "text-base font-black text-[#94A3B8]"
            }
          >
            {initials}
          </span>
        </div>
      ) : (
        <Image
          src={award.image}
          alt={award.managerName}
          fill
          className="object-cover"
          onError={() => setHasError(true)}
          sizes={size === "lg" ? "112px" : "48px"}
        />
      )}
    </div>
  )
}