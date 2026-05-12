'use client';

import { PiAsteriskBold, PiArrowUpRightBold } from 'react-icons/pi';

const NAV_LINKS = [
  { id: 'work', label: 'work' },
  { id: 'about', label: 'about' },
  { id: 'off-the-clock', label: 'off the clock' },
  { id: 'stack', label: 'stack' },
];

const Navbar = () => {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-content flex-row items-center justify-between px-5 py-4 md:px-12 md:py-6">
        <a href="#top" className="flex flex-row items-center gap-2 md:gap-2.5">
          <PiAsteriskBold className="h-[16px] w-[16px] text-black md:h-[18px] md:w-[18px]" />
          <span className="text-[14px] font-medium tracking-tight text-black md:text-[15px]">m3bionix</span>
          <span className="text-[14px] text-neutral-300 md:text-[15px]">/</span>
          <span className="hidden text-[15px] font-normal text-neutral-500 sm:inline">sanjay mathew</span>
          <span className="text-[13px] text-neutral-500 sm:hidden">sanjay</span>
        </a>

        <nav className="hidden flex-row items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[13.5px] font-normal text-neutral-500 transition-colors duration-200 hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#get-in-touch"
          className="flex flex-row items-center gap-1.5 rounded-[8px] bg-black px-3.5 py-2 transition-transform active:scale-[0.96] md:px-4"
        >
          <span className="text-[13px] font-medium text-white">get in touch</span>
          <PiArrowUpRightBold className="h-[13px] w-[13px] text-white" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
