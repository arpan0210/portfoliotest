"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-12 h-12" />

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group overflow-hidden"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: 20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          ) : (
            <Sun className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Background Glow */}
      <motion.div 
        className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
        animate={{ scale: isDark ? 1.5 : 1 }}
      />
    </button>
  )
}
