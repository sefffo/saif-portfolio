import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"


import * as THREE from "three"

// Generate once outside the component — no re-computation, no lint warning
const generateParticles = (count: number) => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
}

// Then inside the component:



export default function FloatingParticles({ count = 80 }) {
    const mesh = useRef<THREE.Points>(null)

    const particles = useMemo(() => generateParticles(count), [count])
    
    useFrame((state) => {
        if (!mesh.current) return
        mesh.current.rotation.y = state.clock.elapsedTime * 0.03
        mesh.current.rotation.x = state.clock.elapsedTime * 0.02
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.02} color="#444444" sizeAttenuation />
        </points>
    )
}
