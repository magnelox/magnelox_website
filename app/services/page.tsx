import ServiceCard from "../components/ServiceCard";
import ScrollReveal from "../components/ScrollReveal";
import { Bot, Code2, ShieldCheck, Database, HeartPulse } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "AI Automation",
            description: "Agents, chatbots, workflow automation, predictive analytics.",
            icon: <Bot size={24} />
        },
        {
            title: "Software Development",
            description: "Web apps, mobile apps, SaaS systems, dashboards & APIs.",
            icon: <Code2 size={24} />
        },
        {
            title: "Cybersecurity",
            description: "SIEM, Wazuh, ELK, Pen-testing, Cloud Security.",
            icon: <ShieldCheck size={24} />
        },
        {
            title: "ERP Systems",
            description: "Education ERP, HRMS, Healthcare ERP, Logistics.",
            icon: <Database size={24} />
        },
        {
            title: "Healthcare AI",
            description: "Predictive analysis, medical monitoring, XAI systems.",
            icon: <HeartPulse size={24} />
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <ScrollReveal width="100%">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
                        Core <span className="text-gray-400">Solutions</span>
                    </h1>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        We build every solution with intelligence built inside.
                        Secure, scalable, and powered by next-generation AI.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((s, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        <ServiceCard {...s} delay={0} />
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
