export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  currency: 'USD' | 'XOF' | 'EUR';
  category: string;
  lessons: Lesson[];
  instructor: string;
  rating: number;
  enrolledStudents: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed?: boolean;
  videoUrl?: string;
  content?: string;
}

export interface UserProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  lastAccessedLessonId: string;
}

export type UserRole = 'student' | 'admin';
