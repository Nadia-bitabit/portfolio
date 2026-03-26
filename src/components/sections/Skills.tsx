"use client";

import React from 'react';
import { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div 
    className="group p-10 backdrop-blur-3xl rounded-[3.5rem] border border-white shadow-sm hover:shadow-2xl transition-all cursor-default overflow-hidden relative"
    style={{ backgroundColor: `${skill.color}88` }}
  >
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-3xl font-black text-gray-800">{skill.name}</h3>
        <span 
          className="text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest bg-white/90"
          style={{ color: skill.textColor }}
        >
          {skill.level}
        </span>
      </div>
      <p className="text-gray-700 text-lg font-bold leading-relaxed">{skill.description}</p>
    </div>
  </div>
);

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-700 max-w-4xl">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;