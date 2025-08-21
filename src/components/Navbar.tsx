import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import CustomSkeleton from './CustomSkeleton';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
export default function Navbar({ darkMode, setDarkMode, currentPage, setCurrentPage }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-10 flex justify-center py-6">
       {loading ? (<CustomSkeleton variant="rectangular" width="100%" height={70} />
) : (<div className="max-w-2xl w-full mx-auto px-6">
  <div className="bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl border border-gray-200/60 dark:border-gray-600/60 rounded-2xl px-8 py-4 shadow-xl shadow-gray-200/30 dark:shadow-black/50">
    <div className="flex justify-between items-center">
      <button
        onClick={() => setCurrentPage('home')}
        className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent hover:from-blue-600 hover:to-cyan-600 dark:hover:from-blue-400 dark:hover:to-cyan-400 transition-all duration-300"
      >
      Sachin
      </button>
      <div className="flex items-center space-x-6 ml-8">
        {/* <button
          onClick={() => setCurrentPage('home')}
          className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
            currentPage === 'home'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
        >
          Home
        </button> */}
        <button
          onClick={() => setCurrentPage('projects')}
          className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
            currentPage === 'projects'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
        >
          Projects
        </button>
        <a
          href="#connect"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
        >
          Connect
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center justify-center w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md hover:scale-105 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </div>
  </div>
</div>)}
      
    </nav>
  );
}