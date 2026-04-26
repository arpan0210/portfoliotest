"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Layers, Zap, Shield, BarChart } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "FinOps Automation Engine",
    description: "A serverless engine built with Python and AWS Lambda that automatically identifies and terminates idle cloud resources across multiple accounts.",
    icon: Zap,
    tech: ["Python", "AWS Lambda", "CloudWatch", "Terraform"],
    impact: "Reduced dev/test environment costs by 24% monthly.",
    link: "#"
  },
  {
    title: "GCP Billing Data Pipeline",
    description: "An enterprise-grade ETL pipeline that streams GCP billing export data into BigQuery for real-time cost attribution and unit economics analysis.",
    icon: Layers,
    tech: ["GCP", "BigQuery", "Dataflow", "Looker"],
    impact: "Achieved 99% cost attribution accuracy for engineering teams.",
    link: "#"
  },
  {
    title: "Governance-as-Code Framework",
    description: "A set of OPA (Open Policy Agent) policies integrated with Terraform to prevent the deployment of non-compliant, high-cost resource configurations.",
    icon: Shield,
    tech: ["OPA", "Rego", "Terraform", "GitHub Actions"],
    impact: "Blocked $15K/month of potentially wasteful infrastructure deployments.",
    link: "#"
  },
  {
    title: "FinOps Executive Dashboard",
    description: "A high-level executive dashboard providing visibility into cloud spend, commitment coverage, and optimization opportunities for C-suite stakeholders.",
    icon: BarChart,
    tech: ["Looker", "BigQuery", "SQL", "Tableau"],
    impact: "Empowered 12 business units with self-service cost management.",
    link: "#"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Systems & <span className="gradient-text">Implementations</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical solutions built to solve complex cloud economics challenges through 
            automation and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 md:p-12 rounded-[3rem] bg-card border border-border hover:border-primary/50 transition-all hover:shadow-2xl overflow-hidden"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <project.icon className="w-8 h-8" />
              </div>

              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
                    {t}
                  </span>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 mb-8">
                 <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">Business Impact</p>
                 <p className="text-lg font-medium">{project.impact}</p>
              </div>

              <div className="flex gap-4">
                <Link href={project.link} className="p-3 rounded-xl bg-border/50 hover:bg-primary hover:text-white transition-all">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href={project.link} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all">
                  View Case Study <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
