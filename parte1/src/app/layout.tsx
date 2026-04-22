import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import AppShell from '@/components/AppShell';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Positivus - Digital Marketing Agency',
  description: 'Positivus is a digital marketing agency website built with Next.js.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-positivus.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon-positivus.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
