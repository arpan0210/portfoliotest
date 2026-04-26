"use client"

import { Hero } from "@/components/home/hero";
import { Timeline } from "@/components/home/timeline";
import { SystemsCards } from "@/components/home/systems-cards";
import { FeaturedCaseStudy } from "@/components/home/featured-case-study";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Award, Quote, MessageSquare } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy load heavy components
const ImpactMetrics = dynamic(() => import("@/components/home/impact-metrics").then(mod => mod.ImpactMetrics), {
  loading: () => <div className="h-[600px] bg-secondary/5 animate-pulse" />
});

const ArchitectureDiagram = dynamic(() => import("@/components/home/architecture-diagram").then(mod => mod.ArchitectureDiagram), {
  loading: () => <div className="h-[600px] bg-background animate-pulse" />
});

const DashboardPreview = dynamic(() => import("@/components/home/dashboard-preview").then(mod => mod.DashboardPreview), {
  loading: () => <div className="h-[600px] bg-secondary/5 animate-pulse" />
});

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      
      <RevealSection>
        <ImpactMetrics />
      </RevealSection>

      <RevealSection>
        <Timeline />
      </RevealSection>

      <RevealSection>
        <ArchitectureDiagram />
      </RevealSection>

      <RevealSection>
        <SystemsCards />
      </RevealSection>

      <RevealSection>
        <DashboardPreview />
      </RevealSection>

      <RevealSection>
        <FeaturedCaseStudy />
      </RevealSection>

      {/* Blogs Preview Section */}
      <RevealSection className="py-32 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">Latest <span className="gradient-text">Insights</span></h2>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">Strategic perspectives on FinOps, GCP architecture, and cloud economics.</p>
            </div>
            <Link href="/blog" className="text-primary font-bold flex items-center gap-2 hover:underline group">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Mastering GCP Commitment Use Discounts",
                date: "Oct 12, 2025",
                category: "Optimization",
                image: "bg-blue-500/10"
              },
              {
                title: "The Human Side of FinOps: Building Culture",
                date: "Sep 28, 2025",
                category: "Governance",
                image: "bg-teal-500/10"
              },
              {
                title: "FinOps Automation with Python and Lambda",
                date: "Aug 15, 2025",
                category: "Automation",
                image: "bg-primary/10"
              }
            ].map((post, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[16/10] rounded-[2rem] ${post.image} mb-8 border border-border group-hover:border-primary/50 transition-all flex items-center justify-center relative overflow-hidden`}>
                  <BookOpen className="w-10 h-10 text-primary/40 group-hover:text-primary transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">
                  <span className="w-8 h-[1px] bg-primary/30" /> {post.category}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">Strategic approaches to maximizing ROI on large-scale cloud investments...</p>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Certifications & Testimonials Preview */}
      <RevealSection className="py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-4xl font-black mb-16 flex items-center gap-4">
                <Award className="text-primary w-10 h-10" /> Validated <span className="gradient-text">Expertise</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "GCP Professional Architect",
                  "FinOps Certified Practitioner",
                  "AWS Solutions Architect",
                  "CKAD Kubernetes"
                ].map((cert, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all flex items-center gap-4 shadow-sm hover:shadow-xl">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle i={i} />
                    </div>
                    <span className="text-sm font-bold tracking-tight">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-black mb-16 flex items-center gap-4">
                <Quote className="text-primary w-10 h-10" /> Peer <span className="gradient-text">Impact</span>
              </h2>
              <div className="p-12 rounded-[3rem] bg-card border border-border relative group">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl">
                   <Quote className="w-6 h-6" />
                </div>
                <p className="text-xl italic text-muted-foreground mb-10 leading-relaxed">
                  "Arpan's approach to FinOps transformed how we look at our cloud infrastructure. 
                  He doesn't just find savings; he builds systems that ensure we stay optimized indefinitely."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary/20 border-2 border-primary/20" />
                  <div>
                    <p className="font-black tracking-tight">CTO, Enterprise Fintech</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Digital Transformation Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Final CTA */}
      <RevealSection className="py-48 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[180px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black mb-12 tracking-tighter"
          >
            Let's build <br /> efficiency.
          </motion.h2>
          <p className="text-xl md:text-3xl text-primary-foreground/80 mb-16 max-w-2xl mx-auto font-medium leading-snug">
            Ready to transform your cloud spend into a high-impact strategic advantage?
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="mailto:arpan@example.com"
              className="premium-button px-12 py-6 bg-white text-primary rounded-[2rem] font-black text-xl shadow-[0_30px_60px_rgba(255,255,255,0.3)] hover:scale-105 transition-all flex items-center gap-4"
            >
              Start Optimization <MessageSquare className="w-7 h-7" />
            </Link>
            <Link
              href="/resume"
              className="premium-button px-12 py-6 bg-transparent border-2 border-white/30 text-white rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all"
            >
              Get Resume
            </Link>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}

function RevealSection({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

function CheckCircle({ i }: { i: number }) {
  return (
    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
