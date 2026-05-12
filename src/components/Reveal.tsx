'use client';

import { motion, type MotionProps, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: 'div' | 'section' | 'article' | 'span' | 'li' | 'header' | 'footer' | 'nav';
};

/** Fade + translate up reveal on scroll-in. Fires once. */
export const Reveal = ({ children, className, delay = 0, y = 24, duration = 0.7, as = 'div' }: RevealProps) => {
  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration, ease: EASE, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

type RevealImageProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  blur?: number;
};

/** Blur-to-clear + fade reveal — intended to wrap an `<Image>` or visual block. */
export const RevealImage = ({ children, className, delay = 0, blur = 20 }: RevealImageProps) => (
  <motion.div
    initial={{ opacity: 0, filter: `blur(${blur}px)`, scale: 1.04 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
    viewport={{ once: true, margin: '-5% 0px -10% 0px' }}
    transition={{ duration: 1.1, ease: EASE, delay }}
    style={{ willChange: 'filter, transform, opacity' }}
    className={className}
  >
    {children}
  </motion.div>
);

const STAGGER_PARENT: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const STAGGER_CHILD: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Parent for staggered children reveals. Use with <Stagger.Item>. */
export const Stagger = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={STAGGER_PARENT}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-5% 0px' }}
    className={className}
  >
    {children}
  </motion.div>
);

Stagger.Item = function StaggerItem({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & MotionProps) {
  return (
    <motion.div variants={STAGGER_CHILD} className={className} {...rest}>
      {children}
    </motion.div>
  );
};
