'use client';

import type { MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const siteLinks = [
  { name: 'About us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Use Cases', href: '#cases' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
] as const;

type ScrollTarget = number | string;

type ScrollOptions = {
  duration?: number;
  immediate?: boolean;
  offset?: number;
};

const scrollElementIntoView = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToTarget = (
  target: ScrollTarget,
  { duration = 1.5, immediate = false, offset = -80 }: ScrollOptions = {},
) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof target === 'number') {
    if (window.lenis) {
      window.lenis.scrollTo(target, { duration, immediate });
    } else {
      window.scrollTo({
        top: target,
        behavior: immediate ? 'auto' : 'smooth',
      });
    }

    return;
  }

  if (window.lenis) {
    window.lenis.scrollTo(target, { duration, immediate, offset });
    return;
  }

  scrollElementIntoView(target);
};

export const useSiteNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (href: string) => {
    if (href.startsWith('/')) {
      router.push(href);
      return;
    }

    if (pathname !== '/') {
      router.push(`/${href}`);
      return;
    }

    scrollToTarget(href);
  };

  const handleNavigation = <T extends HTMLElement>(
    event: MouseEvent<T>,
    href: string,
    onComplete?: () => void,
  ) => {
    event.preventDefault();
    navigateTo(href);
    onComplete?.();
  };

  return {
    pathname,
    navigateTo,
    handleNavigation,
  };
};
