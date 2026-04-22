'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/sections/Footer';
import { scrollToTarget } from '@/lib/site-navigation';

type AppShellProps = {
  children: ReactNode;
};

const RouteEffects = () => {
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const hash = window.location.hash;

      if (hash) {
        scrollToTarget(hash);
      } else {
        scrollToTarget(0, { immediate: true, offset: 0 });
      }

      window.lenis?.resize();
    }, 120);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        scrollToTarget(window.location.hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return null;
};

const AppShell = ({ children }: AppShellProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    window.lenis = lenis;

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return (
    <>
      <RouteEffects />
      <Analytics />
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden font-space">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default AppShell;
