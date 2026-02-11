"use client";

import ServiceCard from "./ServiceCard";
import { Bot, Code2, ShieldCheck, Cloud } from "lucide-react";

export default function ServicesGrid() {
    const services = [
        {
            title: "AI Automation",
            description: "Automate repetitive tasks, enable 24/7 chatbots, email agents & workflow systems.",
            icon: <Bot size={28} />,
            delay: 0.1
        },
        {
            title: "Custom Software",
            description: "Build complete applications, dashboards, ERPs, SaaS tools & enterprise systems.",
            icon: <Code2 size={28} />,
            delay: 0.2
        },
        {
            title: "Cybersecurity",
            description: "Protect your infrastructure with SIEM, Wazuh, ELK, penetration testing & cloud security.",
            icon: <ShieldCheck size={28} />,
            delay: 0.3
        },
        {
            title: "Cloud Services",
            description: "Cloud consulting, migration, Kubernetes, DevSecOps & infrastructure audits.",
            icon: <Cloud size={28} />,
            delay: 0.4
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    );
}
