"use client";

import ServiceCard from "./ServiceCard";
import { Bot, ShieldCheck, Cloud } from "lucide-react";

export default function ServicesGrid() {
    const services = [
        {
            title: "AI Services & Automation",
            description: "Automate repetitive tasks, enable 24/7 chatbots, email agents & workflow systems.",
            icon: <Bot size={28} />,
            delay: 0.1,
            href: "/services/ai"
        },
        {
            title: "Cybersecurity",
            description: "Protect your infrastructure with SIEM, Wazuh, ELK, penetration testing & cloud security.",
            icon: <ShieldCheck size={28} />,
            delay: 0.3,
            href: "/services/cybersecurity"
        },
        {
            title: "Cloud Services",
            description: "Cloud consulting, migration, Kubernetes, DevSecOps & infrastructure audits.",
            icon: <Cloud size={28} />,
            delay: 0.4,
            href: "/services/cloud"
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
