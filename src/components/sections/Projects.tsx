"use client";

import React from 'react';
import { Project } from '@/types';
import { External } from '@/components/Icons';

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const bgClass = project.background === 'pink' ? 'bg-pink-100/50' : 'bg-blue-100/50';
  
  return (
    <div className="bg-white/50 p-2 md:p-3 rounded-[2rem] md:rounded-[3.5rem] border border-white/60 shadow-sm hover:shadow-3xl transition-all group">
      <div className={`h-48 md:h-56 lg:h-72 rounded-[2rem] md:rounded-[3rem] flex items-center justify-center relative overflow-hidden ${bgClass}`}>
        <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
          <button className="p-4 md:p-5 bg-white rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500">
            <External />
          </button>
        </div>
        <div className="text-white/80 font-black text-[5rem] md:text-[7rem] lg:text-[10rem] select-none tracking-tighter italic">
          0{project.id}
        </div>
      </div>
      <div className="p-6 md:p-8 lg:p-10">
        <div className="flex gap-2 md:gap-3 mb-4 md:mb-5 flex-wrap">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-[8px] md:text-[10px] font-black bg-white/80 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-pink-400 border border-pink-50 tracking-widest uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 group-hover:text-pink-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg font-bold leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 px-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;