
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlantAnalyzer from './components/PlantAnalyzer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <main>
        <PlantAnalyzer />
        
        {/* Additional Information Section */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-emerald-950 mb-6">Bridging Ancient Wisdom & Modern Tech</h2>
              <p className="text-lg text-emerald-800/70 mb-8 leading-relaxed">
                Ayurveda, the "Science of Life," has categorized thousands of plants over 5,000 years. Our AI analysis engine is trained on visual data and traditional botanical texts to help you bridge the gap between nature and knowledge.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Visual Recognition", desc: "Identify species through leaf patterns, stem structure, and floral geometry." },
                  { title: "Bio-dynamic Properties", desc: "Deep dive into Rasa (Taste), Guna (Quality), and Virya (Potency)." },
                  { title: "Dosha Balancing", desc: "Understand how each plant interacts with your unique Vata, Pitta, or Kapha constitution." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-900">{item.title}</h4>
                      <p className="text-emerald-800/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Herb 1" />
                <img src="https://images.unsplash.com/photo-1563124803-b51040445d94?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Herb 2" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Herb 3" />
                <img src="https://images.unsplash.com/photo-1502337595650-c3c9786dc211?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Herb 4" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <span className="text-xl font-bold tracking-tight">AyurVision</span>
          </div>
          <p className="text-emerald-100/50 text-sm">© 2024 AyurVision AI. Empowering heritage through technology.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
