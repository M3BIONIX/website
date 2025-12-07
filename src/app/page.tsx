'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Captures from '@/components/Captures';
import Footer from '@/components/Footer';

import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white dark:bg-black overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Captures />
      <Footer />
    </main>
  );
}