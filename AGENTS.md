<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Nadia Lopez - Documentación del Proyecto

## Historial de Cambios

### v3.0.0 - React Structure Skill (2026-03-26)
**Cambios realizados:**
- Barrel exports (index.ts) para todos los módulos de componentes
- Carpeta `config/` con constantes centralizadas (COLORS, SOCIAL_LINKS, etc.)
- Imports limpios usando `@/components`, `@/config`
- Aplicación de mejores prácticas de estructura React

### v2.0.0 - Refactorización con Mejores Prácticas React (2026-03-25)
**Cambios realizados:**
- Arquitectura de componentes separada en carpetas
- Tipos TypeScript centralizados en `src/types/index.ts`
- Datos separados en `src/data/portfolio.ts`
- Componentes reutilizables con props interfaces
- useCallback para handlers de eventos
- Export nombrados y default para cada componente

### v1.0.0 - Versión Inicial (2026-03-25)
- Portfolio básico con Three.js
- Figuras 3D doradas flotantes
- Secciones: Home, Skills, Projects
- Deploy configured para GitHub Pages

---

## Tech Stack
- Next.js 16.2.1 (App Router)
- TypeScript
- TailwindCSS
- Three.js + @react-three/fiber + @react-three/drei (3D)

## Paleta de Colores
```
--primary: #C9184A (Rosa fuerte)
--primary-light: #FF4D6D
--accent-light: #FFB3C1
--accent: #FF758F
--accent-dark: #FF8FA3
--gold: #FFCC33 (Figuras 3D)
```

## Skills Utilizadas

### 1. React Three Fiber
- **Uso:** Renderizado de figuras 3D en el fondo del portfolio
- **Componentes:** Canvas, Float, PerspectiveCamera, ContactShadows, PresentationControls, Environment
- **Material:** GoldMirrorMaterial con metalness=1, roughness=0.02

### 2. React Best Practices
- **Separación de responsabilidades:** Componentes UI separados de lógica de negocio
- **Tipado fuerte:** Interfaces para todas las props
- **Hooks:** useState, useCallback, useMemo
- **Composición:** Componentes pequeños y reutilizables

### 3. Component Architecture
```
src/
├── app/
│   ├── page.tsx              # Página principal (composite)
│   ├── layout.tsx            # Layout global
│   └── globals.css           # Estilos y variables CSS
├── components/
│   ├── index.ts              # Barrel exports
│   ├── Icons.tsx             # Iconos SVG reutilizables
│   ├── three/
│   │   ├── index.ts          # Barrel exports
│   │   ├── FloatingShapes.tsx # Figuras 3D animadas
│   │   └── Scene.tsx         # Escena Three.js completa
│   ├── ui/
│   │   ├── index.ts          # Barrel exports
│   │   └── Navbar.tsx        # Navegación del sitio
│   └── sections/
│       ├── index.ts          # Barrel exports
│       ├── Hero.tsx          # Sección de inicio
│       ├── Skills.tsx        # Sección de habilidades
│       └── Projects.tsx      # Sección de proyectos
├── config/
│   └── index.ts              # Constantes centralizadas
├── data/
│   └── portfolio.ts          # Datos estáticos (skills, proyectos)
└── types/
    └── index.ts              # Interfaces y tipos TypeScript
```

### 4. Git & GitHub Workflow
- Rama `main`: Producción (build para GitHub Pages)
- Rama `dev`: Desarrollo (features y refactors)
- GitHub Actions para deploy automático

### 5. React Structure Skill
- **Barrel exports:** Archivos `index.ts` para exports limpios
- **Config centralizada:** Constantes en `src/config/`
- **Separación de responsabilidades:** Cada carpeta con propósito específico
- **Tipado fuerte:** TypeScript interfaces en `src/types/`
- **Imports absolutos:** Uso de alias `@/` para rutas limpias

---

## Design Principles
- UI con colores roses/pastel (#C9184A a #FFB3C1)
- Figuras 3D doradas con efecto espejo
- Responsive design, mobile-first
- Animaciones suaves con Float de drei

## Commands
- `npm run dev` - Iniciar desarrollo
- `npm run build` - Build producción (static export)
- `npm run lint` - Verificar código

## Dependencies
- three, @react-three/fiber, @react-three/drei
- @types/three

## GitHub Pages Config
- Output: `export` en next.config.ts
- Workflow: `.github/workflows/deploy.yml`
- Rama: `dev` triggers deployment