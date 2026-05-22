'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

function Kibble({
  position,
  scale = 1,
  color = '#7C4A1E',
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.5 + seed;
    ref.current.rotation.y = t * 0.3 + seed;
    ref.current.position.y = position[1] + Math.sin(t + seed) * 0.18;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color={color}
          roughness={0.55}
          metalness={0.05}
          emissive={color}
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
}

function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.12;
    ref.current.rotation.x = state.clock.elapsedTime * 0.06;
  });

  return (
    <Sphere ref={ref} args={[1.35, 96, 96]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#1E5BD8"
        emissive="#4FB4E8"
        emissiveIntensity={0.7}
        roughness={0.25}
        metalness={0.4}
        distort={0.38}
        speed={1.4}
      />
    </Sphere>
  );
}

function Ring({ radius, tilt = 0, speed = 0.4, color = '#4FB4E8' }: {
  radius: number;
  tilt?: number;
  speed?: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2 + tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 16, 220]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  );
}

function Particles() {
  const points = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      const r = 3 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#7CC8EF" transparent opacity={0.7} />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.4, 4.6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.4} color="#4FB4E8" />
        <pointLight position={[-4, -3, 2]} intensity={0.9} color="#1E5BD8" />

        <CoreOrb />

        <Ring radius={1.8} tilt={0.1} speed={0.25} />
        <Ring radius={2.15} tilt={-0.2} speed={-0.18} color="#7CC8EF" />
        <Ring radius={2.55} tilt={0.35} speed={0.12} color="#1E5BD8" />

        <Kibble position={[1.9, 0.6, 0.4]} color="#B27345" scale={1.1} />
        <Kibble position={[-2.1, -0.5, -0.3]} color="#A1623A" scale={0.9} />
        <Kibble position={[1.4, -1.2, 0.6]} color="#C9854F" />
        <Kibble position={[-1.6, 1.1, -0.5]} color="#8E5A36" scale={0.85} />
        <Kibble position={[0.3, 1.8, -1]} color="#A66E45" scale={0.7} />
        <Kibble position={[2.4, -1.7, -0.6]} color="#7D4A28" scale={1.0} />

        <Particles />
        <Stars radius={20} depth={20} count={500} factor={2} fade speed={0.5} />
      </Suspense>
    </Canvas>
  );
}
