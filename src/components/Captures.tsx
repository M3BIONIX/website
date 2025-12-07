'use client';
import { motion } from 'framer-motion';

const captures = [
    '/images/captures/PXL_20250126_065706437.MP~2.jpg',
    '/images/captures/PXL_20250126_065759694.MP.jpg',
    '/images/captures/PXL_20250126_070608368.MP.jpg',
    '/images/captures/PXL_20250706_080109431.jpg',
    '/images/captures/PXL_20251012_041604641.jpg',
    '/images/captures/PXL_20251128_123702278.jpg',
];

const Captures = () => {
    return (
        <section id="captures" className="relative bg-custom-black py-24 min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white/50 text-xs tracking-[0.2em] font-medium uppercase font-sans block mb-4"
                >
                    Captures
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl text-white font-sans font-light"
                >
                    And hey, I love photography.
                </motion.h2>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-8 px-6 md:px-20 overflow-x-auto pb-12 scrollbar-none scrollbar-hide snap-x snap-mandatory">
                {captures.map((src, i) => (
                    <motion.div
                        key={i}
                        className="flex-shrink-0 w-[85vw] md:w-[400px] aspect-[3/4] rounded-3xl overflow-hidden relative snap-center group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <img
                            src={src}
                            alt={`Capture ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Captures;
