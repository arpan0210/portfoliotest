"use client"

import * as React from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { 
  TrendingDown, Users, Eye, PieChart, ArrowUpRight, 
  DollarSign, Activity, Target, AreaChart as AreaChartIcon 
} from "lucide-react"
import { AreaChart, Area, ResponsiveContainer } from "recharts"

interface CounterProps {
  value: number
  suffix?: string
  label: string
  description: string
  icon: React.ElementType
  prefix?: string
  chartData: any[]
}

function Counter({ value, suffix = "", label, description, icon: Icon, prefix = "", chartData }: CounterProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 120,
  })

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return (
    <div ref={ref} className="premium-card group relative p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-3xl overflow-hidden">
      {/* Background Sparkline */}
      <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
         <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
               <Area 
                 type="monotone" 
                 dataKey="v" 
                 stroke="#2563EB" 
                 strokeWidth={2} 
                 fill="#2563EB" 
                 isAnimationActive={true}
                 animationDuration={2000}
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
           <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Icon className="w-5 h-5" />
           </div>
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground bg-secondary/5 px-2 py-1 rounded">Metric</span>
        </div>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-sm font-black text-primary align-top mt-2">{prefix}</span>
          <span className="text-6xl font-black tracking-tighter tabular-nums">
            {displayValue.toLocaleString()}
          </span>
          <span className="text-2xl font-black text-primary ml-1">{suffix}</span>
        </div>

        <h4 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{label}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed font-medium">
          {description}
        </p>
        
        <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-green-500 uppercase tracking-widest">
           <ArrowUpRight className="w-3 h-3" /> Validated Impact
        </div>
      </div>
    </div>
  )
}

export function ImpactMetrics() {
  const mockData = [
    { v: 10 }, { v: 20 }, { v: 15 }, { v: 30 }, { v: 25 }, { v: 45 }, { v: 40 }
  ]

  return (
    <section id="impact" className="py-32 bg-secondary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/20"
            >
              Performance Metrics
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              Measurable <br />
              <span className="gradient-text">Business Impact</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed font-medium">
              We deliver technical excellence that directly translates into 
              financial efficiency and operational scale.
            </p>
          </div>
          <div className="flex gap-4 mb-4">
             {[DollarSign, Activity, Target].map((Icon, i) => (
                <div key={i} className="w-14 h-14 rounded-2xl border border-primary/20 flex items-center justify-center bg-card shadow-sm hover:border-primary/50 transition-colors">
                   <Icon className="w-6 h-6 text-primary" />
                </div>
             ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter
            value={35}
            suffix="%"
            label="Waste Reduction"
            description="Eliminated zombie resources and oversized instances across global fleets."
            icon={TrendingDown}
            chartData={mockData}
          />
          <Counter
            value={20}
            suffix="K/mo"
            prefix="$"
            label="Direct Savings"
            description="Achieved through automated commitment management and spot strategies."
            icon={PieChart}
            chartData={mockData.map(d => ({ v: d.v * 1.5 }))}
          />
          <Counter
            value={95}
            suffix="%"
            label="Cost Visibility"
            description="Unified billing dashboards with 100% cloud cost attribution accuracy."
            icon={Eye}
            chartData={mockData.map(d => ({ v: 100 - d.v }))}
          />
          <Counter
            value={60}
            suffix="%"
            label="Forecast Delta"
            description="Improved budget predictability using advanced data engineering pipelines."
            icon={Target}
            chartData={mockData}
          />
        </div>
      </div>
    </section>
  )
}
