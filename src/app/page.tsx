import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import OffTheClock from '@/components/OffTheClock';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import { getCalEvent } from '@/lib/cal';

export default async function Home() {
  // Fetched server-side, cached for 1 hour. Falls back to a sane default if the API fails.
  const calEvent = await getCalEvent('30min');

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <OffTheClock />
      <Skills />
      <Experience />
      <Footer calEvent={calEvent} />
    </main>
  );
}
