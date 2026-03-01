"use client";

import { motion } from "framer-motion";

export default function BouncingLine({ color }: { color: string }) {
    const bgColor = color === 'ag-cyan' ? 'bg-ag-cyan' : color === 'ag-magenta' ? 'bg-ag-magenta' : color === 'yellow-500' ? 'bg-yellow-500' : 'bg-ag-cyan';
    const shadowColor = color === 'ag-cyan' ? 'shadow-cyan-500/50' : color === 'ag-magenta' ? 'shadow-pink-500/50' : color === 'yellow-500' ? 'shadow-yellow-500/50' : 'shadow-cyan-500/50';

    return (
        <div className="hidden lg:block absolute top-[1.95rem] left-[60%] w-[100%] h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
                className={`h-full w-24 ${bgColor} shadow-[0_0_15px_currentColor] rounded-full blur-[1px] ${shadowColor}`}
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "400%", "-100%"] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
