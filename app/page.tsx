import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col pb-0 bg-white min-h-screen">
      <Hero />

      <section className="px-6 max-w-7xl mx-auto w-full py-32">
        <ScrollReveal width="100%">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight max-w-2xl text-balance">
              Autonomous agents. <br />
              <span className="text-gray-400">Secure infrastructure.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-md leading-relaxed">
              We replace manual workflows with intelligent systems that learn, adapt, and scale with your enterprise.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <div className="border-t border-gray-100 pt-16">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">Core Capabilities</h3>
            <ServicesGrid />
          </div>
        </ScrollReveal>
      </section>

      {/* Large Text Section */}
      <section className="bg-black text-white py-40 px-6 rounded-t-[3rem] -mb-32 z-10 relative">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal width="100%">
            <p className="text-3xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto">
              &quot;We don&apos;t just build software. We build the intelligence that runs it.&quot;
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
