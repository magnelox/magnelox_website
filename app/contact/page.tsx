"use client";

import ScrollReveal from "../components/ScrollReveal";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Message sent! We'll get back to you shortly.");
    };

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <ScrollReveal>
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
                            Get in <span className="text-gray-400">Touch</span>
                        </h1>
                        <p className="text-gray-600 text-xl mb-12 max-w-md leading-relaxed">
                            Ready to transform your business with AI?
                            Schedule a free consultation with our experts.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-gray-50 rounded-2xl text-black group-hover:bg-black group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">Email Us</p>
                                    <p className="font-bold text-lg text-black">support@magnelox.com</p>
                                    <p className="font-bold text-lg text-black">careers@magnelox.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-gray-50 rounded-2xl text-black group-hover:bg-black group-hover:text-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">Location</p>
                                    <p className="font-bold text-lg text-black">India / Dubai / Netherlands</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-card">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-black mb-2 ml-1">Name</label>
                                    <input required type="text" className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-gray-400" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-black mb-2 ml-1">Email</label>
                                    <input required type="email" className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-gray-400" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-black mb-2 ml-1">Company</label>
                                <input type="text" className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-gray-400" placeholder="Your Company Name" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-black mb-2 ml-1">Service</label>
                                <select className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-black focus:ring-2 focus:ring-black/5 transition-all outline-none cursor-pointer">
                                    <option>AI Automation</option>
                                    <option>Custom Software</option>
                                    <option>Cybersecurity</option>
                                    <option>Cloud Services</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-black mb-2 ml-1">Message</label>
                                <textarea required rows={4} className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-gray-400" placeholder="Tell us about your project..." />
                            </div>

                            <button type="submit" className="w-full py-4 bg-black hover:bg-gray-800 rounded-full text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-floating hover:scale-[1.02] active:scale-[0.98]">
                                <Send size={20} /> Send Message
                            </button>

                            {status && <p className="text-green-600 text-center font-medium bg-green-50 py-3 rounded-xl">{status}</p>}
                        </form>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
