
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-950 leading-tight">
            Discover the Wisdom of <span className="text-emerald-600 italic">Nature</span>
          </h1>
          <p className="text-lg text-emerald-800/80 max-w-xl leading-relaxed">
            Harness the power of AI to identify medicinal plants instantly. Unveil ancient Ayurvedic properties, botanical details, and traditional therapeutic benefits with a simple photo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#analyzer" className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all text-center shadow-xl shadow-emerald-200">
              Identify a Plant
            </a>
            <button className="border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-50 transition-all text-center">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full h-[400px] md:h-[500px] bg-emerald-100 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" 
              alt="Ayurvedic Herbs" 
              className="w-full h-full object-cover -rotate-3 scale-110"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-950">AI Detection</p>
              <p className="text-xs text-emerald-600">98% Accuracy</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#059669" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.2C87.4,-33.3,90.1,-17.7,89.5,-2.2C88.8,13.2,84.9,28.6,77.3,42.5C69.7,56.4,58.4,68.9,44.7,77.4C30.9,85.9,14.6,90.5,-0.6,91.6C-15.8,92.7,-32.7,90.3,-47.4,82.4C-62.1,74.5,-74.6,61.1,-81.9,45.8C-89.2,30.5,-91.3,13.2,-89.6,-3.1C-87.9,-19.4,-82.3,-34.7,-73.2,-47.6C-64.1,-60.5,-51.5,-70.9,-37.8,-78.3C-24,-85.7,-9.1,-90.1,2.8,-94.9C14.7,-99.8,29.3,-105,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
