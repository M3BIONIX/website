'use client';

import { motion } from 'framer-motion';
import {
  PiArrowUpRightBold,
  PiGithubLogoBold,
  PiTwitterLogoBold,
  PiLinkedinLogoBold,
  PiCameraBold,
  PiAsteriskBold,
} from 'react-icons/pi';
import { Reveal, Stagger } from './Reveal';
import type { CalEvent } from '@/lib/cal';

const DETAILS = [
  { label: 'where', value: ['Kochi, Kerala', 'India · UTC+5:30'] },
  { label: 'working hours', value: ['Mon — Fri, 10:00 — 19:00', 'async hours after 21:30'] },
  { label: 'response time', value: ['around 14 hours', 'faster on weekday mornings'] },
  { label: 'previously at', value: ['White Rabbit Labs · SDE, 2024 — 25', 'Tata Elxsi · intern, 2024'] },
];

const SOCIALS = [
  { icon: PiGithubLogoBold, label: 'github.com/M3BIONIX', href: 'https://github.com/M3BIONIX' },
  { icon: PiTwitterLogoBold, label: 'x.com/m3bionix', href: 'https://x.com/m3bionix' },
  { icon: PiLinkedinLogoBold, label: 'linkedin.com/in/sanjay-mathew34', href: 'https://linkedin.com/in/sanjay-mathew34' },
  { icon: PiCameraBold, label: 'glass.photo/m3bionix', href: '#' },
];

const Footer = ({ calEvent }: { calEvent: CalEvent }) => {
  return (
    <section id="get-in-touch" className="border-t border-neutral-200 bg-black">
      <div className="mx-auto flex max-w-content flex-col gap-7 px-5 pb-0 pt-14 md:gap-0 md:px-12 md:pt-28">
        {/* Hero */}
        <Reveal className="flex flex-col gap-7 pb-10 md:gap-10 md:pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(16px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'filter, transform, opacity' }}
            className="text-[48px] font-medium leading-[1.0] tracking-[-0.04em] text-white text-balance md:text-[120px] md:leading-[0.96] md:tracking-[-0.055em]"
          >
            let&apos;s build something small, together.
          </motion.h2>
          <p className="max-w-[680px] text-[14px] leading-[1.65] text-neutral-400 md:text-[16.5px]">
            best fits: AI agent tooling, memory / context systems, FastAPI or Angular product work, and small research-led builds. day job is at{' '}
            <a
              href="https://www.yestack.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-neutral-700 underline-offset-4 transition-colors duration-200 hover:decoration-white"
            >
              YE Stack
            </a>
            , so I take on side work selectively.
          </p>
          <div className="flex flex-col gap-2.5 pt-2 md:flex-row md:items-center md:gap-3">
            <a
              href="mailto:sanjay.mathewofficial2020@gmail.com"
              className="group flex flex-row items-center justify-between gap-2 rounded-[12px] bg-white py-2 pl-4 pr-2 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(255,255,255,0.18)] md:justify-start md:pl-5"
            >
              <span className="break-all text-[12.5px] font-medium text-black md:text-[14px]">sanjay.mathewofficial2020@gmail.com</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-black md:h-8 md:w-8">
                <PiArrowUpRightBold className="h-3.5 w-3.5 text-white" />
              </span>
            </a>
            <a
              href={calEvent.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-between gap-3 rounded-[12px] bg-neutral-900 px-4 py-3 transition-colors duration-200 hover:bg-neutral-800 md:px-5 md:py-2.5"
            >
              <span className="text-[13.5px] font-medium text-white md:text-[14px]">
                book a {calEvent.lengthInMinutes}-min call
              </span>
              <span className="text-[11.5px] text-neutral-400 md:text-[12px]">
                cal.com/{calEvent.username}
              </span>
            </a>
          </div>
        </Reveal>

        {/* Details grid */}
        <Stagger className="grid grid-cols-2 gap-5 border-t border-neutral-900 py-7 md:grid-cols-12 md:gap-8 md:py-10">
          {DETAILS.map((d) => (
            <Stagger.Item key={d.label} className="flex flex-col gap-1 md:col-span-3 md:gap-2">
              <span className="text-[11px] text-neutral-500 md:text-[12px]">{d.label}</span>
              <span className="text-[13px] leading-[1.5] text-white md:text-[14px] md:leading-[1.6]">
                {d.value[0]}
                <br />
                {d.value[1]}
              </span>
            </Stagger.Item>
          ))}
        </Stagger>

        {/* Socials + quote */}
        <Reveal className="flex flex-col gap-7 border-t border-neutral-900 py-7 md:grid md:grid-cols-12 md:gap-8 md:py-10">
          <Stagger className="flex flex-row flex-wrap gap-2 md:col-span-8 md:gap-2.5">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <Stagger.Item key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center gap-2 rounded-full bg-neutral-900 px-3 py-1.5 transition-colors duration-200 hover:bg-white md:gap-2.5 md:px-3.5 md:py-2"
                >
                  <Icon className="h-3.5 w-3.5 text-white transition-colors duration-200 group-hover:text-black" />
                  <span className="text-[12px] text-white transition-colors duration-200 group-hover:text-black md:text-[13px]">{label}</span>
                  <PiArrowUpRightBold className="h-3 w-3 text-neutral-500 transition-colors duration-200 group-hover:text-black" />
                </a>
              </Stagger.Item>
            ))}
          </Stagger>
          <div className="flex flex-col gap-1.5 border-t border-neutral-900 pt-5 md:col-span-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <span className="text-[11px] text-neutral-500 md:text-[12px]">a small reminder</span>
            <span className="text-[16px] font-medium leading-[1.35] text-white md:text-[18px]">
              &ldquo;you always miss the shots you don&apos;t take.&rdquo;
            </span>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <Reveal className="flex flex-row items-center justify-between border-t border-neutral-900 py-5 md:py-8">
          <div className="flex flex-row items-center gap-1.5 md:gap-2.5">
            <PiAsteriskBold className="h-3.5 w-3.5 text-white md:h-4 md:w-4" />
            <span className="text-[11.5px] font-medium text-white md:text-[13px]">m3bionix</span>
            <span className="text-neutral-700">/</span>
            <span className="text-[10.5px] tabular-nums text-neutral-500 md:text-[12px]">&copy; 2018 &mdash; 2026</span>
          </div>
          <span className="hidden text-[12px] text-neutral-500 md:inline">
            built in Kerala &middot; hand-coded, mostly at night
          </span>
          <a href="#top" className="text-[10.5px] font-medium text-white md:text-[12px] hover:underline">
            back to top &uarr;
          </a>
        </Reveal>
      </div>

      {/* Premium polished brand block — sits flush at the very bottom, edge-to-edge */}
      <Reveal className="relative overflow-hidden pt-2 pb-6 md:pt-4 md:pb-10">
        <span className="brand-metallic brand-metallic-shine block select-none whitespace-nowrap text-center font-black leading-[0.86] tracking-[-0.07em] text-[20vw] md:text-[19vw]">
          m3bionix
        </span>
      </Reveal>
    </section>
  );
};

export default Footer;
