"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 lg:px-24 py-10 flex justify-between items-center pointer-events-none"
        >
            <div className="font-mono text-[10px] tracking-tighter flex flex-col pointer-events-auto cursor-default">
                <span className="text-zinc-400 uppercase tracking-widest leading-none mb-1">ENGINEER</span>
                <span className="text-black font-black text-xs tracking-widest leading-none">AYAAN BARGIR</span>
            </div>

            <div className="flex gap-12 pointer-events-auto">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Work</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </div>

            <div className="hidden md:flex gap-8 pointer-events-auto items-center">
                <SocialIcon icon={<Github className="w-4 h-4" />} href="https://github.com/ayaanbargir" />
                <SocialIcon icon={<Linkedin className="w-4 h-4" />} href="https://linkedin.com/in/ayaanbargir" />
            </div>
        </motion.nav>
    );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-xs uppercase font-mono tracking-widest text-zinc-600 hover:text-black transition-colors duration-300"
        >
            {children}
        </a>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-black transition-colors"
        >
            {icon}
        </a>
    );
}
