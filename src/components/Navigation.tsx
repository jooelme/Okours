import React from 'react';
import { BookOpen, User, BarChart3, LogOut, Search, Bell, Menu, X, Map } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface NavigationProps {
  role: 'student' | 'admin' | 'guest';
  onNavigate: (view: string) => void;
  activeView: string;
}

export const Navigation: React.FC<NavigationProps> = ({ role, onNavigate, activeView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'catalog', label: 'Course Catalog', icon: Search, roles: ['guest', 'student', 'admin'] },
    { id: 'dashboard', label: role === 'admin' ? 'Admin Panel' : 'My Learning', icon: role === 'admin' ? BarChart3 : BookOpen, roles: ['student', 'admin'] },
    { id: 'guide', label: 'Roadmap', icon: Map, roles: ['admin', 'student'] },
    { id: 'profile', label: 'Profile', icon: User, roles: ['student', 'admin'] },
  ];

  const filteredItems = navItems.filter(item => item.roles.includes(role));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">O</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Okours</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600",
                  activeView === item.id ? "text-blue-600" : "text-gray-600"
                )}
                id={`nav-${item.id}`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
            {role === 'guest' ? (
              <button 
                onClick={() => onNavigate('login')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                id="login-btn"
              >
                Sign In
              </button>
            ) : (
              <div className="flex items-center gap-4 border-l pl-8 border-gray-200">
                <button className="text-gray-500 hover:text-gray-700 relative" id="notif-btn">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="text-gray-500 hover:text-red-600"
                  id="logout-btn"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
              id="menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4"
        >
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className="flex items-center gap-3 w-full text-left text-gray-600 font-medium p-2 rounded-md hover:bg-gray-50"
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
          {role === 'guest' ? (
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
              Get Started
            </button>
          ) : (
            <button className="w-full text-red-600 font-medium p-2 text-left">
              Log Out
            </button>
          )}
        </motion.div>
      )}
    </nav>
  );
};
