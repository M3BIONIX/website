'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence, type PanInfo, type Variants } from 'framer-motion';
import { PiArrowUpRightBold } from 'react-icons/pi';
import { Reveal, RevealImage, Stagger } from './Reveal';

const PROJECTS = [
  {
    key: 'helixis',
    bg: 'dark',
    image: '/images/projects/helixis.jpg',
    imageAlt: 'Helixis — memory layer for AI agents',
    tags: [
      { text: 'AI · memory', emphasis: true },
      { text: '2026 · @ ye stack', emphasis: false },
    ],
    title: 'Helixis',
    body:
      'a persistent memory layer for AI agents — recalls, pinned context, and tool history so language models can hold longer threads of attention across sessions.',
  },
  {
    key: 'agentic',
    bg: 'light',
    image: '/images/projects/agentic.jpg',
    imageAlt: 'Agentic Website — MCP architecture for browser agents',
    tags: [
      { text: 'dev tools · MCP', emphasis: true },
      { text: '2025', emphasis: false },
    ],
    title: 'Agentic Website',
    body:
      'an architecture that lets sites expose page-specific tools through llms.txt — browser agents invoke them directly, no DOM parsing.',
  },
  {
    key: 'kshree',
    bg: 'light',
    image: '/images/projects/kshree.jpg',
    imageAlt: 'Kshree — microfinance app for Kudumbashree members',
    tags: [
      { text: 'fintech · social', emphasis: true },
      { text: '2024', emphasis: false },
    ],
    title: 'Kshree',
    body:
      "a loan management app for Kudumbashree members — Kerala's women-led microfinance network. tracks group repayments, savings, and disbursal cycles.",
  },
  {
    key: 'astrofilo',
    bg: 'dark',
    image: '/images/projects/astrofilo.jpg',
    imageAlt: 'Astrofilo — real-time rocket launch tracker',
    tags: [
      { text: 'mobile · space', emphasis: true },
      { text: '2024 · React Native', emphasis: false },
    ],
    title: 'Astrofilo',
    body:
      'a real-time rocket launch tracker — every mission in one place, push alerts for ISS passes, and background sync that cuts network calls by 60%.',
  },
] as const;

type Project = (typeof PROJECTS)[number];

const Tag = ({ children, dark, emphasis }: { children: React.ReactNode; dark: boolean; emphasis: boolean }) => (
  <span
    className={[
      'rounded-full px-2.5 py-1 text-[11.5px] transition-colors duration-200',
      dark
        ? emphasis
          ? 'bg-neutral-900 font-medium text-white'
          : 'bg-neutral-900 text-neutral-400'
        : emphasis
        ? 'bg-neutral-100 font-medium text-black'
        : 'bg-neutral-100 text-neutral-500',
    ].join(' ')}
  >
    {children}
  </span>
);

const ArrowButton = ({ dark }: { dark: boolean }) => (
  <span
    className={[
      'flex h-10 w-10 items-center justify-center rounded-[14px] cursor-pointer transition-colors duration-200',
      dark ? 'bg-neutral-900 hover:bg-neutral-800' : 'border border-neutral-200 bg-white hover:bg-neutral-100',
    ].join(' ')}
  >
    <PiArrowUpRightBold className={`h-4 w-4 ${dark ? 'text-white' : 'text-black'}`} />
  </span>
);

const CardContent = ({ project }: { project: Project }) => {
  const dark = project.bg === 'dark';
  return (
    <>
      <div className="flex flex-row items-start justify-between px-5 pt-5 md:px-8 md:pt-8">
        <div className="flex flex-row flex-wrap items-center gap-2">
          {project.tags.map((t) => (
            <Tag key={t.text} dark={dark} emphasis={t.emphasis}>
              {t.text}
            </Tag>
          ))}
        </div>
        <ArrowButton dark={dark} />
      </div>
      <RevealImage className="relative mx-5 mt-4 flex-1 overflow-hidden rounded-[14px] md:mx-8 md:mt-6 md:rounded-[18px]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover grayscale"
          sizes="(min-width: 1024px) 700px, (min-width: 768px) 552px, 100vw"
          quality={85}
        />
        <span
          className={[
            'pointer-events-none absolute inset-0 rounded-[14px] md:rounded-[18px]',
            'ring-1 ring-inset',
            dark ? 'ring-white/10' : 'ring-black/10',
          ].join(' ')}
        />
      </RevealImage>
      <div className="flex flex-col gap-2 px-5 pb-5 pt-4 md:gap-2.5 md:px-8 md:pb-8 md:pt-6">
        <h3
          className={[
            'text-[22px] font-medium leading-[1.1] tracking-[-0.03em] md:text-[28px]',
            dark ? 'text-white' : 'text-black',
          ].join(' ')}
        >
          {project.title}
        </h3>
        <p className={['text-[13px] leading-[1.6] md:text-[14px]', dark ? 'text-neutral-400' : 'text-neutral-500'].join(' ')}>
          {project.body}
        </p>
      </div>
    </>
  );
};

const Card = ({ project, className }: { project: Project; className: string }) => (
  <article className={`flex flex-col overflow-hidden ${className}`}>
    <CardContent project={project} />
  </article>
);

// ---------- Mobile Swipe Stack ----------

const STACK_OFFSETS = [
  { y: 0, leftPx: 0, rightPx: 0, opacity: 1, blur: 0 },
  { y: 510, leftPx: 8, rightPx: 8, opacity: 0.9, blur: 1 },
  { y: 540, leftPx: 16, rightPx: 16, opacity: 0.7, blur: 2.5 },
  { y: 570, leftPx: 24, rightPx: 24, opacity: 0.5, blur: 5 },
];

const FRONT_VARIANTS: Variants = {
  enter: (direction: number) => ({ x: direction * 320, opacity: 0, rotate: direction * 4 }),
  center: { x: 0, opacity: 1, rotate: 0 },
  exit: (direction: number) => ({
    x: direction * -360,
    opacity: 0,
    rotate: direction * -6,
    transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
  }),
};

const SwipePeek = ({ project, dark }: { project: Project; dark: boolean }) => (
  <div className="flex h-full flex-row items-end justify-between rounded-[20px] px-4 pb-3">
    <span className={`text-[12.5px] font-medium ${dark ? 'text-white' : 'text-black'}`}>{project.title}</span>
    <span className={`text-[10px] ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>{project.tags[0].text}</span>
  </div>
);

const MobileSwipeStack = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const ordered = useMemo(() => {
    return PROJECTS.map((project, originalIdx) => {
      const stackPos = (originalIdx - active + PROJECTS.length) % PROJECTS.length;
      return { project, originalIdx, stackPos };
    });
  }, [active]);

  const advance = (dir: 1 | -1) => {
    setDirection(dir);
    setActive((i) => (i + dir + PROJECTS.length) % PROJECTS.length);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const SWIPE_PX = 80;
    const SWIPE_VEL = 400;
    if (info.offset.x < -SWIPE_PX || info.velocity.x < -SWIPE_VEL) advance(1);
    else if (info.offset.x > SWIPE_PX || info.velocity.x > SWIPE_VEL) advance(-1);
  };

  const front = PROJECTS[active];
  const nextProject = PROJECTS[(active + 1) % PROJECTS.length];

  return (
    <div className="flex flex-col gap-7">
      {/* Indicator */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1.5">
          {PROJECTS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-4 bg-black' : 'w-1.5 bg-neutral-300'}`}
            />
          ))}
          <span className="ml-2 text-[11.5px] font-medium tabular-nums text-neutral-500">
            {String(active + 1).padStart(2, '0')} of {String(PROJECTS.length).padStart(2, '0')}
          </span>
        </div>
        <span className="text-[11.5px] font-medium text-black">on top &middot; {front.title}</span>
      </div>

      {/* Stack */}
      <div className="relative h-[640px] w-full select-none">
        {/* Render peek cards in reverse stack-position order (deepest first) so the closer peek is on top of z-stack */}
        {ordered
          .filter((c) => c.stackPos !== 0)
          .sort((a, b) => b.stackPos - a.stackPos)
          .map((c) => {
            const offset = STACK_OFFSETS[c.stackPos];
            const dark = c.project.bg === 'dark';
            return (
              <motion.div
                key={c.project.key}
                animate={{
                  top: offset.y,
                  left: offset.leftPx,
                  right: offset.rightPx,
                  opacity: offset.opacity,
                  filter: `blur(${offset.blur}px)`,
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                className={`absolute h-[60px] rounded-[20px] ${dark ? 'bg-black' : 'border border-neutral-200 bg-white'}`}
                style={{ zIndex: 10 + (PROJECTS.length - c.stackPos) }}
              >
                <SwipePeek project={c.project} dark={dark} />
              </motion.div>
            );
          })}

        {/* Front card with AnimatePresence for swipe-out + swipe-in */}
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.article
            key={front.key}
            custom={direction}
            variants={FRONT_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.35}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: 'grabbing' }}
            className={`absolute left-0 right-0 top-0 flex h-[520px] cursor-grab flex-col overflow-hidden rounded-[24px] shadow-card-elevate ${
              front.bg === 'dark' ? 'bg-black' : 'border border-neutral-200 bg-white'
            }`}
            style={{ zIndex: 40, touchAction: 'pan-y' }}
          >
            <CardContent project={front} />
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Swipe hint */}
      <div className="flex flex-row items-center justify-center gap-2 pt-3 text-[11.5px] text-neutral-500">
        <span>&larr;</span>
        <span>swipe to see {nextProject.title}</span>
        <span>&rarr;</span>
      </div>
    </div>
  );
};

// ---------- Section ----------

const Work = () => {
  const [helixis, agentic, kshree, astrofilo] = PROJECTS;

  return (
    <section id="work" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-content flex-col gap-7 px-5 py-14 md:gap-14 md:px-12 md:py-28">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-[760px] flex-col gap-3 md:gap-4">
              <h2 className="text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-black text-balance md:text-[60px] md:leading-[1.02] md:tracking-[-0.045em] lg:text-[64px]">
                what I&apos;ve shipped.
              </h2>
            </div>
            <div className="flex flex-col gap-2 md:max-w-[320px] md:items-end md:gap-3">
              <span className="text-[13.5px] leading-[1.6] text-neutral-500 md:text-right md:text-[14px] md:leading-[1.65]">
                four projects I&apos;ve put real time into &mdash; an AI memory layer, an agent-friendly web architecture, a microfinance tool for Kerala, and a launch-tracking app.
              </span>
              <span className="hidden text-[12px] font-medium tabular-nums text-black md:inline">04 of 12 shown</span>
            </div>
          </div>
        </Reveal>

        {/* --- DESKTOP BENTO --- */}
        <Stagger className="hidden flex-col gap-5 md:flex">
          <div className="flex flex-row gap-5">
            <Stagger.Item className="w-[58.33%] shrink-0">
              <Card
                project={helixis}
                className="h-[560px] w-full rounded-[24px] bg-black hover:shadow-card-elevate"
              />
            </Stagger.Item>
            <Stagger.Item className="flex-1">
              <Card
                project={agentic}
                className="h-[560px] w-full rounded-[24px] border border-neutral-200 bg-white hover:shadow-card-lift"
              />
            </Stagger.Item>
          </div>
          <div className="flex flex-row gap-5">
            <Stagger.Item className="w-[41.67%] shrink-0">
              <Card
                project={kshree}
                className="h-[560px] w-full rounded-[24px] border border-neutral-200 bg-white hover:shadow-card-lift"
              />
            </Stagger.Item>
            <Stagger.Item className="flex-1">
              <Card
                project={astrofilo}
                className="h-[560px] w-full rounded-[24px] bg-black hover:shadow-card-elevate"
              />
            </Stagger.Item>
          </div>
        </Stagger>

        {/* --- MOBILE SWIPE STACK --- */}
        <Reveal className="md:hidden">
          <MobileSwipeStack />
        </Reveal>

        {/* Quote + archive */}
        <Reveal delay={0.15}>
          <div className="flex flex-col items-start gap-2 pt-3 md:flex-row md:items-center md:justify-center md:gap-3 md:pt-6">
            <span className="text-[14px] italic text-neutral-500 md:text-[15px]">
              &ldquo;you always miss the shots you don&apos;t take.&rdquo;
            </span>
            <span className="hidden text-neutral-200 md:inline">&mdash;</span>
            <a href="#" className="flex flex-row items-center gap-2 transition-colors hover:text-neutral-600">
              <span className="text-[12.5px] font-medium text-black md:text-[13px]">view archive (12 projects)</span>
              <PiArrowUpRightBold className="h-3 w-3 text-black md:h-3.5 md:w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Work;
