<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Nadia Lopez - Configuration

## Tech Stack
- Next.js 16.2.1 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion (animaciones)
- Three.js + @react-three/fiber + @react-three/drei (3D)

## Color Palette
```
--primary: #337357
--primary-light: #6D9F71
--accent-light: #FFDBE5
--accent: #EA9AB2
--accent-dark: #E27396
```

## Design Principles (impeccable skill)
- Usar la paleta de colores definida arriba
- Animaciones fluidas con Framer Motion
- Three.js para figuras geométricas en movimiento (fondo)
- Responsive design, mobile-first
- Espaciado consistente con el sistema de diseño

## Project Structure
```
src/
├── app/
│   ├── page.tsx        # Página principal
│   ├── layout.tsx      # Layout global
│   ├── globals.css    # Estilos y variables
│   └── fonts/          # Fuentes personalizadas
└── components/
    └── ThreeDBackground.tsx  # Figuras 3D animadas
```

## Commands
- `npm run dev` - Iniciar desarrollo
- `npm run build` - Build producción
- `npm run lint` - Verificar código

## Dependencies
- three, @react-three/fiber, @react-three/drei
- framer-motion
- @types/three