"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, BarChart, Bar, Cell, PieChart, Pie
} from "recharts"
import { 
  RefreshCcw, Info, DollarSign, Zap, HardDrive, 
  Clock, Server, TrendingDown, ArrowRight
} from "lucide-react"

export default function CostSimulator() {
  const [params, setParams] = React.useState({
    instanceCount: 100,
    avgInstanceRate: 0.12, // $/hr
    usageHours: 730, // Max hours in month
    storageGB: 5000,
    storageRate: 0.02, // $/GB
    rightsizingPotential: 0.15,
    spotPercentage: 0.20,
    reservationPercentage: 0.40,
  })

  // Calculation Engine
  const calculateCosts = () => {
    const computeCost = params.instanceCount * params.avgInstanceRate * params.usageHours
    const storageCost = params.storageGB * params.storageRate
    const baseMonthlySpend = computeCost + storageCost
    
    // Savings calculations
    const rightsizingSavings = computeCost * params.rightsizingPotential
    const spotSavings = (computeCost * params.spotPercentage) * 0.7 // 70% discount for spot
    const reservationSavings = (computeCost * params.reservationPercentage) * 0.4 // 40% discount for RI
    
    const totalSavings = rightsizingSavings + spotSavings + reservationSavings
    const optimizedSpend = baseMonthlySpend - totalSavings
    
    return {
      baseMonthlySpend,
      totalSavings,
      optimizedSpend,
      annualSavings: totalSavings * 12,
      efficiency: (totalSavings / baseMonthlySpend) * 100
    }
  }

  const result = calculateCosts()

  // Chart Data
  const projectionData = [
    { name: "Month 0", current: result.baseMonthlySpend, optimized: result.baseMonthlySpend },
    { name: "Month 3", current: result.baseMonthlySpend * 1.05, optimized: result.optimizedSpend * 1.02 },
    { name: "Month 6", current: result.baseMonthlySpend * 1.10, optimized: result.optimizedSpend * 1.04 },
    { name: "Month 9", current: result.baseMonthlySpend * 1.15, optimized: result.optimizedSpend * 1.06 },
    { name: "Month 12", current: result.baseMonthlySpend * 1.20, optimized: result.optimizedSpend * 1.08 },
  ]

  const breakdownData = [
    { name: "Rightsizing", value: result.baseMonthlySpend * params.rightsizingPotential, color: "#2563EB" },
    { name: "Spot", value: (result.baseMonthlySpend * params.spotPercentage) * 0.7, color: "#2DD4BF" },
    { name: "Reservations", value: (result.baseMonthlySpend * params.reservationPercentage) * 0.4, color: "#3B82F6" },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-8 border border-primary/20"
           >
              Interactive Cloud Economics
           </motion.div>
           <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
             Cost <span className="gradient-text">Simulator</span>
           </h1>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
             Engineer your savings. Adjust granular parameters to see the impact of 
             advanced FinOps strategies on your cloud architecture.
           </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
             <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-2xl">
                <h2 className="text-xl font-bold mb-10 flex items-center gap-3">
                   <RefreshCcw className="w-5 h-5 text-primary" /> Architecture Parameters
                </h2>
                
                <div className="space-y-10">
                   {/* Instance Count */}
                   <div className="space-y-4">
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <Server className="w-4 h-4 text-muted-foreground" />
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Compute Instances</label>
                         </div>
                         <span className="font-black text-primary">{params.instanceCount} Units</span>
                      </div>
                      <input 
                        type="range" min="10" max="1000" step="10"
                        value={params.instanceCount}
                        onChange={(e) => setParams({...params, instanceCount: parseInt(e.target.value)})}
                        className="w-full h-1.5 bg-secondary/20 rounded-full appearance-none cursor-pointer accent-primary"
                      />
                   </div>

                   {/* Usage Hours */}
                   <div className="space-y-4">
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Avg. Monthly Usage</label>
                         </div>
                         <span className="font-black text-primary">{params.usageHours} Hrs</span>
                      </div>
                      <input 
                        type="range" min="100" max="730" step="10"
                        value={params.usageHours}
                        onChange={(e) => setParams({...params, usageHours: parseInt(e.target.value)})}
                        className="w-full h-1.5 bg-secondary/20 rounded-full appearance-none cursor-pointer accent-primary"
                      />
                   </div>

                   {/* Storage */}
                   <div className="space-y-4">
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <HardDrive className="w-4 h-4 text-muted-foreground" />
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Cloud Storage (GB)</label>
                         </div>
                         <span className="font-black text-primary">{params.storageGB.toLocaleString()} GB</span>
                      </div>
                      <input 
                        type="range" min="1000" max="100000" step="1000"
                        value={params.storageGB}
                        onChange={(e) => setParams({...params, storageGB: parseInt(e.target.value)})}
                        className="w-full h-1.5 bg-secondary/20 rounded-full appearance-none cursor-pointer accent-primary"
                      />
                   </div>

                   <div className="pt-10 border-t border-border">
                      <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-primary">Strategy Optimization</h3>
                      
                      <div className="grid grid-cols-1 gap-8">
                         {/* Rightsizing */}
                         <div className="space-y-3">
                            <div className="flex justify-between text-[10px] font-bold">
                               <span>Rightsizing Potential</span>
                               <span className="text-primary">{Math.round(params.rightsizingPotential * 100)}%</span>
                            </div>
                            <input 
                              type="range" min="0" max="0.5" step="0.05"
                              value={params.rightsizingPotential}
                              onChange={(e) => setParams({...params, rightsizingPotential: parseFloat(e.target.value)})}
                              className="w-full h-1 bg-secondary/30 rounded-full appearance-none cursor-pointer accent-primary"
                            />
                         </div>

                         {/* Spot */}
                         <div className="space-y-3">
                            <div className="flex justify-between text-[10px] font-bold">
                               <span>Spot/Preemptible Usage</span>
                               <span className="text-secondary">{Math.round(params.spotPercentage * 100)}%</span>
                            </div>
                            <input 
                              type="range" min="0" max="0.8" step="0.05"
                              value={params.spotPercentage}
                              onChange={(e) => setParams({...params, spotPercentage: parseFloat(e.target.value)})}
                              className="w-full h-1 bg-secondary/30 rounded-full appearance-none cursor-pointer accent-secondary"
                            />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Visualization - 7 cols */}
          <div className="lg:col-span-7 space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  key={result.annualSavings}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 rounded-[3rem] bg-primary text-white shadow-[0_40px_80px_-15px_rgba(37,99,235,0.4)] flex flex-col justify-between"
                >
                   <div>
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
                         <DollarSign className="w-6 h-6" />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Est. Annual Savings</p>
                      <h3 className="text-5xl font-black mt-4 tabular-nums">
                        ${Math.round(result.annualSavings).toLocaleString()}
                      </h3>
                   </div>
                   <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-bold">
                      <Zap className="w-4 h-4 text-yellow-300" />
                      Efficiency Gain: {Math.round(result.efficiency)}%
                   </div>
                </motion.div>

                <div className="p-10 rounded-[3rem] bg-card border border-border shadow-2xl flex flex-col justify-between relative overflow-hidden group">
                   <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors" />
                   <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                         <TrendingDown className="w-6 h-6 text-secondary" />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">New Monthly Spend</p>
                      <h3 className="text-5xl font-black mt-4 tabular-nums text-foreground">
                        ${Math.round(result.optimizedSpend).toLocaleString()}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground mt-2">Down from ${Math.round(result.baseMonthlySpend).toLocaleString()}</p>
                   </div>
                </div>
             </div>

             <div className="p-10 rounded-[3rem] bg-card border border-border shadow-2xl">
                <div className="flex justify-between items-center mb-10">
                   <h3 className="text-xl font-black tracking-tight">12-Month Financial Projection</h3>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase">
                         <div className="w-2 h-2 rounded-full bg-border" /> Current
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase">
                         <div className="w-2 h-2 rounded-full bg-primary" /> Optimized
                      </div>
                   </div>
                </div>
                <div className="h-[350px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={projectionData}>
                         <defs>
                            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.1}/>
                               <stop offset="95%" stopColor="#94A3B8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2}/>
                               <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                            </linearGradient>
                         </defs>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                         <XAxis 
                           dataKey="name" 
                           axisLine={false} 
                           tickLine={false} 
                           tick={{fontSize: 10, fontWeight: 700, fill: '#94A3B8'}} 
                           dy={10} 
                         />
                         <YAxis 
                           axisLine={false} 
                           tickLine={false} 
                           tick={{fontSize: 10, fontWeight: 700, fill: '#94A3B8'}} 
                         />
                         <Tooltip 
                           contentStyle={{ 
                             borderRadius: '24px', 
                             border: 'none', 
                             boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)',
                             padding: '20px'
                           }}
                         />
                         <Area 
                           type="monotone" 
                           dataKey="current" 
                           stroke="#94A3B8" 
                           strokeWidth={2} 
                           strokeDasharray="5 5" 
                           fillOpacity={1} 
                           fill="url(#colorCurrent)" 
                         />
                         <Area 
                           type="monotone" 
                           dataKey="optimized" 
                           stroke="#2563EB" 
                           strokeWidth={4} 
                           fillOpacity={1} 
                           fill="url(#colorOptimized)" 
                         />
                      </AreaChart>
                   </ResponsiveContainer>
                </div>
             </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 rounded-[4rem] bg-brand-navy dark:bg-brand-darker text-white text-center relative overflow-hidden shadow-3xl"
        >
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready for a Deep Dive?</h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                Our simulation accounts for industry standards. For a precise 100% accurate 
                assessment, we need to ingest your actual CUR/Billing data.
              </p>
              <button className="px-12 py-6 bg-primary text-white rounded-[2rem] font-black text-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-4 mx-auto">
                Schedule Execution Plan <ArrowRight className="w-6 h-6" />
              </button>
           </div>
           
           {/* Visual Flourish */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </div>
  )
}
