"use client";

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  ContactShadows, 
  PresentationControls,
  Environment
} from '@react-three/drei';
import { FloatingShapes } from './FloatingShapes';

interface SceneProps {
  className?: string;
}

export const Scene: React.FC<SceneProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
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
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;