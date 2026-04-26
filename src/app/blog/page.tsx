"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Search, Filter, BookOpen, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "Mastering GCP Commitment Use Discounts",
    excerpt: "A comprehensive guide to understanding and leveraging CUDs in Google Cloud Platform for maximum cost efficiency.",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    category: "Optimization",
  },
  {
    title: "The Human Side of FinOps: Building Culture",
    excerpt: "FinOps is 80% culture and 20% technology. Here is how to build a cost-conscious culture in your engineering team.",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    category: "Governance",
  },
  {
    title: "FinOps Automation with Python and Lambda",
    excerpt: "Step-by-step tutorial on building a serverless automation engine to identify and stop idle cloud resources.",
    date: "Aug 15, 2025",
    readTime: "12 min read",
    category: "Automation",
  },
  {
    title: "Unit Economics: The North Star of FinOps",
    excerpt: "Why total cloud spend doesn't matter, and why you should focus on the cost of a single transaction instead.",
    date: "Jul 05, 2025",
    readTime: "10 min read",
    category: "Strategy",
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">FinOps <span className="gradient-text">Insights</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Thought leadership, technical tutorials, and strategic insights into the 
            world of cloud financial management.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search insights..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>
          <button className="px-6 py-4 rounded-2xl bg-card border border-border flex items-center gap-2 font-bold hover:bg-secondary/5 transition-colors">
            <Filter className="w-5 h-5" /> Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary/50 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-4 h-4" /> {post.readTime}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground mb-8 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex justify-between items-center pt-6 border-t border-border">
                <span className="text-sm font-medium text-muted-foreground">{post.date}</span>
                <div className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
