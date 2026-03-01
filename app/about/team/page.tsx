"use client";

import ScrollReveal from "../../components/ScrollReveal";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <ScrollReveal width="100%">
                <div className="mb-12">
                    <Link href="/about" className="text-gray-500 hover:text-black transition-colors font-medium flex items-center gap-2 w-fit">
                        <ArrowRight className="rotate-180 w-4 h-4" /> Back to About
                    </Link>
                </div>
            </ScrollReveal>

            <ScrollReveal width="100%">
                <div className="relative rounded-3xl overflow-hidden px-8 py-20 md:p-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/60 shadow-xl mb-24">
                    <div className="relative z-10 max-w-4xl">
                        <div className="w-20 h-20 bg-white/60 rounded-2xl flex items-center justify-center mb-8 text-purple-600 shadow-sm backdrop-blur-md border border-white/40">
                            <Users size={40} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8">
                            Meet Our Team
                        </h1>
                        <p className="text-2xl text-gray-800 leading-relaxed font-light">
                            Passionate engineers, security experts, and AI researchers building the autonomous future of IT operations.
                        </p>
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} width="100%">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center text-gray-500">
                    <div className="p-16 border border-gray-100 rounded-[3rem] bg-white group hover:shadow-floating transition-shadow">
                        <p className="text-2xl font-light mb-4 text-black">Executive Leadership Team</p>
                        <p>Profiles & Biographies updating soon.</p>
                    </div>
                    <div className="p-16 border border-gray-100 rounded-[3rem] bg-white group hover:shadow-floating transition-shadow">
                        <p className="text-2xl font-light mb-4 text-black">Security & Engineering Operations</p>
                        <p>Magnelox NOC & SOC specialist teams based globally.</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
