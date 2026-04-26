"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Cpu, LayoutDashboard, ShieldAlert, Database, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const systems = [
  {
    title: "Cloud Cost Optimization Engine",
    description: "Automated engine that analyzes multi-cloud utilization and applies rightsizing, scheduling, and commitment recommendations.",
    icon: Cpu,
    tags: ["Automation", "Optimization", "Lambda"],
    link: "/projects/optimization-engine"
  },
  {
    title: "FinOps Governance Framework",
    description: "Comprehensive policy-as-code framework to enforce cloud budget adherence and resource hygiene across business units.",
    icon: ShieldAlert,
    tags: ["Governance", "Policy", "Compliance"],
    link: "/projects/governance-framework"
  },
  {
    title: "Cost Intelligence Platform",
    description: "Custom dashboards and data pipelines transforming raw billing data into actionable unit economics and business insights.",
    icon: LayoutDashboard,
    tags: ["BigQuery", "Looker", "Analytics"],
    link: "/projects/intelligence-platform"
  },
  {
    title: "Resource Lifecycle Manager",
    description: "System to manage the entire lifecycle of temporary cloud resources, reducing costs for dev/test environments.",
    icon: Database,
    tags: ["Python", "Terraform", "Lifecycle"],
    link: "/projects/lifecycle-manager"
  }
]

export function SystemsCards() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              Systems I <span className="gradient-text">Build</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
              I specialize in creating end-to-end systems that bridge the gap between 
              technical cloud architecture and financial performance.
            </p>
          </div>
          <Link href="/projects" className="text-primary font-bold flex items-center gap-2 hover:underline group">
            View All Projects 
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="premium-card group p-10 rounded-[2.5rem] bg-card border border-border transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <system.icon className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {system.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-border/50 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{system.title}</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {system.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
