import { Course } from './types';

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Digital Marketing Excellence',
    description: 'Master SEO, SEM, and Social Media Marketing for the modern era.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    price: 49.99,
    currency: 'USD',
    category: 'Marketing',
    instructor: 'Amath Senghor',
    rating: 4.8,
    enrolledStudents: 1250,
    lessons: [
      { id: '1-1', title: 'Introduction to SEO', duration: '15:00', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: '1-2', title: 'Social Media Strategy', duration: '20:00', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: '1-3', title: 'Content Performance', duration: '12:00', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    ]
  },
  {
    id: '2',
    title: 'Full Stack Development with React',
    description: 'Build production-ready applications from scratch using modern web technologies.',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    price: 75000,
    currency: 'XOF',
    category: 'Development',
    instructor: 'Fatou Diop',
    rating: 4.9,
    enrolledStudents: 850,
    lessons: [
      { id: '2-1', title: 'React Fundamentals', duration: '25:00', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: '2-2', title: 'State Management', duration: '30:00', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      { id: '2-3', title: 'Deployment Strategies', duration: '18:00' },
    ]
  },
  {
    id: '3',
    title: 'UX/UI Design Principles',
    description: 'Design intuitive and beautiful user interfaces that convert.',
    thumbnail: 'https://images.unsplash.com/photo-1541461942491-09468b665234?auto=format&fit=crop&q=80&w=800',
    price: 35000,
    currency: 'XOF',
    category: 'Design',
    instructor: 'Modou Fall',
    rating: 4.7,
    enrolledStudents: 2100,
    lessons: [
      { id: '3-1', title: 'Color Theory', duration: '12:00' },
      { id: '3-2', title: 'Typography in UI', duration: '15:00' },
      { id: '3-3', title: 'Prototyping in Figma', duration: '45:00' },
    ]
  }
];
