"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FileText, TrendingDown, Clock, Target, CheckCircle2, ChevronRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    slug: "fintech-optimization",
    title: "Reducing Cloud Waste in a Global Fintech",
    category: "FinOps Strategy",
    savings: "$1.2M/year",
    duration: "6 Months",
    summary: "How we implemented automated rightsizing and custom commitment strategies for a multi-cloud environment.",
    tags: ["AWS", "GCP", "Automation", "Commitments"]
  },
  {
    slug: "saas-unit-economics",
    title: "Establishing Unit Economics for a SaaS Scale-up",
    category: "Cost Intelligence",
    savings: "40% Higher Margin",
    duration: "4 Months",
    summary: "Transforming raw billing data into per-customer cost insights to drive product pricing decisions.",
    tags: ["BigQuery", "Data Visualization", "Unit Economics"]
  },
  {
    slug: "governance-transformation",
    title: "Automated Governance for 50+ Cloud Accounts",
    category: "Governance",
    savings: "$15K/month",
    duration: "3 Months",
    summary: "Building a policy-as-code framework to enforce financial compliance across distributed engineering teams.",
    tags: ["Terraform", "OPA", "Policy-as-Code"]
  }
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Technical <span className="gradient-text">Case Studies</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep technical breakdowns of real-world FinOps transformations and their 
            measurable impact on business performance.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-[3rem] bg-card border border-border p-8 md:p-12 hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                      {cs.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" /> {cs.duration}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">
                    {cs.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                    {cs.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {cs.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg"
                  >
                    Read Detailed Breakdown <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="lg:col-span-1">
                  <div className="p-8 rounded-3xl bg-secondary/5 border border-border text-center space-y-6">
                    <div>
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Impact Achieved</p>
                      <p className="text-4xl font-black text-primary">{cs.savings}</p>
                    </div>
                    
                    <div className="pt-6 border-t border-border flex flex-col gap-4">
                       <div className="flex items-center gap-3 text-sm text-left">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          <span>Rightsizing automation</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm text-left">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          <span>Commitment modeling</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm text-left">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          <span>Unit economics visibility</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
