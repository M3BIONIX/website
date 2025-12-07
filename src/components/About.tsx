'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    const [activeTab, setActiveTab] = useState('Story');

    const tabs = ['Story', 'TL;DR', 'Timeline'];

    const content = {
        Story: (
            <div className="space-y-6 text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-4xl font-sans">
                <p>
                    I am from <span className="font-bold text-black dark:text-white">Angamaly, Kerala</span>. My journey into tech wasn't straightforward—we didn't even have a computer until 2018. We didn't really know what to look for, so we ended up buying a PC with really low specs. But that limitation became a blessing; I had to learn how to <span className="italic">hack games</span> just to make them run. That necessity sparked my passion for software—I wasn't just playing anymore, I was figuring out how things worked under the hood.
                </p>
                <p>
                    It was a cycle of breaking the computer, fixing it, and breaking it again. My first big win was figuring out how to boot Windows from a pen drive. Then came the code. My brother had a text with a Java clock program. I copied it line-by-line, and seeing it work was magic. By 10th grade (2020), I found HTML & CSS, and I was hooked.
                </p>
                <p>
                    In 2021, I got my first personal laptop. I thought I'd use it for gaming, but I pivoted hard to software. Everyone in college was chasing Flutter, but I said, <span className="font-serif italic font-bold">"Screw it, let's study React."</span>
                </p>
                <p>
                    <span className="bg-yellow-200 dark:bg-yellow-900/50 px-1 rounded-sm">Fun fact:</span> In college, we had no reliable internet. But Vodafone offered free data from <span className="font-bold">12 AM to 6 AM</span>. So, I became a night owl, staying up just to download packages and build apps. That grind taught me everything.
                </p>
                <p>
                    Now in 2025, I am 23 years old and working as a <span className="font-bold text-black dark:text-white">Software Developer at White Rabbit Group</span>. I build Notion-based applications, Shopify/WordPress projects, and I go absolutely crazy for <span className="bg-cyan-400/20 px-1 rounded-sm text-cyan-700 dark:text-cyan-300 font-bold">AI models</span>.
                </p>
            </div>
        ),
        'TL;DR': (
            <div className="text-xl md:text-3xl text-gray-400 dark:text-zinc-600 leading-snug max-w-5xl font-sans font-medium">
                <span className="text-black dark:text-white">I am M3</span>, a <span className="text-black dark:text-white">Full Stack Developer</span> from Kerala.
                My journey began with <span className="text-black dark:text-white">hacking low-spec PCs</span> in 2018, which led me to <span className="text-black dark:text-white">learn coding</span> using <span className="text-black dark:text-white">free midnight data</span>.
                I <span className="text-black dark:text-white">pivoted to building apps</span> and now, <span className="text-black dark:text-white">at White Rabbit Group</span>, I
                <span className="text-black dark:text-white"> build Notion apps</span> and experiment with <span className="text-black dark:text-white">AI models</span>.
            </div>
        ),
        'Timeline': (
            <div className="space-y-8 text-lg md:text-xl text-gray-800 dark:text-gray-300 border-l-2 border-gray-200 dark:border-zinc-800 pl-8 ml-4">
                <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black"></div>
                    <div className="font-bold text-2xl mb-1">2025</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">White Rabbit Group</div>
                    <div>Full Stack Developer working on Notion apps, AI, and Web platforms.</div>
                </div>
                <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-300 dark:bg-zinc-700 border-4 border-white dark:border-black"></div>
                    <div className="font-bold text-2xl mb-1">2021</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">The Pivot</div>
                    <div>Got my first laptop. Shifted focus from gaming to React & Mobile Dev.</div>
                </div>
                <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-300 dark:bg-zinc-700 border-4 border-white dark:border-black"></div>
                    <div className="font-bold text-2xl mb-1">2020</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">10th Standard</div>
                    <div>Introduction to HTML & CSS. The spark begins.</div>
                </div>
                <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-300 dark:bg-zinc-700 border-4 border-white dark:border-black"></div>
                    <div className="font-bold text-2xl mb-1">2018</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">8th Standard</div>
                    <div>First PC. Hacking games on low RAM. Installing Windows from scratch.</div>
                </div>
            </div>
        )
    };

    return (
        <section id="story" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 md:mb-0"
                    >
                        About
                    </motion.h2>

                    <div className="bg-gray-100 dark:bg-zinc-900 p-1 rounded-full flex gap-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab ? 'bg-white dark:bg-zinc-800 shadow-sm text-black dark:text-white' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }}
                    className="mb-8"
                >
                    {content[activeTab]}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
