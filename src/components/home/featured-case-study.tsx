"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, TrendingDown, Layers, FileText } from "lucide-react"
import Link from "next/link"

export function FeaturedCaseStudy() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Case Study</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A deep dive into how I saved an enterprise $1M+ in cloud spend within 6 months.
          </p>
        </div>

        <div className="rounded-[3rem] bg-brand-navy dark:bg-brand-darker text-white p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--primary),transparent)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-bold mb-6 border border-primary/30">
                High Priority Project
              </div>
              <h3 className="text-4xl font-bold mb-8 leading-tight">
                Optimizing Multi-Cloud Infrastructure for a Global Fintech
              </h3>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">The Problem</h4>
                    <p className="text-slate-300">
                      Cloud costs were growing at 2x the rate of revenue, with 40% of spend categorized as "unallocated" or "waste".
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">The Approach</h4>
                    <p className="text-slate-300">
                      Implemented a three-pillar strategy: Visibility (Tagging), Optimization (Rightsizing), and Governance (Automation).
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">32%</p>
                  <p className="text-xs text-slate-400 uppercase font-bold">Total Savings</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="text-3xl font-bold text-secondary mb-1">98%</p>
                  <p className="text-xs text-slate-400 uppercase font-bold">Visibility</p>
                </div>
              </div>

              <Link
                href="/case-studies/fintech-optimization"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-navy rounded-xl font-bold hover:bg-slate-100 transition-all shadow-xl"
              >
                Read Full Case Study <FileText className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              {/* Architecture Diagram Mockup */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-inner group">
                <div className="aspect-video rounded-xl bg-slate-900 overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Simplified Architecture Visual */}
                  <div className="relative flex flex-col items-center gap-8">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-24 h-24 bg-primary/40 rounded-3xl flex items-center justify-center border-2 border-primary/60 shadow-[0_0_30px_-5px_var(--primary)]"
                    >
                      <Layers className="w-12 h-12 text-white" />
                    </motion.div>
                    
                    <div className="flex gap-12">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
                         <div className="w-8 h-2 bg-secondary/50 rounded-full" />
                      </div>
                      <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
                         <div className="w-8 h-2 bg-primary/50 rounded-full" />
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-spin-slow pointer-events-none" />
                  </div>
                  
                  <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Optimization Pipeline v2.4
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 gap-4">
                   {[
                     "Automated Rightsizing Lambda",
                     "GCP Billing Export to BigQuery",
                     "Looker Executive Dashboard",
                     "Slack Governance Alerts"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                        {item}
                     </div>
                   ))}
                </div>
              </div>
              
              {/* Overlay highlight */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
