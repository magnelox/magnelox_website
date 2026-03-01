"use client";

import ScrollReveal from "../../components/ScrollReveal";
import { Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MissionPage() {
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
                <div className="relative rounded-3xl overflow-hidden px-8 py-20 md:p-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-white/60 shadow-xl mb-16">
                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-white/60 rounded-2xl flex items-center justify-center mb-8 text-blue-600 shadow-sm backdrop-blur-md border border-white/40">
                            <Target size={40} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8">
                            Our Mission
                        </h1>
                        <p className="text-2xl text-gray-800 leading-relaxed font-light md:max-w-3xl">
                            To empower businesses with intelligent, secure, and future-ready digital systems powered by AI.
                        </p>
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} width="100%">
                <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-loose">
                    <p>
                        At Magnelox, our core mission is deeply rooted in the belief that technology should not be a bottleneck, but the ultimate catalyst for human potential. We exist to dismantle the complexities of modern IT infrastructure and replace them with autonomous, secure, and infinitely scalable ecosystems.
                    </p>
                    <p className="mt-6">
                        We are fundamentally changing how enterprises operate. By converging artificial intelligence with zero-trust cybersecurity and robust cloud architectures, we ensure our partners are not just prepared for the future—they are actively building it.
                    </p>
                    <h2 className="text-2xl font-bold text-black mt-12 mb-6">Built for Resilience</h2>
                    <p>
                        In a landscape where threats evolve by the microsecond, relying on reactive measures is no longer an option. Our mission demands that every solution we architect—from an AWS multi-region cluster to an automated workflow agent—has security and resilience woven into its DNA from day zero.
                    </p>
                </div>
            </ScrollReveal>
        </div>
    );
}
