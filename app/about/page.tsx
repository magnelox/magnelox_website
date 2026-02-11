"use client";

import ScrollReveal from "../components/ScrollReveal";
import { Users, Target, Globe } from "lucide-react";

export default function About() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <ScrollReveal width="100%">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
                        About <span className="text-gray-400">Magnelox</span>
                    </h1>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                        Magnelox builds end-to-end digital ecosystems powered by AI.
                        We combine advanced automation, cybersecurity, and cloud technologies to deliver scalable solutions.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                <ScrollReveal delay={0.1}>
                    <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center h-full hover:shadow-card transition-shadow">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-black">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
                        <p className="text-gray-500 leading-relaxed">
                            To empower businesses with intelligent, secure, and future-ready digital systems powered by AI.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center h-full hover:shadow-card transition-shadow">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-black">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-black">Our Vision</h3>
                        <p className="text-gray-500 leading-relaxed">
                            To become a global leader in AI-driven digital transformation for every industry.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center h-full hover:shadow-card transition-shadow">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-black">
                            <Users size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-black">Our Team</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Passionate engineers, security experts, and AI researchers building the future.
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            <ScrollReveal width="100%">
                <div className="bg-black text-white rounded-[3rem] p-20 text-center">
                    <h2 className="text-3xl font-bold mb-6">Leadership</h2>
                    <p className="text-white/40 italic text-lg">Board Members Coming Soon</p>
                </div>
            </ScrollReveal>
        </div>
    );
}
