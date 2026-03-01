import Link from 'next/link';
import { Bot, Cloud, ShieldCheck, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Services() {
    const pillars = [
        {
            title: "Cloud Services",
            description: "Architecting, migrating, and securing scalable cloud infrastructures to accelerate your digital transformation journey.",
            icon: <Cloud size={48} className="text-ag-cyan" />,
            link: "/services/cloud",
            colorClass: "from-blue-500/20 to-cyan-500/20",
            borderClass: "hover:border-ag-cyan"
        },
        {
            title: "Cybersecurity Services",
            description: "End-to-end threat intelligence, compliance, and VAPT services to defend your critical assets against modern cyber threats.",
            icon: <ShieldCheck size={48} className="text-ag-magenta" />,
            link: "/services/cybersecurity",
            colorClass: "from-pink-500/20 to-purple-500/20",
            borderClass: "hover:border-ag-magenta"
        },
        {
            title: "AI Services & Automation",
            description: "Intelligent AI agents, workflow automation, and predictive analytics designed to multiply human productivity.",
            icon: <Bot size={48} className="text-yellow-500" />,
            link: "/services/ai",
            colorClass: "from-yellow-500/20 to-orange-500/20",
            borderClass: "hover:border-yellow-500",
            disabled: false
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-screen-xl mx-auto min-h-screen">
            <ScrollReveal width="100%">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
                        Our <span className="text-gray-400">Services</span>
                    </h1>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                        We deliver world-class Cloud architecture, proactive Cybersecurity, and intelligent AI solutions tailored for enterprise scale.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {pillars.map((p, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        {p.disabled ? (
                            <div className={`group relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-10 h-full flex flex-col justify-between overflow-hidden opacity-70`}>
                                <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br ${p.colorClass} opacity-50`}></div>
                                <div className="relative z-10">
                                    <div className="mb-6 p-4 bg-white shadow-sm rounded-2xl w-fit">
                                        {p.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-black mb-4">{p.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg mb-8">{p.description}</p>
                                </div>
                                <div className="relative z-10 mt-auto inline-flex items-center text-sm font-semibold tracking-wide text-gray-400 uppercase">
                                    Coming Soon
                                </div>
                            </div>
                        ) : (
                            <Link href={p.link} className={`group relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-10 h-full flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500 ${p.borderClass}`}>
                                <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br ${p.colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                <div className="relative z-10">
                                    <div className="mb-6 p-4 bg-white shadow-sm rounded-2xl w-fit group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                        {p.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-black mb-4 group-hover:-translate-y-1 transition-transform duration-500">{p.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg mb-8">{p.description}</p>
                                </div>
                                <div className="relative z-10 mt-auto flex items-center justify-between">
                                    <span className="font-semibold text-black group-hover:underline overflow-hidden">View Capabilities</span>
                                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        )}
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
