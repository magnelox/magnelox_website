"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function generateParticles(count: number) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
        new THREE.Color("#2D9CDB"),
        new THREE.Color("#9B51E0"),
        new THREE.Color("#EB5757"),
        new THREE.Color("#F2994A"),
        new THREE.Color("#F2C94C"),
    ];

    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 3;
        const y = (Math.random() - 0.5) * 3;
        const z = (Math.random() - 0.5) * 0.1;

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
    const { positions, colors } = useMemo(() => generateParticles(3500), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.z += delta * 0.1;
        }
    });

    return (
        <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
            <PointMaterial
                transparent
                vertexColors
                size={0.12}
                sizeAttenuation={false}
                depthWrite={false}
                opacity={1}
            />
        </Points>
    );
}

export default function HeroScene() {
    return (
       <div className="absolute inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 2.2], fov: 70 }}>
                <ColoredParticles />
            </Canvas>
        </div>
    );
}
