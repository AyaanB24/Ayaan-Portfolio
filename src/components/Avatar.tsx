"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// The core assets provided by the user
const AVATARS = [
    "/avatar-0.png",    // 0: Hero
    "/avatar-1.png",    // 1: Perspective / About
    "/avatar-4.png",    // 2: Toolkit / Skills
    "/avatar-2.png",    // 3: Artifacts / Projects
    "/avatar-5.png",    // 4: Trajectory / Experience
    "/avatar-3.png",    // 5: Foundation / Education
    "/avatar-0.png",    // 6: Validation / Certificates (Using profile sketch)
    "/avatar-hand.png"  // 7: Contact (Master Hand)
];

// Content is Left, so Avatar is Right: 30%
// Content is Right, so Avatar is Left: -30%
// 25% (Hero) -> -35% (About) -> 45% (Skills - Far Right) -> -35% (Projects) ...


export default function Avatar() {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 30,
        restDelta: 0.001
    });

    const [activeIndex, setActiveIndex] = useState(0);

    // Map progress (0-1) to our 8 sections
    const indexMap = useTransform(smoothProgress,
        [0, 0.12, 0.25, 0.38, 0.5, 0.65, 0.82, 1],
        [0, 1, 2, 3, 4, 5, 6, 7]
    );

    // Map progress for dynamic opacity based on section - 100% Boldness
    const sectionOpacity = useTransform(smoothProgress,
        [0, 0.12, 0.25, 0.38, 0.5, 0.65, 0.82, 1],
        [1, 1, 1, 1, 1, 1, 1, 1] // Permanent 100% Visibility
    );

    // Map progress to horizontal shifts
    const xPos = useTransform(smoothProgress,
        [0, 0.12, 0.25, 0.38, 0.5, 0.65, 0.82, 1],
        ["25%", "-35%", "45%", "-35%", "35%", "-35%", "35%", "-38%"]
    );

    // Dynamic scaling to keep things engaging - High scale at end for reaching effect
    const scale = useTransform(smoothProgress,
        [0, 0.7, 1],
        [1, 1.1, 1.4]
    );

    // Vertical subtle float
    const y = useTransform(smoothProgress, [0, 1], ["0%", "5%"]);

    // Dynamic Atmosphere Color Shift - Spreading the green shade
    const bgColor = useTransform(smoothProgress,
        [0, 0.4, 0.7, 1],
        ["#ffffff", "#f7fff9", "#f0fdf4", "#ecfdf5"]
    );

    const [currentOpacity, setCurrentOpacity] = useState(1);

    useEffect(() => {
        const unsubIndex = indexMap.onChange((v) => {
            const idx = Math.round(v);
            if (idx !== activeIndex) {
                setActiveIndex(idx);
            }
        });

        const unsubColor = bgColor.onChange((v) => {
            document.body.style.backgroundColor = v;
        });

        const unsubOpacity = sectionOpacity.onChange((v) => {
            setCurrentOpacity(v);
        });

        return () => {
            unsubIndex();
            unsubColor();
            unsubOpacity();
        };
    }, [indexMap, activeIndex, bgColor, sectionOpacity]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
            {/* Ambient Atmosphere Glows */}
            <motion.div
                style={{
                    opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.1, 0.2, 0.3, 0.6]),
                    scale: useTransform(smoothProgress, [0, 1], [0.8, 1.2])
                }}
                className="absolute bottom-[-20%] left-[-10%] w-[150%] md:w-[100%] h-[120%] bg-emerald-100 blur-[100px] md:blur-[200px] rounded-full z-[-2]"
            />

            <motion.div
                style={{
                    opacity: useTransform(smoothProgress, [0.5, 1], [0, 0.4]),
                    x: useTransform(smoothProgress, [0, 1], ["20%", "-20%"])
                }}
                className="absolute top-[-10%] right-[-10%] w-[80%] md:w-[60%] h-[80%] bg-emerald-200/50 blur-[100px] md:blur-[150px] rounded-full z-[-1]"
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.9, y: 100 }}
                    animate={{
                        opacity: currentOpacity,
                        scale: 1,
                        y: 0
                    }}
                    exit={{
                        opacity: 0,
                        y: -100,
                        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                        x: xPos,
                        y: y,
                        scale,
                        backgroundImage: `url('${AVATARS[activeIndex]}')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                    }}
                    className={`w-[120%] h-[120%] md:w-full md:h-full bg-no-repeat grayscale brightness-[80%] contrast-[300%] ${activeIndex === 7 ? 'mix-blend-normal' : 'mix-blend-multiply'
                        }`}
                />
            </AnimatePresence>

            {/* Edge Grain Overlay specifically for Avatar depth - softened */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-40 pointer-events-none" />
        </div>
    );
}
