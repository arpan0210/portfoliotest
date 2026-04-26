"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Download, FileText, Share2, Mail, Link2, Github } from "lucide-react"

export default function Resume() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Professional <span className="gradient-text">Resume</span></h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive summary of my technical expertise and business impact.
            </p>
          </div>
          
          <div className="flex gap-4">
             <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
                <Download className="w-5 h-5" /> Download PDF
             </button>
             <button className="p-4 rounded-2xl bg-card border border-border hover:bg-secondary/5 transition-all">
                <Share2 className="w-5 h-5" />
             </button>
          </div>
        </motion.div>

        {/* Resume Content Mockup */}
        <div className="rounded-[2.5rem] bg-card border border-border p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 flex gap-4 text-muted-foreground">
             <Mail className="w-5 h-5" />
             <Link2 className="w-5 h-5" />
             <Github className="w-5 h-5" />
          </div>

          <div className="space-y-12">
            <header className="pb-12 border-b border-border">
              <h2 className="text-3xl font-bold mb-2">Arpan Jain</h2>
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-6">Lead FinOps Engineer</p>
              <p className="text-muted-foreground leading-relaxed">
                Strategic FinOps leader with 6+ years of experience in cloud cost optimization, 
                automation, and governance. Proven track right-sizing multi-million dollar cloud 
                budgets for global enterprises.
              </p>
            </header>

            <section>
              <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary flex items-center gap-3">
                <div className="w-8 h-1 bg-primary rounded-full" /> Experience
              </h3>
              <div className="space-y-10">
                 <div>
                   <div className="flex justify-between items-start mb-2">
                     <h4 className="text-xl font-bold text-foreground">Lead FinOps Engineer</h4>
                     <span className="text-sm font-medium text-muted-foreground">2023 - Present</span>
                   </div>
                   <p className="text-primary font-bold mb-4">CloudScale Enterprise</p>
                   <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                     <li>Developed an automated commitment management system saving $2.4M annually.</li>
                     <li>Lead a cross-functional FinOps council to drive cost-conscious engineering culture.</li>
                     <li>Implemented OPA-based governance policies reducing resource waste by 30%.</li>
                   </ul>
                 </div>
                 
                 <div>
                   <div className="flex justify-between items-start mb-2">
                     <h4 className="text-xl font-bold text-foreground">FinOps Analyst</h4>
                     <span className="text-sm font-medium text-muted-foreground">2021 - 2023</span>
                   </div>
                   <p className="text-primary font-bold mb-4">TechNexus Solutions</p>
                   <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                     <li>Established unit economics reporting for a multi-tenant SaaS product.</li>
                     <li>Optimized GCP BigQuery spend by 45% through query refactoring and storage management.</li>
                     <li>Automated monthly cost allocation reports for 12 business units.</li>
                   </ul>
                 </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary flex items-center gap-3">
                <div className="w-8 h-1 bg-primary rounded-full" /> Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   "Cloud FinOps", "GCP/AWS/Azure", "BigQuery SQL", "Python", 
                   "Terraform", "Looker/Tableau", "Unit Economics", "Governance"
                 ].map(skill => (
                   <div key={skill} className="px-4 py-2 rounded-xl bg-secondary/10 text-secondary text-sm font-bold text-center">
                     {skill}
                   </div>
                 ))}
              </div>
            </section>
          </div>
        </div>
        
        <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-between gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                 <FileText className="w-6 h-6" />
              </div>
              <p className="text-muted-foreground font-medium">Looking for a more detailed version or a specific format?</p>
           </div>
           <button className="text-primary font-bold hover:underline">Get in touch →</button>
        </div>
      </div>
    </div>
  )
}
