"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";

export default function FloatingResume() {
    const { scrollY } = useScroll();

    // As the user scrolls (0 to 300px), fade the button in and scale it
    const opacity = useTransform(scrollY, [0, 200], [0, 1]);
    const scale = useTransform(scrollY, [0, 200], [0.8, 1]);
    const y = useTransform(scrollY, [0, 200], [20, 0]);

    return (
        <motion.a
            href="/resume.pdf"
            target="_blank"
            style={{ opacity, scale, y }}
            className="fixed bottom-10 right-10 z-[60] group flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full shadow-[20px_20px_60px_rgba(0,0,0,0.1)] hover:shadow-[10px_10px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1"
        >
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono leading-none text-zinc-400 uppercase tracking-widest">Ayaan_CV_2024.pdf</span>
                <span className="text-sm font-black uppercase tracking-tighter">Download Resume</span>
            </div>
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                <Download className="w-4 h-4" />
            </div>
        </motion.a>
    );
}
