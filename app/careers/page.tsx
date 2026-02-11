import CareersList from "../components/CareersList";
import ScrollReveal from "../components/ScrollReveal";

export default function Careers() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <ScrollReveal width="100%">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
                        Join <span className="text-gray-400">Magnelox</span>
                    </h1>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        Build the future of AI-powered technology with us.
                        We’re hiring passionate developers, designers, and innovators.
                    </p>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} width="100%">
                <div className="border-t border-gray-100 pt-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
                        Open Positions
                    </h2>
                    <CareersList />
                </div>
            </ScrollReveal>
        </div>
    );
}
