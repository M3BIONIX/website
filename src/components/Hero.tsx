'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const greetings = [
    { text: "Ciao", lang: "Italian", font: "font-serif italic" },
    { text: "Hallo", lang: "German", font: "font-sans font-black" },
    { text: "Hola", lang: "Spanish", font: "font-cursive" },
    { text: "Bonjour", lang: "French", font: "font-serif" },
    { text: "Namaste", lang: "Hindi", font: "font-sans font-light" }
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [cursorTarget, setCursorTarget] = useState('welcome'); // 'welcome', 'intro', 'image'
    const [isCursorArrived, setIsCursorArrived] = useState(false);

    // Greeting Cycle
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % greetings.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    // M3 Cursor Cycle
    useEffect(() => {
        const targets = ['welcome', 'intro', 'image'];
        let currentTargetIndex = 0;

        const cursorInterval = setInterval(() => {
            setIsCursorArrived(false); // Reset arrival state when moving starts
            currentTargetIndex = (currentTargetIndex + 1) % targets.length;
            setCursorTarget(targets[currentTargetIndex]);
        }, 3500); // Reduced to 3.5s for faster pacing

        return () => clearInterval(cursorInterval);
    }, []);

    // M3 Cursor Coordinates
    const getM3Position = (target) => {
        // Adjusted coordinates to be closer to elements and prevent "overshoot" visually
        switch (target) {
            case 'welcome': return { top: '25%', left: '15%' };
            case 'intro': return { top: '65%', left: '20%' }; // Lowered top from 55% to 65%
            case 'image': return { top: '55%', left: '75%' };
            default: return { top: '50%', left: '50%' };
        }
    };

    const m3Position = getM3Position(cursorTarget);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-off-white dark:bg-black cursor-none pt-20 md:pt-0">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.4]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-off-white dark:to-black h-full w-full pointer-events-none" />

            {/* M3 Blue Cursor */}
            <motion.div
                className="absolute z-50 pointer-events-none flex flex-col items-start hidden md:flex"
                animate={{
                    top: m3Position.top,
                    left: m3Position.left,
                    scale: isCursorArrived ? [1, 0.7, 1, 0.7, 1] : 1, // Click pulse when arrived
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    restDelta: 0.001,
                    scale: { duration: 0.3 } // Quick click animation
                }}
                onAnimationComplete={() => setIsCursorArrived(true)}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-400 fill-cyan-400 drop-shadow-md">
                    <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19135L11.7116 12.3673H5.65376Z" stroke="white" strokeWidth="1" />
                </svg>
                <div className="bg-cyan-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-br-md rounded-bl-md shadow-sm ml-2 -mt-1">
                    M3BIONIX
                </div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">

                {/* Left Content */}
                <div className="flex-1 text-left relative w-full md:w-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 0.8
                        }}
                        className="min-h-[160px] md:min-h-[200px] relative p-4 rounded-xl transition-all duration-300"
                    >
                        {/* Selection Border for Welcome Text */}
                        <motion.div
                            className="absolute inset-0 border-2 border-cyan-400 bg-cyan-400/10 rounded-xl pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: (cursorTarget === 'welcome' && isCursorArrived) ? 1 : 0 }} // Only show when cursor arrived
                            transition={{ duration: 0.2 }}
                        >
                            <div className="absolute -top-3 left-4 bg-cyan-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                Heading
                            </div>
                        </motion.div>

                        <div className="flex flex-col md:block">
                            <h1 className="text-7xl md:text-9xl font-serif text-custom-black dark:text-white mb-2 relative flex items-baseline gap-4 md:inline-flex min-h-[1.1em]">
                                <span className="sr-only">Greeting</span>
                                {/* Fixed Width Container for Changing Text to prevent layout shift */}
                                <div className="relative w-[500px] h-[1em] overflow-visible hidden md:block">
                                    <AnimatePresence mode='popLayout'>
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.5, y: 50, filter: 'blur(10px)' }}
                                            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, scale: 0.5, y: -20, filter: 'blur(10px)' }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15
                                            }}
                                            className={`absolute top-0 left-0 whitespace-nowrap ${greetings[index].font}`}
                                        >
                                            {greetings[index].text},
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                                {/* Mobile Fallback without crazy fixed width logic if needed, or just allow shift on mobile */}
                                <div className="md:hidden">
                                    <span className={`${greetings[index].font}`}>{greetings[index].text},</span>
                                </div>
                            </h1>
                            <br className="hidden md:block" />
                            <h1 className="text-7xl md:text-9xl font-sans font-bold tracking-tighter text-custom-black dark:text-white relative md:static leading-none mt-2 inline-block">
                                I am M3.
                            </h1>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-8 relative inline-block group w-full md:w-auto"
                    >
                        {/* Interactive Highlight State triggered by 'cursorTarget' */}
                        <motion.div
                            className="absolute -inset-4 border-2 border-cyan-400 bg-cyan-400/10 rounded-lg transition-all duration-300 pointer-events-none"
                            animate={{
                                opacity: (cursorTarget === 'intro' && isCursorArrived) ? 1 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="absolute -top-3 left-4 bg-cyan-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                Description
                            </div>
                        </motion.div>

                        <p className="relative text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-cyan-400 pl-4 bg-white/50 backdrop-blur-sm p-4 rounded-r-lg dark:bg-zinc-900/50">
                            I am a <span className="font-bold">Full Stack Developer</span> at <span className="font-serif italic font-bold">White Rabbit Group</span>, working on <br className="hidden md:block" />
                            a Notion-based application and projects in Shopify & WordPress.
                        </p>
                    </motion.div>
                </div>

                {/* Right Content - Polaroid & Sticky Note */}
                <div className="flex-1 w-full flex justify-center md:justify-end mt-24 md:mt-0 relative perspective-1000">

                    {/* Sticky Note */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -20, y: -50 }}
                        animate={{ opacity: 1, rotate: -6, y: 0 }}
                        transition={{ delay: 1, type: 'spring' }}
                        className="absolute -top-16 left-4 md:left-20 z-20 w-48 h-48 bg-[#FFF8A8] shadow-lg p-4 flex items-end justify-center transform hover:rotate-0 transition-transform duration-300"
                        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)' }}
                    >
                        {/* Halimun font, centered at bottom */}
                        <p className="font-handwriting text-xl text-gray-800 text-center leading-tight">
                            Make it simple!
                        </p>
                    </motion.div>

                    {/* Polaroid */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            rotate: (cursorTarget === 'image' && isCursorArrived) ? 0 : 6,
                            scale: (cursorTarget === 'image' && isCursorArrived) ? 1.05 : 1,
                            borderColor: (cursorTarget === 'image' && isCursorArrived) ? '#22d3ee' : 'transparent',
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className={`bg-white p-4 pb-12 shadow-2xl w-72 md:w-80 transition-all duration-500 will-change-transform dark:bg-zinc-200 relative border-4 ${cursorTarget === 'image' ? 'border-cyan-400' : 'border-transparent'}`}
                    >
                        {/* Selection Label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: (cursorTarget === 'image' && isCursorArrived) ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute -top-4 -left-1 bg-cyan-400 text-white text-[10px] font-bold px-2 py-1 shadow-sm z-30"
                        >
                            Image
                        </motion.div>

                        {/* Selection Overlay for Image */}
                        <motion.div
                            className="absolute inset-0 bg-cyan-400/10 pointer-events-none z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: (cursorTarget === 'image' && isCursorArrived) ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                        />

                        <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                            <img src="/images/fam.jpeg" alt="Gowtham Oleti" className="object-cover w-full h-full" />
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <span className="text-4xl text-black/20">📷</span>
                            </div>
                        </div>
                        <p className="text-center font-cursive text-2xl text-gray-600 mt-4 rotate-[-2deg]">me.jpeg</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
