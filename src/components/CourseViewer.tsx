import React from 'react';
import { Play, CheckCircle, Clock, ChevronRight, Download, Award, ChevronLeft, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Course, Lesson } from '../types';
import { cn } from '../lib/utils';
import { Certificate } from './Certificate';

interface CourseViewerProps {
  course: Course;
  onBack: () => void;
}

export const CourseViewer: React.FC<CourseViewerProps> = ({ course, onBack }) => {
  const [activeLesson, setActiveLesson] = React.useState<Lesson>(course.lessons[0]);
  const [completedLessons, setCompletedLessons] = React.useState<string[]>([]);
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [showCertificate, setShowCertificate] = React.useState(false);

  const progress = (completedLessons.length / (course.lessons.length + 1)) * 100;
  const isFinished = completedLessons.length === course.lessons.length;

  const toggleComplete = (id: string | 'quiz') => {
    setCompletedLessons(prev => 
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    );
  };

  const currentProgress = ((completedLessons.length) / (course.lessons.length + 1)) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-6 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Catalog
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {!showQuiz ? (
              <>
                <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative">
                  <video 
                    key={activeLesson.id}
                    className="w-full h-full"
                    controls
                    autoPlay
                    poster={course.thumbnail}
                  >
                    <source src={activeLesson.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <span className="text-white text-xs font-semibold uppercase tracking-widest">
                      Live Stream
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h1 className="text-2xl font-black text-gray-900 mb-2">{activeLesson.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4" />
                      {activeLesson.duration}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="font-medium">{course.category}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    In this lesson, we explore the core principles of {activeLesson.title.toLowerCase()}. 
                    We'll cover practical applications and industry best practices that you can apply immediately to your projects.
                  </p>
                  
                  <div className="flex gap-4 mt-8">
                    <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-200">
                      <Download className="w-4 h-4" />
                      Download Resources
                    </button>
                    {isFinished && !completedLessons.includes('quiz') && (
                      <button 
                        onClick={() => setShowQuiz(true)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                      >
                        <HelpCircle className="w-4 h-4" />
                        Take Final Quiz
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-12 border border-gray-100 shadow-xl"
              >
                {!quizSubmitted ? (
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-4">
                       <HelpCircle className="w-8 h-8 text-blue-600" />
                       <h2 className="text-3xl font-black text-gray-900">Module Assessment</h2>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg font-bold text-gray-800">1. What is the primary characteristic of low-bandwidth optimization in this context?</p>
                      <div className="space-y-3">
                        {['Progressive Loading', 'Heavy Image caching', 'SVG-only UI', 'No-Javascript mode'].map((opt, i) => (
                          <button key={i} className="w-full text-left p-4 rounded-xl border border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all font-medium text-gray-700">
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setQuizSubmitted(true);
                        toggleComplete('quiz');
                      }}
                      className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-100"
                    >
                      Submit Assessment
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                       <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 mb-4">Assessment Passed!</h2>
                    <p className="text-gray-500 font-medium mb-8">You have successfully mastered the digital skills in this module.</p>
                    <button 
                      onClick={() => setShowQuiz(false)}
                      className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black"
                    >
                      Return to Lessons
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Sidebar - Course Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm sticky top-24">
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-black text-gray-900">Total Progress</h3>
                  <span className="text-sm font-black text-blue-600">{Math.round(currentProgress)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${currentProgress}%` }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Course Content</h4>
                {course.lessons.map((lesson, idx) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setActiveLesson(lesson);
                      setShowQuiz(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group",
                      !showQuiz && activeLesson.id === lesson.id 
                        ? "bg-blue-50 border-blue-100 shadow-sm ring-1 ring-blue-500/10" 
                        : "bg-white border-transparent hover:border-gray-100 hover:bg-gray-50"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-colors",
                        !showQuiz && activeLesson.id === lesson.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                      )}>
                        {idx + 1}
                      </div>
                      <div className="text-left">
                        <p className={cn(
                          "text-sm font-bold leading-none mb-1",
                          !showQuiz && activeLesson.id === lesson.id ? "text-blue-900" : "text-gray-700"
                        )}>
                          {lesson.title}
                        </p>
                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                          {lesson.duration} • VIDEO
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(lesson.id);
                      }}
                      className={cn(
                        "p-1.5 rounded-full transition-colors",
                        completedLessons.includes(lesson.id) 
                          ? "text-green-500 bg-green-50" 
                          : "text-gray-300 hover:text-gray-400"
                      )}
                    >
                      <CheckCircle className="w-5 h-5 fill-current bg-white rounded-full" />
                    </button>
                  </button>
                ))}
                
                {isFinished && (
                  <button
                    onClick={() => setShowQuiz(true)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group",
                      showQuiz 
                        ? "bg-blue-50 border-blue-100 shadow-sm ring-1 ring-blue-500/10" 
                        : "bg-white border-transparent hover:border-gray-100 hover:bg-gray-50"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-colors",
                        showQuiz ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                      )}>
                        Q
                      </div>
                      <div className="text-left">
                        <p className={cn(
                          "text-sm font-bold leading-none mb-1",
                          showQuiz ? "text-blue-900" : "text-gray-700"
                        )}>
                          Final Assessment
                        </p>
                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                          QUIZ • {quizSubmitted ? 'COMPLETED' : 'PENDING'}
                        </p>
                      </div>
                    </div>
                    {completedLessons.includes('quiz') && (
                      <div className="text-green-500 bg-green-50 p-1 rounded-full">
                        <CheckCircle className="w-5 h-5 fill-current bg-white rounded-full" />
                      </div>
                    )}
                  </button>
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50">
                <div className={cn(
                  "rounded-2xl p-6 text-white text-center relative overflow-hidden group transition-all duration-500",
                  completedLessons.includes('quiz') 
                    ? "bg-blue-600 shadow-2xl shadow-blue-200 cursor-pointer scale-105" 
                    : "bg-gray-900"
                )}>
                  {completedLessons.includes('quiz') && <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></motion.div>}
                  <Award className={cn(
                    "w-10 h-10 mx-auto mb-3 transition-colors",
                    completedLessons.includes('quiz') ? "text-yellow-300" : "text-yellow-400"
                  )} />
                  <p className="text-sm font-black mb-1">
                    {completedLessons.includes('quiz') ? "Certificate Ready!" : "Earn your Certificate"}
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                    {completedLessons.includes('quiz') 
                      ? "Download your verified Okours certification now." 
                      : "Complete all lessons & the quiz to unlock certification."
                    }
                  </p>
                  {completedLessons.includes('quiz') && (
                    <button 
                      onClick={() => setShowCertificate(true)}
                      className="mt-4 w-full bg-white text-blue-600 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-colors"
                    >
                      Download PDF
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showCertificate && (
          <Certificate 
            studentName="Joel M." 
            courseName={course.title}
            date={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            certificateId={`OK-${Math.random().toString(36).substr(2, 9).toUpperCase()}`}
            onClose={() => setShowCertificate(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
