import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-24 pb-12 px-6 mt-32 rounded-t-[3rem] relative overflow-hidden">
            {/* Top Glow Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-ag-cyan via-ag-magenta to-ag-yellow opacity-50 blur-[2px]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-ag-blue/10 blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">

                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="flex items-center gap-2 mb-6 group hover:opacity-80 transition-opacity relative w-48 h-12">
                        <Image
                            src="/Magnelox.png"
                            alt="Magnelox Logo"
                            fill
                            className="object-contain object-left brightness-0 invert"
                        />
                    </Link>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
                        Building intelligent, secure, and automated digital ecosystems for the enterprise of tomorrow.
                    </p>
                   <div className="flex gap-4">

    {/* LinkedIn */}
    <Link
        href="https://www.linkedin.com/company/magnelox/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
    >
        <Linkedin size={20} />
    </Link>

    {/* Instagram */}
    <Link
        href="https://www.instagram.com/magnelox"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
    >
        <Instagram size={20} />
    </Link>

    {/* Email */}
    <Link
        href="mailto:support@magnelox.com"
        className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
    >
        <Mail size={20} />
    </Link>

</div>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-8 text-white/40 uppercase tracking-widest text-xs">Services</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link href="/services" className="hover:text-ag-cyan transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-6 text-ag-cyan" /> AI Automation</Link></li>
                        <li><Link href="/services" className="hover:text-ag-cyan transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-6 text-ag-cyan" /> Custom Software</Link></li>
                        <li><Link href="/cybersecurity" className="hover:text-ag-cyan transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-6 text-ag-cyan" /> Cybersecurity</Link></li>
                        <li><Link href="/cloud" className="hover:text-ag-cyan transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-6 text-ag-cyan" /> Cloud Services</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-8 text-white/40 uppercase tracking-widest text-xs">Contact</h3>
                    <ul className="space-y-6 text-gray-400">
                        <li className="flex items-start gap-4 group">
                            <Mail size={20} className="mt-0.5 text-white group-hover:text-ag-magenta transition-colors" />
                            <span>support@magnelox.com<br />careers@magnelox.com</span>
                        </li>
                        <li className="flex items-start gap-4 group">
                            <MapPin size={20} className="mt-0.5 text-white group-hover:text-ag-yellow transition-colors" />
                            <span>India </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Magnelox. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
