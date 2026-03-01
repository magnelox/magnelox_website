import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cloud } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import { cloudServices } from '../../../data/services';

export default function CloudServicesPage() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-screen-xl mx-auto min-h-screen">
            <ScrollReveal width="100%">
                <div className="mb-8">
                    <Link href="/services" className="text-gray-500 hover:text-black transition-colors font-medium flex items-center gap-2 w-fit">
                        <ArrowRight className="rotate-180 w-4 h-4" /> Back to Services
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-ag-cyan/30">
                                <Cloud className="text-ag-cyan w-8 h-8" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
                                Cloud <span className="text-gray-400">Services</span>
                            </h1>
                        </div>
                        <p className="text-gray-600 text-xl max-w-2xl leading-relaxed">
                            Architecting, deploying, and managing robust, scalable cloud environments tailored for absolute performance, cost-efficiency, and unparalleled security.
                        </p>
                    </div>
                    <div className="w-48 h-48 relative flex-shrink-0 hidden md:block">
                        <Image src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop" alt="Cloud Services" fill className="object-cover drop-shadow-xl rounded-2xl" />
                    </div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cloudServices.map((service, i) => (
                    <ScrollReveal key={service.id} delay={i * 0.1}>
                        <Link href={`/services/cloud/${service.id}`} className="group block h-full bg-white/80 backdrop-blur-xl border border-white/60 hover:border-ag-cyan/50 rounded-3xl p-8 hover:shadow-floating hover:shadow-glow-cyan/20 transition-all duration-500 relative overflow-hidden">
                            {/* Decorative background glow */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-ag-cyan/10 rounded-full blur-2xl group-hover:bg-ag-cyan/20 transition-colors duration-500"></div>

                            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-ag-cyan transition-colors relative z-10">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8 relative z-10">
                                {service.shortDescription}
                            </p>

                            <div className="flex items-center text-sm font-semibold text-black uppercase tracking-wide group-hover:underline relative z-10">
                                Explore Solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}
