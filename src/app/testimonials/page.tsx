"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Quote, Star, MessageSquare } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at Fintech Solutions",
    content: "Arpan's approach to FinOps transformed how we look at our cloud infrastructure. He doesn't just find savings; he builds systems that ensure we stay optimized indefinitely.",
    avatar: "SC"
  },
  {
    name: "James Wilson",
    role: "Director of Engineering, CloudScale",
    content: "The level of data-driven insight Arpan brought to our cloud strategy was unprecedented. We finally have a clear picture of our unit economics thanks to his work.",
    avatar: "JW"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Operations, SaaS Global",
    content: "Arpan is a rare talent who can bridge the gap between finance and engineering. His governance frameworks reduced our resource waste by 35% in just three months.",
    avatar: "ER"
  },
  {
    name: "David Park",
    role: "VP Finance, Enterprise Tech",
    content: "Budget predictability was our biggest challenge. Arpan implemented forecasting models that are now within 5% accuracy every month.",
    avatar: "DP"
  }
]

export default function Testimonials() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Kind <span className="gradient-text">Words</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues and clients I've partnered with to drive 
            cloud efficiency and financial excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-card border border-border hover:shadow-2xl transition-all relative group"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg text-muted-foreground italic mb-10 leading-relaxed relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  {t.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3rem] bg-primary text-white text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
           </div>
           <h2 className="text-3xl font-bold mb-6">Let's build something impactful together</h2>
           <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
             I am always open to discussing new projects, FinOps strategies, or cloud architecture challenges.
           </p>
           <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold hover:scale-105 transition-all shadow-xl flex items-center gap-3 mx-auto">
             Start a Conversation <MessageSquare className="w-6 h-6" />
           </button>
        </div>
      </div>
    </div>
  )
}
