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
    <div className="bg-white/50 p-3 rounded-[3.5rem] border border-white/60 shadow-sm hover:shadow-3xl transition-all group">
      <div className={`h-72 rounded-[3rem] flex items-center justify-center relative overflow-hidden ${bgClass}`}>
        <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
          <button className="p-5 bg-white rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500">
            <External />
          </button>
        </div>
        <div className="text-white/80 font-black text-[10rem] select-none tracking-tighter italic">
          0{project.id}
        </div>
      </div>
      <div className="p-10">
        <div className="flex gap-3 mb-5 flex-wrap">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-[10px] font-black bg-white/80 px-4 py-1.5 rounded-full text-pink-400 border border-pink-50 tracking-widest uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-4xl font-black mb-4 group-hover:text-pink-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-700 text-lg font-bold leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;