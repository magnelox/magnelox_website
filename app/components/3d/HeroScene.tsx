"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generate particles with color attributes
function generateParticles(count: number) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Gradient palette (blue → purple → pink → orange → yellow)
    const palette = [
        new THREE.Color("#2D9CDB"), 
        new THREE.Color("#9B51E0"), 
        new THREE.Color("#EB5757"), 
        new THREE.Color("#F2994A"), 
        new THREE.Color("#F2C94C"),
    ];

    for (let i = 0; i < count; i++) {
        // 2D-like distribution with slight depth
        const x = (Math.random() - 0.5) * 8;
        const y = (Math.random() - 0.5) * 8;
        const z = (Math.random() - 0.5) * 0.3;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Color
        const color = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ColoredParticles(props: any) {
    const ref = useRef<any>();
    const { positions, colors } = useMemo(() => generateParticles(4000), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.z += delta * 0.02;
        }
    });

    return (
        <group>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.06}
                    sizeAttenuation={false}
                    depthWrite={false}
                    opacity={1}
                />
            </Points>
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ColoredParticles />
            </Canvas>
        </div>
    );
}
