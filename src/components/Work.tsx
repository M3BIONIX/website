'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Work = () => {
    const [isBlue, setIsBlue] = useState(true);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
    const [cursorScope, animateCursor] = useAnimate();

    useEffect(() => {
        if (!isInView) return;

        const runAnimation = async () => {
            await animateCursor(cursorScope.current, { x: 120, y: -100, opacity: 0, scale: 1 }, { duration: 0 });
            await animateCursor(cursorScope.current, { x: 120, y: 80, opacity: 1 }, { duration: 0.8, ease: "easeOut" });
            await animateCursor(cursorScope.current, { scale: 0.7 }, { duration: 0.08 });
            await animateCursor(cursorScope.current, { scale: 1 }, { duration: 0.08 });
            setIsBlue(prev => !prev);
            await animateCursor(cursorScope.current, { y: -150, opacity: 0 }, { duration: 0.6, ease: "easeIn", delay: 0.3 });
        };

        runAnimation();
        const interval = setInterval(runAnimation, 6000);
        return () => clearInterval(interval);
    }, [isInView, animateCursor, cursorScope]);

    return (
        <section id="work" ref={sectionRef} className="py-32 bg-[#F8F9FA] dark:bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header with Interaction */}
                <div className="relative mb-20 inline-block">
                    <div className="flex flex-col items-start leading-none relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-sans font-light tracking-tight text-gray-800 dark:text-gray-200 uppercase"
                        >
                            Selected
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`relative text-6xl md:text-8xl font-serif italic font-bold transition-all duration-300 ${isBlue ? 'text-cyan-500' : 'text-gray-800 dark:text-gray-200'}`}
                        >
                            works
                            <span
                                className={`absolute inset-0 bg-cyan-400/10 rounded-lg transition-opacity duration-300 ${isBlue ? 'opacity-100' : 'opacity-0'}`}
                                style={{ margin: '-4px -8px', padding: '4px 8px' }}
                            />
                            <span
                                className={`absolute inset-0 border-2 border-cyan-400 rounded-lg transition-opacity duration-300 ${isBlue ? 'opacity-100' : 'opacity-0'}`}
                                style={{ margin: '-4px -8px' }}
                            />
                        </motion.span>
                    </div>

                    {/* Autonomous Blue Cursor */}
                    <motion.div
                        ref={cursorScope}
                        initial={{ x: 120, y: -100, opacity: 0, scale: 1 }}
                        className="absolute z-20 pointer-events-none"
                        style={{ left: '0', top: '0' }}
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                            <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19117L11.7841 12.3673H5.65376Z" fill="#22D3EE" stroke="white" strokeWidth="1" />
                        </svg>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Project 1: Kshree */}
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/3] bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden mb-6 relative shadow-sm border border-gray-100 dark:border-zinc-800 group-hover:shadow-xl transition-all duration-500">
                            <img
                                src="/images/kshree.svg"
                                alt="Kshree"
                                className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-white dark:bg-black p-3 rounded-full flex items-center justify-center shadow-lg">
                                    <ArrowUpRight className="w-6 h-6 text-black dark:text-white" />
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                                <span>• Academic Project</span>
                                <span>• Service Design</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Kshree</h3>
                            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                                Improving communication and care in old age homes through an integrated design system.
                            </p>
                        </div>
                    </div>

                    {/* Project 2: Agenic Website */}
                    <a
                        href="https://m3bionix.substack.com/p/website-mcp-tools-accessibility-for?r=6hsfd0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer block mt-0 md:mt-24"
                    >
                        <div className="aspect-[4/3] bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden mb-6 relative shadow-sm border border-gray-100 dark:border-zinc-800 group-hover:shadow-xl transition-all duration-500">
                            <img
                                src="/images/agenic_card.png"
                                alt="Agenic Website"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" /> {/* Subtle overlay */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-white dark:bg-black p-3 rounded-full flex items-center justify-center shadow-lg">
                                    <ArrowUpRight className="w-6 h-6 text-black dark:text-white" />
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase">
                                <span>• Substack</span>
                                <span>• AI Integration</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Agenic Website</h3>
                            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                                Exploring Website MCP Tools Accessibility & AI integration strategies.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Work;
