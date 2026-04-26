"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Trophy } from "lucide-react"

const certs = [
  {
    title: "GCP Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2024",
    id: "GCP-ARCH-12345",
    icon: ShieldCheck
  },
  {
    title: "FinOps Certified Practitioner",
    issuer: "FinOps Foundation",
    date: "2023",
    id: "FINOPS-CP-67890",
    icon: Award
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    id: "AWS-SA-54321",
    icon: ShieldCheck
  },
  {
    title: "CKAD - Kubernetes Developer",
    issuer: "CNCF",
    date: "2021",
    id: "CKAD-98765",
    icon: Trophy
  }
]

export default function Certifications() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Certifications & <span className="gradient-text">Achievements</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A testament to my commitment to continuous learning and technical 
            excellence in cloud and financial management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary/50 transition-all flex items-center gap-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <cert.icon className="w-10 h-10" />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">{cert.title}</h2>
                  <span className="text-sm font-bold text-primary">{cert.date}</span>
                </div>
                <p className="text-muted-foreground mb-4">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">ID: {cert.id}</span>
                  <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                    Verify <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               {
                 title: "FinOps Speaker",
                 desc: "Keynote speaker at the National Cloud Summit 2024 on Cloud Economics."
               },
               {
                 title: "Top Contributor",
                 desc: "Recognized as a top contributor to the FinOps Foundation Open Data Working Group."
               },
               {
                 title: "Architecture Award",
                 desc: "Received the 'Cloud Innovation Award' for building a custom cost-intelligence platform."
               }
             ].map((item, i) => (
               <div key={i} className="p-8 rounded-[2rem] bg-secondary/5 border border-border text-center">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-sm">
                     <CheckCircle2 className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  )
}
