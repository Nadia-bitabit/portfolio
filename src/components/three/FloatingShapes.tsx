"use client";

import { useMemo } from 'react';
import { Float } from '@react-three/drei';

interface ShapeConfig {
  type: 'torus' | 'detailedSphere' | 'sphere';
  position: [number, number, number];
  scale: number;
  speed: number;
}

interface GoldMirrorMaterialProps {
  color?: string;
  metalness?: number;
  roughness?: number;
  envMapIntensity?: number;
}

export const GoldMirrorMaterial: React.FC<GoldMirrorMaterialProps> = ({ 
  color = '#ffcc33', 
  metalness = 1, 
  roughness = 0.02, 
  envMapIntensity = 3.5 
}) => (
  <meshStandardMaterial 
    color={color}
    metalness={metalness}
    roughness={roughness}
    envMapIntensity={envMapIntensity}
  />
);

interface DetailedSphereProps {
  scale?: number;
}

export const DetailedSphere: React.FC<DetailedSphereProps> = ({ scale = 1 }) => (
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

interface FloatingShapeProps {
  config: ShapeConfig;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ config }) => {
  const { type, position, scale, speed } = config;
  
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <group position={position}>
        {type === 'torus' && (
          <mesh rotation={[Math.PI / 3, Math.random(), Math.PI / 4]}>
            <torusGeometry args={[0.6 * scale, 0.22, 32, 100]} />
            <GoldMirrorMaterial />
          </mesh>
        )}
        {type === 'detailedSphere' && <DetailedSphere scale={scale} />}
        {type === 'sphere' && (
          <mesh>
            <sphereGeometry args={[0.5 * scale, 64, 64]} />
            <GoldMirrorMaterial />
          </mesh>
        )}
      </group>
    </Float>
  );
};

interface FloatingShapesProps {
  shapes?: ShapeConfig[];
}

export const FloatingShapes: React.FC<FloatingShapesProps> = ({ shapes }) => {
  const defaultShapes = useMemo<ShapeConfig[]>(() => [
    { type: 'torus', position: [2.5, 1, -1], scale: 1.1, speed: 0.9 },
    { type: 'detailedSphere', position: [-3, 1.8, 0], scale: 1.3, speed: 1.2 },
    { type: 'torus', position: [-1.5, -1.8, 1], scale: 0.8, speed: 1.1 },
    { type: 'sphere', position: [3.8, -1.5, -2], scale: 0.6, speed: 1.4 },
    { type: 'torus', position: [-4.5, 2.5, -3], scale: 0.5, speed: 1.0 },
    { type: 'sphere', position: [4.5, 2.5, -4], scale: 0.7, speed: 1.1 },
    { type: 'detailedSphere', position: [1.8, -2.8, 0.5], scale: 0.9, speed: 1.5 },
    { type: 'torus', position: [-4, -2, -1.5], scale: 0.7, speed: 1.2 },
    { type: 'sphere', position: [0, 3, -5], scale: 1.2, speed: 0.8 },
    { type: 'torus', position: [5, 0, -2], scale: 0.6, speed: 1.3 },
    { type: 'detailedSphere', position: [-2, 0, -2.5], scale: 0.5, speed: 1.1 },
    { type: 'sphere', position: [2.5, 3.5, -1.5], scale: 0.4, speed: 1.6 }
  ], []);

  const shapesToRender = shapes ?? defaultShapes;

  return (
    <group>
      {shapesToRender.map((shape, index) => (
        <FloatingShape key={index} config={shape} />
      ))}
    </group>
  );
};

export type { ShapeConfig };