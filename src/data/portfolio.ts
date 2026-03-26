import { Skill, Project, SocialLink } from '../types';

export const skills: Skill[] = [
  { 
    name: "Java Enterprise", 
    level: "Senior", 
    color: "#fce4ec", 
    textColor: "#ec4899", 
    description: "Arquitecturas escalables y backend de alto rendimiento con Spring Boot, microservices y patrones de diseño."
  },
  { 
    name: "Kotlin Android", 
    level: "Advanced", 
    color: "#e8f5e9", 
    textColor: "#10b981", 
    description: "Desarrollo de apps nativas modernas con Clean Architecture, Jetpack Compose y Kotlin Coroutines."
  },
  { 
    name: "SQL Design", 
    level: "Expert", 
    color: "#e3f2fd", 
    textColor: "#3b82f6", 
    description: "Modelado de datos complejo, optimización de queries, stored procedures y bases de datos distribuidas."
  },
  { 
    name: "System Design", 
    level: "Advanced", 
    color: "#fef3c7", 
    textColor: "#d97706", 
    description: "Diseño de sistemas escalables, microservices, patrones de arquitectura y alta disponibilidad."
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema Core Banking",
    description: "Infraestructura bancaria escalable diseñada para procesar millones de transacciones diarias con seguridad de grado financiero.",
    technologies: ["Spring Boot", "Kotlin", "PostgreSQL", "Redis", "Kafka"],
    background: "pink",
    year: 2025
  },
  {
    id: 2,
    title: "Plataforma de Pagos",
    description: "Sistema de procesamiento de pagos en tiempo real con integración de múltiples pasarelas y gestión de divisas.",
    technologies: ["Java", "Spring Cloud", "Kubernetes", "Docker", "MySQL"],
    background: "blue",
    year: 2024
  }
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nadia-lopez/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/Nadia-bitabit', icon: 'github' }
];

export const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' }
] as const;