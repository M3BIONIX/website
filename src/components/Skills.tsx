'use client';

import type { IconType } from 'react-icons';
import { Reveal, Stagger } from './Reveal';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiDart,
  SiHtml5,
  SiAngular,
  SiNgrx,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiFastapi,
  SiNodedotjs,
  SiNestjs,
  SiSqlalchemy,
  SiTailwindcss,
  SiRadixui,
  SiGooglegemini,
  SiVercel,
  SiRedis,
  SiSupabase,
  SiFirebase,
  SiDocker,
  SiGithubactions,
  SiAmazonwebservices,
  SiFigma,
  SiRust,
  SiSwift,
  SiAnthropic,
  SiOpenai,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const ICONS: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  Java: FaJava,
  'SQL (PostgreSQL)': SiPostgresql,
  Dart: SiDart,
  'HTML / CSS': SiHtml5,
  'Angular 20': SiAngular,
  NgRx: SiNgrx,
  'React 19': SiReact,
  'Next.js 16': SiNextdotjs,
  'React Native': SiReact,
  Flutter: SiFlutter,
  FastAPI: SiFastapi,
  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  SQLAlchemy: SiSqlalchemy,
  Tailwind: SiTailwindcss,
  'Radix UI': SiRadixui,
  'Google Gemini': SiGooglegemini,
  'Vercel AI SDK': SiVercel,
  'Mistral AI SDK': SiAnthropic, // visual stand-in — no Mistral logo in SI; Anthropic A reads as "AI"
  'MCP Protocol': SiAnthropic,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Docker: SiDocker,
  'GitHub Actions': SiGithubactions,
  'AWS (EC2, S3, Lambda)': SiAmazonwebservices,
  Vercel: SiVercel,
  Figma: SiFigma,
  Rust: SiRust,
  Swift: SiSwift,
  OpenAI: SiOpenai,
};

const LANGUAGES = ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL (PostgreSQL)', 'Dart', 'HTML / CSS'];
const FRAMEWORKS = [
  'Angular 20',
  'NgRx',
  'RxJS',
  'React 19',
  'Next.js 16',
  'React Native',
  'Flutter',
  'FastAPI',
  'Node.js',
  'NestJS',
  'SQLAlchemy',
  'TanStack Query',
  'Tailwind',
  'Radix UI',
];
const AI_TOOLS = [
  'MCP Protocol',
  'RAG pipelines',
  'vector embeddings',
  'Mistral AI SDK',
  'Google Gemini',
  'Vercel AI SDK',
  'streaming responses',
  'prompt tuning',
];
const INFRA = [
  'PostgreSQL',
  'Redis',
  'IndexedDB',
  'Supabase',
  'Firebase',
  'Convex',
  'Docker',
  'GitHub Actions',
  'AWS (EC2, S3, Lambda)',
  'Vercel',
  'Cursor',
  'Figma',
  'v0',
];
const LEARNING = [
  { name: 'Rust', note: 'weekends' },
  { name: 'PX4 / drone firmware', note: 'evenings' },
  { name: 'small language models', note: 'side projects' },
  { name: 'Swift', note: 'for an iPad app idea' },
];

const Pill = ({ children }: { children: React.ReactNode }) => {
  const text = typeof children === 'string' ? children : '';
  const Icon = ICONS[text];
  return (
    <span className="group/pill flex flex-row items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 text-[12px] font-medium text-black cursor-default transition-colors duration-200 hover:bg-black hover:text-white md:gap-2 md:px-3 md:py-1.5 md:text-[13px]">
      {Icon ? (
        <Icon className="h-3.5 w-3.5 shrink-0 text-black transition-colors duration-200 group-hover/pill:text-white md:h-4 md:w-4" />
      ) : null}
      <span>{children}</span>
    </span>
  );
};

const Group = ({
  title,
  subtitle,
  children,
  last = false,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  last?: boolean;
}) => (
  <Reveal className={`flex flex-col gap-3 md:gap-4 ${last ? '' : 'border-b border-neutral-200 pb-5 md:pb-8'}`}>
    <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-4">
      <span className="text-[12.5px] font-medium text-black md:text-[13px]">{title}</span>
      <span className="text-[11.5px] text-neutral-500 md:text-[13px]">{subtitle}</span>
    </div>
    <Stagger className="flex flex-row flex-wrap gap-1.5 md:gap-2">
      {Array.isArray(children)
        ? children.map((child, i) => (
            <Stagger.Item key={i}>{child}</Stagger.Item>
          ))
        : children}
    </Stagger>
  </Reveal>
);

const Skills = () => {
  return (
    <section id="stack" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-content flex-col gap-7 px-5 py-14 md:flex-row md:gap-20 md:px-12 md:py-28">
        <Reveal className="flex w-full shrink-0 flex-col gap-3 md:w-[300px] md:gap-5">
          <h2 className="text-[34px] font-medium leading-[1.1] tracking-[-0.035em] text-black text-balance md:text-[36px] md:leading-[1.1] md:tracking-[-0.03em]">
            tools I&apos;ve earned opinions on.
          </h2>
          <p className="max-w-[260px] text-[13.5px] leading-[1.65] text-neutral-500 md:text-[14px]">
            the kit I trust day-to-day, and a smaller pile I&apos;m still learning.
          </p>
          <div className="mt-2 flex w-fit flex-row items-center gap-2 rounded-[8px] border border-neutral-200 bg-white px-3 py-2">
            <span className="text-[11.5px] font-medium text-neutral-500">reading now</span>
            <span className="text-[12px] text-black">Designing Data-Intensive Apps</span>
          </div>
        </Reveal>

        <div className="flex flex-1 flex-col gap-5 md:gap-10">
          <Group title="languages" subtitle="the everyday vocabulary">
            {LANGUAGES.map((n) => (
              <Pill key={n}>{n}</Pill>
            ))}
          </Group>
          <Group title="frameworks & runtime" subtitle="where most days are spent">
            {FRAMEWORKS.map((n) => (
              <Pill key={n}>{n}</Pill>
            ))}
          </Group>
          <Group title="AI & agent tooling" subtitle="most of the current work">
            {AI_TOOLS.map((n) => (
              <Pill key={n}>{n}</Pill>
            ))}
          </Group>
          <Group title="data, infra & tools" subtitle="the supporting cast">
            {INFRA.map((n) => (
              <Pill key={n}>{n}</Pill>
            ))}
          </Group>
          <Group title="slowly learning" subtitle="not yet production-ready" last>
            {LEARNING.map((item) => {
              const Icon = ICONS[item.name];
              return (
                <span
                  key={item.name}
                  className="group/learn flex flex-row items-center gap-1.5 rounded-full border border-dashed border-black/30 bg-white px-2.5 py-1 cursor-default transition-colors duration-200 hover:border-black hover:bg-black md:gap-2 md:px-3 md:py-1.5"
                >
                  {Icon ? (
                    <Icon className="h-3.5 w-3.5 shrink-0 text-black transition-colors duration-200 group-hover/learn:text-white md:h-4 md:w-4" />
                  ) : null}
                  <span className="text-[12px] font-medium text-black transition-colors duration-200 group-hover/learn:text-white md:text-[13px]">
                    {item.name}
                  </span>
                  <span className="text-[10.5px] text-neutral-500 transition-colors duration-200 group-hover/learn:text-neutral-300 md:text-[11.5px]">
                    {item.note}
                  </span>
                </span>
              );
            })}
          </Group>
        </div>
      </div>
    </section>
  );
};

export default Skills;
