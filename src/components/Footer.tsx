'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf } from 'lucide-react';
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const Footer = () => {
    const [aqi, setAqi] = useState<number | null>(null);

    useEffect(() => {
        const fetchAQI = async () => {
            try {
                // Angamaly, Kerala coordinates: 10.1833° N, 76.3833° E
                const response = await fetch(
                    'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=10.1833&longitude=76.3833&current=european_aqi'
                );
                const data = await response.json();
                if (data.current?.european_aqi) {
                    setAqi(Math.round(data.current.european_aqi));
                }
            } catch (error) {
                console.error('Failed to fetch AQI:', error);
                setAqi(null);
            }
        };
        fetchAQI();
    }, []);

    const getAqiColor = (value: number | null) => {
        if (value === null) return 'text-gray-400';
        if (value <= 50) return 'text-green-500';
        if (value <= 100) return 'text-yellow-500';
        if (value <= 150) return 'text-orange-500';
        return 'text-red-500';
    };

    return (
        <footer className="py-20 bg-off-white dark:bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-serif text-custom-black dark:text-white mb-6">
                        Ready to start?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                        Let's create something amazing together. Drop me a line and let's get the conversation started.
                    </p>

                    {/* Contact Button - mailto */}
                    <motion.a
                        href="mailto:mathewsanjay37@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-accent-green font-mono text-lg tracking-widest uppercase overflow-hidden mb-16 rounded-sm"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
                    >
                        <span className="relative z-10 font-bold dark:text-black">C0NTACT_N0W</span>
                        <div className="absolute inset-0 bg-accent-green/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </motion.a>

                    {/* Social Links */}
                    <div className="flex justify-center gap-8 mb-12">
                        <a href="https://x.com/m3bionix" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-custom-black dark:hover:text-white transition-colors">
                            <FaXTwitter size={20} />
                            <span className="hidden md:inline">Twitter</span>
                        </a>
                        <a href="https://www.linkedin.com/in/sanjay-mathew34/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-custom-black dark:hover:text-white transition-colors">
                            <FaLinkedinIn size={20} />
                            <span className="hidden md:inline">LinkedIn</span>
                        </a>
                        <a href="https://github.com/M3BIONIX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-custom-black dark:hover:text-white transition-colors">
                            <FaGithub size={20} />
                            <span className="hidden md:inline">GitHub</span>
                        </a>
                    </div>

                    {/* Location & AQI */}
                    <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-zinc-900 px-4 py-2 rounded-full text-xs text-gray-500 mb-8">
                        <span>Angamaly, Kerala</span>
                        <span>•</span>
                        <span className={getAqiColor(aqi)}>
                            {aqi !== null ? `AQI ${aqi}` : 'Loading...'}
                        </span>
                        <Leaf size={12} className={getAqiColor(aqi)} />
                    </div>

                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                        Designed and Developed with love <Heart size={14} className="text-red-400 fill-red-400" />
                    </div>

                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
