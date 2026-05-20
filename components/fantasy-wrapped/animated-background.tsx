"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  life: number
  maxLife: number
}

interface LightStreak {
  x: number
  y: number
  angle: number
  speed: number
  length: number
  alpha: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let lightStreaks: LightStreak[] = []
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 20000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: Math.random() * 0.5 + 0.2,
          size: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.3 + 0.1,
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 100,
        })
      }
    }

    const createLightStreaks = () => {
      lightStreaks = []
      for (let i = 0; i < 3; i++) {
        lightStreaks.push({
          x: Math.random() * canvas.width,
          y: -100,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          speed: 2 + Math.random() * 2,
          length: 200 + Math.random() * 300,
          alpha: 0,
        })
      }
    }

    const drawPitchLines = () => {
      ctx.strokeStyle = "rgba(0, 255, 133, 0.03)"
      ctx.lineWidth = 1

      // Center circle
      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2)
      ctx.stroke()

      // Center line
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)
      ctx.lineTo(canvas.width, canvas.height / 2)
      ctx.stroke()

      // Penalty boxes
      const boxWidth = 150
      const boxHeight = 80

      // Top box
      ctx.beginPath()
      ctx.rect((canvas.width - boxWidth) / 2, 0, boxWidth, boxHeight)
      ctx.stroke()

      // Bottom box
      ctx.beginPath()
      ctx.rect((canvas.width - boxWidth) / 2, canvas.height - boxHeight, boxWidth, boxHeight)
      ctx.stroke()
    }

    const drawStadiumLights = () => {
      // Top left floodlight
      const gradient1 = ctx.createRadialGradient(0, 0, 0, 0, 0, canvas.height * 0.8)
      gradient1.addColorStop(0, "rgba(255, 255, 255, 0.08)")
      gradient1.addColorStop(0.3, "rgba(0, 255, 133, 0.03)")
      gradient1.addColorStop(1, "transparent")
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width * 0.6, canvas.height * 0.8)

      // Top right floodlight
      const gradient2 = ctx.createRadialGradient(canvas.width, 0, 0, canvas.width, 0, canvas.height * 0.8)
      gradient2.addColorStop(0, "rgba(255, 255, 255, 0.08)")
      gradient2.addColorStop(0.3, "rgba(0, 163, 255, 0.03)")
      gradient2.addColorStop(1, "transparent")
      ctx.fillStyle = gradient2
      ctx.fillRect(canvas.width * 0.4, 0, canvas.width * 0.6, canvas.height * 0.8)
    }

    const drawVignette = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.7
      )
      gradient.addColorStop(0, "transparent")
      gradient.addColorStop(0.7, "rgba(0, 0, 0, 0.3)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const animate = () => {
      time++

      // Clear with dark gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, "#030712")
      bgGradient.addColorStop(0.5, "#050816")
      bgGradient.addColorStop(1, "#080B18")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw pitch lines
      drawPitchLines()

      // Draw stadium lights
      drawStadiumLights()

      // Draw and update dust particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.life++

        if (p.life > p.maxLife) {
          p.life = 0
          p.y = -10
          p.x = Math.random() * canvas.width
        }

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0

        const fadeIn = Math.min(p.life / 20, 1)
        const fadeOut = Math.max((p.maxLife - p.life) / 20, 0)
        const currentAlpha = p.alpha * fadeIn * fadeOut

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`
        ctx.fill()
      })

      // Draw light streaks occasionally
      lightStreaks.forEach((streak, i) => {
        if (time % 300 === i * 100) {
          streak.alpha = 0.15
          streak.x = Math.random() * canvas.width
          streak.y = -100
        }

        if (streak.alpha > 0) {
          streak.x += Math.cos(streak.angle) * streak.speed
          streak.y += Math.sin(streak.angle) * streak.speed
          streak.alpha -= 0.002

          ctx.beginPath()
          ctx.moveTo(streak.x, streak.y)
          ctx.lineTo(
            streak.x - Math.cos(streak.angle) * streak.length,
            streak.y - Math.sin(streak.angle) * streak.length
          )
          const streakGradient = ctx.createLinearGradient(
            streak.x,
            streak.y,
            streak.x - Math.cos(streak.angle) * streak.length,
            streak.y - Math.sin(streak.angle) * streak.length
          )
          streakGradient.addColorStop(0, `rgba(0, 255, 133, ${streak.alpha})`)
          streakGradient.addColorStop(1, "transparent")
          ctx.strokeStyle = streakGradient
          ctx.lineWidth = 2
          ctx.stroke()
        }
      })

      // Draw vignette
      drawVignette()

      // Subtle smoke/haze at bottom
      const smokeGradient = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height)
      smokeGradient.addColorStop(0, "transparent")
      smokeGradient.addColorStop(1, "rgba(5, 8, 22, 0.5)")
      ctx.fillStyle = smokeGradient
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3)

      animationId = requestAnimationFrame(animate)
    }

    resize()
    createParticles()
    createLightStreaks()
    animate()

    window.addEventListener("resize", () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}
