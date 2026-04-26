"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Cloud, BarChart2, ArrowRight } from "lucide-react"

const navItems = [
  { name: "Story", href: "/#journey" },
  { name: "Impact", href: "/#impact" },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/blog" },
  { name: "Simulator", href: "/cost-simulator" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Simple section detection
      const sections = ["journey", "impact"]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-2xl border-white/10" : "bg-transparent"
        }`}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
              <Cloud className="w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tighter">
              ARPAN<span className="text-primary">JAIN</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("/#", "")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                    />
                  )}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-all scale-x-0 group-hover:scale-x-100 ${isActive ? "scale-x-100" : ""}`} />
                </Link>
              )
            })}
            
            <div className="w-[1px] h-4 bg-border mx-4" />
            
            <ThemeToggle />
            
            <Link
              href="/#contact"
              className="premium-button ml-4 px-6 py-2.5 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2"
            >
              Optimize Now <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-secondary/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden"
          >
            <div className="glass rounded-3xl p-6 shadow-3xl border border-white/10 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-sm font-black uppercase tracking-widest border-b border-border/50 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="premium-button block px-6 py-5 text-sm font-black uppercase tracking-widest text-primary text-center bg-primary/5 rounded-2xl"
              >
                Let's Optimize
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
