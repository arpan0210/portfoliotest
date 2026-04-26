"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, LineChart, Code, GraduationCap, ChevronDown, CheckCircle2, Zap } from "lucide-react"

const journey = [
  {
    id: "lead",
    title: "Lead FinOps Engineer",
    company: "CloudScale Enterprise",
    date: "2023 - Present",
    shortDesc: "Architecting global FinOps frameworks and leading optimization squads.",
    description: "Orchestrating multi-cloud cost governance across 500+ accounts. Leading a team of 5 analysts to drive culture change and automated optimization.",
    icon: Rocket,
    tools: ["GCP", "BigQuery", "Terraform", "Python"],
    impact: "Saved $2.4M annually via automated commitment management.",
    color: "bg-primary"
  },
  {
    id: "analyst",
    title: "FinOps Analyst",
    company: "TechNexus Solutions",
    date: "2021 - 2023",
    shortDesc: "Developed cost intelligence platforms and established unit economics.",
    description: "Bridging the gap between engineering and finance by translating raw cloud spend into business value metrics and COGS.",
    icon: LineChart,
    tools: ["Looker", "AppScript", "SQL"],
    impact: "Improved forecasting accuracy by 45%.",
    color: "bg-secondary"
  },
  {
    id: "engineer",
    title: "Software Engineer",
    company: "BuildIt Systems",
    date: "2019 - 2021",
    shortDesc: "Built scalable backend services and automated infrastructure.",
    description: "Full-stack development with a focus on cloud-native architecture and CI/CD pipelines for fintech applications.",
    icon: Code,
    tools: ["React", "Node.js", "Docker", "K8s"],
    impact: "Reduced deployment time by 60%.",
    color: "bg-blue-500"
  },
  {
    id: "edu",
    title: "B.Tech in Computer Science",
    company: "Premier Institute",
    date: "2015 - 2019",
    shortDesc: "Specialized in Distributed Systems and Cloud Computing.",
    description: "Foundation in algorithms, data structures, and the fundamentals of scalable computing architectures.",
    icon: GraduationCap,
    tools: ["Java", "Distributed Systems", "Cloud Arch"],
    impact: "Academic Excellence Award winner.",
    color: "bg-slate-500"
  }
]

export function Timeline() {
  const [expandedId, setExpandedId] = React.useState<string | null>(journey[0].id)

  return (
    <section id="journey" className="py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Evolution of <span className="gradient-text">Expertise</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From building applications to mastering the economics of the cloud.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Interaction Area */}
          <div className="w-full lg:w-1/2 space-y-4">
            {journey.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setExpandedId(expandedId === item.id ? null : item.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={expandedId === item.id}
                aria-controls={`content-${item.id}`}
                className={`group cursor-pointer p-6 rounded-[2rem] border transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  expandedId === item.id 
                    ? "bg-card border-primary/50 shadow-2xl scale-[1.02]" 
                    : "bg-transparent border-border hover:border-primary/20 hover:bg-secondary/5"
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                       <h3 id={`heading-${item.id}`} className="text-xl font-bold">{item.title}</h3>
                       <span className="text-xs font-bold text-muted-foreground">{item.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{item.company}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-500 ${expandedId === item.id ? "rotate-180" : ""}`} />
                </div>

                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      id={`content-${item.id}`}
                      role="region"
                      aria-labelledby={`heading-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-border/50">
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.tools.map(tool => (
                            <span key={tool} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-secondary/10 text-secondary rounded-lg">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Impact Visualization Area */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              {expandedId && (
                <motion.div
                  key={expandedId}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="p-10 rounded-[3rem] bg-brand-navy dark:bg-brand-darker text-white shadow-3xl overflow-hidden relative min-h-[400px] flex flex-col justify-center"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     {React.createElement(journey.find(i => i.id === expandedId)!.icon, { className: "w-48 h-48" })}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/20">
                      Impact Spotlight
                    </div>
                    
                    <h4 className="text-3xl font-bold mb-6 leading-tight">
                      {journey.find(i => i.id === expandedId)?.impact}
                    </h4>
                    
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span className="text-slate-300 font-medium">Strategic optimization roadmap</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span className="text-slate-300 font-medium">Stakeholder financial alignment</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-secondary" />
                          <span className="text-slate-300 font-medium">Automated resource lifecycle</span>
                       </div>
                    </div>

                    <div className="mt-12 flex items-center gap-4">
                       <div className="w-12 h-1 bg-primary rounded-full" />
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400">Validated Impact</span>
                    </div>
                  </div>

                  {/* Decorative circuit element */}
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 border-t border-r border-white/5 rounded-tr-[4rem]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
