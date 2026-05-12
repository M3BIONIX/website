import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Sanjay Mathew — m3bionix',
  description:
    'Sanjay Mathew. engineer based in Kochi. I write software, take photographs, and assemble small FPV drones from parts.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="bg-white text-black font-sans antialiased">{children}</body>
    </html>
  );
}
