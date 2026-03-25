"use client";

import React, { useState, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  Float, 
  PerspectiveCamera, 
  ContactShadows, 
  PresentationControls,
  Environment
} from '@react-three/drei';
import * as THREE from 'three';

const SocialIcons = {
  Github: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  External: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
};

function GoldMirrorMaterial() {
  return (
    <meshStandardMaterial 
      color="#ffcc33" 
      metalness={1} 
      roughness={0.02} 
      envMapIntensity={3.5}
    />
  );
}

function DetailedSphere({ scale = 1 }: { scale?: number }) {
  return (
    <group scale={scale}>
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />
        <GoldMirrorMaterial />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.49, 0.04, 16, 100]} />
        <meshStandardMaterial color="#8b6b00" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

function FloatingShapes() {
  const shapes = useMemo(() => [
    { type: 'torus', pos: [2.5, 1, -1] as [number, number, number], scale: 1.1, speed: 0.9 },
    { type: 'detailedSphere', pos: [-3, 1.8, 0] as [number, number, number], scale: 1.3, speed: 1.2 },
    { type: 'torus', pos: [-1.5, -1.8, 1] as [number, number, number], scale: 0.8, speed: 1.1 },
    { type: 'sphere', pos: [3.8, -1.5, -2] as [number, number, number], scale: 0.6, speed: 1.4 },
    { type: 'torus', pos: [-4.5, 2.5, -3] as [number, number, number], scale: 0.5, speed: 1.0 },
    { type: 'sphere', pos: [4.5, 2.5, -4] as [number, number, number], scale: 0.7, speed: 1.1 },
    { type: 'detailedSphere', pos: [1.8, -2.8, 0.5] as [number, number, number], scale: 0.9, speed: 1.5 },
    { type: 'torus', pos: [-4, -2, -1.5] as [number, number, number], scale: 0.7, speed: 1.2 },
    { type: 'sphere', pos: [0, 3, -5] as [number, number, number], scale: 1.2, speed: 0.8 },
    { type: 'torus', pos: [5, 0, -2] as [number, number, number], scale: 0.6, speed: 1.3 },
    { type: 'detailedSphere', pos: [-2, 0, -2.5] as [number, number, number], scale: 0.5, speed: 1.1 },
    { type: 'sphere', pos: [2.5, 3.5, -1.5] as [number, number, number], scale: 0.4, speed: 1.6 }
  ], []);

  return (
    <group>
      {shapes.map((item, i) => (
        <Float key={i} speed={item.speed} rotationIntensity={1.5} floatIntensity={2}>
          <group position={item.pos}>
            {item.type === 'torus' && (
              <mesh rotation={[Math.PI / (i + 1), i, Math.PI / 4]}>
                <torusGeometry args={[0.6 * item.scale, 0.22, 32, 100]} />
                <GoldMirrorMaterial />
              </mesh>
            )}
            {item.type === 'detailedSphere' && <DetailedSphere scale={item.scale} />}
            {item.type === 'sphere' && (
              <mesh>
                <sphereGeometry args={[0.5 * item.scale, 64, 64]} />
                <GoldMirrorMaterial />
              </mesh>
            )}
          </group>
        </Float>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={2.5} />
      <spotLight position={[-10, 20, 10]} angle={0.3} penumbra={1} intensity={3} color="#ffffff" />
      
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 6, Math.PI / 6]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
      >
        <FloatingShapes />
      </PresentationControls>

      <ContactShadows position={[0, -2.5, 0]} opacity={0.2} scale={25} blur={4} far={5} />
      <Environment preset="sunset" />
    </>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const skills = [
    { name: "Java Expert", level: "Senior", color: "#fce4ec", text: "#ec4899", desc: "Arquitecturas escalables y backend de alto rendimiento." },
    { name: "Kotlin Dev", level: "Advanced", color: "#e8f5e9", text: "#10b981", desc: "Apps nativas modernas con Clean Architecture." },
    { name: "SQL Design", level: "Expert", color: "#e3f2fd", text: "#3b82f6", desc: "Modelado de datos complejo y optimización SQL." },
    { name: "System Design", level: "Advanced", color: "#fef3c7", text: "#d97706", desc: "Microservicios, patrones y alta disponibilidad." }
  ];

  return (
    <div className="min-h-screen w-full font-sans text-gray-800 overflow-x-hidden selection:bg-pink-100" style={{ backgroundColor: '#fff9fb' }}>
      
      <div className="fixed inset-0 z-0">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        
        <nav className="flex justify-between items-center mb-16 backdrop-blur-xl bg-white/50 p-4 rounded-[2.5rem] border border-white/60 shadow-sm">
          <div className="text-xl font-black tracking-tighter text-pink-500 flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-400 rounded-2xl flex items-center justify-center text-white text-sm shadow-lg shadow-pink-100">NL</div>
            NADIA
          </div>
          
          <div className="hidden md:flex bg-white/60 p-1.5 rounded-2xl border border-white/40 shadow-inner">
            {['home', 'skills', 'projects'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-xl transition-all text-sm font-bold capitalize ${
                  activeTab === tab ? 'bg-white text-pink-500 shadow-sm scale-105' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab === 'home' ? 'Inicio' : tab === 'skills' ? 'Habilidades' : 'Proyectos'}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
             <a href="https://www.linkedin.com/in/nadia-lopez/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:translate-y-[-2px] transition-all hover:shadow-lg border border-pink-50">
               <SocialIcons.Linkedin />
             </a>
             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:translate-y-[-2px] transition-all hover:shadow-lg border border-pink-50">
               <SocialIcons.Github />
             </a>
          </div>
        </nav>

        <main className="min-h-[70vh] flex flex-col justify-center">
          
          {activeTab === 'home' && (
            <div className="max-w-2xl animate-in fade-in slide-in-from-left-12 duration-1000">
              <div className="inline-block px-5 py-2 bg-pink-50 rounded-full text-pink-500 text-[10px] font-black tracking-[0.2em] mb-8 border border-pink-100 shadow-sm uppercase">
                Desarrolladora de Software
              </div>
              <h1 className="text-7xl md:text-[8.5rem] font-black leading-[0.85] mb-10 text-gray-900 tracking-tighter">
                Código <br />
                <span className="text-pink-400">Impecable.</span>
              </h1>
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-semibold max-w-lg drop-shadow-sm">
                Soy Nadia López. Transformo la complejidad técnica en software fluido, elegante y de alto impacto empresarial.
              </p>
              <div className="flex flex-wrap gap-5">
                <button onClick={() => setActiveTab('projects')} className="px-12 py-5 bg-pink-400 text-white font-black rounded-[2rem] shadow-2xl shadow-pink-200 hover:bg-pink-500 transition-all transform hover:scale-105">
                  VER TRABAJO
                </button>
                <button className="px-12 py-5 bg-white text-gray-800 font-black rounded-[2rem] border border-gray-100 shadow-xl hover:bg-gray-50 transition-all">
                  CV COMPLETO
                </button>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-700 max-w-4xl">
              {skills.map((s, i) => (
                <div key={i} 
                  className="group p-10 backdrop-blur-3xl rounded-[3.5rem] border border-white shadow-sm hover:shadow-2xl transition-all cursor-default overflow-hidden relative"
                  style={{ backgroundColor: `${s.color}88` }}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                       <h3 className="text-3xl font-black text-gray-800">{s.name}</h3>
                       <span className="text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest bg-white/90" style={{ color: s.text }}>{s.level}</span>
                    </div>
                    <p className="text-gray-700 text-lg font-bold leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              {[1, 2].map((p) => (
                <div key={p} className="bg-white/50 p-3 rounded-[3.5rem] border border-white/60 shadow-sm hover:shadow-3xl transition-all group">
                   <div className={`h-72 rounded-[3rem] flex items-center justify-center relative overflow-hidden ${p === 1 ? 'bg-pink-100/50' : 'bg-blue-100/50'}`}>
                      <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <button className="p-5 bg-white rounded-full shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500"><SocialIcons.External /></button>
                      </div>
                      <div className="text-white/80 font-black text-[10rem] select-none tracking-tighter italic">0{p}</div>
                   </div>
                   <div className="p-10">
                      <div className="flex gap-3 mb-5">
                        <span className="text-[10px] font-black bg-white/80 px-4 py-1.5 rounded-full text-pink-400 border border-pink-50 tracking-widest uppercase">SPRING</span>
                        <span className="text-[10px] font-black bg-white/80 px-4 py-1.5 rounded-full text-blue-400 border border-blue-50 tracking-widest uppercase">KOTLIN</span>
                      </div>
                      <h3 className="text-4xl font-black mb-4 group-hover:text-pink-500 transition-colors">Sistema Core 0{p}</h3>
                      <p className="text-gray-700 text-lg font-bold leading-relaxed">Infraestructura escalable diseñada para procesar flujos de datos críticos con seguridad de grado bancario.</p>
                   </div>
                </div>
              ))}
            </div>
          )}
        </main>

        <footer className="mt-32 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-500 font-bold text-[10px] tracking-[0.3em] uppercase">
          <p>© 2024 NADIA LÓPEZ — HECHO CON AMOR Y CÓDIGO</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <span className="hover:text-pink-400 transition-colors cursor-help">Design</span>
            <span className="hover:text-pink-400 transition-colors cursor-help">Software</span>
            <span className="hover:text-pink-400 transition-colors cursor-help">Future</span>
          </div>
        </footer>
      </div>

      <style>{`
        body { margin: 0; padding: 0; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
}