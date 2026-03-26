"use client";

import React from 'react';

interface HeroProps {
  onNavigate: (tab: 'projects') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl animate-in fade-in slide-in-from-left-12 duration-1000">
      <div className="inline-block px-5 py-2 bg-pink-50 rounded-full text-pink-500 text-[10px] font-black tracking-[0.2em] mb-8 border border-pink-100 shadow-sm uppercase">
        Desarrolladora de Software
      </div>
      <h1 className="text-7xl md:text-[8.5rem] font-black leading-[0.85] mb-10 text-gray-900 tracking-tighter">
        Código <br />
        <span className="text-pink-500">Impecable.</span>
      </h1>
      <p className="text-2xl text-gray-900 mb-12 leading-relaxed font-bold max-w-lg drop-shadow-sm">
        Soy Nadia López. Transformo la complejidad técnica en software fluido, elegante y de alto impacto empresarial.
      </p>
      <div className="flex flex-wrap gap-5">
        <button 
          onClick={() => onNavigate('projects')} 
          className="px-12 py-5 bg-pink-600 text-white font-black rounded-[2rem] shadow-2xl shadow-pink-200 hover:bg-pink-500 transition-all transform hover:scale-105"
        >
          VER TRABAJO
        </button>
        <button className="px-12 py-5 bg-white text-gray-800 font-black rounded-[2rem] border border-gray-100 shadow-xl hover:bg-gray-50 transition-all">
          CV COMPLETO
        </button>
      </div>
    </div>
  );
};

export default Hero;