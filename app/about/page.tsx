"use client";

import ScrollReveal from "../components/ScrollReveal";
import { Users, Target, Globe } from "lucide-react";
import Link from "next/link";

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
                    <Link href="/about/mission" className="block h-full group">
                        <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center h-full group-hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-black group-hover:-translate-y-2 transition-transform duration-300">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors">Our Mission</h3>
                            <p className="text-gray-500 leading-relaxed">
                                To empower businesses with intelligent, secure, and future-ready digital systems powered by AI.
                            </p>
                        </div>
                    </Link>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <Link href="/about/vision" className="block h-full group">
                        <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center h-full group-hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-black group-hover:-translate-y-2 transition-transform duration-300">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-cyan-600 transition-colors">Our Vision</h3>
                            <p className="text-gray-500 leading-relaxed">
                                To become a global leader in AI-driven digital transformation for every industry.
                            </p>
                        </div>
                    </Link>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <Link href="/about/team" className="block h-full group">
                        <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center h-full group-hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-black group-hover:-translate-y-2 transition-transform duration-300">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-purple-600 transition-colors">Our Team</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Passionate engineers, security experts, and AI researchers building the future.
                            </p>
                        </div>
                    </Link>
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
