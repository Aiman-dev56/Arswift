"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["impact", "Innovation", "possibilities"];

export default function WordSwitcher() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // little more breathing space

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block h-[1.6em] overflow-hidden align-bottom lg:min-w-[140px] 2xl:min-w-[220px]">

            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}

                    // fade + slight scale (premium feel)
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}

                    transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                    }}

                    className="gradient-text absolute left-0 top-0 whitespace-nowrap"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>

        </span>
    );
}