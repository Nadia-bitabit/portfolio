"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

const colors = ["#C9184A", "#FF4D6D", "#FF758F", "#FF8FA3", "#FFB3C1"];
const GOLD_COLOR = "#FFD700";

const BOUNDS = {
  x: 5,
  y: 3,
  z: 2,
};

interface ShapeData {
  id: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  geometry: "icosahedron" | "torus" | "octahedron" | "dodecahedron" | "tetrahedron";
  color: string;
  size: number;
}

function MovingShape({ 
  shape,
  onUpdate 
}: { 
  shape: ShapeData;
  onUpdate: (id: number, pos: THREE.Vector3, vel: THREE.Vector3) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometryComponent = useMemo(() => {
    switch (shape.geometry) {
      case "icosahedron": return <icosahedronGeometry args={[shape.size, 0]} />;
      case "torus": return <torusGeometry args={[shape.size * 0.7, shape.size * 0.3, 16, 32]} />;
      case "octahedron": return <octahedronGeometry args={[shape.size, 0]} />;
      case "dodecahedron": return <dodecahedronGeometry args={[shape.size, 0]} />;
      case "tetrahedron": return <tetrahedronGeometry args={[shape.size, 0]} />;
      default: return <boxGeometry args={[shape.size, shape.size, shape.size]} />;
    }
  }, [shape.geometry, shape.size]);

  useFrame(() => {
    if (!meshRef.current) return;

    const newPos = shape.position.clone();
    const newVel = shape.velocity.clone();

    newPos.add(newVel.clone().multiplyScalar(0.02));

    const margin = shape.size;
    if (newPos.x > BOUNDS.x - margin || newPos.x < -BOUNDS.x + margin) {
      newVel.x *= -1;
      newPos.x = Math.max(-BOUNDS.x + margin, Math.min(BOUNDS.x - margin, newPos.x));
    }
    if (newPos.y > BOUNDS.y - margin || newPos.y < -BOUNDS.y + margin) {
      newVel.y *= -1;
      newPos.y = Math.max(-BOUNDS.y + margin, Math.min(BOUNDS.y - margin, newPos.y));
    }
    if (newPos.z > BOUNDS.z - margin || newPos.z < -BOUNDS.z + margin) {
      newVel.z *= -1;
      newPos.z = Math.max(-BOUNDS.z + margin, Math.min(BOUNDS.z - margin, newPos.z));
    }

    meshRef.current.position.copy(newPos);
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.015;

    onUpdate(shape.id, newPos, newVel);
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh ref={meshRef} position={shape.position}>
        {geometryComponent}
        <meshStandardMaterial 
          color={GOLD_COLOR} 
          transparent 
          opacity={0.85}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const [shapes, setShapes] = useState<ShapeData[]>(() => {
    const geometries: ShapeData["geometry"][] = ["icosahedron", "torus", "octahedron", "dodecahedron", "tetrahedron"];
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ),
      geometry: geometries[i % geometries.length],
      color: colors[i % colors.length],
      size: 1.2 + Math.random() * 0.8,
    }));
  });

  const handleUpdate = (id: number, pos: THREE.Vector3, vel: THREE.Vector3) => {
    setShapes(prev => prev.map(s => {
      if (s.id !== id) return s;
      
      for (let other of prev) {
        if (other.id === id) continue;
        const dist = pos.distanceTo(other.position);
        const minDist = (s.size + other.size) * 0.8;
        
        if (dist < minDist) {
          const collisionNormal = pos.clone().sub(other.position).normalize();
          const relVel = vel.clone().sub(other.velocity);
          const impulse = relVel.dot(collisionNormal);
          
          if (impulse < 0) {
            vel.sub(collisionNormal.multiplyScalar(impulse * 1.5));
            pos.add(collisionNormal.multiplyScalar(0.1));
          }
        }
      }
      
      return { ...s, position: pos, velocity: vel };
    }));
  };

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FFB3C1" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#FF4D6D" />
      
      <mesh position={[0, 0, -4]}>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#C9184A" transparent opacity={0.1} />
      </mesh>
      
      {shapes.map((shape) => (
        <MovingShape key={shape.id} shape={shape} onUpdate={handleUpdate} />
      ))}
    </>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
}