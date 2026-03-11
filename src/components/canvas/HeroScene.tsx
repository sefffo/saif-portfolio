import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, -3, -5]} intensity={0.8} color="#ccff00" />

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.8, 128, 128]} />
          <MeshDistortMaterial
            color="#ffffff"
            distort={0.45}
            speed={2.5}
            roughness={0}
            metalness={0.9}
          />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 3, 0.3, 0]}>
        <torusGeometry args={[3, 0.015, 16, 200]} />
        <meshBasicMaterial color="#2a2a2a" />
      </mesh>

      <mesh rotation={[Math.PI / 5, 0.8, 0.3]}>
        <torusGeometry args={[2.3, 0.008, 16, 200]} />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
    </>
  )
}
