"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { ManagerWrapped } from "@/data/mock-data"
import { LandingScreen } from "./landing-screen"
import { ManagerSelector } from "./manager-selector"
import { WrappedPlayer } from "./wrapped-player"
import { LeagueSummary } from "./league-summary"

type AppScreen = "landing" | "selector" | "wrapped" | "summary"

export function AppShell() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("landing")
  const [selectedManager, setSelectedManager] = useState<ManagerWrapped | null>(null)

  const handleStart = () => {
    setCurrentScreen("selector")
  }

  const handleSelectManager = (manager: ManagerWrapped) => {
    setSelectedManager(manager)
    setCurrentScreen("wrapped")
  }

  const handleWrappedComplete = () => {
    setCurrentScreen("summary")
  }

  const handleBackToSelector = () => {
    setCurrentScreen("selector")
  }

  const handleBackToWrapped = () => {
    setCurrentScreen("wrapped")
  }

  const handleRestart = () => {
    setSelectedManager(null)
    setCurrentScreen("landing")
  }

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {currentScreen === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LandingScreen onStart={handleStart} />
          </motion.div>
        )}

        {currentScreen === "selector" && (
          <motion.div
            key="selector"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <ManagerSelector onSelect={handleSelectManager} />
          </motion.div>
        )}

        {currentScreen === "wrapped" && selectedManager && (
          <motion.div
            key="wrapped"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WrappedPlayer
              manager={selectedManager}
              onComplete={handleWrappedComplete}
              onBack={handleBackToSelector}
            />
          </motion.div>
        )}

        {currentScreen === "summary" && selectedManager && (
          <motion.div
            key="summary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LeagueSummary
              selectedManager={selectedManager}
              onRestart={handleRestart}
              onBack={handleBackToWrapped}
              onChangeManager={handleBackToSelector}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
