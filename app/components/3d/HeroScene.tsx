"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generate particles with color attributes
function generateParticles(count: number) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Antigravity Coors: Cyan, Magenta, Yellow
    const palette = [
        new THREE.Color("#00FFFF"), // Cyan
        new THREE.Color("#FF00FF"), // Magenta
        new THREE.Color("#FFFF00"), // Yellow
        new THREE.Color("#0099FF"), // Blue
    ];

    for (let i = 0; i < count; i++) {
        // Position
        const r = 4;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>();
    const { positions, colors } = useMemo(() => generateParticles(4000), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 25;
            ref.current.rotation.y -= delta / 30;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.045}
                    sizeAttenuation={true}
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
