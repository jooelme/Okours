import React from 'react';
import { motion } from 'motion/react';
import { Map, Zap, DollarSign, Layers, CheckCircle2, AlertTriangle, ArrowRight, MessageSquare } from 'lucide-react';

export const ImplementationGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                <Map className="w-6 h-6" />
             </div>
             <h1 className="text-4xl font-black text-gray-900 tracking-tight">Implementation Roadmap</h1>
          </div>
          <p className="text-gray-500 font-medium max-w-2xl leading-relaxed italic">
            "Senior No-Code Architect Response for Okours Academy Deployment Strategy."
          </p>
        </div>

        {/* Stack Comparison */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
             <Layers className="w-6 h-6 text-blue-600" />
             Option Comparison: Speed vs. Scalability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-[32px] border border-gray-100 bg-gray-50/50">
              <h3 className="text-lg font-black text-gray-900 mb-4">Option A: WordPress Engine</h3>
              <p className="text-sm text-gray-500 mb-6 font-medium">Fastest time-to-market using off-the-shelf LMS components.</p>
              <ul className="space-y-3 mb-8">
                {['LearnDash LMS ($199/yr)', 'BuddyBoss Theme (Community)', 'CinetPay for WordPress (Local)', 'Pre-built Quizzes & Certificates'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-bold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-200">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recommended for:</p>
                 <p className="text-sm font-black text-gray-900">Solopreneurs & Small Academies</p>
              </div>
            </div>

            <div className="p-8 rounded-[32px] border border-blue-100 bg-blue-50/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <Zap className="w-6 h-6 text-blue-600 animate-pulse" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-4">Option B: Custom Custom (Bubble.io)</h3>
              <p className="text-sm text-gray-500 mb-6 font-medium">Infinite flexibility and professional API-first architecture.</p>
              <ul className="space-y-3 mb-8">
                {['Bubble.io Platform ($32/mo)', 'API Connector (for Wave/MTN)', 'Mux Video Hosting (Smooth playback)', 'Custom Analytics Dashboard'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-bold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-blue-100">
                 <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Recommended for:</p>
                 <p className="text-sm font-black text-blue-900 uppercase tracking-tight">Professional Scaling Brands</p>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Workflow */}
        <section className="mb-20">
          <div className="bg-gray-900 rounded-[40px] p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] -mr-48 -mt-48"></div>
            <h2 className="text-2xl font-black mb-10 flex items-center gap-3">
               <Zap className="w-6 h-6 text-blue-400" />
               The "Instant-Enroll" Automation Logic
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: '01', title: 'Webhook Trigger', desc: 'Mobile Money Gateway (Paystack/CinetPay) receives money and sends a JSON ping to your server/Zapier.' },
                { step: '02', title: 'ID Mapping', desc: 'Filter for "Success" signals. Map the user\'s Phone/Email to their Academy account ID.' },
                { step: '03', title: 'Action: Grant', desc: 'Auto-unlock Course Database record and trigger "Welcome" email via Resend or MailerLite.' }
              ].map((step, i) => (
                <div key={i} className="space-y-4">
                  <span className="text-6xl font-black text-blue-900/50 block">{step.step}</span>
                  <h4 className="text-lg font-black">{step.title}</h4>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Breakdown */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
             <DollarSign className="w-6 h-6 text-green-600" />
             Est. Monthly Budget (Pro Custom Stack)
          </h2>
          <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-sm">
             <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Service</th>
                    <th className="px-10 py-6 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Purpose</th>
                    <th className="px-10 py-6 text-right text-[10px] font-black uppercase tracking-widest text-gray-400">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                   {[
                    { service: 'Bubble Starter', use: 'Platform & Database Hosting', cost: '$32.00' },
                    { service: 'Mux Video', use: 'Bandwidth & Storage (Pay-as-you-go)', cost: '~$25.00' },
                    { service: 'Resend / Email', use: 'Automated Transactional Emails', cost: '$0.00 (Free Tier)' },
                    { service: 'Zapier / Make', use: 'Payment-to-LMS Automations', cost: '$20.00' },
                    { service: 'Domain & SSL', use: 'Academy Branding & Security', cost: '$1.50' },
                   ].map((row, i) => (
                     <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-10 py-6 text-sm font-black text-gray-900">{row.service}</td>
                        <td className="px-10 py-6 text-sm text-gray-500 font-medium">{row.use}</td>
                        <td className="px-10 py-6 text-sm font-black text-right text-gray-900">{row.cost}</td>
                     </tr>
                   ))}
                   <tr className="bg-blue-50/30">
                      <td colSpan={2} className="px-10 py-8 text-sm font-black text-blue-900">Total Operational Overhead</td>
                      <td className="px-10 py-8 text-xl font-black text-blue-600 text-right">~$78.50 /mo</td>
                   </tr>
                </tbody>
             </table>
          </div>
        </section>

        <div className="mt-20 p-12 bg-blue-600 rounded-[40px] text-white text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 to-transparent"></div>
          <p className="text-sm font-black uppercase tracking-[0.3em] mb-4">Expert Tip</p>
          <h3 className="text-3xl font-black mb-8 max-w-2xl mx-auto">Focus on content quality; let the automation handle the African scale.</h3>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-900/40 hover:bg-gray-50 transition-all active:scale-95 flex items-center gap-3 mx-auto">
             Begin Staging Phase
             <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
