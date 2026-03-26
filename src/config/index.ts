export const APP_NAME = 'Nadia López Portfolio';
export const APP_DESCRIPTION = 'Portafolio profesional de Desarrolladora de Software';

export const COLORS = {
  primary: '#C9184A',
  primaryLight: '#FF4D6D',
  accent: '#FF758F',
  accentLight: '#FFB3C1',
  background: '#f1b2c7',
  gold: '#FFCC33',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/nadia-lopez/',
  github: 'https://github.com/Nadia-bitabit',
} as const;

export const NAV_ITEMS = [
  { id: 'home', label: 'Inicio' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
] as const;

export const SKILLS = [
  { name: 'Java Enterprise', level: 'Senior' },
  { name: 'Kotlin Android', level: 'Advanced' },
  { name: 'SQL Design', level: 'Expert' },
  { name: 'System Design', level: 'Advanced' },
] as const;