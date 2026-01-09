
import React from 'react';
import { AnalysisResult } from '../types';

interface Props {
  result: AnalysisResult;
}

const PlantDetails: React.FC<Props> = ({ result }) => {
  if (!result.plantFound || !result.profile) {
    return (
      <div className="mt-12 p-8 bg-white rounded-3xl shadow-xl border border-orange-100 text-center">
        <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        </div>
        <h3 className="text-2xl font-bold text-orange-900 mb-2">Unrecognized Plant</h3>
        <p className="text-orange-800/70">{result.description}</p>
      </div>
    );
  }

  const { profile } = result;

  return (
    <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-100">
        <div className="bg-emerald-600 p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-4xl font-bold mb-1">{profile.name}</h3>
              <p className="text-emerald-100 font-medium italic">{profile.botanicalName}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30">
              <span className="text-sm font-bold uppercase tracking-wider">Sanskrit: </span>
              <span className="text-lg font-serif">{profile.sanskritName}</span>
            </div>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-emerald-900 font-bold uppercase text-sm tracking-widest mb-3 border-b border-emerald-100 pb-2">Ayurvedic Profile</h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-emerald-600 text-sm">Rasa (Taste)</span>
                  <span className="font-semibold text-emerald-900">{profile.rasa.join(', ')}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-emerald-600 text-sm">Guna (Quality)</span>
                  <span className="font-semibold text-emerald-900">{profile.guna.join(', ')}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-emerald-600 text-sm">Virya (Potency)</span>
                  <span className="font-semibold text-emerald-900">{profile.virya}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-emerald-600 text-sm">Vipaka (Post-digest)</span>
                  <span className="font-semibold text-emerald-900">{profile.vipaka}</span>
                </li>
                <li className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                  <span className="text-emerald-800 text-sm font-bold italic">{profile.doshaEffect}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h4 className="text-emerald-900 font-bold uppercase text-sm tracking-widest mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04L3 9.226c0 6.103 3.392 11.49 8.468 14.37a11.996 11.996 0 0010.532-14.37l-.845-3.242z"/></svg>
                Medicinal Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 text-emerald-800 text-sm bg-emerald-50/50 p-3 rounded-lg border border-emerald-100/50">
                    <span className="text-emerald-600 mt-1">•</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-emerald-900 font-bold uppercase text-sm tracking-widest mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                Traditional Uses
              </h4>
              <p className="text-emerald-800/80 leading-relaxed text-sm bg-stone-50 p-4 rounded-xl italic">
                {profile.traditionalUses.join('. ')}
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
              <h4 className="text-red-900 font-bold uppercase text-xs tracking-widest mb-1 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                Precautions
              </h4>
              <p className="text-red-800 text-xs italic">{profile.precautions}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-emerald-950 text-emerald-100/60 p-6 rounded-2xl text-xs text-center">
        <p>Information provided is for educational purposes based on Ayurvedic traditions. Always consult a certified Ayurvedic practitioner or healthcare professional before use.</p>
      </div>
    </div>
  );
};

export default PlantDetails;
