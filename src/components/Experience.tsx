'use client';

import Image from 'next/image';
import { Reveal, Stagger } from './Reveal';

type Row = {
  year: string;
  role: string;
  company: string;
  companyHref?: string;
  place: string;
  note: string;
  tag: string;
  initials: string;
  logoSrc?: string;
  /** Tailwind filter classes to apply to the logo image */
  logoFilter?: string;
  initialsBg: string;
  initialsFg: string;
};

const ROWS: Row[] = [
  {
    year: 'Mar 2026 — Present',
    role: 'product + memory layer',
    company: 'YE Stack',
    companyHref: 'https://www.yestack.io',
    place: 'remote, Kochi',
    note:
      'building Helixis, a persistent memory layer for AI agents, plus broader systems that try to map how human cognition actually works. wear product and engineering hats roughly equally.',
    tag: 'current',
    initials: 'YE',
    // YE Stack favicon is too low-res to look good — use letter monogram instead
    initialsBg: 'bg-black',
    initialsFg: 'text-white',
  },
  {
    year: 'Jul 2024 — Nov 2025',
    role: 'software development engineer',
    company: 'White Rabbit Labs',
    companyHref: 'https://whiterabbit.com',
    place: 'Kochi, Kerala',
    note:
      'Angular 20 + NgRx apps with 100+ concurrent components, FastAPI microservices, OAuth2 QuickBooks integration with HMAC-secured webhooks, Notion-style real-time state that cut API calls by 80%.',
    tag: '1 year 4 months',
    initials: 'WR',
    logoSrc: '/images/logos/whiterabbit.png',
    logoFilter: 'grayscale',
    initialsBg: 'bg-white',
    initialsFg: 'text-black',
  },
  {
    year: 'Jan 2024 — Jun 2024',
    role: 'software engineer intern',
    company: 'Tata Elxsi',
    companyHref: 'https://www.tataelxsi.com',
    place: 'Trivandrum, Kerala',
    note:
      'collision-detection algorithm on CARLA + OpenMaps for autonomous driving research, plus an OTA progress tracker for infotainment firmware with rollback support.',
    tag: 'internship',
    initials: 'TE',
    logoSrc: '/images/logos/tataelxsi.png',
    // brightness-0 + invert turns any logo into a pure-white silhouette → perfect B&W on black bg
    logoFilter: 'brightness-0 invert',
    initialsBg: 'bg-black',
    initialsFg: 'text-white',
  },
  {
    year: 'Nov 2020 — Jun 2024',
    role: 'B.Tech in Computer Science',
    company: 'College of Engineering, Chengannur',
    companyHref: 'https://ceconline.edu',
    place: 'Kerala',
    note:
      'coursework in DSA, DBMS, networking, web dev, and basics of neural networks. did most of my serious projects outside the syllabus.',
    tag: 'education',
    initials: 'CE',
    logoSrc: '/images/logos/ceconline.png',
    logoFilter: 'grayscale',
    initialsBg: 'bg-white',
    initialsFg: 'text-black',
  },
];

const Monogram = ({ row }: { row: Row }) => (
  <span
    aria-hidden
    className={[
      'flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-neutral-200',
      row.initialsBg,
      row.initialsFg,
      'md:h-11 md:w-11',
    ].join(' ')}
  >
    {row.logoSrc ? (
      <Image
        src={row.logoSrc}
        alt={`${row.company} logo`}
        width={32}
        height={32}
        className={`h-7 w-7 object-contain md:h-8 md:w-8 ${row.logoFilter ?? ''}`}
      />
    ) : (
      <span className="text-[12px] font-semibold tracking-tight md:text-[13px]">{row.initials}</span>
    )}
  </span>
);

const Experience = () => {
  return (
    <section id="path" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-14 md:flex-row md:gap-20 md:px-12 md:py-28">
        {/* Sidebar */}
        <Reveal className="flex w-full shrink-0 flex-col gap-3 md:w-[280px] md:gap-5">
          <h2 className="text-[34px] font-medium leading-[1.1] tracking-[-0.035em] text-black text-balance md:text-[36px] md:tracking-[-0.03em]">
            the timeline.
          </h2>
          <p className="max-w-[260px] text-[13.5px] leading-[1.65] text-neutral-500 md:text-[14px]">
            three teams, four years of school, and a fair amount of overlap between the two.
          </p>
        </Reveal>

        {/* Rows */}
        <Stagger className="flex min-w-0 flex-1 flex-col">
          {ROWS.map((item, i) => (
            <Stagger.Item
              key={item.role}
              className={`flex flex-col gap-3 py-5 md:flex-row md:gap-8 md:py-7 ${i === 0 ? 'border-t border-neutral-200' : ''} border-b border-neutral-200`}
            >
              {/* Year + monogram column */}
              <div className="flex flex-row items-center gap-3 md:w-[220px] md:shrink-0 md:flex-col md:items-start md:gap-3">
                <Monogram row={item} />
                <div className="flex flex-1 flex-row items-center justify-between md:w-full md:flex-col md:items-start md:gap-1.5">
                  <span className="text-[12px] font-medium tabular-nums text-black md:text-[13px] md:leading-[1.35]">
                    {item.year}
                  </span>
                  <span className="w-fit rounded-full bg-neutral-100 px-2 py-0.5 text-[10.5px] text-neutral-500 transition-colors duration-200 hover:bg-black hover:text-white md:text-[11px]">
                    {item.tag}
                  </span>
                </div>
              </div>
              {/* Body */}
              <div className="flex min-w-0 flex-1 flex-col gap-2 md:gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[17px] font-medium leading-[1.2] tracking-[-0.02em] text-black md:text-[20px]">
                    {item.role}
                  </h3>
                  <span className="text-[12px] text-neutral-500 md:text-[13px] md:leading-[1.45]">
                    {item.companyHref ? (
                      <a
                        href={item.companyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black underline decoration-neutral-300 underline-offset-2 transition-colors duration-200 hover:decoration-black"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}{' '}
                    &middot; {item.place}
                  </span>
                </div>
                <p className="max-w-[640px] pt-1 text-[13px] leading-[1.6] text-neutral-900 md:text-[14.5px] md:leading-[1.65]">
                  {item.note}
                </p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Experience;
