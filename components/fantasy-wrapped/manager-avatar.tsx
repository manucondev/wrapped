"use client"

import { useMemo, useState } from "react"
import Image from "next/image"

interface ManagerAvatarProps {
  name: string
  image?: string
  size?: "sm" | "md" | "lg" | "xl"
  accent?: "green" | "gold" | "blue"
}

const sizeClasses = {
  sm: "w-10 h-10 text-xs",
  md: "w-12 h-12 text-sm",
  lg: "w-24 h-24 text-xl",
  xl: "w-32 h-32 text-3xl",
}

const accentClasses = {
  green: "border-[#00FF85]/35 shadow-[0_0_30px_rgba(0,255,133,0.14)]",
  gold: "border-[#FACC15]/45 shadow-[0_0_35px_rgba(250,204,21,0.18)]",
  blue: "border-[#00A3FF]/35 shadow-[0_0_30px_rgba(0,163,255,0.14)]",
}

export function ManagerAvatar({ name, image, size = "md", accent = "green" }: ManagerAvatarProps) {
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

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden bg-[#0a0f1a] border ${accentClasses[accent]}`}>
      {hasError || !currentImage ? (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#111827] to-[#1a1f2e]">
          <span className="font-black tracking-wider text-[#F8FAFC]">{initials}</span>
        </div>
      ) : (
        <Image
          src={currentImage}
          alt={name}
          fill
          className="object-cover"
          onError={() => setImageAttempt((attempt) => attempt + 1)}
          sizes="128px"
        />
      )}
    </div>
  )
}
