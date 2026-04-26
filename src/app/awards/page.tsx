"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Award, Trophy, Star, Medal } from "lucide-react"

const awards = [
  {
    title: "FinOps Excellence Award 2024",
    issuer: "Global Cloud Council",
    description: "Awarded for achieving the highest cost optimization efficiency in the enterprise fintech sector.",
    icon: Trophy
  },
  {
    title: "Cloud Innovation of the Year",
    issuer: "Tech Summit",
    description: "Recognized for building an automated governance-as-code framework that reduced cloud waste by $1M annually.",
    icon: Medal
  },
  {
    title: "Top 40 Under 40 in Cloud",
    issuer: "Cloud Leaders Magazine",
    description: "Selected as one of the top young professionals driving innovation in cloud financial management.",
    icon: Star
  }
]

export default function Awards() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Awards & <span className="gradient-text">Recognition</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry recognition for technical innovation and leadership in the 
            cloud FinOps domain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[3rem] bg-card border border-border hover:border-primary/50 hover:shadow-2xl transition-all text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                <award.icon className="w-10 h-10" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{award.title}</h2>
              <p className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">{award.issuer}</p>
              <p className="text-muted-foreground leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold">
              <Award className="w-4 h-4" /> Validated by Industry Peers
           </div>
        </div>
      </div>
    </div>
  )
}
