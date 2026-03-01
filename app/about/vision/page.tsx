"use client";

import ScrollReveal from "../../components/ScrollReveal";
import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VisionPage() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
            <ScrollReveal width="100%">
                <div className="mb-12">
                    <Link href="/about" className="text-gray-500 hover:text-black transition-colors font-medium flex items-center gap-2 w-fit">
                        <ArrowRight className="rotate-180 w-4 h-4" /> Back to About
                    </Link>
                </div>
            </ScrollReveal>

            <ScrollReveal width="100%">
                <div className="relative rounded-3xl overflow-hidden px-8 py-20 md:p-24 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-white/60 shadow-xl mb-16">
                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-white/60 rounded-2xl flex items-center justify-center mb-8 text-cyan-600 shadow-sm backdrop-blur-md border border-white/40">
                            <Globe size={40} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8">
                            Our Vision
                        </h1>
                        <p className="text-2xl text-gray-800 leading-relaxed font-light md:max-w-3xl">
                            To become a global leader in AI-driven digital transformation for every industry, democratizing elite engineering scale.
                        </p>
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} width="100%">
                <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-loose">
                    <p>
                        A decade from now, enterprise execution will entirely decouple from manual labor bottlenecks. At Magnelox, our vision is to be the primary architect of that autonomous future. We foresee a world where systems seamlessly self-heal, applications intelligently scale in anticipation of demand, and security perimeters adapt autonomously to neutralizing zero-day threats instantly.
                    </p>
                    <p className="mt-6">
                        We are building toward an era where intelligence is default. From small start-ups leaning into cloud-native design, to Fortune 500s overhauling complex legacy monoliths—our goal is to make world-class architectural stability the norm, globally.
                    </p>
                </div>
            </ScrollReveal>
        </div>
    );
}
