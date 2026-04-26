"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, Cell, PieChart, Pie, Legend
} from "recharts"
import { 
  TrendingDown, TrendingUp, DollarSign, Activity, 
  Cloud, AlertTriangle, CheckCircle2, MoreVertical, 
  Search, Bell, Settings, LayoutGrid, Server, Database, 
  Globe, ShieldCheck, Zap, ArrowRight, Download
} from "lucide-react"

// Mock data
const spendData = [
  { name: "Jan", spend: 45000, optimized: 40000, anomaly: 0 },
  { name: "Feb", spend: 52000, optimized: 42000, anomaly: 2000 },
  { name: "Mar", spend: 48000, optimized: 38000, anomaly: 0 },
  { name: "Apr", spend: 61000, optimized: 45000, anomaly: 5000 },
  { name: "May", spend: 55000, optimized: 41000, anomaly: 0 },
  { name: "Jun", spend: 67000, optimized: 48000, anomaly: 1200 },
]

const serviceData = [
  { name: "Compute", value: 45000, color: "#2563EB" },
  { name: "Storage", value: 25000, color: "#2DD4BF" },
  { name: "Database", value: 20000, color: "#3B82F6" },
  { name: "Networking", value: 10000, color: "#94A3B8" },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState("overview")
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] flex">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="hidden md:flex flex-col border-r border-border bg-card sticky top-0 h-screen z-20 overflow-hidden"
      >
        <div className="p-6 flex items-center gap-4">
           <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shrink-0">
              <Cloud className="w-6 h-6" />
           </div>
           {isSidebarOpen && <span className="font-black tracking-tighter text-xl">FINOPS<span className="text-primary">OS</span></span>}
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
           {[
             { id: 'overview', icon: LayoutGrid, label: 'Overview' },
             { id: 'analytics', icon: Activity, label: 'Analytics' },
             { id: 'governance', icon: ShieldCheck, label: 'Governance' },
             { id: 'optimization', icon: Zap, label: 'Automation' },
             { id: 'infrastructure', icon: Server, label: 'Assets' },
           ].map((item) => (
             <button
               key={item.id}
               onClick={() => setActiveTab(item.id)}
               className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                 activeTab === item.id 
                   ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                   : 'text-muted-foreground hover:bg-secondary/10 hover:text-foreground'
               }`}
             >
                <item.icon className="w-5 h-5 shrink-0" />
                {isSidebarOpen && <span className="text-sm font-bold">{item.label}</span>}
             </button>
           ))}
        </nav>

        <div className="p-6 border-t border-border">
           <button 
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
             className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-muted-foreground hover:bg-secondary/10 transition-all"
           >
              <MoreVertical className="w-5 h-5 shrink-0" />
              {isSidebarOpen && <span className="text-sm font-bold">Minimize</span>}
           </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 lg:p-16 max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-2">Cost Intelligence Center</h1>
            <p className="text-muted-foreground font-medium flex items-center gap-2">
              <Globe className="w-4 h-4" /> Multi-Cloud Environment: Production v2.4
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="relative flex-1 md:w-80 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search resources, tags, or projects..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
             </div>
             <div className="flex gap-2">
                <button className="p-3 rounded-2xl bg-card border border-border hover:bg-secondary/10 transition-all relative">
                   <Bell className="w-5 h-5 text-muted-foreground" />
                   <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-card" />
                </button>
                <button className="px-6 py-3 rounded-2xl bg-primary text-white font-bold text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                   <Download className="w-4 h-4" /> Export Data
                </button>
             </div>
          </div>
        </header>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
           {[
             { label: "Gross Monthly Spend", value: "$328,450", change: "+12.5%", icon: DollarSign, trend: "up", color: "text-red-500", bg: "bg-red-500/10" },
             { label: "Optimization Savings", value: "$42,120", change: "-15% YoY", icon: Zap, trend: "down", color: "text-green-500", bg: "bg-green-500/10" },
             { label: "Unit Cost Efficiency", value: "94.2%", change: "+4.2%", icon: Activity, trend: "up", color: "text-green-500", bg: "bg-green-500/10" },
             { label: "Compliance Score", value: "92/100", change: "Safe", icon: ShieldCheck, trend: "up", color: "text-primary", bg: "bg-primary/10" },
           ].map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="p-8 rounded-[2.5rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all group"
             >
                <div className="flex justify-between items-start mb-6">
                   <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color.replace('text-', 'text-')}`}>
                      <stat.icon className="w-6 h-6" />
                   </div>
                   <div className={`text-xs font-black px-3 py-1 rounded-full ${stat.bg} ${stat.color}`}>
                      {stat.change}
                   </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1 font-bold uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-3xl font-black tabular-nums tracking-tighter">{stat.value}</h3>
             </motion.div>
           ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
           <div className="lg:col-span-2 p-10 rounded-[3rem] bg-card border border-border shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-10 relative z-10">
                 <div>
                    <h3 className="text-xl font-black tracking-tight">Spend Trajectory</h3>
                    <p className="text-sm text-muted-foreground font-medium">Monthly analysis with anomaly detection</p>
                 </div>
                 <div className="flex gap-6">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                       <div className="w-2.5 h-2.5 rounded-full bg-primary" /> Actual
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                       <div className="w-2.5 h-2.5 rounded-full bg-secondary" /> Optimized
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500" /> Anomaly
                    </div>
                 </div>
              </div>
              <div className="h-[400px] w-full relative z-10">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={spendData}>
                       <defs>
                          <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15}/>
                             <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                       <XAxis 
                         dataKey="name" 
                         axisLine={false} 
                         tickLine={false} 
                         tick={{fontSize: 10, fontWeight: 900, fill: '#94A3B8'}} 
                         dy={15} 
                       />
                       <YAxis 
                         axisLine={false} 
                         tickLine={false} 
                         tick={{fontSize: 10, fontWeight: 900, fill: '#94A3B8'}} 
                       />
                       <Tooltip 
                         contentStyle={{ 
                           borderRadius: '24px', 
                           border: 'none', 
                           boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)',
                           padding: '24px'
                         }}
                       />
                       <Area type="monotone" dataKey="spend" stroke="#2563EB" strokeWidth={4} fillOpacity={1} fill="url(#colorSpend)" />
                       <Area type="monotone" dataKey="optimized" stroke="#2DD4BF" strokeWidth={2} strokeDasharray="5 5" fillOpacity={0} />
                       <Bar dataKey="anomaly" fill="#EF4444" radius={[4, 4, 0, 0]} barSize={20} />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>

           <div className="p-10 rounded-[3rem] bg-card border border-border shadow-sm flex flex-col">
              <h3 className="text-xl font-black tracking-tight mb-2">Service Breakdown</h3>
              <p className="text-sm text-muted-foreground font-medium mb-10">Spend distribution by category</p>
              
              <div className="flex-1 flex flex-col justify-center">
                 <div className="h-[250px] mb-12">
                   <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                         <Pie
                           data={serviceData}
                           innerRadius={70}
                           outerRadius={100}
                           paddingAngle={8}
                           dataKey="value"
                         >
                           {serviceData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                         </Pie>
                         <Tooltip />
                      </PieChart>
                   </ResponsiveContainer>
                 </div>
                 
                 <div className="space-y-4">
                    {serviceData.map((item, i) => (
                      <div key={i} className="flex justify-between items-center group cursor-pointer p-2 rounded-xl hover:bg-secondary/5 transition-all">
                         <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-sm font-black tracking-tight text-muted-foreground group-hover:text-foreground transition-colors">{item.name}</span>
                         </div>
                         <div className="text-right">
                            <span className="text-sm font-black tabular-nums">${item.value.toLocaleString()}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="p-10 rounded-[3rem] bg-card border border-border shadow-sm">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
                    <Zap className="w-6 h-6 text-primary" /> Active Automation Feed
                 </h3>
                 <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Live</span>
              </div>
              <div className="space-y-6">
                 {[
                   { title: "RDS Instance 'db-prod-01' rightsized", impact: "+$420/mo", time: "12m ago", status: "Success" },
                   { title: "Unused EBS volumes (1.2TB) purged", impact: "+$150/mo", time: "45m ago", status: "Success" },
                   { title: "Anomaly detected in US-EAST-1 Networking", impact: "-$25/hr", time: "1h ago", status: "Warning" },
                   { title: "Savings Plan coverage reached 92%", impact: "Target Met", time: "3h ago", status: "Insight" },
                 ].map((log, i) => (
                   <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/5 border border-border group hover:border-primary/30 transition-all">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        log.status === 'Warning' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'
                      }`}>
                         {log.status === 'Warning' ? <AlertTriangle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                         <h4 className="text-sm font-black mb-1">{log.title}</h4>
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{log.time} • Impact: <span className="text-primary">{log.impact}</span></p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-10 rounded-[3rem] bg-brand-navy dark:bg-brand-darker text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full justify-center">
                 <h3 className="text-3xl font-black mb-6 tracking-tighter leading-tight">Optimization <br /> Strategy Recommendation</h3>
                 <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                   We've identified 12 new RDS instances that are eligible for graviton migration. 
                   Expected performance boost: <span className="text-white">25%</span>. 
                   Expected cost reduction: <span className="text-primary font-black">18%</span>.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl shadow-primary/40">
                       Approve & Deploy Migrations
                    </button>
                    <button className="px-8 py-4 bg-white/10 text-white rounded-2xl font-black text-sm hover:bg-white/20 transition-all backdrop-blur-md border border-white/10">
                       View Analysis
                    </button>
                 </div>
              </div>
              
              {/* Animated Background Visual */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-1000" />
              <Zap className="absolute -bottom-12 -right-12 w-64 h-64 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
           </div>
        </div>
      </main>
    </div>
  )
}
