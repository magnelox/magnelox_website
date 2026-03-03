"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function generateParticles(count: number) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Clean Antigravity color palette
    const palette = [
        new THREE.Color("#2D9CDB"), // Blue
        new THREE.Color("#9B51E0"), // Purple
        new THREE.Color("#EB5757"), // Red/Pink
        new THREE.Color("#F2994A"), // Orange
        new THREE.Color("#F2C94C"), // Yellow
    ];

    for (let i = 0; i < count; i++) {
        // MUCH BIGGER spread (fills whole screen)
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 0.1; // Very thin for crisp 2D look

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const color = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
}

function ColoredParticles(props: any) {
    const ref = useRef<any>();
    const { positions, colors } = useMemo(() => generateParticles(16000), []); 
    // ↑ GOOGLE has very dense dots: 16k

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.z += delta * 0.03; // Slow, smooth rotation
        }
    });

    return (
        <Points
            ref={ref}
            positions={positions}
            colors={colors}
            stride={3}
            frustumCulled={false}
            {...props}
        >
            <PointMaterial
                transparent
                vertexColors
                size={0.25}       // 🔥 BIG CLEAR DOTS
                sizeAttenuation={false}
                depthWrite={false}
                opacity={0.95}     // Bright & visible
            />
        </Points>
    );
}

export default function HeroScene() {
    return (
       <div className="absolute inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
                <ColoredParticles />
            </Canvas>
        </div>
    );
}
