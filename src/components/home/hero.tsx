"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronRight, Download, BarChart2, ShieldCheck, Zap, Cloud, MousePointer2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-20">
      {/* Background Parallax Orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none opacity-50 dark:opacity-20 will-change-transform" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-20 will-change-transform" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              FinOps Strategy & Automation
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] lg:-ml-1">
              Arpan <br />
              <span className="gradient-text">Jain</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground/80 mb-6 max-w-lg leading-snug">
              Transforming cloud complexity into <span className="text-primary underline decoration-2 underline-offset-4">measurable business value.</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed">
              I build high-performance systems that optimize cloud spend at scale through automation, data intelligence, and governance.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link
                href="/#journey"
                className="premium-button group px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center gap-3 shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              >
                The Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="premium-button px-10 py-5 bg-card border border-border rounded-2xl font-bold flex items-center gap-2 hover:bg-secondary/5 hover:border-primary/50 transition-all"
              >
                Case Studies
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Visual */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10 group bg-brand-navy will-change-transform">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/40 mix-blend-overlay opacity-60" />
               
               {/* Center Icon Visual */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border-2 border-white/10 rounded-full flex items-center justify-center mb-8 relative"
                  >
                     <div className="absolute inset-0 border-t-2 border-primary rounded-full" />
                     <div className="w-32 h-32 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 shadow-2xl">
                        <Cloud className="w-16 h-16 text-primary" />
                     </div>
                  </motion.div>
                  <h3 className="text-3xl font-black mb-2 tracking-tight">FinOps Engine</h3>
                  <p className="text-slate-400 text-sm font-medium">Efficiency Optimized v4.0</p>
               </div>

               {/* UI Elements */}
               <div className="absolute top-8 left-8 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                  <div className="w-3 h-3 rounded-full bg-green-400/50" />
               </div>
            </div>
            
            {/* Floating Metric Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 glass p-6 rounded-3xl shadow-2xl z-20 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-1">
                 <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Efficiency</p>
              </div>
              <p className="text-3xl font-black text-primary">+35%</p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-4 glass p-6 rounded-3xl shadow-2xl z-20 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-1">
                 <div className="w-2 h-2 rounded-full bg-secondary" />
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Global Savings</p>
              </div>
              <p className="text-3xl font-black text-secondary">$1.4M</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
         <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
         <motion.div 
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1"
         >
            <div className="w-1 h-2 bg-primary rounded-full" />
         </motion.div>
      </motion.div>
    </section>
  )
}
