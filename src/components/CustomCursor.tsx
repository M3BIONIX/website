'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    // User Custom Cursor Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth user cursor
    const cursorX = useSpring(mouseX, { stiffness: 500, damping: 30 });
    const cursorY = useSpring(mouseY, { stiffness: 500, damping: 30 });

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', moveMouse);
        return () => window.removeEventListener('mousemove', moveMouse);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed z-[9999] pointer-events-none top-0 left-0 hidden md:block"
            style={{ x: cursorX, y: cursorY }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-custom-red fill-custom-red drop-shadow-md -ml-1 -mt-1 transform -rotate-12">
                <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19135L11.7116 12.3673H5.65376Z" stroke="white" strokeWidth="1" />
            </svg>
            <div className="bg-custom-red text-white text-[10px] font-bold px-2 py-0.5 rounded-br-md rounded-bl-md shadow-sm ml-3">
                You
            </div>
        </motion.div>
    );
};

export default CustomCursor;
