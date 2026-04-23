import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Check, Download, Share2 } from 'lucide-react';

interface CertificateProps {
  studentName: string;
  courseName: string;
  date: string;
  certificateId: string;
  onClose: () => void;
}

export const Certificate: React.FC<CertificateProps> = ({ 
  studentName, 
  courseName, 
  date, 
  certificateId,
  onClose 
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-5xl bg-white rounded-[40px] shadow-2xl overflow-hidden relative"
      >
        <div className="absolute top-8 right-8 z-10">
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[600px]">
          {/* Certificate Body (3/4) */}
          <div className="lg:col-span-3 p-12 lg:p-20 flex flex-col items-center text-center relative overflow-hidden">
            {/* Guilloche-style background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="guilloche" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#guilloche)" />
                </svg>
            </div>

            <Award className="w-24 h-24 text-blue-600 mb-12" />
            
            <div className="space-y-4 mb-12">
              <h1 className="text-sm font-black uppercase tracking-[0.5em] text-gray-400">Certificate of Achievement</h1>
              <p className="text-xl font-medium text-gray-500">This is to certify that</p>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter">
              {studentName}
            </h2>

            <div className="w-24 h-1 bg-blue-600 mb-12"></div>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
              Has successfully completed the professional track in <br/>
              <span className="font-black text-gray-900">{courseName}</span> <br/>
              demonstrating mastery of industry-standard digital skills at Okours Academy.
            </p>

            <div className="grid grid-cols-2 gap-20 mt-12 w-full max-w-2xl border-t border-gray-100 pt-12">
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Date of Issue</p>
                <p className="text-lg font-black text-gray-900">{date}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Certificate ID</p>
                <p className="text-lg font-black text-gray-900">{certificateId}</p>
              </div>
            </div>
            
            <div className="mt-20 flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-bold text-gray-500">Blockchain Verified Identity</span>
                <Check className="w-4 h-4 text-green-500" />
            </div>
          </div>

          {/* Sidebar Actions (1/4) */}
          <div className="bg-gray-900 p-12 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">You did it!</h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8">
                Your skills are now verified. You can share this certificate on LinkedIn or download it as a high-resolution PDF for your portfolio.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-white text-gray-900 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-gray-100 transition-all active:scale-95">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-900/20">
                  <Share2 className="w-5 h-5" />
                  Add to LinkedIn
                </button>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em]"
            >
              Back to Course
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
