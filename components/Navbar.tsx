
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-emerald-900 tracking-tight">AyurVision</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-emerald-800 font-medium">
          <a href="#" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#analyzer" className="hover:text-emerald-600 transition-colors">Analyzer</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">About Ayurveda</a>
        </div>
        <button className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
