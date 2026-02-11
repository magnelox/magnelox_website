import ScrollReveal from "../components/ScrollReveal";
import { Shield, Search, FileCheck, Server, AlertTriangle, Cloud, Fingerprint, Code, Network, Database } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CyberService = ({ title, desc, items, icon: Icon }: any) => (
    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-card transition-all duration-300 group">
        <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit text-black group-hover:bg-black group-hover:text-white transition-colors">
            <Icon size={28} />
        </div>
        <h2 className="text-2xl text-black font-bold mb-3">{title}</h2>
        <p className="text-gray-500 mb-6 leading-relaxed">{desc}</p>
        <ul className="space-y-3">
            {items.map((item: string, i: number) => (
                <li key={i} className="text-gray-600 flex items-center gap-3 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default function Cybersecurity() {
    const services = [
        {
            title: "Threat Intelligence",
            desc: "Stay ahead of attackers with real-time intelligence and automated monitoring.",
            items: ["Threat Intelligence Platform (TIP)", "Dark Web Monitoring", "Brand Protection", "Threat Hunting", "CTI Feeds"],
            icon: Search
        },
        {
            title: "Incident Response",
            desc: "We minimize damage, contain threats, and guide your recovery.",
            items: ["Rapid Incident Response", "Digital Forensics", "SecOps Consulting", "Compromise Assessment"],
            icon: AlertTriangle
        },
        {
            title: "VAPT & Red Team",
            desc: "We simulate real cyberattacks to strengthen your defenses.",
            items: ["Network VAPT", "Web App Security", "Cloud Pentesting", "Red Team Ops", "Blockchain Security"],
            icon: Shield
        },
        {
            title: "Compliance & Audit",
            desc: "Ensure your business meets global security standards.",
            items: ["ISO 27001", "GDPR", "HIPAA", "PCI-DSS", "Data Protection Audits"],
            icon: FileCheck
        },
        {
            title: "Managed SOC (MSSP)",
            desc: "24/7 Security Operations Center for continuous monitoring.",
            items: ["24/7 SOC Monitoring", "MDR (Managed Detection)", "SIEM Implementation", "EDR Management", "DLP Solutions"],
            icon: Server
        },
        {
            title: "Cloud Security",
            desc: "Secure your cloud infrastructure across AWS, Azure, and GCP.",
            items: ["Cloud Architecture Review", "Configuration Audits", "Infrastructure Hardening", "Container Security"],
            icon: Cloud
        },
        {
            title: "Identity & Access (IAM)",
            desc: "Control who has access to your critical data and systems.",
            items: ["IAM Strategy", "Multi-Factor Auth (MFA)", "Privileged Access (PAM)", "Single Sign-On (SSO)"],
            icon: Fingerprint
        },
        {
            title: "Application Security",
            desc: "Build security into your software development lifecycle.",
            items: ["Secure SDLC", "Source Code Review", "DAST / SAST", "API Security"],
            icon: Code
        },
        {
            title: "Network Security",
            desc: "Fortify your network perimeter and internal traffic.",
            items: ["Firewall Configuration", "IDS/IPS Setup", "Zero Trust Architecture", "VPN Solutions"],
            icon: Network
        },
        {
            title: "Business Continuity (BCDR)",
            desc: "Prepare for the unexpected with robust disaster recovery plans.",
            items: ["DR Planning", "Business Continuity", "Backup Solutions", "Resilience Testing"],
            icon: Database
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <ScrollReveal width="100%">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
                        Enterprise <span className="text-gray-400">Security</span>
                    </h1>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        Protect your organization with Magnelox&apos;s 360° cyber defense.
                        From proactive threat hunting to 24/7 SOC monitoring.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((s, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                        <CyberService {...s} />
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
