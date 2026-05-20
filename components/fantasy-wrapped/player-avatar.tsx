"use client"

import { useState } from "react"
import Image from "next/image"
import { resolvePlayerImage } from "@/data/player-image-map"

interface PlayerAvatarProps {
  name: string
  image: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "captain"
}

const sizeClasses = {
  sm: "w-12 h-12 text-xs",
  md: "w-16 h-16 text-sm",
  lg: "w-24 h-24 text-xl",
  xl: "w-32 h-32 text-2xl",
}

export function PlayerAvatar({ name, image, size = "md", variant = "default" }: PlayerAvatarProps) {
  const [hasError, setHasError] = useState(false)

  const resolvedImage = resolvePlayerImage(name, image)

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  const borderColor = variant === "captain" 
    ? "border-[#FACC15]/50" 
    : "border-white/10"

  if (hasError || !resolvedImage) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-[#0a0f1a] to-[#1a1f2e] border ${borderColor} flex items-center justify-center font-bold text-[#94A3B8] tracking-wider`}
      >
        {initials}
      </div>
    )
  }

  return (
    <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden bg-[#0a0f1a] border ${borderColor}`}>
      <Image
        src={resolvedImage}
        alt={name}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  )
}
