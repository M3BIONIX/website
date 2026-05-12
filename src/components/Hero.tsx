'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const formatIST = () =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());

const ISTTime = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatIST());
    const id = setInterval(() => setTime(formatIST()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time ? `${time} IST` : ''}</span>;
};

const HeroLine = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ duration: 1.1, ease: EASE, delay }}
    style={{ willChange: 'filter, transform, opacity' }}
    className="block text-[64px] font-medium leading-[0.92] tracking-[-0.055em] text-black text-balance md:text-[140px] lg:text-[180px] lg:tracking-[-0.06em]"
  >
    {children}
  </motion.span>
);

const Hero = () => {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-5 pt-10 pb-14 md:gap-14 md:px-12 md:pt-24 md:pb-32">
        {/* Meta row — location + time, no eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-row items-center justify-end"
        >
          <div className="flex flex-row items-center gap-2">
            <span className="text-[12.5px] font-medium text-black md:text-[13px]">
              Kochi, Kerala &middot; <ISTTime />
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="flex max-w-[1300px] flex-col gap-1">
          <HeroLine delay={0.1}>Sanjay</HeroLine>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:gap-10">
            <HeroLine delay={0.25}>Mathew.</HeroLine>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
              className="flex max-w-[420px] flex-col gap-2 md:pb-10"
            >
              <span className="text-[11.5px] font-medium text-neutral-500 md:text-[12px]">a note</span>
              <span className="text-[14.5px] leading-[1.6] text-neutral-900">
                product + engineering for AI agents. I write software, take photographs, and assemble small FPV drones from parts. mostly I&apos;m curious about how systems hold attention &mdash; both the software kind and the human kind.
              </span>
            </motion.div>
          </div>
        </div>

        {/* Footer practices — 3 cells, no scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
          className="flex flex-col gap-0 border-t border-neutral-200 md:grid md:grid-cols-12 md:gap-8 md:pt-10"
        >
          {/* Mobile-only vertical strip */}
          <div className="flex flex-col md:hidden">
            <div className="flex flex-row items-center justify-between border-b border-neutral-200 py-3">
              <span className="text-[12px] text-neutral-500">professional</span>
              <span className="text-[12.5px] font-medium text-black tabular-nums">02 years &middot; Tata Elxsi &rarr; YE Stack</span>
            </div>
            <div className="flex flex-row items-center justify-between border-b border-neutral-200 py-3">
              <span className="text-[12px] text-neutral-500">building drones</span>
              <span className="text-[12.5px] font-medium text-black tabular-nums">17 crashes survived</span>
            </div>
            <div className="flex flex-row items-start justify-between gap-3 py-3">
              <span className="shrink-0 text-[12px] text-neutral-500">currently</span>
              <span className="max-w-[220px] text-right text-[12.5px] font-medium text-black">
                product + memory layer at{' '}
                <a
                  href="https://www.yestack.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-black"
                >
                  YE Stack
                </a>
              </span>
            </div>
          </div>

          {/* Desktop 12-col grid */}
          <div className="col-span-3 hidden flex-col gap-1.5 md:flex">
            <span className="text-[11.5px] font-medium text-neutral-500">professional experience</span>
            <span className="text-[15px] leading-[1.4] tabular-nums text-black">02 years &middot; Tata Elxsi &rarr; YE Stack</span>
          </div>
          <div className="col-span-3 hidden flex-col gap-1.5 md:flex">
            <span className="text-[11.5px] font-medium text-neutral-500">building drones</span>
            <span className="text-[15px] leading-[1.4] tabular-nums text-black">17 crashes survived</span>
          </div>
          <div className="col-span-6 hidden flex-col gap-1.5 border-l border-neutral-200 pl-7 md:flex">
            <span className="text-[11.5px] font-medium text-neutral-500">currently &middot; the day job</span>
            <span className="text-[15px] leading-[1.4] text-black">
              product + memory layer at{' '}
              <a
                href="https://www.yestack.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-neutral-200 underline-offset-4 transition-colors hover:decoration-black"
              >
                YE Stack
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
