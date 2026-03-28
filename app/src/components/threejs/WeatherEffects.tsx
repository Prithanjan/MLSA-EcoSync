import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Precipitation particles
function Precipitation({ type }: { type: 'rain' | 'snow' }) {
  const count = type === 'rain' ? 800 : 400;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 40,
        y: Math.random() * 20,
        z: (Math.random() - 0.5) * 40,
        speed: type === 'rain' ? 0.3 + Math.random() * 0.2 : 0.05 + Math.random() * 0.05,
        drift: type === 'snow' ? (Math.random() - 0.5) * 0.02 : (Math.random() - 0.5) * 0.01,
      });
    }
    return temp;
  }, [count, type]);

  useFrame(() => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.y -= p.speed;
      p.x += p.drift;
      if (p.y < 0) {
        p.y = 20;
        p.x = (Math.random() - 0.5) * 40;
      }
      dummy.position.set(p.x, p.y, p.z);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  const geo = type === 'rain' 
    ? new THREE.CylinderGeometry(0.01, 0.01, 0.4, 4)
    : new THREE.SphereGeometry(0.05, 4, 4);

  return (
    <instancedMesh ref={meshRef} args={[geo, undefined, count]}>
      <meshBasicMaterial 
        color={type === 'rain' ? '#94a3b8' : '#ffffff'} 
        transparent 
        opacity={type === 'rain' ? 0.6 : 0.8} 
      />
    </instancedMesh>
  );
}

// Wind lines
function HighWind() {
  const count = 100;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 40,
        y: Math.random() * 10,
        z: (Math.random() - 0.5) * 40,
        speed: 0.5 + Math.random() * 0.5,
      });
    }
    return temp;
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.x += p.speed;
      if (p.x > 20) {
        p.x = -20;
        p.y = Math.random() * 10;
        p.z = (Math.random() - 0.5) * 40;
      }
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.z = Math.PI / 2;
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[new THREE.CylinderGeometry(0.01, 0.01, 2, 4), undefined, count]}>
      <meshBasicMaterial color="#cbd5e1" transparent opacity={0.3} />
    </instancedMesh>
  );
}

// Heat wave distortion
function HeatWave() {
  const count = 200;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 30,
        y: Math.random() * 3,
        z: (Math.random() - 0.5) * 30,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.y += 0.01 + Math.sin(state.clock.elapsedTime * 2 + p.phase) * 0.005;
      if (p.y > 4) {
        p.y = 0;
      }
      dummy.position.set(p.x, p.y, p.z);
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3 + p.phase) * 0.5;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[new THREE.SphereGeometry(0.3, 8, 8), undefined, count]}>
      <meshBasicMaterial color="#fb923c" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
    </instancedMesh>
  );
}

export function WeatherEffects({ weather }: { weather: string }) {
  return (
    <group>
      {/* Fog and ambient lighting changes based on weather */}
      {weather === 'OVERCAST' && (
        <>
          <fog attach="fog" args={['#475569', 5, 30]} />
          <ambientLight intensity={0.1} />
        </>
      )}
      {weather === 'STORM' && (
        <>
          <fog attach="fog" args={['#1e1b4b', 3, 20]} />
          <ambientLight intensity={0.05} />
          <Precipitation type="rain" />
        </>
      )}
      {weather === 'BLIZZARD' && (
        <>
          <fog attach="fog" args={['#e2e8f0', 2, 15]} />
          <ambientLight intensity={0.4} />
          <Precipitation type="snow" />
        </>
      )}
      {weather === 'HEAT_WAVE' && (
        <>
          <fog attach="fog" args={['#9a3412', 10, 40]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 10, 0]} color="#ea580c" intensity={2} />
          <HeatWave />
        </>
      )}
      {weather === 'HIGH_WIND' && (
        <>
          <HighWind />
        </>
      )}
      {(weather === 'CLEAR' || !['OVERCAST', 'STORM', 'BLIZZARD', 'HEAT_WAVE'].includes(weather)) && (
        <fog attach="fog" args={['#0f172a', 15, 50]} />
      )}
    </group>
  );
}
