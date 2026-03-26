export interface Skill {
  name: string;
  level: 'Senior' | 'Advanced' | 'Expert';
  color: string;
  textColor: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  background: 'pink' | 'blue';
  year: number;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin';
}

export type TabType = 'home' | 'skills' | 'projects';