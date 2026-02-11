"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-white/20 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-2 group relative w-40 h-10">
                    <Image
                        src="/Magnelox.png"
                        alt="Magnelox Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8 text-black font-medium text-sm">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="hover:text-ag-blue transition-colors relative group">
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ag-cyan to-ag-magenta transition-all group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href="/contact">
                        <button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-all hover:shadow-glow-cyan hover:scale-105 active:scale-95 border border-transparent hover:border-ag-cyan/50">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black hover:text-ag-cyan transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in slide-in-from-top-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-black text-lg font-medium hover:text-ag-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <button className="w-full mt-2 px-5 py-3 bg-black text-white rounded-full font-medium hover:shadow-glow-magenta transition-shadow">
                                Get Started
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
