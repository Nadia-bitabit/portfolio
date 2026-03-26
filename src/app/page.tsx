"use client";

import React, { useState, useCallback } from 'react';
import { Scene } from '@/components/three/Scene';
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { skills, projects } from '@/data/portfolio';
import { TabType } from '@/types';

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
    <div className="min-h-screen w-full font-sans text-gray-800 overflow-x-hidden selection:bg-pink-100" style={{ backgroundColor: '#f1b2c7ff' }}>
      <Scene className="fixed inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

        <main className="min-h-[70vh] flex flex-col justify-center">
          {renderContent()}
        </main>

        <footer className="mt-32 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-500 font-bold text-[10px] tracking-[0.3em] uppercase">
          <p>© 2024 NADIA LÓPEZ — HECHO CON AMOR Y CÓDIGO</p>
          <div className="flex gap-10 mt-6 md:mt-0">
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