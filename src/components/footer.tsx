"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Link2, Send, Mail, Heart, Eye, MessageSquare } from "lucide-react"

export function Footer() {
  const [likes, setLikes] = React.useState(0)
  const [views, setViews] = React.useState(1234)

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight mb-4 block">
              Arpan<span className="text-primary">Jain</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Empowering organizations to master their cloud spend through data-driven FinOps strategies, 
              automation, and high-performance governance frameworks.
            </p>
            <div className="flex gap-4">
              {[Github, Link2, Send, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-secondary/5 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Insights & Blogs</Link></li>
              <li><Link href="/resume" className="hover:text-primary transition-colors">Resume</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Interactive</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Eye className="w-4 h-4 text-primary" />
                <span>{views.toLocaleString()} Profile Views</span>
              </div>
              <button 
                onClick={() => setLikes(l => l + 1)}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-red-500 transition-colors group"
              >
                <Heart className={`w-4 h-4 transition-colors ${likes > 0 ? "fill-red-500 text-red-500" : "group-hover:text-red-500"}`} />
                <span>{likes} Optimization Enthusiasts Liked</span>
              </button>
              <Link href="/#comments" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>Join the Discussion</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Arpan Jain. Built with Next.js, Framer Motion & Passion.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
