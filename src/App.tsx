/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { CourseCard } from './components/CourseCard';
import { CourseViewer } from './components/CourseViewer';
import { Checkout } from './components/Checkout';
import { Certificate } from './components/Certificate'; // Added this
import { AdminDashboard } from './components/AdminDashboard';
import { Profile } from './components/Profile';
import { ImplementationGuide } from './components/ImplementationGuide';
import { MOCK_COURSES } from './data';
import { Course, UserRole } from './types';
import { ArrowRight, Play, Server, Shield, Zap, Globe, BookOpen } from 'lucide-react';

export default function App() {
  const [view, setView] = React.useState<string>('home');
  const [role, setRole] = React.useState<UserRole>('student');
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(null);
  const [enrolledCourses, setEnrolledCourses] = React.useState<string[]>([]);
  const [showCheckout, setShowCheckout] = React.useState(false);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    if (enrolledCourses.includes(course.id)) {
      setView('viewer');
    } else {
      setShowCheckout(true);
    }
  };

  const handleEnrollment = () => {
    if (selectedCourse) {
      setEnrolledCourses(prev => [...prev, selectedCourse.id]);
      setShowCheckout(false);
      setView('viewer');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navigation 
        role={view === 'home' ? 'guest' : role} 
        onNavigate={setView} 
        activeView={view} 
      />

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                <div className="absolute top-0 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                   <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center mb-8"
                  >
                    <span className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-blue-100 shadow-sm">
                      Africa's Premier Digital Academy
                    </span>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8"
                  >
                    Master Digital <br className="hidden md:block" /> 
                    <span className="text-blue-600">Dominance.</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-500 font-medium leading-relaxed mb-12 max-w-2xl mx-auto"
                  >
                    Join the elite 1% of digital creators and developers in Africa. 
                    Professional certification, industry-led courses, and local payment support.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                  >
                    <button 
                      onClick={() => setView('catalog')}
                      className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-800 transition-all shadow-2xl hover:shadow-gray-200 active:scale-95 flex items-center gap-3"
                    >
                      Explore Courses
                      <ArrowRight className="w-6 h-6" />
                    </button>
                    <button className="flex items-center gap-3 font-black text-gray-900 hover:text-blue-600 transition-colors group">
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-50 transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </div>
                      Watch Showcase
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-50/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {[
                    { icon: Shield, title: 'Secure Learning', desc: 'Encrypted video delivery and blockchain-verified certificates for every graduate.' },
                    { icon: Globe, title: 'Local Payments', desc: 'Pay instantly with Orange Money, Wave, or MTN. No credit card required.' },
                    { icon: Zap, title: 'Optimized Access', desc: 'Low-bandwidth infrastructure designed specifically for African connectivity nodes.' }
                  ].map((feat, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-blue-600 shadow-sm border border-gray-100 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        <feat.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-3">{feat.title}</h3>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {view === 'catalog' && (
          <motion.div
            key="catalog"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">Elite Curriculum</h2>
                <div className="flex gap-4">
                   <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest">All Courses</button>
                   <button className="bg-white border border-gray-100 text-gray-500 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">Development</button>
                   <button className="bg-white border border-gray-100 text-gray-500 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">Marketing</button>
                </div>
              </div>
              <p className="text-sm text-gray-400 font-black uppercase tracking-widest">Showing {MOCK_COURSES.length} Curated Tracks</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_COURSES.map(course => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  onSelect={handleCourseSelect} 
                />
              ))}
            </div>
          </motion.div>
        )}

        {view === 'dashboard' && role === 'admin' && (
          <AdminDashboard />
        )}

        {view === 'profile' && (
          <Profile />
        )}

        {view === 'guide' && (
          <ImplementationGuide />
        )}

        {view === 'viewer' && selectedCourse && (
          <CourseViewer 
            course={selectedCourse} 
            onBack={() => setView('catalog')} 
          />
        )}
      </AnimatePresence>

      {/* Auth Demo Switchers (Floating) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[100]">
        <button 
          onClick={() => { setRole('admin'); setView('dashboard'); }}
          className="bg-white border border-gray-200 px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:bg-gray-50 transition-all flex items-center gap-2"
        >
          <Server className="w-4 h-4 text-blue-600" />
          Demo Admin
        </button>
        <button 
          onClick={() => { setRole('student'); setView('catalog'); }}
          className="bg-white border border-gray-200 px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:bg-gray-50 transition-all flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4 text-purple-600" />
          Demo Student
        </button>
      </div>

      {showCheckout && selectedCourse && (
        <Checkout 
          course={selectedCourse} 
          onSuccess={handleEnrollment} 
          onCancel={() => setShowCheckout(false)} 
        />
      )}

      {/* Footer */}
      {view === 'home' && (
        <footer className="py-12 border-t border-gray-100 text-center">
          <p className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
            © 2026 Okours Academy • Built for African Digital Sovereignty
          </p>
        </footer>
      )}
    </div>
  );
}
