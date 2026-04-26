"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Cloud, Database, BarChart3, ShieldCheck, Cpu, ArrowRight } from "lucide-react"

export function ArchitectureDiagram() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Animation values for data flow
  const path1 = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])
  const path2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  const path3 = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            The FinOps <span className="gradient-text">Engine</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Visualizing the automated pipeline that transforms raw billing data into high-impact strategy.
          </p>
        </div>

        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
          {/* SVG Paths for Data Flow */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
             {/* Path 1: Cloud to ETL */}
             <motion.path
               d="M 150 150 L 400 150"
               stroke="currentColor"
               strokeWidth="2"
               fill="none"
               className="text-primary/20"
               style={{ pathLength: path1 }}
             />
             <motion.circle
               cx="400" cy="150" r="4"
               className="fill-primary"
               style={{ opacity: path1 }}
             />

             {/* Path 2: ETL to Database */}
             <motion.path
               d="M 400 200 L 400 400"
               stroke="currentColor"
               strokeWidth="2"
               fill="none"
               className="text-primary/20"
               style={{ pathLength: path2 }}
             />

             {/* Path 3: Database to Governance & Insights */}
             <motion.path
               d="M 450 450 L 650 350"
               stroke="currentColor"
               strokeWidth="2"
               fill="none"
               className="text-secondary/20"
               style={{ pathLength: path3 }}
             />
             <motion.path
               d="M 450 450 L 650 550"
               stroke="currentColor"
               strokeWidth="2"
               fill="none"
               className="text-primary/20"
               style={{ pathLength: path3 }}
             />
          </svg>

          {/* Nodes */}
          
          {/* Cloud Source */}
          <Node 
            x="50" y="100" 
            icon={Cloud} 
            label="Cloud Billing" 
            desc="AWS/GCP/Azure APIs"
            delay={0.1}
          />

          {/* ETL Engine */}
          <Node 
            x="320" y="100" 
            icon={Cpu} 
            label="ETL Engine" 
            desc="Cleaning & Normalization"
            delay={0.3}
            color="bg-primary"
            textColor="text-white"
          />

          {/* Storage */}
          <Node 
            x="320" y="400" 
            icon={Database} 
            label="BigQuery / Warehouse" 
            desc="Unified Cost Data Lake"
            delay={0.5}
          />

          {/* Governance */}
          <Node 
            x="600" y="280" 
            icon={ShieldCheck} 
            label="Governance Engine" 
            desc="Policy-as-Code Enforcement"
            delay={0.7}
            color="bg-brand-navy dark:bg-slate-800"
            textColor="text-white"
          />

          {/* Insights */}
          <Node 
            x="600" y="480" 
            icon={BarChart3} 
            label="Executive Insights" 
            desc="Unit Economics & COGS"
            delay={0.9}
            color="bg-secondary"
            textColor="text-white"
          />
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Real-time Processing", desc: "Data is ingested and normalized every hour for up-to-the-minute visibility." },
             { title: "Automated Guardrails", desc: "Our engine blocks high-cost deployments that violate efficiency policies." },
             { title: "Precision Attribution", desc: "100% of costs are mapped to business units and engineering features." },
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="p-8 rounded-3xl bg-card border border-border shadow-sm"
             >
                <h4 className="font-bold mb-4 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                   {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                   {item.desc}
                </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}

function Node({ x, y, icon: Icon, label, desc, delay, color = "bg-card", textColor = "text-foreground" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      style={{ left: x + "px", top: y + "px" }}
      className={`absolute w-64 p-6 rounded-[2rem] border border-border shadow-xl ${color} ${textColor} group hover:-translate-y-2 transition-all duration-500`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${color.includes('bg-card') ? 'bg-primary/10 text-primary' : 'bg-white/10 text-white'}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-black tracking-tight mb-1">{label}</h3>
      <p className={`text-xs font-medium opacity-60`}>{desc}</p>
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
         <ArrowRight className="w-5 h-5 text-primary" />
      </div>
    </motion.div>
  )
}
