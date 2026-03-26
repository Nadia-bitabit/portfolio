"use client";

import React from 'react';
import { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div 
    className="group p-6 md:p-8 lg:p-10 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] border border-white shadow-sm hover:shadow-2xl transition-all cursor-default overflow-hidden relative"
    style={{ backgroundColor: `${skill.color}88` }}
  >
    <div className="relative z-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 md:gap-0 mb-4 md:mb-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800">{skill.name}</h3>
        <span 
          className="text-[8px] md:text-[10px] font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full uppercase tracking-widest bg-white/90 self-start sm:self-auto"
          style={{ color: skill.textColor }}
        >
          {skill.level}
        </span>
      </div>
      <p className="text-gray-700 text-sm md:text-base lg:text-lg font-bold leading-relaxed">{skill.description}</p>
    </div>
  </div>
);

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 animate-in fade-in zoom-in-95 duration-700 max-w-4xl px-2">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;