"use client";

import React, { useState } from 'react';
import { TabType } from '@/types';
import { navItems, socialLinks } from '@/data/portfolio';
import { Github, Linkedin, External } from '@/components/Icons';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const iconComponents = {
  github: Github,
  linkedin: Linkedin
};

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabChange = (tab: TabType) => {
    onTabChange(tab);
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center mb-12 md:mb-16 backdrop-blur-xl bg-white/50 p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] border border-white/60 shadow-sm relative">
      <div className="text-lg md:text-xl font-black tracking-tighter text-pink-500 flex items-center gap-2 md:gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-400 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-xs md:text-sm shadow-lg shadow-pink-100">
          NL
        </div>
        <span className="hidden sm:inline">NADIA</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex bg-white/60 p-1.5 rounded-2xl border border-white/40 shadow-inner">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => onTabChange(item.id as TabType)}
            className={`px-6 md:px-8 py-2 md:py-2.5 rounded-xl transition-all text-xs md:text-sm font-bold capitalize ${
              activeTab === item.id 
                ? 'bg-white text-pink-500 shadow-sm scale-105' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex gap-3">
        {socialLinks.map((link) => {
          const IconComponent = iconComponents[link.icon];
          return (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm hover:translate-y-[-2px] transition-all hover:shadow-lg border border-pink-50"
              aria-label={link.name}
            >
              <IconComponent />
            </a>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-pink-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <div className="flex flex-col gap-1.5">
          <span className={`block w-5 h-0.5 bg-pink-400 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-pink-400 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-pink-400 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl p-4 md:hidden z-50">
          <div className="flex flex-col gap-2 mb-4">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleTabChange(item.id as TabType)}
                className={`px-4 py-3 rounded-xl transition-all text-sm font-bold capitalize text-left ${
                  activeTab === item.id 
                    ? 'bg-pink-100 text-pink-500' 
                    : 'text-gray-600 hover:bg-pink-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex gap-3 pt-3 border-t border-gray-100">
            {socialLinks.map((link) => {
              const IconComponent = iconComponents[link.icon];
              return (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-pink-50 rounded-xl flex items-center justify-center gap-2 text-pink-500 text-sm font-bold"
                >
                  <IconComponent />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;