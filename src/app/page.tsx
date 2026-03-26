"use client";

import React, { useState, useCallback } from 'react';
import { Scene, Navbar, Hero, Skills, Projects } from '@/components';
import { skills, projects } from '@/data/portfolio';
import { TabType } from '@/types';
import { COLORS } from '@/config';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  const handleNavigate = useCallback((tab: 'projects') => {
    setActiveTab(tab);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero onNavigate={handleNavigate} />;
      case 'skills':
        return <Skills skills={skills} />;
      case 'projects':
        return <Projects projects={projects} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen w-full font-sans text-gray-800 overflow-x-hidden selection:bg-pink-100" 
      style={{ backgroundColor: COLORS.background }}
    >
      <Scene className="fixed inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-3 md:px-6 py-6 md:py-8">
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

        <main className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center">
          {renderContent()}
        </main>

        <footer className="mt-16 md:mt-24 lg:mt-32 pt-8 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-500 font-bold text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase px-2">
          <p className="text-center md:text-left mb-4 md:mb-0">© 2024 NADIA LÓPEZ — HECHO CON AMOR Y CÓDIGO</p>
          <div className="flex gap-6 md:gap-10">
            <span className="hover:text-pink-400 transition-colors cursor-help">Design</span>
            <span className="hover:text-pink-400 transition-colors cursor-help">Software</span>
            <span className="hover:text-pink-400 transition-colors cursor-help">Future</span>
          </div>
        </footer>
      </div>

      <style>{`
        body { margin: 0; padding: 0; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
}