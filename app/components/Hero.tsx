"use client";

import Link from "next/link";
import HeroScene from "./3d/HeroScene";
import ScrollReveal from "./ScrollReveal";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            {/* 3D Background */}
            <HeroScene />

            {/* Content Overlay */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                <ScrollReveal>
                    <div className="mb-8 flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-ag-cyan/30 bg-white/50 backdrop-blur-md shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-ag-cyan animate-pulse shadow-[0_0_8px_#00FFFF]"></span>
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Next Generation AI</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1} width="100%">
                    <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 leading-[0.9] tracking-tighter text-balance">
                        Experience liftoff with <br />
                        <span className="text-gradient-ag">intelligent automation</span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        Magnelox builds the autonomous enterprise of tomorrow. <br className="hidden md:block" />
                        Seamless AI agents, cybersecurity, and cloud infrastructure.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <button className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:shadow-glow-cyan transition-all hover:scale-105 active:scale-95 shadow-floating hover:bg-gray-900 border border-transparent hover:border-ag-cyan/50">
                                Start Building
                            </button>
                        </Link>
                        <Link href="/services">
                            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-black border border-gray-200 rounded-full font-medium text-lg hover:bg-white hover:shadow-glow-magenta transition-all hover:scale-105 active:scale-95 hover:border-ag-magenta/30">
                                Explore Services
                            </button>
                        </Link>
                    </div>
                </ScrollReveal>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 animate-bounce opacity-40">
                <ArrowDown size={24} className="text-black" />
            </div>
        </section>
    );
}
