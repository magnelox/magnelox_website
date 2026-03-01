"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    delay?: number;
    href?: string;
}

export default function ServiceCard({ title, description, icon, delay = 0, href }: ServiceCardProps) {
    const CardContent = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={`glass-panel rounded-3xl p-8 hover:shadow-floating hover:shadow-glow-cyan/20 transition-all duration-500 group relative overflow-hidden border border-white/60 hover:border-ag-cyan/30 bg-gradient-to-br from-white/80 to-white/40 h-full ${href ? 'cursor-pointer' : ''}`}
        >
            {/* Subtle colorful blob background on hover */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-ag-cyan/5 rounded-full blur-3xl group-hover:bg-ag-cyan/20 transition-colors duration-500"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-ag-magenta/5 rounded-full blur-3xl group-hover:bg-ag-magenta/20 transition-colors duration-500"></div>

            <div className="mb-6 text-black p-3 bg-white shadow-sm rounded-2xl w-fit group-hover:bg-black group-hover:text-white transition-colors duration-300 relative z-10">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-black mb-3 group-hover:translate-x-1 transition-transform relative z-10">
                {title}
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-sm relative z-10">
                {description}
            </p>

            {href && (
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 z-10">
                    <ArrowUpRight className="text-black" />
                </div>
            )}
        </motion.div>
    );

    return href ? (
        <Link href={href} className="block h-full">
            {CardContent}
        </Link>
    ) : (
        <div className="h-full">
            {CardContent}
        </div>
    );
}
