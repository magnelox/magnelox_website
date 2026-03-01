import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import ServiceCard from '../../components/ServiceCard';
import { aiServices } from '../../../data/services';
import * as LucideIcons from 'lucide-react';

export default function AIServicesPage() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            {/* Header */}
            <ScrollReveal width="100%">
                <div className="mb-12">
                    <Link href="/services" className="text-gray-500 hover:text-black transition-colors font-medium flex items-center gap-2 w-fit">
                        <ArrowRight className="rotate-180 w-4 h-4" /> Back to All Services
                    </Link>
                </div>
            </ScrollReveal>

            {/* Pillar introduction */}
            <ScrollReveal width="100%">
                <div className="text-center mb-24 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-400/10 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
                    <div className="w-48 h-48 relative mx-auto mb-8">
                        <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" alt="AI Services" fill className="object-cover drop-shadow-xl rounded-2xl" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
                        AI Services & <span className="text-yellow-500">Automation</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Replace manual workflows with intelligent, autonomous systems. We build agents, copilots, and end-to-end automation pipelines that revolutionize operational throughput.
                    </p>
                </div>
            </ScrollReveal>

            {/* List of active AI services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, i) => {
                    const fallbackIcon = <LucideIcons.Cpu size={28} />;
                    return (
                        <div key={service.id} className="h-full">
                            <ServiceCard
                                title={service.title}
                                description={service.shortDescription}
                                icon={fallbackIcon}
                                delay={i * 0.1}
                                href={`/services/ai/${service.id}`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
