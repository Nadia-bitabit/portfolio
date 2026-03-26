"use client";

import React from 'react';
import { TabType } from '@/types';
import { navItems, socialLinks } from '@/data/portfolio';
import { Github, Linkedin } from '@/components/Icons';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const iconComponents = {
  github: Github,
  linkedin: Linkedin
};

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="flex justify-between items-center mb-16 backdrop-blur-xl bg-white/50 p-4 rounded-[2.5rem] border border-white/60 shadow-sm">
      <div className="text-xl font-black tracking-tighter text-pink-500 flex items-center gap-3">
        <div className="w-10 h-10 bg-pink-400 rounded-2xl flex items-center justify-center text-white text-sm shadow-lg shadow-pink-100">
          NL
        </div>
        NADIA
      </div>
      
      <div className="hidden md:flex bg-white/60 p-1.5 rounded-2xl border border-white/40 shadow-inner">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => onTabChange(item.id as TabType)}
            className={`px-8 py-2.5 rounded-xl transition-all text-sm font-bold capitalize ${
              activeTab === item.id 
                ? 'bg-white text-pink-500 shadow-sm scale-105' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        {socialLinks.map((link) => {
          const IconComponent = iconComponents[link.icon];
          return (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:translate-y-[-2px] transition-all hover:shadow-lg border border-pink-50"
              aria-label={link.name}
            >
              <IconComponent />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;