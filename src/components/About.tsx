'use client';

import Image from 'next/image';
import { Reveal, RevealImage, Stagger } from './Reveal';

const META_ROWS = [
  { key: 'name', value: 'Sanjay Mathew' },
  { key: 'age', value: '23' },
  { key: 'role', value: 'product + eng @ YE Stack' },
  { key: 'base', value: 'Kochi, IN' },
];

const STATS = [
  { value: '02', label: 'years professional' },
  { value: '12', label: 'projects shipped' },
  { value: '03', label: 'product teams' },
];

const About = () => {
  return (
    <section id="about" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-content flex-col gap-7 px-5 py-14 md:flex-row md:gap-20 md:px-12 md:py-28">
        {/* Sidebar */}
        <div className="flex w-full shrink-0 flex-col gap-5 md:w-[300px] md:gap-6">
          {/* Mobile card */}
          <Reveal className="md:hidden">
            <div className="flex flex-row gap-4 rounded-[16px] border border-neutral-200 bg-white p-4">
              <RevealImage className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-[10px] ring-1 ring-black/10">
                <Image
                  src="/images/Profile.png"
                  alt="Sanjay Mathew"
                  fill
                  className="object-cover grayscale"
                  sizes="88px"
                  priority
                />
              </RevealImage>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                {META_ROWS.map((row, i) => (
                  <div
                    key={row.key}
                    className={`flex flex-row items-center justify-between ${i === 0 ? '' : 'border-t border-neutral-200 pt-1.5'}`}
                  >
                    <span className="text-[11.5px] text-neutral-500">{row.key}</span>
                    <span className="text-right text-[12px] font-medium text-black">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Desktop card */}
          <Reveal className="hidden md:block">
            <div className="flex flex-col gap-5 rounded-[16px] border border-neutral-200 bg-white p-6">
              <RevealImage className="relative aspect-square w-full overflow-hidden rounded-[10px] ring-1 ring-black/10">
                <Image
                  src="/images/Profile.png"
                  alt="Sanjay Mathew"
                  fill
                  className="object-cover grayscale"
                  sizes="(min-width: 768px) 300px, 100vw"
                  priority
                />
              </RevealImage>
              <div className="flex flex-col gap-2">
                {META_ROWS.map((row, i) => (
                  <div
                    key={row.key}
                    className={`flex flex-row items-center justify-between ${i === 0 ? '' : 'border-t border-neutral-200 pt-2'}`}
                  >
                    <span className="text-[12px] text-neutral-500">{row.key}</span>
                    <span className="text-[12.5px] font-medium text-black">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Body */}
        <div className="flex max-w-[760px] flex-1 flex-col gap-7 md:gap-10">
          <Reveal>
            <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.03em] text-black text-balance md:text-[44px]">
              engineer based in Kochi. two years into product engineering, focused on how AI agents hold context across sessions.
            </h2>
          </Reveal>

          <Stagger className="flex flex-col gap-4 md:gap-5">
            <Stagger.Item>
              <p className="max-w-[65ch] text-[14.5px] leading-[1.7] text-neutral-900 md:text-[15.5px]">
                Started on Java and HTML/CSS in school, then settled into the React + TypeScript stack through college projects. The substance was always in the late-night side builds, not the syllabus.
              </p>
            </Stagger.Item>
            <Stagger.Item>
              <p className="max-w-[65ch] text-[14.5px] leading-[1.7] text-neutral-900 md:text-[15.5px]">
                Interned at Tata Elxsi on autonomous-driving simulation &mdash; collision detection on CARLA + OpenMaps, OTA progress tracking for infotainment firmware. Then 1 year 4 months as a Software Development Engineer at White Rabbit Labs in Kochi: Angular 20 + NgRx applications with 100+ concurrent components, FastAPI microservices, OAuth2 QuickBooks integration with HMAC-secured webhooks, and a Notion-style real-time state layer that cut API calls by 80%.
              </p>
            </Stagger.Item>
            <Stagger.Item>
              <p className="max-w-[65ch] text-[14.5px] leading-[1.7] text-neutral-900 md:text-[15.5px]">
                Now at{' '}
                <a
                  href="https://www.yestack.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline decoration-neutral-200 underline-offset-4 transition-colors hover:decoration-black"
                >
                  YE Stack
                </a>{' '}
                in a hybrid product + engineering role, building{' '}
                <span className="font-medium text-black">Helixis</span> &mdash; a persistent memory layer for AI agents &mdash; and broader systems that map how human cognition actually works.
              </p>
            </Stagger.Item>
          </Stagger>

          <Stagger className="mt-2 grid grid-cols-3 border-t border-neutral-200 md:mt-4">
            {STATS.map((s, i) => (
              <Stagger.Item
                key={s.label}
                className={`flex flex-col gap-1.5 py-4 md:gap-2 md:py-6 ${i < 2 ? 'border-r border-neutral-200' : ''} ${i === 0 ? 'pr-3 md:pr-6' : ''} ${i === 1 ? 'px-3 md:px-6' : ''} ${i === 2 ? 'pl-3 md:pl-6' : ''}`}
              >
                <span className="text-[26px] font-medium leading-none tabular-nums tracking-tight text-black md:text-[40px]">
                  {s.value}
                </span>
                <span className="text-[10.5px] leading-[1.3] text-neutral-500 md:text-[12px]">{s.label}</span>
              </Stagger.Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default About;
