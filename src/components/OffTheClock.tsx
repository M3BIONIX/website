'use client';

import Image from 'next/image';
import { PiArrowUpRightBold } from 'react-icons/pi';
import { Reveal, RevealImage, Stagger } from './Reveal';

const PHOTOS = [
  '/images/captures/PXL_20251128_123702278.jpg',
  '/images/captures/PXL_20251012_041604641.jpg',
  '/images/captures/PXL_20250706_080109431.jpg',
  '/images/captures/PXL_20250126_065706437.MP~2.jpg',
  '/images/captures/PXL_20250126_065759694.MP.jpg',
  '/images/captures/PXL_20250126_070608368.MP.jpg',
];

const DRONE_IMAGE = '/images/projects/drone.jpg';

const ArrowButton = ({ dark }: { dark: boolean }) => (
  <span
    className={[
      'flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] cursor-pointer transition-colors duration-200 md:h-10 md:w-10 md:rounded-[14px]',
      dark ? 'bg-neutral-900 hover:bg-neutral-800' : 'border border-neutral-200 bg-white hover:bg-neutral-100',
    ].join(' ')}
  >
    <PiArrowUpRightBold className={`h-3.5 w-3.5 ${dark ? 'text-white' : 'text-black'} md:h-4 md:w-4`} />
  </span>
);

const OffTheClock = () => {
  return (
    <section id="off-the-clock" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-content flex-col gap-7 px-5 py-14 md:gap-14 md:px-12 md:py-28">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-[720px] flex-col gap-3 md:gap-4">
              <h2 className="text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-black text-balance md:text-[60px] md:leading-[1.02] md:tracking-[-0.045em] lg:text-[64px]">
                two things I do when the laptop is closed.
              </h2>
            </div>
            <span className="text-[13.5px] leading-[1.6] text-neutral-500 md:max-w-[320px] md:text-right md:text-[14px] md:leading-[1.65]">
              a small photo hobby shot around Kerala, and an ongoing fight with a 5-inch FPV drone I am slowly learning to fly without crashing.
            </span>
          </div>
        </Reveal>

        <Stagger className="flex flex-col gap-5 md:flex-row md:items-stretch">
          {/* --- Photography card --- */}
          <Stagger.Item className="w-full md:w-[58.33%] md:shrink-0">
            <article className="flex h-full w-full flex-col overflow-hidden rounded-[20px] border border-neutral-200 bg-white md:rounded-[24px]">
              {/* Mobile image collage */}
              <div className="flex flex-col gap-1 p-1 md:hidden">
                <RevealImage className="relative h-[200px] w-full">
                  <Image
                    src={PHOTOS[0]}
                    alt="Kerala — Pixel 9 capture"
                    fill
                    className="rounded-[16px] object-cover ring-1 ring-inset ring-black/10"
                    sizes="100vw"
                  />
                </RevealImage>
                <div className="grid grid-cols-3 gap-1">
                  {PHOTOS.slice(1, 4).map((src, i) => (
                    <RevealImage key={i} delay={0.05 + i * 0.05} className="relative h-[72px] w-full">
                      <Image src={src} alt="" fill className="rounded-[8px] object-cover ring-1 ring-inset ring-black/10" sizes="33vw" />
                    </RevealImage>
                  ))}
                </div>
              </div>
              {/* Desktop image collage */}
              <div className="hidden h-[320px] shrink-0 flex-row gap-1 p-1 md:flex">
                <RevealImage className="relative h-full w-[58%] shrink-0">
                  <Image
                    src={PHOTOS[0]}
                    alt="Kerala — Pixel 9 capture"
                    fill
                    className="rounded-[16px] object-cover ring-1 ring-inset ring-black/10"
                    sizes="430px"
                  />
                </RevealImage>
                <div className="flex h-full flex-1 flex-col gap-1">
                  <RevealImage delay={0.08} className="relative flex-1">
                    <Image
                      src={PHOTOS[1]}
                      alt=""
                      fill
                      className="rounded-[12px] object-cover ring-1 ring-inset ring-black/10"
                      sizes="290px"
                    />
                  </RevealImage>
                  <RevealImage delay={0.16} className="relative flex-1">
                    <Image
                      src={PHOTOS[2]}
                      alt=""
                      fill
                      className="rounded-[12px] object-cover ring-1 ring-inset ring-black/10"
                      sizes="290px"
                    />
                  </RevealImage>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-3 px-5 py-5 md:gap-4 md:px-7 md:py-6">
                <div className="flex flex-row items-start justify-between gap-2">
                  <div className="flex flex-row flex-wrap items-center gap-1.5 md:gap-2">
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10.5px] font-medium text-black md:px-2.5 md:py-1 md:text-[11.5px]">
                      photography
                    </span>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10.5px] text-neutral-500 md:px-2.5 md:py-1 md:text-[11.5px]">
                      Pixel 9 &middot; small hobby
                    </span>
                  </div>
                  <ArrowButton dark={false} />
                </div>
                <h3 className="text-[20px] font-medium leading-[1.15] tracking-[-0.025em] text-black md:text-[24px]">
                  after the rains.
                </h3>
                <p className="max-w-[560px] text-[13px] leading-[1.6] text-neutral-500 md:text-[14px]">
                  a slow, ongoing series shot mostly between deploys &mdash; canals in Fort Kochi, tea estates in Munnar, monsoon afternoons. I post one or two a month to glass.photo.
                </p>
              </div>
            </article>
          </Stagger.Item>

          {/* --- Drones card --- */}
          <Stagger.Item className="w-full md:flex-1">
            <article className="flex h-full w-full flex-col overflow-hidden rounded-[20px] bg-black md:rounded-[24px]">
              <RevealImage className="relative h-[200px] w-full shrink-0 md:h-[320px]">
                <Image
                  src={DRONE_IMAGE}
                  alt="FPV drone build"
                  fill
                  className="object-cover grayscale ring-1 ring-inset ring-white/10"
                  sizes="(min-width: 768px) 552px, 100vw"
                />
              </RevealImage>
              <div className="flex flex-1 flex-col gap-3 px-5 py-5 md:gap-4 md:px-7 md:py-6">
                <div className="flex flex-row items-start justify-between gap-2">
                  <div className="flex flex-row flex-wrap items-center gap-1.5 md:gap-2">
                    <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[10.5px] font-medium text-white md:px-2.5 md:py-1 md:text-[11.5px]">
                      drones &middot; FPV
                    </span>
                    <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[10.5px] text-neutral-400 md:px-2.5 md:py-1 md:text-[11.5px]">
                      building, not just flying
                    </span>
                  </div>
                  <ArrowButton dark />
                </div>
                <h3 className="text-[20px] font-medium leading-[1.15] tracking-[-0.025em] text-white md:text-[24px]">
                  learning to fly slowly.
                </h3>
                <p className="text-[13px] leading-[1.6] text-neutral-400 md:text-[14px]">
                  I build my own 5-inch FPV drones from parts &mdash; soldering ESCs, flashing PX4, dialling in PID. flying is the least of it; the joy is in the build, the crash, the rebuild.
                </p>
                <div className="mt-auto flex flex-col gap-1 border-t border-neutral-900 pt-2">
                  <div className="flex flex-row items-center justify-between py-0.5">
                    <span className="text-[10.5px] text-neutral-400 md:text-[11.5px]">current build</span>
                    <span className="text-[10.5px] text-white md:text-[11.5px]">5&quot; freestyle &middot; F722</span>
                  </div>
                  <div className="flex flex-row items-center justify-between py-0.5">
                    <span className="text-[10.5px] text-neutral-400 md:text-[11.5px]">firmware</span>
                    <span className="text-[10.5px] text-white md:text-[11.5px]">PX4 &middot; Betaflight 4.5</span>
                  </div>
                  <div className="flex flex-row items-center justify-between py-0.5">
                    <span className="text-[10.5px] text-neutral-400 md:text-[11.5px]">crashes survived</span>
                    <span className="text-[10.5px] tabular-nums text-white md:text-[11.5px]">17</span>
                  </div>
                </div>
              </div>
            </article>
          </Stagger.Item>
        </Stagger>
      </div>
    </section>
  );
};

export default OffTheClock;
