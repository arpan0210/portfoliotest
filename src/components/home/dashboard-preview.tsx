"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LayoutDashboard, ArrowRight } from "lucide-react"
import Link from "next/link"

export function DashboardPreview() {
  return (
    <section className="py-24 overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Interactive Cost Intelligence</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience a simulated FinOps dashboard. I build platforms that turn 
              millions of raw billing records into actionable insights for engineering and finance teams.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Real-time multi-cloud visibility",
                "Automated anomaly detection",
                "Unit economics & COGS tracking",
                "Self-service engineering dashboards"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all"
            >
              Explore Dashboard Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-border bg-background shadow-2xl overflow-hidden aspect-video">
               <div className="h-full w-full bg-slate-50 dark:bg-slate-900 flex flex-col">
                  {/* Mock Sidebar/Header */}
                  <div className="h-12 border-b border-border bg-card flex items-center px-4 justify-between">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                     </div>
                     <div className="w-32 h-4 bg-border rounded-full" />
                  </div>
                  
                  {/* Mock Content */}
                  <div className="flex-1 p-6">
                     <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="h-20 rounded-xl bg-card border border-border p-3">
                           <div className="w-8 h-2 bg-border rounded mb-2" />
                           <div className="w-12 h-4 bg-primary/20 rounded" />
                        </div>
                        <div className="h-20 rounded-xl bg-card border border-border p-3">
                           <div className="w-8 h-2 bg-border rounded mb-2" />
                           <div className="w-12 h-4 bg-secondary/20 rounded" />
                        </div>
                        <div className="h-20 rounded-xl bg-card border border-border p-3">
                           <div className="w-8 h-2 bg-border rounded mb-2" />
                           <div className="w-12 h-4 bg-primary/20 rounded" />
                        </div>
                     </div>
                     <div className="h-32 rounded-xl bg-card border border-border p-4 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-end">
                           <div className="flex-1 h-12 bg-primary/10 m-1 rounded-t" />
                           <div className="flex-1 h-20 bg-primary/20 m-1 rounded-t" />
                           <div className="flex-1 h-16 bg-primary/10 m-1 rounded-t" />
                           <div className="flex-1 h-24 bg-primary/30 m-1 rounded-t" />
                           <div className="flex-1 h-20 bg-primary/20 m-1 rounded-t" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl">
               <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                     <LayoutDashboard className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">System Health</span>
               </div>
               <p className="text-xl font-bold">98.2% Optimized</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
