import React from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, DollarSign, BookOpen, MoreVertical, CreditCard, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 2000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
  { name: 'Jul', sales: 3490 },
];

const paymentData = [
  { name: 'Visa/MC', value: 45 },
  { name: 'Wave', value: 30 },
  { name: 'Orange', value: 15 },
  { name: 'MTN', value: 10 },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Command Center</h1>
            <p className="text-sm text-gray-400 font-black uppercase tracking-widest">Real-time Academy Performance Analytics</p>
          </div>
          <div className="flex gap-4">
             <button className="bg-white border border-gray-200 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors">
               <Download className="w-5 h-5 text-gray-400" />
               Report
             </button>
             <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
               New Course
             </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Revenue', value: '$84,200', trend: '+12.5%', isUp: true, icon: DollarSign, color: 'blue' },
            { label: 'Active Students', value: '4,120', trend: '+5.2%', isUp: true, icon: Users, color: 'purple' },
            { label: 'Avg. Course Rating', value: '4.85', trend: '+0.1%', isUp: true, icon: TrendingUp, color: 'orange' },
            { label: 'Conversion Rate', value: '3.2%', trend: '-0.4%', isUp: false, icon: BarChart, color: 'green' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}-500/10 blur-3xl -mr-12 -mt-12 transition-colors`}></div>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black ${stat.isUp ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {stat.isUp ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  {stat.trend}
                </div>
              </div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <h4 className="text-3xl font-black text-gray-900">{stat.value}</h4>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-black text-gray-900">Revenue Velocity</h3>
              <select className="bg-gray-50 border-transparent text-xs font-black uppercase tracking-widest p-2 rounded-xl">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '16px' }}
                  />
                  <Area type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-black text-gray-900 mb-8">Channel Breakdown</h3>
            <div className="space-y-6">
              {paymentData.map((channel, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-gray-600">{channel.name}</span>
                    <span className="text-gray-900">{channel.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${channel.value}%` }}
                      className="h-full bg-blue-600"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-4">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Payout Schedule</h4>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                     <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900 leading-none mb-1">Mobile Money Sync</p>
                    <p className="text-[10px] text-gray-500 font-medium">Wait: 2h 45m</p>
                  </div>
                </div>
                <span className="text-xs font-black text-blue-600">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Download = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
