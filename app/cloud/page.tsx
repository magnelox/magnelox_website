import ScrollReveal from "../components/ScrollReveal";
import { Cloud, Server, ArrowRightLeft, GitBranch, Shield, Box, Activity, Settings } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CloudService = ({ title, items, icon: Icon }: any) => (
    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-card transition-all duration-300 h-full flex flex-col group">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors mb-6">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-black mb-6">{title}</h3>
        <ul className="space-y-3 mt-auto">
            {items.map((item: string, i: number) => (
                <li key={i} className="text-gray-600 text-sm flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-black shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default function CloudPage() {
    const services = [
        {
            title: "Cloud Consulting",
            items: ["Cloud Readiness Assessment", "Hybrid/Multi-cloud Strategy", "FinOps & Cost Optimization", "Governance & Compliance"],
            icon: Cloud
        },
        {
            title: "Infrastructure Design",
            items: ["VPC Architecture", "Compute & Storage Planning", "Auto Scaling & Load Balancing", "High Availability Design"],
            icon: Server
        },
        {
            title: "Cloud Migration",
            items: ["Rehosting (Lift & Shift)", "Replatforming", "Database Migration", "Zero-downtime Cutover"],
            icon: ArrowRightLeft
        },
        {
            title: "DevOps & DevSecOps",
            items: ["CI/CD Pipelines", "Infrastructure as Code (Terraform)", "Security Integration", "Automated Testing"],
            icon: GitBranch
        },
        {
            title: "Cloud Security",
            items: ["Infrastructure Hardening", "WAF Deployment", "IAM Policy Management", "Compliance Auditing"],
            icon: Shield
        },
        {
            title: "Kubernetes & Containers",
            items: ["Docker Containerization", "EKS / AKS / GKE Management", "Service Mesh (Istio)", "Container Security"],
            icon: Box
        },
        {
            title: "Managed Cloud Services",
            items: ["24/7 Monitoring & Support", "Patch Management", "Performance Optimization", "Incident Management"],
            icon: Activity
        },
        {
            title: "Cloud Automation",
            items: ["Self-healing Infrastructure", "Automated Scaling", "Policy as Code", "Resource Scheduling"],
            icon: Settings
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <ScrollReveal width="100%">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
                        Cloud <span className="text-gray-400">Engineering</span>
                    </h1>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        Modernize your infrastructure with Magnelox.
                        Scalable, secure, and cost-efficient cloud solutions.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((s, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                        <CloudService {...s} />
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
