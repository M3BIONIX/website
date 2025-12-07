'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [time, setTime] = useState('');
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Time Update
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            setTime(timeString);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Active Section Spy
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['story', 'work', 'captures'];
            const scrollPosition = window.scrollY + 200; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        return; // Found the active section
                    }
                }
            }
            // If at top or no section matches
            if (window.scrollY < 200) setActiveSection('');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'story', label: 'Story' },
        { id: 'work', label: 'Work' },
        { id: 'captures', label: 'Captures' },
    ];

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none"
        >
            <motion.div
                animate={{
                    scaleX: isScrolled ? 0.95 : 1, // Only shrink horizontally
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white border border-gray-100 shadow-sm rounded-full flex items-center pointer-events-auto transition-colors dark:bg-black dark:border-white/10"
                style={{ padding: "0.75rem" }} // Keep vertical padding constant
            >
                {/* Brand & Time */}
                <div className="flex items-center gap-4 pl-4 pr-6 border-r border-gray-100 dark:border-zinc-800">
                    <span className="font-bold text-xl font-sans text-black dark:text-white">M3</span>
                    <div className="bg-gray-100 dark:bg-zinc-900 rounded-full px-3 py-1 flex items-baseline gap-1">
                        <span className="text-sm font-medium text-black dark:text-white tabular-nums">{time}</span>
                        <span className="text-[10px] text-gray-400 font-medium uppercase">IST</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center px-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={`#${link.id}`}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeSection === link.id
                                ? 'text-black dark:text-white'
                                : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="pl-2 pr-1">
                    <button className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200">
                        Get in Touch
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Navbar;
