import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import ScrollReveal from "./components/ScrollReveal";
import HeroScene from "./components/HeroScene";

export default function Home() {
  return (
    <div className="flex flex-col pb-0 min-h-screen relative overflow-hidden bg-transparent">

       {/* Mount the background particle scene */}
      <HeroScene />  
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[100vh] left-0 w-[50vw] h-[50vw] bg-ag-cyan/10 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-70"></div>
      <div className="absolute top-[120vh] right-0 w-[40vw] h-[40vw] bg-ag-magenta/10 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-70"></div>
      <div className="absolute top-[150vh] left-1/4 w-[60vw] h-[60vw] bg-yellow-400/10 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-50"></div>

      <Hero />

      <section className="px-6 max-w-7xl mx-auto w-full py-32 relative z-10">
        <ScrollReveal width="100%">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight max-w-2xl text-balance">
              Autonomous agents. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ag-cyan to-ag-magenta">Secure infrastructure.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-md leading-relaxed">
              We replace manual workflows with intelligent systems that learn, adapt, and scale with your enterprise.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <div className="border-t border-gray-100/50 pt-16 relative">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">Core Capabilities</h3>
            <ServicesGrid />
          </div>
        </ScrollReveal>
      </section>

      {/* Large Text Section */}
      <section className="bg-[#0a0a0a] text-white py-40 px-6 rounded-t-[3rem] -mb-32 z-10 relative overflow-hidden border-t border-ag-cyan/20">
        <div className="absolute inset-0 bg-gradient-to-br from-ag-cyan/10 via-transparent to-ag-magenta/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-ag-cyan/5 rounded-full blur-[150px] -z-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <ScrollReveal width="100%">
            <p className="text-3xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              &quot;We don&apos;t just build software. We build the intelligence that runs it.&quot;
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
