import React from 'react';
import { motion } from 'motion/react';
import { User, Shield, CreditCard, BookOpen, Settings, Bell, ChevronRight, Award } from 'lucide-react';
import { cn } from '../lib/utils';

export const Profile: React.FC = () => {
  const stats = [
    { label: 'Completed', value: '12', icon: BookOpen, color: 'blue' },
    { label: 'Certificates', value: '4', icon: Award, color: 'purple' },
    { label: 'Study Hours', value: '84h', icon: Shield, color: 'green' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 p-12 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl -mr-32 -mt-32"></div>
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-32 h-32 rounded-3xl bg-blue-600 flex items-center justify-center border-4 border-white/10 shadow-2xl">
                <span className="text-5xl font-black italic">JM</span>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-black mb-2 tracking-tight">Joel M.</h1>
                <p className="text-blue-400 font-bold mb-4">Senior Digital Architect</p>
                <div className="flex gap-4">
                  <span className="bg-white/10 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">Student Tier: Elite</span>
                  <span className="bg-white/10 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">Member since 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-12">
             <div className="grid grid-cols-3 gap-6 mb-12">
                {stats.map((s, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center">
                    <s.icon className={`w-6 h-6 text-${s.color}-600 mx-auto mb-3`} />
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
                    <h4 className="text-2xl font-black text-gray-900">{s.value}</h4>
                  </div>
                ))}
             </div>

             <div className="space-y-6">
                <h3 className="text-xl font-black text-gray-900 mb-6">Account Settings</h3>
                
                {[
                  { icon: User, title: 'Personal Information', desc: 'Securely manage your identity details' },
                  { icon: Shield, title: 'Security & Access', desc: 'Manage password and 2FA authentication' },
                  { icon: CreditCard, title: 'Billing & Subscriptions', desc: 'Review your transaction history and invoices' },
                  { icon: Bell, title: 'Notifications', desc: 'Configure how you receive academy updates' },
                  { icon: Settings, title: 'Preferences', desc: 'Language, theme, and region settings' },
                ].map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-6 rounded-3xl border border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all group">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors shadow-sm">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900 leading-none mb-1">{item.title}</p>
                        <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </button>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
