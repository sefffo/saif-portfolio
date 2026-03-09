import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"
import * as THREE from "three"

export default function SkillsCube() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (!meshRef.current) return
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
    })

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 3, 3]} intensity={1} />
            <mesh ref={meshRef}>
                <boxGeometry args={[2, 2, 2]} />
                <MeshWobbleMaterial
                    color="#ffffff"
                    factor={0.1}
                    speed={1}
                    roughness={0.1}
                    metalness={0.8}
                    wireframe
                />
            </mesh>
        </>
    )
}
