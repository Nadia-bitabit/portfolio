"use client";

import React from 'react';

interface HeroProps {
  onNavigate: (tab: 'projects') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl animate-in fade-in slide-in-from-left-12 duration-1000 px-2">
      <div className="inline-block px-4 py-2 bg-pink-50 rounded-full text-pink-500 text-[8px] md:text-[10px] font-black tracking-[0.2em] mb-6 md:mb-8 border border-pink-100 shadow-sm uppercase">
        Desarrolladora de Software
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8.5rem] font-black leading-[0.85] md:leading-[0.9] mb-6 md:mb-10 text-gray-900 tracking-tighter">
        Código <br />
        <span className="text-pink-500">Impecable.</span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-8 md:mb-12 leading-relaxed font-bold max-w-lg drop-shadow-sm">
        Soy Nadia López. Transformo la complejidad técnica en software fluido, elegante y de alto impacto empresarial.
      </p>
      <div className="flex flex-wrap gap-3 md:gap-5">
        <button 
          onClick={() => onNavigate('projects')} 
          className="px-8 md:px-12 py-4 md:py-5 bg-pink-600 text-white font-black rounded-[1.5rem] md:rounded-[2rem] shadow-2xl shadow-pink-200 hover:bg-pink-500 transition-all transform hover:scale-105 text-sm md:text-base"
        >
          VER TRABAJO
        </button>
        <button className="px-8 md:px-12 py-4 md:py-5 bg-white text-gray-800 font-black rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-xl hover:bg-gray-50 transition-all text-sm md:text-base">
          CV COMPLETO
        </button>
      </div>
    </div>
  );
};

export default Hero;