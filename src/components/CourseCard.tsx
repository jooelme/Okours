import React from 'react';
import { Star, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';
import { formatPrice } from '../lib/utils';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => onSelect(course)}
      id={`course-${course.id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {course.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
            />
          ))}
          <span className="text-xs text-gray-500 font-medium ml-1">{course.rating}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-6">
          {course.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2">
             <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
               <Users className="w-3.5 h-3.5" />
               {course.enrolledStudents.toLocaleString()}
             </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-black text-gray-900">
              {formatPrice(course.price, course.currency)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
