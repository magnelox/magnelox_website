"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import * as LucideIcons from 'lucide-react';
import BouncingLine from './BouncingLine';
import { motion } from 'framer-motion';

interface ServiceLandingTemplateProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    service: any;
    pillarInfo: {
        name: string;
        link: string;
        color: string;
        bgVariant: string;
        heroImage?: string;
    };
}

export default function ServiceLandingTemplate({ service, pillarInfo }: ServiceLandingTemplateProps) {
    if (!service) return null;

    const accentTextColor = pillarInfo.color === 'ag-cyan' ? 'text-ag-cyan' : pillarInfo.color === 'ag-magenta' ? 'text-ag-magenta' : 'text-yellow-500';
    const accentBgColor = pillarInfo.color === 'ag-cyan' ? 'bg-ag-cyan/20' : pillarInfo.color === 'ag-magenta' ? 'bg-ag-magenta/20' : 'bg-yellow-500/20';

    return (
        <div className="pt-32 pb-20 px-6 max-w-screen-xl mx-auto min-h-screen">
            {/* Header / Breadcrumb */}
            <ScrollReveal width="100%">
                <div className="mb-12">
                    <Link href={pillarInfo.link} className="text-gray-500 hover:text-black transition-colors font-medium flex items-center gap-2 w-fit">
                        <ArrowRight className="rotate-180 w-4 h-4" /> Back to {pillarInfo.name}
                    </Link>
                </div>
            </ScrollReveal>

            {/* Hero Section */}
            <ScrollReveal width="100%">
                <div className={`relative rounded-3xl overflow-hidden px-8 py-20 md:p-24 mb-20 bg-gradient-to-br border border-white/60 shadow-xl ${pillarInfo.bgVariant}`}>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="max-w-2xl">
                            <div className="inline-block px-4 py-2 rounded-full bg-white/40 backdrop-blur-md text-black font-semibold tracking-wide text-sm mb-6 shadow-sm">
                                {service.title}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8 leading-tight">
                                {service.hero.headline}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-10 max-w-2xl font-light">
                                {service.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className={`px-8 py-4 bg-black text-white rounded-full font-bold hover:-translate-y-1 transition-transform shadow-lg hover:shadow-xl`}>
                                    {service.hero.ctaText}
                                </button>
                            </div>
                        </div>
                        {/* Service / Pillar Hero Image */}
                        {(service.heroImage || pillarInfo.heroImage) && (
                            <motion.div
                                className="hidden lg:block w-80 h-80 relative flex-shrink-0"
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                    src={service.heroImage || pillarInfo.heroImage}
                                    alt={`${service.title} illustration`}
                                    fill
                                    className="object-contain rounded-3xl drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>
                        )}
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                </div>
            </ScrollReveal>

            {/* Introduction & Quick Facts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                <div className="lg:col-span-7">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold mb-6 text-black">About The Service</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {service.about}
                        </p>
                        <h3 className="text-xl font-bold mb-4 text-black text-opacity-80">Core Capabilities included:</h3>
                        <ul className="space-y-4">
                            {service.features.map((feat: string, i: number) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className={`w-6 h-6 mt-0.5 ${accentTextColor}`} />
                                    <span className="text-lg text-gray-700 font-medium">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                <div className="lg:col-span-5 relative">
                    <ScrollReveal delay={0.2} width="100%">
                        <div className="bg-white/80 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-floating">
                            <h3 className="text-xl font-bold mb-6 text-black">Why Choose Magnelox</h3>
                            <div className="space-y-6">
                                {service.reasons.map((reason: string, i: number) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black font-bold">
                                            {i + 1}
                                        </div>
                                        <p className="font-semibold text-gray-800">{reason}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Features/Highlights Grid */}
            <div className="mb-24">
                <ScrollReveal>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-black">Service Highlights</h2>
                        <p className="text-lg text-gray-500">Engineered to drive immediate value and long-term security across your assets.</p>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {service.highlights.map((highlight: any, i: number) => {
                        // Dynamically resolve icon, with fallback to CheckCircle2
                        const IconName = highlight.icon.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const Icon = (LucideIcons as any)[IconName] || LucideIcons.CheckCircle2;

                        return (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-8 bg-white/40 border border-white/60 rounded-3xl hover:bg-white/80 transition-colors duration-300">
                                    <div className="mb-4">
                                        <Icon className={`w-10 h-10 ${accentTextColor}`} />
                                    </div>
                                    <h4 className="text-xl font-bold text-black">{highlight.name}</h4>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>

            {/* Engagement Process Timeline */}
            <div className="mb-24 relative overflow-hidden bg-black text-white rounded-[3rem] p-12 md:p-20">
                <div className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl mix-blend-screen ${accentBgColor}`}></div>
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                        <h2 className="text-4xl font-bold mb-4">Our Engagement Process</h2>
                        <p className="text-gray-400 text-lg">A structured, proven methodology ensuring seamless delivery and risk-free execution.</p>
                    </div>
                </ScrollReveal>

                <div className="relative z-10 grid grid-cols-2 lg:grid-cols-auto-fit gap-8 text-center" style={{ gridTemplateColumns: `repeat(${service.timeline.length}, minmax(0, 1fr))` }}>
                    {service.timeline.map((step: string, i: number) => {
                        // Create slightly offset, slow animations for true zero gravity randomness
                        const floatDelay = i * 0.4;
                        const floatDuration = 4 + (i % 3);

                        return (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <motion.div
                                    className="relative h-full flex flex-col items-center"
                                    animate={{ y: [-8, 8, -8] }}
                                    transition={{
                                        duration: floatDuration,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: floatDelay
                                    }}
                                >
                                    {/* Connector Line */}
                                    {i !== service.timeline.length - 1 && (
                                        <BouncingLine color={pillarInfo.color} />
                                    )}
                                    <div className={`w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center font-bold text-xl mb-6 border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${accentTextColor}`}>
                                        0{i + 1}
                                    </div>
                                    <h4 className="font-semibold text-lg leading-snug">{step}</h4>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>

            {/* Bottom CTA block */}
            <ScrollReveal width="100%">
                <div className={`p-10 md:p-16 rounded-3xl bg-gradient-to-r ${pillarInfo.bgVariant} border border-white/60 text-center shadow-lg relative overflow-hidden`}>
                    <div className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-50 mix-blend-multiply ${accentBgColor}`}></div>

                    <h2 className="text-4xl font-bold text-black mb-6 relative z-10">Ready to transform your infrastructure?</h2>
                    <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto font-light relative z-10">
                        Speak directly with our senior cloud architects and security engineers to get a tailored gameplan for your organization.
                    </p>
                    <button className="px-10 py-5 bg-black text-white text-lg rounded-full font-bold hover:-translate-y-1 transition-transform shadow-xl relative z-10">
                        Schedule a Consultation
                    </button>
                </div>
            </ScrollReveal>

        </div>
    );
}
